
import React from 'react';


export default function GetReportDetailsByParameter(props) {


    return (

        <div>
            <GetReportDetailsById reportId={props.match.params.reportId} />
        </div>

    );

}