import React, { useState, useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import {useDispatch} from 'react-redux';
import { addCart } from '../redux/action';

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const dispatch =useDispatch();
  const addProduct = (product) => {
    dispatch(addCart(product));
  }
  


  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await response.json();
      console.log('data:', data); // log the data
      setProduct(data);
      setLoading(false);
    };
    getProduct();
  }, [id]);

  const Loading = () => {
    return <div>Loading...</div>;
  };

  const ShowProduct = () => {
    if (!product) {
      return <div>No product found.</div>;
    }

    return (
      <>
      <div className="col-md-6">
        <img
          src={product.image}
          alt={product.title}
          height="440px"
          width="440px"
          key={product.id}
        />
      </div>
      <div className="col-md-6">
        <h4 className="text-uppercase text-black-50">
          {product.category}
        </h4>
        <h1 className="display-5">{product.title}</h1>
        <p className="lead fw-bold text-secondary">
          Rating{product.rating && product.rating.rate}
          <i className="fa fa-star"></i>
        </p>
         <h3 className="display-6 fw-bold my-4">
          $ {product.price}
         </h3>
         <p className="lead text-black">
          {product.description}
         </p>
         <button className="btn btn-outline-dark me-3" onClick={()=>addProduct(product)} >
          Add to Cart
         </button>
         <NavLink to='/cart' className="btn btn-primary">
          Go to Cart
         </NavLink>
      </div>
      </>
      
      
    );
  };

  return (
    <div>
      <div className="container">
        <div className="row py-5">
          {loading ? <Loading /> : <ShowProduct />}
        </div>
      </div>
    </div>
  );
};

export default Product;
