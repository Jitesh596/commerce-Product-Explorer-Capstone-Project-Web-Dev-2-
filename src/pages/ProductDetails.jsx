import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { getSingleProduct } from "../services/api";
import { CartContext } from "../context/CartContext";

function ProductDetails() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    const { addToCart } = useContext(CartContext);

    useEffect(() => {
        fetchProduct();
    }, []);

    const fetchProduct = async () => {
        const data = await getSingleProduct(id);
        setProduct(data);
    };

    if (!product) {
        return <h2>Loading...</h2>;
    }

    return (
        <div id="detailsPage">
            <div id="detailsBox">
                <img src={product.image} alt={product.title} />

                <div id="detailsContent">
                    <h1>{product.title}</h1>

                    <p>{product.description}</p>

                    <h2>${product.price}</h2>

                    <button onClick={() => addToCart(product)}>
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ProductDetails;