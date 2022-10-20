import PropTypes from "prop-types";

export const offerPropType = PropTypes.shape({
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string.isRequired),
  originalPrice: PropTypes.number,
  discountMessage: PropTypes.string,
  person: PropTypes.string.isRequired,
  night: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
});
