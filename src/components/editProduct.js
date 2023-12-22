import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

function EditProductDisplay(props) { // This GUI is displayed when "Edit Catalogue" is selected on navbar
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
                        {/* Product ID displays the literal ID assigned by the Mongo Database */}
                    </footer>
                </Card.Body>
                <Link to={"/update/" + props.product._id} className='btn btn-warning'>Edit Product</Link>
                <Button variant='danger' onClick={ // deletes the product when selected
                    (e) => {
                        axios.delete("http://localhost:3202/api/product/" + props.product._id)
                            .then((res) => {
                                let reload = props.reload();
                            })
                            .catch();
                    }
                }>Delete</Button>
            </Card>
        </div>
    );
}

function EditProducts(props) { // gets data from function above
    return props.productList.map(
        (p) => {
            return <EditProductDisplay product={p} key={p._id} reload={() => { props.Reload(); }}></EditProductDisplay>
        }
    );
}

export default EditProducts;