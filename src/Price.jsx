import Form from 'react-bootstrap/Form';

function Price({priceRange,setPriceRange,theme,setTheme}) {
    return (
        <>
            <aside>
                <div style={{ width: "auto",marginLeft:"0%",marginTop:"15%" }}>
                    <div style={{border:"solid 1px",borderColor:theme==="light"?"black":"yellow"}}>
                        <h4 style={{fontFamily:'Franklin Gothic Medium',textAlign:"start",margin:"15px"}}>Price Range</h4>
                        <Form>
                            {['radio'].map((type) => (
                                <div key={`default-${type}`} className="mb-3">
                                    <Form.Check 
                                        type={type}
                                        name={'price'}
                                        id={"price-all"}
                                        label={`All Prices`}
                                        checked={priceRange==="all"}
                                        value={"all"}
                                        onChange={(e)=>setPriceRange(e.target.value)}
                                    />
                                    <Form.Check 
                                        type={type}
                                        name={'price'}
                                        id={"1-10"}
                                        label={`$ 1 - 10`}
                                        checked={priceRange==="1-10"}
                                        value={"1-10"}
                                        onChange={(e)=>setPriceRange(e.target.value)}

                                    />
                                    <Form.Check 
                                        type={type}
                                        name={'price'}
                                        id={"price-10-50"}
                                        label={`$ 10 - 50`}
                                        checked={priceRange==="10-50"}
                                        value={"10-50"}
                                        onChange={(e)=>setPriceRange(e.target.value)}
                                    />
                                    <Form.Check 
                                        type={type}
                                        name={'price'}
                                        id={"price-50-100"}
                                        label={`$ 50 - 100`}
                                        checked={priceRange==="50-100"}
                                        value={"50-100"}
                                        onChange={(e)=>setPriceRange(e.target.value)}
                                    />
                                    <Form.Check 
                                        type={type}
                                        name={'price'}
                                        id={"price-100-1000000"}
                                        label={`$ 100 - above`}
                                        checked={priceRange==="100-1000000"}
                                        value={"100-1000000"}
                                        onChange={(e)=>setPriceRange(e.target.value)}
                                    />
                                </div>
                            ))}
                        </Form>
                    </div>
                </div>
            </aside>
        </>
    )
}
export default Price;