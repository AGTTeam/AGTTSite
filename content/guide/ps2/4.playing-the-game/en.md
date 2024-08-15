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
filters: ['PS2', 'Emulator']
---

<div class="platform-filtered platform-ps2">

## Play on PS2
Thanks to an exploit found by CTurt in 2020 (FreeDVDBoot), it is now possible to play burned copies of games on an unmodified console. If you do not have a compatible console, or wish to play your games from USB/HDD rather than from a disc, follow the steps to use :guide-link{url="/guide/ps2/playing-the-game#open-ps2-loader" text="Open PS2 Loader"} instead. Note that this method will require you to mod your console.

### FreeDVDBoot-ESR patching

**Requirements:**
 
* A PlayStation 2 console [compatible with FreeDVDBoot](https://www.psdevwiki.com/ps2/FreeDVDBoot_Compatibility_List)
* A DVD (not a CD), preferably a DVD-R as other types such as DVD+RW put more strain on the PS2 laser
* A Windows, macOS, or Linux computer with a built-in disc burner/external USB disc burner

**Method:**
1. (Important!) Set your console language to English. To do this, boot without a disc inserted, press CIRCLE to enter System Configuration and set your system language to English.

TODO

See the [FreeDVDBoot Troubleshooting Guide](https://github.com/CTurt/FreeDVDBoot?tab=readme-ov-file#troubleshooting---please-read-if-the-above-didnt-work) if you run into any issues.

**Burning discs:**

You can burn the patched .iso you previously created to a DVD using most DVD burning software. We recommend:

Windows: [ImgBurn](https://ninite.com/imgburn) or [Alcohol 120%](https://www.alcohol-soft.com/designzoo/downloada120fe.html)<br />
Mac: [Disk Utility](https://support.apple.com/en-gb/guide/mac-help/mchl8addfd95/mac) (free) or [Toast](https://apps.apple.com/us/app/toast-dvd/id829469267?mt=12) ($19.99)<br />
Linux: [K3b](https://apps.kde.org/k3b/) or [Brasero](https://wiki.gnome.org/Apps/Brasero)

To ensure the best compatibility for your disk, be sure to clean off any dust from the disc before starting and select lowest burning speed option.

### Open PS2 Loader

Using Open PS2 Loader you can play games from a USB mass storage device. Unlike the FreeDVDBoot exploit, this method is compatible with all PS2 models. You will however need to modify your console to run homebrew software, using [FreeMCBoot (FMCB)](https://consolemods.org/wiki/PS2:FMCB), [FreeHDBoot (FHDB)](https://consolemods.org/wiki/PS2:FHDB), or another exploit of your choice.


**Requirements:**
* A PlayStation 2 capable of running homebrew (through [FreeMCBoot](https://consolemods.org/wiki/PS2:FMCB)/[FreeHDBoot](https://consolemods.org/wiki/PS2:FHDB) or another exploit)
* [wLaunchELF](https://github.com/ps2homebrew/wLaunchELF)
* A Memory Card with minimal 3.5MB free
* A USB storage device (8GB or more)
* A Windows, macOS, or Linux computer

**Installing OPL:**

1. Download the latest version of OPL from the [official GitHub page](https://github.com/ps2homebrew/Open-PS2-Loader/releases/) (thoroughly read the repo's README first and do not download the pre-release).
2. Extract OPNPS2LD.elf from the archive and transfer the file to a USB storage device.
3. Plug the USB into your PS2 and open wLaunchELF.
4. Navigate to "mass:" and highlight the file from earlier.
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


*Modding information courtesy of [ConsoleMods](https://consolemods.org/wiki/PS2:Playing_Game_Backups) contributors.*


</div>

<div class="platform-filtered platform-ps_vita">

## Play on PS Vita
Playing on the PS Vita requires you to have Custom Firmware installed on your console, as well as the homebrew app Adrenaline, which is used for playing PSP games.

**Requirements:**
* Sony PS Vita console 
* PS Vita Memory Card with at least 8GB capacity
* Windows, macOS, or Linux computer
* Micro USB cable - OR - an internet connection on your PS Vita


::guide-notice
Please take caution following these steps to avoid bricking your system.
::

**First-Time Setup:**
1. Follow [the steps on vita.hacks](https://vita.hacks.guide/) to install custom firmware onto your PS Vita.
2. Next, follow [these steps](https://vita.hacks.guide/adrenaline.html) to install Adrenaline.

### Transferring the patched .iso file to your PS Vita

**Transferring files via Cable:**
1. Open VitaShell. (If the WiFi on your Vita is turned off, it will ask if you want to enable it - this is only necessary of you plan to use the wireless file transfer feature, otherwise it doesn't matter if off or on).
2. Once VitaShell loads, press START to bring up the main settings.
3. If you are using an SD2Vita, make sure the USB device option in the menu is set to SD2Vita. If not, select your primary storage device (e.g. the Memory Card, if you only have an official Vita Memory Card for storage).
4. Change the "SELECT button" option to "USB".
5. Press START again to close the menu.
6. Press SELECT. You will now see a prompt on screen to connect your Vita to a computer via USB. Leave that prompt open, and do so.
7. Once connected, you should now be able to browse your Vita's files on your computer.
8. Navigate to the ux0:/pspemu/ISO/ folder and copy the patched .iso you previously created to this folder. 
9. Be sure to Safely Remove Device from your computer before unplugging the USB cable, then press CIRCLE to leave the USB mode.

**Transferring files via WiFi FTP:**
1. Turn on WiFi on your PS Vita, and make sure that Airplane Mode is turned off. Your Vita and computer should both be connected to the same WiFi network.
2. Open VitaShell, then press START to bring up the main settings. 
3. Change the "SELECT button" option to "FTP", then press START to exit out of the main settings. Now, press SELECT. You should see a message with an FTP address, like this:
`ftp://192.168.86.XX:1337`
<br />The "XX" in the address above will be unique to the IP address your Vita is currently using.
4. On your preferred FTP client (such as [WinSCP](https://winscp.net/eng/index.php) or [CyberDuck](https://cyberduck.io/)), start a new FTP connection. For the address, type in 192.168.86.XX (with "XX" being whatever is displayed on your Vita), and change the port to "1337". 
5. Press the connect button on your client. Use "guest" as the username and leave the  password field blank. You should now be connected and have access to all of your file system on the device.
6. Navigate to the ux0:/pspemu/ISO/ folder and copy the patched .iso you previously created to this folder. It may take some time to complete. Ensure that your Vita doesn't go to sleep during this process.
7. Once the transfer is complete, press CIRCLE to close the FTP connection.

### Playing the game on Adrenaline:
1. Open Adrenaline.
2. Navigate to the patched *:guide-data* file under Game > Memory Stick.
3. Launch the game and enjoy! 

</div>

<div class="platform-filtered platform-emulator">

## Play on Emulators

The recommended emulator for PSP games is [PPSSPP](https://www.ppsspp.org/), which is available on both PC and Mobile. PPSSPP can also be installed as a core for [RetroArch](https://www.retroarch.com/), however at the time of writing, the standalone version offers a more stable performance and so is what we recommend.

**Select the platform you wish to use:**
::guide-platform-filter
---
filters: ['PC Emulator', 'Android', 'iOS']
filterSuffix: 'emulator'
---

<div class="platform-filtered platform-pc_emulator">

### Emulate on Windows, macOS, or Linux

**Requirements:**
* Windows, macOS or Linux computer

**Setup:**
Simply [download PPSSPP](https://www.ppsspp.org/download/) from the project website for your platform (Windows, macOS, Linux) and save it somewhere easily accessible to your computer.

**Playing the game:**
Once PPSSPP is installed, press "Browse" under the Games Menu and navigate to the folder where you saved the patched .iso. Any games you have in that folder will now appear in PPSPP's library. Click on *:guide-data*, and enjoy!

</div>

<div class="platform-filtered platform-android">

### Emulate on Android

**Requirements:**
* Android Device with the Google Play store
* Windows, macOS, or Linux computer
* PPSSPP

**Playing the game:**
1. Download [PPSSPP](https://play.google.com/store/apps/details?id=org.ppsspp.ppsspp) off the Google Play Store.
2. Connect your Android device (phone, tablet, etc) to your PC using a USB cable. 
3. On your device, pull down the top bar and click the circled arrow:<br /><img src="https://www.ppsspp.org/static/img/guide_files/step1.png" alt="Android System Settings: Charging this device via USB" width="40%" height="40%"><br />
4. Press "Tap for more options". This will take you to the USB Preferences screen, where you can enable file sharing.<br />
<img src="https://www.ppsspp.org/static/img/guide_files/step3.png" alt="Android USB Preferences Menu. The File transfer / Android Auto setting has been enabled." width="40%" height="40%">
5. On your PC, you'll now be able to see your device's storage in the Explorer:<br />
<img src="https://www.ppsspp.org/static/img/guide_files/step4.png" alt="A Navigation Pane showing a connected Android device.">
6. Copy over the patched .iso file you created earlier to somewhere easy to remember - for example, create a folder called "PSP ISO" and copy the .iso file there.
7. Start PPSSPP, navigate to your patched *:guide-data* on the Games tab, then tap the game and enjoy!

You may also wish to connect a game controller to your Android device to improve your gameplay experience. You can configure your controller in PPSSPP by going to Settings > Controls > Control Mapping.
 

*Guide and images courtesy of [ppsspp.org/docs](https://www.ppsspp.org/docs/getting-started/installing-games-android/) contributors.*

</div>

<div class="platform-filtered platform-ios">
Note that the standalone version of PPSSPP is currently only available for iPhone and iPad.

### Emulate on iOS / iPadOS

**Requirements:**
* iOS / iPadOS Device (iPhone, iPad, iPod Touch)
* Mac or Windows computer
* PPSSPP

**Playing the game:**
1. Download [PPSSPP](https://apps.apple.com/us/app/ppsspp-psp-emulator/id6496972903) off the App Store.
2. Connect your iOS device (iPhone or iPad) via USB to your PC.
3. Open the device in Finder. Click the Files tab, then you should see PPSSPP and/or PPSSPP Gold listed.
4. Drag the patched .iso you created earlier into the app.
5. After this, the .iso files will be located on the virtual "memory stick". Just pick the the patched *:guide-data* from the Games tab (click Home if you can't find the files), and enjoy!

You may also wish to [connect a game controller to your iPhone](https://support.apple.com/en-gb/guide/iphone/iph9d38dd45f/ios) to improve your gameplay experience. You can then configure your controller in PPSSPP by going to Settings > Controls > Control Mapping.
 
</div>

::

</div>
