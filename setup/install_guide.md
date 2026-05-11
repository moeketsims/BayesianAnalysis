# Setup Guide

This guide is for participants. Complete it before the workshop if possible.

## Required Software

Install:

1. R, version 4.3 or later.
2. RStudio Desktop or Positron.
3. Quarto.
4. CmdStan through the R package `cmdstanr`.

## Install R Packages

Open R and run:

```r
install.packages(c(
  "tidyverse",
  "brms",
  "cmdstanr",
  "tidybayes",
  "bayesplot",
  "posterior",
  "loo",
  "broom",
  "broom.mixed",
  "lme4",
  "here"
))
```

Install CmdStan:

```r
cmdstanr::install_cmdstan()
```

Check the installation:

```r
source("setup/test_installation.R")
```

## Common Installation Problems

### CmdStan is missing

Run:

```r
cmdstanr::install_cmdstan()
```

Then restart R.

### C++ toolchain is missing

Bayesian models fitted with Stan need a working C++ toolchain.

On Windows, install RTools for your R version.

On macOS, install Xcode command line tools:

```bash
xcode-select --install
```

On Linux, install build tools through your package manager.

### brms installs but models do not run

Check whether CmdStan is available:

```r
cmdstanr::cmdstan_version()
```

If that fails, reinstall CmdStan:

```r
cmdstanr::install_cmdstan()
```

## Fallback Plan

If model fitting is slow or installation fails during the workshop:

- follow the notebook explanations and code;
- use the printed or rendered expected outputs;
- work through interpretation exercises;
- fit models later after setup is resolved.

The facilitator should keep pre-rendered outputs available for live teaching.

