import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { getProducts } from "../services/api";
import { CartContext } from "../context/CartContext";

function Home() {
    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(true);

    const { addToCart } = useContext(CartContext);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        const data = await getProducts();
        setProducts(data);
        setLoading(false);
    };

    // Search filter
    const filteredProducts = products.filter((product) =>
        product.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div id="wrapper">

            {/* Navbar */}
            <nav id="navbar">
                <h2>FASHIONISTA</h2>

                <input
                    type="text"
                    placeholder="Search for products..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />

                <div id="navright">
                    <Link to="/cart">
                        <button>Cart</button>
                    </Link>

                    <Link to="/login">
                        <button>Login</button>
                    </Link>
                </div>
            </nav>

            {/* Hero Section */}
            <div id="hero">
                <div id="overlay">
                    <h1>Summer Sale is Here!</h1>
                    <p>Up to 50% off on selected styles.</p>
                    <button>Shop Now</button>
                </div>
            </div>

            {/* Sale Banner */}
            <div id="sale">
                Flash Sale: Extra 20% OFF!
            </div>

            {/* Product Section */}
            <div id="productcards">

                {loading ? (
                    <h2>Loading...</h2>
                ) : (
                    filteredProducts.map((product) => (
                        <div className="card" key={product.id}>
                            <img src={product.image} alt={product.title} />

                            <h3>{product.title}</h3>

                            <p>${product.price}</p>

                            <Link to={`/product/${product.id}`}>
                                <button>View</button>
                            </Link>

                            <button onClick={() => addToCart(product)}>
                                Add to Cart
                            </button>
                        </div>
                    ))
                )}

            </div>

            {/* Footer */}
            <footer id="footer">
                <h3>Fashionista Store</h3>
            </footer>

        </div>
    );
}

export default Home;