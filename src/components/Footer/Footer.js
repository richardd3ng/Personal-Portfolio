import React from "react";
import {
  AiFillFacebook,
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";

import { SocialIcons } from "../Header/HeaderStyles";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from "./FooterStyles";

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Phone</LinkTitle>
          <LinkItem href="tel:925-973-8168">(925) 973-8168</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:richard.deng@duke.edu">
            richard.deng@duke.edu
          </LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Social</LinkTitle>
          <SocialContainer>
            <SocialIconsContainer>
              <SocialIcons href="https://github.com/richardd3ng">
                <AiFillGithub size="3rem"></AiFillGithub>
              </SocialIcons>
              <SocialIcons href="https://linkedin.com/in/richard-deng1">
                <AiFillLinkedin size="3rem"></AiFillLinkedin>
              </SocialIcons>
              <SocialIcons href="https://instagram.com/richardd3ng">
                <AiFillInstagram size="3rem"></AiFillInstagram>
              </SocialIcons>
              <SocialIcons href="https://facebook.com/richard.deng.338">
                <AiFillFacebook size="3rem"></AiFillFacebook>
              </SocialIcons>
            </SocialIconsContainer>
          </SocialContainer>
        </LinkColumn>
      </LinkList>
    </FooterWrapper>
  );
};

export default Footer;
