required_packages <- c(
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
)

missing_packages <- required_packages[!vapply(required_packages, requireNamespace, logical(1), quietly = TRUE)]

if (length(missing_packages) > 0) {
  stop(
    "Missing packages: ",
    paste(missing_packages, collapse = ", "),
    "\nInstall them before the workshop."
  )
}

message("All required R packages are installed.")

if (requireNamespace("cmdstanr", quietly = TRUE)) {
  message("CmdStan version:")
  print(cmdstanr::cmdstan_version())
}

message("Setup check complete.")

