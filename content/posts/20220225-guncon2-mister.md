---
title: "Reviving light gun Games with FPGA Technology (and Namco's Help!)"
date: 2022-02-25T12:44:25-05:00
toc: true
cover: img/guncon-mister/duck-hunt.jpg
tags:
  - mister
  - fpga
  - video-games
  - gaming
  - retro
description: "Gaming preservation got a serious boost with the inclusion of GunCon 2 support for the MiSTer FPGA project."
---

Not more than two weeks ago, a major milestone was achieved for the MiSTer FPGA project:
support for the GunCon 2 controller.

What is the GunCon 2 controller? Why is this meaningful for the MiSTer project as a whole,
and for game preservation? Keep reading to find out! :smile:

---

# What is the GunCon 2?

{{< figure src="/img/guncon-mister/guncon2.jpeg" position="center" caption="" >}}

The GunCon 2 is a light gun released by Namco in 2001 for the Sony PlayStation 2. It came
packaged with Time Crisis II, the second entry in the popular light gun franchise.

What makes this light gun special is the fact that it connects to the console via USB.
This is great, since USB is a standard still supported today. Another particularity of
this light gun is that it taps into the composite signal to give a more accurate pointing
experience. It is able to know where it points on the screen without requiring flashes
(unlike the Nintendo Zapper, for example) or other external accessories sitting on top of
the television to provide an infrared signal (e.g. the Super Scope for the Super Nintendo and even Namco's own GunCon 3).

In short, it is perfectly suited for the MiSTer project: it connects with a modern
interface to an older (analog) technology. It hits the sweet spot! And, great news, the
build quality is actually very solid.

# Why is GunCon 2 support meaningful for game preservation?

Light gun games have been around for a long time, but you might be surprised to learn that
the road to preservation for this specific genre of gaming has been stuck for quite some
time. Although Nintendo was the undisputed king when it came to light guns at home, many
other consoles (and arcades!) featured their own version of the light gun. In fact, the
latest commercially available light gun worthy of mention that I know is the GunCon 3, also
by Namco. Released for the PlayStation 3, it relied on infrared technology similar to
the Wii's. See the [Light gun Wikipedia page](https://en.wikipedia.org/wiki/Light_gun) for
a list of all models made over the years. Some have striking designs that would not be out
of place in an old Star Trek movie. :smile:


When it comes to "game preservation", it is no surprise that anyone with original
hardware is still able to play these games in their intended fashion today. That material
is very resilient and even relatively easy to find if you look online. However, having
such setups can quickly become cumbersome and impractical. That's because each video game
console from the 80's up to the early 2000's has had proprietary connections, which meant
that light guns were not compatible between different consoles. Those who know, know; you
have to love switching connections to get into that hobby.

{{< figure src="/img/nintendo-zapper.jpeg" position="center" caption="The Nintendo Entertainment Zapper is arguably the most recognizable light gun of all time." >}}

You might be thinking that with emulation, it has been possible for a long time to play
light gun games without original hardware. And you'd be right! While light gun games can indeed be run through emulation, using a mouse as a pointing device is
not the same as using a gun-shaped object in your hands. What is the main difference
between a mouse and a light gun? The requirement to aim.  With a mouse, you always see
where your crosshair is. With a gun, there is no way to know if you're really on target
before committing to your aim by shooting. It's a different type of challenge for sure.
Personally, I use a mouse every day as part of my job. Shooting a gun is a nice change of
pace for me, as it allows to develop different motor skills.

(Of course, I'm pretty sure that the feeling of shooting a light gun is nothing compared to
the real thing, but I like to think I will never have to practice shooting with an actual
gun.)


Interestingly, there was early progress in the mister scene with [Serial Native Accessory
Converters (SNAC)](https://misteraddons.com/products/serial-native-accessory-converter-snac) that
allowed users to connect their original light guns to each console core. It was already a
step in the right direction for game preservation, but in my opinion, the GunCon 2 takes
the cake by being an all-in-one solution.

# How to setup a GunCon 2 for your MiSTer

{{< figure src="/img/guncon-mister/necessary materials.jpg" position="center" caption="" >}}

1. Any male-to-male RCA cable
1. The T-shaped RCA cable originally supplied with the GunCon 2 controller (some people
sell their GunCon 2 without this cable, watch out!)
1. The GunCon 2 USB controller
1. The MiSTer
1. (optional, if your CRT monitor does not support component) A VGA -> composite/S-video adapter (currently only sold by [Antonio
Villena](https://www.antoniovillena.es/store/product/vga-composite-s-video-adapter/))
1. A CRT monitor. Ask your relatives, you might be able to find one for cheap, maybe even
free!

Here is the instructional video I followed to setup the connections and the specific files
that, as of 2022-02-25, need to be modified on the MiSTer. Remember, this is still a beta
feature. :smile:

{{< youtube s0F8KnqeOd8 >}}

**And here is the result** :tada: :

{{< figure src="/img/guncon-mister/messy-connections.jpg" position="center" caption="Messy connections are inevitable in this project, but it works, at least!" >}}

{{< youtube HFz_BC9ADS0 >}}


Note: You can connect your GunCon 2 to the composite signal exiting the MiSTer while still
using the S-Video signal

{{< figure src="/img/guncon-mister/s-video-adapter-commodore.jpg" position="center" caption="A Y-splitter to use S-Video on a Commodore 1702 monitor, [link to buy](http://herculesworkshop.com/cgi-bin/p/awtp-product.cgi?d=hercules-workshop&item=76537)." >}}


# A thought for our Ukrainian friends

{{< figure src="/img/ukraine-flag.png" position="center" caption="" >}}

Allow me to go on a little tangent as we reach the end of this post. Unfortunately, in the
midst of all this recent excitement, yesterday the President of Russia Vladimir Putin
declared war on Ukraine and launched attacks on civilians. Two of the best FPGA developers
in the scene right now, Krikzz and srg320, live in Ukraine near the attacks. Although
they have not directly worked on GunCon 2 support, their respective contributions in the
world of FPGA gaming for video game preservation is immense:
- Krikzz was one of the pioneers of FPGA gaming with his [line of
  everdrives](https://krikzz.com/our-products/). He has been at it before the MiSTer
  project had even begun. He is constantly pushing firmware updates to support his
  multiple products. I have nothing but good things to say about Krikzz's focus on his
  customers.
- Srg320 is currently working on a Sega Saturn core for the MiSTer, which many developers
  thought would not be feasible. He is a wizard in this regard. He has also been
  contributing to an impressive live of cores for the MiSTer project:
   - Super Nintendo
   - Sega Genesis
   - Sega CD
   - Turbografx16 / PC-Engine

I do not want these geniuses to die. I do not want any civilian to die because of war.
MiSTer is an international project that gathers people from everywhere; the maintainer of the MiSTer project (Sorgelig) is
Russian himself. This is truly an international project. It is a shame that people have to give up
on a passion that brings joy to the world because they have to literally flee death.

Another way to phrase this is to realize that even though the MiSTer project is
quintessentially niche, it suffers real impacts of this war, is telling.

These people are stuck in a war they have not chosen.

{{< figure src="/img/krikzz-war.png" position="center" caption="" >}}


The MiSTer project shows that collaboration allows great things to happen. We are all
human and we all need each other in order to make incredible things happen. It is a shame
to have war in this day and age. I hope everyone in Ukraine will be alright and that this
conflict will be solved soon. I can only observe from my distant vantage point. My heart
and thoughts are with you, my friends!

Here's to a future with more light guns than real guns!
