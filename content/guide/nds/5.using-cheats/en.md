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
The Cheat Databases we provide are based on [DeadSkullzJr's NDS(i) Cheat Database (2023/12/25)](https://gbatemp.net/threads/deadskullzjrs-nds-i-cheat-databases.488711/). If you have previously edited these files, your changes will be overwritten. If you would prefer to manually add cheats, see the "Manual" section below. (This does not apply to PC or Mobile users, with the exception of DraStic on Android.)
::

::guide-conditional{game="gurren"}
Tengen Toppa Gurren Lagann also contains two weapon unlock cheats which can be entered in the game itself:
* **To unlock "Rock Throw":** Leave the maintenance room with weapons no. 36, 42, 56, 63, 74 & 83 equipped.
* **To unlock "Gurren Homerun":** Leave the maintenance room with weapon no. 17, 70, 71, 72, 75 & 76 equipped. (This is the secret code from the DVD/Episode 5.5 that came with the limited-edition copy of the game.)
::

::guide-conditional{game="kiragame"}
The Kira Game contains three cheats with special usage; these are the "Trust 100", "Doubt 0" and "Influence 100" cheats. These cheats must only be enabled during the "Kira Game" segments, and should be turned off before the results end. If the cheats are enabled at the wrong time, they will cause the game to load into a black screen.
::

::guide-conditional{game="prologue"}
Note that Spiraling Trap's "Unlock "Album" & "Sound" in Extras" cheat should not be used if the extras have already been unlocked (after reaching the game's true ending).

Leaving the cheat active at the wrong time will cause the game to show a "save data is corrupted and will be deleted" warning, stopping the game from playing. Despite this warning, no data will be deleted, and you can load as normal after turning the cheat off.
::

---

**Select the platform you want to play on:**
::guide-platform-filter
---
filters: ['Nintendo DS/DSi/3DS', 'Emulator', 'Manual']
---

<div class="platform-filtered platform-nintendo_ds/dsi/3ds">

## Using TWiLightMenu (nds-bootstrap)
1. Insert the SD card from your DS console/flash cartridge into your computer.
2. Download the "usrcheat.dat" file and transfer it to the `sd:/_nds/TWiLightMenu/extras/` folder.
3. Remove your SD card and insert it back into your console/flash cartridge.
4. Power on your console and launch Twilight Menu++.
5. Navigate to *:guide-data* and press the "Y" button to see the game's info. Then, press the "X" button to open the cheats menu.
7. Press the "A" button to select the cheats you wish to use. Once selected, the cheat will have a small x to the left of it.
    * Take note of any cheats which tell you to press a button, or combination of buttons to use. 
8. Press the "X" button to save your changes, then press "B" to go back.
9. Launch your game, and the cheats should now be setup.
    * Cheats without button requirements will be automatically activated. For button-activated cheats, simply press the button(s) specified in the cheat description when you'd like to activate it. 
	
## Using a Flash Cartridge
The flash cartridge you are using will determine which cheat file you'll need, as well as where to place it. See the chart for more:

