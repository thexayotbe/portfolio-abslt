import styled from "styled-components";

export const Wrapper = styled.div``;
Wrapper.Content = styled.div``;
Wrapper.Img = styled.div`
  width: 100%;
  height: 500px;
  background-color: #222;
  margin-bottom: 30px;
`;
Wrapper.Info = styled.div`
  height: 90px;
  line-height: 1.7;
`;

Wrapper.Text = styled.p`
  color: #767676;
  font-size: 15px;
  line-height: 1.7;
  border-top: 1px solid #dfdede;
  border-bottom: 1px solid #dfdede;
  padding: 30px 0;
  text-align: justify;
`;

Wrapper.Data = styled.div`
  width: 100%;
  height: 340px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex-wrap: wrap;
  padding: 70px 0;
  column-gap: 100px;
  border-bottom: 1px solid #dfdede;
`;

Wrapper.Item = styled.div`
  flex: 1;
  height: 50px;
  display: flex;
`;
Wrapper.Title = styled.h3`
  min-width: 100px;
  float: left;
  margin-right: 10px;
  font-weight: 700;
  color: #000;
  font-size: 15px;
`;
Wrapper.Subtitle = styled.p`
  margin-right: 10px;
  color: #767676;
  font-size: 15px;
`;

Wrapper.Button = styled.button`
  cursor: pointer;
  color: #fff;
  display: inline-block;
  background-color: #000;
  width: 170px;
  height: 50px;
  margin: 40px 0;
`;
