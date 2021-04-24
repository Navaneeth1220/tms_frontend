
import logo from './logo.svg';
import './App.css';
import DisplayHotelDetails from './component/hotelcomponent/DisplayHotelDetails';
import AddHotel from './component/hotelcomponent/AddHotel';
import DisplayHotelList from './component/hotelcomponent/DisplayHotelList';
import GetAllHotels from './component/hotelcomponent/GetAllHotels';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import HotelNavbar from './component/hotelcomponent/HotelNavbar';
import HotelHome from './component/hotelcomponent/HotelHome';
import GetHotelDetailsOnRequest from './component/hotelcomponent/GetHotelDetailsOnRequest';
import { Provider } from 'react-redux';
//import store from './redux/hotelredux/store';
import { addHotel } from './service/HotelService';
import GetHotelDetailsByParameter from './component/hotelcomponent/GetHotelDetailsByParameter';

import DisplayPackageDetails from './component/packagecomponent/DisplayPackageDetails';
import AddPackage from './component/packagecomponent/AddPackage';
import DisplayPackageList from './component/packagecomponent/DisplayPackageList';
import GetAllPackages from './component/packagecomponent/GetAllPackages';
import PackageNavbar from './component/packagecomponent/PackageNavbar';
import PackageHome from './component/packagecomponent/PackageHome';
import GetPackageDetailsOnRequest from './component/packagecomponent/GetPackageDetailsOnRequest';
import store from './redux/packageredux/store';
import { addPackage } from './service/PackageService';
import GetPackageDetailsByParameter from './component/packagecomponent/GetPackageDetailsByParameter';



function App() {

  /*const hotel1 = {
     hotelId: 5,
     hotelName: "A2B",
     hotelType: "Super",
     hotelDescription: "Five Stars",
     address: "chennai",
     rent: 1000.0
   }
 
   const hotel2 = {
     hotelId: 4,
     hotelName: "A2B1",
     hotelType: "Super1",
     hotelDescription: "Five Stars1",
     address: "chennai1",
     rent: 1001.0
   }
 
   const hotel3 = {
     hotelId: 3,
     hotelName: "A2B2",
     hotelType: "Super2",
     hotelDescription: "Five Stars2",
     address: "chennai2",
     rent: 1002.0
   }
   const hotels = [hotel1, hotel2, hotel3];*/

  /*  const pack1 = {
  
      packageId: 1,
      packageName: "holiday1",
      packageDescription: "Cool1",
      packageType: "Legend1",
      packageCost: 5000.0,
      hotelId: 13,
      hotelName: "A2B13",
      hotelType: "Super13",
      hotelDescription: "Five Stars13",
      address: "chennai13",
      rent: 1013.0,
      hotelStatus: "Available"
    }
  
    const pack2 = {
  
      packageId: 2,
      packageName: "holiday2",
      packageDescription: "Cool2",
      packageType: "Legend2",
      packageCost: 5001.0,
      hotelId: 12,
      hotelName: "A2B12",
      hotelType: "Super12",
      hotelDescription: "Five Stars12",
      address: "chennai12",
      rent: 1012.0,
      hotelStatus: "Available"
    }
  
    const pack3 = {
  
      packageId: 3,
      packageName: "holiday3",
      packageDescription: "Cool3",
      packageType: "Legend3",
      packageCost: 5002.0,
      hotelId: 11,
      hotelName: "A2B11",
      hotelType: "Super11",
      hotelDescription: "Five Stars11",
      address: "chennai11",
      rent: 1011.0,
      hotelStatus: "Available"
    }
  
    const packs = [pack1, pack2, pack3];*/

  /*const data1 = {
 
     hotelName: "A2B11",
     hotelType: "Super11",
     hotelDescription: "Five Stars11",
     address: "chennai11",
     rent: 1011.0
 
   }
 
   const promise = addHotel(data1);
   promise.then(response => console.log("add hotel request response", response.data))
     .catch(error => console.log("hotel error response fetched", error.message));*/

  /*const data2 = {

    packageName: "National",
    packageDescription: "Super_Awesome",
    packageType: "Four_Star",
    packageCost: 8500.0,
    hotelId: 3

  }

  const promise = addPackage(data2);
  promise.then(response => console.log("add package request response", response.data))
    .catch(error => console.log("package error response fetched", error.message));*/



  return (

    <div>
      <Provider store={store} >

        <Router>
          <PackageNavbar />
          <div className="container" style={{ marginTop: '50px' }}>

            <div className="row">

              <div className="col-md-9">

                <Switch>
                  <Route exact path="/" component={PackageHome} />
                  <Route exact path="/all" component={GetAllPackages} />
                  <Route exact path="/addpackage" component={AddPackage} />
                  <Route exact path="/packagedetails/:packageId" component={GetPackageDetailsByParameter} />
                  <Route exact path="/packagedetailsonrequest" component={GetPackageDetailsOnRequest} />

                </Switch>

              </div>
            </div>
          </div>

        </Router>
      </Provider>

    </div>

    /*<div>
      <Provider store={store} >

        <Router>
          <HotelNavbar />
          <div className="container" style={{ marginTop: '50px' }}>

            <div className="row">

              <div className="col-md-9">

                <Switch>
                  <Route exact path="/" component={HotelHome} />
                  <Route exact path="/all" component={GetAllHotels} />
                  <Route exact path="/addhotel" component={AddHotel} />
                  <Route exact path="/hoteldetails/:hotelId" component={GetHotelDetailsByParameter} />
                  <Route exact path="/hoteldetailsonrequest" component={GetHotelDetailsOnRequest} />

                </Switch>

              </div>
            </div>
          </div>

        </Router>
      </Provider>

    </div>*/

  );
}

export default App;
