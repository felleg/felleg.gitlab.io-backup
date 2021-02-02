+++
title = "Dream Machine: MiSTer FPGA"
date = "2020-10-18"
author = "Félix Léger"
toc = true
cover = "img/misterfpga.png"
tags = ["mister", "fpga", "retro", "gaming", "diy"]
keywords = ["mister", "fpga", "retro", "gaming", "diy"]
description = "In this post, I officially declare my love for the MiSTer project, and I show you how to get started."
showFullContent = false
aliases = [
   "/posts/20201018-misterfpga/"
]
+++

*(Disclaimer: This is an honest view about the MiSTer project. I am in no way affiliated with any of the sellers or
developers mentioned in this article and have no financial interest in this product. Nobody asked me or paid
me to write this. I am just a fan.)*

---

Here is a bit of context. I was born in 1993 in an upper-middle class family near Montreal. My parents are not
geeks. I was first exposed to video games through my cousin who owned a Nintendo Entertainment System. When he
bought/received the new Sega Genesis system, I received his NES as a hand-me-down. When he bought/received his
first PlayStation, I received his Genesis as a hand-me-down.

At least, that's how I remember it happening. At the end of the day, I was always a step behind in technology,
and for this reason I have a very deep appreciation of retro technology and video game consoles, despite not
truly fitting this demographic.

{{< figure src="/img/mygenesisgames.jpg" caption="I still enjoy my original Sega Genesis collection." >}}

Side note, the first console my parents purchased new from a store was an Xbox in 2002 (from Costco!). The
reason? To the best of my memory, it's because they wanted a DVD player. And for a few extra dollars they
could treat their kids. For a while, I enjoyed being part of the mainstream, but it was not meant to last.

# Technology is like magic, old and new

As I begin my journey in the tech industry, I am more and more in awe of what my predecessors were able to
accomplish with limited means. **Humans are as crafty today as they were hundreds of years ago**. The only
difference is the accessibility to knowledge is vastly superior now than it used to be. If you asked me
to come up with a technology that could show images in a two-dimensional plane, I could hardly do better than
shadow puppetry.

Do you realize how incredibly creative some humans had to be to come up with photography, let alone the
cathode-ray tube (CRT) television or OLED flat panels? Add in the fact that interactive video games can be played
using such screens, and that I'm able to picture this phenomenon and share it on the Internet for you to
see... that's enough to make my head spin. :smile:

{{< figure src="/img/gun-nac-setup.jpg" position="center" caption="It boggles the mind to think how many layers of knowledge were required to get the result pictured here. And this is essentially a toy for kids!" >}}

We too often forget how the everyday technology that surrounds us is fascinating. People worked *hard* to
allow us to attain a certain level of comfort that is also reliable. If the definition of "magic" is "a
phenomenon you personally don't understand", then you have to admit... Under this definition, we are all
surrounded by magic!

{{< figure src="/img/dirty-harry-crt.jpg" caption="Some old games can also be surprisingly stylish. (Dirty Harry NES)" >}}

# So, what is the MiSTer FPGA?

If retro video games are magical to me, then the MiSTer FPGA is a dream come true. In my teens, even my wildest
dreams would not dare go beyond half of what the MiSTer can deliver. Let me explain what MiSTer is all about.

