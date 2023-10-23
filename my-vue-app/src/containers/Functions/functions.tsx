import React from "react";
import "./functions.scss";

export default function Header() {
    return (
        <section className="functions">
            <div className="functions__container">
                <div className="functions__text-center">
                    <span className="label">Wszystko czego potrzebujesz</span>
                    <h2 className="heading heading--2">Fajne funkcje <br /> Payomatic</h2>
                </div>
                
                <div className="functions__grid">
                    <div className="functions__grid--item">
                        <img src="./function-1.png" />
                        <h3 className="heading heading--3">Konto walutowe</h3>
                        <p>Czy podróżujesz, czy robisz zakupy za granicą, masz 30 różnych walut do swojej dyspozycji.</p>
                    </div>
                    <div className="functions__grid--item">
                        <img src="./function-2.png" />
                        <h3 className="heading heading--3">Karta Payomatic</h3>
                        <p>Korzystaj z karty Payomatic®, aby cieszyć się pełnym potencjałem swoich Zenefitów.</p>
                    </div>
                    <div className="functions__grid--item">
                        <img src="./function-3.png" />
                        <h3 className="heading heading--3">Transfer środków</h3>
                        <p>Niezależnie od tego, czy doładowujesz konto, czy wysyłasz pieniądze znajomemu.</p>
                    </div>
                    <div className="functions__grid--item">
                        <img src="./function-4.png" />
                        <h3 className="heading heading--3">Instant cashback</h3>
                        <p>Nie zastanawiaj się kiedy Twoje pieniądze wrócą na konto, Payomatic robi to od razu.</p>
                    </div>
                    <div className="functions__grid--item">
                        <img src="./function-5.png" />
                        <h3 className="heading heading--3">Gpay</h3>
                        <p>Dodaj kartę Payomatic do Google Pay i ciesz się szybkimi oraz bezpiecznymi płatnościami.</p>
                    </div>
                    <div className="functions__grid--item">
                        <img src="./function-6.png" />
                        <h3 className="heading heading--3">Apple Pay</h3>
                        <p>Dodaj kartę Payomatic do Apple Pay i ciesz się szybkimi oraz bezpiecznymi płatnościami.</p>
                    </div>
                </div>
            </div>
        </section >
    );
}