@echo off
echo Compiling addon pack...
echo Compilation completed
for %%f in (./PeanutFramework/example_addon/*.ts) do (
  call tsx ./PeanutFramework/example_addon/%%f || (
    echo Error compiling %%f 1>&2
  )
)
popd
echo Copying addon pack...
xcopy "src\behavior_packs\" "target\development_behavior_packs\" /E /I /Y
xcopy "src\resource_packs\" "target\development_resource_packs\" /E /I /Y