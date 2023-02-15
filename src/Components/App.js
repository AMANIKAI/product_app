import React from 'react';
import '../styles/App.css';
import Header from './Header';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
 return (
   <React.Fragment>
     <div className="container-fluid">
       <Header />
     </div>
   </React.Fragment>   
 )
}

export default App;