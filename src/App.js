import { useState } from "react";

const title = "Bonjour les <strong></strong>"
const style = {color : 'red',backgroundColor: 'blue'}
const showTitle = false
// eslint-disable-next-line no-unused-vars
const todos = [
  'presenter react',
  'presenter le jsx',
  'Creer des composants'
]

// eslint-disable-next-line no-unused-vars
  function App() {
    const [personne,setPersonne] = useState({
      firstName :'Kane',
      lastName :'Bassirou',
      Age :18
    })
    const increment = () => {
      setPersonne({...personne,Age: personne.Age +1})
    }
  return<>
  <p> Age de {personne.firstName} : {personne.Age}</p>
  <button onClick={increment}>Gagner en age</button>
 
 <Title color="blue"/>

    <input type="text"/>
  <p>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit aperiam sunt similique, adipisci a iste maiores repudiandae ipsam doloremque officiis, asperiores libero! Eos autem voluptatem eum hic magni placeat! Itaque?

  Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit aperiam sunt similique, adipisci a iste maiores repudiandae ipsam doloremque officiis, asperiores libero! Eos autem voluptatem eum hic magni placeat! Itaque?

  Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit aperiam sunt similique, adipisci a iste maiores repudiandae ipsam doloremque officiis, asperiores libero! Eos autem voluptatem eum hic magni placeat! Itaque?

  Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit aperiam sunt similique, adipisci a iste maiores repudiandae ipsam doloremque officiis, asperiores libero! Eos autem voluptatem eum hic magni placeat! Itaque?

  </p>
  <ul>
    {todos.map(todo =>(<li key={todo}>{todo}</li>))}
  </ul>
  
  
  </>  
  
}
function Title ({color}){
  return <h1 style={{color: color}} > bonjour les gens </h1>
}
export default App;