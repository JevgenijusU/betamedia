import React from "react";
import "./searchCatalog.scss";
import ClockNights from "../../images/clock-nights.svg";
import City from "../../images/city.svg";
import People from "../../images/people.svg";
import Price from "../../images/price.svg";
import Accordion from "react-bootstrap/Accordion";
import ReactSlider from "react-slider";
import { useState } from "react";
import PropTypes, { string } from "prop-types";

const CITY_OPTIONS = [
  {
    value: "Vilnius",
    label: "Vilnius",
  },
  {
    value: "Kaunas",
    label: "Kaunas",
  },
  {
    value: "Druskininkai",
    label: "Druskininkai",
  },
  {
    value: "Birštonas",
    label: "Birštonas",
  },
  {
    value: "Palanga",
    label: "Palanga",
  },
];

const NIGHT_OPTIONS = [
  {
    value: "1",
    label: "1 naktis",
  },
  {
    value: "2",
    label: "2 naktys",
  },
  {
    value: "3",
    label: "3 naktys",
  },
];

const PERSON_OPTIONS = [
  {
    value: "1",
    label: "1 asmuo",
  },
  {
    value: "2",
    label: "2 asmenys",
  },
  {
    value: "3",
    label: "3 asmenys",
  },
  {
    value: "4",
    label: "4 asmenys",
  },
  {
    value: "5",
    label: "5 asmenys",
  },
];

const SearchCatalog = (props) => {
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(500);

  return (
    <Accordion alwaysOpen>
      <Accordion.Item eventKey="0">
        <Accordion.Header>
          <img className="accordionImg" src={City} alt="City" /> Miestas
        </Accordion.Header>
        <Accordion.Body>
          {CITY_OPTIONS.map(({ label, value }) => (
            <div className="inputs" key={value}>
              <input
                type="checkbox"
                id={value}
                checked={props.selectedCities.includes(value)}
                onChange={() => {
                  props.toggleCity(value);
                }}
              />
              <label htmlFor={value}>{label}</label>
            </div>
          ))}
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>
          <img className="accordionImg" src={ClockNights} alt="Clock" />{" "}
          Nakvynės trukmė
        </Accordion.Header>
        <Accordion.Body>
          {NIGHT_OPTIONS.map(({ label, value }) => (
            <div className="inputs" key={value}>
              <input
                type="checkbox"
                id={value}
                checked={props.selectedNights.includes(value)}
                onChange={() => {
                  props.toggleNight(value);
                }}
              />
              <label htmlFor={value}>{label}</label>
            </div>
          ))}
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>
          <img className="accordionImg" src={People} alt="People" />
          Asmenų skaičius
        </Accordion.Header>
        <Accordion.Body>
          {PERSON_OPTIONS.map(({ label, value }) => (
            <div className="inputs" key={value}>
              <input
                type="checkbox"
                id={value}
                checked={props.selectedPersons.includes(value)}
                onChange={() => {
                  props.togglePerson(value);
                }}
              />
              <label htmlFor={value}>{label}</label>
            </div>
          ))}
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>
          <img className="accordionImg" src={Price} alt="Price" />
          Kaina
        </Accordion.Header>
        <Accordion.Body>
          <div className="slider-container">
            <ReactSlider
              defaultValue={[min, max]}
              className="slider"
              trackClassName="tracker"
              min={0}
              max={500}
              minDistance={1}
              step={1}
              widthTracks={true}
              pearling={true}
              renderThumb={(props) => {
                return <div {...props} className="thumb"></div>;
              }}
              renderTrack={(props) => {
                return <div {...props} className="track"></div>;
              }}
              onChange={([min, max]) => {
                setMin(min);
                setMax(max);
              }}
            />
            <div className="values-wrapper">
              <div className="values">
                <span>{min}</span>
              </div>
              <div className="values">
                <span>{max}</span>
              </div>
            </div>
          </div>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

SearchCatalog.propTypes = {
  selectedCities: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  toggleCity: PropTypes.func.isRequired,
  selectedNights: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  toggleNight: PropTypes.func.isRequired,
  selectedPersons: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  togglePerson: PropTypes.func.isRequired,
};

export default SearchCatalog;
