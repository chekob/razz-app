const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const history = require('connect-history-api-fallback')

const app = express();
const staticFileMiddleware = express.static(path.join(__dirname, '/public/'));

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cors());

const rewards = require('./routes/api/rewards');
app.use('/api/rewards', rewards);

const users = require('./routes/api/users');
app.use('/api/users', users);

// Handle production
if (process.env.NODE_ENV === 'production') {
    // "build": "node server/index.js",
    app.use(staticFileMiddleware)
        .use(history())
        .use(staticFileMiddleware);
    app.get(/.*/, (req, res) => {
        res.sendFile(path.join(__dirname + '/index.html'))
    })
}

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server start on port ${port}`);
})