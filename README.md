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

