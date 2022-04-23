---
title: "When Will We Be Millionaires?"
date: 2022-04-23T10:21:23-04:00
draft: false
toc: false
cover:
tags:
  - investing
---

I am not a financial expert (far from it). I am a normal man, mystified
by the magic of compounding interest.

Here's an interesting question: how long does it take to become a
millionaire? That's a tricky question to evaluate, given the magic
properties of compounding interest. Indeed, you might become a
millionaire sooner than you think (just like Scotia Bank's slogan
says). This question can be answered with three simple questions:

- At what age have you started investing?
- How much money can you reliably save per year?
- How much averaged annual interest are you realistically hoping for?

With the answer to these questions in hand (and supposing you chose an
interest rate of 5% annually), all you have to do is find your answer in
this chart:

{{< figure src="/img/millionaire-age.png" position="center" caption="[Google Sheets version](https://docs.google.com/spreadsheets/d/1IB0ZfB9MXd1muLqLs9iG1o9E4qbSOfsP5hPE61MyOTw/edit?usp=sharing)" >}}

You can [download a pdf](/files/millionaire-age-rates-0-10.pdf) to
browse the figures for interest rates from 0% to 10%. I find it
fascinating to see the evolution of the resulting heat maps. :smile: For
your information, I fixed the mid-point of the heatmap's coloring scheme
(yellow) at 65, which represents the traditional age for retiring.

In order to create this chart in Google Sheets, I had to learn about the
[NPER function](https://support.google.com/docs/answer/3093183?hl=en), which calculates the number of payment periods for an
investment based on constant-amount periodic payments and a constant
interest rate. I had no idea that financial functions like
this one where already implemented in the program: neat! It solved me
the big headache of having to figure out how to program my cells to
achieve the same result!

---
The idea for this visualization was heavily inspired (if not directly lifted
from) [The Million Dollar Grid - Four Pillar
Freedom](https://fourpillarfreedom.com/the-million-dollar-age-grid/).

