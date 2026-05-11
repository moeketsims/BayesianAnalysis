# Data Dictionary: education_intervention.csv

Main teaching dataset for regression, prior specification, posterior interpretation, and hierarchical modeling.

## Research Scenario

An education researcher evaluates whether a learning intervention improves student endline achievement after accounting for baseline achievement, socioeconomic status, attendance, and school-level clustering.

## Variables

| Variable | Type | Description |
|---|---:|---|
| `student_id` | string | Unique student identifier. |
| `school_id` | string | School identifier. Used for multilevel modeling. |
| `school_context` | categorical | School context: `urban`, `peri_urban`, or `rural`. |
| `intervention` | binary | 1 if the student received the intervention, 0 otherwise. |
| `gender` | categorical | Student gender in the simulated data. |
| `ses_index` | numeric | Standardized socioeconomic status index. Higher values indicate higher SES. |
| `baseline_score` | numeric | Pre-intervention achievement score from 0 to 100. |
| `attendance_rate` | numeric | Attendance percentage. |
| `endline_score` | numeric | Post-intervention achievement score from 0 to 100. |

## Main Questions

- What is the posterior distribution of the intervention effect?
- What is the probability that the intervention improves scores?
- What is the probability that the intervention effect exceeds a practical threshold, such as 3 points?
- How much do school-level estimates vary?
- How does partial pooling change school-level conclusions?

