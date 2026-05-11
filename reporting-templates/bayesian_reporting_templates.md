# Bayesian Reporting Templates

Use these templates as starting points. Replace bracketed text with study-specific details.

## Methods Paragraph

We fitted a Bayesian [linear/logistic/ordinal/hierarchical] model to estimate [research quantity]. The outcome was [outcome], and predictors included [predictors]. The model used a [likelihood] likelihood with [link function if applicable]. Priors were chosen to be [weakly informative/skeptical/informed] on the scale of the model and were checked using prior predictive simulation. Models were fitted in R using `brms` with the CmdStan backend. Convergence was assessed using R-hat, effective sample size, trace plots, and posterior predictive checks.

## Prior Justification

The prior for [parameter] was [distribution]. This prior was chosen because [substantive or methodological reason]. Prior predictive checks showed that this prior [did/did not] generate plausible values for [outcome] in the research context.

## Results Paragraph: Continuous Outcome

The posterior mean effect of [predictor/intervention] was [X] [units], with a 95% credible interval from [L] to [U]. The posterior probability that the effect was positive was [P1]. The posterior probability that the effect exceeded the pre-specified practical threshold of [T] was [P2]. These results suggest [substantive conclusion].

## Results Paragraph: Binary Outcome

For [group A], the posterior median predicted probability of [outcome] was [P_A], compared with [P_B] for [group B]. The posterior distribution of the probability difference had a median of [D], with a 95% credible interval from [L] to [U]. The probability that [group A] had a higher outcome probability than [group B] was [P].

## Results Paragraph: Hierarchical Model

The hierarchical model estimated [research effect] while allowing intercepts to vary across [groups]. The posterior mean group-level standard deviation was [X], with a 95% credible interval from [L] to [U], indicating [small/moderate/large] variation across groups after accounting for observed predictors. Group-level estimates showed partial pooling, with smaller groups shrunk more strongly toward the overall mean.

## Model Checking Statement

All R-hat values were close to 1.00 and effective sample sizes were adequate for the reported parameters. Posterior predictive checks indicated that the model reproduced the main features of the observed outcome distribution, although [limitation if any].

## Sensitivity Statement

We repeated the analysis using [alternative prior]. The posterior estimate of [main parameter] changed from [X] to [Y], and the probability that the effect exceeded [threshold] changed from [P1] to [P2]. The substantive conclusion was [robust/sensitive] to this prior choice.

## Plain-Language Summary

Given the data and model assumptions, the analysis suggests that [main conclusion]. The estimated effect is most likely around [X], but values between [L] and [U] remain plausible. The probability that the effect is large enough to matter in practice is [P].

