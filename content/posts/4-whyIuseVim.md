+++
title = "Why I Chose Vim"
date = "2019-10-20"
author = "Félix Léger"
cover = "/img/whyvim.png"
tags = ["vim", "why"]
keywords = ["vim", "why"]
description = "A co-worker walked by my station today and glanced at my screen.  \"Wow, you use Vim, you must be pretty hardcore\", he said.  "
showFullContent = false
draft = true
+++

A co-worker walked by my station today and glanced at my screen.

"Wow, you use Vim, you must be pretty hardcore", he said.

I replied, "It's not as hard as it sounds, I'm sure anyone in the group could
use it if they put the time. I could organize a Vim workshop if you'd-"

"I gotta go", he said, and left.

It was expected. I wasn't even frustrated at his sudden dodge. I had been in
that situation before.  But it did make me think about the stigma surrounding
Vim in the workplace, so I thought: maybe a blog post could be interesting to
those wondering why I personally use Vim?

Here goes nothing.

# Mythbusting

I often wonder which reasons non-Vim users would guess as to why I use Vim. Is
it because I'm stuck in the past? Is it because I want to show off my conquering
of the learning curve? Is it just because I'm a soulless robot?

I'll demystify a few things right now:

- I don't use Vim just to look cool; I know no one cares what I used to write
  my code when they read it.
- I don't use Vim just because I'm "hardcore". Actually, I'd argue I use Vim because
  I'm lazy and value my time!
- I don't use Vim just because I don't know how to use IDEs. I use IDEs for *certain
  applications*[^1], but most of the time Vim is exactly the tool I need.

# A Sales Pitch for Vim

Vim is not difficult. It's different.

Yes, it requires adaptation, but that doesn't mean it's hard. Learning to play
the violin is hard. Calculating probabilities is hard. Typing ":q" instead of
"alt-F4" to close a text editor is unusual, but it is not *hard*.

Here's why I like Vim:

## Customization



## Consistency



## Neat tricks

In no particular order, here are some neat tricks I learned how to do in vim
that I think you will enjoy:

### Persistent undos

Don't you hate it when closing a program means you lose the ability to do Ctrl-z
to revert to a previous state? In vim, all you have to do is enable this setting
in your `~/.vimrc` and you your undos will be kept in memory for as long as you
need:

```vim
set undodir=~/.vim/undo-dir
set undofile
```

You can even install plugins such as UndoTree to navigate your undos, just like
you would navigate branches on git!

### Macros

Don't know how to do something efficiently in Vim? Then create a macro on the
fly exactly tailored to your needs!

For example: imagine I want to create an ascii triangle made of 1's by
copy/pasting the current line and adding a 1 at the end (repeated a bunch of
times). Incredibly specific example, I agree, but play along.

Using macros, I can create a macro that does exactly that, and repeat it as
often as I want. It's easy, you can try it right now (I dare you)! Open vim and
type exactly the following characters in order (`[ESCAPE]` is the Escape key):

```
itriangle 1[ESCAPE]qwyypA1[ESCAPE]q20@w
```
This sequence of keys looks like gibberish, am I right? Let's break it down:

```
i           ==> Starts insert mode
triangle 1  ==> (Writes "triangle 1")
[ESCAPE]    ==> Leaves insert mode
qw          ==> Starts macro recording, stored in `w`
yy          ==> Copies the current line
p           ==> Pastes the current line
A           ==> Moves cursor to the end of the line in insert mode
1           ==> (Writes the number 1)
[ESCAPE]    ==> Leaves insert mode
q           ==> Finishes recording
20@w        ==> Launches macro `w` 20 times
```

{{< figure src="/img/vimtriangle.png" caption="See if you can replicate this output!" position="center" >}}

# Vim is Infinite

I'm sure it feels great for someone to say like "I know all about [program]".

Similarly, I'm convinced someone would feel bad to say "I'll never know
everything about [program]". They might feel they're missing out on features
laying right in front of them.

{{< figure src="/img/guibuttons.png" caption="Most editors: \"Look at these buttons! I'm fairly certain they address all my needs, so I'll learn what most of them do to know about the tools at my disposal.\"" position="center" >}}

{{< figure src="/img/emptyvim.png" caption="Vim: It's like peering into a dark hole." position="center" >}}

I'll admit I can understand the dread felt by someone the first time they open
Vim. There are no buttons to click on, let alone understand. Does this means you
not only have to learn what each "button" does, but these "buttons" also
invisible and you have to call them by name?

Yes, and this is a good thing. It's what makes Vim **infinite**. It is why the
experience of writing with Vim never gets stale. Just think about it: it is what
allows the Vim developers to cram as many features as they want without getting
in your way.

I like to think that as you use Vim you always know as much as you need to know.
Sure, experienced users like me know all kinds of unthinkable tricks. But I'll
tell you a secret.

If other users are like me, they did not fill their bag of tricks using Google
searches. They learned their first tricks by accident.

## First Contact With Vim

I'm sure most people's first contact with Vim happened when they were told to
use Vim write text through an ssh connection. It's kind of a rite of passage for
developers. And it usually goes like this:

