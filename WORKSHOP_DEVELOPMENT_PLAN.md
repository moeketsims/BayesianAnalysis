# Bayesian Analysis Workshop Development Plan

## Working Title

**Bayesian Analysis for Applied Social Science and Education Research**

Two-day hands-on workshop for researchers who already use frequentist methods and want to develop a deep, practical understanding of Bayesian analysis.

## Core Positioning

This workshop is not an introductory statistics course. It assumes participants already understand common frequentist tools such as t-tests, confidence intervals, p-values, linear regression, logistic regression, and possibly multilevel models.

The workshop should therefore focus on the conceptual and practical shift from frequentist inference to Bayesian model-based reasoning:

- from point estimates to posterior distributions;
- from p-values to probabilistic claims about parameters and effects;
- from fixed unknown parameters to uncertainty about quantities of interest;
- from generic null hypothesis testing to model-based evidence and prediction;
- from implicit assumptions to explicit priors and sensitivity analysis;
- from one-off significance decisions to cumulative evidence and transparent uncertainty.

## Intended Audience

Primary audience:

- social science researchers;
- education researchers;
- postgraduate students;
- lecturers and academic staff;
- applied researchers who already conduct quantitative research;
- policy or evaluation researchers familiar with regression-based analysis.

Assumed background:

- basic probability and distributions;
- common frequentist inference;
- linear regression;
- interpretation of regression coefficients;
- basic data handling in R or willingness to follow R code;
- some familiarity with research design and empirical reporting.

Not assumed:

- prior Bayesian training;
- experience with Stan;
- advanced mathematical statistics;
- advanced programming ability.

## Overall Learning Outcomes

By the end of the workshop, participants should be able to:

1. Explain the logic of Bayesian inference using likelihood, prior, and posterior.
2. Contrast frequentist and Bayesian interpretations of uncertainty.
3. Translate familiar social science and education research questions into Bayesian models.
4. Specify weakly informative, skeptical, and substantively informed priors.
5. Use prior predictive checks to assess whether priors are plausible.
6. Fit Bayesian regression models using R and `brms`.
7. Interpret posterior estimates, credible intervals, and posterior probabilities.
8. Evaluate model fit using posterior predictive checks.
9. Compare models using predictive criteria such as LOO where appropriate.
10. Fit and interpret basic Bayesian hierarchical models.
11. Conduct simple prior sensitivity analyses.
12. Write Bayesian methods and results paragraphs suitable for applied research reports.

## Packaging Strategy

The workshop should be developed as a reusable teaching package, not only as lecture notes.

Core package:

```text
bayesian-workshop/
  README.md
  setup/
  data/
  notebooks/
  slides/
  facilitator-guide/
  solutions/
  reporting-templates/
```

Recommended format:

- Quarto notebooks (`.qmd`) as the main participant-facing learning material.
- A Quarto website as the polished delivery format.
- R scripts as fallback materials for participants who prefer scripts.
- Short slides for framing and transitions.
- A separate facilitator guide with timing, teaching notes, answers, and troubleshooting.

The notebooks should be the backbone because Bayesian analysis is best learned through the complete workflow:

```text
research question -> model -> prior -> prior predictive check -> fitting -> posterior interpretation -> model checking -> reporting
```

## Recommended Software Stack

Primary:

- R
- RStudio or Positron
- Quarto
- `brms`
- Stan backend through `cmdstanr` if feasible
- `tidyverse`
- `tidybayes`
- `bayesplot`
- `posterior`
- `loo`
- `parameters` or `easystats` packages where useful

Possible support packages:

- `rstanarm` for simpler fallback examples;
- `lme4` for frequentist multilevel comparison;
- `broom` and `broom.mixed` for familiar tidy outputs;
- `ggplot2` for visualization;
- `here` for project paths.

Software principle:

Use `brms` as the main teaching interface because its formula syntax is close to familiar regression syntax while still exposing the full Bayesian workflow.

Avoid teaching raw Stan code in the main workshop. Mention it as an advanced route.

## Pedagogical Design

Each module should follow the same teaching pattern:

