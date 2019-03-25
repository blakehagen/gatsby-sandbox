import React from "react";
import Header from "../components/Header/header";
import { Link } from 'gatsby';

export default () => (
  <div style={{ color: `teal` }}>
    <Link to="/">Home</Link>
    <br />
    <Link to="/contact">Contact</Link>
    <Header headerText="About Gatsby" />
    <p>Such wow. Very React.</p>
  </div>
)