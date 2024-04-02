import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

import bg from "../assets/bg2.png";
import { Canvas } from "@react-three/fiber";
import { Experience } from "./experience";

function Home() {
  return (
    <DIV name="home">
      <Content1>
        <Fade duration={1000}>
          <Name>
            <SD>Hi,my name is</SD>
            <SD1>
              <h2>Swapnil Chavan</h2>
            </SD1>
          </Name>
          <br />
          <Sdiv>
            <DIV3>
              <SMD>
                <span>&nbsp; Web Designer & Web Developer &nbsp;</span>
              </SMD>
            </DIV3>

            <h5>
              <span2>Born in India raised by the 90'</span2>s,
              <span2>
                <br /> 3+ years of experience,
              </span2>
              <br />
              <span2>Now available for you.</span2>
              <br />
              <br />
              &nbsp; &nbsp;Hey, Are you looking for a
              <span>
                <b> PERFECT WEBSITE</b>{" "}
              </span>
              then you are in right place. Get a
              <span>
                <b> PROFESSIONAL RESULTS </b>
              </span>{" "}
              you are looking for, Your work will be done on time as you
              required. Just reach out and know us what you need...
            </h5>
          </Sdiv>
        </Fade>
      </Content1>
      <Content2>
        {/* <IMG src={bg} /> */}
        <Canvas shadows camera={{ position: [0, 2, 5], fov: 20 }}>
          <mesh>
            <color attach={"background"} args={["#ececec"]} />
            <Experience />
          </mesh>
        </Canvas>
      </Content2>
      <MYMAIL>
        <span>swapnilchavan18901@gmail.com </span>
        <span2> -----------</span2>
      </MYMAIL>
    </DIV>
  );
}

export default Home;

const DIV = styled.div`
  display: flex;
  padding-left: 60px;
  padding-top: 50px;
  height: 100vh;

  @media (max-width: 400px) {
    flex-direction: column-reverse;
    padding-top: 0px;
    padding-left: 20px;
    width: 400px;
    margin-bottom: 300px;
  }
`;
const SD1 = styled.div`
  display: flex;

  align-items: center;
  font-size: clamp(10px, 5vw, 55px);
  height: 80px;
  // color: #1a1110;
  color: #fff;
  @media (max-width: 400px) {
    font-size: 25px;
  }
`;
const SD = styled.div`
  // color: #100c08;
  color: #fff;

  font-size: 22px;
  font-weight: 500;

  @media (max-width: 400px) {
    // font-size: 25px;
  }
`;
const Name = styled.div`
  display: flex;
  padding-left: 10px;

  flex-direction: column;
  color: #ffff;
  // justify-content: center;
`;

const Sdiv = styled.div`
  display: flex;

  width: 700px;
  flex-direction: column;

  h5 {
    padding-top: 20px;
    text-align: left;
    padding-left: 10px;

    span2 {
      text-transform: uppercase;
      font-weight: "bold";
      font-size: 27px;
      color: #fff;
    }
    span {
      // color: #100c08;
      color: #fff;

      // letter-spacing: 0px;
      word-spacing: 6px;
      font-size: 24px;
    }

    letter-spacing: 1.5px;
    // color: #282c35;
    color: #fff;

    font-size: 22px;
  }
  @media (max-width: 400px) {
    width: 350px;
    h5 {
      margin-left: 0px;
      margin-top: 8px;
      padding-left: 0px;
      padding-top: 10px;
      // text-align: left;
      font-size: 18px;
      width: 365px;
      height: 110px;
    }
  }
`;
const DIV3 = styled.div`
  color: #fff;
  text-align: center;
  padding-top: 10px;
  font-size: 30px;
  font-weight: 400;
  display: flex;
  span {
    font-size: 20px;
  }
  @media (max-width: 400px) {
    // flex-direction: column;
    // margin-top: 30px;

    width: 350px;
    font-size: 20px;

    margin-left: 0px;
  }
`;
const Content1 = styled.div`
  // padding-top: 30px;
  @media (max-width: 400px) {
  }
`;
const MYMAIL = styled.div`
  display: flex;

  justify-content: center;
  color: #fff;
  width: 440px;
  cursor: pointer;
  font-size: 14px;
  margin-left: 980px;
  margin-top: 270px;
  transform: rotate(90deg);
  position: fixed;
  font-weight: bold;
  span {
    transition: all 250ms ease-in-out;
  }
  &:hover {
    span {
      color: #fff;

      letter-spacing: 3px;
      padding-right: 20px;
    }
  }
  @media (max-width: 400px) {
    display: none;
  }
`;
const SMD = styled.div`
  // margin-top: 10px;
  // margin-left: 10px;

  span {
    padding: 10px;
    font-weight: 300;
    background: #100c08;
    font-size: 25px;
    color: #fff;
  }
`;

const Content2 = styled.div`
  // padding-top: 70px;
  // background: #fff;
`;
const IMG = styled.img`
  width: 480px;
  height: 350px;
  @media (max-width: 400px) {
    width: 350px;
  }
`;
