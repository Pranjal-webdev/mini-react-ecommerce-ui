import { useEffect, useState } from "react";
import { getProducts } from "./Api";
import BasicExample from "./BasicExample";
import { Row, Col, Container } from "react-bootstrap";
import noProducts from "../assets/notfound.png";

function Cards({ cartCount, setCartCount, category, priceRange, search, sortType, setSortType, theme, setTheme, cartItems, setCartItems, setShowCartPage }) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts().then((data) => {
            setProducts(data);
        });
    }, []);
    const filteredProducts = products.filter((item) => {
        const categoryMatch =
            category === "all" || item.category.slug === category;

        let priceMatch = true;
        if (priceRange != "all") {
            const [min, max] = priceRange.split("-").map(Number);
            if (max) {
                priceMatch = item.price >= min && item.price <= max;
            }
            else {
                priceMatch = item.price >= min;
            }
        }

        const searchMatch = typeof search === "string"
            ? item.title
                .toLowerCase()
                .includes(search.toLowerCase())
            : true;

        return categoryMatch && priceMatch && searchMatch;
    });
    const sortedProducts = [...filteredProducts];
    if (sortType === "low") {
        sortedProducts.sort(
            (a, b) => a.price - b.price
        );
    }
    if (sortType === "high") {
        sortedProducts.sort(
            (a, b) => b.price - a.price
        );
    }
    return (
        <>
            <div className="cards-container">
                {
                    sortedProducts.length === 0 && search.length>0
                        ?
                        <img src={noProducts} alt="" style={{ justifyContent: "center", width: "80%", height: "800%", border: "solid 2px black", marginTop: '18%' }} />
                        :
                        <div className="row g-3">
                            <Container fluid className="px-1" style={{marginTop:"90px"}}>
                                <Row className="g-4">
                                    {sortedProducts.slice(0, 8).map((item) => (
                                        <Col key={item.id} xs={12} sm={6} md={6} lg={4} xl={4} className="mb-3">
                                            <BasicExample item={item}
                                                key={item.id}
                                                item={item}
                                                cartCount={cartCount}
                                                setCartCount={setCartCount}
                                                theme={theme}
                                                setTheme={setTheme}
                                                cartItems={cartItems}
                                                setCartItems={setCartItems}
                                            />
                                        </Col>
                                    ))}
                                </Row>
                            </Container>
                        </div>
                }
            </div>
        </>
    )
}
export default Cards;
