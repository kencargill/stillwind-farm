import { Link } from "react-router-dom";

export default function HomePage () {
    return (
        <div className="vh-100 home-page container-fluid p-auto">
            <div className="row justify-content-end">
                <div className="row col-7 col-md-5 bg-white m-5 p-3 opacity-75">
                    <h2 className="gap-2  mx-auto text-center mt-5">Welcome to Stillwind Farm!</h2>
                    <p className="gap-2 mx-auto text-center">We are a 1/2 acre, low-till, Certified Naturally Grown vegetable farm located in Belding, just outside of the Grand Rapids area. Shop our CSA shares and/or Market Cards for the 2023 season!</p>
                </div>
                    {/* <div className="gap-2 mx-auto z-3 position-sticky top-50">
                        <Link to={'/contact'}>
                                <button type="button" className="btn btn-success m-5">stay in the loop</button>
                        </Link>
                    </div> */}
            </div>
        </div>
    )
}