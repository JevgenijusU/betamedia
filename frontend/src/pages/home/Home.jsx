import React, { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import OfferCard from "../../components/offerCard/OfferCard";
import SearchCatalog from "../../components/searchCatalog/SearchCatalog";
import { Container } from "../../components/container/Container";
import style from "./home.module.scss";

const getOffers = () =>
  fetch("https://api.jsonbin.io/v3/b/634d980165b57a31e6999ad3", {
    headers: {
      "X-Master-key":
        "$2b$10$z6E4uXVr6D/ahF2GnKGLY.UZh4bJlPVBmIxqwEvFzifUW9MDbVvTG",
      "Content-Type": "application/json",
    },
  });

const Home = () => {
  const [offersStatus, setOffersStatus] = useState("loading");
  const [offers, setOffers] = useState([]);
  const [selectedCities, setSelectedCities] = useState([]);
  const [selectedNights, setSelectedNights] = useState([]);
  const [selectedPersons, setSelectedPersons] = useState([]);

  const toggleCity = (selectedCity) => {
    setSelectedCities((currentlySelectedCities) => {
      if (currentlySelectedCities.includes(selectedCity)) {
        return currentlySelectedCities.filter((city) => city !== selectedCity);
      }

      return [...currentlySelectedCities, selectedCity];
    });
  };

  const toggleNight = (selectedNight) => {
    setSelectedNights((currentlySelectedNights) => {
      if (currentlySelectedNights.includes(selectedNight)) {
        return currentlySelectedNights.filter(
          (night) => night !== selectedNight
        );
      }

      return [...currentlySelectedNights, selectedNight];
    });
  };

  const togglePerson = (selectedPerson) => {
    setSelectedPersons((currentlySelectedPersons) => {
      if (currentlySelectedPersons.includes(selectedPerson)) {
        return currentlySelectedPersons.filter(
          (person) => person !== selectedPerson
        );
      }

      return [...currentlySelectedPersons, selectedPerson];
    });
  };

  const filteredOffers = offers.filter((offer) => {
    const matchesCities =
      selectedCities.length > 0
        ? selectedCities.includes(offer.location)
        : true;

    const matchesNights =
      selectedNights.length > 0 ? selectedNights.includes(offer.night) : true;

    const matchesPersons =
      selectedPersons.length > 0
        ? selectedPersons.includes(offer.person)
        : true;

    return matchesCities && matchesNights && matchesPersons;
  });

  useEffect(() => {
    const loadOffers = async () => {
      try {
        const offers = await getOffers();
        const data = await offers.json();

        setOffers(data.record.offers);
        setOffersStatus("loaded");
      } catch (e) {
        setOffersStatus("error");
        console.warn(e);
      }
    };

    loadOffers();
  }, []);

  return (
    <section className={style.promo}>
      <Header />
      <Container>
        <div className={style.wrapper}>
          <div className={style.search}>
            <SearchCatalog
              selectedCities={selectedCities}
              toggleCity={toggleCity}
              selectedNights={selectedNights}
              toggleNight={toggleNight}
              selectedPersons={selectedPersons}
              togglePerson={togglePerson}
            />
          </div>
          <div className={style.cards}>
            {offersStatus === "loading" && "loading"}
            {offersStatus === "error" && "error"}
            {offersStatus === "loaded" &&
              filteredOffers.map((offer) => (
                <OfferCard
                  key={offer.id}
                  title={offer.title}
                  subtitle={offer.subtitle}
                  location={offer.location}
                  price={offer.price}
                  tags={offer.tags}
                  originalPrice={offer.originalPrice}
                  discountMessage={offer.discountMessage}
                  person={offer.person}
                  night={offer.night}
                  date={offer.date}
                />
              ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Home;
