import React from 'react';
import  { Route, Switch, Redirect } from 'react-router-dom';
import ProductsList from './ProductsList'
import ProductDetail from './ProductDetail'

const Routes = () => {
    return(
        <Switch>
            <Route exact path='/'>
                <ProductsList />
            </Route>
            <Route exact path='/products/:id'>
                <ProductDetail />
            </Route>
            <Redirect to='/' />
        </Switch>
    )
}

export default Routes;