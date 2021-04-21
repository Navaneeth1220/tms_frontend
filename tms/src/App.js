import logo from './logo.svg';
import './App.css';
import AddCustomer from './components/AddCustomer';
import DisplayCustomerDetails from './components/DisplayCustomerDetails';
import DisplayCustomerList from './components/DisplayCustomerList';
import GetCustomerDetails from './components/GetCustomerDetails';


function App() {
  const customer2 = {
    customerId: 2,
    customerName: "shivu",
    customerPassword: "SFDmopd",
    customerAddress: "Bangalore",
    customerPhonenumber: "5466",
    customerEmail: "shivu@gmail.com"
  }
  const customer3 = {
    customerId: 3,
    customerName: "ajay",
    customerPassword: "Medda",
    customerAddress: "trichy",
    customerPhonenumber: "875444",
    customerEmail: "ajy@gmail.com"
  }
  const customers = [customer2, customer3];
  return (
    <div >

      {<AddCustomer />}

      {/*<DisplayCustomerDetails customer ={customer2} />*/}

      {/*<DisplayCustomerList  customers={customers}/>*/}

      {/*<GetCustomerDetails />*/}
    </div>
  );
}

export default App;
