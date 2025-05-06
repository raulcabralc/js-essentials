import styled from "styled-components";

import { primaryYellow } from "../../config/colors";

export const Nav = styled.nav`
  background: ${primaryYellow};
  height: 80px;
  display: flex;
  justify-content: center;
  gap: 30px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.4);

  a {
    height: 100%;
    align-content: center;
    font-size: 1.2em;
    font-weight: 500;
  }
`;
