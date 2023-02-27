import { useState } from "react"

function SearchBar(props){
    // const [search, setSearch] = useState('')
    return(
        <div>
            <h3>Search</h3>
            <input type="text" onChange={(e)=>{props.performSearch(e.target.value)}}/>
            <p>Only show products in stock</p>
            <input type="checkbox" onChange={(e)=>{
                props.checkBox(e.target.checked)
            }} />
        </div>
    )
}
export default SearchBar