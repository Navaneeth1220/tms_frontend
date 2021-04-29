import React from 'react';
import GetRouteDetailsById from './GetRouteDetailsById';

export default function GetRouteDetailsByParameter(props) {


    return (

        <div>
            <GetRouteDetailsById routeId={props.match.params.routeId} />
        </div>

    );

}