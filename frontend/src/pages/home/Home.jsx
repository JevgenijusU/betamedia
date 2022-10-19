import React, { useEffect, useState } from 'react';
import Header from '../../components/header/Header';
import OfferCard from '../../components/offerCard/OfferCard';
import SearchCatalog from '../../components/searchCatalog/SearchCatalog';
import { Container } from '../../components/container/Container';
import style from './home.module.scss';

const getOffers = () =>
  fetch('https://api.jsonbin.io/v3/b/634d980165b57a31e6999ad3', {
    headers: {
      'X-Master-key':
        '$2b$10$z6E4uXVr6D/ahF2GnKGLY.UZh4bJlPVBmIxqwEvFzifUW9MDbVvTG',
      'Content-Type': 'application/json',
    },
  });

const Home = () => {
  const [offersStatus, setOffersStatus] = useState('loading');
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    const loadOffers = async () => {
      try {
        const offers = await getOffers();
        const data = await offers.json();

        setOffers(data.record.offers);
        setOffersStatus('loaded');
      } catch (e) {
        setOffersStatus('error');
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
            <SearchCatalog/>
          </div>
          <div className={style.cards}>
            {offersStatus === 'loading' && 'loading'}
            {offersStatus === 'error' && 'error'}
            {offersStatus === 'loaded' &&
              offers.map((offer) => (
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
                  data={offer.data}
                />
              ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Home;
