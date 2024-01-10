import styled from "styled-components";

export const Wrapper = styled.div`
  width: 350px;
  height: 100vh;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 100px;
  gap: 50px;
  position: fixed;
  top: 0;
  left: 0;
`;
Wrapper.Logo = styled.div`
  font-size: 40px;
  font-weight: 600;
`;
Wrapper.Links = styled.ul`
  list-style: none;
  line-height: 30px;
  font-weight: 500;
  .active {
    color: #222;
  }
`;
Wrapper.Link = styled.li`
  font-size: 18px;
  font-weight: 400;
  color: #767777;
`;
Wrapper.FooterText = styled.div`
  font-size: 18px;
  font-weight: 400;
  color: #767777;
`;
