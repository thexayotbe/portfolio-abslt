import React from "react";
import { Wrapper } from "./style";
import { FaGithub, FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { Container } from "../Generic/styles";

const Home = () => {
  return (
    <Container>
      <Wrapper.Content>
        <Wrapper.Image></Wrapper.Image>
        <Wrapper.Info>
          <Wrapper.Title>Mamajonov Xayotbek</Wrapper.Title>
          <Wrapper.Desc>
            I am a Fronend Developer at heart and create features that are best
            suited for the job at hand.
          </Wrapper.Desc>
          <Wrapper.Links>
            <FaGithub />
            <FaFacebookSquare />
            <FaLinkedin />
            <SiLeetcode />
          </Wrapper.Links>
        </Wrapper.Info>
      </Wrapper.Content>
    </Container>
  );
};

export default Home;
