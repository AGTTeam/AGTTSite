---
title: 'Playing on Wii'
navigation:
  current: '/playing-on-wii'
  previous: '/patching-the-rom'
  next: '/playing-on-dolphin'
locale: 'en'
---
If you've followed the steps to patch the `.iso`, continue down to the [Backup Loader Method](#patched-iso-method-using-a-backup-loader). Else, if you wish to play using the game's original disc, follow the Riivolution Method.

### Riivolution Method

**Requirements:**
 
* A  Nintendo Wii, Wii U or Wii Mini game system
* Custom firmware [setup on your system](https://wii.hacks.guide/). If you followed the guide to dumping your ROM earlier, you've probably already done this!
* The original retail disc for *:guide-data*
* Riivolution
* An SD card

**Method:**
1) Insert your SD card into your computer.
2) Download [Riivolution](https://aerialx.github.io/rvlution.net/wiki/Riivolution/) and extract the .zip file.
3) Copy the "Riivolution" folder you've extracted and put it in the "apps" folder of your SD card.
4) Download your preferred choice of the Lite or Full patch from the :guide-link{url="/" text="patch page"}.
5) Unzip the :guide-data{data="patch-name"}Patch file and copy the contents of the 'patch' subfolder onto the root of your SD card. 
    * If done correctly, you should have two separate 'riivolution' folders on your SD card. One in the 'apps' subfolder, with the files downloaded from Github, and one on the root of your SD card, with the :guide-data{data="patch-name"}.xml copied from the patch. 
	
	<div style="display: inline-block; margin-left: 2.3em; margin-left: 2.3em; padding: 20px; background-color: var(--main-light-gray); white-space: pre-wrap;">

	💾sd:
 	┣ 📂 apps
 	┃ ┗ 📂 Riivolution
 	┃      ┣ 📜boot.elf
 	┃      ┣ 📜icon.png
 	┃      ┣ 📜readme.txt
 	┃      ┗ 📜meta.xml
 	┣ 📂 Riivolution
 	┃  ┗ 📜 :guide-data{data="patch-name"}.xml
 	┗  📂 :guide-data{data="patch-name"}
6) Eject your SD card and insert it, and the :guide-data disc, into your Wii.
7) Go to the Homebrew Channel on your Wii and Launch Riivolution.
    * \*OPTIONAL* You can add the Riivolution Forwarder Channel to the Wii menu by selecting the "Install" option to the right. This negates the need to launch the Homebrew Channel every time you want to launch Riivolution.
8) Make sure the translation patch is "enabled", launch the game, and enjoy!



### Patched ISO Method (using a Backup Loader)
Using this method, you will be able to load .iso or .wbfs files from an External USB Hard Drive or SD card to your Wii via a Backup Loader. (It is not recommended to use a USB Flash drive for loading games.)

Two popular loaders are USB Loader GX and WiiFlow Lite. We recommend the former, as it is easy to use and still receives regular updates.

**Requirements:**
* A  Nintendo Wii, Wii U or Wii Mini game system
* Custom firmware [setup on your system](https://wii.hacks.guide/). If you followed the guide to dumping your ROM earlier, you've probably already done this!
* The latest version of [cIOS](https://wii.hacks.guide/cios) installed on your system
* A hard-patched copy of :guide-data in .iso format created in [Step 3](patching-the-rom#hard-patching-the-iso)
* USB Loader GX
* An SD card
* \*Optional, but recommended* External USB Hard Drive
* Windows, macOS or Linux computer

**Preparing your External USB Hard Drive (if using):**

In order to be recognized by USB Loader GX, your hard drive's primary partition should be formatted to FAT32. Follow [these steps](https://sites.google.com/site/completesg/backup-launchers/prepare-sd-usb?authuser=0) to format your hard drive.

::guide-notice
Formatting or re-partitioning will erase all data on your drive! Please take care to ensure you select the correct drive and have backed up any files you wish to keep.
::

**Transferring the game onto your device:**

While you can manually transfer games to your USB Hard Drive or SD card, we recommend using software designed for this purpose to ensure the game's directory structure is set up correctly.

For Windows, this means [using Wii Backup Manager](https://wii.hacks.guide/wii-backups#using-wii-backup-manager), and for MacOS or Linux users, using the equivalent [Wii Backup Fusion](https://wii.hacks.guide/wii-backups#using-wii-backup-fusion).


**Using USB Loader GX on your Wii:**

1. Ensure that your Wii has cIOS 248-251 installed - this can be checked with applications like [SysChecker](https://wii.hacks.guide/syscheck) or d2x cIOS installer.
2. Download the latest version of [USB Loader GX](https://github.com/wiidev/usbloadergx/releases/tag/v3.0-r1281) and extract the .zip.
3. Inside the .zip is a folder named "apps". Inside this "apps" folder, there is another named "usbloader_gx". Move the "usbloader_gx" folder to your SD card's "apps" folder.
4. \*OPTIONAL* If you wish, you can download the USB Loader GX Forwarder channel for [Wii](https://github.com/wiidev/usbloadergx/raw/updates/USBLoaderGX_forwarder%5BUNEO%5D_Wii.wad) or [vWii](https://github.com/wiidev/usbloadergx/raw/updates/USBLoaderGX_forwarder%5BUNEO%5D_vWii.wad) and install it with a WAD manager such as [YAWM](https://wii.hacks.guide/yawmme.html).  This negates the need to launch the Homebrew Channel every time you want to launch USB Loader GX.
5. Launch USB Loader GX via either the Homebrew channel, or the USB Loader GX channel if you've installed it.
    * If you're using an External USB Hard Drive, plug it into "port 0" of your Wii. This is the bottom port if Wii is placed horizontally, or the port closest to the edge on the left when the Wii is placed vertically.
	* If you're using an SD card, on USB Loader GX's loading screen, press A when prompted to enable SD card mode.
6. \*OPTIONAL* To download game covers and artwork, press the 1 Button on your Wii Remote and follow the steps. (Internet connection required).
7. Navigate to :guide-data, press "Start" and enjoy!

If USB Loader GX says “Waiting for HDD…” with a 20 second countdown, it is very likely that it cannot detect your USB device. Try to exit out of the app, ensure your USB device is plugged into the correct port. It may also be formatted incorrectly. Ensure that your USB drive is formatted to FAT32, with the MBR partition table, and 32kb (32768 bytes) allocation unit size/cluster size.

For more information on customizing USB Loader GX and troubleshooting issues, please see the [wii.hacks.guide page](https://wii.hacks.guide/wii-loaders#usb-loader-gx).

---
*Information courtesy of [wii.hacks.guide](https://wii.hacks.guide/wii-loaders) and [wiki.hacks.guide](https://wiki.hacks.guide/wiki/Wii) contributors.*


