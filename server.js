const express = require('express');

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Hello from my Node.js application!');
});

app.get('/info', (req, res) => {
    res.json({
        application: 'DevOps Docker Demo',
        nodeVersion: process.version,
        platform: process.platform
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});