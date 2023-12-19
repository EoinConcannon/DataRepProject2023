import Items from "./items";

function Catalogue() {
    const data = [
        {
            "productName": "Example Item",
            "displayImg": "https://m.media-amazon.com/images/M/MV5BYTNlOGZhYzgtMmE3OC00Y2NiLWFhNWQtNzg5MjRhNTJhZGVmXkEyXkFqcGdeQXVyNzg5MzIyOA@@._V1_.jpg",
            "price": 171999999999.99
        },
        {
            "productName": "Example Item",
            "displayImg": "https://m.media-amazon.com/images/M/MV5BYTNlOGZhYzgtMmE3OC00Y2NiLWFhNWQtNzg5MjRhNTJhZGVmXkEyXkFqcGdeQXVyNzg5MzIyOA@@._V1_.jpg",
            "price": 171999999999.99
        }
    ];

    return (
        <div>
            <h3>Catalogue</h3>
            {<Items itemList={data}></Items>}
        </div>
    );
}
export default Catalogue;