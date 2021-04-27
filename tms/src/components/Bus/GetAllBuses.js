import { useEffect } from "react";
import DisplayBusList from "./DisplayBusList";
import { useDispatch, useSelector } from "react-redux";
import { allBusesAction } from '../../redux/busredux/allBuses/allBusesActions';
import style from "./style.css";
export default function GetAllBuses() {


    const currentState = useSelector(state => {

        return {

            buses: state.allBuses.buses,
            error: state.allBuses.error,

        };
    })

    const dispatch = useDispatch();

    const fetchAll = () => {

        console.log("inside use state function")
        dispatch(allBusesAction());
    };

    useEffect(fetchAll, []);

    console.log("inside get all buses", currentState.buses);

    return (
        <div >

            <h1>Get All Buses</h1>

            <div className ={style.content}>
                <ul >

                    {currentState.buses ? (

                        <DisplayBusList buses={currentState.buses} />

                    ) : ''}



                </ul>

            </div>
            { currentState.error ? (

                <div className={style.error}>
                    Get All Buses Error in request processing
                    <br />
                    {currentState.error}
                </div>
            ) : ''}


        </div>

    )

}