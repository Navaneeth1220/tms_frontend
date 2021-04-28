
import { Link } from 'react-router-dom';

export default function DisplayPackageList({ packs }) {

    console.log("inside Display Package List", packs);

    return (

        <div>

            <ol>

                {
                    packs.map((pack) => <li key={pack.packageId}>

                        <Link to={`/packagedetails/${pack.packageId}`} >
                            <span>{pack.packageId} {pack.packageName} </span>

                        </Link>

                    </li>)
                }
            </ol>


        </div>

    )

}