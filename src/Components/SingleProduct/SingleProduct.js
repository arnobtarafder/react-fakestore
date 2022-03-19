import React from 'react';
import './SingleProduct.css'

const SingleProduct = (props) => {
    // console.log(props);
    const { plusCartCount } = props;
    return (
        
        <div className='col-md-4'>
           {/* <h1>Single Product</h1> */}
            <div className="card p-2 border">
                <img className='w-50 m-auto' src={props.product.image} alt="" />
           <h1>{props.product.title.slice(0,11)}</h1>
           <div className="d-flex justify-content-around">
            <button onClick = { plusCartCount } className='btn btn-success'>Add to Cart</button>
            <button className='btn btn-danger'>Delete</button>
            <button className='btn btn-info'>Details</button>
           </div>
            </div>
        </div>
    );
};


export default SingleProduct;