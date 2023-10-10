import "./AboutPage.css";
import React from "react";

const AboutPage = () => (
  <div className="about-page">
    <h1>Objectives</h1>
    <div className="objectives">
      <p>
        Re-implement Part 2 in VueJS or React. Implement any additional feature
        or functionality that you believe would enhance the project.
      </p>
    </div>
    <h1 className="notes">Notes</h1>
    <p>
      I have chosen to use React instead of Vue as i am more familiar with
      React. I have implemented the work using a router, so such that the header
      and footer do not re-render and only the content changes.
    </p>
  </div>
);

export default AboutPage;
