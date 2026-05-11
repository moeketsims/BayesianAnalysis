# Data Dictionary: student_engagement_ordinal.csv

Ordinal outcome dataset for optional Bayesian cumulative models.

## Research Scenario

Students report engagement on a five-point Likert scale. A researcher asks whether an intervention is associated with higher engagement after accounting for baseline motivation and teacher feedback.

## Variables

| Variable | Type | Description |
|---|---:|---|
| `respondent_id` | string | Unique respondent identifier. |
| `intervention` | binary | 1 if student received the intervention, 0 otherwise. |
| `baseline_motivation` | integer | Baseline motivation rating from 1 to 5. |
| `teacher_feedback` | integer | Perceived teacher feedback rating from 1 to 5. |
| `engagement` | ordinal integer | Engagement response from 1 to 5. |

## Main Questions

- How can Bayesian models handle ordinal outcomes without treating Likert responses as continuous by default?
- How can category probabilities be interpreted?
- How can posterior predictions communicate expected shifts in response categories?

