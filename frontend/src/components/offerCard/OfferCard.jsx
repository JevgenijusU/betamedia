import React from "react";
import PropTypes from "prop-types";
import style from "./offerCard.module.scss";
import GrandSpa from "../../images/grand-spa.jpeg";
import Location from "../../images/location.svg";
import Person from "../../images/persons.png";
import Clock from "../../images/clock.png";
import Data from "../../images/data.png";

const OfferCard = (props) => {
  return (
    <div className={style.deal}>
      <div className={style.galleryWrapper}>
        {props.discountMessage && (
          <div className={style.galleryDiscount}>{props.discountMessage}</div>
        )}
        <img className={style.grandSpaImg} src={GrandSpa} alt="Grand Spa" />
      </div>
      <div className={style.infoWrapper}>
        {props.tags && props.tags.length > 0 && (
          <div className={style.tags}>
            <ul>
              {props.tags.map((tag) => (
                <li>{tag}</li>
              ))}
            </ul>
          </div>
        )}
        <div className={style.title}>{props.title}</div>
        <div className={style.subtitle}>{props.subtitle}</div>
        <div className={style.location}>
          <img className={style.locationImg} src={Location} alt="Location" />
          {props.location}
        </div>
        <div className={style.information}>
          <div className={style.priceWrapper}>
            <div className={style.priceText}>Nuo</div>
            <div className={style.price}>{props.price}</div>
            {props.originalPrice && (
              <div className={style.discount}>{props.originalPrice}</div>
            )}
          </div>
          <div className={style.additionalWrapper}>
            <div className={style.person}>
              <img src={Person} alt="Person" />
              {props.person} {props.person > 1 ? "asmenys" : "asmuo"}
            </div>
            <div className={style.night}>
              <img src={Clock} alt="Clock" />
              {props.night} {props.night > 1 ? "nakvynės" : "nakvynė"}
            </div>
            <div className={style.data}>
              <img src={Data} alt="Data" />
              {props.date}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

OfferCard.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string.isRequired),
  originalPrice: PropTypes.string,
  discountMessage: PropTypes.string,
  person: PropTypes.string.isRequired,
  night: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default OfferCard;
