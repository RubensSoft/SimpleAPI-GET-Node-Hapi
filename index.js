const Hapi = require('hapi');

// We create the server with Hapi.
const server = Hapi.server({port: 3000, host: 'localhost'});
const start = async () => {
    await server.start();
};

// we initialize it
start();

// get method function
server.route({path: '/', method: 'GET', handler: (request, h) => {
        return [{message: 'Hello Wazuh'}];
    }
});