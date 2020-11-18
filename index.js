const express = require('express');

const app = express();
const path = require('path');

const terrainPath = path.join(__dirname, 'terrain');
app.use((req, res, next) => {
    res.set('Access-Control-Allow-Origin', '*');
    res.set('Access-Control-Allow-Headers', 'content-type');
    res.set("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    next();
})
app.use(express.static(terrainPath, {
    setHeaders: (res, filePath) => {
        res.set('Content-Encoding', 'gzip');
    }
}))

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log('app started at: ', port)
})
