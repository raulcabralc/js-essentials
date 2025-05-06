import React from "react";

import { Container } from "../../styles/globalStyles";
import { Title, Paragraph } from "./styledLogin";

export default function Login() {
  return (
    <>
      <Container>
        <Title>Login</Title>
        <Paragraph>Parágrafo lorem ipsum dolor sit amet</Paragraph>
        <button>Enviar</button>
      </Container>
    </>
  );
}
