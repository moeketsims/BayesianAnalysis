# Data

The datasets in this folder are simulated for teaching. They are designed to feel familiar to social science and education researchers while remaining safe to share and easy to modify.

## Files

- `education_intervention.csv`: main running example for regression and hierarchical modeling.
- `teacher_adoption_survey.csv`: binary outcome example for Bayesian logistic regression.
- `student_engagement_ordinal.csv`: ordinal Likert-style outcome example.

## Regenerating Data

Run:

```powershell
node scripts/generate_synthetic_data.mjs
```

The generator uses a fixed seed, so the output is reproducible.

## Teaching Notes

The data are intentionally clean enough for a two-day workshop. Do not use them to teach data cleaning. The purpose is Bayesian reasoning, not wrangling.

