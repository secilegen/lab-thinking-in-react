import ProductRow from "./ProductRow"

function ProductTable(props){
    return(
        <div>
            <h3>Table</h3>
            <table>
            <tr>
                <th>Category</th>
                <th>Name</th>
                <th>Price</th>
            </tr>
            
            {props.productList.map((product)=> <ProductRow key={product.id} product={product}/>)}
            
            </table>
        </div>
    )
}
export default ProductTable