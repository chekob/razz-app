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

// Get Rewards
router.get('/', async (req, res) => {
    try {
        const rewards = await rewardsConnection();
        let collection = rewards.find({}).toArray();
        res.send(await collection);
    } catch (error) {
        res.send(error);
    }
});

// Get Rewards by Id
router.post('/prize/', async (req, res) => {
    try {
        const rewards = await rewardsConnection();
        let collection = rewards.findOne({ _id: new mongodb.ObjectID(req.body.id) });
        res.send(await collection);
    } catch (error) {
        res.send(error);
    }
});

// Add prizes
router.post('/', async (req, res) => {
    try {
        const rewards = await rewardsConnection();
        await rewards.insertOne({
            name: req.body.name,
            description: req.body.description,
            image_url: req.body.imageUrl,
            quantity: req.body.quantity,
            createdAt: new Date()
        });
        res.status(201).send('ok');
    } catch (error) {
        res.send(error);
    }
})

router.put('/', async (req, res) => {
    try {
        const rewards = await rewardsConnection();
        rewards.findOne({ _id: new mongodb.ObjectID(req.body.id) }).then(data => {
            if (data.quantity > 0) {
                let newQuantity = parseInt(data.quantity) - 1;
                rewards.updateOne({ _id: mongodb.ObjectID(data._id) }, {
                    $set: { "quantity": newQuantity }
                }).then(result => {
                    res.send(result);
                });
            } else {
                res.send(false);
            }
        });
    } catch (error) {
        res.send(error);
    }
})

async function rewardsConnection() {
    const client = await mongodb.MongoClient.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true });
    const rewards = client.db("heroku_9z845g1q").collection("rewards");
    return rewards;
};

module.exports = router;