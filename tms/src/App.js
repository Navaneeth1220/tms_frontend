import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
//import DisplayReportDetails from './report/components/DisplayReportDetails';
//import DisplayReportList from './report/components/DisplayReportList';
//import GetReportDetails from './report/components/GetReportDetails';
import AddReport from './components/report/AddReport';
import DisplayReportDetails from './components/report/DisplayReportDetails';
import ReportNavbar from './components/report/ReportNavbar';
import ReportHome from './components/report/ReportHome';
import store from './redux/store';
import { Provider } from 'react-redux';

function App() {

    return (

      <div>
        <Provider store={store} >
  
          <Router>
            <ReportNavbar />

            <div className="container" style={{ marginTop: '50px' }}>
  
              <div className="row">
  
                <div className="col-md-9">
  
                  <Switch>
  
                    
                  <Route exact path="/reporthome" component={ReportHome}/>
                    <Route exact path="/addReport" component={AddReport} />
                
  
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
