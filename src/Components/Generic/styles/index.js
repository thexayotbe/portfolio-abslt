import styled from "styled-components";

export const Container = styled.div`
  width: calc(100%-350px);
`;
Container.Content = styled.div`
  width: auto;
  margin-left: 350px;
  padding: 100px 150px;
`;
const MenuButton = styled.button`
  display: inline-block;
  background-color: rgba(0, 0, 0, 0.04);
  text-transform: uppercase;
  padding: 8px 14px;
  font-weight: 600;
  font-size: 15px;
  color: #333;
  letter-spacing: 0;
  margin-bottom: 11px;
  border: none;
`;
const MenuTitle = styled.h3`
  font-size: 30px;
  text-transform: uppercase;
  font-weight: 900;
  margin: 10px 0 80px 0;
`;
const Title = styled.h3`
  font-size: 22px;
  font-weight: 600;
`;
const Text = styled.p`
  color: #767676;
  font-size: 15px;
`;
export { MenuButton, MenuTitle, Title, Text };
