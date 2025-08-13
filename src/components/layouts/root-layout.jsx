import React from "react";
import NavbarBasic from "./Navbar";
import { Outlet } from "react-router";

import Footers from "./footer.jsx";

export default function RootLayout() {
  return (
    <>
      <NavbarBasic />
      <Outlet />
      <Footers />
    </>
  );
}
