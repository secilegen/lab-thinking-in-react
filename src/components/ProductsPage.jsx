import { useState } from "react";
import jsonData from './../data.json'
import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";

function ProductsPage(){
    const [products, setProducts] = useState(jsonData);
    const [search, setSearch] = useState('');

    const performSearch = (value) => {

        setSearch(value)

        const productsCopy =   products.filter((string)=>{ return string.name.toLowerCase().includes(search.toLowerCase())})

        setProducts(productsCopy)
        
    }

    const checkBox = (value) => {
        if (value===true) {
        const instock = products.filter((product)=> {return product.inStock === true})
        setProducts (instock)

        }
        else {
            setProducts(jsonData)
        }
    }


    return (
        <div>
            <h1>IronStore</h1>
            <SearchBar performSearch={performSearch} checkBox={checkBox}/>
            <div>
        
            <ProductTable productList={products}/>
            </div>
        </div>
    )
}

export default ProductsPage