<div style="overflow-x:auto;">
<table>
    <thead>
        <tr>
            <th>Kernels</th>
            <th>Cheat File</th>
            <th>File Location</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td rowspan="4">AceKard 2 Menu</td>
            <td>cheat.dat</td>
            <td>SD:/__ak2/cheats/cheat.dat</td>
        </tr>
        <tr>
            <td style="display:none"></td>
            <td>cheats.dat</td>
            <td>SD:/__ak2/cheats/cheats.dat</td>
        </tr>
        <tr>
            <td style="display:none"></td>		
            <td>cheats.xml</td>
            <td>SD:/__ak2/cheats/cheats.xml</td>
        </tr>
        <tr>
            <td style="display:none"></td>
            <td>usrcheat.dat</td>
            <td>SD:/__ak2/cheats/usrcheat.dat</td>
        </tr>
        <tr>
            <td rowspan="4">AKAIO</td>
            <td>cheat.dat</td>
            <td>SD:/__aio/cheats/cheat.dat</td>
        </tr>
        <tr>
            <td style="display:none"></td>
            <td>cheats.dat</td>
            <td>SD:/__aio/cheats/cheats.dat</td>
        </tr>
        <tr>
            <td style="display:none"></td>
            <td>cheats.xml</td>
            <td>SD:/__aio/cheats/cheats.xml</td>
        </tr>
        <tr>
            <td style="display:none"></td>
            <td>usrcheat.dat</td>
            <td>SD:/__aio/cheats/usrcheat.dat</td>
        </tr>
        <tr>
            <td>CycloDS Menu</td>
            <td>user.evoCheats</td>
            <td>SD:/CycloDS/user.evoCheats</td>
        </tr>
        <tr>
            <td>DSTT Menu</td>
            <td>usrcheat.dat</td>
            <td>SD:/TTMenu/usrcheat.dat</td>
        </tr>
        <tr>
            <td>EDGE Menu</td>
            <td>cheats.dat</td>
            <td>SD:/EDGE/cheats.dat</td>
        </tr>
        <tr>
            <td>EZ-Flash V Menu</td>
            <td>usrcheat.dat</td>
            <td>SD:/EZ5Shell/usrcheat.dat</td>
        </tr>
        <tr>
            <td>EZ-Flash V Menu (Original)</td>
            <td>ezarcode.dat</td>
            <td>SD:/CHT/ezarcode.dat</td>
        </tr>
        <tr>
            <td>EZ-Flash Vi Menu</td>
            <td>usrcheat.dat</td>
            <td>SD:/EZ5Shell/usrcheat.dat</td>
        </tr>
        <tr>
            <td>M3 Menu</td>
            <td>cheat.dat</td>
            <td>SD:/_system_/cheat.dat</td>
        </tr>
        <tr>
            <td rowspan="2">M3 Sakura</td>
            <td>cheat.db</td>
            <td>SD:/SYSTEM/cheat.db</td>
        </tr>
        <tr>
            <td style="display:none"></td>
            <td>cheat_EN.db</td>
            <td>SD:/SYSTEM/cheat_EN.db</td>
        </tr>
        <tr>
            <td>R4 Menu</td>
            <td>cheat.dat</td>
            <td>SD:/_system_/cheat.dat</td>
        </tr>
        <tr>
            <td>R4i Menu</td>
            <td>usrcheat.dat</td>
            <td>SD:/R4iMenu/usrcheat.dat</td>
        </tr>
        <tr>
            <td>SuperCard DSONE EOS</td>
            <td>usrcheat.dat</td>
            <td>SD:/_dsone/usrcheat.dat</td>
        </tr>
        <tr>
            <td>SuperCard DSONE OS</td>
            <td>SCC Cheats</td>
            <td>SD:/scshell/cheat/SCC Cheats</td>
        </tr>
        <tr>
            <td>SuperCard DSTWO EOS</td>
            <td>usrcheat.dat</td>
            <td>SD:/_dstwo/usrcheat.dat</td>
        </tr>
        <tr>
            <td>Wood R4</td>
            <td>usrcheat.dat</td>
            <td>SD:/__rpg/cheats/usrcheat.dat</td>
        </tr>
        <tr>
            <td>Wood RPG</td>
            <td>usrcheat.dat</td>
            <td>SD:/__rpg/cheats/usrcheat.dat</td>
        </tr>
        <tr>
            <td>YSMenu</td>
            <td>usrcheat.dat</td>
            <td>SD:/TTMenu/usrcheat.dat</td>
        </tr>
    </tbody>
</table>
</div>

