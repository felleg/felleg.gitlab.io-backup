---
date: 2024-01-24T08:37:19-05:00
title: "(Read 64) The Software Engineer's Guidebook"
cover: img/reads/the-software-engineer-s-guidebook.jpg
CoverCaption: "My copy got a little banged up... long story!"
tags: ['reads']
---
{{< partial "mathjax_support" >}}

Release year: 2023

Author: [Gergely Orosz](https://www.linkedin.com/in/gergelyorosz)

{{< buythisbook link="https://amzn.to/3UgqkZq" >}}

{{< mynotes link="https://drive.google.com/file/d/1pxqvqWQ_pEKVI2X5zjP-v7ENLklqEM6Y/view?usp=sharing" >}}

---

# Review

I envy people who choose a profession like software engineering, because
it feels like the career path of such professions is so clear: from
junior to senior engineer, to staff, to manager, director, VP of
Engineering, to finally CTO. In a sense, this career ladder feels like
playing an MMORPG, which is supposed to be quite rewarding and addicting
as you start your climb.

The problem is that some part of me refuses to fit this mold, and I
can't put my finger on why. This is why I chose to read *The Software
Engineer's Guidebook* by Gergely Orosz, an Amazon bestseller, to reframe
my mind on software engineering. Maybe this book could become my cure to
start better understanding how software engineers should work and think
about their work and, through better collaboration with them, I could
start figuring out my own path.

If you're interested in getting this book, here's what you can look
forward to:
- a broad overview of the expectations that come with being a software
  engineer
- tips for being a great contributor
- what mindsets give the best results
- how to grow from an individual contributor into a manager

The book certainly has merit, being written from an experienced engineer
who spent a lot of time working at companies like Uber and who spent
many years writing on the topic on his [blog](pragmaticengineer.com).
However, don't expect depth; its length is used to cover a multitude of
topics connected to software engineering, not to be the ultimate
resource for each topic. In a sense, the book is an introduction to all
the topics it discusses, and expects the reader to search for more
details if their interest is piqued.
For example, on topics like CI/CD, the author will explain what the
concept is and why it is useful, but will not guide you into building
your first pipeline (though he often provides useful links for further
reading).

I think this is a solid book to have in any organization's library,
because surely it will have some software engineers among its wall
and all of the topics discussed in this book are important. Now it's
only a matter of diving deeper in each of those subjects to correctly
put them into practice.

{{< myrating rating="👍" >}}

---

# :star: Star quotes

1. (p. 40) Good feedback is:
    - timely
    - specific
    - actionable
1. (p. 55) Keep track of your achievements. The most practical way to do
   this is to write down what you do, every week. Summarize key
   achievements each month and quarter.
1. (p. 67) Done is better than perfect, especially during wartime.
1. (p. 94) The easiest way to turn down a request is to reply "yes, I'd
   like to help, BUT..."
1. (p. 157) Create a system for capturing important but not urgent work.
   This could be a to-do list, a simple document, a physical notebook,
   ...
1. (p. 164) Once you have a full understanding of how things work,
   "thinking outside the box" will simply be offering the solution that
   experts tend to do.
1. (p. 174) "Every mentor I worked with ended our conversations with a
   'you got this!' or 'you can do this!' or similar. Only words, but
   damn, they meant the world to me."
1. (p. 176) Asking honest questions before giving feedback gives the
   receiver the opportunity to share more context, with the absence of a
   negative sentiment.
1. (p. 225) **Kickoffs** are events where big questions are clarified
   with relevant stakeholders.
1. (p. 229) The Physics of software projects: In the trio of "Timeline,
   Scope, and People", if one of these things changes, at least one
   other also needs to change in response.
1. (p. 270) Processes are never the goal. Don't ask which processes your
   team should have in place, ask how the team can get stuff done better
   and faster.
1. (p. 273) One easy way to know if there is clarity is to ask engineers
   what the team's goals are, and why these goals exist. If everyone
   gives roughly the same answer, there's clarity.
1. (p. 281) As a tech lead, not every problem is yours to solve. For
   example, a colleague with performance issues isn't your problem;
   that's on your manager.
1. (p. 287) A good resource for mapping our which career levels
   companies have beyond the senior engineer level is the website
   [https://levels.fyi](https://levels.fyi)
1. (p. 289) With any collaboration, the key to making it work is trust.
1. (p. 296) "Why do customers use us?" is an obvious question, and it's
   surprising how often engineers don't have an answer.
1. (p. 311) $$\text{Trust} = \frac{\text{credibility} + \text{reliability} +
   \text{authenticity}}{\text{perception of self-interest}}$$
1. (p. 323) When not deeply embedded in a team, aim to adapt to it
   rather than reshape it around you. Colleagues will respect you more
   if you adapt and help them improve practices.
1. (p. 332) A **service catalog** is a portal where teams can register
   their services, and engineers can search for them. It should answer
   these questions:
    - Is there a service that does X?
    - Who owns service Y and where is the oncall rotation?
    - How do I onboard my team to this service?
1. (p. 342) Logs are meant to help an engineering team debug production
   issues, by capturing missing but necessary information for future
   reference during troubleshooting.
1. (p. 346) Business metrics:
    - Customer onboarding
    - Success and error rates for business-specific operations
    - Daily/weekly/monthly active users (DAU, WAU, MAU)
    - Revenue
    - Usage numbers: how long does a user interact with the app?
    - Number of support tickets
    - Retention and churn
1. (p. 347) A **noisy alert** is one that's not actionable.
1. (p. 347) **Precision** measures the percentage of alerts which
   indicate a real issue. A system with 30% precision means 3 in 10
   alerts are outages, and the rest are noise.
1. (p. 348) **Recall** measures the percentage of outages for which
   alerts are fired. A system with 30% recall means alerts are fired for
   3 in 10 outages.
1. (p. 348) The ideal oncall system has 100% precision with no noisy
   alerts, and detects 100% of outages.
1. (p. 348) :star: Have the oncall engineer record whether each alerts is for
   an outage, or if it's noise.
1. (p. 348) :star: In incident reviews, go through all recent outages and
   answer the question: "did an alert fire which indicated an outage was
   happening?" This will show the recall percentage.
1. (p. 355) A common mistake less experienced engineers make is trying
   to understand why an outage occurred, and to only start fixing it
   when they know. If there are obvious mitigation steps that can be
   started, like rolling back a code change, or executing a rollback, do
   these first!
1. (p. 358) Consider alerting on unknown states. A state that's neither
   good nor bad tends to be a hotbed for problems later.
1. (p. 360) When it comes to architecture, you should use formal
   approaches only when you're convinced it adds value, and team members
   understand it.
1. (p. 382) Always understand why you are working on something, and how
   things works:
    - Why are we doing this project, who benefits?
    - Why does it work now: what changed?
    - Which alternatives could we use?
1. (p. 386) If you really want to force yourself to learn something
   well, give a presentation, or hold a session about it.
