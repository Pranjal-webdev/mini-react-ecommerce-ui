import { useEffect, useState } from "react";

function Layout({ isMobile,cartCount, category, setCategory,search,setSearch,theme,setTheme,cartItems,setCartItems,showCartPage,setShowCartPage}) {

    const toggle = () => {
        setTheme(theme === "light" ? "dark": "light");
    }
    return (
        <div style={{flexWrap:"wrap",border:"solid 1px",display:"flex",alignItems:isMobile?"stretch":"flex-start", justifyContent:"space-between",backgroundColor:theme==='light'?"antiquewhite":"black",color:theme==="light"?"black":"white",borderColor:theme==="light"?"black":"yellow"}}>
            <aside>
                <div className="logo" style={{display:"flex",width:"100%"}}>
                    <i className="bi bi-handbag-fill"></i>
                    <div className="heading">
                        <h1 className="projectname" style={{fontSize:"1.5rem",margin:"0"}}>Product Explorer</h1>
                        <h3 className="tagline" style={{fontSize:"0.8rem",margin:"0"}}>Find your favorite products</h3>
                    </div>
                </div>
            </aside>
            <header>
                <div className="search" style={{display:"flex",flexDirection:"column"}}>
                    <input type="text" className="searchbar" placeholder="  Search products..." value={search} onChange={(e)=>setSearch(e.target.value)} style={{backgroundColor:theme==="light"?"white":"black",color:theme==="light"?"black":"white",border:"solid 2px",borderColor:theme==="light"?"black":"white",width:isMobile?"50vw":"305px"}}/>
                    <div style={{display:"flex",gap:"8px",marginLeft:"10px",flexShrink:"1"}}>
                        <button onClick={toggle} className="btn btn-sm" style={{bottom:"15px",right:"15px",display:"flex",gap:"10px"}}>
                            <i className={theme === "light" ? "bi bi-moon-fill" : "bi bi-sun-fill"}></i>
                        </button>
                        <button className="cartbtn" onClick={()=> setShowCartPage(true)}><i className="bi bi-cart">({cartCount})</i></button>
                    </div>
                </div>
            </header>
            <div className="categorybtn">
                <button className="btn btn-sm btn-outline-dark" style={{color:category==="all"? "red":"black",borderRadius:"10%",whiteSpace:"nowrap"}}onClick={() => {
                    setCategory("all")
                }}>All</button>
            <button className="btn btn-sm btn-outline-dark" style={{ color: category === "electronics" ? "red" : "black",borderRadius:"10%",whiteSpace:"nowrap"}} onClick={() => {
                setCategory("electronics")
            }}>Electronics</button>
            <button className="btn btn-sm btn-outline-dark" style={{color: category === "clothes" ? "red" : "black",borderRadius:"10%",whiteSpace:"nowrap" }} onClick={() => {
                setCategory("clothes")
            }}>Clothing</button>
            <button className="btn btn-sm btn-outline-dark"style={{color: category === "furniture" ? "red" : "black",borderRadius:"10%",whiteSpace:"nowrap" }} onClick={() => {
                setCategory("furniture")
            }}>Furniture</button>
            <button className="btn btn-sm btn-outline-dark" style={{color: category === "shoes" ? "red" : "black" ,borderRadius:"10%",whiteSpace:"nowrap"}} onClick={() => {
                setCategory("shoes")
            }}>Shoes</button>
            <button className="btn btn-sm btn-outline-dark" style={{color: category === "miscellaneous" ? "red" : "black",borderRadius:"10%",whiteSpace:"nowrap" }} onClick={() => {
                setCategory("miscellaneous")
            }}>Miscellaneous</button>
        </div>
        </div >
    );
}
export default Layout; 