import { Card } from 'react-bootstrap';

function ItemDisplay(props) {
    return (
        <div>
            <Card>
                <Card.Header>{props.item.productName}</Card.Header>
                <Card.Body>
                    <img src={props.item.displayImg}></img>
                    <footer>
                        <p>{props.item.price}</p>
                    </footer>
                </Card.Body>
            </Card>
        </div>
    );
}

function Items(props) {
    return props.itemList.map(
        (i) => {
            return <ItemDisplay item={i}></ItemDisplay>
        }
    );
}

export default Items;