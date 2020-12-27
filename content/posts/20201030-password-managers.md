---
title: "Password Managers"
date: 2020-10-30T11:43:11-04:00
draft: true
toc: false
cover : "img/carvalet.jpg"
tags:
  - password
  - security
  - best practices
---

*Disclaimer: I have no ties to any of the products or developers listed in this article. No one paid me or asked me to write this.*

*Also, I am not a security expert (if I was, I probably would not share one of my real passwords).
Though I try to have the best possible practices, I cannot guarantee these tips will prevent you from getting
hacked. Know that every security setup is as secure as its weakest link. Please remember to be critical when
security topics are being discussed.*

---

It is 1998. I am 5 years old.

"Ok Félix, if you want to log into the family computer, you will have to create your own password.", says my dad to me.

"What is a password?", I reply.

"It's a secret word that the computer uses to recognize you."

"*Cool*. My password will be..."

# tazmanio

<!---
For a brief history of the "password", checkout [this interesting article from
mashable](https://mashable.com/2013/12/30/history-of-the-password/). In this post, I will instead give you my
perspective on growing up alongside the Internet in a world where web security is a relatively alien concept
to most people.
-->

My first password was indeed `tazmanio`, whatever that meant. I based it off a game called [Taz in Escape from
Mars](https://en.wikipedia.org/wiki/Taz_in_Escape_from_Mars) which I was playing at the time. I figured "taz"
and "tasmania" were both too easy to guess, so I twisted the end with an `o` and that was that. Eight
characters long. No capitalization. No special characters. And believe me, I used it *everywhere*.

To my knowledge, there were no best practices to follow back then. I even had a friend whose father bragged
about using `secret` as his password. It made for great innuendos, that's for sure ("What's your password,
dad?", "It's `secret`!", "Aw dad, you're no fun"). Whether is was actually secure is another story.

# Password reuse is the problem

I like to think we all started with a single password. Something "unique" to ourself that we have not told
anyone, yet we knew we couldn't forget. The more we used our password to register new accounts, the more we
went down this spiral.

At some point, we all realize(d) that our single password was a real problem; while it's easier for us to
remember, but if someone else gets hold of it, they can log into our *entire* personal life. Then
again, the prospect of making more than just 10 different and secure passwords is enough to make most people
uncomfortable. Cycling through a mental list of passwords on a login screen is painful, frustrating. In this
situation, it is not infrequent to see someone click "forgot my password" and put back their old, comfortable,
insecure initial password. And the spiral continues.

When web developers started noticing this trend, they enforced "stronger" passwords. "Use numbers". "Use mixed
capitalization". "Use symbols". I'm sure you can guess the evolution of my password, since most of us followed
the same pattern:

1. `tazmanio`
1. `tazmanio1993`
1. `Tazmanio1993`
1. `Tazmanio1993!`

The real problem these web developers could not address is **password reuse**. Indeed, the issue with
`tazmanio` is not that it is memorable (though it sure does not help). What makes it dangerous is that
I used it everywhere. It might have felt safer to change all my passwords from `tazmanio` to `Tazmanio1993!`
(every registration form assured me that my new password was *strong*), but in reality it was as weak as
before. I have never fallen prey to a phishing attempt before, and yet my credentials are still floating out
there.  All it took was a data breach from any of the websites I was registered to in order to open my
digital life to anyone. In fact, according to [haveibeenpwned.com](https://haveibeenpwned.com), here are all
the data breaches that revealed my "user:password" combination to the world:

* Adobe (October 2013)
* Chegg (April 2018)
* Emuparadise (April 2018)
* FlashFlashRevolution (February 2016 AND July 2019)
* Kickstarter (February 2014)
* MySpace (2008)

Fast-forward to present day. It is 2020. I have 295 accounts scattered around the Internet. I have finally rid
myself of `tazmanio` on all my accounts. It is no longer part of my identity, which is why I can share it
with the world today. Believe me, it feels *good*.

# Shopping list of security features

Let's admit it. At best, the notion of passwords were a naive idea in the early days. In the present, they are
not enough to be considered "secure". At the same time, it is impossible to find a perfect solution for
everyone. Every security design has an exploitable weaker link.

At this point, you should realize that password reuse is one of, if not *the* weakest links in online security
(or security in general). Here are some good news: it is also the first thing that any password manager will help you strengthen.

Passwords are not going anywhere anytime soon. Knowing this, what do we need to satisfyingly protect ourselves
from forgery while impacting our every day use of technology as little as possible? Here is a "shopping list"
of features that I find would solve most (if not all) our problems:

1. **Have "strong", randomly generated and impossible to memorize passwords on all our online accounts** (this
  solves password reuse)
1. **Store all these passwords in a digital vault** (this makes sure I do not have to memorize anything or use a
  crib sheet)
1. **Make this vault accessible from any of my personal devices** (this makes sure that security does not come at
  the cost of convenience)
1. **Protect this vault from anyone else as much as possible** (because if someone else gets access to this vault, I'm
  toast)

After exploring the different options at our disposal today, I find that the combination of a password manager
along with two-factor authentication is what comes closest to addressing our every needs.

# Risks of getting your password manager hacked

{{< figure src="/img/eggs-in-basket.png" position="center">}}

There is one potential security flaw with password managers: after you finished importing all your accounts
into your vault, all your eggs will sit in the same basket.

I already hear you asking: **"What if someone gets hold of my master password? Won't they have access to all my
organized credentials? How is this better and not actually worse than password re-use?"**

While this concern is legitimate, you have to understand that this burden falls on the shoulders of the
developers of password managers. I'll illustrate this with a concrete example.

Let's suppose you use a password manager that gives you access to sensitive accounts (bank, email, social
media, etc.). If someone gains access to any of these accounts, it's game over for you. Now, let's also
suppose that someone figured out your password manager's master password and attempts to log into your vault.
What then?

The first security layer that will be triggered is that, because the hacker is logging from a new
browser/device, the login process will be halted on their end. An email will be sent to your email address
asking you to confirm if this unidentified login was intentional. And here's the magical thing: **because your
email credentials are not weakened by passsword re-use (they are in your password manager vault), the hacker
will have no way of hacking into your email to confirm their login.**

## What if the hacker crosses this first security layer?

Indeed, there are many ways to be hacked. Maybe, for some reason, the hacker has physical access to your
computer (e.g. you left your browser open at work and someone used it while you were away). At this
point it all depends on what you are already logged in - which doors you left open for the hacker to walk
into.

The worst case scenario is, of course, that they will have direct access to your password manager there and
then. They could open it, scribble down your most valuable passwords, and keep them for later. No need to
snoop in your emails, they got your passwords from the source! This is a pretty unlucky scenario: no only
were you careless enough to leave your computer unlocked without being around it, it also means you did it
around people you shouldn't trust.

This nightmare scenario should rarely happen. If your password manager is locked, there is no way a hacker
could get in without your master password or recovery code (which you wouldn't leave around for people to see,
more on that later). And the coup de grace would be to implement Two-Factor Authentication in your password
manager (and other accounts).

## Summary: Risks of getting hacked

To summarize, security is a messy subject with many ramifications. What you should understand is that, unless
you are careless and don't do basic common sense steps towards securizing your password manager, **using a
password manager properly will increase your security.**

# My favorite password manager: Bitwarden

There are many password manager offerings out there. They all have different feels and most of them do the
job. Some require a paid membership to access more niche feature.

I initially tried LastPass and was fairly satisfied with it, until I tried
[Bitwarden](https://bitwarden.com) which really clicked
with me. Some password managers receive much more news coverage than others, mostly due to marketing (that's
why some are also more expansive than others, despite doing the same job). I ended up liking Bitwarden it so
much (despite it never being ranked as the top password manager on any tech website you will find) that I
ended up paying for a membership (10 USD/year). I recommend that you create an account on any of these
services and see which one is a right fit for you. Most (if not all) of these password managers can import and
export your passwords between different services, so don't be afraid to try as many as your heart desires.

Just make sure that you trust the company behind the password manager of your choice. In the case of
Bitwarden, I trust the developers because they made Bitwarden open-source from the start and [because they
completed a security assessment from an independent third party
source](https://bitwarden.com/blog/post/bitwarden-network-security-assessment-2020/). Because all your
passwords will be stored under one roof, trust is paramount.

{{< figure src="/img/passwordmanager-features.png" caption="For my money, Bitwarden satisfies all my needs and more">}}

For the rest of this article, I will guide you through getting set up with Bitwarden and give you some best
practices tips to maximize your online security.

# Getting started with Bitwarden

.............. ........... blablablablabla

# Make sure you protect your email address!

We are getting pretty good at protecting our weakest links. Here is a tricky one that you should also start
thinking about.

After you store all your passwords in your password manager and protect it with two factor authentication,
your weakest link becomes your email address. Indeed, if someone gains access to your email, in theory they
could reset the password of any of your accounts by clicking "forgot my password", for example on reddit.com.
Thus, your email address is special and must be protected with extra care.

Make sure you use two-factor authentication to protect your email address (and if you store your 2FA keys in
Bitwarden using your premium account, make sure not to store your email's 2FA key in Bitwarden).



# A grain of salt

I must nuance this story somewhat. Using Bitwarden as my password manager has not solved everything. Indeed,
I have to keep these passwords in my head:

* My Bitwarden master password
* My phone's lock screen password
* My laptops' password(s)

This is list still much better than it used to be. Out of all of them, only Bitwarden could potentially be
cracked by hackers through the internet, since it doesn't require access to a physical device. This is where
Two-factor authentication comes in to save the day!

{{< figure src="https://imgs.xkcd.com/comics/security.png" caption="As always, XKCD reminds us to stay grounded in reality" position="center" >}}

What was your first password? How did you come up with it? And when did you finally break from its shackles?
