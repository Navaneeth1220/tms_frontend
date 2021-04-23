
import React, {useEffect } from "react";
import DisplayHotelDetails from "./DisplayHotelDetails";
import commonStyle from "./commonStyle.module.css";
import { useDispatch, useSelector } from 'react-redux';
import { fetchHotelByIdAction } from '../../redux/hotelredux/fetchhotelbyid/fetchHotelByIdActions';





export default function GetHotelDetailsById({hotelId}) {

    /*    let mockHotel = {
            hotelId: 5,
            hotelName: "A2B",
            hotelType: "Super",
            hotelDescription: "Five Stars",
            address: "chennai",
            rent: 1000.0
        };*/

    const currentState = useSelector(state => {

        return ({

            hotel: state.fetchHotelById.hotel,
            error: state.fetchHotelById.error
        });
    })

    const dispatch = useDispatch();


    const fetchHotelOnRender = () => {

        dispatch(fetchHotelByIdAction(hotelId));

    }

    useEffect(fetchHotelOnRender, []);



    return (

        <div>
            <h1> Get Hotel Details</h1>



            {currentState.hotel ? (
                <div>
                    <DisplayHotelDetails hotel={currentState.hotel} />
                </div>
            ) : ''}


            {
                currentState.error ? (

                    <div className={commonStyle.error}>
                        Get Hotel Details Request processing unsuccessful
                        <br />
                        {currentState.error}

                    </div>
                ) : ''

            }
        </div>

    );
}
