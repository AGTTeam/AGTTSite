---
title: 'Patching the ROM'
navigation:
  current: '/patching-the-rom'
  previous: '/dumping-the-rom'
  next: '/playing-the-game'
locale: 'en'
---

::guide-conditional{patcherEnabled}
Once you've dumped your disc to an `.iso` file, patching it with the English Translation can be done easily through the :guide-link{url="/patch/ps2" text="ROM Patcher"} tool we provide, or by manually downloading the patch `.xdelta` file and using patching software such as [DeltaPatcher](https://github.com/marco-calautti/DeltaPatcher/releases/) to patch your ROM file.
::

::guide-conditional{patcherDisabled}
Once you've dumped your disc to an `.iso` file, patch it with the English Translation by manually downloading the patch `.xdelta` file and using patching software such as [DeltaPatcher](https://github.com/marco-calautti/DeltaPatcher/releases/) to patch your ROM file.
::

::guide-conditional{patcherEnabled}
## Online patcher
::guide-notice
Please make sure you've carefully followed the instructions to dump your ROM.
::
1. Navigate to the :guide-link{url="/patch/ps2" text="ROM Patcher"} page on this site.
2. Drag and drop your dumped .iso ROM file into the "Select ROM" box.
3. Check that the latest version of the patch is selected from the dropdown.
4. Click "Apply Patch" and your game will be automatically patched with the latest version. Save the patched ROM somewhere easily accessible. Be careful not to overwrite your original ROM, in case you need it later or if we update the patch.
5. You can now proceed to [playing the game](playing-the-game).
::

## Patching manually
1. On the :guide-link{url="/" text="game's patch page"}, press the "Download Patch" button, then download the file from MEGA and unzip it.
2. Download the latest version of [DeltaPatcher](https://github.com/marco-calautti/DeltaPatcher/releases/), unzip the file, and run DeltaPatcher.
3. For "Original file", navigate to your dumped .iso ROM file.
4. For "XDelta patch", navigate to the "*:guide-data{data="patch-name"}*.xdelta" file you downloaded from MEGA.
5. Press the small cog next to the "Apply patch" button, and click "Backup original file".
6. Click "Apply Patch" and your game will be automatically patched with the latest version. Save the patched ROM somewhere easily accessible.
7. You can now proceed to [playing the game](playing-the-game).