```text
1. Research scenario
2. Familiar frequentist framing
3. Bayesian reframing
4. Model specification
5. Prior specification
6. Prior predictive check
7. Model fitting
8. Posterior interpretation
9. Model checking
10. Reporting
11. Practice task
12. Reflection and discussion
```

This keeps theory deep but anchored in applied research practice.

## Two-Day Workshop Structure

### Day 1 Theme

**Bayesian reasoning and the core workflow**

Day 1 should build deep theoretical understanding, but through applied examples and visual intuition rather than abstract derivations alone.

### Day 1 Schedule

#### Session 1: Why Bayesian Analysis for Applied Researchers?

Estimated time: 60-75 minutes

Purpose:

Establish why Bayesian analysis matters for researchers who already know frequentist methods.

Key ideas:

- what frequentist methods answer well;
- where p-values and confidence intervals are often misunderstood;
- why "non-significant" does not mean "no effect";
- why uncertainty should be expressed directly;
- how Bayesian analysis supports cumulative evidence;
- why Bayesian models are useful for small samples, hierarchical data, and decision thresholds.

Hands-on activity:

Participants inspect a familiar frequentist regression output and rewrite the research interpretation as questions they wish they could answer directly, such as:

- What is the probability the intervention had a positive effect?
- What is the probability the effect is larger than a practical threshold?
- How uncertain are school-level effects?
- How much do conclusions change under skeptical assumptions?

Output:

Participants produce a list of Bayesian-style research questions.

#### Session 2: Bayes' Rule as a Learning Model

Estimated time: 90 minutes

Purpose:

Build the central theoretical engine of Bayesian inference.

Key ideas:

- likelihood;
- prior;
- posterior;
- evidence as updating;
- posterior proportional to likelihood times prior;
- parameters as uncertain quantities;
- posterior distributions as the object of inference.

Hands-on activity:

Use a simple binomial example from education or social science, such as:

- proportion of learners passing an assessment;
- proportion of teachers adopting an intervention;
- survey proportion supporting a policy.

Participants compare posterior results under:

- weak prior;
- skeptical prior;
- optimistic prior;
- evidence-informed prior.

Output:

Participants produce plots of prior, likelihood, and posterior distributions and write a short interpretation.

#### Session 3: Priors Without Fear

Estimated time: 120 minutes

Purpose:

Develop practical and defensible prior specification.

Key ideas:

- priors are assumptions, not automatically bias;
- weakly informative priors;
- skeptical priors;
- regularizing priors;
- evidence-informed priors;
- prior predictive checks;
- prior sensitivity analysis;
- transparency in reporting priors.

Hands-on activity:

Participants define priors for an intervention effect in test-score points. They run prior predictive checks to see what kinds of data the priors imply.

Output:

Participants complete a prior justification table:

```text
Parameter | Prior | Reason | Prior predictive implication | Concern
```

#### Session 4: First Bayesian Regression

Estimated time: 150 minutes

Purpose:

Connect Bayesian theory to familiar regression.

Example model:

```text
student_score = intervention + baseline_score + socioeconomic_status
```

Key ideas:

- likelihood for continuous outcomes;
- priors for intercepts, slopes, and residual variation;
- posterior mean;
- credible interval;
- posterior probability of a positive effect;
- probability of exceeding a practical threshold;
- comparison with frequentist regression.

Hands-on activity:

Participants fit the same model using frequentist regression and Bayesian regression, then compare interpretation.

Output:

Participants write one frequentist results paragraph and one Bayesian results paragraph for the same research question.

### Day 1 End-of-Day Consolidation

Estimated time: 30 minutes

Discussion prompts:

- What does Bayesian analysis make easier to say?
- What assumptions become more visible?
- What remains difficult or uncomfortable?
- Where could this approach improve participants' own research?

Output:

Each participant identifies one current or future research question that could be analyzed using a Bayesian approach.

## Day 2 Theme

**Applied Bayesian modeling, checking, comparison, and reporting**

Day 2 should move from the core workflow to models and reporting practices that matter in applied social science and education research.

### Day 2 Schedule

#### Session 5: Bayesian Hierarchical Models

Estimated time: 150 minutes

Purpose:

Introduce Bayesian multilevel modeling through education and social science data structures.

Key ideas:

