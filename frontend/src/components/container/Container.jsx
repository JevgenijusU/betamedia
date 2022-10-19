import style from "./container.module.scss";

export const Container = (props) => (
  <div className={style.root}>{props.children}</div>
);
