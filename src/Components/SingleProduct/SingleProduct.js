import React from 'react';
import './SingleProduct.css'

const SingleProduct = (props) => {
    // console.log(props.Product);
    return (
        
        <div className='col-md-4'>
           <h1>Single Product</h1>
            <div className="card p-2 border">
                <img src={props.product.image} alt="" />
           <div className="d-flex justify-content-around">
           <h1>{props.product.title.slice(0,11)}</h1>
            <button className='btn btn-success'>Add to Cart</button>
            <button className='btn btn-danger'>Delete</button>
            <button className='btn btn-info'>Details</button>
           </div>
            </div>
        </div>
    );
};


export default SingleProduct;