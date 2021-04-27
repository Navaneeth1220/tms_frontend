import React from 'react';
import GetBusDetailsById from './GetBusDetailsById';
export default function GetBusDetailsByParameter(props) {


    return (

        <div>
            <GetBusDetailsById busId={props.match.params.busId} />
        </div>

    );

}