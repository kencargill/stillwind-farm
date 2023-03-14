import { Link } from "react-router-dom";
import cloud from "../styles/photos/cloud.png"

export default function Footer () {
    return(
        <div className="container-fluid d-flex flex-row-reverse bg-f justify-content-start ms-0">
            <div className=" position-sticky bottom-0 col-12 col-md-6">
                <form>
                    <div className="row justify-content-end mt-2 text-end">
                        <img src={cloud} className="col-2 object-fit-scale" height="50"/>
                        <img src={cloud} className="col-2 object-fit-scale" height="25"/>
                        <img src={cloud} className="col-2 object-fit-scale" height="50"/>
                        <img src={cloud} className="col-2 object-fit-scale" height="25"/>
                        <label htmlFor="email" className="form-label col mt-2 text-success">want our newsletter?</label>
                    </div>
                    <div className="row justify-content-end mb-2 d-flex">
                        <input className="col form-control" id="email" type="email" placeholder="enter your email" />
                        <button type="button" className="col-md-3 btn btn-success">stay in the loop</button>
                    </div>

                </form>
                    </div>

        </div>
    )
}