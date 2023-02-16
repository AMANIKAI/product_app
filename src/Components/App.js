import React from 'react';
import '../styles/App.css';
import Header from './Header';
import AboutUs from './AboutUs';
import Footer from './Footer';
import ProductList from './ProductList';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductForm from './ProductForm';



function App() {
 return (
   <React.Fragment>
     <div className="container-fluid">
       <Header />
       <ProductList />
       <AboutUs />
       <Footer />
       <ProductForm />

     </div>
   </React.Fragment>   
 )
}

export default App;