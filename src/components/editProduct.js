import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function EditProductDisplay(props) {
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
                <Link to={"/update/" + props.product._id} className='btn btn-warning'>Edit Product</Link>
            </Card>
        </div>
    );
}

function EditProducts(props) {
    return props.productList.map(
        (p) => {
            return <EditProductDisplay product={p}></EditProductDisplay>
        }
    );
}

export default EditProducts;