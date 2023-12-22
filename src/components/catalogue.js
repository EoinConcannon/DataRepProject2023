import Products from "./products";
import { useEffect, useState } from "react";
import axios from "axios";

function Catalogue() { // Read
    const [data, setData] = useState([]);

    useEffect(
        () => {
            axios.get("http://localhost:3202/api/products")
                .then(
                    (response) => {
                        setData(response.data);
                    }
                )
                .catch(
                    (error) => {
                        console.log(error);
                    }
                )
        }, []// empty array prevents repeating
    );

    const ReloadData = (e) => {
        axios.get("http://localhost:3202/api/products")
            .then(
                (response) => {
                    setData(response.data);
                }
            )
            .catch(
                (error) => {
                    console.log(error);
                }
            )
    }

    return (
        <div>
            <h3>Catalogue</h3>
            {<Products productList={data} Reload={ReloadData}></Products>} 
            {/* productList displayed using Products() from products.js */}
        </div>
    );
}

export default Catalogue;