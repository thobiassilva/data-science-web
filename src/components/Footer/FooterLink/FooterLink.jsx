import React from "react";
import styled from "styled-components";

export const FooterLinkStyle = styled.div`
  margin: 50px 0;

  a {
    text-decoration: none;
    font-size: 20px;
    color: #fff;
    cursor: pointer;
    transition: 0.3s;
    margin-right: 40px;
  }

  a:hover {
    color: #b7abee;
  }
`;

function FooterLink() {
  return (
    <FooterLinkStyle>
      <div className="FooterLink">
        <a href="about">About</a>
        <a href="contract">Contract</a>
        <a href="terms">Terms Of Use</a>
        <a href="policy">Privacy Policy</a>
      </div>
    </FooterLinkStyle>
  );
}

export { FooterLink };