At present, we are unable to support cheat formats for all Flash Cartridges. If your cartridge format is missing, please feel free to get in touch or try [DeadSkullzJr's NDS(i) Cheat Databases](https://mega.nz/folder/UNwxET6K#s__L5mln48N5gUJsWwsMZQ).

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

### Using Cheats on melonDS

1. Download the *:guide-data \[MelonDS Cheats\].mch* file and move it to the same folder as your patched ROM.
2. Rename the .mch file to have the same name as your patched ROM.
    * For example, if your game is *:guide-data(patched).nds*, your cheats should be *:guide-data(patched).mch*
3. Open melonDS and load the game.
4. Go to "System" in the top bar and make sure that "Enable Cheats" is ticked. Then, click on "Setup Cheat Codes".
5.  In the window that pops up, tick the check boxes for any cheats that you wish to use.
    * If the list is empty, make sure that you have completed steps 1-3 correctly. You can also customize the folder which MelonDS will look for cheat files in by going to "Config" > "Path Settings" and changing the "Cheat files path".
6. Take note of any cheats which tell you to press a button, or combination of buttons to use, and press "OK". 
7. Your cheats should now be setup. Cheats without button requirements will be automatically activated. For button-activated cheats, simply press the button(s) specified in the cheat's description when you'd like to activate it.

### Using Cheats on DeSmuME

1. Download the "Cheat.dat" file and move it to your "DeSmuME\Cheats" folder.
2. Open DeSmuME and load *:guide-data*.
3. Go to "Tools" in the top bar and make sure that "Disable Cheats" is NOT ticked. Then, click on "Cheats List".
4.  In the window that pops up, press the "Cheats Base" button near the bottom.
5. Tick the check boxes to import all the available cheats, then press "Add". (You can ignore any Backlight Codes.)
    * If the list is empty, make sure that you have completed steps 1-4 correctly. You can also customize the folder which DeSmuME will look for cheat files in by going to "Config" > "Path Settings" and changing the Cheats path.
6.  Back in the original window, tick the check boxes for any of the imported cheats you wish to use. Take note of any cheats which tell you to press a button, or combination of buttons to use.
7. \*IMPORTANT* Press "Save" before closing the window.
8. Your cheats should now be setup. Cheats without button requirements will be automatically activated. For button-activated cheats, simply press the button(s) specified in the cheat's description when you'd like to activate it.

</div>

<div class="platform-filtered platform-android">

### Using Cheats on DraStic
1. Download the "usrcheat.dat" file and transfer it to the "DraStic/Cheats" folder (replace the file if there's one there already).
2.  Open DraStic and load *:guide-data*.
3.  Open the menu by pressing the up arrow or <img src="https://raw.githubusercontent.com/FortAwesome/Font-Awesome/6.x/svgs/solid/ellipsis.svg" alt="three dots" width="11" height="11"> symbol at the bottom of the screen, then press "Menu".
<img src="https://techwiser.com/wp-content/uploads/2021/08/Screenshot-2021-08-05-03.00.11-1.png" width=80% height=80%> 
4. Select "Cheat Database" and tap on any cheats you wish to use.
    * Take note of any cheats which tell you to press a button, or combination of buttons to use.
5. Press the back button twice to return to your game.
6. Your cheats should now be setup. Cheats without button requirements will be automatically activated. For button-activated cheats, simply press the button(s) specified in the cheat's description when you'd like to activate it.

###  Using Cheats on RetroArch
1. Open RetroArch, tap "Online Updater" from the main menu, and press "Update Cheats". Wait for the download to finish.
2. Load *:guide-data*, and open the Quick Menu. (If you are using touch controls, you can do this by tapping on the RetroArch icon.)
3. Scroll down and tap on the "Cheats" option.
4. Select "Load Cheat File (Replace)", then go to "Nintendo - Nintendo DS".
5. Use the Search tool to find *:guide-data*.
6. Scroll down to view the cheats and tap on the one you'd like to use. Press the toggle to "Enable" the cheat, then go back to the cheats menu. Repeat this for all the cheats you'd like to use.
    * Take note of any cheats which tell you to press a button, or combination of buttons to use.
7. Press "Apply Changes" to save your changes, then press the  play button in the bottom bar to return to your game.
8. Your cheats should now be setup. Cheats without button requirements will be automatically activated. For button-activated cheats, simply press the button(s) specified in the cheat's description when you'd like to activate it.

</div>

<div class="platform-filtered platform-ios">

### Using Cheats on Delta Emulator
At the time of writing, Delta Emulator does not support importing cheats from a database. You will therefore have to add the cheats you wish to use manually.

You can find cheat codes online, or download our *:guide-data \[MelonDS Cheats\].mch* file to copy and paste from (open the .mch file with a text editor).

1. Open Delta and load *:guide-data*.
2. Press "Menu" to open the pause menu, then press the "Cheat Codes" button.
3. From there, tap the "+" button at the top of the screen to add a cheat code. Enter the cheat name, then paste the cheat into the "CODE" box.<br />
<img src="https://faq.deltaemulator.com/~gitbook/image?url=https%3A%2F%2F962348188-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FYCYX5snWo5AcJfoqPGgn%252Fuploads%252FMBCnMHeVlz2Hcwxn5qvd%252FIMG_4252.PNG%3Falt%3Dmedia%26token%3D0178aa24-c832-40a6-ba4d-da770a5f05a6&amp;width=768&amp;dpr=4&amp;quality=100&amp;sign=89aa6988&amp;sv=1" width=200em>  <br />Ensure that your code is formatted correctly, with spaces as demonstrated above.
4. Once you add a cheat code, it will appear with a check mark to show that is enabled. To disable a cheat, tap on the cheat name.
5. Your cheats should now be setup. Cheats without button requirements will be automatically activated. For button-activated cheats, simply press the button(s) specified in the cheat's description when you'd like to activate it.

###  Using Cheats on RetroArch
1. Open RetroArch, tap "Online Updater" from the main menu, and press "Update Cheats". Wait for the download to finish.
2. Load *:guide-data*, and open the Quick Menu. (If you are using touch controls, you can do this by tapping on the RetroArch icon.)
3. Scroll down and tap on the "Cheats" option.
4. Select "Load Cheat File (Replace)", then go to "Nintendo - Nintendo DS".
5. Use the Search tool to find *:guide-data*.
6. Scroll down to view the cheats and tap on the one you'd like to use. Press the toggle to "Enable" the cheat, then go back to the cheats menu. Repeat this for all the cheats you'd like to use.
    * Take note of any cheats which tell you to press a button, or combination of buttons to use.
7. Press "Apply Changes" to save your changes, then press the  play button in the bottom bar to return to your game.
8. Your cheats should now be enabled. Cheats without button requirements will be automatically activated. For button-activated cheats, simply press the button(s) specified in the cheat's description when you'd like to activate it.

</div>

::
</div>


<div class="platform-filtered platform-manual">

## Add Cheats Manually
This guide will walk you through manually editing your Cheat Database. You don't need to follow this guide if you are playing on PC or Mobile, with the exception of DraStic on Android.

### Add Cheats using r4cee
**Requirements:**
* r4cce
* The ROM of the game you'd like to use saved on your computer 
* A Windows computer, or a Linux/Mac computer using [Wine](https://wiki.winehq.org/)

**Method:**
1. Download [r4cce](https://hp.vector.co.jp/authors/VA013928/soft_en.html).
    * If the download does not work, try using a different browser.
2. Run r4cce and open the cheat database you wish to edit.
3. Enter the game's name in the search bar at the bottom and press "Find" to check if an entry already exists.
    * If not, click "Add Game", then enter the game's title on the left. Then, press the "<img src="https://raw.githubusercontent.com/FortAwesome/Font-Awesome/6.x/svgs/solid/ellipsis.svg" alt="three dots" width="11" height="11">" button next to the "Dup?" button, and navigate to the ROM. The Game ID should automatically update.
4. With the game you want to edit highlighted, press "Add Code". You can find codes online, or for our patches, download the "\[MelonDS Cheats\].mch" file for your game and open it with a text editor.
5. Type the name of the cheat into the "Code Title", then copy and paste the cheat code into the "Code List" box. 
 <img src="https://i.imgur.com/vPGnI7Z.png" width=80% height=80%> <br/> Ensure that your code is formatted correctly, with new lines and spaces, as demonstrated above.
6. Once you have finished editing, go to "File" > "Save" to save your updated cheat database. 
</div>
