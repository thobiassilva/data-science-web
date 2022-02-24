import React from "react";
import { FooterLink } from "../FooterLink/FooterLink";
import { FooterSocial } from "../FooterSocial/FooterSocial";

import { BiCopyright } from "react-icons/bi";
import styled from "styled-components";

export const FooterStyle = styled.footer`
    .FooterStyle {
        background-color: #0b03c2;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .CopyRigth {
        color: #fff;
        margin-bottom: 10px;
    }
`;

function Footer() {
  return (
    <FooterStyle>
       <footer className="FooterStyle">
        <div>
            <FooterSocial />
          </div>
          <div>
            <FooterLink />
          </div>

          <div className="CopyRigth">
            <BiCopyright/>
            Your website 2022. All Rigths Reserved.
          </div>
       </footer>
    </FooterStyle>
  );
}

export { Footer };