- nested data;
- complete pooling;
- no pooling;
- partial pooling;
- shrinkage;
- group-level uncertainty;
- varying intercepts;
- varying slopes if time allows;
- why Bayesian hierarchical models are especially useful for sparse groups.

Example:

```text
students nested within schools
student_score = intervention + baseline_score + (1 | school)
```

Hands-on activity:

Participants compare:

- separate school estimates;
- pooled regression;
- hierarchical Bayesian model.

Output:

Participants create a plot showing school-level estimates with uncertainty and shrinkage.

#### Session 6: Model Checking and Diagnostics

Estimated time: 120 minutes

Purpose:

Teach participants how to decide whether a Bayesian model is computationally and substantively credible.

Key ideas:

- convergence;
- R-hat;
- effective sample size;
- trace plots;
- divergent transitions;
- posterior predictive checks;
- checking whether simulated data look like observed data;
- residual-style thinking in Bayesian models.

Hands-on activity:

Participants inspect a fitted model and diagnose:

- convergence problems;
- weak model fit;
- implausible posterior predictions.

Output:

Participants complete a model-checking checklist.

#### Session 7: Model Comparison and Practical Decisions

Estimated time: 90 minutes

Purpose:

Move from "is it significant?" to "which model predicts and explains better, and what decision follows?"

Key ideas:

- model comparison as predictive evaluation;
- LOO;
- expected log predictive density;
- practical significance;
- probability of exceeding a meaningful threshold;
- regions of practical equivalence where appropriate;
- decision-relevant summaries.

Hands-on activity:

Participants compare two or three models:

- simple intervention model;
- adjusted model;
- hierarchical model.

Output:

Participants write a short model comparison conclusion that separates statistical evidence, predictive performance, and substantive interpretation.

#### Session 8: Reporting Bayesian Results

Estimated time: 120 minutes

Purpose:

Help participants communicate Bayesian analysis in reports, theses, journal articles, and policy-facing work.

Key ideas:

- reporting priors;
- reporting posterior estimates;
- credible intervals;
- posterior probabilities;
- practical thresholds;
- sensitivity analyses;
- explaining Bayesian analysis to frequentist audiences;
- methods paragraph structure;
- results paragraph structure;
- tables and plots.

Hands-on activity:

Participants produce a complete short Bayesian results section from a fitted model.

Output:

Each participant leaves with:

- one methods paragraph;
- one results paragraph;
- one posterior plot;
- one prior sensitivity statement.

### Day 2 Closing Session

Estimated time: 30-45 minutes

Purpose:

Consolidate the reusable workflow and connect the workshop to participants' own research.

Final workflow:

```text
1. State the substantive question.
2. Identify the outcome and data structure.
3. Choose a likelihood.
4. Specify priors.
5. Run prior predictive checks.
6. Fit the model.
7. Check computation.
8. Check model fit.
9. Compare models where useful.
10. Conduct sensitivity analysis.
11. Communicate posterior findings.
```

Output:

Participants complete a Bayesian analysis planning template for one of their own studies.

## Proposed Notebook Set

### Notebook 01: Bayesian Reasoning for Frequentist Researchers

Purpose:

Introduce the conceptual shift.

Contents:

- familiar frequentist output;
- common interpretation problems;
- Bayesian reframing;
- likelihood, prior, posterior;
- simple binomial updating;
- posterior probability statements.

Participant output:

- posterior plot;
- short Bayesian interpretation.

### Notebook 02: Priors and Prior Predictive Checks

Purpose:

Teach prior specification as transparent modeling.

Contents:

- weakly informative priors;
- skeptical priors;
- informed priors;
- prior predictive simulation;
- prior sensitivity;
- prior reporting.

Participant output:

- prior justification table;
- prior predictive plot;
- sensitivity comparison.

### Notebook 03: Bayesian Linear Regression

Purpose:

Translate familiar regression into Bayesian regression.

Contents:

- frequentist linear model;
- Bayesian linear model using `brms`;
- priors for coefficients and residual standard deviation;
- posterior summaries;
- credible intervals;
- posterior probability of positive and practically meaningful effects;
- comparison of interpretations.

Participant output:

- model fit;
- posterior coefficient plot;
- Bayesian results paragraph.

