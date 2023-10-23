import React from "react";
import "./showcase.scss";

export default function Header() {
    return (
        <section className="showcase">
            <div className="showcase__container grid">
                <div className="showcase__content">
                    <span className="showcase__label label">Idź za duchem czasu, poczuj wolność...</span>
                    <h1 className="heading heading--1">Spokój zakupów. Harmonia pieniędzy.</h1>
                    <p>Zobacz, jak możesz robić zakupy i zarządzać swoimi pieniędzmi dzięki Paymatic.</p>
                    <div className="showcase__content-buttons">
                        <a href="#" className="btn">Pobierz aplikację</a>
                        <a href="#" className="btn btn--outline">Dowiedz się więcej</a>
                    </div>
                </div>
                <img src="./showcase-desktop.png" className="showcase__img--desktop" />
                <img src="./showcase-mobile.png" className="showcase__img--mobile" />
            </div>
        </section>
    );
}