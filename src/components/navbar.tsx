import { Link } from "react-router-dom";

export default function Navbar () {
    return (
        <div>
             <div>
                <Link to={'/'}>
                    <button>Stillwind Farm</button>
                </Link>
            </div>
            <div>
                <Link to={'/csa'}>
                    <button>CSA</button>
                </Link>
            </div>
            <div>
                <Link to={'/marketcard'}>
                    <button>Market Card</button>
                </Link>
            </div>
            <div>
                <Link to={'/about'}>
                    <button>About</button>
                </Link>
            </div>
        {/* <a> cart </a> */}
        </div>
    )
}