### Notebook 04: Bayesian Logistic or Ordinal Models

Purpose:

Extend beyond continuous outcomes common in social science research.

Possible options:

- binary outcome: dropout, adoption, completion;
- ordinal outcome: Likert response, satisfaction, perceived usefulness.

Recommendation:

Include this as optional or advanced material unless time allows.

Participant output:

- interpretation of posterior odds ratios or category probabilities.

### Notebook 05: Bayesian Hierarchical Models

Purpose:

Teach partial pooling and multilevel uncertainty.

Contents:

- education nesting structure;
- no pooling;
- complete pooling;
- partial pooling;
- varying intercept model;
- optional varying slope model;
- shrinkage visualization.

Participant output:

- group-level posterior plot;
- interpretation of shrinkage.

### Notebook 06: Model Checking and Model Comparison

Purpose:

Teach the quality-control workflow.

Contents:

- R-hat;
- effective sample size;
- trace plots;
- posterior predictive checks;
- model comparison with LOO;
- diagnosing model failure.

Participant output:

- model-checking checklist;
- model comparison paragraph.

### Notebook 07: Reporting Bayesian Analysis

Purpose:

Convert analysis into research communication.

Contents:

- methods templates;
- results templates;
- prior reporting;
- posterior summaries;
- practical thresholds;
- sensitivity statements;
- reviewer-friendly explanations.

Participant output:

- short methods section;
- short results section;
- one polished figure.

## Datasets and Running Examples

The workshop should use realistic but manageable datasets.

### Dataset 1: Intervention and Achievement

Structure:

- student ID;
- school ID;
- intervention group;
- baseline score;
- endline score;
- socioeconomic status;
- gender or demographic variable.

Used for:

- frequentist comparison;
- Bayesian linear regression;
- posterior interpretation;
- hierarchical model.

### Dataset 2: Survey Proportion or Binary Outcome

Structure:

- respondent ID;
- response outcome;
- group or condition;
- demographic covariates.

Used for:

- binomial updating;
- logistic regression;
- probability statements.

### Dataset 3: Likert or Ordinal Outcome

Structure:

- respondent ID;
- ordinal response;
- treatment/exposure;
- covariates.

Used for:

- optional ordinal model;
- advanced extension;
- discussion of social science measurement.

Recommendation:

Use simulated-but-realistic data for teaching. This avoids confidentiality concerns and allows the examples to be designed around the learning goals.

## Participant Materials

### README

Purpose:

Orientation page.

Contents:

- workshop purpose;
- prerequisites;
- software setup;
- folder structure;
- how to run notebooks;
- troubleshooting links;
- what to do before the workshop.

### Setup Guide

Contents:

- install R;
- install RStudio or Positron;
- install Quarto;
- install CmdStan;
- install packages;
- run test script;
- common Windows/macOS/Linux problems.

### Quarto Notebooks

Participant-facing main materials.

Each notebook should include:

- concise explanation;
- code chunks;
- exercises;
- interpretation prompts;
- reporting prompts;
- takeaway boxes.

### Slides

Purpose:

Live delivery support only.

Contents:

- framing concepts;
- diagrams;
- key contrasts;
- instructions for exercises;
- discussion prompts.

Slides should not duplicate the full notebooks.

### Reporting Templates

Reusable templates:

- prior reporting template;
- methods paragraph template;
- results paragraph template;
- sensitivity analysis statement;
- posterior probability reporting examples;
- reviewer response language.

## Facilitator Guide

The facilitator guide should be separate from participant notebooks.

Contents:

- full timing plan;
- session objectives;
- teaching notes;
- common misconceptions;
- suggested explanations;
- exercise answers;
- expected outputs;
- code troubleshooting;
- optional simplifications;
- advanced extensions;
- where to pause for discussion;
- what to skip if the workshop falls behind.

Common misconceptions to address:

- "The prior is just subjective bias."
- "A 95% credible interval is the same as a confidence interval."
- "Bayesian analysis removes the need for assumptions."
- "A posterior probability is the probability the hypothesis is true in a simple absolute sense."
- "Non-significant frequentist results are automatically strong evidence for no effect."
- "More complex Bayesian models are always better."

## Assessment and Learning Checks

