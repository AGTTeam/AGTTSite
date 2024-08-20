---
title: 'Dumping the ROM'
navigation:
  current: '/dumping-the-rom'
  previous: '/buying-the-game'
  next: '/patching-the-rom'
locale: 'en'
---
::guide-notice
If you wish to play the game on your Wii using the original retail disc (using on-the-fly patching via Riivolution), you can skip this section and head straight to [Playing on Wii](playing-on-wii).<br />(If you want to use Riivolution with the emulator Dolphin, you will still need to dump the ROM first.)
::

In order to dump the game's disc to an `.iso` file, you will need to install Custom Firmware (CFW) onto your Wii. There are several exploits you can use, depending on what hardware you have available.

#### Dumping the ROM using CleanRip:
**Requirements:**
* A Nintendo Wii, Wii U (vWii) or Wii Mini
* :guide-data
* A FAT32 or FAT16 SD card/USB drive or NTFS USB drive with at least 4.38 GB free or 7.93 GB for dual layer discs
     * Using FAT32 storage will add an extra step to combine files
* CleanRip

**Method:**
1. Follow [the steps on wii.hacks.guide](https://wii.hacks.guide/) to install custom firmware onto your Wii or virtual Wii.
2. Download the latest version of [CleanRip](https://github.com/emukidid/cleanrip/releases/tag/2.2.0).
3. Extract the .zip file and place the "apps" folder in the root of your SD card.
4. Insert the SD card into the console and launch the Homebrew Channel, then launch CleanRip from there.
5. Select the drive to the dump the game in, SD or USB.
   * If USB is chosen, choose which filesystem your drive has, NTFS or FAT.
6. If not already present, choose whether you want to download files to verify your dump once finished. This step is optional, but can quickly check if the dump is good.
7. Insert the :guide-data disc into your Wii, then follow the prompt to continue.
8. Set the Ripper Setup as follows, then follow the prompt to continue:
    * Dual Layer: No
    * Chunk Size: Max
    * New device per chunk: No
9. Wait for the program to dump the game. This step can take a long time.

If you used an NTFS USB drive, you'll be done once the game is done being ripped. If you used a FAT32 device (which has a maximum individual file size limit of 4GB), or if you chose to separate into separate chunks, the dump will be split into multiple files that you'll need to combine. To do so, copy the folder containing the part files to a file system with large file support (e.g. NTFS), open a command prompt there, then copy the following command:
`copy /b GAMEID.part0.iso+GAMEID.part1.iso GAMEID.iso`

Where GAMEID is the ID of the game you just dumped, a 6 digit alphanumerical code. In :guide-data's case, it's :guide-data{data="gameid"}.

If you have more parts, you can add the files as necessary by adding another GAMEID.part#.iso until you get to all your parts. This will create the full GAMEID.iso file in the directory. You can then rename and move it as you please, as well as delete the part files in the folder.

---

## Before you proceed
You should now have dumped your game to a `.iso` ROM file that you can patch. Move this to somewhere easily accessible.

*ROM dumping information courtesy of [ConsoleMods](https://consolemods.org/wiki/Wii:Creating_Game_Backups) contributors.*
