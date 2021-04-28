
import { Link } from 'react-router-dom';

export default function DisplayReportList({ reports }) {

    console.log("inside Display Report List", reports);

    return (

        <div>

            <ul>

                {
                    reports.map((report) => <li key={report.reportId}>

                        <Link to={`/reportdetails/${report.reportId}`} >
                            <span>{report.reportId} {report.reportName} </span>

                        </Link>

                    </li>)
                }
            </ul>


        </div>

    )

}