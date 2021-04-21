import DisplayReportDetails from "./DisplayReportDetails";


export default function DisplayReportList({ reports }) {

    return (

        <div>
            <ul>
                {reports.map((report) => <li key={report.reportId}><DisplayReportDetails report={report} /></li>)}
            </ul>
        </div>
    );



}