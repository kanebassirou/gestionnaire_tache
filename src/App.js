import { useState } from "react";
import { ProductCatagorieRow } from "./Produits/ProductCatagorieRow";
import { ProductRow } from "./Produits/ProductRow";
import { Checkbox } from "./components/forms/Checkbox";
import { Input } from "./components/forms/Input";

const PRODUCTS = [
  {category : "fruit",   price:"$1",stoked :true,name:"Apple"},
  {category : "electronique",price:"$100",stoked :false,name:"SAMSUNG"},
  {category : "Vegetables",price:"$2",stoked :true,name:"PITEL"},
  {category : "fruit",price:"$1",stoked :true,name:"Apple"}
]
function App() {
  const [showStockedOnly, setShowStockedOnly] = useState(false);
  const [search, setSearch] = useState('');

  const visibleProducts = PRODUCTS.filter(product => {
    console.log("Product:", product);
    console.log("Search:", search);
    if (showStockedOnly && !product.stoked) {
      return false;
    }
    if (search && !product.name.includes(search)) {
      return false;
    }
    return true;
  });

  console.log("Rendering App - search:", search);

  return (
    <div className="container my-3">
      <SearchBar
        search={search}
        onSearchChange={setSearch}
        showStockedOnly={showStockedOnly}
        onStockedOnlyChange={setShowStockedOnly}
      />
      <ProductTable products={visibleProducts} />
    </div>
  );
}

  // ...

  function SearchBar({ showStockedOnly, onStockedOnlyChange, search, onSearchChange }) {
    console.log("SearchBar - search:", search);
  
    return (
      <div>
        <div className="mb-3">
          <Input
            value={search}
            onChange={onSearchChange}
            placeholder="Rechercher ..."
          />
          <Checkbox
            id="stocked"
            checked={showStockedOnly}
            onChange={onStockedOnlyChange}
            label="N'afficher que les produits en stock"
          />
        </div>
      </div>
    );
  }


  function ProductTable ({products}){
    const rows = []
    let lastCatagory = null
    for(let product of products){
      if(product.category !== lastCatagory){
        rows.push(<ProductCatagorieRow key={product.category} name={product.category}/>)
      }
      lastCatagory = product.category
      rows.push(<ProductRow product={product} key={product.name}/>)

    }
    return <table className="table">
      <thead>
        <tr>
          <th>Nom</th>
          <th>Prix</th>
        </tr>
      </thead>
      <tbody>
        {rows}
      </tbody>
    </table>
  }
    
export default App;