import styled, { createGlobalStyle } from "styled-components";
import {
  primaryYellow,
  primaryLightYellow,
  primaryBlack,
} from "../config/colors";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${primaryBlack};
    font-family: "Montserrat", sans-serif;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: black;
  }

  ul {
    list-style: none;
  }

  h1 {
    color: ${primaryYellow};
    font-weight: 500;
    margin-bottom: 25px;
  }

  h2 {
    font-weight: 300;
    font-size: 1.9rem;
  }

  button {
    background: ${primaryLightYellow};
    padding: 8px 16px;
    margin: 10px;
    font-size: 1.1rem;
    border: 1px solid transparent;
    border-radius: 3px;
    text-transform: uppercase;
    color: white;
    font-family: "Montserrat", sans-serif;
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 360px;
  background: white;
  border-radius: 20px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);
  padding: 50px;
  margin: 30px auto;
  text-align: center;
`;
