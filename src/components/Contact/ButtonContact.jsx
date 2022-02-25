import React from "react";
import styled from "styled-components";

export const BtnStyle = styled.button`
  display: inline-block;
  line-height: 1.5;
  text-align: center;
  text-decoration: none;
  vertical-align: middle;
  cursor: pointer;
  user-select: none;
  border: 1px solid transparent;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

  color: #fff;
  width: 150px;
  padding: 7px 15px 7px 15px;
  font-size: 20px;
  font-weight: 600;
  border-radius: 25px;
  background-color: #120a8f;

  :focus {
    color: #fff;
    background-color: #0b5ed7;
    border-color: #0a58ca;
    box-shadow: 0 0 0 0.25rem rgb(49 132 253 / 50%);
  }
`;

function ButtonContact() {
  return <BtnStyle>Enviar</BtnStyle>;
}
export { ButtonContact };
