var http= require ('http');

var fs = require('fs');

var server = http.createServer((req,res) =>{
    console.log('i got a request');
    res.writeHead(404, {'Content-type': 'text/html' });
    // res.write('helssslo')
    // res.end();

    if(req.url ===  '/'){
        fs.createReadStream('index.html').pipe(res)
        // fs.createWriteStream('index.html')
    }

    if(req.url === '/about'){
        fs.createReadStream('about.html').pipe(res);
    }
})


server.listen(3000);