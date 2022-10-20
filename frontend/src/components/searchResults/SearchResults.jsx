import PropTypes from "prop-types";
import OfferCard from "../../components/offerCard/OfferCard";
import { offerPropType } from "../../offer.proptype";
import style from "./searchResults.module.scss";

const SearchResults = (props) => {
  if (props.offers.length === 0) {
    return <div className={style.noResults}>No results</div>;
  }

  return props.offers.map((offer) => (
    <OfferCard key={offer.id} offer={offer} />
  ));
};

SearchResults.propTypes = {
  offers: PropTypes.arrayOf(offerPropType.isRequired).isRequired,
};

export default SearchResults;
