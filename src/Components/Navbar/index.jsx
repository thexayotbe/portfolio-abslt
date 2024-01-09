import React, { useState } from "react";
import { Wrapper } from "./styled";
import Follower from "../Follower";

const Navbar = () => {
  return (
    <Wrapper>
      <Wrapper.Logo>ABSOLUTE</Wrapper.Logo>
      <Wrapper.Links>
        <Wrapper.Link className="active">Home</Wrapper.Link>
        <Wrapper.Link>About</Wrapper.Link>
        <Wrapper.Link>Service</Wrapper.Link>
        <Wrapper.Link>Portfolio</Wrapper.Link>
        <Wrapper.Link>News</Wrapper.Link>
        <Wrapper.Link>Contact</Wrapper.Link>
      </Wrapper.Links>
      <Wrapper.FooterText>&#169; 2024 Absolute</Wrapper.FooterText>
      <Follower />
    </Wrapper>
  );
};

export default Navbar;