Use formative checks rather than formal exams.

Suggested checks:

1. Interpret a credible interval correctly.
2. Explain what a prior predictive check is testing.
3. Identify whether a prior is too wide or too narrow for a context.
4. Translate a p-value-style claim into a Bayesian claim.
5. Interpret a posterior probability above a practical threshold.
6. Diagnose a simple posterior predictive check.
7. Write a short methods/results paragraph.

## Development Phases

### Phase 1: Foundation Plan and Project Skeleton

Deliverables:

- comprehensive development plan;
- project folder structure;
- README draft;
- notebook template;
- setup guide outline.

Completion criteria:

- the workshop product architecture is clear;
- every future document has a defined role;
- the two-day flow is stable.

### Phase 2: Dataset Design

Deliverables:

- simulated education intervention dataset;
- simulated binary/survey dataset;
- optional ordinal dataset;
- data dictionary for each dataset;
- data generation script.

Completion criteria:

- datasets support all planned examples;
- variables are realistic enough for social science and education researchers;
- examples are simple enough for teaching but not artificial in interpretation.

### Phase 3: Core Notebook Prototype

Deliverable:

- complete first notebook: Bayesian reasoning and binomial updating.

Completion criteria:

- includes explanation, code, exercises, plots, interpretation prompts, and outputs;
- establishes the style and structure for all other notebooks.

### Phase 4: Regression and Priors Notebooks

Deliverables:

- priors and prior predictive checks notebook;
- Bayesian linear regression notebook;
- completed solution versions.

Completion criteria:

- participants can run full prior-to-posterior workflow;
- practical threshold interpretation is included;
- frequentist comparison is included.

### Phase 5: Hierarchical Models and Model Checking

Deliverables:

- hierarchical model notebook;
- model checking and comparison notebook;
- diagnostic checklist.

Completion criteria:

- partial pooling is visible and interpretable;
- posterior predictive checks are used meaningfully;
- model comparison is explained without overclaiming.

### Phase 6: Reporting and Facilitator Materials

Deliverables:

- reporting notebook;
- reporting templates;
- facilitator guide;
- exercise answer key.

Completion criteria:

- participants can produce research-ready language;
- facilitator can run the workshop without relying on memory.

### Phase 7: Slides and Quarto Website

Deliverables:

- slide deck;
- Quarto website;
- rendered HTML/PDF participant materials.

Completion criteria:

- all participant-facing materials are easy to navigate;
- slides support live teaching without replacing notebooks.

### Phase 8: Pilot and Revision

Deliverables:

- pilot feedback notes;
- revised notebooks;
- revised setup guide;
- revised timing plan.

Completion criteria:

- at least one person has run the setup process;
- at least one person has completed the first practical;
- timing has been tested against actual delivery.

## Immediate Next Steps

Recommended next development sequence:

1. Create the project skeleton.
2. Draft the README and setup guide.
3. Create the notebook template.
4. Design the main simulated education dataset.
5. Build Notebook 01 as the prototype.

The next concrete task should be:

**Create the project skeleton, README, setup guide outline, and notebook template.**

After that, the main technical task is:

**Create the simulated education dataset and data dictionary.**

## Open Design Decisions

These should be resolved before writing all notebooks:

1. Should the main software interface be `brms` only, or should `rstanarm` be included as a lower-friction backup?
2. Should participants install CmdStan before the workshop, or should the workshop provide precomputed model objects as fallback?
3. Should the optional ordinal model be included in the two-day flow or kept as bonus material?
4. Should the workshop use one running education dataset throughout, or multiple smaller datasets?
5. Should the final participant product be a rendered Quarto website, downloadable notebooks, or both?
6. How much mathematical derivation should appear in the notebooks versus slides?

## Recommended Decisions

Initial recommendations:

1. Use `brms` as the main interface.
2. Use CmdStan as the preferred backend, but provide precomputed fitted model objects as fallback.
3. Use one main education intervention dataset throughout, with smaller examples only where needed.
4. Keep ordinal modeling as bonus material unless the audience specifically needs it.
5. Build both a Quarto website and downloadable notebooks.
6. Include enough mathematics to make the logic rigorous, but keep derivations short and immediately connected to examples.

