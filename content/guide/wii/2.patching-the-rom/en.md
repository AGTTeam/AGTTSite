---
title: 'Patching the ROM'
navigation:
  current: '/patching-the-rom'
  previous: '/dumping-the-rom'
  next: '/playing-on-wii'
locale: 'en'
---
We offer two methods for patching Wii games.

**On-the-Fly Patching:**

Using Riivolution, games can be patched "on-the-fly". This is a temporary "soft patching" method, meaning that your original game disc/.iso will not be modified. Riivolution can be used on a Wii with the game's original retail disc, or with the emulator Dolphin. It cannot be used with game backups or USB loaders on the Wii.

For instructions on using the Riivolution patch, please skip to [using Riivolution on a Wii](playing-on-wii#riivolution-method) or [using Riivolution on Dolphin](playing-on-dolphin#riivolution-method).

**Patching the .iso:**

Using a computer, you can patch the dumped .iso you created. This is a "hard patching" method, meaning that the translation will be baked into the .iso file and cannot be turned on and off. This method can be used to burn the translated ROM to a disc, or for use with USB loaders on the Wii. The patched .iso can also be used with the emulator Dolphin.

For instructions on patching the .iso, please see below. Once patched, you can then continue to [using Backup Loaders on a Wii](playing-on-wii##patched-iso-method-using-a-backup-launcher) or [Playing on Dolphin](playing-on-dolphin#patched-iso-method).

### Hard Patching the .iso
This method will allow you to generate a English-patched .iso file.

**Requirements:**
* A copy of *:guide-data* in .iso format
    * If you have a .wbfs file, you can either re-dump the game or convert it with [Wii Backup Manager](http://www.wiibackupmanager.co.uk/)
* WIT
* A Windows computer, or a Linux/Mac computer using [Wine](https://wiki.winehq.org/)

**Method:**
1) Download and install [the latest version of WIT](https://wit.wiimm.de/download.html).
2) Download your preferred choice of the Lite or Full patch from the :guide-link{url="/" text="patch page"} and extract the .zip file somewhere easily accessible.
4) Move your copy of the .iso to the root of the :guide-data{data="patch-name"}Patch folder (where the "patcher.bat" is).
3) Drag and drop the .iso file onto the "patcher.bat" and wait for the process to complete. (It may take some time. Don’t close the command window while the process is ongoing, it will close automatically at the end.)
4) Once the process is complete, you should have a file called :guide-data{data="patch-name"}_patched.iso in the same location.

**Troubleshooting:**      

If you are unable to get WIT to install correctly, you can try the following alternative patching method:
1) Navigate to the 'bin' subfolder, inside the folder which you downloaded and unzipped to install WIT.
2) Copy all of the files from the patch, and your unpatched .iso, into that folder.
3) Drag and drop the .iso file onto the "patcher.bat" (now both located inside the 'bin' folder), and wait for the process to complete. (It may take some time. Don’t close the command window while the process is ongoing, it will close automatically at the end.)
4) Once the process is complete, you should have a file called :guide-data{data="patch-name"}_patched.iso in the same location.
