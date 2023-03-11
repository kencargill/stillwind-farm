import { Link } from "react-router-dom";

export default function Footer () {
    return(
        <div className="container-fluid d-flex flex-row-reverse">
            <div className="mx-auto z-3 position-sticky bottom-0">
                        <Link to={'/contact'}>
                                <button type="button" className="btn btn-success m-2">stay in the loop</button>
                        </Link>
                    </div>

        </div>
    )
}