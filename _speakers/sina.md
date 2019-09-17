---
title: Sina
name: Sina Sheikholeslami
_sort: Sheikholeslami
pic: sina
layout: bio
work_title: Asynchronous Hyperparameter Optimization with Apache Spark
position_txt: PhD students of computer science at KTH
social:
- title: globe
  url: https://www.kth.se/profile/sinash
---

#### Abstract
For the past two years, the open-source Hopsworks platform has used Spark to distribute hyperparameter optimization tasks for Machine Learning. Hopsworks provides some basic optimizers (gridsearch, randomsearch, differential evolution) to propose combinations of hyperparameters (trials) that are run synchronously in parallel on executors as map functions. However, many such trials perform poorly, and we waste a lot of CPU and harware accelerator cycles on trials that could be stopped early, freeing up the resources for other trials. In this talk, we present our work on Maggy, an open-source asynchronous hyperparameter optimization framework built on Spark that transparently schedules and manages hyperparameter trials, increasing resource utilization, and massively increasing the number of trials that can be performed in a given period of time on a fixed amount of resources. Maggy is also used to support parallel ablation studies using Spark. We have commercial users evaluating Maggy and we will report on the gains they have seen in reduced time to find good hyperparameters and improved utilization of GPU hardware. Finally, we will perform a live demo on a Jupyter notebook, showing how to integrate maggy in existing PySpark applications.