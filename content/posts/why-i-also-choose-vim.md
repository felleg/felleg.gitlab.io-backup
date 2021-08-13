+++
title = "Why I (Also) Choose Vim"
date = "2019-10-14"
author = "Félix Léger"
cover = "img/whyvim.png"
tags = ["vim", "why"]
keywords = ["vim", "why"]
description = "A co-worker walked by my station today and glanced at my screen.  \"Wow, you use Vim, you must be pretty hardcore\", he said.  "
showFullContent = false
aliases = [
   "/posts/why-i-also-choose-vim/"
]
type = "featured"
+++

A co-worker walked by my station today and glanced at my screen.

"Wow, you use Vim, you must be pretty hardcore", he said.

I replied, "It's not as hard as it sounds, I'm sure anyone in the group could
use it if they put the time. I could organize a Vim workshop if you'd-"

"I gotta go", he said, and left.

It was expected. I wasn't even frustrated at his sudden dodge. I had been in
that situation before. Many Vim users have. Just look at the multitude of
[other](https://www.freecodecamp.org/news/learn-linux-vim-basic-features-19134461ab85/)
[similar](https://kevinslin.com/thoughts/why_I_choose_vim/#)
[blog](https://pascalprecht.github.io/posts/why-i-use-vim)
[posts](https://www.granneman.com/webdev/editors/vim)
[where](https://www.giffgaff.io/technology/why-i-still-use-vim-in-2019/)
[people](http://www.nils-haldenwang.de/vim/the-tale-of-why-i-chose-vim-over-emacs-and-any-ide)
[explain](https://medium.com/@rungsikornrungsikavarnich/how-and-why-did-i-practice-my-vim-skill-and-why-you-should-too-2827e1ded595)
[their](https://freshman.tech/from-vscode-to-vim/)
[reasoning](https://rayhightower.com/blog/2013/01/12/why-i-use-vim/)
[for](https://dev.to/gionaufal/how-and-why-i-usevim-4h6g)
[using](https://medium.com/commitlog/why-i-still-use-vim-67afd76b4db6)
[Vim](https://www.thanassis.space/myvim.html)! Clearly, us Vim users are
misunderstood by our peers, yet we cannot help but voice our appreciation for
Vim.

Experts, beginners, and everyone in-between have written blog posts about Vim
trying to convince their readers to give Vim a chance. I'm about to add my voice and give my take on why, **for serious**, Vim could be exactly what you
need to develop robust software in 2019.

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

# First Contact With Vim

I'm sure most people's first contact with Vim happened when they had to
write text through an SSH connection. It's kind of a rite of passage for
developers, which usually goes like this:

```
"Ok I'll try out Vim to write through SSH. How do I open it?"
> Type vim
"Hah, easy. Uhh, it's just a black screen, I can't do anything"
> Press i and type your text.
"Weird. But ok, (type type type), done. Um, it won't close, I'm stuck."
> Press escape, then type :wq and enter, or actually :x and enter does the same thing and saves a character. You can also do ZZ if you're in a hurry...
"!@#$, this is madness, I hope I never have to use Vim again."
```

Congratulations! You are now traumatized!

What makes Vim different is that the main way to learn is not to ask "how can I
do this thing that my favorite editor does?". Asking this will **always** return
answers that seem random, insane, or a mix of both.  It is true that knowing
basic usage such as __writing__, __saving__ and __quitting__ are required. To
save you some time, the dialogue above teaches you how to do each of those
things. :smile:

In my experience, when one possesses that basic knowledge, it is all the
documentation they need to read to get started.

"Then how can someone get better?", I hear you ask. "With this knowledge, isn't
Vim as good as a stripped-down version of Notepad?"

Yes! But keep reading, as I answer your much more interesting first question.

# Learning from Typos: o Instead of i

Let me tell you a story.

I come from a physics background, where no one cares about editors because they
still write on paper. The first editor I used was "kate", because this is what
we were told to use in our Computational Physics class.

When I started an internship the next year, a graduate student sitting next to
me told me to use Vim through SSH connections. I went through all the typical
phases:

1.  denial: "I'll just use something else, I don't need Vim through SSH if I
  connect using `ssh -Y`"
1.  anger: "This is the worst editor I have ever used, surely I'm getting pranked."
1.  bargaining: "I'll just use `kate` when no one is looking."
1.  depression: "Everyone who uses Vim is faster than me in my favorite editor..."
1.  acceptance: "I'll put up with Vim, because it just seems like the logical
  thing to do."

For a solid month, all I knew was how to insert text, save and quit. There was
the occasional undo and redo, but that was it.

And then, one day, instead of pressing "i" to add text, I made a typo and
pressed "o".

{{< figure src="/img/vimappend.png" position="center" >}}

By using "o", I was able to open insert mode from a new line below the one on
which my cursor currently sat.  No need to press "i", go to the end of the line
(using the "end" key, of course) and press enter. It was all done by pressing a
single letter: "o". A small discovery, but an empowering one! I felt just a
little more in control of what I was doing. And here was an editor function that
I had never seen in other editors, yet made total sense!

Imagine my surprise when, once again by total mistake, I typed an uppercase "O",
only to enter insert mode in a newline created *above* the one where my cursor
sat.

My point is that you don't need a manual to learn Vim. The best way to learn is
by trial/error, and by doing typos.


## A Quick Word on Vim Cheat Sheets

{{< figure src="/img/vimcheatsheet.png" caption="Are you still excited to learn Vim?" position="center" >}}

I, like many, enjoy a good cheat sheet to help learning how to do or use something.
However, I'll save you some time: **don't bother with Vim cheat sheets until you
feel comfortable using Vim.**

Vim cheat sheets such as the one shown above (the [Vim Cheat Sheet for
Programmers](http://michael.peopleofhonoronly.com/vim/)) are amazing reference
tools, but their value is completely lost on beginners. To a newcomer, the cheat
sheet teaches everything at once, so much so that it almost looks like a cartoon
making fun of Vim.  Some references have so much depth, they might as well be
written in three dimensions. It's overwhelming. It makes Vim scary. It doesn't
make you want to **explore** Vim, rather it just makes the GUI buttons look more
appealing.

I can only start to appreciate the care that went into creating this cheat sheet
5 years after beginning my journey in Vim. "5 years" sounds intimidating, I
know. Don't worry about scary sentences and cheat sheets.  Just start using Vim,
because...

# ... Vim is Infinite

I'm sure it feels great for someone to say like "I know all about [program]".
Saying "I already know everything that's shown on this cheat sheet" surely is a
boost to anyone's ego.

Similarly, I'm convinced someone would feel bad to say "I'll never know
everything about [program]". It's humbling. It's uncomfortable. It feels like
we're missing out on features laying right in front of our eyes.

{{< figure src="/img/guibuttons.png" caption="Most editors: \"Look at these buttons! I'm fairly certain they address all my needs.\"" position="center" >}}

{{< figure src="/img/emptyvim.png" caption="Vim: It's like peering into a black hole." position="center" >}}

I'll admit I can understand the dread felt by someone the first time they open
Vim. There are simply no buttons to click on, let alone understand. There is no
visual indication on where to start. Only a cursor, taunting you with every
flash. The user starts to panic and goes through an existential crisis as they
can only imagine what lies beyond the dark void on their screen.

{{< figure src="/img/vimstore-harlem.jpg" caption="Is *is* a store, after all!" position="center" >}}

Here is an analogy: Vim is like a department store. It contains everything you
could dream of using. Yet, when you enter the store, you start with an empty
cart. To get the full experience out of the store, you have to go through each
row and manually select the items you desire. Not everyone will want the same
items, and not everyone will want the same *number* of items. Some people just
might walk around with an empty cart all day and have a great time!

What makes Vim infinite in the example above is the amount of different
configuration of "carts" leaving the store. Everyone can have their own tailored
experience if they want to. It all depends on where you draw the line in your
exploration. Again, this is why cheat sheets are misleading: it makes it seem as
though all features in Vim have the same importance. The cheat sheets cannot
take into account which feature **you** will want to use.

The analogy of the department store doesn't stop there. When the Vim developers
want to add a new feature, they can do so without hurting your current
experience: just add a display shelf somewhere in the store. If you don't notice
an item or don't like it, you won't add it to your "cart", and that's fine! The
developers can add as many features as they want, while you can rest at ease
knowing no one will ever rush you to learn new "necessary" features.

I like to think that as you use Vim you always know as much as you need to know.
Sure, experienced users know all kinds of unthinkable tricks. But always
remember: sometimes all it takes is a typo to notice a new feature, like a quick
glance to a shelf you never noticed before.

Even seasoned pros stay on the lookout for new tricks. [The Vim board on
Reddit](https://www.reddit.com/r/vim/) is a great place to look.


# A Sales Pitch for Vim

Vim is not difficult. It's different.

Yes, it requires adaptation, but that doesn't mean it's hard. Learning to play
the violin is hard. Calculating probabilities is hard. Typing ":q" instead of
"alt-F4" to close a text editor is unusual, but it is not *hard*.

Here are Vim features you might not hear often about:

## Vimscript (i.e. Customization)

Vim has Vimscript, a programming language dedicated to Vim. The topic of
Vimscript alone should require its own blog post, but I will do my best to
summarize it for now.

In short, Vimscript is what will make all your dreams come true (as long as they're
Vim-related). It is what makes Vim truly infinite: any feature you could dream
up can be implemented thanks to Vimscript. Some people have even pushed the boundaries by using Vimscript to program
entire games! Let's pretend you wish a certain functionality was added to Vim:

*I wish Vim could write the current date and time in my file when I press F4.*

You don't need to wait on the Vim developers to enable this feature for you. You
can customize your Vim experience by adding this feature to your arsenal all by
yourself, and it really is not that difficult!

Here are the locations where you are most likely to use Vimscript:

* In your `~/.vimrc` configuration file
* When you press `:` in Vim's normal mode (for example to save, quit, etc.)
* When you download Vim plugins, in `~/.vim/plugin`

Going back to our example wish from earlier? All you would need to add in your
`~/.vimrc` file is the following:

```vimscript
inoremap <F4> <C-R>=strftime("%c")<CR>
```

Now, **pressing F4 in insert mode** will add something like this to your text:
Mon 14 Oct 2019 11:41:34 AM EDT

Here is a small showcase of things made possible by Vimscript:

* A [presentation](https://www.youtube.com/watch?v=aHm36-na4-4) made entirely in Vim
* [Learn Vimscript the Hard
  Way](http://learnvimscriptthehardway.stevelosh.com/preface.html), a great web
  book on Vimscript.
* [Vim Tetris](https://www.vim.org/scripts/script.php?script_id=172), a Vimscript game in which I contributed

{{< figure src="/img/vimtetris.png" caption="Enjoying a quick game of Tetris while editing my ~/.vimrc" position="center" >}}


## Consistency

Vim makes me more consistent. This is thanks to the `~/.vimrc` configuration
file.

Whenever I use a new computer, all I need is my `~/.vimrc` (and possibly
`~/.vim/` folder) to get the exact configuration with which I am most
comfortable. No need to go into the preferences: this file specifies everything
I need! I can directly start coding the way *I* want to code.

To take advantage of that consistency, I, like many others, use git to manage
the versions of my `~/.vimrc`. Every new function I add to my "cart" is stored
there forever. Some people spend years making their configuration file perfectly
custom for themselves.

If you're curious, here is my [configuration file](/vimrc)

## Other Neat Tricks

In no particular order, here are some neat tricks I learned how to do in Vim
that I think you will enjoy:

### Persistent Undos

Don't you hate it when closing a program means you lose the ability to "do Ctrl-z"
to revert to a previous state? In vim, all you have to do is enable this setting
in your `~/.vimrc` and your undos will be kept in memory for as long as you
need:

```vim
set undodir=~/.vim/undo-dir
set undofile
```

You can even install plugins such as UndoTree to navigate your undos, just like
you would navigate branches on git! Keep in mind, to undo key in Vim is `u`. If
you do `Ctrl-z` in Vim, it will kill the program instantly. That'll teach ya!
:smile:

### Macros

Don't know how to do something efficiently in Vim? No problem! Just create a
macro on the fly exactly tailored to your needs!

For example: imagine I want to create an ascii triangle made of 1's by
copy/pasting the current line and adding a 1 at the end (repeated a bunch of
times). Incredibly specific example, I agree, but please play along.

I can create a macro that does exactly that, and repeat it as
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


## "My team uses this other editor"

Another co-worker told me that their team doesn't use Vim because they prefer
using another editor, in this case Visual Studio.  What do I have to say to that?

*More power to them!*

In the end, Vim is a choice I made for myself. I might bicker and compete with
users who refuse to give Vim a chance, but in the end, to each their own. If you
need "xxxxx" to be productive on the team, then use "xxxxx"! If no one cares
about the fact I use Vim when they read my code, the same goes for me when I
read theirs. As long as they follow the group's style guidelines consistently,
as long as they are consistent in their usage of whitespace, and as long as they
don't need *me* to troubleshoot *their* editor, who am I to judge?

### Emacs

Yes, the same goes for Emacs people. I respect you and your editor. Let's just
agree to disagree on things and move on: the [Editor
War](https://en.wikipedia.org/wiki/Editor_war) was fun, but it is behind us.

# TL;DR

I rambled on Vim for far longer than I had anticipated. I guess I had a lot of
repressed emotions on the topic. I hope you see Vim in a new light, and maybe
learned a new trick or two.

The only thing I ask of you next time you boot your favorite editor is:

**Why is it your favorite editor?**

If the answer has something to do with laziness, or how your editor fits you like a glove, it might be time to try out
Vim.

{{< figure src="/img/myvim.png" caption="My current config of Vim, complete with line numbers, syntax coloring, airline status bars, text width color column and English spell checker. All running under tmux, of course!" position="center" >}}

[^0]: For example, Android or iOS applications
