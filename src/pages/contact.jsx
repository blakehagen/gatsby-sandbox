import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'gatsby';
import Header from '../components/Header/header';

export default () => (
  <div style={{ color: `teal` }}>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Contact</title>
      <meta name="description" content="Contact Bacon ipsum dolor amet ham hock tenderloin ham biltong sirloin burgdoggen spare ribs pastrami." />
      <link rel="canonical" href="http://mysite.com/contact" />
    </Helmet>
    <Link to="/">Home</Link>
    <br />
    <Link to="/about">About</Link>
    <Header headerText="Contact" />
    <p>Send us a message!</p>
  </div>
)