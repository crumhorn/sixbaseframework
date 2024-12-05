@echo off
rem cd c:\develop\gitlab\ptp-rno\source\rno\rno-gui-obe

rem npx @angular/cli@17 new projctName

set VERSION=1.0.0.3-LOCAL

:init
echo VERSION is %VERSION%
rem echo Removing global NodeJS from Path
rem set PATH=%PATH:C:\Program Files\nodejs\;=%
rem echo Setting local NODEJS to '%cd%\node_modules\node\bin'
rem set PATH=%PATH%;%cd%\node_modules\node\bin
rem set PATH=%PATH%;c:\develop\platform\prod\nodejs\22.1.0
rem set PATH=%PATH%;c:\develop\platform\prod\nodejs\22.1.0
rem echo Setting MVN to 'c:\develop\platform\prod\maven\3.8.2'
rem set PATH=%PATH%;c:\develop\platform\prod\maven\3.8.2\bin
rem echo Setting JAVA_HOME to 'C:\develop\platform\prod\openjdk17\17.0.4.1'
rem set JAVA_HOME=C:\develop\platform\prod\openjdk17\17.0.4.1

rem echo Patching poms
rem python -t patch.py --type "tpl" --keyword "{build_version}" --replacement "%VERSION%" --file "pom_template.xml" --target "pom.xml"
rem python -t patch.py --type "tpl" --keyword "{build_version}" --replacement "%VERSION%" --file "pom_template-it.xml" --target "pom-it.xml"
rem python -t patch.py --type "tpl" --keyword "{patch.something}" --replacement "%SOME_CONFIG_DIR%" --file "some.properties" --target "some.properties"
