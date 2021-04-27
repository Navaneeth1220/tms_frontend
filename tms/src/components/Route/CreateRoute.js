import React, { useState } from "react";
import DisplayRouteDetails from "./DisplayRouteDetails";
import validationMessage from '../../validationMessage';
import { useDispatch, useSelector } from "react-redux";
import { addRouteAction} from "../../redux/routeredux/addRoute/addRouteActions";
import style from "./style.css";

export default function CreateRoute(){

    /*const route = {
        routeId : "r2",
        routeFrom : "Delhi",
        routeTo :"Manali",
        pickupPoint:"Bus Stand",
        fare : 600
    };*/

    const routeFromRef = React.createRef();
    const routeToRef = React.createRef();
    const pickupPointRef = React.createRef();
    const fareRef = React.createRef();

    

    const initialState = {
        routeFrom : undefined,
        routeTo : undefined,
        pickupPoint : undefined,
        fare : undefined,
        validations: {routeFrom:undefined,routeTo:undefined},
        //formStatus : "",
    };

    const [currentState, setNewState] = useState(initialState);

    const response = useSelector(state => {

        return (

            {

                route: state.addRoute.route,
                error: state.addRoute.error
            }
        );
    });

    const dispatch = useDispatch();


    const submitHandler = (event) => {

        event.preventDefault();
        //setNewState({ ...currentState, formStatus: "form submitted successfully" });
        if (currentState.validations.routeFrom || currentState.validations.routeTo) {

            return;
        }
        let data = { ...currentState };
        console.log("form data that has to be sent to service", data);
        dispatch(addRouteAction(data));

    };

    const setFieldState = (ref) => {

        const fieldName = ref.current.name;
        const fieldValue = ref.current.value;
        console.log("inside set field state field name = " + fieldName + " fieldValue= " + fieldValue);
        let validationMsg;
        if (ref === routeFromRef) {

            validationMsg = validateRouteFrom(fieldValue);
        }

        if (ref === routeToRef) {

            validationMsg = validateRouteTo(fieldValue);
        }

       

        const newValidations = { ...currentState.validations, [fieldName]: validationMsg };
        const newState = {

            ...currentState,
            [fieldName]: fieldValue,
            route: undefined,
            errMsg: undefined,
            validations: newValidations
        };

        setNewState(newState);

    };

    const validateRouteFrom = (routeFrom) => {

        if (routeFrom.length < 3) {

            return validationMessage.routeFromSmallThanLengthThree;
        }

        return undefined;
    }

    const validateRouteTo = (routeTo) => {

        if (routeTo.length < 3) {

            return validationMessage.routeToSmallThanLengthThree;
        }

        return undefined;
    }


    return (
        <div>
            <form onSubmit = {(event)=> submitHandler(event)} className={style}>
                <div className="form-group">
                    <label>Route From </label>
                    <input name="routeFrom" type="text" ref={routeFromRef} onChange={()=>setFieldState(routeFromRef)} className="form-control" required/>
                    {currentState.validations.routeFrom ? (
                        <div>
                            {currentState.validations.routeFrom}
                        </div>
                    ) : (
                        ""
                    )}
                </div>
                <div className= "form-group">
                <label>Route To </label>
                    <input name="routeTo" type="text" ref={routeToRef} onChange={()=>setFieldState(routeToRef)} className="form-control" required/>
                    {currentState.validations.routeTo ? (
                        <div>
                            {currentState.validations.routeTo}
                        </div>
                    ) : (
                        ""
                    )}
                </div>
                <div className="form-group">
                    <label>Pickup Point </label>
                    <input name="pickupPoint" type="text" ref={pickupPointRef} onChange={()=>setFieldState(pickupPointRef)} className="form-control" required/>
                </div>
                <div className="form-group">
                    <label>Fare </label>
                    <input name="fare" type="number" ref={fareRef} onChange={()=>setFieldState(fareRef)} className="form-control" required/>
                    <br/>
                    <button type="submit">Create Route</button>
                </div>
            </form>

            <h2>{currentState.formStatus}</h2>


            {
               response.route ? (

                    <div>
                        <h2>Route Created successfully</h2>
                        <DisplayRouteDetails route = {response.route}/>
                    </div>
                ) : ""
            }

            {
                response.errMsg ? (
                    <div className={style.error}>

                        {response.errMsg}
                    </div>
                ) : ""

            }
        </div>

    );
}