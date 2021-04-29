
import { useEffect } from "react";
import commonStyle from './commonStyle.module.css';
import DisplayHotelList from "./DisplayHotelList";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllHotelsAction } from "../../redux/hotelredux/fetchallhotels/fetchAllHotelsActions";

export default function GetAllHotels() {


    const currentState = useSelector(state => {

        return {

            hotels: state.fetchAllHotels.hotels,
            error: state.fetchAllHotels.error,

        };
    })

    const dispatch = useDispatch();

    const fetchAll = () => {

        console.log("inside use state function")
        dispatch(fetchAllHotelsAction());
    };

    useEffect(fetchAll, []);

    console.log("inside getall hotels", currentState.hotels);

    return (
        <div>

            <h1>Get All Hotels</h1>

            <div className={commonStyle.content}>
                <ul >

                    {currentState.hotels ? (

                        <DisplayHotelList hotels={currentState.hotels} />

                    ) : ''}



                </ul>

            </div>
            { currentState.error ? (

                <div className={commonStyle.error}>
                    Get All Hotels Error in request processing
                    <br />
                    {currentState.error}
                </div>
            ) : ''}


        </div>

    )

}
