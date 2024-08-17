---
title: 'Dumping the ROM'
navigation:
  current: '/dumping-the-rom'
  previous: '/buying-the-game'
  next: '/patching-the-rom'
locale: 'en'
---

In order to dump the game's UMD to an `.iso` file, you will need to install Custom Firmware (CFW) onto your PSP. There are several options for this, including permanent and non-permanent CFW. For the purpose of this guide, we recommend installing ARK-4, which is a successor to PRO and still actively maintained.


::guide-notice
Please take caution following these steps to avoid bricking your system.
::

**Requirements:**
* Sony PSP console
* *:guide-data*
* Memory Stick with at least 2 GB of free space
* Mini USB Cable
* Windows, macOS, or Linux computer

**First-Time Setup:**
1. Follow [these steps](https://www.pspunk.com/psp-cfw/) to install ARK-4 on your PSP. If you already have different CFW installed on your PSP, you can skip this.
2. Download [PSP Filer v6.6](https://archive.org/download/filer6.6/filer6.6.zip) - OR - [UMD Image Creator](https://github.com/saramibreak/UmdImageCreator/releases/) (dumps some UMDs that PSP Filer won't).

#### PSP Filer Method

**Installing PSP Filer onto your PSP:**

1. Extract the PSP Filer .zip file.
2. Open the "release\GAME" folder, select the "Filer" folder and copy it.
3. Connect the PSP to the computer using a USB Cable.
4. Open your memory stick, then open the "PSP\Game" folder and select paste.
5. Disconnect the PSP from the computer.


**Dumping a UMD using PSP Filer:**

1. Enable your PSP to run homebrew/start your Custom Firmware.
2. Insert the UMD you want to dump into your PSP.
3. Select Game > Memory Stick > PSP Filer and start it.
4. When PSP Filer starts, press the TRIANGLE button to open a menu.
5. Press the RIGHT TRIGGER button to select "UMD Ripping".
6. Make a note of the filename the UMD will be dumped to. (Example: ULES-00135.iso)
7. Press the START button to start dumping.
8. Wait while the UMD dumps to your Memory Stick. This can take a while, it depends on the size of the game.
9. When completed, press the CROSS button then exit "PSP filer" using the HOME button and selecting '"Quit game".

#### UMD Image Creator Method

**Installing UMD Image Creator onto your PSP:**

1. Download the latest release of UMD Image Creator and extract the .zip file.
2. Connect the PSP to the computer using a USB Cable.
3. Copy "PSP\GAME\UmdImageCreator" and "seplugins" into the mounted drive.
4. Disconnect the PSP from the computer.

**Dumping a UMD using UMD Image Creator:**

1. Start either the UmdImageCreator application, or press the Note button if you're using the PRX module variant.
2. Insert the UMD you want to dump into your PSP.
3. Press CIRCLE to start dumping the UMD.
4. After it's done, press TRIANGLE to exit the application.
5. The dump logs will be located in the "ISO" folder on the Memory Stick.


### Transferring the dumped ISO file to your computer

1. Connect your PSP to a PC via USB and enter USB mode.
2. Open your Memory Stick then open the "ISO" folder.
3. Copy/cut the dumped .iso from your memory stick to a folder on your computer.
4. Disconnect the PSP from the computer.

---

## Before you proceed
You should now have dumped your game to a `.iso` ROM file that you can patch. Move this to somewhere easily accessible.

*ROM dumping information courtesy of [redump.org](http://wiki.redump.org/index.php?title=PlayStation_Portable_Dumping_Guide) contributors.*
