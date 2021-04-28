import logo from './logo.svg';
import './App.css';
import store from "./redux/store";
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import AddReport from './component/reportcomponent/AddReport';
import GetReportOnDetailsOnRequest from './component/reportcomponent/GetReportDetailsOnRequest';



function App() {
  return (
    <div>
      <Provider store={store} >
        {/*<AddReport />*/}
        {<GetReportOnDetailsOnRequest />}
      </Provider>
    </div>
  );
}

export default App;
