import React from "react";
import styled from "styled-components";
import js from "../assets/javascriptimg.png";
import mongodb from "../assets/mongodb.png";
import bootstrap from "../assets/bootstrap.png";
import CSS from "../assets/CSS.png";
import HTML from "../assets/HTML5.png";
import NODEJS from "../assets/nodejs.png";
import react from "../assets/react.png";
import git from "../assets/git.png";
import github from "../assets/github.png";
import mysql from "../assets/mysql.png";
import figma from "../assets/figma.png";
import c from "../assets/c.png";
import cpp from "../assets/c++.png";
import android from "../assets/android.png";
import postman from "../assets/postman.png";
import php from "../assets/php.png";
import express from "../assets/express.png";
import java from "../assets/java.png";
import python from "../assets/python.png";
import Fade from "react-reveal/Fade";
function Skills() {
  return (
    <DIV name="skills">
      {/* <Fade duration={1000} delay={1000}> */}
      <Header>Skills</Header>
      {/* </Fade> */}
      <CONTENT>
        <Fade duration={1000} delay={1000}>
          <Header2>Front-end</Header2>
        </Fade>
        <SKILLS>
          <Fade duration={1000} delay={1500}>
            <CARD>
              <IMG src={js} />
            </CARD>
          </Fade>
          <Fade duration={1000} delay={1500}>
            <CARD>
              <IMG src={react} />
            </CARD>
          </Fade>
          <Fade duration={1000} delay={1500}>
            <CARD>
              <IMG src={HTML} />
            </CARD>
          </Fade>
          <Fade duration={1000} delay={1500}>
            <CARD>
              <IMG src={CSS} />
            </CARD>
          </Fade>
          <Fade duration={1000} delay={1500}>
            <CARD>
              <IMG src={bootstrap} />
            </CARD>
          </Fade>
        </SKILLS>
      </CONTENT>
      <CONTENT>
        <Fade duration={1000} delay={1000}>
          <Header2>Back-end</Header2>
        </Fade>
        <SKILLS>
          <Fade duration={1000} delay={1500}>
            <CARD>
              <IMG src={mongodb} />
            </CARD>
          </Fade>
          <Fade duration={1000} delay={1500}>
            <CARD>
              <IMG src={NODEJS} />
            </CARD>
          </Fade>
          <Fade duration={1000} delay={1500}>
            <CARD>
              <IMG src={express} />
            </CARD>
          </Fade>
          <Fade duration={1000} delay={1500}>
            <CARD>
              <IMG src={postman} />
            </CARD>
          </Fade>
          <Fade duration={1000} delay={1500}>
            <CARD>
              <IMG src={mysql} />
            </CARD>
          </Fade>
        </SKILLS>
      </CONTENT>
      <BGcontent>
        <Fade duration={1000} delay={1000}>
          <Header2>Others</Header2>
        </Fade>
        <CONTENT2>
          <SKILLS2>
            <Fade duration={1000} delay={1500}>
              <CARD>
                <IMG src={git} />
              </CARD>
            </Fade>
            <Fade duration={1000} delay={1500}>
              <CARD>
                <IMG src={github} />
              </CARD>
            </Fade>
            <Fade duration={1000} delay={1500}>
              <CARD>
                <IMG src={figma} />
              </CARD>
            </Fade>
            <Fade duration={1000} delay={1500}>
              <CARD>
                <IMG src={c} />
              </CARD>
            </Fade>
            <Fade duration={1000} delay={1500}>
              <CARD>
                <IMG src={cpp} />
              </CARD>
            </Fade>
            <Fade duration={1000} delay={1500}>
              <CARD>
                <IMG src={android} />
              </CARD>
            </Fade>
            <Fade duration={1000} delay={1500}>
              <CARD>
                <IMG src={python} />
              </CARD>
            </Fade>
            <Fade duration={1000} delay={1500}>
              <CARD>
                <IMG src={java} />
              </CARD>
            </Fade>
            <Fade duration={1000} delay={1500}>
              <CARD>
                <IMG src={php} />
              </CARD>
            </Fade>
          </SKILLS2>
        </CONTENT2>
      </BGcontent>
    </DIV>
  );
}

export default Skills;
const DIV = styled.div`
  display: flex;
  flex-direction: column;

  // width: 100%;
  height: 115vh;

  // justify-content: center;
  align-items: center;
  @media (max-width: 400px) {
    margin: 0px;
    // align-items: start;
    width: 400px;
  }
`;
const Header = styled.div`
  font-size: 30px;
  letter-spacing: 3px;
  color: #fff;

  text-align: center;
  border-top: 2px solid #000;
  width: 1200px;
  @media (max-width: 400px) {
    margin: 0px;
    width: 390px;
    font-size: 30px;
    text-align: center;
    padding-top: 20px;
  }
`;
const Header2 = styled.div`
  color: #fff;
  letter-spacing: 2px;
  font-size: 20px;
  font-weight: bold;
  margin: 4px;

  text-align: center;
  @media (max-width: 400px) {
    font-size: 15px;
    margin: 10px;

    text-align: center;
  }
`;
const BGcontent = styled.div`
  margin: 6px;
`;
const CONTENT = styled.div`
  margin: 6px;
`;
const CONTENT2 = styled.div`
  display: flex;

  width: 100%;
`;
const SKILLS2 = styled.div`
  display: grid;
  gap: 20px;

  grid-template-columns: repeat(5, 1fr);
  @media (max-width: 400px) {
    grid-gap: 20px;

    grid-template-columns: repeat(3, 1fr);
  }
`;
const SKILLS = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
  @media (max-width: 400px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
const CARD = styled.div`
  width: 150px;
  height: 80px;
  // margin: 10px;
  display: flex;

  justify-content: center;
  align-items: center;
  // flex-direction: column;
  color: #fff;
  padding-top: 3px;
  padding-bottom: 3px;
  padding-left: 10px;
  padding-right: 10px;

  box-shadow: #000 0px 4px 8px -2px;
  @media (max-width: 400px) {
    margin: 0px;
    width: 110px;
    padding-left: 0px;
    padding-right: 0px;
    padding-top: 0px;
    padding-bottom: 0px;
    height: 80px;
    justify-content: none;
    align-items: none;
  }
`;
const IMG = styled.img`
  width: 80px;
  height: 50px;
  // padding: 10px 10px;
  @media (max-width: 400px) {
    // margin: 60px;
    width: 60px;

    // padding: 10px 10px;
  }
`;
