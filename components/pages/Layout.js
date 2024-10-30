// components/Layout.js
import React from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";
import SecondNavbar from "../SecondNavbar";

const Layout = ({ children, count }) => {
  return (
    <>
      <Navbar count={count} />
      <SecondNavbar />
      <main>{children}</main>{" "}
      {/* Wrap children in a main tag for better semantics */}
      <Footer />
    </>
  );
};

export default Layout;