The MiSTer is a project created by [Alexey Melnikov (aka Sorgelig)](https://github.com/sorgelig). It uses the
power of Field Programmable Gate Arrays (FPGA) from an off-the-shelf board named [Terasic DE-10
Nano](https://www.terasic.com.tw/cgi-bin/page/archive.pl?Language=English&No=1046) to recreate vintage
consoles and computers at the electronic level. It is not the first open-source project of its kind (see the
[MiST](https://github.com/mist-devel/mist-board/wiki) and [SiDi](https://github.com/ManuFerHi/SiDi-FPGA/wiki)
projects), but it certainly is the one that currently has the most momentum. While its exterior might make it
look like any other box, a "magical" FPGA chip inside allows it to transform into a multitude of systems at
the electronic level.

When I use the word "transform", I really do mean that the FPGA chip inside the MiSTer re-organizes itself to
*become* whatever chipset intended by an FPGA developer. This means, if developers are careful enough, they
can accurately recreate the interior of classic machines on a single chip. Your television won't know the
difference!

I won't bother trying to explain it in more details than that,
because I don't want to break the spell.  :smile: At least, it comforts me to know that some people fully
understand this technology and are generous enough to open-source their work, for the benefit of humankind.

{{< figure src="/img/my-mister.png" caption="My very own MiSTer from zerohimself, in its 3D-printed case." position="center" >}}

The MiSTer is a completely different beast than products such as the RetroPie, which uses *software* emulation
instead of *hardware* emulation. Software emulation has been around for decades, and is also fascinating in
its own way. But hardware emulation based on FPGA is a whole new thing that became mainstream around 2015. I
like to think of it like the 3D-printing of electronic circuitry. It is a tool that empowers us, and the
technology is young enough that we don't yet have to fear about its potential misuse. Now is the time to be
dreamy-eyed about it (I hope I didn't jinx it just now!).

# Is it really accurate?

In its current stage, most consoles represented on MiSTer are already frighteningly accurate.

{{< figure src="/img/nullobject-workbench2.jpeg" caption="The workbench of [nullobject](https://twitter.com/nullobject), one of many FPGA developers specializing in reverse engineering arcade games">}}

Since the same electronic circuits are being replicated, the electronic output is also the same. Of course,
the quality of this replication depends on how detail-oriented FPGA developers want to be. In theory, though,
the replication could be exact, for all intents and purposes. This means:

* the timings are the same
* the "lack" of input lag is the same
* the colors are the same
* the sound waves are the same (**Audiophiles, this should especially make your ears perk up.**)

What is within our grasp is cycle-accuracy. I'm not just writing this way to dazzle you with buzzwords: it's
Physics. I have followed an Electronics class during my studies of Physics, and I can assure you that it is a
*precise* science. We can measure how these circuits behave, we don't have to rely on our eyes and ears to
approximate the final result. An electronic circuit will behave the same way no matter what is the shape of
the box that contains it. This also means you won't have to fear about your precious original electronics
starting to degrade: every time you load a console on an FPGA, it's as if it was fresh from the factory!

Even more impressive, using FPGA you can switch between different console revisions on the fly (e.g. bigger
sprite limits to prevent flickering, different color palettes, different sound chips on the Sega Genesis,
etc.). This gives us the unique opportunity of creating consoles that are more powerful than their original
versions! Do you realize what this means? With an FPGA chip in hand and the right code, you are a few lines of
code away from having what would normally require physical, irreversible modifications to existing consoles.
It should almost sound too good to be true.

This seems like a sales pitch, I know, but I am truly moved by how *significant* this is. I have been playing
these video games all my life and it is the first time that I can honestly say we have managed to capture the
essence of these older technologies. In reality, even
I would have difficulty in a blind test to know whether I'm playing on an FPGA or on the real deal. Emulation
has been around for a long time, but playing these days on a computer has never felt right to me, either
because lag was involved, refresh rates were different, or sounds were not accurately represented.

## An added bonus: analog display

A great quality of life improvement is that the MiSTer can connect to HDMI monitors, as well as CRT monitors.
It can do everything the original machines could, while also conveniently being compatible with modern-day
accessories. The flexibility of the video outputs is truly staggering on the MiSTer and could fully warrant
its own discussion. This is not only great for console games, but also for arcade games. After spending some
time with the MiSTer, I can honestly say that for the right person this is an absolutely killer feature.

Do you know how expensive original arcade hardware is in 2020? With MiSTer, you can play most golden-age games
as if you owned the actual printed circuit board (PCB), with the added bonus of USB controllers and peace of mind of never having to
re-solder capacitors.

What if you wanted to display games emulated from a PC to a CRT display? You might have to purchase a DAC to
convert your digital video signal to an analog signal, or use a VGA signal which will not be the native
resolution of your game. It quickly can quickly become a mess. With MiSTer, you simply need the right VGA to
Component cable and a Direct Video Adapter or Analog I/O board and you’re good to go.

Long story short, emulating original systems on the MiSTer is as good, if not better, than playing on original
consoles. It is more reliable, convenient, and guarantees the authenticity of the electronic circuit that
powers your games. This is why I like to (half-jokingly) say that the MiSTer is even more accurate than what
it is replicating.

# If MiSTer is so great, why doesn't everyone rush to get one?

I honestly don't know.

I think it only comes down to lack of marketing. Since this is an open-source project made by enthusiasts
using off-the-shelf parts, opportunities to make money are limited. Thus, it is rare to see influencers spread
the good news. But more than that, the retro gaming community is currently swarmed under a tsunami of
marketing from [Analogue inc.](https://www.analogue.co/) This might be the only opportunity I have to vent on
this topic, so buckle up and grab your popcorn. [Click here to jump straight to the MiSTer setup guide.]({{<
ref "#setupguide" >}})

{{< figure src="/img/analogue-inc.png" caption="They may be small, but they're making big waves."
position="center" >}}

Analogue is a for-profit company that focuses on creating dedicated FPGA-clone consoles. While their products
are certainly beautiful and well-engineered, they are closed source and use shady business practices to boost
their sales, such as limited supplies. And their products are *expensive*, which
[makes](https://www.engadget.com/analogue-duo-turbografx-pc-engine-turboduo-fpga-console-150059918.html)
[people](https://www.nintendolife.com/news/2020/10/analogues_next_fpga_console_tackles_kanye_wests_favourite_system_the_pc_engine_turbografx-16)
[talk](https://www.forbes.com/sites/olliebarder/2020/10/17/the-analogue-duo-looks-like-the-ultimate-console-for-pc-engine-and-turbografx-16-fans/#6bc92f5e5a61)
[about](https://www.gamespot.com/articles/analogue-duo-release-date-price/1100-6483390/)
[them nonstop](https://www.analogue.co/press/). For a parallel, Analogue inc. is to MiSTer what Apple is to Linux (and
I guess, this leaves the [Retro
AVS](https://www.retrousb.com/product_info.php?cPath=36&products_id=78&osCsid=6c142694ed4f2fb0dd1a8af7eca48a1a)
to be Microsoft..?).

The problem here is that Analogue products are so prohibitively expensive (or limited in
quantities) that people rarely get to compare the experience of playing on a MiSTer or an Analogue device. If
you invest in one camp, there are many factors that will make you not want to invest in the other. The few
people who managed to experience both sides of the fence will invariably tell you that the MiSTer developers
are (in the long run) more detail-oriented and support their work far more than Analogue themselves. In the
end, you can expect the same gameplay experience between both devices, if not slightly more accurate on MiSTer (the
cheaper system).

## Crunching the numbers

Really, it just pains me when I see article after article telling people to hurry up and buy the new
"fantastic" Analogue project. Just two days ago (Oct. 16 2020), they announced a new product, the
[Duo](https://www.analogue.co/duo/), and the hype cycle is back again on any website that discusses gaming,
despite the constant criticism against the company. When you look at the numbers, and the demographic who is
interested in classic gaming (i.e. not rich people), you'll see that it simply makes no sense to invest in
Analogue systems.

| Analogue Products | Price |
| :------------- | :----------: |
| Analogue Duo (Turbografx-16 and CD)| 199.99 |
| Analogue Pocket (GB, GBC, GG, NGPC, Lynx)|199.99 |
| Mega Sg (Sega Genesis)|189.99 |
| Super Nt (Super Nintendo)|189.99 |
| Nt Mini (Nintendo Entertainment System / Famicom)|499.99 |
| DAC (HDMI to analog converter)|79.99 |
| **Total** | **1359.94 USD without tax and shipping** |

This is the price (before tax and shipping) you would have to pay to access everything Analogue has to offer,
and that's if you can find these items at their lowest price. To be fair, for this price you would get quality
hardware. You would be able to play on both HDMI and a CRT, [you could jailbreak the Nt Mini to access various
other 8-bit systems](https://atariage.com/forums/topic/242970-fpga-based-videogame-system)... At first glance,
cool stuff.

Let's head over to the MiSTer side and see how it compares. Let's pretend you buy your system from
[misteraddons.com](https://misteraddons.com), run by a trusted enthusiast known as [Porkchop
Express](https://twitter.com/misteraddons) (other alternatives include
[zerohimself](https://www.etsy.com/ca/shop/zerohimself), where I bought my own, or [ultimate
mister](https://ultimatemister.com/)).

| MiSTer parts -- comfortable setup| Price |
| :------------- | :----------: |
| Terasic DE-10 Nano (main brain)|150|
| IO board (converts digital signals to analog)|50|
| USB hub (allows 7 simultaneous connections)|45|
| Protective case|50|
| Expansion SDRAM (support more machines)|60|
| **Total**|**355 USD without tax and shipping**|

For roughly a quarter of the price, you get a smaller box that does more than any of the Analogue products
*combined*.

Can we go lower? You sure bet!

| MiSTer parts -- the bare minimum | Price |
| :------------- | :----------: |
| Terasic DE-10 Nano (main brain)|150|
| Expansion SDRAM (support more machines)|60|
| USB mini hub | 7|
| **Total**|**217 USD without tax and shipping, that's a steal**|

The bare MiSTer setup (with SDRAM expansion) will run you 217
USD+tax, and by itself can already do **more than any Analogue product**. If you include [an HDMI-VGA adapter such
as this one](https://www.amazon.com/Moread-Gold-Plated-Projector-Chromebook-Raspberry/dp/B00SW9JI9A/), you
could even be able to connect to a CRT monitor. Now that's a value that's hard to beat. The reason is simple:
for every console you wish to use, you have to buy a separate console from Analogue. MiSTer contains
everything for a single, relatively low price.

Look, the MiSTer may be scrappy, but with it you can emulate more consoles, arcades and computers, for a
fraction of what Analogue is asking their consumers. You can add as many or as few accessories you want to
match your level of comfort. Quantities are also not limited for the MiSTer, so no need to rush to pre-order
or buy at an extra cost from scalpers. Though the SDRAM is optional, I highly recommend it since it is
required to access machines that probably interest you. For completedness, [here is the list
of cores that require or benefit from having an SDRAM expansion on
board](https://github.com/MiSTer-devel/Main_MiSTer/wiki/Cores-that-use-SDRAM).

Marketing is everything, and people keep falling for Analogue's clever tactics. The *only* aces Analogue has
up its sleeve are:

* their beautiful designs
* the possibility to load games from actual cartridges instead of an SD card
* no setup required (though this is misleading, I'll get to that...)

But trust me, Analogue gets more mileage than anyone would expect from these (arguably) irrational advantages.

The "FPGA wars" is very real between Analogue and MiSTer fans, though it is getting better. For an interesting
read on the topic, I recommend [this well-written article from Ryan
Houlihan](https://www.inputmag.com/gaming/is-analogue-evil) that summarizes the current state of things.

## Supported platforms

Just for a fun comparison, I compiled a list of platforms supported by Analogue and by MiSTer. To guide your
eye, I boldened the name of consoles I think might interest most retronauts.

{{< figure src="/img/supported-platforms-analogue-vs-mister.png" position="center">}}

As you might notice, MiSTer does a good job in general of supporting platforms that spark interest. This is
natural: MiSTer developers work for free, so they have the luxury of working on platforms they care about. New
platforms are added every year, as long as the developers stay motivated. On the flip side, Analogue does
support a few consoles not present on MiSTer, but most of them require an expensive and jailbroken Nt Mini,
are not popular, and could regardlessly become supported on MiSTer in the future. Analogue also does not
support any arcade game, or classic computer.

Remember that on the MiSTer side, one device does all of this. You need at least 5 devices from Analogue to
access their full potential.

To give Analogue credit, I personally am a huge fan of their [NSF visualizer on the Nt
Mini](https://www.youtube.com/watch?v=sF4CTtPOtXc). This is the killer feature that I wish will get
implemented on MiSTer.

Ok. Rambling over. I swear the rest of this article will focus on MiSTer. :smile:

# Setting up a MiSTer FPGA {#setupguide}

Congratulations! You have decided to get a MiSTer. You are very wise. Here is my shopping and getting-started
guide.

You are going to need:

* The MiSTer itself (with Standard IO): https://misteraddons.com/products/mister-bundles
* A case if you find the MiSTer ugly: https://misteraddons.com/products/official-mister-case
* An SD card (I recommend at least 64 Gb, the more the better):
   - If you want to set it up yourself (IT'S EASY! TRUST ME!), [grab a cheap SanDisk from Amazon](https://www.amazon.ca/Sandisk-SDSQUAR-032G-GN6MA-Ultra-Micro-Adapter/dp/B073JYVKNX/)
   - If you want to skip the setup (i.e. throw money at the problem), [misteraddons sells some pre-configured cards](https://misteraddons.com/products/pre-configured-sandisk-micro-sd-cards). You will still have to add games yourself. I do not recommend it.
* Optional: A [VGA-to-component
  cable](https://www.amazon.ca/Monoprice-102170-6-Feet-Component-HD15-3-RCA/dp/B001O8C6HM/) if you want to play on a CRT that has these connections
   - If your TV only supports composite (red-white-yellow connections) or S-Video, [this adapter](https://www.antoniovillena.es/store/product/vga-composite-s-video-adapter/) works, but I don't currently recommend it, especially for composite.

## Setting up the micro-SD card

[(Click here to skip this section if you bought a pre-configured card.)]({{< ref "#controllers" >}})

Take a deep breath. This entire section should take roughly 10 minutes if you trust me and don't panic.
:smile:

1. Download and unzip the `mr-fusion-vX.Y.img.zip` file from [this link](https://github.com/MiSTer-devel/mr-fusion/releases/latest)
1. Bake the mr-fusion image file you downloaded in the previous step to your micro-SD card using a tool like [Win32
   Disk Imager](https://sourceforge.net/projects/win32diskimager/)
      - If you don't know how to do this basic procedure, learn about it in [this mini tutorial](https://www.ev3dev.org/docs/tutorials/writing-sd-card-image-win32diskimager/), starting at step 4 :smile:
1. Put the micro-SD card into your MiSTer. There are two slots, so make sure you use the correct one.
{{< figure src="/img/where-to-insert-sd-card.png" caption="Insert your SD card in the left slot, push until you hear a 'click'" position="center" >}}
1. Connect your MiSTer to your favorite HDMI monitor and power it on! You should see this screen for about 90
   seconds:
{{< figure src="https://raw.githubusercontent.com/MiSTer-devel/mr-fusion/master/vendor/support/splash.png" caption="If you see this, mr-fusion is doing its thing!">}}
1. Almost done! Connect a keyboard to your MiSTer using the USB ports. Press F12 to open the
   options menu. If you connect an Ethernet cable to your MiSTer, you can go to the Scripts section and run
   the Update script.
      - Note for pros: You can add any script to the existing MiSTer scripts by plugging the MiSTer SD card in
        your computer after setting up mr-fusion. My favorite script is [Update_All](https://github.com/theypsilon/Update_All_MiSTer)

## Configuring your controller {#controllers}

1. Connect your favorite USB controller in one of the MiSTer USB ports (alternatively, you can use the
   Bluetooth script if you feel courageous).
1. Use your keyboard and navigate to "Define Joystick Buttons"
1. Follow the prompts to configure your controller's buttons.

## Adding games

1. Visit the Everdrive pack game archive on archive.org (sometimes gets taken down, this step is TBD), or download ROMs online...
1. Download the zip files (and optionally the Pack add-ons and Game Series Collections) for your favorite
   consoles.
1. Connect your fully setup MiSTer micro-SD card into your computer
1. In your SD card, navigate to the games folder
1. Extract all the archives you download in step 2 to their matching folder in the SD card
1. Safely eject your micro-SD card from your computer and plug it back into your MiSTer

# Final thoughts about setting up a MiSTer

If you are familiar with technology, setting up MiSTer shouldn't feel too alien. But if not, I hope my guide
will help you figure it out. To quote Rysha, a MiSTer contributor, "if you can assemble IKEA furniture, you
can use a MiSTer". Maybe you will learn a thing or two about micro-SD cards and save hundreds of dollars in
the process. Really, if you have emulated games before, this process couldn't  be more straightforward. It is
true that simply plugging a cartridge initially feels more comfortable, but it's also much more expensive in
the end for little gain. You're much better off taking the time to learn how to do these simple steps than
spending a rent's worth on equipment you don't need. I'll take a moment to mention that adding roms (i.e. play
games without a cartridge) to an Analogue product, or a flash cart (e.g. [Everdrives](http://krikzz.com/)) is
exactly the same process as adding games on MiSTer.

Support open-source efforts! This is how we can ensure the preservation of this historic hardware.

{{< figure src="/img/crt-gaming.jpg" caption="Happy gaming!">}}

# Resources

The MiSTer project is ever-expanding and can already do much more than what I only mentioned in this article.
If you want to learn more about the MiSTer project, or connect with the incredible comunity of MiSTer users,
check out these links:

* [MiSTer Wiki](https://github.com/MiSTer-devel/Main_MiSTer/wiki), the official and constantly updated source
  of information about MiSTer.
* [MiSTer forums](https://misterfpga.org/), slow-paced, but quality content.
* [MiSTer on the Classic Gaming Server (Discord)](https://discord.com/invite/UDu5ztY). *Very active*
  chatrooms, covers everything related to classic gaming in general. This is where everybody meets.
* [MiSTer cores extravaganza videos](https://www.youtube.com/playlist?list=PLsLxmNa35KdjEtsZb4wfnc4H2po84i0cf), these are the videos that
  initially got me into MiSTer. SmokeMonster makes a great job illustrating what makes the MiSTer special.

## Acknowledgement

Thanks to the following people who helped me correct mistakes in the original version of this post:

* birdybro
* Rysha
