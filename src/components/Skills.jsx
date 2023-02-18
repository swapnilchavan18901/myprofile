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
              <span>JavaScript</span>
            </CARD>
          </Fade>
          <Fade duration={1000} delay={1500}>
            <CARD>
              <IMG src={react} />
              <span>React</span>
            </CARD>
          </Fade>
          <Fade duration={1000} delay={1500}>
            <CARD>
              <IMG src={HTML} />
              <span>HTML 5</span>
            </CARD>
          </Fade>
          <Fade duration={1000} delay={1500}>
            <CARD>
              <IMG src={CSS} />
              <span>CSS 3</span>
            </CARD>
          </Fade>
          <Fade duration={1000} delay={1500}>
            <CARD>
              <IMG src={bootstrap} />
              <span>Bootstrap</span>
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
              <span>MongoDB</span>
            </CARD>
          </Fade>
          <Fade duration={1000} delay={1500}>
            <CARD>
              <IMG src={NODEJS} />
              <span>NodeJS</span>
            </CARD>
          </Fade>
          <Fade duration={1000} delay={1500}>
            <CARD>
              <IMG src={express} />
              <span>Express Js</span>
            </CARD>
          </Fade>
          <Fade duration={1000} delay={1500}>
            <CARD>
              <IMG src={postman} />
              <span>Postman</span>
            </CARD>
          </Fade>
          <Fade duration={1000} delay={1500}>
            <CARD>
              <IMG src={mysql} />
              <span>MySQL</span>
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
                <span>Git</span>
              </CARD>
            </Fade>
            <Fade duration={1000} delay={1500}>
              <CARD>
                <IMG src={github} />
                <span>Github</span>
              </CARD>
            </Fade>
            <Fade duration={1000} delay={1500}>
              <CARD>
                <IMG src={figma} />
                <span>Figma</span>
              </CARD>
            </Fade>
            <Fade duration={1000} delay={1500}>
              <CARD>
                <IMG src={c} />
                <span>C</span>
              </CARD>
            </Fade>
            <Fade duration={1000} delay={1500}>
              <CARD>
                <IMG src={cpp} />
                <span>C++</span>
              </CARD>
            </Fade>
            <Fade duration={1000} delay={1500}>
              <CARD>
                <IMG src={android} />
                <span>Android Development</span>
              </CARD>
            </Fade>
            <Fade duration={1000} delay={1500}>
              <CARD>
                <IMG src={python} />
                <span>Python</span>
              </CARD>
            </Fade>
            <Fade duration={1000} delay={1500}>
              <CARD>
                <IMG src={java} />
                <span>Java</span>
              </CARD>
            </Fade>
            <Fade duration={1000} delay={1500}>
              <CARD>
                <IMG src={php} />
                <span>PHP</span>
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
  background: #212529;
  width: 100%;
  height: 100vh;

  // justify-content: center;
  align-items: center;
`;
const Header = styled.div`
  font-size: 40px;
  letter-spacing: 3px;
  color: #ffff;
  margin-top: 80px;
  border-top: 2px solid rgb(255, 221, 64);
  width: 1200px;
`;
const Header2 = styled.div`
  color: #ffff;
  letter-spacing: 2px;
  font-size: 25px;
  font-weight: bold;
`;
const BGcontent = styled.div`
  disply: flex;
  margin: 6px;
  flex-direction: column;
  align-items: center;
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

  grid-template-columns: repeat(5, 1fr);
`;
const SKILLS = styled.div`
  display: flex;

  gap: 20px;
  justify-content: center;
`;
const CARD = styled.div`
  // width: 80px;
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: white;
  border: 2px solid rgb(255, 221, 64);
  padding-top: 15px;
  padding-bottom: 20px;
  height: 130px;

  box-shadow: rgb(255, 221, 64) 0px 4px 8px -2px,
    rgb(255, 221, 64) 0px 0px 0px 1px;
  span {
    font-size: 19px;
    margin: 5px;
  }
`;
const IMG = styled.img`
  width: 100px;
  height: 100px;
  padding: 10px 10px; ;
`;
