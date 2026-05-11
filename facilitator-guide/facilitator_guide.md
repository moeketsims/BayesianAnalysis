# Facilitator Guide

## Workshop Purpose

This workshop is for applied social science and education researchers who already use frequentist methods. The purpose is to help them reason, model, check, and report Bayesian analyses without spending time on generic introductory statistics.

The workshop should be intellectually serious but highly practical. Participants should repeatedly move from concept to code to interpretation to reporting.

## Teaching Stance

Emphasize these points throughout:

- Bayesian analysis is a modeling workflow, not only a different test.
- Priors are assumptions that should be explicit, justified, and checked.
- The posterior distribution is the main object of inference.
- Credible intervals are not the same as confidence intervals.
- Practical significance should be defined before interpreting results.
- Model checking is part of the analysis, not an optional appendix.
- Bayesian results should be reported in clear applied language.

Avoid spending much time on:

- basic probability definitions;
- generic regression teaching;
- hand derivations beyond what is needed for insight;
- raw Stan code;
- philosophical debates that do not improve the analysis.

## Two-Day Timing Plan

### Day 1: Bayesian Reasoning and Core Workflow

| Time | Session | Material | Output |
|---:|---|---|---|
| 09:00-09:30 | Welcome and orientation | README and index | Participant goals |
| 09:30-10:45 | Why Bayesian analysis? | Notebook 01 | Bayesian research questions |
| 10:45-11:00 | Break | | |
| 11:00-12:30 | Bayes' rule as learning | Notebook 01 | Binomial posterior plot |
| 12:30-13:30 | Lunch | | |
| 13:30-15:15 | Priors without fear | Notebook 02 | Prior justification table |
| 15:15-15:30 | Break | | |
| 15:30-16:45 | First Bayesian regression | Notebook 03 | Posterior result paragraph |
| 16:45-17:00 | Consolidation | Discussion | Personal application idea |

### Day 2: Applied Models, Checking, and Reporting

| Time | Session | Material | Output |
|---:|---|---|---|
| 09:00-09:15 | Recap | Day 1 questions | Shared concerns |
| 09:15-11:00 | Hierarchical models | Notebook 05 | School effects plot |
| 11:00-11:15 | Break | | |
| 11:15-12:30 | Model checking | Notebook 06 | Diagnostic checklist |
| 12:30-13:30 | Lunch | | |
| 13:30-14:30 | Binary and ordinal extensions | Notebook 04 | Probability interpretation |
| 14:30-15:45 | Reporting Bayesian results | Notebook 07 | Methods/results paragraph |
| 15:45-16:00 | Break | | |
| 16:00-16:45 | Participant analysis planning | Template | One-page analysis plan |
| 16:45-17:00 | Wrap-up | Discussion | Next steps |

## Module Guidance

### Notebook 01: Bayesian Reasoning

Main message:

Bayesian analysis updates uncertainty. The posterior distribution is the answer.

Common sticking points:

- Participants may try to interpret the posterior as a p-value.
- Participants may think the prior is arbitrary.
- Participants may struggle with the confidence interval versus credible interval contrast.

Facilitator moves:

- Keep returning to "given the data and model assumptions."
- Ask participants what they actually want to know in their research.
- Use the binomial example because the math is transparent.

Checkpoint question:

> What is the posterior probability that the benchmark probability exceeds 0.60?

Good answer:

> It is the probability, under the model and prior, that the unknown benchmark probability is greater than 0.60 after observing the data.

### Notebook 02: Priors

Main message:

Priors should be chosen on the scale of the research question and checked through prior predictive simulation.

Common sticking points:

- "Priors are subjective bias."
- "Weak priors are always safest."
- "A prior centered at zero means we believe there is no effect."

Facilitator moves:

- Ask what values would be implausible in the real research context.
- Make participants explain priors in substantive units.
- Use the test-score scale to make priors concrete.

Checkpoint question:

> What would make a Normal(0, 50) prior for a test-score effect problematic?

Good answer:

