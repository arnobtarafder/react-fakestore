import React, { useEffect, useState } from 'react';
import SingleProduct from '../SingleProduct/SingleProduct';
import './AllProducts.css';

const AllProducts = (props) => {
    const { plusCartCount } = props;
const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => setProducts(json))
    }, [])
    // console.log(products);
    return (
        <div>
            <h1>All products</h1>

           <div className="row container">

           {
               products.map( (pd) => (
                   <SingleProduct 
                   setCartCount = {plusCartCount} // this name is important
                   key = {pd.id} 
                   product = {pd}

                   ></SingleProduct>
                  ))
           }
           </div>
        </div>
    );
};
// return (
//     <div>
//       <h1>ALL products</h1>

//       <div className="row container">
//         {products.map((pd) => (
//           <SingleProduct
//             // setCartCount={setCartCount}
//             key={pd.id}
//             product={pd}
//           ></SingleProduct>
//         ))}
//       </div>
//     </div>
//   );
// };

export default AllProducts;