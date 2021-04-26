import React from 'react';
import FindBookingById from './FindBookingById';



export default function FindBookingByParameter(props){

    return (
        <div>

            <FindBookingById bookingId={props.match.params.bookingId}/>

        </div>

    );
}