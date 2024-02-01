import styled, { keyframes } from "styled-components";

export const Wrapper = styled.div``;
Wrapper.Services = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 25px;
`;
Wrapper.ServiceItem = styled.div`
  width: 270px;
  height: 340px;
  background-color: #fff;
  padding: 40px 30px;
  cursor: pointer;
  position: relative;
`;
Wrapper.ItemNumber = styled.div`
  width: 60px;
  height: 60px;
  background-color: #f7f6f6;
  border-radius: 50%;
  text-align: center;
  padding-top: 20px;
  font-weight: 700;
`;
Wrapper.ItemTitle = styled.h3`
  font-size: 18px;
  margin: 15px 0;
`;
Wrapper.ItemDesc = styled.p`
  font-size: 13.5px;
  color: #777677;
  line-height: 1.9;
`;

Wrapper.Button = styled.button`
  margin-top: 20px;
  border: none;
  background-color: transparent;
  font-size: 14px;
  position: relative;
  cursor: pointer;
  &::after {
    content: "";
    width: 20%;
    height: 1px;
    position: absolute;
    top: 10px;
    right: -20px;
    background-color: #222;
  }
`;

Wrapper.Facts = styled.div`
  width: 100%;
  height: 400px;
  padding: 100px 0;
`;
Wrapper.FunTitle = styled.div`
  font-size: 21px;
  font-weight: 700;
  margin-bottom: 50px;
`;
Wrapper.FactItems = styled.div`
  display: flex;
  justify-content: space-between;
`;
Wrapper.FactItem = styled.div`
  width: 270px;
  height: 140px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
Wrapper.FactTitle = styled.div`
  font-weight: 600;
  font-size: 20px;
  margin-bottom: 10px;
`;
Wrapper.FactText = styled.div`
  font-size: 15px;
  color: #767676;
  font-weight: normal;
`;
