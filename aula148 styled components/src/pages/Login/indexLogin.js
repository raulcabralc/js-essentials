import React from "react";

import { Container } from "../../styles/globalStyles";
import { Title, Paragraph } from "./styledLogin";

export default function Login() {
  return (
    <>
      <Title isBlack={true}>Title</Title>
      <Paragraph>Lorem ipsum dolor sit amet</Paragraph>
      <Container>
        <h1>Container Title</h1>
        <p>Container paragraph with some text</p>
      </Container>
    </>
  );
}
