/**
 * les lignes du produits dans un tableau à 2 colonnes (nom / prix)
 * @param {{name:string,stocked:boolean,price: string}} product 
 */
export function ProductRow ({product}){
    const style = product.stoked ? undefined : {color :'red'}
    return <tr>
        <td style = {style}>{product.name}</td>
        <td>{product.price}</td>
    </tr>
}