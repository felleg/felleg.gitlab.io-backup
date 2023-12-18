+++
title = "Running macOS on your Linux machine"
date = "2020-09-14"
author = "Félix Léger"
cover = "img/tux-and-apple.jpeg"
tags = ["linux"]
keywords = ["macOS", "Linux", "VM", "virtual machine", "KVM", "QEMU"]
description = "It has become so easy, even Mac users could do it!"
showFullContent = false
+++

# Disclaimer

It's worth noting from the start that Apple doesn't allow installing macOS on non-Apple hardware (because of
course they don't), so to use this legally you must have Linux installed on Apple hardware. Thought you could use
this to legally run macOS without paying for a slice of Apple's pie? Think again! This information is shared
for educational purposes only.

# Anyway...

I don't want to start a religious war on this post, but I'll just say it right away: indeed, I'm not the
biggest fan of macOS. Building on top of Unix is cool, but I don't particalurly care for  the part  Apple built on top of
Unix. However, even I do have to admit this fact: love it or hate it, macOS is here to stay.

While I am not a fan of Apple, as a developer I can certainly envy their business model. As far as I can tell,
if you want to develop software for their mobile devices, you need to use desktop hardware made by Apple
themselves. This means that even if me and my team were the biggest Apple haters, we would still need to give
them money in order to buy a computer we normally wouldn't want. The same thing applies if we want to automate
the building and testing of iOS applications. But, who am I kidding, nobody can blame them, right? If we found
ourselves to be in their position, we would do the same, right? *Right?*

Anyway, let's leave all this stress behind and focus on the reason you probably clicked on this article: it
has become easier than ever to run a macOS virtual machine on your computer. You can even use USB devices on
it, seamlessly! In theory, this means you could develop and build iOS applications to support your user base,
without ever needing to pay for a machine (you'd still have to pay the Apple Developer fee... choose your
battles).

Here's how to do it. I hope you know how to launch scripts from the command line.

1. Enable virtualization on your machine.
   - This is usually done by accessing your PC's BIOS menu. Since each machine has a different way of
     accessing this menu, you'll have to figure this on your own. It usually involves pressing keys like F12
     at boot.
1. In a CLI, do `git clone https://github.com/foxlet/macOS-Simple-KVM.git`
   - Huge shoutout and bro-fist to [Foxlet](https://twitter.com/FoxletFox) for their work!
1. In the repo you cloned, run `./jumpstart.sh`
1. Run these commands:
   ```bash
   $ sudo apt update
   $ sudo apt install qemu
   $ qemu-img create -f qcow2 MyDisk.qcow2 64G
   $ echo "-drive id=SystemDisk,if=none,file=MyDisk.qcow \\" >> basic.sh
   $ echo "-device ide-hd,bus=sata.4,drive=SystemDisk \\" >> basic.sh
   ```
1. Launch `./basic.sh`.
   - This will open a VM, we're almost there! We just have to install macOS on that VM.
1. [Follow this video for the remaining instructions](/videos/20200605_setupMacVM.mp4), since an image is worth a thousand words. Feel free to watch at double speed.

Bonus knowledge! Do you want to know how to use your USB devices in the Mac VM you just created? Well, you're
in luck, [this video](/videos/20200605_connectUsbToMacVm.mp4) shows you exactly how to do that. :smile:
