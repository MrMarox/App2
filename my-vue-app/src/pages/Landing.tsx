import React from "react";
import Header from "../containers/Header/header";
import Showcase from "../containers/Showcase/showcase"
import Functions from "../containers/Functions/functions"

export default function Landing() {
    return (
        <>
            <Header />
            <Showcase />
            <Functions />
        </>
    );
}