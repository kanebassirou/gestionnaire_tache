import { useEffect, useState } from "react";
import { ProductCatagorieRow } from "./Produits/ProductCatagorieRow";
import { ProductRow } from "./Produits/ProductRow";
import { Checkbox } from "./components/forms/Checkbox";
import { Input } from "./components/forms/Input";


function App() {
  const [duration ,setDuration] = useState(5)
  const [secondsLeft ,SetsecondsLeft] = useState(duration);
  const handleChange = (v) => {
    setDuration(v)
    SetsecondsLeft(v)
  }  

  useEffect(()=>{
    SetsecondsLeft(duration)
    const timer =  setInterval(()=>{
      SetsecondsLeft(v => {
        if (v <= 1){ 
          clearInterval(timer)
          return 0
        }
        return v-1})
    },1000)
    return() => {
      clearInterval(timer)
    }
  },[duration]);
  return <div className="vstack gap-2">
    <Input
    value={duration}
    onChange={handleChange}
    placeholder="Timer ..."
    />
    <p>
        Decompte : {secondsLeft}   
    </p>
    
  </div>

}

export default App;