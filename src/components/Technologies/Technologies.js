import React from "react";
import { DiApple, DiFirebase, DiPython, DiReact, DiZend } from "react-icons/di";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";
import { TechnologiesDesription } from "../../constants/constants";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <SectionTitle main>Technologies</SectionTitle>
    <SectionText>{TechnologiesDesription}</SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            React.js
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            Node and Databases
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiPython size="3rem" />
        <ListContainer>
          <ListTitle>Machine Learning</ListTitle>
          <ListParagraph>
            Experience with ML libraries <br />
            Python Notebooks, and Data <br />
            Pipelines
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiApple size="3rem" />
        <ListContainer>
          <ListTitle>Mobile Development</ListTitle>
          <ListParagraph>
            Experience with app development <br />
            on iOS and Android platforms
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiZend size="3rem" />
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>
            Experience with tools like Figma <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
