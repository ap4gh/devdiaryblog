---
title: 'How to fix WiFi issue on HP 15 Laptops'
date: '2019-06-08'
author: 'Amrit Pandey'
author_website: 'https://amritpandey.dev'
---

Yesterday I bought a mid ranged HP 15 laptop. It costed around $420 and had FreeDOS installed. It has 4GB DD4 RAM, Integrated Intel HD Graphics, 1TB 5400RPM HDD and i3-7th GEN Dual core processor. I am going to use it for web development and general purposes programming. I will also be adding a SSD.

I set it up today, installed [Peppermint OS](https://peppermintos.com/). Installation went great, no BIOS settings were conserved or locked, I did not had to tweak low-level settings to install the OS. But the first and only problem I faced was WiFi, it did not worked.

At first I thought, maybe this laptop does not have a WiFi hardware, but then what computer device in 2019 don't have WiFi?! So I visited the HP product specifications page for this laptop and found that the wireless and bluetooth modules indeed exist. Which meant Ubuntu did not had driver code for the chipset. Linux distros sometimes can lack driver softwares to support the hardware because comapanies do not release their source code. 

I found that it was a common issue, the HP 15 laptops have RealTek network chipsets and driver support for them could not be found pre-installed on any distro. In worst case scenario if this happens to your laptop where neither the harware vendor nor the OS makers have supporting driver code for the chipset, you might not be able to use that hardware at all.

Fortunately, after googling and browsing youtube, I found the driver codes for this chipset. So if you have a HP 15 laptop and you've installed a linux distro, follow this procedure to fix and enable WiFi.

To connect to the internet I used the `USB Tethering` option on my phone's wifi hotspot. Make sure you connect the laptop to the internet either through a LAN ethernet cable or mobile hotspot before following this fix.

### Step 1
 Install the latest `make` software. Make is used to compile C/C++ programs because driver softwares are written in C. In debian/ubuntu you can do this to upgrade `make`.
```
sudo apt install --reinstall make
```
**BUT**! It is recommended that you install all the build tools that are required. So in debian you can do this install build tools.
```
sudo apt install build-essential
```

### Step 2
Update your kernel softwares. If you are using an old build of the distro, it'll have old kernel software(lower than v4.1), the chipset driver code may not work for it. It is a good idea to upgrade the kernel.
```
sudo apt dist-upgrade
```

### Step 3
Clone this repo, which has driver codes for most of the HP 15 laptop chipset. Thanks to the github user `lwfinger` for maintaining the repo. Clone it where ever you want.
```
git clone https://github.com/lwfinger/rtlwifi_new.git
```

### Step 4
Now, move into the directory, checkout the extended branch with git and compile-install the source code.
```
cd rtlwifi_new
git checkout origin/extended -b extended
sudo make install
```

### Step 5
Once the program is compiled and installed, you need to load it as a module in the kernel so that it is able to interact with the wifi hardware.
```
sudo modprobe -r rtl8723de
sudo modprobe rtl8723de
```

 If everything went correctly you'll now see WiFi start scanning for available networks. If you get an error like
```
modprobe: ERROR: could not insert ‘rtl8723de’: Required key not available
```
This means that you have `secured booting` option turned on in your BIOS. Don't worry, you just have to turn it off from BIOS settings. In HP you can go to the BIOS settings by restarting the computer, pressing `F5` on boot screen and selecting BIOS, inside BIOS, turn off secure booting by pressing `F6`. Repeat steps 1-5 after this.

### Slow speed?
If you experience slow internet speed, try running this command.
```
sudo modprobe -r rtl8723de && sleep 5 && sudo modprobe rtl8723de ant_sel=2
```

This worked for me without any errors in one attempt, so I did not had to look for troubleshooting fixes. However if this did not worked for you, I suggest you post this problem on [HP forums](https://h30434.www3.hp.com/) and google this fix for your laptop's model.

