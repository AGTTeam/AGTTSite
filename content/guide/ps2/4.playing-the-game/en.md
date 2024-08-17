---
title: 'Playing the game'
navigation:
  current: '/playing-the-game'
  previous: '/patching-the-rom'
locale: 'en'
---

Now that you've got the patched ROM file, it's time to get ready to start playing!

---
::guide-platform-filter
---
filters: ['PS2', 'Emulator']
---

<div class="platform-filtered platform-ps2">

## Play on PS2
Thanks to an exploit found by CTurt in 2020 (FreeDVDBoot), it is now possible to play burned copies of games on an unmodified console. If you do not have a compatible console, or wish to play your games from USB/HDD rather than from a disc, follow the steps to use :guide-link{url="/guide/ps2/playing-the-game#open-ps2-loader" text="Open PS2 Loader"} instead. Note that this method will require you to mod your console.

### FreeDVDBoot-ESR patching

Before starting, we recommend creating a backup of the English-patched .iso you have created, as using the FreeDVDBoot ESR Patcher will overwrite the file you choose.

**Requirements:**
 
* A PlayStation 2 console [compatible with FreeDVDBoot](https://www.psdevwiki.com/ps2/FreeDVDBoot_Compatibility_List)
* A DVD (not a CD), preferably a DVD-R as other types such as DVD+RW put more strain on the PS2 laser
* A Windows, macOS, or Linux computer with a built-in disc burner/external USB disc burner
* [FreeDVDBoot ESR Patcher](https://www.ps2-home.com/forum/viewtopic.php?t=9778)

**Method:**
1. (Important!) Set your PS2 language to English. To do this, boot without a disc inserted, press CIRCLE to enter System Configuration and set your system language to English.
2. Download the latest version of [FreeDVDBoot ESR Patcher GUI](https://www.ps2-home.com/forum/viewtopic.php?t=9778) from the ps2-home thread.
3. Use [7-Zip](https://www.7-zip.org/download.html) to extract the .7z archive.
4. Run FDVDB_ESR_Patcher.exe. (The GUI uses uses the Windows .NET library. Linux and Mac users will need to run it with [Wine Mono](https://wiki.winehq.org/Mono)).
5. Select the English-patched .iso you created earlier via the OpenFileDialog, or just drag and drop the .iso onto the GUI.
6. Select the payload (only one is included for now).
7. Press "Patch!", and it will show in the log if the patch was successful.
    * If you get a "can't access file" error, restart FDVDB_ESR_Patcher.exe with admin privileges.
8. Burn your FreeDVDBoot-ESR patched .iso to a DVD-R (see below).
9. Place the burned disc into a compatible PS2, and enjoy!

See the [FreeDVDBoot Troubleshooting Guide](https://github.com/CTurt/FreeDVDBoot?tab=readme-ov-file#troubleshooting---please-read-if-the-above-didnt-work) if you run into any issues.

**Burning discs:**

You can burn the English-patched, ESR-patched .iso you've created to a DVD using most DVD burning software. We recommend:
* Windows: [ImgBurn](https://ninite.com/imgburn) or [Alcohol 120%](https://www.alcohol-soft.com/designzoo/downloada120fe.html)<br />
* Mac: [Disk Utility](https://support.apple.com/en-gb/guide/mac-help/mchl8addfd95/mac) (free) or [Toast](https://apps.apple.com/us/app/toast-dvd/id829469267?mt=12) ($19.99)<br />
* Linux: [K3b](https://apps.kde.org/k3b/) or [Brasero](https://wiki.gnome.org/Apps/Brasero)

To ensure the best compatibility for your disk, be sure to clean off any dust from the disc before starting and select the lowest burning speed option.

### Open PS2 Loader

Using Open PS2 Loader you can play games from a USB mass storage device. Unlike the FreeDVDBoot exploit, this method is compatible with all PS2 models. You will however need to modify your console to run homebrew software, using [FreeMCBoot (FMCB)](https://consolemods.org/wiki/PS2:FMCB), [FreeHDBoot (FHDB)](https://consolemods.org/wiki/PS2:FHDB), or another exploit of your choice.


**Requirements:**
* A PlayStation 2 capable of running homebrew
* [wLaunchELF](https://github.com/ps2homebrew/wLaunchELF) (formerly known as uLaunchELF)
* A Memory Card with minimal 3.5MB free
* A USB storage device of 8GB or more
* A Windows, macOS, or Linux computer

**Installing OPL:**

1. Download the latest version of OPL from the [official GitHub page](https://github.com/ps2homebrew/Open-PS2-Loader/releases/). (Be sure to read the repo's README first and do not download the pre-release).
2. Extract OPNPS2LD.elf from the archive and transfer the file to a USB storage device.
3. Plug the USB into your PS2 and open wLaunchELF.
4. Navigate to `mass:` and highlight the file from earlier.
5. Open the context menu (R1 by default) and select "Copy".
6. Navigate to the memory card where FMCB is installed and go to the BOOT folder.
7. Open the context menu again and select "Paste" (any older version of OPL will be overwritten).
8. Reset your console.
9. Navigate to the FreeMCBoot configurator.
10. Navigate to "Configure OSDSYS Options..." and select an empty "Configure Item" entry.
11. Give it a name and under "Path1" navigate to where you put OPL earlier (`mcX:/BOOT/OPNPS2LD.elf` where X is your memory card).
12. Return to the configurator main menu and save your config to a memory card.
13. Reset your console.

**Loading Backups via USB:**

When you boot into OPL for the first time with a USB storage device plugged in, the USB will be automatically populated with OPL folders.

Transfer your .iso images into either the CD or DVD folder, depending on your game's format.

Be warned that because of the PS2's extremely slow USB read speeds, you will experience issues such as choppy FMVs, long loading times, or some games not working at all.

---
*Modding information courtesy of [ConsoleMods](https://consolemods.org/wiki/PS2:Playing_Game_Backups) contributors.*


</div>

<div class="platform-filtered platform-emulator">

## Play on Emulator

The recommended emulator for PS2 games is [PCSX2](https://pcsx2.net/), which is available for Windows, macOS, and Linux. A fork of PCSX2, [AetherSX2](https://aethersx2.gitlab.io/), is also available for Android and iOS, however at the time of writing, most mobile devices are not powerful enough to support playing PS2 games smoothly, so we do not recommend it.

### Dumping BIOS

Regardless of the platform you intend to play on, PCSX2 requires you to provide your own PS2 BIOS files in order to run. For more information on how to do this, please see the [PCSX2 Dumping BIOS guide](https://pcsx2.net/docs/setup/bios).

Note that this guide refers to using "uLaunchELF", this is the old name of "wLaunchELF".

---

Once you have your PS2 BIOS files dumped, you can move onto to setting up PCSX2! 

**Select the platform you wish to use:**
::guide-platform-filter
---
filters: ['Windows', 'macOS', 'Linux']
filterSuffix: 'emulator'
---

<div class="platform-filtered platform-windows">

### Emulate on Windows

**Requirements:**
* Windows computer
* PCSX2
* [Visual C++ 2019 x86 Redistributables](https://support.microsoft.com/en-us/help/2977003/)
    * 64-bit version (x64) is required for 1.7.0 and higher (though early 1.7 builds still require 32-bit versions)
	
**Setup:**
1. Download the [latest Nightly build of PCSX2](https://pcsx2.net/downloads) for Windows
2. Use [7-Zip](https://www.7-zip.org/download.html) to extract the .7z archive.
    * Install 7-Zip.
	* Right click on the archive.
	* Find the entry for 7-Zip.
	* Click on "Extract to [folder name]" option.
	* This will extract PCSX2 to the same directory where you put the .7z file. 

**Launching PCSX2:**
1. Run the pcsx2-qt.exe.
2. Follow the setup wizard, and add the folder where you saved your patched *:guide-data.iso* to the Game Directories.
3. Once the setup is complete, you should see *:guide-data* in your game library. Simply double click on it, and enjoy!

PCSX2 has a number of advanced features, such as configuring controllers and tweaking display settings. You can check out the [PCSX2 Website](https://pcsx2.net/docs/category/post-installation) for more information.

---
*Guide courtesy of [PCSX2 documentation](https://pcsx2.net/docs/category/setup) contributors.*

</div>

<div class="platform-filtered platform-macos">

### Emulate on macOS

**Requirements:**
* Mac computer
* PCSX2

**Setup:**
1. Download the [latest Nightly build of PCSX2](https://pcsx2.net/downloads) for MacOS
2. Double click the .tar.xz archive to extract it.

**Launching PCSX2:**
1. Run PCSX2. If you get an error message that the file cannot be opened "because the developer can't be verified", follow these steps:
	* Click on the Apple logo in the top left of your screen and go to "System Settings...".
	* Navigate to "Privacy & Security" and scroll down.
	* Under "Security", find PCSX2 and press "Open Anyway", then follow the steps to open the app.
2. Follow the setup wizard, and add the folder where you saved your patched *:guide-data.iso* to the Game Directories.
3. Once the setup is complete, you should see *:guide-data* in your game library. Simply double click on it, and enjoy!

PCSX2 has a number of advanced features, such as configuring controllers and tweaking display settings. You can check out the [PCSX2 Website](https://pcsx2.net/docs/category/post-installation) for more information.

</div>

<div class="platform-filtered platform-linux">

### Emulate on Linux

**Requirements:**
* Linux computer
* PCSX2

**AppImage:**
1. Download the [latest Nightly AppImage build of PCSX2](https://pcsx2.net/downloads) for Linux.
2. You will likely have to make the AppImage file executable. There are a few ways to do this:
    * Right-click on the AppImage, choose properties, then find the option to mark as executable. (This will vary from distros to distros).
	* Or in a terminal, run `chmod +x <path-to-AppImage-file>`
	
You should be able to open the file by double-clicking it or by running it through terminal.

**Flatpak:**
1. In order to install PCSX2 from Flatpak using the command line, open the terminal and type `flatpak install net.pcsx2.PCSX2`
    * Typing `flatpak install pcsx2` should find this same reference.
2. When asked if you want to proceed, type "Y" and press "Enter".
3. PCSX2 is now installed on your machine!

Some distributions and desktop environments have a visual software manager which can also install Flatpak applications. These include:
* KDE Plasma's Discover
* GNOME Software
* Linux Mint's Software Manager
* Manjaro's pamac
* Pop!_OS' Repoman

In order to update PCSX2 in the future, you can type `flatpak update`, which will update all of your out-of-date Flatpak applications.
* If you want to exclusively update PCSX2, you can type `flatpak update net.pcsx2.PCSX2`.
* You will be asked if you would like to proceed. Type "Y" and press "Enter".

PCSX2 has a number of advanced features, such as configuring controllers and tweaking display settings. You can check out the [PCSX2 Website](https://pcsx2.net/docs/category/post-installation) for more information.

---
*Guide courtesy of [PCSX2 documentation](https://pcsx2.net/docs/category/setup) contributors.*
 
</div>

::

</div>
