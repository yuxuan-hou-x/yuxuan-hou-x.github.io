---
layout: post
title: OptunAPI v0.1.0 has been released
date: 2021-05-24 17:45:00-0000
inline: false
hide: false
---

[OptunAPI](https://github.com/mbarbetti/optunapi) is a simple API designed for Machine Learning applications that allows to distribute an automatic hyperparameters optimization over different machines through _HTTP requests_. Each set of hyperparameters can be studied independently since the minima research does't require any gradients computation, but instead is performed through a _Bayesian optimization_ based on [Optuna](https://optuna.org/). The machine running Optuna manages centrally the optimization studies -- the so-called "Optuna-server" -- providing sets of hyperparameters and assessing them by the scores evaluated and sent back by the single computing instance, named "Trainer-client". The HTTP requests underlying such client-server system are powered by [FastAPI](https://fastapi.tiangolo.com).

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        <img class="img-fluid rounded z-depth-1" src="{{ site.baseurl }}/assets/img/news/optunapi_v1.png">
    </div>
</div>
<div class="caption">
    A simple sketch representing how OptunAPI works.
</div>
