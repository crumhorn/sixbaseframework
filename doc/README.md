# SIX Angular Base Framework Testing Project

This project is for testing the SIX Angular Base Framework

## Run

1. Build the project with `ng build`
2. Run the integrated server (if you want) by right clicking `'./server/www'` in IntelliJ (or other method) and say run
3. Launch you browser to <http://localhost:3200> and do stuff

## Updating after a change to the framework that you've done locally

### Either

1. Build the SIX base framework project and from the dist folder, copy the latest created distribution over to this project's `node_modules` directory.

### OR

1. Run `npm install c:\develop\six-base-angular-framework\dist` (change dir to match output path from library project), this will install and modify the package.json to match the locally installed file. It will then look something like this in the dependency list:
   2. `"six-group-base-angular-framework": "file:../../six-base-angular-framework/dist",`
