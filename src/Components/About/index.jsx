import React from "react";
import { Wrapper } from "./style";
import {
  Container,
  MenuButton,
  MenuTitle,
  Text,
  Title,
} from "../Generic/styles";
import { info, skills } from "../../utils";
import { Progress } from "antd";

const About = () => {
  return (
    <Container>
      <Container.Content>
        <MenuButton>About</MenuButton>
        <MenuTitle>About Me</MenuTitle>
        <Wrapper>
          <Wrapper.Img></Wrapper.Img>
          <Wrapper.Info>
            <Title>Mamajonov Xayotbek</Title>
            <Text>Web Developer</Text>
          </Wrapper.Info>
          <Wrapper.Text>
            Hello there! I'm Xayotbek, a passionate Front-End Developer with two
            years of hands-on experience in the dynamic realm of web
            development. Over the past two years, my focus has been on
            translating creative ideas into fully realized platforms. <br />{" "}
            <br /> I take pride in my ability to craft websites that not only
            meet functional requirements but also boast a distinctive,
            contemporary aesthetic. From conceptualization to execution, I
            specialize in bringing projects to life with a unique and
            outstanding visual appeal. My expertise extends beyond just coding –
            I understand the intricacies of web mechanics, enabling me to
            optimize complex integrations.
          </Wrapper.Text>
          <Wrapper.Data>
            {info.map((value) => {
              return (
                <Wrapper.Item>
                  <Wrapper.Title>{value.title}:</Wrapper.Title>
                  <Wrapper.Subtitle>{value.subtitle}</Wrapper.Subtitle>
                </Wrapper.Item>
              );
            })}
          </Wrapper.Data>
          <Wrapper.Button>Download CV</Wrapper.Button>
          <Wrapper.Skills></Wrapper.Skills>
        </Wrapper>
      </Container.Content>
      <Wrapper.Content>
        <Wrapper.Skills>
          <Wrapper.SkillsItem>
            <Wrapper.SkillsTitle>Programming Skills</Wrapper.SkillsTitle>
            {skills.programming.map((value) => {
              return (
                <Wrapper.Skill>
                  <Wrapper.SkInfo>
                    <Wrapper.SkillName>{value.name}</Wrapper.SkillName>
                    <Wrapper.SkillName>{value.percent}%</Wrapper.SkillName>
                  </Wrapper.SkInfo>
                  <Wrapper.Progress percent={value.percent} />
                </Wrapper.Skill>
              );
            })}
          </Wrapper.SkillsItem>{" "}
          <Wrapper.SkillsItem>
            <Wrapper.SkillsTitle>Language Skills</Wrapper.SkillsTitle>
            {skills.languages.map((value) => {
              return (
                <Wrapper.Skill>
                  <Wrapper.SkInfo>
                    <Wrapper.SkillName>{value.name}</Wrapper.SkillName>
                    <Wrapper.SkillName>{value.percent}%</Wrapper.SkillName>
                  </Wrapper.SkInfo>{" "}
                  <Wrapper.Progress percent={value.percent} />
                </Wrapper.Skill>
              );
            })}
          </Wrapper.SkillsItem>
        </Wrapper.Skills>
      </Wrapper.Content>
    </Container>
  );
};

export default About;
