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
filters: ['PSP', 'PS Vita', 'Emulator']
---

<div class="platform-filtered platform-psp">

## Play on PSP

**Requirements:**
* Sony PSP console
* Custom firmware [setup on your system](https://www.pspunk.com/psp-cfw/). If you followed the guide to dumping your ROM earlier, you've probably already done this!
* Memory Stick with at least 2 GB of free space
* Mini USB Cable
* A Windows, macOS, or Linux computer

**Setup:**
1. Connect your PSP to a PC via USB and enter USB mode.
2. Navigate to the "ISO" folder on the root of your Memory Stick (or Internal Storage on a PSP Go) and copy the patched .iso you previously created to this folder. Exit USB mode when finished.
3. If you have a non-permanent CFW, launch it now.
4. Navigate to the patched *:guide-data* file under Game > Memory Stick (or Game > Internal Storage on a PSP Go) and launch it. The game will launch and play just as if it were being played off a UMD. Enjoy!


</div>

<div class="platform-filtered platform-ps_vita">

## Play on PS Vita
Playing on the PS Vita requires you to have custom firmware installed on your console, as well as the homebrew app Adrenaline which is used for playing PSP games.

**Requirements:**
* Sony PS Vita console 
* PS Vita Memory Card with at least 8GB capacity, or a MicroSD card and SD2Vita Adapter
* Micro USB cable, or an internet connection on your PS Vita
* A Windows, macOS, or Linux computer

::guide-notice
Please take caution following these steps to avoid bricking your system.
::

**First-Time Setup:**
1. Follow [the steps on vita.hacks](https://vita.hacks.guide/) to install custom firmware onto your PS Vita.
2. Next, follow [these steps](https://vita.hacks.guide/adrenaline.html) to install Adrenaline.
3. *OPTIONAL:* If you wish to use an SD2Vita adapter in order to expand your storage options, you will also need to install a plugin to redirect your PS Vita's main storage location. We recommend using [YAMT](https://vita.hacks.guide/yamt.html).

### Transferring the patched ISO file to your PS Vita

**Transferring files via Cable:**
1. Open VitaShell. (If the WiFi on the Vita is turned off, it will ask if you want to enable it - this is only necessary of you plan to use the wireless file transfer feature, otherwise it doesn't matter if off or on).
2. Once VitaShell loads, press START. A menu will appear.
3. If you are using an SD2Vita, make sure the USB device option in the menu is set to SD2Vita. If not, select your primary storage device (Memory Card, if you only have an official Vita Memory Card for storage).
4. Next, under SELECT button, choose USB.
5. Press START again to close the menu.
6. Press SELECT. You will now see a prompt on screen to connect via USB. Leave that prompt open, and do so.
7. Now when you connect your Vita to PC via cable, it will show you all of your storage locations.
8. Navigate to the ux0:/pspemu/ISO/ folder and copy the patched .iso you previously created to this folder. 
9. Be sure to Safely Remove Device from your computer before unplugging the USB cable, then press CIRCLE to leave the USB mode.

**Transferring files via WiFi FTP:**
1. Turn on WiFi on your PS Vita, and make sure that Airplane Mode is turned off. Your vita and computer should both be connected to the same WiFi network.
2. Open VitaShell, then press START to bring up the main settings. 
3. Change the "SELECT button" option to "FTP", then press START to exit out of the main settings. Now, press SELECT. You should see a message with an FTP address, like this:
`ftp://192.168.86.XX:1337`
<br />The "XX" in the address above will be unique to the IP address your Vita is currently using.
4. On your preferred FTP client (such as [WinSCP](https://winscp.net/eng/index.php) or [FileZilla](https://filezilla-project.org/) for Windows), start a new FTP connection. For the address, type in 192.168.86.XX (with "XX" being whatever is displayed on your Vita), and change the port to "1337". 
5. Press the connect button on your client, and when it asks you for a username and password, don't type anything and just press OK instead. You should now be connected, with access to all of your file system on the device.
6. Navigate to the ux0:/pspemu/ISO/ folder and copy the patched .iso you previously created to this folder. It may take some time to complete. Ensure that your vita doesn't go to sleep during this process.

### Playing the game on Adrenaline:
1. Open Adrenaline.
2. Navigate to the patched *:guide-data* file under Game > Memory Stick.
3. Launch the game and enjoy! 

</div>

<div class="platform-filtered platform-emulator">

## Play on Emulators - TODO

**Select the type of emulator you wish to use:**
::guide-platform-filter
---
filters: ['PC Emulator', 'Android', 'iOS']
filterSuffix: 'emulator'
---

<div class="platform-filtered platform-pc_emulator">

### Emulate on Windows, macOS, or Linux
There are a few options for PC DS emulators, but the one we recommend is melonDS for its emulation accuracy and performance.

#### melonDS setup
**Requirements:**
* Windows, macOS or Linux computer

**Setup:**

Simply [download melonDS](https://melonds.kuribo64.net/downloads.php) (**v0.9.4+**) from the project website for your platform (Windows, macOS, Linux) and save it somewhere easily accessible to your computer.

**Playing the game:**

With melonDS setup, all you need to do in order to play the game is select "File"  "Open ROM" in the top menu bar and choose the ROM file you patched earlier.

melonDS has a number of advanced features, such as configuring controllers and tweaking display settings. You can check out the [melonDS Website](https://melonds.kuribo64.net/) for more information.

#### Other PC emulators
* [DeSmuME](https://desmume.org/)-çAnother popular PC emulator, but may have performance issues with certain games.
* [No$GBA](https://www.nogba.com/)-çNot recommended due to severe general emulation accuracy issues. It's also infrequently updated and not very user-friendly.

</div>

<div class="platform-filtered platform-android">

### Emulate on Android

The best DS emulator on Android is [DraStic](https://play.google.com/store/apps/details?id=com.dsemu.drastic), which has a great interface and is simple to install. Another alternative is [RetroArch](https://play.google.com/store/apps/details?id=com.retroarch) using the MelonDS emulation core.

**Requirements:**
* Android Device with the Google Play store
* Drastic or RetroArch

#### Play using DraStic Emulator

1. Transfer the patched ROM file onto your device. We recommend creating a specific 'nds' folder to keep things organized.
2. Download [DraStic](https://play.google.com/store/apps/details?id=com.dsemu.drastic) off the Google Play Store.
3. Open the app, and select "load new game". 
4. Navigate to the patched *:guide-data* ROM file, press "Start Game", and enjoy!

#### Play using RetroArch Emulator

1. Transfer the patched ROM file onto your device. We recommend creating a specific 'nds' folder to keep things organized.
2. Download [RetroArch](https://play.google.com/store/apps/details?id=com.retroarch) off the Google Play Store.
3. Open the app, tap "Online Updater", scroll down and download all of the updates.
4. Scroll back to the top of the Online Updater menu, and go to "Core Downloader". Scroll down to the Nintendo DS Cores, and download the *Nintendo - DS (melonDS)*  and *Nintendo - DS (DeSmuME)* cores.
5. From the Navigation Bar, select the <img src="https://raw.githubusercontent.com/FortAwesome/Font-Awesome/6.x/svgs/solid/list.svg" alt="three lines" width="11" height="11"> icon which will take you to the Playlists Menu. 
6. Press "Import Content", then press "Scan Directory", navigate to the folder where your ROMs are, and tap "\<Scan This Directory\>".
7. Once that's finished, return to the Playlist Menu and scroll down. A Nintendo DS playlist containing all of your transferred .nds ROMs should have been created.
8. Open the playlist, select the patched *:guide-data* ROM file, and press "Run". Select the MelonDS core, and enjoy!

If you run into any emulation issues, exit the game and try launching it again with the DeSmuME core.

</div>

<div class="platform-filtered platform-ios">

### Emulate on iOS / iPadOS / tvOS
The most user-friendly option for emulating on iOS is Delta Emulator. However, while it is easy to obtain from the App Store in non-EU contries, those in the EU have to take a few extra steps to obtain it.

RetroArch is another alternative, which also has a native Apple TV app, although it can be confusing to setup.

**Requirements:**
* iOS / iPadOS Device (iPhone, iPad, iPod Touch)
* Mac or Windows computer (to install Altstore if you live in an EU country)
* Delta or RetroArch

#### Play using Delta Emulator

1. Transfer the patched ROM file onto your device. We recommend creating a specific 'nds' folder to keep things organized.
2. Download [Delta](https://apps.apple.com/us/app/delta-game-emulator/id1048524688) off the App Store (non-EU countries), or the follow [these steps](https://www.reddit.com/r/Delta_Emulator/wiki/guide/#wiki_altstore) to install Delta using Altstore (EU countries).
3. Open the app, and add your ROMs to your library by tapping "+" in the top right corner of the screen. 
4. Launch the patched *:guide-data* ROM file by tapping on it, and enjoy!

#### Play using RetroArch


1. Transfer the patched ROM file onto your device. We recommend creating a specific 'nds' folder to keep things organized.
2. Download [RetroArch](https://apps.apple.com/gb/app/retroarch/id6499539433) off the App Store.
3. Open the app, tap "Online Updater", scroll down and download all of the updates.
4. Scroll back to the top of the Online Updater menu, and go to "Core Downloader". Scroll down to the Nintendo DS Cores, and download the *Nintendo - DS (melonDS)*  and *Nintendo - DS (DeSmuME)* cores.
5. From the Navigation Bar, select the <img src="https://raw.githubusercontent.com/FortAwesome/Font-Awesome/6.x/svgs/solid/list.svg" alt="three lines" width="11" height="11"> icon which will take you to the Playlists Menu.
6. Press "Import Content", then press "Scan Directory", navigate to the folder where your ROMs are, and tap "\<Scan This Directory\>".
7. Once that's finished, return to the Playlist Menu and scroll down. A Nintendo DS playlist containing all of your transferred .nds ROMs should have been created.
8. Open the playlist, select the patched *:guide-data* ROM file, and press "Run". Select the MelonDS core, and enjoy!

If you run into any emulation issues, exit the game and try launching it again with the DeSmuME core.

</div>

::

</div>
