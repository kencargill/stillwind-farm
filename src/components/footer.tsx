import { Link } from "react-router-dom";

export default function Footer () {
    return(
        <div className="container-fluid d-flex flex-row-reverse bg-f">
            <div className="mx-auto mt-3 z-3 position-sticky bottom-0">
                <form>
                    <label htmlFor="email">sign up for our newsletter</label>
                    <input id="email" type="text" placeholder="enter your email" />

                        {/* <Link to={'/contact'}> */}
                                <button type="button" className="btn btn-success m-2">stay in the loop</button>
                        {/* </Link> */}

                </form>
                    </div>

        </div>
    )
}