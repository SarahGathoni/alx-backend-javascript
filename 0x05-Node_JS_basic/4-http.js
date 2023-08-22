const http = require('http');

const port  = 1245;

const app = http.createServer((req,res) =>{
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/plain');
    res.end('Hello Holberton School!')
})
app.listen(port, () =>{

})

module.exports = app;