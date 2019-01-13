import React from "react"
import { Link } from "gatsby"
import Header from "../components/Header/header"

export default () => (
  <div style={{ color: `teal` }}>
    <Link to="/">Home</Link>
    <br/>
    <Link to="/about">About</Link>
    <Header headerText="Contact" />
    <p>Send us a message!</p>
  </div>
)