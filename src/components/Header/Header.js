import React from "react";
import {
  AiFillFacebook,
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import { DiCssdeck } from "react-icons/di";
import { MdCatchingPokemon } from "react-icons/md";

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
  Span,
} from "./HeaderStyles";

const Header = () => (
  <Container>
    <Div1>
      <a
        style={{
          display: "flex",
          alignItems: "center",
          color: "white",
          marginBottom: "20px",
        }}
      >
        <MdCatchingPokemon
          size="2rem"
          style={{ transform: "rotate(180deg)" }}
        />
        <Span>Portfolio</Span>
      </a>
    </Div1>
    <Div2>
      <li>
        <NavLink href="#projects">Projects</NavLink>
      </li>
      <li>
        <NavLink href="#tech">Technologies</NavLink>
      </li>
      <li>
        <NavLink href="#about">About</NavLink>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com">
        <AiFillGithub size="3rem"></AiFillGithub>
      </SocialIcons>
      <SocialIcons href="www.linkedin.com/in/richard-deng1">
        <AiFillLinkedin size="3rem"></AiFillLinkedin>
      </SocialIcons>
      <SocialIcons href="https://www.instagram.com/richardd3ng">
        <AiFillInstagram size="3rem"></AiFillInstagram>
      </SocialIcons>
      <SocialIcons href="https://www.facebook.com/richard.deng.338">
        <AiFillFacebook size="3rem"></AiFillFacebook>
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
