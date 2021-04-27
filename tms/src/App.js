import './App.css';
import AddBus from './components/Bus/AddBus';
import GetBusDetailsByParameter from './components/Bus/GetBusDetailsByParameter';
import GetRouteDetailsByParameter from './components/Route/GetRouteDetailsByParameter';
import { Provider } from 'react-redux';
import store from './redux/store';
import BusNavBar from './components/Bus/BusNavBar';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import RouteNavBar from './components/Route/RouteNavBar';
import CreateRoute from './components/Route/CreateRoute';
import RouteHome from './components/Route/RouteHome';
import BusHome from './components/Bus/BusHome';
import GetBusDetailsOnRequest from './components/Bus/getBusDetailsonRequest';
import GetRouteDetailsOnRequest from './components/Route/getRouteDetailsonRequest';
import GetAllBuses from './components/Bus/GetAllBuses';
import GetAllRoutes from './components/Route/GetAllRoutes';
import FetchBusByRoute from './components/Route/fetchBusByRoute';

function App() {
  /*let mockRoute={
    routeId: "r1",
    routeFrom: "Jaipur",
    routeTo: "Himachal",
    pickupPoint: "Bus Stand",
    fare: 1200
  }*/
  return (
    <div>
      <Provider store={store} >

        <Router>
          <RouteNavBar/>
          <BusNavBar/>
            <div className="container" style = {{mariginTop : '50px'}}>
              <div className="row">
                <div className="col-md-9">


                  <Switch>
                    <Route exact path="/" component = { RouteHome } />
                    <Route exact path="/addRoute" component = { CreateRoute } />
                    <Route exact path="/allroutes" component={GetAllRoutes} />
                    <Route exact path="/routedetails/:routeId" component = { GetRouteDetailsByParameter } />
                    <Route exact path="/routedetailsonrequest" component={GetRouteDetailsOnRequest} />
                    <Route exact path="/" component = { BusHome } />
                    <Route exact path="/addBus" component = { AddBus } />
                    <Route exact path="/allbuses" component={GetAllBuses} />
                    <Route exact path="/busdetails/:busId" component = { GetBusDetailsByParameter } />
                    <Route exact path="/busdetailsonrequest" component={GetBusDetailsOnRequest} />
                    <Route exact path="/fetchbusbyroute" component={FetchBusByRoute} />
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