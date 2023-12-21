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
                    </footer>
                </Card.Body>
                <Link to={"/.../" + props.product._id} className='btn btn-warning'>Edit</Link>
                {/* create update js file */}
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