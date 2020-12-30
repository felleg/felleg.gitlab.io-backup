---
title: "History Fighter, a game I made!"
date: 2020-12-30T11:51:17-05:00
cover: img/history-fighter.png
tags:
  - game
  - history
  - python
  - blessed
---

During Christmas, I learned about the
[Chronology](https://www.amazon.ca/Buffalo-Games-Chronology-Board-Game/dp/B007MHIYFM) and
[Timeline](https://www.amazon.ca/Zygomatic-ASMTL03CLEN-Timeline-Classic/dp/B07FWV2HDX/) series of games. I
immediately fell in love with the concept: it's a fun way to learn and have discussions about human history.
In theory, anyone could maintain a database of human events, inventions, etc. and play the game, since it's so
simple.

Well, that's what I attempted to do. Using the `blessed` library for UI, I created a Python script called
"History Fighter" that aims to recreate a single-player Chronology-like experience. The player can continue
building their timeline until they make a single mistake. See how far you can go in history (without
cheating!)

You can download the game here: https://gitlab.com/felleg/history-fighter

Assuming you can run Python 3 on your computer, all you will need is to install the `blessed` library.

```bash
pip3 install blessed
```

Then, open a terminal and run the game by doing
```bash
python3 history-fighter.py
```

Have fun :smiley:
