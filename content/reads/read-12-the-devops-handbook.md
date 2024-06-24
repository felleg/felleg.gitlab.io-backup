---
date: 2022-08-01
title: (Read 12) The DevOps Handbook
frontpage: "true"
cover: img/reads/the-devops-handbook.png
amzcover: https://m.media-amazon.com/images/I/819OwBruPlL._SL400_.jpg
tags: ['reads', 'nonfiction']
aliases: ['/books/book-12-the-devops-handbook', '/12']
number: 12
author: Gene Kim et al.
rating: 👍👍

---

Release year: 2016

Author: Gene Kim et al.

{{< buythisbook link="https://amzn.to/4clZUMF" >}}

{{< mynotes link="https://drive.google.com/file/d/1_ZIhBeoiBtYn8H_vTTaXvb49X_xEsBt_/view?usp=drive_link" >}}

---

# Review

I didn't originally write a review for this book (these lines are written on 2024-02-11), but after reading it I was
inspired to write a blog post titled [Overcoming Learning
Anxiety](/overcoming-learning-anxiety) which you might find interesting.
Long story short, completing this book was a very personal experience
that had a profound impact on my career and my life. I can only give it
the highest of ratings:

{{< myrating rating="👍👍" >}}

---

# :star: Star quotes

1. (p. xxxiv) The result of technical debt is that our most fragile
   artifacts support our most important revenue-generating systems and
   our most critical projects.
1. (p. 14) The Three Ways of DevOps:
    - Work in small batches
    - Have fast feedback and monitoring
    - Have a generative culture
        - Actively seed and share information to enable the organization
          to achieve its mission
        - Responsibilities are shared throughout the value stream
        - Failure results in reflection, genuine inquiry
1. (p. 22) Stop Starting. Start Finishing.
1. (p. 27) Waste is activities that can be bypassed without affecting
   the result.
1. (p. 49) The idea behind blameless postmortems:
    - By removing blame, you remove fear.
    - By removing fear, you enable honesty.
    - Honesty enables prevention.
1. (p. 49) In the absence of improvements, processes degrade over time
   due to chaos and entropy. Even more important than daily work is the
   improvement of daily work.
1. (p. 71) A system of record is almost always the most difficult part
   to change in software. It is usually the part that limits our ability
   to make changes in interdependent systems.
1. (p. 107) In the team, we want to:
    - encourage learning
    - **help overcome learning anxiety**
    - ensure people have relevant skills
    - ensure people have a defined career roadmap
1. (p. 172) **A recommended definition of "done"**: Integrated, tested,
   working, shippable code, demonstrated in prod-like environment, created from
   trunk using a one-click process and validated with automated tests.
1. (p. 213) The **strangler fig application pattern** is used to rewrite
   critical systems and make the transition easier:
    1. Place existing functionality behind an API, where it remains
       unchanged
    1. Implement new functionality using desired architecture, making
       calls to the old system when necessary.
1. (p. 232) The five universal logging levels:
    - DEBUG: Anything that happens in the program. Often disabled in
      production, but enabled for troubleshooting.
    - INFO: Actions that are user-driven or system specific (e.g.
      "beginning credit card transaction")
    - WARN: A condition that could potentially become an error (e.g.
      database call taking longer than threshold)
    - ERROR: Error conditions (e.g. API call failures)
    - FATAL: When we must terminate (e.g. program crash)
1. (p. 232) When deciding whether a message is ERROR or WARN, imagine
   getting a call for it at 4 AM. For example, "low printer toner" is
   *not* an error.
1. (p. 239) We need metrics at these levels:
    - Business level: nb sales, revenue of sales, AB testing results,
      etc.
    - Application level: transaction times, user response times, etc.
    - Infrastructure level (db, OS, network, storage): CPU, disk usage,
      etc.
    - Client software level: app errors or crashes, etc.
    - Deployment pipeline level: build pipeline status, change
      deployment lead time, deployment frequencies, test env promotions,
      env status, etc.
1. (p. 248) After an outage,
    1. Ask what indicators would have predicted the outage
    1. Add these indicators to the monitoring system, alerting as needed
    1. Repeat. We want alerts that prevent outages instead of alerts
       after a failure.
1. (p. 260) The secret to smooth, continuous flow is small, frequent
   changes that anyone can inspect and easily understand.
1. (p. 278) How to frame a hypothesis: "We believe *(a change)* will
   result in *(a good thing)*. We will have confidence to proceed when
   *(a measurement indicating link between change and good thing)*."
   Examples:
    - A change: Increasing the size of images on booking page
    - A good thing: Improved customer engagement and conversion
    - A measurement: A 5% increase of customers who view images who book
      within 2 days
1. (p. 285) The poorness of outcomes is proportional to the distance
   between the person doing the work and the person deciding to do the
   work.
1. (p. 295) Essential elements in a pull request:
    - Detail why the change is made
    - Detail how the change is made
    - Identify risks
        - Identify countermeasures
    - Mention someone appropriate to review the change
1. (p. 308) Organizational learning requires engineers who made an error
   to be enthusiastic in helping the others avoid the same error in the
   future.
1. (p. 309) [How to conduct a blameless
   postmortem](https://gitlab.com/felleg/blameless-postmortems)
1. (p. 310) :star: Instead of feeling bad about a mistake, ask: "Why did
   it make sense to me when I took that action?"
1. (p. 317) A service is not really tested until we break it in
   production.
1. (p. 320) :star: :star: The only sustainable competitive advantage is an
   organization's ability to learn faster than the competition.
    - (Félix note: This quote literally changed my life.)
1. (p. 339) The most valuable thing *any* associate can do is mentor or
   learn from other associates. We are all lifelong learners who learn
   best from our peers.
1. (p. 380) A key goal of DevOps practices is to streamline our "normal
   change" process so that it is also suitable for emergency changes.
1. (p. 416) Human error is the effect of systemic vulnerabilities deeper
   inside the organization. Don't blame the human; thank the human for
   highlighting your vulnerabilities.
