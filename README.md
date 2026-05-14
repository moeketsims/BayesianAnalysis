# Bayesian Analysis Workshop

**Bayesian Analysis for Applied Social Science and Education Research** is a two-day hands-on workshop for researchers who already use frequentist methods and want to learn Bayesian analysis as a practical research workflow.

The materials are packaged as a Quarto website with participant notebooks, teaching datasets, facilitator notes, slides, and reporting templates.

## Live Site

The rendered workshop is hosted on AWS at:

**<https://d1etjt8tsng564.cloudfront.net/>**

Participants can read the full notebooks online without installing anything. The local installation steps below remain required for running the R chunks interactively.

## Quick Start

Follow these steps to run the workshop materials locally.

### 1. Clone the Repository

**Windows users:** clone to a short path **outside OneDrive**, for example `C:\workshops\` or `$HOME\` (not `$HOME\Documents\` if your Documents folder is synced to OneDrive). OneDrive sync locks and long paths can break Stan model compilation later.

```powershell
git clone https://github.com/moeketsims/BayesianAnalysis.git
cd BayesianAnalysis
```

If you already have the repository locally, move into the folder where you saved or cloned it:

```powershell
cd "path\to\BayesianAnalysis"
```

For example:

```powershell
cd "C:\workshops\BayesianAnalysis"
```

### 2. Install Required Software

Install in this order:

1. **R**: <https://cran.r-project.org/>
2. **RTools (Windows only)**: <https://cran.r-project.org/bin/windows/Rtools/>
   - RTools is the C++ toolchain Stan needs to compile Bayesian models. Without it, model fitting fails on Windows.
   - **The RTools version must match your R version**: RTools43 for R 4.3.x, RTools44 for R 4.4.x, RTools45 for R 4.5.x. Installing the wrong version will not work.
3. **Quarto**: <https://quarto.org/docs/get-started/>
4. **RStudio** or **Positron**: recommended for working with the notebooks.
5. **Node.js**: optional, only needed if you want to regenerate or validate the synthetic datasets.

After installing the above on Windows, close and reopen PowerShell so the new programs are available on your PATH. Then check:

```powershell
Rscript --version
quarto --version
```

### 3. Install R Packages

From the project folder, run:

```powershell
Rscript setup/packages.R
```

This installs the main packages used in the workshop, including:

- `brms`
- `cmdstanr` (installed from the Stan r-universe repository — not on CRAN)
- `tidyverse`
- `tidybayes`
- `bayesplot`
- `posterior`
- `loo`

The script then runs `cmdstanr::install_cmdstan()` to install the underlying Stan toolchain. On Windows this step requires RTools (Step 2). Bayesian modeling with `brms` uses Stan, so the full install can take 10–20 minutes.

### 4. Test the R Setup

Run:

```powershell
Rscript setup/test_installation.R
```

If the test reports missing packages, rerun:

```powershell
Rscript setup/packages.R
```

If CmdStan is missing inside R, run:

```r
cmdstanr::install_cmdstan()
```

More setup detail is available in [setup/install_guide.md](setup/install_guide.md).

### 5. Validate the Workshop Files

If Node.js is installed, run:

```powershell
node scripts/validate_structure.mjs
```

Expected output:

```text
Workshop package structure validated.
```

### 6. Regenerate the Synthetic Datasets, Optional

The datasets are already included. To regenerate them:

```powershell
node scripts/generate_synthetic_data.mjs
```

This rewrites the files in `data/` using a fixed seed.

### 7. Preview the Workshop Website

Run:

```powershell
quarto preview
```

Quarto will start a local server and print a URL such as:

```text
http://localhost:4200
```

Open that URL in your browser.

### 8. Open Individual Notebooks

You can also open the notebooks directly in RStudio or Positron:

```text
notebooks/01_bayesian_reasoning.qmd
notebooks/02_priors.qmd
notebooks/03_bayesian_regression.qmd
notebooks/04_binary_and_ordinal_models.qmd
notebooks/05_hierarchical_models.qmd
notebooks/06_model_checking.qmd
notebooks/07_reporting.qmd
```

## If Something Does Not Work

### `Rscript` is not recognized

R is either not installed or not on your system path. Install R, restart PowerShell, and try again.

### `quarto` is not recognized

Install Quarto from <https://quarto.org/docs/get-started/> and restart PowerShell.

### Stan or CmdStan fails

Stan needs a working C++ toolchain.

On Windows, install RTools for your R version. Then restart R and run:

```r
cmdstanr::install_cmdstan()
```

### Bayesian models take too long

The notebooks can still be used for teaching and interpretation. The facilitator should render the notebooks in advance and keep expected outputs available.

## Repository Structure

```text
.
  README.md
  WORKSHOP_DEVELOPMENT_PLAN.md
  _quarto.yml
  index.qmd
  setup/
    install_guide.md
    packages.R
    test_installation.R
  data/
    education_intervention.csv
    teacher_adoption_survey.csv
    student_engagement_ordinal.csv
    data_dictionary_*.md
  notebooks/
    00_notebook_template.qmd
    01_bayesian_reasoning.qmd
    02_priors.qmd
    03_bayesian_regression.qmd
    04_binary_and_ordinal_models.qmd
    05_hierarchical_models.qmd
    06_model_checking.qmd
    07_reporting.qmd
  facilitator-guide/
  reporting-templates/
  slides/
  solutions/
  scripts/
```

## Audience

This workshop assumes participants already understand common applied methods:

- p-values and confidence intervals;
- linear regression;
- logistic regression at a basic level;
- interpretation of coefficients;
- applied research design and reporting.

It does not assume prior Bayesian training or Stan programming experience.

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

## Suggested Teaching Sequence

Day 1:

1. Bayesian reasoning for frequentist researchers.
2. Priors and prior predictive checks.
3. Bayesian linear regression.

Day 2:

1. Bayesian hierarchical models.
2. Model checking and model comparison.
3. Binary and ordinal model extensions.
4. Reporting Bayesian results.
5. Applied planning for participants' own research.

## Main Materials

- [Workshop development plan](WORKSHOP_DEVELOPMENT_PLAN.md)
- [Setup guide](setup/install_guide.md)
- [Participant notebooks](notebooks/)
- [Facilitator guide](facilitator-guide/facilitator_guide.md)
- [Participant analysis plan](facilitator-guide/participant_analysis_plan.md)
- [Reporting templates](reporting-templates/bayesian_reporting_templates.md)
- [Slides](slides/workshop_slides.qmd)

## Deployment

The site is hosted on AWS: a private S3 bucket (`bayesian-analysis-workshop-208509455458` in `us-east-1`) fronted by a CloudFront distribution (`EOET36EGUHLUZ`). The bucket policy grants read access only to that distribution via Origin Access Control, so the bucket itself stays unreachable.

### Re-publish after edits

From the project root:

```bash
scripts/deploy.sh
```

The script renders the Quarto site, syncs `_site/` to S3, and invalidates CloudFront so visitors see the latest version within a few minutes. Pass `--skip-render` to publish without re-rendering.

Required: `quarto`, `aws` CLI configured under the `default` profile, and R with the workshop packages installed.

Costs at workshop traffic volumes sit under $1/month: CloudFront's free tier covers the first 1 TB/month of egress, and S3 storage at 11 MiB is negligible.

## Development Status

This repository contains the first complete source package and is live online via the URL above. The next recommended step is to pilot Notebook 01 with a small group.
