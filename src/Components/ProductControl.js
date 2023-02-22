import React, { Component } from 'react';
import ProductList from './ProductList';
import NewProductForm from './NewProductForm';
import AddProduct from './AddProduct';


class ProductControl extends Component {
    constructor(props){
        super(props);
        this.state ={
            productFormVisible: false
        }
    }
 
    handleClick = ()=>{
        this.setState((prevState)=>({
            productFormVisible: !prevState.productFormVisible
        }))
    }

    render() {
        let currentVisibleState = null;
        let buttonText = null //new code
        if (this.state.productFormVisible){
            currentVisibleState = <NewProductForm />
            buttonText = 'Go back to Product List' //new code
        }else{
            currentVisibleState = <ProductList />
            buttonText = 'Add A Product' //new code
        }
        return (
            <React.Fragment>
                <AddProduct/>
                <button onClick = {this.handleClick}>{buttonText} </button>
                {currentVisibleState}
            </React.Fragment>
        )
    }
}

export default ProductControl;
