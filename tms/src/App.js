import logo from './logo.svg';
import './App.css';
import AddCustomer from "./components/customer/AddCustomer";
//import Home from "./components/Customer/Home";
//import Navbar from "./components/Customer/NavBar";
import store from "./redux/store";
import { Provider } from 'react-redux';
//import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
//import GetCustomerDetailsById from "./components/Customer/GetCustomerDetailsById";
//import GetCustomerDetailsByRouteId from"./components/Customer/GetCustomerDetailsRouteId";
//import GetCustomerDetailsPackageId from"./components/Customer/GetCustomerDetailsPackageId";
import UpdateCustomer from './components/customer/UpdateCustomer';

function App() {

  
  return (

    <div>
     {/*<GetCustomerDetailsPackageId/>*/}
     {/*<GetCustomerDetailsByRouteId/>*/}
   
    <Provider store={store} >
      {/*<AddCustomer/>*/}

    {<UpdateCustomer/>}
      
  </Provider>
  </div>

    
  );
}

export default App;
