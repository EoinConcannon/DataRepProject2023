import Products from "./products";

function Catalogue() {
    const data = [
        {
            "productName": "Example Item",
            "displayImg": "https://imageio.forbes.com/specials-images/imageserve/5bb22ae84bbe6f67d2e82e05/0x0.jpg?format=jpg&crop=1012,1013,x627,y129,safe&height=416&width=416&fit=bounds",
            "price": 171999999999.99,
            "stock": 1
        }
    ];

    return (
        <div>
            <h3>Catalogue</h3>
            {<Products productList={data}></Products>}
        </div>
    );
}
export default Catalogue;