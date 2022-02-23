import React from "react";
import styled from "styled-components";

const HeaderStyled = styled.div`
  width: 100%;
  height: 500px;
  background-image: linear-gradient(
    to bottom,
    #0b03c2,
    #0020c7,
    #0031ca,
    #003ecd,
    #004acf,
    #004ad0,
    #004bd0,
    #004bd1,
    #003fd0,
    #0031cf,
    #0020cd,
    #0900c9
  );
`;

export default function Header() {
  return <HeaderStyled></HeaderStyled>;
}
