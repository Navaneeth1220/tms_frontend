import DisplayPackageDetails from "./DisplayPackageDetails";

export default function DisplayPackageList({ packs }) {

    return (

        <div>
            <ul>
                {packs.map((pack) => <li key={pack.packageId}><DisplayPackageDetails pack={pack} /></li>)}
            </ul>
        </div>
    );



}