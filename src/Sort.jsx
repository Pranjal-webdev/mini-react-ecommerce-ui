function Sort({ theme, setTheme, sortType, setSortType }) {
    return (
        <>
            <div style={{ border: "solid 1px", textAlign: "start", width: "auto", marginTop: "2%", width: "100%", marginTop: "15%", borderColor: theme === "light" ? "black" : "yellow" }}>
                <h4 style={{ fontFamily: 'Franklin Gothic Medium', textAlign: "start", margin: "15px" }}>Sort By</h4>
                <div style={{marginLeft:"15%",marginBottom:'2%'}}>
                    <select
                        onChange={(e) =>
                            setSortType(e.target.value)
                        }
                    >
                        <option value="">
                            Sort By
                        </option>

                        <option value="low">
                            Price Low To High
                        </option>

                        <option value="high">
                            Price High To Low
                        </option>

                    </select>
                </div>
            </div>
        </>
    )
}
export default Sort;