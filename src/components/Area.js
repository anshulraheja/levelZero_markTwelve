import React from "react";
import {Link} from 'react-router-dom';

const Area = () => {
  return (
    <div className="box">
      <Link to="/" className="backButton">ᐊ BACK </Link>
      <h2>Calculate Area</h2>
      <p>Select an option below as per the data you have for a triangle</p>
      <div className="areaBox">
        <Link className="areaType" to="/areaBH">Base and Height</Link>
        <Link className="areaType" to="/area3S">Length of 3 sides</Link>
        <Link className="areaType" to="/area2SA">Length of 2 sides and angle</Link>
      </div>
    </div>
  );
};

export default Area;
