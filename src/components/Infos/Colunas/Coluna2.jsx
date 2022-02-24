import React from "react";
import styled from "styled-components";
import { Li } from "./Li"
import { ImPlay2 } from "react-icons/im";
import { HiLightBulb } from "react-icons/hi";

const Coluna2Style = styled.div`
  width: 50%;

  ul {
      list-style: none;
      text-align: left;
      margin-left: 10px;
  }
`;

 function Coluna2() {
    return (
        <Coluna2Style>
            <ul>
                <Li
                 titulo="AULAS AO VIVO:"
                 texto="Google meet"
                 >
                     <ImPlay2/>
                </Li>
            </ul>
            <ul>
                <Li
                 titulo="DEDICAÇÃO MÉDIA:"
                 texto="20 horas semanais"
                 >
                     <HiLightBulb/>
                </Li>
            </ul>
        </Coluna2Style>
    );
  }
  export { Coluna2 };
