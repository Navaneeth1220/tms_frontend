import logo from './logo.svg';
import './App.css';
import AddCustomer from './components/Customer/AddCustomer';
import Home from "./components/Customer/Home";
import Navbar from "./components/Customer/NavBar";
import store from "./redux/store";
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import GetCustomerDetailsById from "./components/Customer/GetCustomerDetailsById";
import GetCustomerDetailsByRouteId from"./components/Customer/GetCustomerDetailsRouteId";
import GetCustomerDetailsPackageId from"./components/Customer/GetCustomerDetailsPackageId";

//import DisplayCustomerDetails from './components/DisplayCustomerDetails';
//import DisplayCustomerList from './components/DisplayCustomerList';
//import GetCustomerDetails from './components/GetCustomerDetails';


function App() {

  
  return (

    <div>
     {<GetCustomerDetailsPackageId/>}
     {<GetCustomerDetailsByRouteId/>}
   
    <Provider store={store} >

    <Router>
      <Navbar />
      <div className="container" style={{ marginTop: '50px' }}>

        <div className="row">

          <div className="col-md-9">

            <Switch>

              <Route exact path="/" component={Home} />

          
              
            </Switch>

          </div>
        </div>
      </div>

    </Router>
  </Provider>
  </div>

    
  );
}

export default App;
