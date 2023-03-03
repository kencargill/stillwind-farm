import { Link } from "react-router-dom";
import Navbar from "../components/navbar";
import couplePic from "../styles/photos/D0ED969A-25BE-4056-869C-56E2B0DA7AB3_1669226162.webp";

export default function HomePage () {
    return (
        <div className="d-grid home-page container-fluid justify-content-center">
            <div className="row">
                <div className="col ">
                    <img className="img align-middle" width="100%" src={couplePic} alt=""/>
                </div>
                <div className="col">
                    <h2 className="gap-2 col-6 mx-auto">Welcome to Stillwind Farm!</h2>
                    <p className="gap-2 col-10 mx-auto">We are a 1/2 acre, low-till, Certified Naturally Grown vegetable farm located in Belding, just outside of the Grand Rapids area. Shop our CSA shares and/or Market Cards for the 2022 season!</p>
                    <div className="mx-auto">
                        <Link to={'/contact'} >
                                <button type="button" className="btn btn-success">stay in the loop</button>
                        </Link>
                </div>
                </div>
            </div>
        </div>
    )
}