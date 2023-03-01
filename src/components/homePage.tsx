import { Link } from "react-router-dom";

export default function HomePage () {
    return (
        <div className="d-grid container justify-content-center ">
            <h2 className="row gap-2 col-6 mx-auto">Welcome to Stillwind Farm!</h2>
            <p className="row gap-2 col-10 mx-auto">We are a 1/2 acre, low-till, Certified Naturally Grown vegetable farm located in Belding, just outside of the Grand Rapids area. Shop our CSA shares and/or Market Cards for the 2022 season!</p>
            <div className="mx-auto">
                <Link to={'/contact'} >
                        <button type="button" className="btn btn-success">stay in the loop</button>
                </Link>
            </div>
        </div>
    )
}