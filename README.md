# Bayesian Analysis Workshop

**Bayesian Analysis for Applied Social Science and Education Research** is a two-day hands-on workshop for researchers who already use frequentist methods and want to learn Bayesian analysis as a practical research workflow.

The materials are designed around Quarto notebooks, realistic education and social science examples, and reusable reporting templates.

## Audience

This workshop assumes participants already understand common applied methods:

- p-values and confidence intervals;
- linear regression;
- logistic regression at a basic level;
- interpretation of coefficients;
- applied research design and reporting.

It does not assume prior Bayesian training or Stan programming experience.

## Workshop Package

```text
.
  WORKSHOP_DEVELOPMENT_PLAN.md
  README.md
  _quarto.yml
  index.qmd
  setup/
  data/
  notebooks/
  slides/
  facilitator-guide/
  reporting-templates/
  solutions/
  scripts/
```

## Recommended Delivery Format

Use the Quarto website as the main participant interface:

```powershell
quarto preview
```

Participants can also open individual notebooks from the `notebooks/` folder in RStudio or Positron.

## Main Workflow Taught

```text
research question
  -> likelihood
  -> prior
  -> prior predictive check
  -> model fitting
  -> posterior interpretation
  -> model checking
  -> sensitivity analysis
  -> reporting
```

## Software

Primary stack:

- R
- RStudio or Positron
- Quarto
- `brms`
- `cmdstanr`
- `tidyverse`
- `tidybayes`
- `bayesplot`
- `posterior`
- `loo`

See [setup/install_guide.md](setup/install_guide.md) for participant setup instructions.

## Data

The teaching datasets are simulated but realistic enough for social science and education examples:

- `education_intervention.csv`: student achievement intervention data with school nesting.
- `teacher_adoption_survey.csv`: binary adoption outcome for a policy or intervention.
- `student_engagement_ordinal.csv`: ordinal Likert-style engagement outcome.

Regenerate datasets with:

```powershell
node scripts/generate_synthetic_data.mjs
```

## Suggested Teaching Sequence

Day 1:

1. Bayesian reasoning for frequentist researchers.
2. Priors and prior predictive checks.
3. Bayesian linear regression.

Day 2:

1. Bayesian hierarchical models.
2. Model checking and model comparison.
3. Reporting Bayesian results.
4. Applied planning for participants' own research.

## Current Development Status

This repository contains a first complete source package. The next recommended step is to render the Quarto site on a machine with R and Quarto installed, then pilot Notebook 01 with a small group.

