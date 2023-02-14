import melonPic from '../photos/justMelon.png';
import { Link } from "react-router-dom";

export default function Navbar () {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
{/* 
        <a className="navbar-brand" href="/">
            <img src={melonPic} alt="melon" width="50"/>
        </a> */}

        <a className="navbar-brand" href="/">Stillwind Farm</a>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">

            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

            <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/csa">CSA</a>
            </li>

            <li className="nav-item">
                <a className="nav-link" href="/marketcard">Market Card</a>
            </li>

            <li className="nav-item">
                <a className="nav-link" href="/about">About</a>
            </li>

            <li className="nav-item">
                <a className="nav-link" href="/contact">Contact Us</a>
            </li>

            <li className="nav-item">
                <a className="nav-link" href="/shop">Shop</a>
            </li>

            {/* <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown
                </a>
                <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><hr className="dropdown-divider"/></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
            </li> */}

            </ul>

        </div>

        </div>
        </nav>
    )
}