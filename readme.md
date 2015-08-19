### Setup for windows, OS X & Linux

####Global Modulas
- Install Node & NPM [tutorial](http://blog.teamtreehouse.com/install-node-js-npm-windows)
- Install [bower](http://bower.io/) $npm install -g bower  
- Install [grunt](http://gruntjs.com/getting-started) $npm install -g grunt-cli
- Install [nodemon](https://www.npmjs.com/package/nodemon) $npm install -g nodemon
- Install [less](http://lesscss.org/) $npm install -g less.

####Init framework

1. cd into framework folder
2. run $npm install
3. cd into framework/public folder run $bower install
4. cd back out to framework run $nodemon
5. in another window cd into framework run $grunt watch
6. develop/ play


###Folder Structure

- app / the backend js  
- bin / server framework
- config / db configurations  
- node_modules
- public / all the public files needed by the client
	- bower_components
	- images
	- javascripts
		- build
		- src
	- stylesheets
		- build
		- src
	- bower.json  
- routes
	- index.js the main routing
	- ussers.js
- views
	- layouts
	- partials
- .gitignore / files that won't be committed
- app.js / apps engine connects the pieces
- Gruntfile.js / runs grunt
- package.json / node's package controller
- processs.js / for pm2 on the server


###How the framework was made
1. made a new folder
2. cd into it
3. $npm init
4. $express
5. cd into public folder
6. $bower init
7. $mkdir buil; $mkdir src; for javascripts and stylesheets
8. Bower & Node modules installed as needed


###Helpful links

- About [less & bootstrap](http://www.helloerik.com/bootstrap-3-less-workflow-tutorial)
