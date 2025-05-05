import styled from "styled-components";

export const Title = styled.h1`
  background: #ccc;
  color: ${(props) => (props.isBlack ? "black" : "rebeccapurple")};
`;

export const Paragraph = styled.p`
  background: #000;
  color: white;
`;
