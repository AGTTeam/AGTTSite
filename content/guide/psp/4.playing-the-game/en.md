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
 
---

*Guide and images courtesy of [PPSSPP documentation](https://www.ppsspp.org/docs/getting-started/installing-games-android/) contributors.*

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
