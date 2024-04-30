import React from "react";

import {
    BlogCard,
    CardInfo,
    ExternalLinks,
    GridContainer,
    HeaderThree,
    Hr,
    Tag,
    TagList,
    TitleContent,
    UtilityList,
    Img,
} from "./ProjectsStyles";
import {
    Section,
    SectionDivider,
    SectionTitle,
} from "../../styles/GlobalComponents";
import { projects } from "../../constants";

const Projects = () => (
    <Section nopadding id="projects">
        <SectionDivider />
        <SectionTitle main>Projects</SectionTitle>
        <GridContainer>
            {projects.map(
                ({ id, image, title, description, tags, source, visit }) => (
                    <BlogCard key={id}>
                        <TitleContent>
                            <HeaderThree title>{title}</HeaderThree>
                            <Hr />
                        </TitleContent>
                        <Img src={image} />
                        <Hr />
                        <CardInfo>{description}</CardInfo>
                        <Hr />
                        <TitleContent>Stack</TitleContent>
                        <TagList>
                            {tags.map((tag, i) => (
                                <Tag key={i}>{tag}</Tag>
                            ))}
                        </TagList>
                        <UtilityList>
                            <ExternalLinks href={source}>Code</ExternalLinks>
                            <ExternalLinks href={visit}>
                                More Info
                            </ExternalLinks>
                        </UtilityList>
                    </BlogCard>
                )
            )}
        </GridContainer>
    </Section>
);

export default Projects;
