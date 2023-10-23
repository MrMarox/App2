import React from "react";
import "./navigation.scss";
import "./header.scss";

export default function Header() {
    return (
        <header className="header">
            <div className="header__container">
                <div className="header__flex">
                    <a className="header__logo-wrapper" href="#">
                        <img src="/payomatic-logo.svg" alt="Payomatic" className="header__img" />
                    </a>
                    <nav className="navigation--desktop">
                        <ul>
                            <li>
                                <a className="active" href="#">Strona główna</a>
                            </li>
                            <li>
                                <a href="#">Blog</a>
                            </li>
                            <li>
                                <a href="#">FAQ</a>
                            </li>
                            <li>
                                <a href="#">Kontakt</a>
                            </li>
                        </ul>
                    </nav>
                    <a href='#' className="btn btn--small btn--green">Pobierz aplikację</a>
                </div>

            </div>
        </header >
    );
}