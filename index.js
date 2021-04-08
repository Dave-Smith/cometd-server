let http = require('http');

let cometd = require('cometd-nodejs-server');
let cometdServer = cometd.createCometDServer({
    logLevel: 'debug', // Emits logging on the console
    timeout: 10000, // Heartbeat timeout in milliseconds
    maxInterval: 15000 // Server-side session expiration in milliseconds
});

let httpServer = http.createServer(cometdServer.handle);
httpServer.listen(55555, 'localhost', function() {
    // Your application code here.
    let channel = cometdServer.createServerChannel('/channel1');
    console.log('Hi, Carl');
});