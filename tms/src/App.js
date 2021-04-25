import logo from './logo.svg';
import './App.css';
import AddCustomer from './components/customer/AddCustomer';
import Home from "./components/customer/Home";
import Navbar from "./components/customer/NavBar";
import store from "./redux/store";
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import GetCustomerDetailsById from "./components/customer/GetCustomerDetailsById";
import GetCustomerDetailsByRouteId from"./components/customer/GetCustomerDetailsRouteId";
import GetCustomerDetailsPackageId from"./components/customer/GetCustomerDetailsPackageId";
//import DisplayCustomerDetails from './components/DisplayCustomerDetails';
//import DisplayCustomerList from './components/DisplayCustomerList';
//import GetCustomerDetails from './components/GetCustomerDetails';


function App() {

  
  return (

    <Provider store={store} >

    <Router>
      <Navbar />
      <div className="container" style={{ marginTop: '50px' }}>

        <div className="row">

          <div className="col-md-9">

            <Switch>

              <Route exact path="/" component={Home} />

              <Route exact path="/addcustomer" component={AddCustomer} />
              {/*<Route exact Path="/customerdetailsById" component={GetCustomerDetailsById}/>*/}
              {/*<Route exact Path="/customerdetailsByRouteId" component={GetCustomerDetailsByRouteId}/>*/}
              <Route exact Path="/customerdetailsByPackageId" component={GetCustomerDetailsPackageId}/>
            </Switch>

          </div>
        </div>
      </div>

    </Router>
  </Provider>































    
    
  );
}

export default App;
