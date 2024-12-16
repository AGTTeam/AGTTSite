---
title: 'Playing the game'
navigation:
  current: '/playing-the-game'
  previous: '/patching-the-rom'
locale: 'en'
---

Now that you've got the patched ROM file, it's time to get ready to start playing!

---

**Select the platform you want to play on:**
::guide-platform-filter
---
filters: ['WonderSwan', 'PC Emulator', 'Mobile Emulator']
---

<div class="platform-filtered platform-wonderswan">

## Play on WonderSwan
**Requirements:**
* WonderSwan, WonderSwan Color or SwanCrystal game system
* Flash cartridge (e.g. WS Flash Masta USB or InsideGadgets WS Cart)
* Windows, macOS, or Linux computer

To play the Multiplayer Mode, you will need two WonderSwan consoles, as well as a WonderSwan Link Cable.

**WS Flash Masta USB:**
1. Download the [FlashMasta software](https://www.flashmasta.com/software-downloads/) for your platform (Windows, macOS, Linux).
1. Connect the cartridge to your PC using a USB cable.
2. Run the FlashMasta software on your computer.
3. If you want to add a single game, simply write it to the first slot. If you want to add multiple games to the cartridge, write a menu file first ([WS CartFriend](https://github.com/WonderfulToolchain/ws-cartfriend/releases/tag/v0.1.4) is recommended), and then write your ROMs to the subsequent slots.

**InsideGadgets WS 8MB:**
::guide-notice
The iG Cartridge only supports SRAM saves.
::

1. Connect the cart to a GBxCart using the provided adapter.
2. Use the [GBxCart Flasher](https://shop.insidegadgets.com/wp-content/uploads/2022/12/GBxCart_RW_Wonderswan_8MB_Flasher_v1.0.zip) to write ROM files to the cart. Simply drag and drop the ROM file to the .exe file in Windows Explorer. The [Save Management Program](https://shop.insidegadgets.com/wp-content/uploads/2022/12/GBxCart_RW_Wonderswan_Save_Management_v1.1.zip) works in a similar way, and is also capable of backing up save files.

---
*Information courtesy of [ConsoleMods](https://consolemods.org/wiki/WonderSwan:Playing_Game_Backups) contributors.*

</div>
<div class="platform-filtered platform-pc_emulator">

## Emulate on Windows, macOS, or Linux
There are a few options for PC emulators, but the one we recommend is ares for its ease-of-use and emulation accuracy.

#### Play using ares
**Requirements:**
* Windows, macOS or Linux computer
* Ares

**Method:**
1. Download the [latest version of ares](https://ares-emu.net/download) for your platform (Windows, macOS, Linux). 
2. Once downloaded, extract the files into an easily accessible folder. No installation is necessary.
3. The first thing to do is setup the controls. In the top bar, go to "Settings", then "Input". In the window that pops up, go to the first dropdown menu and find "WonderSwan". 
4. To map a button, double click on it, and the prompt "<img src="https://raw.githubusercontent.com/FortAwesome/Font-Awesome/6.x/svgs/solid/right-long.svg" alt="right arrow" width="11" height="11">(assign ...)" will appear. Then, press the button you'd like to use. (You can use either a keyboard and mouse or a gamepad controller for this.)
5. \*Optional\* If you'd like to make the emulator fullscreen, go to "Hotkeys" in the left bar, then map a button to "Toggle Fullscreen". Press this button whenever you'd like to go into or out of fullscreen mode.
6. To play the game, select "Load" in the top menu bar, then navigate to Bandai > WonderSwan and choose the ROM file you patched earlier. Enjoy!


#### Other PC emulators
* [Mednafen](https://mednafen.github.io/releases/)－ Another popular PC emulator with great debugging options, but lacks a UI so can be challenging to get used to.
* [RetroArch](https://www.retroarch.com/?page=platforms) - A powerful frontend for emulators, which utilizes Mednafen for running WonderSwan games. It provides a lot of options and customization, but is not as user-friendly as ares.

</div>

<div class="platform-filtered platform-mobile_emulator">

## Emulate on Mobile

The best way to emulate WonderSwan on Android and iOS is to use the Beetle Cygne core for RetroArch, though it requires some set up first.

#### Play using RetroArch Emulator

1. Transfer the patched ROM file onto your device. We recommend creating a specific 'WonderSwan' folder to keep things organized.
2. Download RetroArch off the [Google Play Store](https://play.google.com/store/apps/details?id=com.retroarch) (Android), or [App Store](https://apps.apple.com/gb/app/retroarch/id6499539433) (iOS/iPadOS/tvOS).
3. Open the app, tap "Online Updater", scroll down and download all of the updates.
4. Scroll back to the top of the Online Updater menu, and go to "Core Downloader". Scroll down to the WonderSwan cores, and download the *Bandai - WonderSwan/Color (Beetle Cygne)* core.
5. From the Navigation Bar, select the <img src="https://raw.githubusercontent.com/FortAwesome/Font-Awesome/6.x/svgs/solid/list.svg" alt="three lines" width="11" height="11"> icon which will take you to the Playlists Menu. 
6. Press "Import Content", then press "Scan Directory", navigate to the folder where your ROMs are, and tap "\<Scan This Directory\>".
7. Once that's finished, return to the Playlist Menu and scroll down. A WonderSwan playlist containing all of your transferred .ws ROMs should have been created.
8. Open the playlist, select the patched *:guide-data* ROM file, and press "Run". Select the Beetle Cygne core, and enjoy!

</div>