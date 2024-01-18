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
const fadeIn = keyframes`
 from { opacity: 0; transform: translateX(-30px); }
 to { opacity: 1; transform: translateX(10px); }
`;
const bg = keyframes`
    from {
        width: 00%;
    }
    to{
        width: 100%
    }
`;
// Wrapper.Button = styled.button`
//   margin-top: 20px;
//   border: none;
//   background-color: transparent;
//   font-size: 14px;
//   position: relative;
//   width: 30px;
//   height: 1px;
//   background-color: #222;
//   animation: ${({ hover }) => (hover ? bg : "")};
//   animation-duration: 0.3s;

//   &::before {
//     content: "Read More";
//     width: 100px;
//     position: absolute;
//     top: -8px;
//     opacity: ${({ hover }) => (hover ? 1 : 0)};
//     animation: ${({ hover }) => (hover ? fadeIn : "")};
//     animation-duration: 0.3s;
//   }
// `;

Wrapper.Button = styled.button`
  margin-top: 20px;
  border: none;
  background-color: transparent;
  font-size: 14px;
  position: relative;
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
