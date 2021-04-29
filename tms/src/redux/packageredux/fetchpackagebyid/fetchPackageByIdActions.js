
import { fetchPackageById } from "../../../service/PackageService";
import store from "../../bookingredux/store";
import fetchPackageByIdConstants from "./fetchPackageByIdConstants";

function fetchPackageByIdRequest() {

    return ({

        progress: true,
        pack: undefined,
        error: '',
        type: fetchPackageByIdConstants.fetchByIdRequest
    });

}

function fetchPackageByIdSuccess(pack) {

    return ({

        progress: false,
        pack: pack,
        error: '',
        type: fetchPackageByIdConstants.fetchByIdSuccess
    });

}


function fetchPackageByIdFail(error) {

    return ({

        progress: false,
        pack: undefined,
        error: error,
        type: fetchPackageByIdConstants.fetchByIdFail
    });

}

function fetchPackageByIdAction(packageId) {

    return () => {

        store.dispatch(fetchPackageByIdRequest());

        const promise = fetchPackageById(packageId);

        promise.then(response => {

            const pack = response.data;
            store.dispatch(fetchPackageByIdSuccess(pack));
        })
            .catch(error => {

                store.dispatch(fetchPackageByIdFail(error.message));
            })

    }

}

export { fetchPackageByIdAction, fetchPackageByIdFail, fetchPackageByIdSuccess, fetchPackageByIdRequest };