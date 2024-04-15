import React from "react";
import styled from "styled-components";
import js from "../assets/JS.png";
import mongodb from "../assets/mongodb.png";
import CSS from "../assets/CSS.png";
import HTML from "../assets/HTML5.png";
import TW from "../assets/tailwind.png";
import NODEJS from "../assets/nodejs.png";
import react from "../assets/react.png";
import git from "../assets/git.png";
import mysql from "../assets/mysql.png";

import firebase from "../assets/firebase.png";

import Fade from "react-reveal/Fade";
function Skills() {
  return (
    <>
      <Fade duration={1000} delay={1100}>
        <Header>
          Skills{" "}
          <Header2>
            My focused Technologies:current areas of proficiency
          </Header2>{" "}
        </Header>
      </Fade>

      <DIV name="skills">
        {/* <Fade duration={1000} delay={1000}> */}

        {/* </Fade> */}
        <BGcontent>
          <SKILLS2>
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
                <IMG src={TW} />
              </CARD>
            </Fade>
            <Fade duration={1000} delay={1500}>
              <CARD>
                <IMG src={git} />
              </CARD>
            </Fade>
            <Fade duration={1000} delay={1500}>
              <CARD>
                <IMG src={NODEJS} />
              </CARD>
            </Fade>
            <Fade duration={1000} delay={1500}>
              <CARD>
                <IMG src={mongodb} />
              </CARD>
            </Fade>
            <Fade duration={1000} delay={1500}>
              <CARD>
                <IMG src={mysql} />
              </CARD>
            </Fade>

            <Fade duration={1000} delay={1500}>
              <CARD>
                <IMG src={firebase} />
              </CARD>
            </Fade>
          </SKILLS2>
        </BGcontent>
      </DIV>
    </>
  );
}

export default Skills;
const DIV = styled.div`
  display: flex;
  flex-direction: column;

  // width: 100%;
  height: 100vh;

  // justify-content: center;
  align-items: center;
  @media (max-width: 400px) {
    margin: 0px;
    // align-items: start;
    width: 400px;
    height: 40vh;
  }
`;
const Header = styled.div`
  font-weight: bold;
  color: #292040;
  font-family: "Helvetica", cursive;
  height: 170px;
  font-size: 150px;
  letter-spacing: 15px;
  display: flex;
  @media (max-width: 400px) {
    margin: 0px;
    width: 390px;
    font-size: 50px;
    text-align: center;
    padding-top: 20px;
  }
`;
const Header2 = styled.div`
  color: #7e8492;
  letter-spacing: 0px;
  font-size: 20px;
  width: 350px;
  position: absolute;
  top: 100px;
  left: 140px;

  @media (max-width: 400px) {
    font-size: 15px;
    margin: 10px;
    display: none;
    text-align: center;
  }
`;
const BGcontent = styled.div`
  margin: 6px;
  display: flex;
  align-items: center;
  height: 200px;
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

const CARD = styled.div`
  width: 150px;
  height: 80px;
  // margin: 10px;
  display: flex;
  border: 1px solid #fff;
  border-radius: 5px;
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
  filter: invert(100%) sepia(0%) saturate(1146%) hue-rotate(322deg)
    brightness(107%) contrast(103%) @media (max-width: 400px) {
    // margin: 60px;
    width: 60px;

    // padding: 10px 10px;
  }
`;
