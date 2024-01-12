import { Wrapper } from "./styled";
import Follower from "../Follower";
import { Outlet, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <>
      <Wrapper>
        <Wrapper.Logo>ABSOLUTE</Wrapper.Logo>
        <Wrapper.Links>
          <Wrapper.Link className="active" onClick={() => navigate("/")}>
            Home
          </Wrapper.Link>
          <Wrapper.Link onClick={() => navigate("/about")}>About</Wrapper.Link>
          <Wrapper.Link>Service</Wrapper.Link>
          <Wrapper.Link>Portfolio</Wrapper.Link>
          <Wrapper.Link>News</Wrapper.Link>
          <Wrapper.Link>Contact</Wrapper.Link>
        </Wrapper.Links>
        <Wrapper.FooterText>&#169; 2024 Absolute</Wrapper.FooterText>
        {/* <Follower /> */}
      </Wrapper>
      <Outlet />
    </>
  );
};

export default Navbar;
