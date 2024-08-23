---
title: 'Playing on Emulator'
navigation:
  current: '/playing-on-dolphin'
  previous: '/playing-on-wii'
locale: 'en'
---
The recommended emulator for Wii games is [Dolphin](https://dolphin-emu.org/), which is available for Windows, macOS, and Linux. Dolphin is also available for Android, however, at the time of writing, most mobile devices are not powerful enough to support playing Wii games smoothly so we do not recommend it.

## Dolphin Setup
To install Dolphin on Windows PC or Mac, simply download the latest release or nightly build from the [Download page](https://dolphin-emu.org/download/) and extract it into a new folder.

Linux users should follow the [guide on the Dolphin Emulator Wiki](https://wiki.dolphin-emu.org/index.php?title=Installing_Dolphin#Linux) to install for your distros.

**Configuring Controllers:**

Once Dolphin is installed, it's time to configure your controllers!

To use a real Wii Remote and Nunchuck, you will need a PC that supports Bluetooth. For the sensor bar, you can purchase a USB or Wireless Sensor Bar which connects to your computer, or, you can use the Wii's Sensor bar by plugging it into your Wii and turning the console on so power is supplied to the bar. (Ensure that your Wii Remote is connected to Dolphin first, and not the Wii.)

Alternatively, you can emulate the Wii Remote using a keyboard and mouse, or a gamepad controller.

To configure your real or emulated Wii Remote, follow [these steps](https://wiki.dolphin-emu.org/index.php?title=Configuring_Controllers#Wii_Remote).

### Riivolution Method

**Requirements:**
* Dolphin version 5.0-15407 or above
* Windows, macOS, or Linux computer

**Method:**
1) Download your preferred choice of the Lite or Full patch from the :guide-link{url="/" text="patch page"}.
2) Unzip the :guide-data{data="patch-name"}Patch file and copy the contents of the 'patch' folder to Dolphin’s 'Riivolution' folder. The location will depend on your OS.
	* **Windows:** `%APPDATA%/Dolphin Emulator/Load/Riivolution`
	    * (If you previously had an older version of Dolphin installed, this can instead be found at `%USERPROFILE%/Documents/Dolphin Emulator/Load/Riivolution`)
	* **MacOS:** `~/Library/Application Support/Dolphin/Load/Riivolution` (to get here, open Finder, press ⌘+Shift+G, and copy the directory)
	* **Linux:** Go to either  `~/.dolphin-emu/Load/Riivolution` or `~/.local/share/dolphin-emu/Load/Riivolution`
	
	<div style="display: inline-block; margin-left: 2.3em; margin-left: 2.3em; padding: 20px; background-color: var(--main-light-gray); white-space: pre-wrap;">

	💾 Dolphin Emulator Folder:
 	┗ 📂 Load
     ┗ 📂 Riivolution
          ┣ 📂 Riivolution
          ┃ ┗📜 :guide-data{data="patch-name"}.xml
          ┗ 📂 :guide-data{data="patch-name"}
	
2) If this is your first-time using Dolphin, double-click the main window where prompted to set the game directory to the folder where your dumped .iso is stored. If you can see other games in the list but not :guide-data, be sure to check your paths by going to "Config" in the top bar, then selecting "Paths".
3) Find :guide-data{data="jpn"} in your games list and right click, then select "Start with Riivolution Patches...". If done correctly, Dolphin should automatically pick up the patch, but if not, you can also manually navigate to the :guide-data{data="patch-name"}.xml file by choosing "Open Riivolution XML..."
4) Enable the 'Translation Patch' in the dropdown menu.
	* \*OPTIONAL* You can use the "Save as Preset" button to create a new entry in your game list with the translation patch automatically applied, rather than needing to 'start it with Riivolution Patches' every time.
5) Launch the game by double-clicking on it, and enjoy!

### Patched ISO Method

**Requirements:**
* Dolphin
* A hard-patched copy of :guide-data in .iso format created in [Step 3](patching-the-rom#hard-patching-the-iso)
* A Windows, macOS, or Linux computer

**Method:**
1) Run Dolphin.
2) If this is your first-time using Dolphin, double-click the main window where prompted to set the game directory to the folder where the patched .iso is stored. If you can see other games in the list but not :guide-data ( :guide-data{data="jpn"} ), be sure to check your paths by going to "Config" in the top bar, then selecting "Paths".
3) Launch the game by double-clicking on it, and enjoy!

If you have previously played the original game in Dolphin, the game's banner image may still appear in Japanese. You can update this by right-clicking on the game in the file list, selecting 'Open Wii Save Folder', and deleting the 'banner.bin'. Then, in Dolphin, go to View > Purge Game List Cache. The banner image will now appear as a grey 'X', and will update after you open and save the game.

---
*Emulation information courtesy of [Dolphin Emulator Wiki](https://wiki.dolphin-emu.org/) contributors.*


