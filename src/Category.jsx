import Button from 'react-bootstrap/Button';

function Category({ category, setCategory, theme, setTheme }) {
    return (
        <>
            <aside>
                <div>
                    <h2 style={{ marginBottom: "10%", textAlign: "left", marginLeft: "6%" }}><i className="bi bi-filter"></i> Filter</h2>
                    <div style={{ marginTop: "2%", border: "solid 1px", width: "auto", marginBottom: "2%", width: '100%', borderColor: theme === "light" ? "black" : "yellow" }}>
                        <h4 style={{ textAlign: "left", marginLeft: "5%", fontFamily: 'Franklin Gothic Medium' }}>Categories</h4>
                        <Button className="btn btn-sm btn-outline-dark" style={{ color: category === "all" ? "red" : "black", width:"100%",marginBottom:"8px",padding:"10px",fontsize:"14px",display:"flex",alignItems:"center",justifyContent:"center",gap:"10px"}} onClick={() => setCategory("all")}><i className="bi bi-grid"></i> All Categories</Button><br></br>
                        <Button className="btn btn-sm btn-outline-dark" style={{ color: category === "electronics" ? "red" : "black", width:"100%",marginBottom:"8px",padding:"10px",fontsize:"14px",display:"flex",alignItems:"center",justifyContent:"center",gap:"10px" }} onClick={() => setCategory("electronics")}><i className="bi bi-laptop"></i>  Electronics</Button><br></br>
                        <Button className="btn btn-sm btn-outline-dark" style={{ color: category === "clothes" ? "red" : "black", width:"100%",marginBottom:"8px",padding:"10px",fontsize:"14px",display:"flex",alignItems:"center",justifyContent:"center",gap:"10px"}} onClick={() => setCategory("clothes")}><i className="bi bi-handbag"></i> Clothing</Button><br></br>
                        <Button className="btn btn-sm btn-outline-dark" style={{ color: category === "furniture" ? "red" : "black", width:"100%",marginBottom:"8px",padding:"10px",fontsize:"14px",display:"flex",alignItems:"center",justifyContent:"center",gap:"10px"}} onClick={() => setCategory("furniture")}><i className="bi bi-lamp"></i> Furniture</Button><br></br>
                        <Button className="btn btn-sm btn-outline-dark" style={{ color: category === "shoes" ? "red" : "black",width:"100%",marginBottom:"8px",padding:"10px",fontsize:"14px",display:"flex",alignItems:"center",justifyContent:"center",gap:"10px" }} onClick={() => setCategory("shoes")}><i className="bi bi-shop"></i> Shoes</Button><br></br>
                        <Button className="btn btn-sm btn-outline-dark" style={{ color: category === "miscellaneous" ? "red" : "black", width:"100%",marginBottom:"8px",padding:"10px",fontsize:"14px",display:"flex",alignItems:"center",justifyContent:"center",gap:"10px" }} onClick={() => setCategory("miscellaneous")}><i className="bi bi-person-arms-up"></i> Miscellaneous</Button>
                    </div>
                </div>
            </aside>
        </>
    )
}
export default Category;
