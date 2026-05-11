import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

const requiredFiles = [
  "README.md",
  "WORKSHOP_DEVELOPMENT_PLAN.md",
  "_quarto.yml",
  "index.qmd",
  "setup/install_guide.md",
  "setup/test_installation.R",
  "data/education_intervention.csv",
  "data/teacher_adoption_survey.csv",
  "data/student_engagement_ordinal.csv",
  "notebooks/01_bayesian_reasoning.qmd",
  "notebooks/02_priors.qmd",
  "notebooks/03_bayesian_regression.qmd",
  "notebooks/04_binary_and_ordinal_models.qmd",
  "notebooks/05_hierarchical_models.qmd",
  "notebooks/06_model_checking.qmd",
  "notebooks/07_reporting.qmd",
  "facilitator-guide/facilitator_guide.md",
  "facilitator-guide/participant_analysis_plan.md",
  "reporting-templates/bayesian_reporting_templates.md",
  "slides/workshop_slides.qmd",
];

const missing = requiredFiles.filter((file) => !existsSync(join(process.cwd(), file)));

if (missing.length > 0) {
  console.error("Missing required files:");
  for (const file of missing) console.error(`- ${file}`);
  process.exit(1);
}

const csvExpectations = [
  ["data/education_intervention.csv", 200],
  ["data/teacher_adoption_survey.csv", 150],
  ["data/student_engagement_ordinal.csv", 180],
];

for (const [file, minRows] of csvExpectations) {
  const text = readFileSync(join(process.cwd(), file), "utf8").trim();
  const rows = text.split(/\r?\n/).length - 1;
  if (rows < minRows) {
    console.error(`${file} has ${rows} data rows; expected at least ${minRows}.`);
    process.exit(1);
  }
}

console.log("Workshop package structure validated.");

