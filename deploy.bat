@echo off
setlocal EnableDelayedExpansion


: ' echo Compiling addon pack...
: ' for %%f in (./PeanutFramework/example_addon/*.ts) do (
: '   call tsx --no-deprecation ./PeanutFramework/example_addon/%%f || (
: '     echo Error compiling %%f 1>&2
: '   )
: ' )
: ' echo Compilation completed

popd
echo Copying addon pack...

for /f "tokens=1* delims=: " %%a in ('type config.yaml ^| findstr /i "^behaviorPackSource:"') do set "behaviorPackSource=%%b"
for /f "tokens=1* delims=: " %%a in ('type config.yaml ^| findstr /i "^resourcePackSource:"') do set "resourcePackSource=%%b"
for /f "tokens=1* delims=: " %%a in ('type config.yaml ^| findstr /i "^behaviorPackTarget:"') do set "behaviorPackTarget=%%b"
for /f "tokens=1* delims=: " %%a in ('type config.yaml ^| findstr /i "^resourcePackTarget:"') do set "resourcePackTarget=%%b"

for %%v in (behaviorPackSource resourcePackSource behaviorPackTarget resourcePackTarget) do (
  for /f "tokens=* delims= " %%a in ("!%%v!") do set "%%v=%%a"
)

if exist "!behaviorPackTarget!" (
  rmdir /S /Q "!behaviorPackTarget!"
)
if exist "!resourcePackTarget!" (
  rmdir /S /Q "!resourcePackTarget!"
)

xcopy "!behaviorPackSource!" "!behaviorPackTarget!" /E /I /Y
xcopy "!resourcePackSource!" "!resourcePackTarget!" /E /I /Y

endlocal