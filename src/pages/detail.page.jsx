import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

const DetailPage = () => {
  const [country, setCountry] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const params = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    const fetchCountryByName = async () => {
      try {
        const response = await fetch(
          `https://restcountries.com/v3.1/name/${params.name}`
        );

        const data = await response.json();

        console.log(data[0]);

        setCountry(data[0]);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCountryByName();
  }, []);

  return (
    <React.Fragment>
      <Link to="/" className="btn">
        <i className="fa-solid fa-arrow-left btn__icon"></i>
        Back
      </Link>

      {isLoading ? null : (
        <div className="country-box">
          <img
            src={country.flags.svg}
            alt={`${params.name} flag`}
            className="country-box__flag"
          />
          <div className="country-box__info">
            <h2 className="country-box__name">{country.name.common}</h2>

            <div className="country-box__details">
              <div className="country-box__details-box">
                <p className="country-box__details-text">
                  <strong>Native Name: </strong>
                  {country.name.common}
                </p>
                <p className="country-box__details-text">
                  <strong>Population: </strong>
                  {country.population}
                </p>
                <p className="country-box__details-text">
                  <strong>Region: </strong>
                  {country.region}
                </p>
                <p className="country-box__details-text">
                  <strong>Sub Region: </strong>
                  {country.subregion}
                </p>
                <p className="country-box__details-text">
                  <strong>Capital: </strong>
                  {country.capital}
                </p>
              </div>
              <div className="country-box__details-box">
                <p className="country-box__details-text">
                  <strong>Top level Domain: </strong>
                  {country.tld}
                </p>
                <p className="country-box__details-text">
                  <strong>Currencies: </strong>
                  {Object.entries(country.currencies).map(
                    (currency) => currency[0]
                  )}
                </p>
                <p className="country-box__details-text">
                  <strong>Languages: </strong>
                  {Object.entries(country.languages)
                    .map((lang) => lang[1])
                    .join(", ")}
                </p>
              </div>
            </div>
            <div className="country-box__borders">
              <p className="country-box__borders-item">Border Countries: </p>
              <ul className="country-box__borders-list">
                {country.borders
                  ? country.borders.map((border, i) => (
                      <li key={i} className="country-box__borders-item">
                        <button to={`/detail/${border}`} className="btn">
                          {border}
                        </button>
                      </li>
                    ))
                  : "No Borders"}
              </ul>
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default DetailPage;
