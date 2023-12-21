import { useState } from "react";
import axios from "axios";

function AddProducts() {

    const [productName, setProductName] = useState('');
    const [displayImg, setDisplayImg] = useState('');
    const [price, setPrice] = useState('');
    const [stock, setStock] = useState('');

    const addToDatabase = (e) => {
        e.preventDefault(); // prevents this from being called repeatedly

        const product = ({
            productName: productName,
            displayImg: displayImg,
            price: price,
            stock: stock
        });

        axios.post("http://localhost:3202/api/products", product)
            .then()
            .catch();
    }
    return (
        <div>
            <form onSubmit={addToDatabase}>
                <div className="form-group">
                    <label>Product Name: </label>
                    <input type="text"
                        className="form-control"
                        value={productName}
                        onChange={(e) => { setProductName(e.target.value) }}
                    />
                </div>
                <div className="form-group">
                    <label>Image Displayed: </label>
                    <input type="text"
                        className="form-control"
                        value={displayImg}
                        onChange={(e) => { setDisplayImg(e.target.value) }}
                    />
                </div>
                <div className="form-group">
                    <label>Product Price: </label>
                    <input type="text"
                        className="form-control"
                        value={price}
                        onChange={(e) => { setPrice(e.target.value) }}
                    />
                </div>
                <div className="form-group">
                    <label>Stock Quantity: </label>
                    <input type="text"
                        className="form-control"
                        value={stock}
                        onChange={(e) => { setStock(e.target.value) }}
                    />
                </div>
                <div>
                    <input type="submit" value="Add Product"></input>
                </div>

            </form>
        </div>
    );
}

export default AddProducts;