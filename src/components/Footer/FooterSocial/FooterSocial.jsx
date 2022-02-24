import React from "react";
import styled from "styled-components";
import { BsFacebook } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { AiFillYoutube } from "react-icons/ai"
import { GrInstagram } from "react-icons/gr";

export const FooterSocialStyle = styled.div`
        display: flex;
        font-size: 30px;
        color: #fff;
        margin-top: 40px;

        cursor: pointer;

        span {
          margin-right: 10px;
        }

        span:hover {
          color: #b7abee;
        }
`;

function FooterSocial() {
  return (
    <FooterSocialStyle>
            <div className="FooterSocialStyle">
                <span><BsLinkedin /></span>
                <span><BsFacebook /></span>
                <span><AiFillYoutube /></span>
                <span><GrInstagram /></span>
            </div> 
    </FooterSocialStyle>
  );
}

export { FooterSocial };
