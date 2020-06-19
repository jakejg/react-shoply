import React from 'react';
import { useSelector} from  'react-redux';
import Item from './Item';
import './ProductList.css';
import  { Link } from 'react-router-dom';

const ProductsList = () => {
    const products = useSelector(store => store.products)

    const productList = products.map(product => 
                                                    <Link className="ProductList-link" key={product.id} to={`/products/${product.id}`}>
                                                        <Item  
                                                        id={product.id} 
                                                        name={product.name}
                                                        price={product.price}
                                                        description={product.description}
                                                        image_url={product.image_url}
                                                        single={false} />
                                                    </Link>
                                                 )

    return (
        <div className="ProductList">
            <h1>Products</h1>
            <div className="ProductList-items">{productList}</div>
        </div>
    )
}

export default ProductsList