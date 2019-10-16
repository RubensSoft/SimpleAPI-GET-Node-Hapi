Launch the service with "nodemon index.js" and see the output by opening a browser with the address "localhost: 3000".

ruben@ruben-VirtualBox:~/task4$ nodemon index.js 
[nodemon] 1.19.3
[nodemon] to restart at any time, enter `rs`
[nodemon] watching dir(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node index.js`
[nodemon] clean exit - waiting for changes before restart


Or we can use curl to perform the get request.

ruben@ruben-VirtualBox:~$ curl http://localhost:3000
[{"message":"Hello Wazuh"}]





You can also create a new project as it appears below.

ruben@ruben-VirtualBox:~$ mkdir task4
ruben@ruben-VirtualBox:~$ cd task4
ruben@ruben-VirtualBox:~/task4$ npm init -y
Wrote to /home/ruben/task4/package.json:

{
  "name": "task4",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}


ruben@ruben-VirtualBox:~/task4$ touch index.js

ruben@ruben-VirtualBox:~/task4$ sudo npm i nodemon -g
[sudo] contraseña para ruben: 
/usr/bin/nodemon -> /usr/lib/node_modules/nodemon/bin/nodemon.js

> nodemon@1.19.3 postinstall /usr/lib/node_modules/nodemon
> node bin/postinstall || exit 0

Love nodemon? You can now support the project via the open collective:
 > https://opencollective.com/nodemon/donate

npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.9 (node_modules/nodemon/node_modules/fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.9: wanted {"os":"darwin","arch":"any"} (current: {"os":"linux","arch":"x64"})

+ nodemon@1.19.3
updated 1 package in 24.34s

ruben@ruben-VirtualBox:~/task4$ nodemon index.js 
[nodemon] 1.19.3
[nodemon] to restart at any time, enter `rs`
[nodemon] watching dir(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node index.js`
[nodemon] clean exit - waiting for changes before restart


We modify the index.js file.

In the terminal where we had launched the service we can see how it restarts.

[nodemon] restarting due to changes...
[nodemon] starting `node index.js`
[nodemon] restarting due to changes...
[nodemon] starting `node index.js`


And we can access the browser or with curl to see the service working.
