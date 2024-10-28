const express = require('express');
const app = express();
const port = 4000;

app.get('/', (req, res) => res.send('Hello from NiccoPatootie!'));

app.listen(port, () => console.log(`App running on http://localhost:${port}`));
