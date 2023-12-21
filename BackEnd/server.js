const express = require('express')
const app = express()
const port = 3202

const cors = require('cors');
app.use(cors());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb+srv://admin:admin@cluster1.hxfrhia.mongodb.net/?retryWrites=true&w=majority');//access the database from mongodb (replace <password> with the actual password)
}

const productSchema = new mongoose.Schema({
    productName: String,
    displayImg: String,
    price: String,
    stock: String
    // other datatypes not working
})

const productModel = mongoose.model('products', productSchema);

app.post('/api/products', (req, res) => {// Create
    console.log(req.body);
    productModel.create({
        productName: req.body.productName,
        displayImg: req.body.displayImg,
        price: req.body.price,
        stock: req.body.stock
    })
        .then(() => { res.send("Product Added"); })
        .catch(() => { res.send(error); })
})

app.get('/api/products', async (req, res) => { // Read
    let products = await productModel.find({});
    res.json(products);
});

app.listen(port, () => {
    console.log(`Connection Successful: using port ${port}`) // use command "node server.js"
})
