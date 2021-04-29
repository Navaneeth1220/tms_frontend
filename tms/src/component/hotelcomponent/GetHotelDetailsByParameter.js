
import React from 'react';
import GetHotelDetailsById from './GetHotelDetailsById';

export default function GetHotelDetailsByParameter(props) {


    return (

        <div>
            <GetHotelDetailsById hotelId={props.match.params.hotelId} />
        </div>

    );

}