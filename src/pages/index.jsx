import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'gatsby';
import Header from '../components/Header/header';

export default () => (
  <div style={{ color: `purple` }}>
    <Helmet>
      <meta charSet="utf-8" />
      <title>My Awesome Title</title>
      <meta name="description" content="TEST PAGE Bacon ipsum dolor amet ham hock tenderloin ham biltong sirloin burgdoggen spare ribs pastrami." />
      <link rel="canonical" href="http://mysite.com/example" />
    </Helmet>
    <Link to="/about">About</Link>
    <br />
    <Link to="/contact/">Contact</Link>
    <Header headerText="Hello Gatsby!" />
    <p>What a world.</p>
    <img src="https://source.unsplash.com/random/400x200" alt="" />
  </div>
);
