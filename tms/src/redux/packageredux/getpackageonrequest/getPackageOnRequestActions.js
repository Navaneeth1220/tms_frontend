
import { fetchPackageById } from "../../../service/PackageService";
import store from "../store";
import getPackageOnRequestConstants from "./getPackageOnRequestConstants";

function getPackageOnRequestSuccess(pack) {

    return ({

        type: getPackageOnRequestConstants.success,
        pack: pack,
        error: ''
    });

}


function getPackageOnRequestFail(error) {

    return ({

        type: getPackageOnRequestConstants.fail,
        pack: undefined,
        error: error
    });

}

function getPackageOnRequestAction(packageId) {

    return () => {

        const promise = fetchPackageById(packageId);
        promise.then((response) => {

            const pack = response.data;
            const actionObj = getPackageOnRequestSuccess(pack);
            store.dispatch(actionObj);

        }).catch(error => {

            const actionObj = getPackageOnRequestFail(error.message);
            store.dispatch(actionObj);
        })
    }

}


export { getPackageOnRequestAction, getPackageOnRequestFail, getPackageOnRequestSuccess };