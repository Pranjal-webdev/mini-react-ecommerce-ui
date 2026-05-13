function Last({theme,setTheme}){
    return(
        <div style={{border:"solid 2px",backgroundColor:theme==="light"?"whitesmoke":"black",borderColor:theme==="light"?"black":"yellow",marginTop:"2%"}}>
            <div style={{display:"flex",fontSize:"xx-large",marginLeft:"35%",fontSize:"200%"}}>
                <i className="bi bi-file-earmark-excel" style={{color:"blueviolet"}}></i>
                <div>
                    <h4 style={{fontFamily:"cursive",color:theme==="light"?"black":"white"}}> No Products found</h4>
                    <h6 style={{fontFamily:"cursive",color:theme==="light"?"gray":"grey"}}>Try adjusting your search or filters</h6>
                </div>
            </div>
        </div>
    )
}
export default Last;