> It gives substantial plausibility to effects so large that they are unrealistic for the outcome scale and intervention context.

### Notebook 03: Bayesian Regression

Main message:

The model structure may look familiar, but the inferential output changes.

Common sticking points:

- Participants may still ask whether the coefficient is "significant."
- Participants may overinterpret a credible interval that includes zero.
- Participants may ignore the practical threshold.

Facilitator moves:

- Keep asking: "What probability statement can we make?"
- Use `Pr(effect > 3)` to shift attention to practical meaning.
- Compare frequentist and Bayesian paragraphs side by side.

### Notebook 04: Binary and Ordinal Models

Main message:

Choose the likelihood for the outcome. Communicate results using predicted probabilities where possible.

Common sticking points:

- Log-odds are hard to interpret.
- Ordinal models may feel advanced.

Facilitator moves:

- Treat ordinal models as an extension, not a required mastery item.
- Emphasize predicted probabilities over raw coefficients.

### Notebook 05: Hierarchical Models

Main message:

Partial pooling stabilizes group estimates and represents group-level uncertainty.

Common sticking points:

- Participants may confuse school effects with school rankings.
- Participants may assume shrinkage is a mistake.
- Participants may want to identify "best" and "worst" schools.

Facilitator moves:

- Explain that noisy estimates shrink more because they contain less information.
- Discourage league-table thinking unless uncertainty is shown.
- Use nested education data to make the need obvious.

### Notebook 06: Model Checking

Main message:

A fitted model is not automatically a credible model.

Common sticking points:

- Participants may ignore sampler warnings.
- Participants may want one single model-fit number.
- Participants may interpret LOO as proof that a model is true.

Facilitator moves:

- Separate computational diagnostics from substantive adequacy.
- Use posterior predictive checks as visual model criticism.
- Explain LOO as predictive comparison, not theoretical validation.

### Notebook 07: Reporting

Main message:

Bayesian reporting should make uncertainty clearer and more useful.

Common sticking points:

- Participants may write too much technical detail.
- Participants may omit priors.
- Participants may use "significant" out of habit.

Facilitator moves:

- Ask whether the sentence answers the research question.
- Require one prior sentence, one posterior sentence, and one practical threshold sentence.
- Translate results into policy or practice language.

## Exercise Answer Guidance

The exact numerical answers depend on model runs, but strong answers have these qualities:

- They state the model and assumptions.
- They interpret parameters on the correct scale.
- They distinguish statistical uncertainty from practical meaning.
- They report posterior probabilities when useful.
- They avoid binary significant/not significant language.
- They mention model checking before making conclusions.

## Software Fallback Plan

Bayesian software setup can fail, especially because Stan needs a C++ toolchain.

Prepare these fallbacks:

1. Render notebooks in advance with expected output.
2. Keep screenshots of posterior plots.
3. Have participants run non-Stan chunks first.
4. Pair participants with working installations.
5. If needed, shift from fitting to interpretation using supplied outputs.

Do not let installation problems consume the conceptual workshop.

## Minimum Viable Live Run

If time is short, prioritize:

1. Notebook 01: Bayesian reasoning.
2. Notebook 02: priors and prior predictive checks.
3. Notebook 03: Bayesian regression.
4. Notebook 05: hierarchical models.
5. Notebook 07: reporting.

Notebook 04 can become bonus material. Notebook 06 can be integrated into the model-fitting sessions if necessary.

## Discussion Prompts

Use these throughout:

- What would you have reported using frequentist methods?
- What does the Bayesian result let you say more directly?
- What prior would a skeptical reviewer accept?
- What result would be practically meaningful in this field?
- Does the model check support the claim you want to make?
- How would you explain this to a non-statistical audience?

## Final Participant Task

Ask each participant to draft a one-page Bayesian analysis plan:

```text
Research question:
Outcome:
Predictors:
Data structure:
Likelihood:
Main parameter:
Prior for main parameter:
Practical threshold:
Model check:
Sensitivity analysis:
Reporting sentence:
```

This final task connects the workshop to participants' own research.

