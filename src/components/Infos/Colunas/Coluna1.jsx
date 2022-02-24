import React from "react";
import styled from "styled-components";
import { Li } from "./Li"
import { BiTimeFive } from "react-icons/bi";
import { RiBatteryChargeLine } from "react-icons/ri";
import { FiMapPin } from "react-icons/fi";

const Coluna1Style = styled.div`
  width: 50%;

  ul {
      list-style: none;
      text-align: left;
      margin-left: 10px;
  }
`;

 function Coluna1() {
    return (
        <Coluna1Style>
            <ul>
                <Li
                 titulo="CARGA HORÁRIA:"
                 texto="1000h"
                 >
                     <BiTimeFive/>
                </Li>

                <Li
                 titulo="TEMPO DE DURAÇÃO:"
                 texto="Aproximadamente um ano"
                 >
                     <RiBatteryChargeLine/>
                </Li>

                <Li
                 titulo="INÍCIO:"
                 texto="Abril 2022"
                 >
                     <FiMapPin/>
                </Li>
            </ul>
        </Coluna1Style>
    );
  }
  export { Coluna1 };
