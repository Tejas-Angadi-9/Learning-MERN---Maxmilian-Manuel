const http = require('http');

const server = http.createServer((req, res) => {
    console.log('INCOMING REQUEST');
    console.log(req.method, req.url);

    res.end('SUCCESS!');
})

server.listen(5000, () => {
    console.log(`Server running on: http://localhost:5000/`);
})