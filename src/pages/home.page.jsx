import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Country from "../components/country.component";

const HomePage = () => {
  const [searchText, setSearchText] = useState("");
  const [region, setRegion] = useState("");
  const [toggleSelect, setToggleSelect] = useState(false);
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      const response = await fetch("https://restcountries.com/v3.1/all");

      const data = await response.json();

      setCountries(data);

      setFilteredCountries(data);
    };

    fetchCountries();
  }, []);

  const handleSearch = (text) => {
    setSearchText(text);
    let updatedCountries = [];

    updatedCountries = countries.filter((country) => {
      return country.name.common.toLowerCase().includes(text.toLowerCase());
    });

    setFilteredCountries(updatedCountries);
  };

  const handleSelect = (region) => {
    setToggleSelect(false);
    setRegion(region);

    const updatedCountries = countries.filter(
      (country) => country.region.toLowerCase() == region.toLowerCase()
    );

    setFilteredCountries(updatedCountries);
  };

  const handleToggleSelect = () => {
    setToggleSelect((value) => !value);
  };
  return (
    <React.Fragment>
      <form className="form form--home">
        <div className="form__group">
          <div className="form__input-group">
            <i className="fa-solid fa-magnifying-glass form__icon"></i>
            <input
              type="search"
              className="form__input"
              aria-label="Search for a country"
              placeholder="Search for a country..."
              value={searchText}
              onChange={(e) => handleSearch(e.target.value)}
            />
          </div>
        </div>
        <div className="form__group">
          <div className="form__select">
            <div className="form__selected-box" onClick={handleToggleSelect}>
              <p className="form__selected-text">
                {region ? region : "Filter by Region"}
              </p>
              <i className="fa-solid fa-angle-down form__selected-icon"></i>
            </div>
            <ul
              className={`form__select-list ${
                toggleSelect ? "" : "form__select-list--invisible"
              }`}
            >
              <li
                className="form__select-item"
                onClick={() => handleSelect("Africa")}
              >
                Africa
              </li>
              <li
                className="form__select-item"
                onClick={() => handleSelect("Americas")}
              >
                Americas
              </li>
              <li
                className="form__select-item"
                onClick={() => handleSelect("Asia")}
              >
                Asia
              </li>
              <li
                className="form__select-item"
                onClick={() => handleSelect("Europe")}
              >
                Europe
              </li>
              <li
                className="form__select-item"
                onClick={() => handleSelect("Oceania")}
              >
                Oceania
              </li>
            </ul>
          </div>

          <select name="region" id="region" className="invisible">
            <option value="">Filter by Region</option>
            <option value="africa">Africa</option>
            <option value="america">America</option>
          </select>
        </div>
      </form>

      <section className="countries">
        {filteredCountries
          .filter((country, i) => i < 40)
          .map((country, i) => {
            return (
              <Country
                key={i}
                flag={country.flags.png}
                name={country.name.common}
                population={country.population}
                region={country.region}
                capital={country.capital}
              />
            );
          })}
      </section>
    </React.Fragment>
  );
};

export default HomePage;
