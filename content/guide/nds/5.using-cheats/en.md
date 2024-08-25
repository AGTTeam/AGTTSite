---
title: 'Using Cheats'
navigation:
  current: '/using-cheats'
  previous: '/playing-the-game'
locale: 'en'
---

To go along with our patches, we've created translated cheat files for some of our Nintendo DS games. If a game has cheats available, you'll be able to download them from the :guide-link{url="/" text="patch page"}. 

The file you'll need will depend on how you're playing the game.

::guide-notice
The Cheat Databases we provide are based on [DeadSkullzJr's NDS(i) Cheat Database (2023/12/25)](https://gbatemp.net/threads/deadskullzjrs-nds-i-cheat-databases.488711/). If you have previously added your own cheats, these will be overwritten. If you would prefer to manually add cheats, see the "Manual" section below.
::

::guide-conditional{game="gurren"}
Tengen Toppa Gurren Lagann also contains two weapon unlock cheats which can be entered in the game itself:
* **To unlock "Rock Throw":** Leave the maintenance room with weapons no. 36, 42, 56, 63, 74 & 83 equipped.
* **To unlock "Gurren Homerun":** Leave the maintenance room with weapon no. 17, 70, 71, 72, 75 & 76 equipped. (This is the secret code from the DVD/Episode 5.5 that came with the limited-edition copy of the game.)
::
---

**Select the platform you want to play on:**
::guide-platform-filter
---
filters: ['Nintendo DS/DSi/3DS', 'Emulator', 'Manual']
---

<div class="platform-filtered platform-nintendo_ds/dsi/3ds">

## Using a Flash Cartridge
The flash cartridge you are using will determine which cheat file you'll need, as well as where to place it. See below for more:

| **Kernels**                    | **Cheat File**           | **File Location**                          |
 | ****                           | cheats.xml     | SD:/__ak2/cheats/cheats.xml   |
| ****                           | usrcheat.dat   | SD:/__ak2/cheats/usrcheat.dat |
| **AKAIO**                      | cheat.dat      | SD:/__aio/cheats/cheat.dat    |
| ****                           | cheats.dat     | SD:/__aio/cheats/cheats.dat   |
| ****                           | cheats.xml     | SD:/__aio/cheats/cheats.xml   |
| ****                           | usrcheat.dat   | SD:/__aio/cheats/usrcheat.dat |
| **CycloDS Menu**               | user.evoCheats | SD:/CycloDS/user.evoCheats    |
| **DSTT Menu**                  | usrcheat.dat   | SD:/TTMenu/usrcheat.dat       |
| **EDGE Menu**                  | cheats.dat     | SD:/EDGE/cheats.dat           |
| **EZ-Flash V Menu**            | usrcheat.dat   | SD:/EZ5Shell/usrcheat.dat     |
| **EZ-Flash V Menu (Original)** | ezarcode.dat   | SD:/CHT/ezarcode.dat          |
| **EZ-Flash Vi Menu**           | usrcheat.dat   | SD:/EZ5Shell/usrcheat.dat     |
| **M3 Menu**                    | cheat.dat      | SD:/_system_/cheat.dat        |
| **M3 Sakura**                  | cheat.db       | SD:/SYSTEM/cheat.db           |
| ****                           | cheat_EN.db    | SD:/SYSTEM/cheat_EN.db        |
| **R4 Menu**                    | cheat.dat      | SD:/_system_/cheat.dat        |
| **R4i Menu**                   | usrcheat.dat   | SD:/R4iMenu/usrcheat.dat      |
| **SuperCard DSONE EOS**        | usrcheat.dat   | SD:/_dsone/usrcheat.dat       |
| **SuperCard DSONE OS**         | SCC Cheats     | SD:/scshell/cheat/SCC Cheats  |
| **SuperCard DSTWO EOS**        | usrcheat.dat   | SD:/_dstwo/usrcheat.dat       |
| **Wood R4**                    | usrcheat.dat   | SD:/__rpg/cheats/usrcheat.dat |
| **Wood RPG**                   | usrcheat.dat   | SD:/__rpg/cheats/usrcheat.dat |
| **YSMenu**                     | usrcheat.dat   | SD:/TTMenu/usrcheat.dat       |


At present, we are unable to support cheat formats for all Flash Cartridges. If your cartridge format is missing, please feel free to get in touch or try [DeadSkullzJr's NDS(i) Cheat Databases](https://mega.nz/folder/UNwxET6K#s__L5mln48N5gUJsWwsMZQ).

## Using TWiLightMenu (nds-bootstrap)
1. Insert the SD card from your DS console/flash cartridge into your computer.
2. Download the "usrcheat.dat" file and transfer it to the `sd:/_nds/TWiLightMenu/extras/` folder.
3. Remove your SD card and insert it back into your console.
4. Power on your console and launch Twilight Menu++.
5. Navigate to :guide-data and press the "Y" button to see the game's info. Then, press the "X" button to open the cheats menu.
7. Press the "A" button to select the cheats you wish to use. Once selected, the cheat will have a small x to the left of it.
    * Take note of any cheats which tell you to press a button, or combination of buttons to use. 
8. Press the "X" button to save your changes, then "B" to go back.
9. Launch your game, and the cheats should now be enabled.
    * Cheats without button requirements will be automatically activated. For button-activated cheats, simply press any buttons required when you'd like to use the cheat. 
</div>

<div class="platform-filtered platform-emulator">

## Play on Emulators

**Select the type of emulator you wish to use:**
::guide-platform-filter
---
filters: ['PC Emulator', 'Android', 'iOS']
filterSuffix: 'emulator'
---

<div class="platform-filtered platform-pc_emulator">

#### Using Cheats on melonDS

1. Download the *:guide-data \[MelonDS Cheats\].mch* and move the file to the same folder as your patched ROM.
2. Rename the cheats file to have the same name as your patched ROM.
    * For example, if your game is *:guide-data(patched).nds*, your cheats should be *:guide-data(patched).mch*
3. Open melonDS and load the game.
4. Go to "System" in the top bar, and make sure that "Enable Cheats" is ticked. Then, click on "Setup Cheat Codes".
5.  In the window that pops up, tick the check box for any cheats you wish to use.
    * If the list is empty, make sure that you completed steps 1-3 correctly. You can also customize the folder which MelonDS will look for cheat files in by going to "Config" > "Path Settings" and changing the "Cheat files path".
6. Take note of any cheats which tell you to press a button, or combination of buttons to use, and press "OK". 
7. Your cheats should now be enabled. Cheats without button requirements will be automatically activated. For button-activated cheats, simply press any buttons required when you'd like to use the cheat. 

#### Using Cheats on DeSmuME

1. Download the "Cheat.dat" file and move it to the "DeSmuME\Cheats" folder.
2. Open DeSmuME and load the game.
3. Go to "Tools" in the top bar, and make sure that "Disable Cheats" is NOT ticked. Then, click on "Cheats List".
4.  In the window that pops up, press the "Cheats Base" button near the bottom.
5. Tick the check boxes to import all the available cheats, then press "Add". (If the game has Backlight Codes, you can ignore these.)
    * If the list is empty, make sure that you completed steps 1-3 correctly. You can also customize the folder which DeSmuME will look for cheat files in by going to "Config" > "Path Settings" and changing the Cheats path.
6.  Back in the original window, tick the check box for any of the imported cheats you wish to use. Take note of any cheats which tell you to press a button, or combination of buttons to use.
7. \*IMPORTANT* Press "Save" before closing the window.
8. Your cheats should now be enabled. Cheats without button requirements will be automatically activated. For button-activated cheats, simply press any buttons required when you'd like to use the cheat. 

</div>

<div class="platform-filtered platform-android">

#### Using Cheats on DraStic

1. Download the "usrcheat.dat" file and transfer it to the DraStic/Cheats folder (replace the file if there's one there already).
2.  Open DraStic and load the game.
3.  Open the menu by pressing the up arrow or  <img src="https://raw.githubusercontent.com/FortAwesome/Font-Awesome/6.x/svgs/solid/ellipsis.svg" alt="three dots" width="11" height="11"> symbol at the bottom of the screen, then press "Menu".
<img src="https://techwiser.com/wp-content/uploads/2021/08/Screenshot-2021-08-05-03.00.11-1.png" width=80% height=80%> 
4. Select "Cheat Database" and tap on any cheats you wish to use.
    * Take note of any cheats which tell you to press a button, or combination of buttons to use.
5. Press the back button twice to return to your game.
6. Your cheats should now be enabled. Cheats without button requirements will be automatically activated. For button-activated cheats, simply press any buttons required when you'd like to use the cheat. 


####  Using Cheats on RetroArch

TODO

</div>

<div class="platform-filtered platform-ios">

#### Using Cheats on Delta Emulator

TODO

#### Play using RetroArch
TODO

</div>

::
</div>


<div class="platform-filtered platform-manual">

## Add Cheats Manually
This guide will walk you through manually editing your Cheat Database. You don't need to follow this guide if you are using individual cheat files, such as those for MelonDS or RetroArch. 


#### Add Cheats using r4cee
**Requirements:**
* r4cce
* A Windows computer, or a Linux/Mac computer using [Wine](https://wiki.winehq.org/)

**Method:**
1. Download [r4cce](https://hp.vector.co.jp/authors/VA013928/soft_en.html).
    * If the download does not work, try using a different browser.
2. Run r4cce and open the cheat database you wish to edit.
3. Click "Add Game", then press the <img src="https://raw.githubusercontent.com/FortAwesome/Font-Awesome/6.x/svgs/solid/ellipsis.svg" alt="three dots" width="11" height="11"> button next to the "Dup?" button. The Game ID should automatically update.

TODO
</div>
