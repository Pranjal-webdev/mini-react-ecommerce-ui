import BasicExample from "./item-image/BasicExample";
import Layout from "./Layout";
import "./Layout.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import Cards from "./item-image/Cards";
import "./item-image/BasicExample.css";
import Category from "./sidebar/Category";
import Price from "./sidebar/Price";
import Sort from "./sidebar/Sort";
import Last from "./Footer/Last";
import "./App.css";
import Cart from "./Cart/Cart";
import { useEffect, useState } from "react";

function App() {

  const [cartCount, setCartCount] = useState(0);
  const [category, setCategory] = useState('all');
  const [priceRange, setPriceRange] = useState("all");
  const [search, setSearch] = useState("");
  const [theme, setTheme] = useState('light');
  const [sortType, setSortType] = useState("");
  const [cartItems, setCartItems] = useState([]);
  const [showCartPage, setShowCartPage] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div style={{ backgroundColor: theme === 'light' ? "white" : "black", color: theme === "light" ? "black" : "white", borderColor: theme === "light" ? "black" : "white", minHeight: "100vh" }}>
      <Layout
        cartCount={cartCount}
        Category={Category}
        setCategory={setCategory}
        search={search}
        setSearch={setSearch}
        theme={theme}
        setTheme={setTheme}
        cartItems={cartItems}
        setCartItems={setCartItems}
        showCartPage={showCartPage}
        setShowCartPage={setShowCartPage}
      />
      <div className="main-section" style={{ width: "100%", flexDirection: isMobile ? "column" : "row", gap: "10px", display: "flex", paddingTop: "20px" }}>
        {!isMobile && (
          <div className="sidebar-wrapper " style={{ width: isMobile?"100%":"250px", flexShrink: "0" }}>
            <Category
              category={category}
              setCategory={setCategory}
              theme={theme}
              setTheme={setTheme}
            />
            <Price
              setPriceRange={setPriceRange}
              priceRange={priceRange}
              theme={theme}
              setTheme={setTheme}
            />
            <Sort
              theme={theme}
              setTheme={setTheme}
              sortType={sortType}
              setSortType={setSortType}
            />
          </div>
        )}
        <div style={{ flexGrow: 1, width: isMobile ? "100%" : "auto", minWidth: "0" }}>
          {
            showCartPage
              ?
              <Cart
                cartItems={cartItems}
                setShowCartPage={setShowCartPage}
                setCartItems={setCartItems}
                cartCount={cartCount}
                setCartCount={setCartCount}
              />
              :
              <Cards
                cartCount={cartCount}
                setCartCount={setCartCount}
                category={category}
                priceRange={priceRange}
                search={search}
                sortType={sortType}
                setSortType={setSortType}
                theme={theme}
                setTheme={setTheme}
                cartItems={cartItems}
                setCartItems={setCartItems}
              />
          }
        </div>
      </div>
      <Last
        theme={theme}
        setTheme={setTheme} />
    </div>
  )
}
export default App;