import brand from '../styles/photos/stliiwind-farm-clay.png'
import { useState } from 'react';
import Instagram from './instaLink';

export default function Navbar () {

        const [isNavCollapsed, setIsNavCollapsed] = useState(true);
      
        const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

    return (
        <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
            {/* <div className='row'> */}
                <a className="navbar-brand" href="/">
                    <img src={brand} alt="melon" width="200"/>
                </a> 

                {/* <a className="navbar-brand ps-3" href="/">Stillwind Farm</a> */}

                <button className="navbar-toggler m-1" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded={isNavCollapsed ? true : false} aria-label="Toggle navigation" onClick={handleNavCollapse}>
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse col-md-10 row`} id="navbarContent">

                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 px-3 align-self-end">

                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        CSA
                        </a>
                        <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="/csa">overview</a></li>
                        <li><a className="dropdown-item" href="/csa">FAQ</a></li>
                        <li><a className="dropdown-item" href="https://www.stillwindfarmllc.com/shop/csa-shares/9?page=1&limit=60&sort_by=category_order&sort_order=asc">sign up</a></li>
                        </ul>
                    </li>

                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        market cards
                        </a>
                        <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="/marketcard">overview</a></li>
                        <li><a className="dropdown-item" href="/cardfaq">FAQ</a></li>
                        <li><a className="dropdown-item" href="https://www.stillwindfarmllc.com/shop/market-card/2?page=1&limit=60&sort_by=category_order&sort_order=asc">sign up</a></li>
                        </ul>
                    </li>

                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        about us
                        </a>
                        <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="/about">our story</a></li>
                        <li><a className="dropdown-item" href="/practices">practices</a></li>
                        <li><a className="dropdown-item" href="https://www.stillwindfarmllc.com/s/shop">offerings</a></li>
                        </ul>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link" href="/contact">Contact Us</a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link" href="https://www.stillwindfarmllc.com/s/shop">Shop</a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link" aria-current="page"><Instagram /></a>
                    </li>

                    </ul>

                </div>
            {/* </div> */}
        </div>
        </nav>
    )
}