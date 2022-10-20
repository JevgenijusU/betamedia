import React from "react";
import style from "./offerCard.module.scss";
import GrandSpa from "../../images/grand-spa.jpeg";
import Location from "../../images/location.svg";
import Person from "../../images/persons.png";
import Clock from "../../images/clock.png";
import Data from "../../images/data.png";
import { offerPropType } from "../../offer.proptype";

const OfferCard = ({ offer }) => {
  return (
    <div className={style.deal}>
      <div className={style.galleryWrapper}>
        {offer.discountMessage && (
          <div className={style.galleryDiscount}>{offer.discountMessage}</div>
        )}
        <img className={style.grandSpaImg} src={GrandSpa} alt="Grand Spa" />
      </div>
      <div className={style.infoWrapper}>
        {offer.tags && offer.tags.length > 0 && (
          <div className={style.tags}>
            <ul>
              {offer.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          </div>
        )}
        <div className={style.title}>{offer.title}</div>
        <div className={style.subtitle}>{offer.subtitle}</div>
        <div className={style.location}>
          <img className={style.locationImg} src={Location} alt="Location" />
          {offer.location}
        </div>
        <div className={style.information}>
          <div className={style.priceWrapper}>
            <div className={style.priceText}>Nuo</div>
            <div className={style.price}>{offer.price} €</div>
            {offer.originalPrice && (
              <div className={style.discount}>{offer.originalPrice} €</div>
            )}
          </div>
          <div className={style.additionalWrapper}>
            <div className={style.person}>
              <img src={Person} alt="Person" />
              {offer.person} {offer.person > 1 ? "asmenys" : "asmuo"}
            </div>
            <div className={style.night}>
              <img src={Clock} alt="Clock" />
              {offer.night} {offer.night > 1 ? "nakvynės" : "nakvynė"}
            </div>
            <div className={style.data}>
              <img src={Data} alt="Data" />
              {offer.date}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

OfferCard.propTypes = {
  offer: offerPropType.isRequired,
};

export default OfferCard;
