# Participant Bayesian Analysis Plan

Use this template for one current or planned study.

## Research Question

What substantive question are you trying to answer?

## Outcome

What is the outcome variable?

What type of outcome is it?

- continuous;
- binary;
- count;
- ordinal;
- categorical;
- time-to-event;
- other.

## Data Structure

Are observations independent, or are they clustered?

Examples:

- students within schools;
- teachers within districts;
- repeated observations within people;
- countries over time;
- classrooms within schools.

## Candidate Model

Write the model in words:

```text
Outcome is predicted by ...
```

Write the model formula if possible:

```r
outcome ~ predictor_1 + predictor_2 + (1 | group)
```

## Main Parameter

Which coefficient or quantity answers the main research question?

## Prior

What prior would you use for the main parameter?

```text
Distribution:
Reason:
Implausible values ruled out:
Prior predictive concern:
```

## Practical Threshold

What effect size would be large enough to matter in practice?

## Model Checking

Which checks will you use?

- R-hat and effective sample size;
- trace plots;
- posterior predictive checks;
- prior sensitivity;
- model comparison;
- subgroup or group-level checks.

## Reporting Sentence

Draft one Bayesian result sentence:

> Given the data and model assumptions, ...

