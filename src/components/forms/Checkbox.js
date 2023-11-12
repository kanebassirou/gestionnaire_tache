/**
 * check avec un libellé sur la droite 
 * @param {boolean} checked
 * @param {(v:boolean)=> void} onChange 
 * @param {string} label 
 * @param {string} id 

 */
export function Checkbox ({checked,onChange,label,id}){
    return <div className="form-check">
        <input 
        id={id}
        type="checkbox" 
        className="form-check-input"
         checked={checked}
         onChange={(e)=> onChange(e.target.checked)}
         />
         <label htmlFor={id} className="form-check-label">
            {label}
            </label>
    </div>

}