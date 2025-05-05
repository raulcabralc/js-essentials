import styled, { createGlobalStyle } from "styled-components";
import {
  primaryYellow,
  primaryLightYellow,
  primaryLighterYellow,
  primaryBlack,
  primaryLightBlack,
  primaryLighterBlack,
  primarySuccess,
  primaryError,
  primaryInfo,
  primaryWarning,
} from "../config/colors";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${primaryBlack};
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  h1 {
    color: ${primaryYellow};
  }

  button {
    background: ${primaryLightYellow};
    padding: 10px 20px;
    margin: 10px;
    font-size: 1.3rem;
    border: 1px solid transparent;
    border-radius: 3px;
    position: relative;
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
