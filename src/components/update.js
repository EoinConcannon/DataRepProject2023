import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function Update(props) {
    let { id } = useParams();

    const [productName, setProductName] = useState('');
    const [displayImg, setDisplayImg] = useState('');
    const [price, setPrice] = useState('');
    const [stock, setStock] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:3202/api/product/' + id)
            .then((response) => {
                setProductName(response.data.productName);
                setDisplayImg(response.data.displayImg);
                setPrice(response.data.price);
                setStock(response.data.stock);
            })
            .catch(function (error) {
                console.log(error);
            })
    }, []);// empty array prevents repeating
    const updateData = (e) => {
        e.preventDefault();
        const updateProduct = {
            _id: id,
            productName: productName,
            displayImg: displayImg,
            price: price,
            stock: stock
        };
        axios.put('http://localhost:3202/api/product/' + id, updateProduct)
            .then((res) => {
                console.log(res.data);
                navigate('/editCatalogue'); // returns user to "Edit Catalogue" page
            })
            .catch((error) => {
                console.log(error);
            });
    }
    return ( // similar display to addProducts.js
        <div>
            <form onSubmit={updateData}>
                <div className="form-group">
                    <label>Edit Product Name: </label>
                    <input type="text"
                        className="form-control"
                        value={productName}
                        onChange={(e) => setProductName(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Edit Image Displayed: </label>
                    <input type="text"
                        className="form-control"
                        value={displayImg}
                        onChange={(e) => setDisplayImg(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Edit Price: </label>
                    <input type="text"
                        className="form-control"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Edit Stock: </label>
                    <input type="text"
                        className="form-control"
                        value={stock}
                        onChange={(e) => setStock(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <input type="submit" value="Edit Product Information" className="btn btn-warning" />
                </div>
            </form>
        </div>
    );
}

export default Update;