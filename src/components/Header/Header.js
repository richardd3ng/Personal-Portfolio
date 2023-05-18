import React, { useContext } from "react";
import {
  AiFillFacebook,
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import { MdCatchingPokemon } from "react-icons/md";
import {
  Container,
  Div1,
  Div2,
  Div3,
  Div4,
  NavLink,
  SocialIcons,
  Span,
  SwitchInput,
  Switch,
} from "./HeaderStyles";
import { ThemeContext } from "../../styles/theme";

const ThemeSwitch = () => {
  const { isDarkTheme, setIsDarkTheme } = useContext(ThemeContext);

  const handleToggle = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <label>
      <SwitchInput
        checked={isDarkTheme}
        type="checkbox"
        onChange={handleToggle}
      />
      <Switch />
    </label>
  );
};

const Header = () => {
  return (
    <Container>
      <Div1>
        <MdCatchingPokemon
          size="2rem"
          style={{ transform: "rotate(180deg)", margin: "0.5rem" }}
        />
        <Span>Portfolio</Span>
      </Div1>
      <Div2>
        <li>
          <NavLink href="#projects">Projects</NavLink>
        </li>
        <li>
          <NavLink href="#tech">Technologies</NavLink>
        </li>
        <li>
          <NavLink href="#about">About Me</NavLink>
        </li>
      </Div2>
      <Div3>
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
      </Div3>
      <Div4>
        <svg
          viewBox="0 0 24 24"
          width="24"
          height="24"
          style={{ margin: "5px" }}
        >
          <path
            fill="currentColor"
            d="M12,9c1.65,0,3,1.35,3,3s-1.35,3-3,3s-3-1.35-3-3S10.35,9,12,9 M12,7c-2.76,0-5,2.24-5,5s2.24,5,5,5s5-2.24,5-5 S14.76,7,12,7L12,7z M2,13l2,0c0.55,0,1-0.45,1-1s-0.45-1-1-1l-2,0c-0.55,0-1,0.45-1,1S1.45,13,2,13z M20,13l2,0c0.55,0,1-0.45,1-1 s-0.45-1-1-1l-2,0c-0.55,0-1,0.45-1,1S19.45,13,20,13z M11,2v2c0,0.55,0.45,1,1,1s1-0.45,1-1V2c0-0.55-0.45-1-1-1S11,1.45,11,2z M11,20v2c0,0.55,0.45,1,1,1s1-0.45,1-1v-2c0-0.55-0.45-1-1-1C11.45,19,11,19.45,11,20z M5.99,4.58c-0.39-0.39-1.03-0.39-1.41,0 c-0.39,0.39-0.39,1.03,0,1.41l1.06,1.06c0.39,0.39,1.03,0.39,1.41,0s0.39-1.03,0-1.41L5.99,4.58z M18.36,16.95 c-0.39-0.39-1.03-0.39-1.41,0c-0.39,0.39-0.39,1.03,0,1.41l1.06,1.06c0.39,0.39,1.03,0.39,1.41,0c0.39-0.39,0.39-1.03,0-1.41 L18.36,16.95z M19.42,5.99c0.39-0.39,0.39-1.03,0-1.41c-0.39-0.39-1.03-0.39-1.41,0l-1.06,1.06c-0.39,0.39-0.39,1.03,0,1.41 s1.03,0.39,1.41,0L19.42,5.99z M7.05,18.36c0.39-0.39,0.39-1.03,0-1.41c-0.39-0.39-1.03-0.39-1.41,0l-1.06,1.06 c-0.39,0.39-0.39,1.03,0,1.41s1.03,0.39,1.41,0L7.05,18.36z"
          ></path>
        </svg>
        <ThemeSwitch />
        <svg
          viewBox="0 0 24 24"
          width="24"
          height="24"
          style={{ margin: "5px" }}
        >
          <path
            fill="currentColor"
            d="M9.37,5.51C9.19,6.15,9.1,6.82,9.1,7.5c0,4.08,3.32,7.4,7.4,7.4c0.68,0,1.35-0.09,1.99-0.27C17.45,17.19,14.93,19,12,19 c-3.86,0-7-3.14-7-7C5,9.07,6.81,6.55,9.37,5.51z M12,3c-4.97,0-9,4.03-9,9s4.03,9,9,9s9-4.03,9-9c0-0.46-0.04-0.92-0.1-1.36 c-0.98,1.37-2.58,2.26-4.4,2.26c-2.98,0-5.4-2.42-5.4-5.4c0-1.81,0.89-3.42,2.26-4.4C12.92,3.04,12.46,3,12,3L12,3z"
          ></path>
        </svg>
      </Div4>
    </Container>
  );
};

export default Header;
