import React from "react";
import styled from "styled-components";
import capa from "../../assets/img/capa.jpg"

const HeaderStyled = styled.div`
background-color: #4e7fde;
  width: 100%;
  height: 500px;

  img {
    max-width: 100%;
    max-height: 500px;
  }
`;

export default function Header() {
  return <HeaderStyled>
    <img src={capa} alt="" />
  </HeaderStyled>;
}
