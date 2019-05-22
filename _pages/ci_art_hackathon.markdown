---
title: KTH Continuous Integration Art Hackathon
date: 2019-05-03 00:00:00 Z
type: page
layout: page
description: We invite you to the first hackathon about art and continuous integration.
  KTH Students, professional engineers, and curious persons are welcome to join this
  first ever performance of software art based on continuous integration data.
link: Hackathon
img:
- "img/r1/2.JPG"
- "img/r1/1.JPG"
- "img/r1/3.JPG"
- "img/r1/4.JPG"
- "img/r1/5.JPG"
- "img/r1/6.JPG"
- "img/r1/7.JPG"
ref: hackathon
new: false
place: Former KTH Nuclear Reactor R1
place_link: https://www.r1.kth.se/
date-str: Oct 14 2019
---

## The Concept

In this hackathon, we will dive into the extraordinary activity that occurs in a continuous integration server through visual and sound representations.

The goal is to build beautiful visualizations or sonifications of continuous integration (of compilatios, test, analysis, packaging, deployment). These representations can be purely visual with beautiful images (still), videos (moving, à la Gource), . 

Inspirations for such visual structures can be found at the Whitney Museum. Representations can also be based on sound, through the sonification of the CI activity. Participants can be inspired by the sonification of the continuous activity of wikipedia. The participants will also have the opportunity to use the R1 organ to play the CI activity (it has a programmable MIDI interface).



## Technology

We use Travis CI as main source  of data. Travis CI provides different API end-points to  listen to their builds. Reference documentaion: <https://docs.travis-ci.com/user/developer/>

In addition, CI artist Thomas Durieux provide a websocket server for easier use.
Code: <https://travis-ci.com/tdurieux/travis-listener/>
Websocket URL: <todo>

For visualization, one can use [D3.js](https://d3js.org/), [P5.js](https://p5js.org/) or [Vega Lite](https://vega.github.io/vega-lite/) for example

For sonification, one can use the library [tone.js](https://tonejs.github.io/)

## The Venue

The hackathon will take place in a very peculiar venue, the old structure of the very first nuclear reactor of Sweden, called R1. It was a research reactor located on the main campus of KTH at Valhallavägen, and was active from 1954 to 1970. It was completely dismantled, and there is nothing left of it today. It is in the reactor hall that our hackathon will take place.

## Frequently Asked Questions

- **Do I have to know how to program to participate to the hackathon?**

    No. You can join an existing team and it is great to do statistics and data visualization based on the dump of Travis CI builds available here: [https://zenodo.org/record/2560966](https://zenodo.org/record/2560966)
    (small version: TODO)

- **Do I have to use Travis CI?**

    No, you can use another open CI API or CI dataset. The goal is to something fun or aesthetic with continuous integration data.  

<br/>

- **Is there a specific goal that should be achieved at the hackathon?**


    The main goals is that all participants participants have fun with CI data. It would be great to create something artistic based on CI (something that may be called "software art" or in this case "CI art").


<br/>


- **Can I start before the hackathon’s day?**

    Of course, feel free to start before and come with cool demo on Oct 14 2019 in R1. 


