import ProductsPage from "./ProductsPage"

function ProductRow(props){
    return(
            <tr className={props.product.inStock ? 'green' : 'red'}>
            <td>{props.product.category}</td>
            <td>{props.product.name}</td>
            <td>{props.product.price}</td>
            </tr>
    )
}
export default ProductRow