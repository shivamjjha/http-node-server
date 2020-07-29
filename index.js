/**
 * With express, this stuff becomes much easier
 * You can use `app.get('/some_path') and so on
 * But it's nice to know how to make a server without using express 
 */

const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
    
    // Build filepath
    const filePath = path.join(
        __dirname,
        'public',
        req.url == '/' ? 'index.html' : req.url
    );

    // Get extension of the file
    const extName = path.extname(filePath);
    // console.log(extName);

    // Initial content type
    let contentType = 'text/html';

    // Check the extension and set content type
    switch (extName) {
        case '.js':
            contentType = 'text/javascript';
            break;

        case '.css':
            contentType = 'text/css';
            break;

        case '.json':
            contentType = 'application/json';
            break;

        case '.png':
            contentType = 'application/png'
            break;

        case '.jpg':
            contentType = 'image/jpg';
            break;
    }

    // Read file
    fs.readFile(filePath, (error, content) => {
        if (error) {
            if (error.code == 'ENOENT') {
                // Page not found
                fs.readFile(path.join(__dirname, 'public', '404.html'), (error, content) => {
                    res.writeHead(200, { 'Content-Type': 'text/html' });
                    res.end(content, 'utf-8');
                });
            } else {
                // Some server error
                console.log(error);
                res.writeHead(500);
                res.end('Server Error: ', error.code);
            }
        } else {
            // SUCCESS
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf-8');
        }
    });
});

// Not always the server runs on a specific port, e.g. 5000
// So, it is going to run on whatever our host is going to decide (environment variable)
// If no env var, then it's gonna run on port 5000
const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on port: ${PORT}`));



