import React from 'react';
import Item from './Item';
import { useParams} from 'react-router-dom';
import { useSelector} from  'react-redux';
import  { Redirect } from 'react-router-dom';
import './ProductDetail.css';


const ProductDetail = () => {
    const { id } = useParams();
    const products = useSelector(store => store.products);
    
    const product = products.find(product => product.id === id);

    if (!product) {
        return <Redirect to='/'/>
    }


    return(
        <div className="ProductDetail">
            <Item 
                id={id} 
                name={product.name}
                price={product.price}
                description={product.description}
                image_url={product.image_url}
            /> 
        </div>
    
    )
}

export default ProductDetail;