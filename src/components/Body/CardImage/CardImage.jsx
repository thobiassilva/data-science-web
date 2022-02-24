import React from "react";
import styled from "styled-components";

const CardImageStyled = styled.div`
  width: 50%;
  height: 500px;
  display: flex;
`;

export default function CardImage(props) {
  return <CardImageStyled>
    <img src={props.imagem} alt="" />
  </CardImageStyled>;
}
