import React from "react";
import {
  FaEnvelopeSquare,
  FaLinkedin,
  FaFacebookSquare,
  FaWhatsapp,
  FaGithub,
} from "react-icons/fa";
import {
  Container,
  Header,
  Card,
  Footer,
  IconsContainer,
  IconContainer,
} from "./styles";

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

      <Card>
        <h3>Histórico profissional</h3>
      </Card>

      <Card>
        <h3>Interesses</h3>
      </Card>

      <Card>
        <h3>Music and hobbies</h3>
      </Card>

      <Card>
        <h3>Portfólio</h3>
      </Card>

      <Footer>
        <IconsContainer>
          <IconContainer>
            <a href="www.google.com">
              <FaEnvelopeSquare size="48" />
            </a>
          </IconContainer>

          <IconContainer>
            <a href="www.google.com">
              <FaLinkedin size="48" />
            </a>
          </IconContainer>

          <IconContainer>
            <a href="www.google.com">
              <FaFacebookSquare size="48" />
            </a>
          </IconContainer>

          <IconContainer>
            <a href="www.google.com">
              <FaWhatsapp size="48" />
            </a>
          </IconContainer>

          <IconContainer>
            <a href="www.google.com">
              <FaGithub size="48" />
            </a>
          </IconContainer>
        </IconsContainer>
      </Footer>
    </Container>
  );
};

export { Main };
