const express = require('express')
const os = require('os');

const app = express();

app.get('/home', (req, res) => {
    res.send(`Hostname: ${os.hostname}`);
})

app.listen(4000, () => {
    console.log('Server started listening on port 4000')
});