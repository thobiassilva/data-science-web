import React from "react";
import styled from "styled-components";
import logo from "../../assets/img/logo.png"

const TopbarStyled = styled.div`
  width: 100%;
  height: 100px;
  background-color: #0b03c2;
  display: flex;
  flex-direction: row;
`;

const LogoStyled = styled.div`
  width: 50%;
  height: 100px;
  display: flex;
`;

const NavbarStyled = styled.div`
  width: 50%;
  height: 100px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  a {
    text-decoration: none;
  }
  span:hover {
    color: #b6b6b6;
  }
  span {
    color: white;
    font-size: 22px;
  }
`;

export default function Topbar() {
  return (
    <TopbarStyled>
      <LogoStyled>
        <img src={logo} alt="" />
      </LogoStyled>
      <NavbarStyled>
        <a href="#sobre">
          <span>Sobre</span>
        </a>
        <a href="#descricao">
          <span>Descrição</span>
        </a>
        <a href="#duvidas">
          <span>Duvidas</span>
        </a>
        <a href="#contato">
          <span>Contato</span>
        </a>
      </NavbarStyled>
    </TopbarStyled>
  );
}
