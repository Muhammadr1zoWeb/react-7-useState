
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const[products, setProducts] = useState([])
  const[product, setProduct] = useState({})
  useEffect(()=>{
    fetch('https://fakestoreapi.com/products/')
    .then((res)=> res.json())
    .then((data)=> setProducts(data))
  }, [])

  return (
    <div className="App">
      <h1>app</h1>
      <div className="container">
      <ul className='list__item'>
    {
      products.map((item, index)=>(
        <li key={index} className='d-flex align-items-center'>
      <div class="card" style={{width: '18rem'}}>
      <img src={item.image} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">{item.title}</h5>
        <p class="card-text">Some quick </p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
        <button onClick={()=> setProduct(item)} className='btn btn-info ms-3' data-bs-toggle="modal" data-bs-target="#exampleModal" >more</button>
      </div>
    </div>
    </li>
      ))
    }
      </ul>
<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">{product.title}</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <img src={product.image} alt=""/>
        <p>{product.description}</p>
      </div>
      <div class="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
      </div>
    </div>
  );
}

export default App;