```
"Ok I'll try out Vim. How do I open it?"
> Type vim
"Hah, easy. Uhh, it's a black screen, I can't do anything"
> Press i and type your text.
"Weird. But ok, (type type type), done. Um, it won't close, I'm stuck."
> Press escape, then type :wq
"Ugh, I hope I will never have to use Vim again."
```

Congratulations! You are now traumatized!

What makes Vim different is that the prior way to learn is not to ask "how can I
do this thing that my favorite editor does?". If you do, the answer will
*always* seem random, insane, or a mix of both.

It is true that knowing basic usage such as writing, saving and quitting are
required. To save you some time, my dialogue above teaches you how to do each of
those things. :)

I'm my experience, when one possesses that basic knowledge, it is all the
documentation they need to read to get started.

"Then how can someone get better?, I hear you ask. "With this knowledge, isn't
Vim as good as a stripped-down version of notepad?"

Yes! But keep reading, as I answer your much more interesting first question.

# Learning from Typos: o instead of i

Let me tell you a story.

I come from a physics background, where no one cares about editors because they
still write on paper. The first editor I used was "kate", because this is what
we were told to use in our computational physics class.  Don't question the
rules in physics.

When I started an internship, a graduate student sitting next to me told me to
use Vim through SSH connections. I went through all the typical phases:

- denial: "I'll just use something else, i don't need Vim through ssh if I use
  the -Y flag"
- anger: "this is the worst editor i have ever used, even worse than notepad"
- bargaining: "surely, outside of ssh, no one uses Vim, right?"
- depression: "I suck at Vim."
- acceptance: "I'll put up with Vim, apparently I just have to be patient."

For a solid month, all I knew was how to insert text, save and quit. There was
the occasional undo and redo, but that was it.

And then, one day, instead of pressing "i" to add text, I made a typo and
pressed "o".

(show image of the definition of o)

By using "o", I was able to open insert mode from a new line below the one on
which my cursor currently sat.  No need to press "i", go to the end of the line
(using the "end" key, of course) and press enter. It was all done by pressing a
single letter: "o"! A small discovery. But an empowering one. I felt just a
little more in control of what I was doing. And here was an editor function that
I had never seen in editors, yet made total sense!

Imagine my surprise when, once again by total mistake, I typed an uppercase "O",
only to enter insert mode in a newline created *above* the one where my cursor
sat.

My point is that you don't need a manual to learn Vim. The best way to learn is
by trial/error, and by doing typos.


## Vim Cheat Sheets

{{< figure src="/img/vimcheatsheet.png" caption="Are you still excited to learn Vim?" position="center" >}} 

I, like many, enjoy a good cheat sheet when I learn how to do or use something.
However, I'll save you some time: **don't bother with Vim cheat sheets until you
feel comfortable using Vim.**

Vim cheat sheets such as the one shown above (the [Vim Cheat Sheet for
Programmers](http://michael.peopleofhonoronly.com/vim/)) are amazing reference
tools, but their value is completely lost on beginners. To a newcomer, the cheat
sheet teaches everything at once, so much so that it almost looks like
a cartoon making fun of Vim. It's overwhelming. It makes Vim scary. It doesn't
make you want to **explore** Vim, rather it just makes the GUI buttons look more
appealing. 

(continue)

## "My team uses Visual Studio"

Another co-worker told me that their team doesn't use Vim because they prefer to
use Visual Studio. 

What do I have to say to that? More power to them!

In the end, Vim is a choice I made for myself. I might bicker and compete with
users who refuse to give Vim a chance, but in the end, to each their own, and I
respect that. If you need "xxxxx" to be productive on the team, then use
"xxxxx"! If no one cares about the fact I use Vim when they read my code, the
same goes for me when I read theirs. As long as they follow the group's style
guidelines consistently, as long as they are consistent in their usage of
whitespace, and as long as they don't need *me* to troubleshoot *their* editor,
who am I to judge?

# Emacs

I know some among you will reproach me for not mentioning Emacs, so here you go:

Emacs Emacs Emacs Emacs Emacs Emacs Emacs Emacs Emacs Emacs Emacs Emacs Emacs
Emacs Emacs Emacs Emacs Emacs Emacs Emacs Emacs Emacs Emacs Emacs Emacs Emacs
Emacs Emacs Emacs Emacs Emacs Emacs Emacs Emacs Emacs Emacs Emacs Emacs Emacs
Emacs Emacs Emacs Emacs Emacs Emacs Emacs Emacs Emacs Emacs Emacs Emacs Emacs... 

## In reality

Talk about legendary war between vim and Emacs

Am I a hypocrite for not giving Emacs as much time as I gave vim?

I used Emacs before vim, I heard the hurting hands meme, I enjoy vim, why
change?

I acknowledge Emacs can be a good editor for a lot of people. On shared
machines, I don't throw a fit when the default editor is Nano or Emacs. I just
live with it and move on. We live in a society.

# In conclusion

The only think I ask of you as you next time you boot your favorite editor is:

**Why is it your favorite editor?** 

If the answer has something to do with laziness, it might be time to try out
Vim.

{{< figure src="/img/myvim.png" caption="My current config of Vim, complete with line numbers, syntax coloring, airline status bars, text width color column and English spell checker. All running under tmux, of course!" position="center" >}}

[^1]: For example, Android or iOS applications
