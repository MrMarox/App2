import React from "react";
import "./text.scss";

export default function Test() {
    return (
        <div className="container">
            <button className="btn">Hello Hello Hello</button>
            <button className="btn btn--outline">HelloHello Hello</button>
            <button className="btn btn--green">Hello Hello</button>
            <button className="btn btn--small">Hello</button>
            <button className="btn">Hello</button>
            <h1 className="heading heading--1">test</h1>
            <h2 className="heading heading--2">test</h2>
            <h3 className="heading heading--3">test</h3>
            <span className="label">Witam jestem tu</span>
        </div>
    );
}