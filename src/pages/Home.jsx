import banner from "../assets/images/banner.jpg";
import men from "../assets/images/men.jpg";
import women from "../assets/images/women.jpg";
import accessories from "../assets/images/accessories.jpg";
import jacket from "../assets/images/jacket.jpg";
import shoes from "../assets/images/shoes.jpg";
import dress from "../assets/images/dress.jpg";
import bag from "../assets/images/bag.jpg";
import user1 from "../assets/images/user1.jpg";
import user2 from "../assets/images/user2.jpg";
import user3 from "../assets/images/user3.jpg";

function Home() {
    return (
        <div id="wrapper">

            {/* Navbar */}
            <nav id="navbar">
                <h2>FASHIONISTA</h2>

                <input type="text" placeholder="Search for products..." />

                <div id="navright">
                    <button>Cart</button>
                    <button>Profile</button>
                    <button id="loginbtn">Login</button>
                </div>
            </nav>

            {/* Hero Section */}
            <div
                id="hero"
                style={{ backgroundImage: `url(${banner})` }}
            >
                <div id="overlay">
                    <h1>Summer Sale is Here!</h1>
                    <p>Up to 50% off on selected styles. Refresh your wardrobe.</p>
                    <button>Shop Now</button>
                </div>
            </div>

            {/* Sale Banner */}
            <div id="sale">
                Flash Sale: Extra 20% OFF! Ends in 02:15:42
            </div>

            {/* Main Section */}
            <div id="main">

                {/* Filters */}
                <div id="filters">
                    <h3>Filters</h3>

                    <h4>Category</h4>
                    <p>Men</p>
                    <p>Women</p>
                    <p>Accessories</p>

                    <h4>Price</h4>
                    <p>Under $50</p>
                    <p>$50 - $100</p>
                    <p>$100+</p>

                    <h4>Color</h4>
                    <p>Black</p>
                    <p>White</p>
                    <p>Blue</p>
                </div>

                {/* Products */}
                <div id="products">

                    {/* Categories */}
                    <div id="categories">

                        <div className="categorybox">
                            <img src={men} alt="men" />
                            <p>Men</p>
                        </div>

                        <div className="categorybox">
                            <img src={women} alt="women" />
                            <p>Women</p>
                        </div>

                        <div className="categorybox">
                            <img src={accessories} alt="accessories" />
                            <p>Accessories</p>
                        </div>

                    </div>

                    {/* Product Cards */}
                    <div id="productcards">

                        <div className="card">
                            <img src={jacket} alt="jacket" />
                            <h3>Classic Denim Jacket</h3>
                            <p>$79.99</p>
                            <button>Add to Cart</button>
                        </div>

                        <div className="card">
                            <img src={shoes} alt="shoes" />
                            <h3>White Sneakers</h3>
                            <p>$59.99</p>
                            <button>Add to Cart</button>
                        </div>

                        <div className="card">
                            <img src={dress} alt="dress" />
                            <h3>Summer Dress</h3>
                            <p>$49.99</p>
                            <button>Add to Cart</button>
                        </div>

                        <div className="card">
                            <img src={bag} alt="bag" />
                            <h3>Leather Handbag</h3>
                            <p>$120.00</p>
                            <button>Add to Cart</button>
                        </div>

                    </div>

                </div>
            </div>

            {/* Best Sellers */}
            <div id="bestsellers">
                <h1>Best Sellers</h1>

                <div id="bestbox">

                    <div className="card">
                        <img src={jacket} alt="jacket" />
                        <h3>Denim Jacket</h3>
                        <p>$79.99</p>
                        <button>Add to Cart</button>
                    </div>

                    <div className="card">
                        <img src={shoes} alt="shoes" />
                        <h3>White Sneakers</h3>
                        <p>$59.99</p>
                        <button>Add to Cart</button>
                    </div>

                    <div className="card">
                        <img src={dress} alt="dress" />
                        <h3>Summer Dress</h3>
                        <p>$49.99</p>
                        <button>Add to Cart</button>
                    </div>

                </div>
            </div>

            {/* Testimonials */}
            <div id="testimonials">
                <h1>What Our Customers Say</h1>

                <div id="testimonialbox">

                    <div className="review">
                        <img src={user1} alt="user1" />
                        <h3>Emily R.</h3>
                        <p>Absolutely love the quality and fast shipping!</p>
                    </div>

                    <div className="review">
                        <img src={user2} alt="user2" />
                        <h3>James K.</h3>
                        <p>Great selection and amazing deals.</p>
                    </div>

                    <div className="review">
                        <img src={user3} alt="user3" />
                        <h3>Sophia L.</h3>
                        <p>Customer service was super helpful.</p>
                    </div>

                </div>
            </div>

            {/* Subscribe */}
            <div id="subscribe">
                <h1>Stay in the Loop!</h1>
                <p>Sign up for exclusive offers.</p>

                <input type="email" placeholder="Your email address" />
                <button>Subscribe</button>
            </div>

            {/* Footer */}
            <footer id="footer">
                <div className="footerbox">
                    <h3>Account</h3>
                    <p>Login</p>
                    <p>Register</p>
                    <p>Wishlist</p>
                </div>

                <div className="footerbox">
                    <h3>Help</h3>
                    <p>Contact Us</p>
                    <p>Shipping</p>
                    <p>Returns</p>
                </div>

                <div className="footerbox">
                    <h3>Policies</h3>
                    <p>Privacy Policy</p>
                    <p>Terms</p>
                    <p>Cookies</p>
                </div>
            </footer>

        </div>
    );
}

export default Home;