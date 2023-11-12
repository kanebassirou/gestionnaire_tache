/**
 * ligne tbleau avec nom de la catagorie 
 * @param {string} name 
 */
export function ProductCatagorieRow ({name}){
    return <tr>
        <td colSpan={2}><strong>{name}</strong></td>
    </tr>

}