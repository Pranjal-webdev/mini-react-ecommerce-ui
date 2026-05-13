import Button from "react-bootstrap/Button";

function Cart({ cartItems, setShowCartPage, setCartItems,setCartCount,cartCount}) {
    return (
        <div>
            <h3 style={{marginBottom:"3%"}}>Cart Items</h3>
            < Button onClick={() => setShowCartPage(false)} style={{ backgroundColor: "blue", color: 'black' }}>Go Back</Button>
            {
                cartItems.map((item) =>
                    <div
                        key={item.id}
                    >
                        <img
                            src={item.images[0]}
                            width="100px"
                        />
                        <h4>{item.title}</h4>
                        <p>$ {item.price}</p>

                        < Button onClick={() => {
                            const updatedCart = cartItems.filter(
                                (product) =>
                                    product.id !== item.id
                            );
                            setCartItems(updatedCart);
                            setCartCount(
                                cartCount-1
                            );
                        }
                        } style={{ color: "black", marginLeft: "5%" }}>Remove Item
                        </Button>
                    </div>
                )
            }
        </div >
    );
}
export default Cart; 