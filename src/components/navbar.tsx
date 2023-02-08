import { Link } from "react-router-dom";

export default function Navbar () {
    return (
        <nav className='navbar bg-body-tertiary'>
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
            <div>
                <Link to={'/contact'}>
                    <button>Contact Us</button>
                </Link>
            </div>
            <div>
                <Link to={'/shop'}>
                    <button>shop</button>
                </Link>
            </div>
        {/* <a> cart </a> */}
        </nav>
    )
}