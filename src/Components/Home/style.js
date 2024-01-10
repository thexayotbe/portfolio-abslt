import styled from "styled-components";

export const Wrapper = styled.div`
  width: calc(100%-350px);
`;
Wrapper.Content = styled.div`
  width: auto;
  margin-left: 350px;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 80px;
`;
Wrapper.Image = styled.div`
  width: 230px;
  height: 230px;
  background: #222;
  border-radius: 50%;
`;
Wrapper.Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
`;
Wrapper.Title = styled.h3`
  font-size: 40px;
  text-transform: uppercase;
  font-weight: 900;
`;
Wrapper.Desc = styled.p`
  font-size: 18px;
  width: 400px;
  line-height: 1.7;
  color: #767777;
`;

Wrapper.Links = styled.div`
  font-size: 20px;
  display: flex;
  gap: 20px;
`;
