import React from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";
import SecondNavbar from "../SecondNavbar";

export default function HomePage(props) {
    return (
        <>
            <Navbar count={props.count} />
            <SecondNavbar />
            {props.children}
            <Footer />
        </>
    )
}