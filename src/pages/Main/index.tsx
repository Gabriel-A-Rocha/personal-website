import React from "react";
import { Container, Header } from "./styles";

import avatar from "../../assets/avatar.jpg";

const Main: React.FC = () => {
  return (
    <Container>
      <Header>
        <img src={avatar} alt="Gabriel Altair Rocha" />
        <h1>Gabriel Altair Rocha</h1>

        <h3>Full Stack Developer</h3>
        <p>HTML, CSS, JavaScript, TypeScript, React.js, Node.js</p>
      </Header>
    </Container>
  );
};

export { Main };
