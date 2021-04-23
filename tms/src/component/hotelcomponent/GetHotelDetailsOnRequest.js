
import React, { useState } from 'react'
import DisplayHotelDetails from './DisplayHotelDetails';
import commonStyle from './commonStyle.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getHotelOnRequestAction } from '../../redux/hotelredux/gethotelonrequest/getHotelOnRequestActions';

export default function GetHotelDetailsOnRequest() {

    const hotelIdRef = React.createRef();

    const intitalState = { hotelId: undefined };

    const [currentState, setNewState] = useState(intitalState);

    const response = useSelector(state => {

        return ({

            hotel: state.getHotelOnRequest.hotel,
            error: state.getHotelOnRequest.error
        });
    })

    const dispatch = useDispatch();



    const submitHandler = (event) => {

        event.preventDefault();
        console.log("current state", currentState);
        const hotelId = hotelIdRef.current.value;
        dispatch(getHotelOnRequestAction(hotelId));

    }

    const setFieldState = () => {

        const hotelIdValue = hotelIdRef.current.value;
        const newState = { ...currentState, hotelId: hotelIdValue, hotel: undefined, errMsg: undefined };
        setNewState(newState);
    }

    return (
        <div>
            <h1> Get Hotel Details On Request</h1>

            <div className={commonStyle.content}>
                <form onSubmit={submitHandler} className={commonStyle.content}>

                    <div className="form-group">
                        <label>Enter HotelId</label>

                        <input
                            name="hotelId"
                            type="number"
                            ref={hotelIdRef}
                            onChange={setFieldState}
                            className="form-control" />

                    </div>

                    <button className="btn btn-primary">Get Hotel</button>

                </form>

                {response.hotel ? (
                    <div>
                        <DisplayHotelDetails hotel={response.hotel} />
                    </div>
                ) : ''}


                {
                    response.error ? (

                        <div className={commonStyle.error}>
                            Get Hotel On Request Processing Unsuccessful
                            <br />
                            {response.error}

                        </div>
                    ) : ''

                }
            </div>
        </div>

    );

}