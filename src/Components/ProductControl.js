
import React, { Component } from 'react';
import axios from 'axios';


   // Method to handle adding a new product
   handleAddingNewProduct = (newProduct) =>{

       axios.post('http://localhost:5000/products', newProduct)
           .then(res => console.log(res.data))
           .catch(err => console.log(err))
       this.setState({
           productFormVisible: false
       })
   };
