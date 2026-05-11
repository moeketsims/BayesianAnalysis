# Data Dictionary: teacher_adoption_survey.csv

Binary outcome dataset for Bayesian logistic regression.

## Research Scenario

A researcher studies whether teachers adopt a new instructional practice. Adoption may depend on years of experience, prior training, school support, and province.

## Variables

| Variable | Type | Description |
|---|---:|---|
| `teacher_id` | string | Unique teacher identifier. |
| `province` | categorical | Province code: `A`, `B`, `C`, or `D`. |
| `years_experience` | integer | Years of teaching experience. |
| `prior_training` | binary | 1 if teacher previously received related training, 0 otherwise. |
| `school_support` | integer | Perceived school support from 1 to 5. |
| `adopted` | binary | 1 if teacher adopted the practice, 0 otherwise. |

## Main Questions

- How does prior training change the probability of adoption?
- How should log-odds, odds ratios, and predicted probabilities be interpreted?
- What is the posterior probability that training has a positive association with adoption?

