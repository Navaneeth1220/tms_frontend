import React, { useState , useEffect} from 'react'
import DisplayCustomerDetails from './DisplayCustomerDetails';
import commonStyle from './commonStyle.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCustomerById } from '../../redux/customer/fetchCustomerById/fetchCustomerByIdActions';


export default function GetCustomerDetailsById() {

    const customerIdRef = React.createRef();

    const intitalState = { customerId: undefined };

    const [currentState, setNewState] = useState(intitalState);

    const response=useSelector(state=>{
        return ({
          customer:state.fetchCustomerById.customer,
          error: state.fetchCustomerById.error
        });
    })

    const dispatch=useDispatch();



    const submitHandler = (event) => {
        event.preventDefault();
        console.log("current state", currentState);
         const customerId=customerIdRef.current.value;
         dispatch(fetchCustomerById(customerId));

    }

    const setFieldState = () => {
        const idValue = customerIdRef.current.value;
        const newState = { ...currentState, customerId: idValue, customer: undefined, errMsg: undefined };
        setNewState(newState);
    }

    return (
        <div>
            <h1> Get customer details By Id</h1>

            <div className={commonStyle.content}>
                <form onSubmit={submitHandler} className={commonStyle.content}>

                    <div className="form-group">
                        <label>Enter id</label>

                        <input name="id" type="number" ref={customerIdRef} onChange={setFieldState} className="form-control" />

                    </div>

                    <button className="btn btn-primary">Get Customer</button>

                </form>

                {response.customer ? (
                    <div>
                        <DisplayCustomerDetails customer={response.customer} />
                    </div>
                ) : ''}


                {
                    response.error ? (

                        <div className={commonStyle.error}>
                            Request processing unsuccessful
                            <br />
                            {response.error}

                        </div>
                    ) : ''

                }
            </div>
        </div>

    );

}