---
title: "Web Scraping for Preservation"
date: 2021-01-30T12:19:11-05:00
toc: true
cover: "img/rhdn.png"
tags:
  - scraping
  - beautifulsoup
  - python
  - rom hacks
  - romhacking
---

You might have never heard about it, but [romhacking.net](https://www.romhacking.net) (or RHDN, for short) is
a treasured website in the retro gaming community, and has been for quite some time. The website serves
essentially as a global repository for ROM hacks, and is home to a wildly interesting community. While it is
not the first of its kind, it is among the oldest surviving repository of its type, and by far has the most
content compared to any competitor.

# What is ROM hacking?

The acronym "ROM" stands for Read-Only Memory. In the emulation community, a ROM is the file containing all the assets and
instructions necessary for a game console to run a video game. The size of ROM files can vary wildly, from a
few kilobytes to many megabytes. For example, the size of the Super Mario Bros. ROM is 30.1 KB.

In its essence, ROM hacking is the action of modifying a ROM to change its behavior. It can be used to fix
glitches, modify assets, introduce new enemy behavior, etc. Some ROM hacks use the core engine of a game to
create completely new adventures, or even new games entirely. The most popular platform to perform ROM hacks
is by far the Nintendo Entertainment System (NES), which hits the sweet spot in terms of ROM size and
popularity among gamers. One of my favorite ROM hacks is a simple one: it removes the friendly fire in
Battletoads for the NES. It removes the one major flaw from an otherwise brilliant game and gives it the
polish it deserved.

Fun fact, a device called the Game Genie was made to essentially allow creating primitive ROM hacks on the
fly. It would be connected as a middle-man between the game cartridge and the game console. Upon booting, the
user would input 8 character "codes" that would modify specific memory sectors in the ROM sent to the game
console. While it was very primitive, it was somewhat revolutionary because it allowed players to "create"
ROM hacks on the fly that allowed new features such as infinite lives and level selection even if these cheats were never intended by the original game developers.

{{< figure src="/img/gamegenie.png" position="center" caption="Oh Game Genie, grant me three wishes..." >}}

For ROM hacks that need more than three memory sectors to be modified, more sophisticated tools are required.
Indeed, ROMs are extracted from the original game cartridge and are edited with tools such as HEX editors to
give hackers as much freedom as they need.

{{< figure src="/img/romhacking.png" position="center" caption="Extracting a ROM from a game cartridge to hack it in a HEX editor" >}}

Here is the part that boggles my mind when I think about ROM hacks: all of this is done without access to the
source code. The people who attempt these hacks are essentially flying blind, and have to reverse engineer the
core functionalities of games by looking at how the memory is being accessed and modified by the console in
real time. Tools such as emulators ease the pain a bit, but this remains nonetheless incredibly impressive.
And you can probably assume that the bigger the ROM, the more complex it is to modify. I think I remember a
quote that said "ROM hacking is like trying to build a tower out of potato chips with atomic bombs as hands".

With this basic explanation, you'd think that ROM hacks are rare and basic. Indeed, who has the time to dig
into a spaghetti of HEX codes to create a "game" that cannot be sold? In reality, the truth may surprise you.
RHDN already contains 10,000 hacks, translations and homebrew games in its *curated* database, and it keeps
growing every day.

{{< figure src="/img/newhacks.png" position="center" >}}

Now for a sad realization: there is little money to make in ROM hacks. As was proven time and time again, these
little works of art will probably never be supported by companies such as Nintendo, even though the quality of
some ROM hacks and translations rivals some of their own products. The greatest example of this is the
[English translation for the game Mother 3](https://www.romhacking.net/translations/1333/). This game has been
requested by die-hard fans of the Mother series of RPG to be officially released in the Western hemisphere,
but Nintendo never made it happen.  In the end, some devoted fans took it upon themselves to translate the
game in their own spare time to allow more people to get into the third instalment of the franchise. The
result has to be seen to be believed: you could never tell that this work was made by unpaid fans. Even more
impressive, their love for the game is such that they officially gave Nintendo their blessing to use their
translation work in part or in full if it would allow the game to get an official release. But instead of
embracing it, Nintendo shunned all these efforts.

There is hope, though. Recently, a Japanese company known as
[M2](https://en.wikipedia.org/wiki/M2_(game_developer)) has assembled an impressive crew of ROM hackers and
has released updated (hacked) versions of games from the back-catalog of companies such as Nintendo, Sega,
Namco and even Compile. The momentum is headed in the right direction, but so far this is one of the rare
cases where ROM hacks have been officially licensed.

# Why ROM hacking is so niche

The biggest pain associated with using ROM hacks is the fact that you have to assemble them yourself. If ROM
hackers released their final product as is, it would be seen as piracy, since it contains parts of the
original compiled code from the original version of the game. Therefore, when you download a ROM hack, the
file you download is  usually a `*.ips` file (though this can vary).

This type of file simply lists the difference between the base ROM and the final hacked version. These
differences are perfectly OK to share. But it creates a new problem: this means you have to "patch" the base
ROM yourself to end up with the final product.

The process is easy enough. Download a utility such as [Floating IPS (Flips)](https://github.com/Alcaro/Flips), and
then for every hack you want to use:

1. Find the matching source ROM
1. Apply your patch with Flips
1. Output the hack as a new file

{{< figure src="/img/flips.png" position="center" caption="Flips in action" >}}

The hardest part is finding the matching source ROM (usually by finding the ROM with the matching MD5 sum).
This is because some games could have multiple variants, and sometimes even the same variant might have been
extracted by different means (resulting in slightly different ROMs). This tedious process is very hard to
automate and people are still trying to figure out a way to tackle this challenge. To allow ROM hacks to make
it in the mainstream, the patching process would need to be made much smoother and more reliable.

# How RomHacking.net can help us

The administrators of RHDN are in a unique position to tackle this challenge, because they have accumulated a
huge database of ROM hacks. In theory, they could modify their submission process to make sure that ROM
hackers specify everything they can about the ROM they use in order to smooth out the patching process. They
could also open their database to the public to allow bulk download. Unfortunately, both of these things have
never been done. Quite the contrary, it seems like the administrators of RHDN do not want their catalog to be
downloaded in bulk because they have implemented a CAPTCHA security feature when downloading files.

{{< figure src="/img/rhdn-captcha.png" position="center" caption="A password must be copy-pasted to download files. This aims to prevent automatic downloads." >}}

For quite some time, ROM hackers have been uneasy about this situation. The "GitHub" of ROM hacks could shut
down at any moment, since it is hosted by enthusiasts who don't owe anything to anyone. At the same time, an
backup of the website's content is not available to anyone outside of RHDN's administration team. This is a
recipe for disaster, as far as preservationists are concerned.

This is where I come in. For quite some time, I was worried about the future of the website. I noticed that
its interface has been roughly the same since 2004. Simple things like auto-HTTPs redirection are not
implemented. Who knows when the administrators would implement a stronger CAPTCHA (i.e. Google's), or when
they would simply pull the plug. The moment to act was now.

# Web Scraping to the rescue

After pitching my idea to fellow members of the community, the response I got was positive. Some people were
concerned, though. Would my IP address get flagged? Would I crash RHDN's servers? And more interestingly, is their password CAPTCHA as
easy to defeat as it seems? If it was, surely someone else would have solved this problem a long time ago...
right?

Undeterred (and frankly because I was happy to have something to do during the COVID lockdown), I started
writing my Python script to scrape files from RHDN. My libraries of choice were BeautifulSoup and Mechanize.

## BeautifulSoup

BeautifulSoup is useful to access specific elements of an HTML page after it is parsed. Since the site follows
a rigid template, the strategy is to look at the HTML source code to identify where the desirable elements are
and assume that their position will remain the same throughout the scraping process.

{{< figure src="/img/html-parsing.png" position="center" caption="For example, this is where the password is stored in the HTML source" >}}

In the example above, I have found where the password is stored in the HTML source. It is inside a `span`
field with `class=note` as an attribute. Thus, retrieving the password with BeautifulSoup is as simple as
doing:

```python
# Get the content of the span tag containing the password,
# take the last word and remove last ")" character.
password = soup.find('span',
   attrs={'class': 'note'}).get_text().split(' ')[-1][:-1]
```

The same idea is generalized to extract the metadata of a ROM hack into a text file.

{{< figure src="/img/scraped_info.png" position="center" caption="Scraped metadata (highlighted in green)" >}}

## Mechanize

As for Mechanize, this is a library which I had not used previously. It is used to fill and submit PHP forms,
such as the password CAPTCHA. I also used it to submit search queries to the website, since the links to the
ROM hacks are not directly accessible in a text page for us to see (even more annoying, search results are limited to 200 results
per page, and must be parsed).

{{< figure src="/img/rhdn-search-form.png" position="center" caption="The search form that must be filled to get links to ROM hacks" >}}

## The scraper in action

When all is said and done, here is a screenshot of the scraper in action:

{{< figure src="/img/rhdn-scraper-in-action.png" position="center" caption="My RHDN scraper in action" >}}

And here is what the download results look like:

{{< figure src="/img/rhdn-scraper-result.png" position="center" caption="Three hacks have been downloaded, with their metadata" >}}

# Downloading the RHDN archive

And here is the reason we are all here today. On January 19 2021, I have performed a complete backup of all
the available ROM hacks on romhacking.net. Some hacks had their download links removed by their authors, which
is a shame... But, for the most part, everything of note is here.

[Download today! (5.4 Gb)](https://archive.org/details/rhdn-20210119)

As long as my scraper is compatible with RHDN's website (and weak CAPTCHA), I will do my best to keep backing
up the site's content for everyone's benefit. I believe the work of the ROM hacking community must be preserved
at all cost. Its history is part of gaming culture and should never be forgotten.

I might open source my scraper someday, but since this is fairly new and I want to keep a low profile to
limit the risk of DDoSing RHDN's servers, I will keep it closed for now. If you want the source, send me a
message and I'll give you access to my repository :smile:

# Closing comments

This was a wild ride for me. This is probably the biggest contribution I will do for retro gaming in my
lifetime. The project hit a sweet spot in terms of difficulty and public appeal. I am glad that my work got a
positive response in the hacking community, but I am ecstatic that this catalog can finally be considered "saved". The more people download the archive link I posted above, the more likely it is that these hacks will
live forever.

I especially want to thank my friend Mathieu who helped me debug part of this project. I was having a tough
time at fooling the CAPTCHA, and he noticed that RHDN's servers require us to send a "Referer" value in the
POST header to validate the download. Very strange, but I am glad that it was an easy fix. :smile:

## Some recommended ROM hacks and homebrews

If you are interested in retro gaming but have never tried ROM hacks, you are seriously missing out. Some of
the best retro gaming goodness is to be found here, and has been created by people like me and you for your
own enjoyment. To help you dive into this incredible catalog, here are some noteworthy ROM hacks or completely
original homebrew software available for free, along with some of my personal favorites:

* [Ultimate Mortal Kombat Trilogy](https://www.romhacking.net/hacks/1059/): For people like me who grew up playing Mortal Kombat on the Sega Genesis, this hack is simply out of this world.
* [Super Mario Bros. Two Players](https://www.romhacking.net/hacks/4180/): The first time Nintendo allowed
  players to play Mario simultaneously was with New Super Mario Bros. Wii. This hack reveals that such a feat
  would have been possible on the original NES!
* [Final Fantasy VII NES](https://www.romhacking.net/hacks/1657/): Final Fantasy VII is a revolutionary
  PlayStation 1 RPG. This hack modifies the original Final Fantasy to create a port of FFVII for the NES. It
  is surprisingly faithful to the PS1 classic.
* [Mario Adventure](https://www.romhacking.net/hacks/70/): A hack of Super Maro Bros. 3, often hailed as one
  of the greatest hacks of all time.
* [Super Mario Bros. 3Mix](https://www.romhacking.net/hacks/2068/): Another immensely successful Super Mario
  Bros. 3 hack, probably better than Mario Adventure.
* [Sonic 3D Blast: Director's Cuts](https://www.romhacking.net/hacks/3810/): The original creator of Sonic
  3D Blast went back and updated the game to more closely match his initial vision.
* [Tetris Zero](https://www.romhacking.net/hacks/1013/): Adds many features to Nintendo's Tetris for the NES,
  including multiplayer
* [Lawn Mower](https://www.romhacking.net/homebrew/42/): Fun little homebrew game where you must mow the lawn
  before your lawnmower runs out of gas.
* [Earthbound Halloween Hack](https://www.romhacking.net/hacks/1882/): Made by Toby Fox, the creator of
  Undertale, this hack of Earthbound is interesting.
* [Legend of Zelda and Super Metroid Crossover Randomizer](https://samus.link/): Mix Zelda and Super Metroid
  in a single randomized adventure. It's great.

{{< figure src="/img/lawnmower.png" position="center" caption="Have fun, may you make interesting discoveries!" >}}
