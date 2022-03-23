import React from "react";
import { Link } from "react-router-dom";

const Country = ({ flag, name, population, region, capital }) => {
  return (
    <Link to={`/detail/${name}`} className="country">
      <header className="country__header">
        <img src={flag} alt="Germany" className="country__flag" />
      </header>
      <div className="country__body">
        <h3 className="country__name">{name}</h3>
        <p className="country__detail country__detail--1">
          <strong>Population: </strong>
          {population}
        </p>
        <p className="country__detail country__detail--2">
          <strong>Region: </strong>
          {region}
        </p>
        <p className="country__detail country__detail--3">
          <strong>Capital: </strong>
          {capital}
        </p>
      </div>
    </Link>
  );
};

export default Country;
