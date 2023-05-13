import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

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
          <LinkItem href="mailto:richard.deng@duke.edu">
            <SocialContainer>
              <SocialIconsContainer>
                <SocialIcons href="https://github.com">
                  <AiFillGithub size="3rem"></AiFillGithub>
                </SocialIcons>
                <SocialIcons href="https://linkedin.com">
                  <AiFillLinkedin size="3rem"></AiFillLinkedin>
                </SocialIcons>
                <SocialIcons href="https://linkedin.com">
                  <AiFillInstagram size="3rem"></AiFillInstagram>
                </SocialIcons>
              </SocialIconsContainer>
            </SocialContainer>
          </LinkItem>
        </LinkColumn>
      </LinkList>
    </FooterWrapper>
  );
};

export default Footer;
