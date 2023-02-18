import React from "react";
import styled from "styled-components";
import prjt from "../assets/prjt.png";
import github2 from "../assets/github2.png";
const Projects = () => {
  return (
    <GDIV name="projects">
      <Header>My PRojects</Header>
      <Div>
        <Card>
          <Img src={prjt} />
          <Type>
            <span>Web Development </span>
            <span>Web Development </span>
          </Type>
          <Title>NAME of project</Title>
          <Content>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae error
            reiciendis nisi expedita fuga reprehenderit nostrum esse labore
          </Content>
          <Button>
            <img src={github2} />
            GitHub
          </Button>
        </Card>
        <Card>
          <Img src={prjt} />
          <Type>
            <span>Web Development </span>
            <span>Web Development </span>
          </Type>
          <Title>NAME of project</Title>
          <Content>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae error
            reiciendis nisi expedita fuga reprehenderit nostrum esse labore
          </Content>
          <Button>
            <img src={github2} />
            GitHub
          </Button>
        </Card>
        <Card>
          <Img src={prjt} />
          <Type>
            <span>Web Development </span>
            <span>Web Development </span>
          </Type>
          <Title>NAME of project</Title>
          <Content>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae error
            reiciendis nisi expedita fuga reprehenderit nostrum esse labore
          </Content>
          <Button>
            <img src={github2} />
            GitHub
          </Button>
        </Card>
      </Div>
    </GDIV>
  );
};

export default Projects;
const GDIV = styled.div`
  display: flex;
  width: 100%;
  background: #212529;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  // margin-bottom: 200px;
`;
const Header = styled.div`
  color: #ffff;
  padding-top: 20px;
  font-size: 40px;
  border-top: 2px solid rgb(255, 221, 64);
`;
const Div = styled.div`
  display: grid;

  grid-template-columns: repeat(3, 1fr);
  grid-gap: 0;
`;
const Button = styled.button`
  border: 3px solid rgb(255, 221, 64);
  height: 60px;
  border-radius: 10px;
  margin-left: 10px;
  margin-top: 10px;
  font-size: 19px;
  background: #212529;
  color: #fff;
  img {
    // background: #fff;
    width: 50px;
    width: fit-content;
    height: 40px;
  }
`;
const Card = styled.div`
  display: flex;
  flex-direction: column;
  // height: 400px;
  width: 360px;
  align-items: start;
  margin: 20px;
  padding-left: 8px;
  // padding-right: 20px;
  padding-top: 10px;
  background: #212529;
  border-radius: 10px;
  padding-bottom: 10px;
  border: 2px solid #ffff;
`;
const Content = styled.div`
  color: #fff;
  text-align: left;
  padding-left: 10px;
`;
const Type = styled.div`
  height: 40px;
  span {
    border-radius: 10px;
    margin: 10px;
    padding-left: 5px;
    padding-right: 5px;
    padding-top: 3px;
    padding-bottom: 3px;
    color: rgb(255, 221, 64);
    border: 2px solid rgb(255, 221, 64);
    // background: rgb(255, 221, 64);
  }
`;
const Title = styled.div`
  font-size: 30px;
  color: #fff;
  padding-left: 10px;
`;
const Img = styled.img`
  width: 340px;
  height: 208px;
  border: 2px solid #212529;
  border-radius: 10px;
  margin-bottom: 10px;
`;
