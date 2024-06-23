@echo off
cls
echo. ===================================
echo. Creating .EXE, please wait...
echo. ===================================
echo.
copy DOOM2.EXE DOOMHACK.EXE
dehacked -load d64d2.deh
ren DOOMHACK.EXE Doom64.EXE
echo.
echo. Complete.
echo.
echo. =======================================================
echo. Preparing .WAD for vanilla DOOM2, please wait...
echo. =======================================================
echo.
deusf -append D64D2.wad
deusf -append d64d2_bar_ws.wad
deusf -append d64d2_hellbar.wad
deusf -append d64d2_hellbar_ws.wad
deusf -append D64RTR.wad
echo.
echo. Complete.
echo.
echo. 
echo. To play DOOM, type:
echo. 
echo. Doom64 -file D64D2.wad d64d2_bar_ws.wad d64d2_hellbar.wad d64d2_hellbar_ws.wad D64RTR.wad
echo.