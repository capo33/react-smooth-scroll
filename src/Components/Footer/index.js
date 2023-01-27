import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";

import {
  FooterContainer,
  FooterWrap,
  FooterLinkContianer,
  FooterLinkWrapper,
  FooterLinkItem,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  WebsiteRight,
  SocialLogo,
  SocialIcon,
  SocialIconLink,
} from "./FooterStyle";
function Footer() {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinkContianer>
          <FooterLinkWrapper>
            <FooterLinkItem>
              <FooterLinkTitle> About Us</FooterLinkTitle>
              <FooterLink to="/signin">Sign In</FooterLink>
              <FooterLink to="/signin">How it works</FooterLink>
              <FooterLink to="/signin">Testimonials</FooterLink>
              <FooterLink to="/signin">Careers</FooterLink>
              <FooterLink to="/signin">Investors</FooterLink>
              <FooterLink to="/signin">Terms of Services</FooterLink>
            </FooterLinkItem>
            <FooterLinkItem>
              <FooterLinkTitle> Contact Us</FooterLinkTitle>
              <FooterLink to="/">Contact</FooterLink>
              <FooterLink to="/">Support</FooterLink>
              <FooterLink to="/">Destinations</FooterLink>
              <FooterLink to="/">Sponsorships</FooterLink>
            </FooterLinkItem>
          </FooterLinkWrapper>
          <FooterLinkWrapper>
            <FooterLinkItem>
              <FooterLinkTitle>Vidios</FooterLinkTitle>
              <FooterLink to="/">Submit Video</FooterLink>
              <FooterLink to="/">Ambasadors</FooterLink>
              <FooterLink to="/">Agancy</FooterLink>
              <FooterLink to="/">Influencer</FooterLink>
            </FooterLinkItem>
            <FooterLinkItem>
              <FooterLinkTitle> Social Media</FooterLinkTitle>
              <FooterLink to="/">Instagram</FooterLink>
              <FooterLink to="/">FaceBook</FooterLink>
              <FooterLink to="/">Youtube</FooterLink>
              <FooterLink to="/">Twitter</FooterLink>
            </FooterLinkItem>
          </FooterLinkWrapper>
        </FooterLinkContianer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/">Delta</SocialLogo>
            <WebsiteRight>
              {" "}
              Delta {new Date().getFullYear()} All right reserved.
            </WebsiteRight>
            <SocialIcon>
              <SocialIconLink href="/" aria-labelledby="Facebook">
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href="/" aria-labelledby="Twitter">
                <FaTwitter />
              </SocialIconLink>
              <SocialIconLink href="/" aria-labelledby="Instagram">
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink href="/" aria-labelledby="Youtube">
                <FaYoutube />
              </SocialIconLink>
              <SocialIconLink href="/" aria-labelledby="Linkedin">
                <FaLinkedinIn />
              </SocialIconLink>
            </SocialIcon>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
}

export default Footer;
