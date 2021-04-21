import logo from './logo.svg';
import './App.css';
import AddReport from './components/AddReport';
import DisplayReportDetails from './components/DisplayReportDetails';
import DisplayReportList from './components/DisplayReportList';
import GetReportDetails from './components/GetReportDetails';

function App() {

  const report1={
    reportId :"1",
    reportName:"GoaTrip",
    reportType:"accounts"

  }
  const report2={
    reportId :"2",
    reportName:"PuneTrip",
    reportType:"hotel details"

  }

  const reports =[report1,report2];
  
  return (
    <div >
      {/*<AddReport/>*/}
      {/*<DisplayReportDetails report={report1}/>*/}
     {/*<DisplayReportList reports={reports}/>*/}
     {<GetReportDetails/>}
    </div>
  );
}

export default App;
