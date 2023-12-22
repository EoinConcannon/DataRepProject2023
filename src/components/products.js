import { Card } from 'react-bootstrap';

function ProductDisplay(props) {
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