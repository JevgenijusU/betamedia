import PropTypes from "prop-types";
import style from "./container.module.scss";

const Container = (props) => <div className={style.root}>{props.children}</div>;

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
