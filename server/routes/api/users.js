const express = require('express');
const mongodb = require('mongodb');

const config = {
    dbUser: "cheko",
    dbPassword: "sys.0123",
    dbName: "heroku_9z845g1q",
    dbHost: "ds211259.mlab.com",
    dbPort: "11259",
}

const URI = `mongodb://${config.dbUser}:${config.dbPassword}@ds211259.mlab.com:11259/heroku_9z845g1q`;
const router = express.Router();

// Get Users
router.get('/', async (req, res) => {
    try {
        const users = await usersConnection();
        let collection = users.find({}).toArray();
        res.send(await collection);
    } catch (error) {
        res.send(error);
    }
});

// Find User
router.post('/find/', async (req, res) => {
    try {
        const user = await usersConnection();
        let collection = user.findOne({ email: req.body.email });
        res.send(await collection);
    } catch (error) {
        res.send(error);
    }
});

// Add User
router.post('/create/', async (req, res) => {
    try {
        const users = await usersConnection();
        await users.insertOne({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            createdAt: new Date()
        });
        res.status(201).send('ok');
    } catch (error) {
        res.send(error);
    }
})

// Authentication
router.post('/auth/', async (req, res) => {
    try {
        const users = await usersConnection();
        let collection = users.findOne({
            email: req.body.email,
            password: req.body.password,
        });
        res.send(await collection);
    } catch (error) {
        res.send(error);
    }
})

async function usersConnection() {
    const client = await mongodb.MongoClient.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true });
    const users = client.db("heroku_9z845g1q").collection("users");
    return users;
}

module.exports = router;