import React, { useState, useEffect } from 'react'
import Skeleton from 'react-loading-skeleton'
import '../App.css'

import { NavLink } from 'react-router-dom';

export const Products = () => {

  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMount = true;

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      if (componentMount) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
        console.log(filter);
      }
      return () => {
        componentMount = false;
      }
    }
    getProducts();
  }, []);
  const Loading = () => {
    return (
      <>
        Loading.....
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>

      </>
    )
  }
  const FilterProduct =(cat)=>{
    const updateList =data.filter((x)=>x.category ===cat);
    setFilter(updateList);
  }
  const ShowProducts = () => {
    return (
      <>
        <div className="buttons d-flex justify-content-center mb-3">
          <button className='btn btn-outline-dark me-2 custom'onClick={(

          )=>setFilter(data)}>all</button>
          <button className='btn btn-outline-dark me-2 custom' onClick={()=>
          FilterProduct("men's clothing")}>Men's clothing</button>
          <button className='btn btn-outline-dark me-2 custom 'onClick={()=>
          FilterProduct("women's clothing")}>Women</button>
          <button className='btn btn-outline-dark me-2 custom'
          onClick={()=>
            FilterProduct("jewelery")}>Gems</button>
          <button className='btn btn-outline-dark me-2 custom' onClick={()=>
          FilterProduct("electronics")}>Electronics</button>

        </div>
        {filter.map((product) => {
          return (
            <>
              <div className="col-md-3 mb-4">
             
               <div className="card h-100 text-center p-4 mt-2" key={product.id}>
               
                <img src={product.image} className="img-responsive" alt={product.title} height="300px" />
                
                  <div className="card-body">
                    <h5 className="card-title mb-0">{product.title.substring(0, 12)}</h5>
                    <p className="card-text-black">${product.price}</p>
                    <NavLink to={`/products/${product.id}`} className="btn btn-dark">Check Out</NavLink>
                  </div>
                </div>
              </div>
             
            </>
          )
        })}
      </>
    )
  }
  return (

    <div>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-4">
            <h1 className='display-6 text-center fw-bold '>Latest New Products</h1>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </div>
  );
}

export default Products
