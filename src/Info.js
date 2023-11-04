import React, {useState,useEffect} from "react";
import "./style.css";
const Info = () => {
    const [products, setProducts] = useState([]);
    const [addedProducts, setAddedProducts] = useState([]); // To store products in the cart
    const [message, setMessage] = useState("");

    useEffect(() => {
        // Fetch data from the API when the component mounts
        fetch("https://dummyjson.com/products")
            .then((response) => response.json())
            .then((data) => setProducts(data.products));
    }, []);

    const handleAddToCart = (product) => {
        // Store the product in the cart (local storage)
        setAddedProducts([...addedProducts, product]);
        localStorage.setItem("cart", JSON.stringify([...addedProducts, product]));

        // Show an "Added to Cart" message for a few seconds
        console.log("ATC");
        setMessage("Added to Cart");
        setTimeout(() => setMessage(""), 2000);
    };

    return (
        <div className="prods">
            {products.map((product, index) => (
                <div key={index} className="product-item">
                    <div className="prod-image"><img src={product.thumbnail} alt=""></img></div>
                    <div className="prod-info">
                    <span>Title:{product.title}</span>
                    <span>Price: ${product.price}</span>
                    </div>
                    <button className="addtocart" onClick={ () => handleAddToCart(product)}>Add To Cart</button>
                </div>
            ))}
            <div className="cart-message">{message}</div>
        </div>
    );
}

export default Info;
