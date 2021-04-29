
import React from 'react';
import GetPackageDetailsById from './GetPackageDetailsById';

export default function GetPackageDetailsByParameter(props) {


    return (

        <div>
            <GetPackageDetailsById packageId={props.match.params.packageId} />
        </div>

    );

}