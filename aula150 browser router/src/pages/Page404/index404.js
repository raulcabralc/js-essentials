import React from "react";

import GlobalStyles, { Container } from "../../styles/globalStyles";
import { ErrorH1, ErrorH2 } from "./styled404";

export default function Page404() {
  return (
    <>
      <GlobalStyles />
      <Container>
        <ErrorH1>Erro!</ErrorH1>
        <ErrorH2>Essa página não existe.</ErrorH2>
      </Container>
    </>
  );
}
