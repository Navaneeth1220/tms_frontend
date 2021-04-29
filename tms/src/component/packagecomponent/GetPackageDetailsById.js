
import React, { useEffect } from "react";
import DisplayPackageDetails from "./DisplayPackageDetails";
import commonStyle from "./commonStyle.module.css";
import { useDispatch, useSelector } from 'react-redux';
import { fetchPackageByIdAction } from '../../redux/packageredux/fetchpackagebyid/fetchPackageByIdActions';





export default function GetPackageDetailsById({ packageId }) {

    /*    let mockPackage = {
                packageId: 5,
                packageName: "A2B",
                packageType: "Super",
                packageDescription: "Five Stars",
                packageCost: 8500.0,
                hotelId: 3
            };*/

    const currentState = useSelector(state => {

        return ({

            pack: state.fetchPackageById.pack,
            error: state.fetchPackageById.error
        });
    })

    const dispatch = useDispatch();


    const fetchPackageOnRender = () => {

        dispatch(fetchPackageByIdAction(packageId));

    }

    useEffect(fetchPackageOnRender, []);



    return (

        <div>
            <h1> Get Package Details</h1>



            {currentState.pack ? (
                <div>
                    <DisplayPackageDetails pack={currentState.pack} />
                </div>
            ) : ''}


            {
                currentState.error ? (

                    <div className={commonStyle.error}>
                        Get Package Details Request processing unsuccessful
                        <br />
                        {currentState.error}

                    </div>
                ) : ''

            }
        </div>

    );
}
