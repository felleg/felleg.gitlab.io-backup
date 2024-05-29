---
date: 2022-09-01
title: (Read 13) Continuous Delivery
frontpage: "true"
cover: img/reads/continuous-delivery.png
amzcover: https://m.media-amazon.com/images/I/71sYKaNItcL._SL400_.jpg
tags: ['reads', 'nonfiction']
aliases: ['/books/book-13-continuous-delivery', '/13']
number: 13
author: Humble & Farley
rating: 👎
---

Release year: 2010

Authors: Jez Humble and David Farley

{{< buythisbook link="https://amzn.to/4bllOz0" >}}

{{< mynotes link="https://drive.google.com/file/d/1ez8KYUxHxFphVZBje4nTE4fjDailY-pJ/view?usp=drive_link" >}}

---

# Review

{{< myrating rating="👎" >}}

---

# :star: Star quotes

1. (p. xxiii) **Cycle time** is the time from deciding that you need to
   make a change to having it in production. It is a vital metric for
   any project.
1. (p. 24) In software, when something is painful, the way to reduce the
   pain is to do it more frequently, not less.
1. (p. 28) The Deming cycle is useful when holding retrospectives on the
   delivery process:
    1. plan
    1. do
    1. study/check
    1. act
1. (p. 40) "Ultimate configurability" is a common antipattern. The more
   configurability you intend to offer users, the fewer constraints you
   can place on the system config, thus the more sophisticated the env
   needs to become.
1. (p. 50) Lock down production. It should not be possible for anyone to
   make a change to prod without going through the organization's change
   management process, because even a tiny change could break production
   completely.
1. (p. 73) Failing on build warning is good practice.
1. (p. 75) Having personal contact with members from other groups of a
   distributed team is important because it builds trust. Trust is the
   first thing to suffer in a distributed team.
1. (p. 87) We tend to limit Automated Acceptance Testing to complete
   coverage of "happy paths" behaviors, and limited coverage of the most
   important other parts.
1. (p. 93) Have stories that follow the INVEST principles:
    - Independent
    - Negotiable
    - Valuable
    - Estimable
    - Small
    - Testable
1. (p. 139) Metrics useful for diagnostics of the deployment pipeline to
   warn of problems (these are secondary to cycle time)
   - Automated test coverage
   - Properties of the codebase
       - duplication
       - cyclomatic complexity
       - efferent and afferent coupling
       - style
   - Number of defects
   - Velocity of team to deliver working, tested, ready to use code
   - Number of commits to version control per day
   - Number of builds per day
   - Number of build failures per day
   - Duration of build, including automated tests
1. (p. 228) What many people often mean when they say "I want the
   application to respond in 2 seconds" is "I don't want to sit in front
   of a computer without any feedback for too long."
