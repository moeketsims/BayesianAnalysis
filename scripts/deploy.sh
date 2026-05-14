#!/usr/bin/env bash
# Deploy the Bayesian Analysis Workshop site to AWS.
# Renders the Quarto site, syncs _site/ to S3, and invalidates the
# CloudFront distribution so visitors see the latest version.
#
# Usage: scripts/deploy.sh [--skip-render]
#
# Requires: quarto, aws CLI (profile "default"), R with required packages.

set -euo pipefail

BUCKET="bayesian-analysis-workshop-208509455458"
DISTRIBUTION_ID="EOET36EGUHLUZ"
PROFILE="default"
REGION="us-east-1"

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(cd "${SCRIPT_DIR}/.." && pwd)"
cd "${PROJECT_ROOT}"

SKIP_RENDER=0
for arg in "$@"; do
  if [[ "${arg}" == "--skip-render" ]]; then
    SKIP_RENDER=1
  fi
done

if [[ "${SKIP_RENDER}" -eq 0 ]]; then
  echo "==> Rendering Quarto site"
  quarto render
else
  echo "==> Skipping render (--skip-render)"
fi

if [[ ! -d "_site" ]]; then
  echo "ERROR: _site/ does not exist. Run 'quarto render' first."
  exit 1
fi

echo "==> Syncing _site/ to s3://${BUCKET}/"
aws s3 sync _site/ "s3://${BUCKET}/" \
  --profile "${PROFILE}" \
  --region "${REGION}" \
  --delete \
  --exclude "*.DS_Store"

echo "==> Invalidating CloudFront distribution ${DISTRIBUTION_ID}"
INVALIDATION_ID=$(aws cloudfront create-invalidation \
  --distribution-id "${DISTRIBUTION_ID}" \
  --paths "/*" \
  --profile "${PROFILE}" \
  --query "Invalidation.Id" \
  --output text)

echo "    invalidation id: ${INVALIDATION_ID}"

DOMAIN=$(aws cloudfront get-distribution \
  --id "${DISTRIBUTION_ID}" \
  --profile "${PROFILE}" \
  --query "Distribution.DomainName" \
  --output text)

echo
echo "Deployed. Live URL: https://${DOMAIN}/"
echo "CloudFront invalidation typically completes in 1-3 minutes."
