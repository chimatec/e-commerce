import { CssBaseline, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { useEffect, useState } from "react";
import Catalog from "../../features/catalog/Catalog";
import { Product } from "../models/product";
import Header from "./header";
function App() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() =>{
    fetch('http://localhost:5000/api/products')
    .then(response => response.json())
    .then(data => setProducts(data))
  }, [])

  function addProduct(){
    setProducts(prevState =>[...prevState,
      {
      id: prevState.length + 101,
      name: 'product'+ (prevState.length +1), 
      price: (prevState.length * 100) + 100,
      brand: 'Pilawil Shoes',
      description: 'Designed and produced by Chima Wilson in Aba',
      pictureUrl: 'http://picsum.photos/200',
    
    }]) 

  }

  return (
    <>
      <CssBaseline/>
      <Header />
      <Container>
        <Catalog products ={products} addProduct ={addProduct}/>
      </Container>
    
    </>
  );
}

export default App;