import EditProducts from "./editProduct";
import { useEffect, useState } from "react";
import axios from "axios";

function EditCatalogue() { // same GUI as catalogue.js except can update/delete products
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
            <h3>Editing Catalogue</h3>
            {<EditProducts productList={data} Reload={ReloadData}></EditProducts>}
            {/* productList displayed using EditProducts() from editProduct.js */}
        </div>
    );
}

export default EditCatalogue;