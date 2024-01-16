import styled from "styled-components";

export const Wrapper = styled.div``;
Wrapper.Content = styled.div`
  width: auto;
  margin-left: 350px;
  padding: 50px 150px;
  background: #fff;
  height: 600px;
`;
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
Wrapper.Skills = styled.div`
  display: flex;
  gap: 40px;
`;
Wrapper.SkillsItem = styled.div`
  width: 50%;
`;
Wrapper.SkillsTitle = styled.h3`
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 40px;
`;
Wrapper.Skill = styled.div``;
Wrapper.SkInfo = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
`;
Wrapper.SkillName = styled.h3`
  font-size: 15px;
  font-weight: 400;
  margin: 30px 0 10px 0;
`;

Wrapper.Progress = styled.div`
  width: 90%;
  height: 3px;
  background-color: #e9e8e9;
  position: relative;
  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: ${({ percent }) => percent + "%"};
    height: 3px;
    background-color: #222;
  }
`;
Wrapper.CareerInfo = styled.div`
  height: 500px;
  padding: 100px 0;
  display: flex;
  justify-content: space-between;
`;
Wrapper.CareerInfoItem = styled.div`
  width: 48%;
`;
Wrapper.CareerTitle = styled.h3`
  font-size: 21px;
  font-weight: 700;
  margin-bottom: 50px;
`;
Wrapper.CareerItem = styled.div`
  display: flex;
  gap: 80px;
  height: 90px;
  align-items: center;
  border-left: 2px solid #ededed;
  padding-left: 20px;
`;
Wrapper.Year = styled.h4`
  padding: 10px 25px;
  background-color: rgba(0, 0, 0, 0.05);
  border-radius: 50px;
  font-size: 14px;
  color: #767676;
  font-weight: 400;
  position: relative;
  &::before {
    content: "";
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 2px solid #ededed;
    background-color: #fff;
    position: absolute;
    top: 6px;
    left: -32px;
  }
`;
Wrapper.TextItem = styled.div`
  line-height: 1.8;
`;
Wrapper.LabelName = styled.h3`
  font-size: 16px;
  font-weight: 700;
`;
Wrapper.Degree = styled.p`
  font-size: 14px;
  color: #767676;
  font-weight: 400;
`;
