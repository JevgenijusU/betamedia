import React from "react";
import Container from "../container/Container";
import style from "./header.module.scss";

const Header = () => {
  return (
    <header className={style.header}>
      <Container>
        <h1>Poilsis</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis
          voluptate aperiam deleniti repellendus veritatis repellat laborum
          tempora libero labore impedit, facere quae accusamus ab temporibus
          quidem doloribus ut blanditiis reiciendis sit nostrum porro.
          Recusandae laborum labore dolor sunt explicabo ad a odio sequi
          voluptatum fuga, iusto aspernatur quasi eos voluptates blanditiis
          excepturi eaque mollitia quod? Explicabo quisquam sit magni commodi.
        </p>
      </Container>
    </header>
  );
};

export default Header;
