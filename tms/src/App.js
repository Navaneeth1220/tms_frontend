import logo from './logo.svg';
import './App.css';



import AddBooking from './component/Booking/AddBooking';
import BookingHome from './component/Booking/BookingHome';
import { Provider } from 'react-redux';
import NavBar from './component/NavBar';
import GetBookingOnRequest from './component/Booking/GetBookingOnRequest';
import store from './redux/bookingredux/store';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import GetBookingOnUserIdRequest from './component/Booking/GetBookingOnUserIdRequest'
import Home from './component/Home'
import HotelHome from './component/hotelcomponent/HotelHome'
import FeedBackHome from './component/Feedback/FeedbackHome';
import ReportHome from './component/reportcomponent/ReportHome';
import CustomerHome from './component/customer/CustomerHome';
import PackageHome from './component/packagecomponent/PackageHome';
import BusHome from './components/Bus/BusHome';
import RouteHome from './components/Route/RouteHome';
import AddPackage from './component/packagecomponent/AddPackage';
import AddHotel from './component/hotelcomponent/AddHotel';
import GetCustomerDetailsPackageId from './component/customer/GetCustomerDetailsPackageId'
import AddCustomer from './component/customer/AddCustomer';
import UpdatePackage from './component/packagecomponent/UpdatePackage'
import GetAllPackages from './component/packagecomponent/GetAllPackages'
import GetPackageDetailsOnRequest from './component/packagecomponent/GetPackageDetailsOnRequest'
import GetPackageDetailsByParameter from './component/packagecomponent/GetPackageDetailsByParameter'
import GetAllHotels from './component/hotelcomponent/GetAllHotels'
import GetHotelDetailsByParameter from './component/hotelcomponent/GetHotelDetailsByParameter'
import GetHotelDetailsOnRequest from './component/hotelcomponent/GetHotelDetailsOnRequest'
import UpdateCustomer from './component/customer/UpdateCustomer'
import GetCustomerDetailsById from './component/customer/GetCustomerDetailsById'
import GetCustomerDetailsRouteId from './component/customer/GetCustomerDetailsRouteId'
import AddReport from './component/reportcomponent/AddReport'
import GetReportDetailsOnRequest from './component/reportcomponent/GetReportDetailsOnRequest';
import AddFeedback from './component/Feedback/AddFeedback'
import GetFeedbackDetails from './component/Feedback/GetFeedbackDetails'
import GetFeedbackDetailsCustomerId from './component/Feedback/GetFeedbackDetailsCustomerId'
import AddBus from './components/Bus/AddBus'
import GetAllBuses from './components/Bus/GetAllBuses'
import getBusDetailsonRequest from './components/Bus/getBusDetailsonRequest'
import GetBusDetailsByParameter from './components/Bus/GetBusDetailsByParameter'
import CreateRoute from './components/Route/CreateRoute'
import GetAllRoutes from './components/Route/GetAllRoutes'
import GetRouteDetailsByParameter from './components/Route/GetRouteDetailsByParameter'
import getRouteDetailsOnRequest from './components/Route/getRouteDetailsonRequest'
import fetchBusByRoute from './components/Route/fetchBusByRoute'
import UpdateRoute from './components/Route/UpdateRoute'
import { addRoute } from './service/RouteService';
import FetchBusByRoute from './components/Route/fetchBusByRoute';



function App() {





  return (
    <div>
      <Provider store={store} >

        <Router>
          <NavBar/>
            <div className="container" style = {{mariginTop : '50px'}}>
              <div className="row">
                <div className="col-md-9">


                  <Switch>
                  <Route exact path="/" component = {Home} />
                    <Route exact path="/bookinghome" component = {BookingHome} />
                    <Route exact path="/addbooking" component = {AddBooking} />
                    <Route exact path="/bookingdetails" component = {GetBookingOnRequest} />
                    <Route exact path="/useridbooking" component = {GetBookingOnUserIdRequest}/>
                    <Route exact path="/hotelhome" component={HotelHome}/>
                    <Route exact path="/feedbackhome" component={FeedBackHome}/>
                    <Route exact path="/reporthome" component={ReportHome}/>
                    <Route exact path="/customerhome" component={CustomerHome}/>
                    <Route exact path="/packagehome" component={PackageHome}/>
                    <Route exact path="/routehome" component={RouteHome}/>
                    <Route exact path="/bushome" component={BusHome}/>
                    <Route exact path="/customerdetailsByPackageId" component={GetCustomerDetailsPackageId}/>
                    <Route exact path = "/addpackage" component={AddPackage}/>
                    <Route exact path ="/updatepackage" component={UpdatePackage}/>
                    <Route exact path="/allpackages" component={GetAllPackages}/>
                    <Route exact path="/packagedetailsonrequest" component={GetPackageDetailsOnRequest}/>
                    <Route exact path="/packagedetails/:packageId" component={GetPackageDetailsByParameter}/>
                    <Route exact path = "/addhotel" component={AddHotel}/>
                    <Route exact path="/allhotels" component={GetAllHotels}/>
                    <Route exact path="/hoteldetailsonrequest" component={GetHotelDetailsOnRequest}/>
                    <Route exact path="/hoteldetails/:hotelId" component={GetHotelDetailsByParameter}/>
                    <Route exact path="/addcustomer" component={AddCustomer}/>
                    <Route exact path="/updateCustomer" component={UpdateCustomer}/>
                    <Route exact path="/customerdetailsById" component={GetCustomerDetailsById}/>
                    <Route exact path="/customerdetailsByRouteId" component={GetCustomerDetailsRouteId}/>
                    <Route exact path="/addreport" component={AddReport}/>
                    <Route exact path="/getreportdetailsonrequest" component={GetReportDetailsOnRequest}/>
                    <Route exact path="/addfeedback" component={AddFeedback}/>
                    <Route exact path="/getfeedbackonrequest" component={GetFeedbackDetails}/>
                    <Route exact path="/getfeedbackbycustomer" component={GetFeedbackDetailsCustomerId}/>
                    <Route exact path="/addbus" component={AddBus}/>
                    <Route exact path="/allbuses" component={GetAllBuses}/>
                    <Route exact path="/busdetailsonrequest" component={getBusDetailsonRequest}/>
                    <Route exact path="/busdetails/:busId" component={GetBusDetailsByParameter}/>
                    <Route exact path="/addRoute" component={CreateRoute}/>
                    <Route exact path="/allroutes" component={GetAllRoutes}/>
                    <Route exact path="/routedetailsonrequest" component={getRouteDetailsOnRequest}/>
                    <Route exact path="/fetchbusbyroute" component={fetchBusByRoute}/>
                    <Route exact path="/updateroute" component={UpdateRoute}/>




                    
                    
                    
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
