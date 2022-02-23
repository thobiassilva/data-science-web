import React from "react";
import styled from "styled-components";

const CardTextStyled = styled.div`
  width: 50%;
  height: 500px;
  /* background-color: #e04c11; */
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  h1 {
    padding: 32px;
    color: #0b03c2;
    text-align: left;
  }
  p {
    padding-left: 32px;
    padding-right: 32px;
    padding-bottom: 32px;
    text-align: justify;
  }
`;

export default function CardText(props) {
  return (
    <CardTextStyled>
      <h1>{props.title}</h1>
      <p>{props.children}</p>
    </CardTextStyled>
  );
}
