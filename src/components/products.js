import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

function ProductDisplay(props) {
    /*
    let { id } = useParams();

    const [productName, setProductName] = useState('');
    const [displayImg, setDisplayImg] = useState('');
    const [price, setPrice] = useState('');
    const [stock, setStock] = useState('');

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

    const decrementStock = (e) => {
        const updateProduct = {
            _id: id,
            productName: productName,
            displayImg: displayImg,
            price: price,
            stock: (stock - 1) // server crashes
        };
        axios.put('http://localhost:3202/api/product/' + id, updateProduct)
            .then((res) => {
                console.log(res.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }
    */
    return (
        <div>
            <Card>
                <Card.Header>{props.product.productName}</Card.Header>
                <Card.Body>
                    <img src={props.product.displayImg}></img>
                    <footer>
                        <p>Price: €{props.product.price}</p>
                        <p>In Stock: {props.product.stock}</p>
                        <p>Product ID: {props.product._id}</p>
                    </footer>
                </Card.Body>
                <Button variant='success' /*onClick={decrementStock()}*/>Purchase</Button>
            </Card>
        </div>
    );
}

function Products(props) {
    return props.productList.map(
        (p) => {
            return <ProductDisplay product={p}></ProductDisplay>
        }
    );
}

export default Products;