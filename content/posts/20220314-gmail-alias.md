---
title: "How to properly add an alias to Gmail without errors (send mail as)"
date: 2022-03-14T14:50:32-04:00
draft: false
toc: false
cover:
tags:
  - tutorials
description: "This post is an exact copy of a post I found on woorkup.com from Brian Jackson. It helped me a lot, so I'm keeping a version here to make sure these instructions are not lost until Google streamlines their own documentation."
---

Today I tried to add a new alias to my Gmail account after taking the decision
of moving my felix@felixleger.com address from Hotmail to Gmail (about time!).
Turns out, I couldn't figure out how. The instructions from Google that had tons of missing information : [https://support.google.com/mail/answer/22370](https://web.archive.org/web/20220314201647/https://support.google.com/mail/answer/22370)

I found the answers to my questions in a blog post, and for posterity I copied
the exact contents of this post here.

The original version of this text can be found at
https://woorkup.com/gmail-alias/ and was written by [Brian Jackson](https://woorkup.com/author/brian-jackson/). Below is the original text.

---

(January 19, 2022)

{{< figure src="/img/gmail-alias/1.png" position="center" caption="" >}}

Over the years, I’ve changed domains a few times and managed multiple websites with their own emails. I always like everything in one Gmail inbox, as it makes it easy to keep track of things. Gmail has a handy “send mail as” feature, which lets you add multiple email addresses as aliases. This enables you to change the from and reply-to address. Below I’ll show you how to get past all the common errors.

# How to add alias to Gmail

One of the reasons I’m documenting this is because Gmail’s instructions don’t mention everything, and then you wind up with errors. I typically find myself going through this every six months or so, and by then, I’ve forgotten all the little hiccups that can come up. I hope this helps save you some time.

Before we dive in, let me give you a use case scenario.

- user@domain.com (my primary Gmail I use to manage everything)
- user@differentdomain.com (send mail as, alias #1)
- user@gmail.com (send mail as, alias #2)

Your primary Gmail can be a custom domain or a @gmail address. This depends on whether or not you are using G Suite. You can set up to 99 different “send mail as” and or alias email addresses. The alias email address can also be a @gmail address, it doesn’t have to be a custom domain.

> This tutorial assumes you have 2-Step-Verification enabled on your Gmail account. If you don’t, you should.

# If you’re using G Suite

If you’re using G Suite, you’ll need to follow a few steps first to add aliases within Gmail.

First, go to “Apps → G Suite → Gmail → End User Access.” Scroll down and enable “Allow per-user outbound gateways.”

{{< figure src="/img/gmail-alias/2.png" position="center" caption="G Suite allow per-user outbound gateways" >}}

ext, go to “Security → Settings → Less Secure Apps.” Enable “Allows users to manage their access to less secure apps.”


{{< figure src="/img/gmail-alias/3.png" position="center" caption="Allow less secure apps in G Suite" >}}

**Note**: This does make your account less secure, so [beware of the changes](https://support.google.com/a/answer/6260879?hl=en). Google
recommends setting up a domain alias in G Suite, which you can do. But this
won’t let you pass the steps below, unfortunately. To change your “From”
address, you have to set this up in Gmail, which requires an App password.
Hopefully, this will change in the future.

After saving the above options, it will probably take 20-30 minutes to propagate
the changes across to your Gmail. Grab a coffee and come back a little later to
finish.

# Step 1

First, you will need to set up an app password. Go to [Google App Passwords](https://myaccount.google.com/apppasswords) with your primary Gmail account.

You can pick anything, but I chose “Mail” for the app, and “Custom Name.” For the name, pick something you’ll recognize if you need to reference your app passwords later. I used “Send from user@differentdomain.”

{{< figure src="/img/gmail-alias/4.png" position="center" caption="Google App password" >}}

# Step 2

In Gmail, go to the gear at the top right and click on “See all settings.” Click on “Accounts and Import.” Under “Send mail as,” click on “Add another email address.”

{{< figure src="/img/gmail-alias/5.png" position="center" caption="Gmail Send mail as" >}}

# Step 3

Enter the name and the email address for the second email address that you want to use as an alias. Leave the “Treat as an alias” option checked. Click “Next Step.”


{{< figure src="/img/gmail-alias/6.png" position="center" caption="Add another email address you own" >}}

# Step 4

Leave SMTP Server as smtp.gmail.com. Enter your **primary Gmail email address** in
the Username field (not your alias email). Then enter your Google App password
that you created earlier. Leave everything else and click “Add Account.”

{{< figure src="/img/gmail-alias/7.png" position="center" caption="Gmail SMTP server settings" >}}

If your credentials aren’t correct, you’ll most likely see a warning like this:

> Authentication failed. Please check your username/password and Less Secure Apps access for user@domain.com.

# Step 5

A confirmation code will be sent to the email address you want to send mail as (use as an alias). Enter the code and click “Verify.” You can also click on the link in the email to confirm.

{{< figure src="/img/gmail-alias/8.png" position="center" caption="Gmail confirmation code" >}}

And that’s it! You now have multiple email addresses in Gmail, and you can send as another email address.

{{< figure src="/img/gmail-alias/9.png" position="center" caption="Change From email in Gmail" >}}

You can also change the defaults and the behavior of replies.

{{< figure src="/img/gmail-alias/10.png" position="center" caption="Gmail send mail as email addresses" >}}

Another nice feature is that you can set up different default signatures for each email address. This way, when you respond, you can keep separate branding for each email address.

---
(See original post at
[https://woorkup.com/gmail-alias/](https://woorkup.com/gmail-alias/))
