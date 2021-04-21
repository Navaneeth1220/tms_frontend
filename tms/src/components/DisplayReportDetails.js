
export default function DisplayReportDetails({ report }) {

    let { reportId,reportName,reportType} = report;

    return (

        <div>
            Report Id is {reportId}
            <br />
            Report Name  is {reportName}
            <br />
            Report Type is {reportType}
            <br />
        </div>
    );
}