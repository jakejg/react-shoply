import React from 'react';
import { useSelector, useDispatch } from  'react-redux';
import Item from './Item';
import './ProductList.css';

const ProductsList = () => {
    const products = useSelector(store => store.products)

    const productList = products.map(product => <Item key={product.id} 
                                    id={product.id} 
                                    name={product.name}
                                    price={product.price}
                                    description={product.description}
                                    image_url={product.image_url} /> )

    return (
        <div className="ProductList">
            {productList}
        </div>
    )
}

export default ProductsList