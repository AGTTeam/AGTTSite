---
title: 'Dumping the ROM'
navigation:
  current: '/dumping-the-rom'
  previous: '/buying-the-game'
  next: '/patching-the-rom'
locale: 'en'
---

PlayStation 2 game discs are unencrypted DVDs and CDs. This means they can be dumped quickly using disc ripping software and a standard optical drive that supports DVD and CD optical media. Dumping discs does not harm optical media directly.

**Requirements:**
* *:guide-data*
* Windows, macOS, or Linux computer with an optical disc drive

## Preparing / Cleaning your disc
If your PlayStation 2 format disc is dirty or scratched, it may not copy correctly. PC disc drives are more likely to be able to read the disc than an aging original PlayStation 2 drive, but you may still encounter errors.

1. Before attempting to back up your disc, check the underside to look for dirt, fingerprints or scratches.
2. If the disc is dirty blow off any dust or grit, and wipe from the centre outwards with a clean lint free cloth (such as microfibre). If you don't blow off any grit before wiping, you may accidentally scratch the disc.
3. If more cleaning is needed, spray Isopropanol (Isopropyl Alcohol) onto the cloth before wiping. The Isopropanol should evaporate quickly so drying time should not be an issue.
4. If your disc has scratches causing it to fail to read, you can have it resurfaced. Resurfacing is the process of a machine removing a very fine layer of the bottom plastic by polishing, in order to remove or reduce scratches. You may find a local game shop or library that offers to resurface discs for a nominal fee.

## Dumping a disc on Windows

#### Dumping PS2 disc using ImgBurn

We recommend getting [ImgBurn via Ninite](https://ninite.com/imgburn) because the download from the official site comes with adware in the installer that must be manually unchecked during the install.

**Method:**
1. Install and run ImgBurn.
2. Put your game disc into an optical drive.
3. Choose the "Create an image file from disc" option inside ImgBurn.
4. On the disc dumping screen, choose the location of the resulting .iso, then press to start the disc dumping process.
5. Wait for the dumping process to be completed. Depending on the game size, this will take some time.

#### Dumping PlayStation 2 discs with MPF (more advanced)

Media Preservation Frontend (MPF) is a GUI for several applications aimed at preserving optical media. It can be a bit more involved for non-PlayStation disc dumping, but for PS1 and PS2 its fairly simple.

**Method:**
1. Download the latest release of [MPF](https://github.com/SabreTools/MPF), then extract and run it.
2. Put your game disc into an optical drive.
3. Select PS2 for system/media type.
4. Select whether it is a CD-ROM PS2 game or DVD-ROM PS2 game.
5. Select output file name and directory.
6. Select the appropriate drive letter for the drive with the optical media in it.
7. Select "Start dumping".

## Dumping a disc on macOS

1. Put your game disc into an optical drive.
2. Open Terminal.
3. In terminal, type in the following:
`diskutil unmountDisk disk1`
4. Press enter, then type:
`dd if=/dev/disk1 of=[/path/to/dump/enter_game_name_here].iso`

<div style="display: block; padding: 9.5px; background-color: var(--main-light-gray);">
WHERE:<br />
/path/to/dump/ = The destination where you'd like to save the game.<br />
enter_game_name_here = The name for the ISO.
</div>

For example: `dd if=/dev/disk1 of=/Users/Phantom/Desktop/My_Game_Patched.iso`

Wait for the dumping process to be completed. Depending on the game size, this will take some time.


## Dumping a disc on Linux

#### Dumping PS2 disc using K3b

**Method:**
1. You will need to install K3b first. Depending on the distro this process will vary, here are a few examples:
    * Ubuntu: sudo apt install k3b
    * Fedora: sudo dnf install k3b
    * Arch Linux: sudo pacman -S k3b
2. Put your game disc into an optical drive.
3. Open K3b.
4. Click on "Copy Medium".
5. Make sure your disc is selected and enable the "Only create image" option.
6. Go to the Image tab and choose the destination folder for the dump.
7. Click on Start and wait for the dumping process to be completed. Depending on the game size, this will take some time.

#### Dumping PS2 disc using DD (more advanced)

::guide-notice
DD can cause data loss if not used carefully. You will also need a basic understanding of the Linux terminal.
::

**Figuring out the DVD drive location:**

You will need to figure out the location of your DVD drive first. We will use `lsblk` for that.

1. Open up a terminal and run the `lsblk -f command`.
2. This will show the list of all drivers that are recognized by Linux. CD and DVD drives on Linux are usually located either in `/dev/cdrom0` or `/dev/sr0` respectively.

**Dumping the disc:**

1. Run dd with the following Syntax:
`dd if=[DRIVE_NAME] of=./[IMAGE_NAME].iso status=progress`

<div style="display: block; padding: 9.5px; background-color: var(--main-light-gray);">
WHERE:<br />
[DRIVE_NAME] = DVD Drive location.<br />
[IMAGE_NAME] = The name for the ISO.<br /><br />
NOTE: DO NOT include the brackets
</div>

For example: `dd if=/dev/sr0 of=./My_Game_Patched.iso status=progress`<br />
This will dump the disc into the current directory.

Run the command, then wait until the dumping process is completed.

---

## Before you proceed

You should now have dumped your game to a `.iso` ROM file that you can patch. Move this to somewhere easily accessible.

*ROM dumping information courtesy of [PCSX2 documentation](https://pcsx2.net/docs/setup/dumping/) and [ConsoleMods](https://consolemods.org/wiki/PS2:Creating_Game_Backups) contributors.*
