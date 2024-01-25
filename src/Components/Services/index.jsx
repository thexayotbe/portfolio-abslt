import React, { useState } from "react";
import { Container, MenuButton, MenuTitle } from "../Generic/styles";
import { Wrapper } from "./style";
import { funFacts, services } from "../../utils";

const Services = () => {
  const [hover, setHover] = useState(false);
  return (
    <Container>
      <Container.Content>
        <MenuButton>Services</MenuButton>
        <MenuTitle>What I do</MenuTitle>
        <Wrapper.Services>
          {services.map((value) => {
            return (
              <Wrapper.ServiceItem
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}>
                <Wrapper.ItemNumber>{value.id}</Wrapper.ItemNumber>
                <Wrapper.ItemTitle>{value.title}</Wrapper.ItemTitle>
                <Wrapper.ItemDesc>{value.desc}</Wrapper.ItemDesc>
                <Wrapper.Button hover={hover}>Read More</Wrapper.Button>
              </Wrapper.ServiceItem>
            );
          })}
        </Wrapper.Services>
        <Wrapper.Facts>
          <Wrapper.FunTitle>Fun Facts</Wrapper.FunTitle>
          <Wrapper.FactItems>
            {funFacts.map((value) => {
              return (
                <Wrapper.FactItem>
                  <Wrapper.FactTitle>{value.count}</Wrapper.FactTitle>
                  <Wrapper.FactText>{value.title}</Wrapper.FactText>
                </Wrapper.FactItem>
              );
            })}
          </Wrapper.FactItems>
        </Wrapper.Facts>
      </Container.Content>
    </Container>
  );
};

export default Services;
