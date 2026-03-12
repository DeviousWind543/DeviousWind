@echo off

REM  --> Check for permissions
    IF "%PROCESSOR_ARCHITECTURE%" EQU "amd64" (
>nul 2>&1 "%SYSTEMROOT%\SysWOW64\cacls.exe" "%SYSTEMROOT%\SysWOW64\config\system"
) ELSE (
>nul 2>&1 "%SYSTEMROOT%\system32\cacls.exe" "%SYSTEMROOT%\system32\config\system"
)

REM --> If error flag set, we do not have admin.
if '%errorlevel%' NEQ '0' (
    goto UACPrompt
) else ( goto gotAdmin )

:UACPrompt
    echo Set UAC = CreateObject^("Shell.Application"^) > "%temp%\getadmin.vbs"
    set params= %*
    echo UAC.ShellExecute "cmd.exe", "/c ""%~s0"" %params:"=""%", "", "runas", 1 >> "%temp%\getadmin.vbs"

    "%temp%\getadmin.vbs"
    del "%temp%\getadmin.vbs"
    exit /B

:gotAdmin
    pushd "%CD%"
    CD /D "%~dp0\fnafdata"

title 
SET GAME=Five Nights At Freddy's
title %GAME% Optimizer (By OptiJuegos)

:: Opciones para seleccionar
echo *1.- Five Nights At Freddy's 1
echo *2.- Five Nights At Freddy's 2
echo *3.- Five Nights At Freddy's 3
echo.

:: Codigo para ir al menu con las Opciones
set /p op=Opcion: 

if "%op%"=="" goto :Start
if "%op%"=="1" goto :FNAF1
if "%op%"=="2" goto :FNAF2
if "%op%"=="3" goto :FNAF3
if "%op%"=="" goto :Start

:FNAF1
SET EXE=FNAF1.exe
goto :LOOP

:FNAF2
SET EXE=FNAF2.exe
goto :LOOP

:FNAF3
SET EXE=FNAF3.exe
goto :LOOP

:LOOP
start "" "%EXE%"
tasklist | find /i "%EXE%" >nul 2>&1
IF ERRORLEVEL 1 (
  GOTO LOOP
) ELSE (
  cls
  GOTO CONTINUE
)

:CONTINUE
Echo Esperando a que %GAME% inicie correctamente...
timeout /t 15 /nobreak 
taskkill /f /im mmc.exe
taskkill /f /im MicrosoftEdgeUpdate.exe
taskkill /f /im onedrive.exe
taskkill /f /im jusched.exe
taskkill /f /im SearchApp.exe
net stop XboxNetApiSvc
net stop XblAuthManager
net stop SecurityHealthService 
net stop uxsms
net stop wuauserv
net stop SysMain
net stop WSearch
net stop Themes
net stop DiagTrack
net stop DusmSvc
net stop UsoSvc
net stop WDefender
net stop mpssvc
wmic process where name="GTA5.exe" CALL setpriority "32768"
wmic process where name="audiodg.exe" CALL setpriority "64"
wmic process where name="svchost.exe" CALL setpriority "64"
wmic process where name="csrss.exe" CALL setpriority "64"
wmic process where name="winlogon.exe" CALL setpriority "64"
wmic process where name="dwm.exe" CALL setpriority "64"
wmic process where name="ntoskrnl.exe" CALL setpriority "64"
cls

:WAIT
echo Esperando a que cierres %GAME%...
timeout /t 10 /nobreak 
tasklist | find /i "%EXE%" >nul 2>&1
IF ERRORLEVEL 1 (
  GOTO END
) ELSE (
  cls
  GOTO WAIT
)

:END
net start XboxNetApiSvc
net start XblAuthManager
net start SecurityHealthService
net start uxsms
net start wuauserv
net start SysMain
net start WSearch
net start Themes
net start DusmSvc
net start UsoSvc
net start WDefender
net start mpssvc
wmic process where name="audiodg.exe" CALL setpriority "32"
wmic process where name="svchost.exe" CALL setpriority "32"
wmic process where name="csrss.exe" CALL setpriority "32"
wmic process where name="winlogon.exe" CALL setpriority "32"
wmic process where name="dwm.exe" CALL setpriority "32"
wmic process where name="ntoskrnl.exe" CALL setpriority "32"
start "" "C:\Windows\SystemApps\Microsoft.Windows.Search_cw5n1h2txyewy\SearchApp.exe"