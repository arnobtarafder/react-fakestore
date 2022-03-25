import React from 'react';
import ReactModal from '../ReactModal/ReactModal';
import './SingleProduct.css'

const SingleProduct = (props) => {
    // console.log(props);
    const { setCartCount } = props;
    return (
        
            <div className='col-md-4' 
            data-aos="zoom-out-down"
            // data-aos-easing="linear"
            // data-aos-duration="1500"
            >
           {/* <h1>Single Product</h1> */}
            <div className="card p-2 border">
                <img className='w-50 m-auto' src={props.product.image} alt="" />
           <h3>{props.product.title.slice(0,11)}</h3>
           <div className="d-flex justify-content-around">

            <button onClick = { setCartCount } className='btn btn-success'>Add to Cart</button>
            <button className='btn btn-danger'>Delete</button>
            {/* <button className='btn btn-info'>Details</button> */}
            <ReactModal product = {props.product}></ReactModal>
           </div>
            </div>
        </div>
        
    );
};


export default SingleProduct;