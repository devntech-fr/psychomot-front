import React, { useEffect } from "react";

/**
 * saasland: header-style5.html
 * @returns {JSX.Element}
 * @constructor
 */
export default function Header({menuButton}) {

    useEffect(() => {
        navbarFixed();
    }, []);

    const navbarFixed = () => {
        const headerArea = document.querySelector('.header_area');
        if (headerArea.length ){
            window.addEventListener('scroll', function () {
                let scroll = window.scrollY;
                if (scroll) {
                    if (!headerArea.classList.contains('navbar_fixed')) headerArea.classList.add('navbar_fixed'); else headerArea.classList.remove('navbar_fixed');
                }
            })
        }
    };

    return (
        <header className="header_area header_area_three header_area_five">
            <nav className="navbar navbar-expand-lg menu_one">
                <a className="navbar-brand" href="#">
                    <img src="/img/logo.png" srcSet="/img/logo2x.png 2x" alt="logo"/>
                </a>
                <a className="btn_get btn_hover mobile_btn ml-auto" href="#get-app">Sign In</a>
                <button className="navbar-toggler collapsed" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="menu_toggle">
                        <span className="hamburger">
                            <span></span>
                            <span></span>
                            <span></span>
                        </span>
                        <span className="hamburger-cross">
                            <span></span>
                            <span></span>
                        </span>
                    </span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto menu">
                        <li className="nav-item">
                            <a href="/" className="nav-link">Accueil</a>
                        </li>
                        <li className="nav-item">
                            <a href="/cabinet" className="nav-link">Le cabinet</a>
                        </li>
                        <li className="nav-item">
                            <a href="/notre-approche" className="nav-link">Notre approche</a>
                        </li>
                        <li className="nav-item">
                            <a href="/contact" className="nav-link">Contact</a>
                        </li>
                    </ul>
                    {
                        menuButton
                        ?? <a className="btn_get btn_get_two btn_hover hidden-sm" href="#get-app">Sign In</a>
                    }
                </div>
            </nav>
        </header>
    )
}