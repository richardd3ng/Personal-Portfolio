import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./ProfileStyles";
import { ProfileDescription } from "../../constants/constants";

const Profile = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello! <br />
        I'm Richard
      </SectionTitle>
      <SectionText>{ProfileDescription}</SectionText>
      <a href="https://drive.google.com/file/d/1Ui3nj5C7zPRfKh6QI2XuyQHI721m3KJA/view?usp=sharing">
        <Button>Full Resume</Button>
      </a>
    </LeftSection>
  </Section>
);

export default Profile;
