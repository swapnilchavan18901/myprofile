import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import * as THREE from "three";
import bg from "../assets/bg2.png";
import { Canvas } from "@react-three/fiber";
import { Experience } from "./experience";

function Home() {
  return (
    <>
      <DIV name="home">
        <Content1>
          <Fade duration={1000}>
            <Name>
              {/* <SD>Hi,my name is</SD> */}
              <SD1>SWAPNIL CHAVAN </SD1>
            </Name>
            <br />
            <Sdiv>
              <DIV3>
                <SMD>
                  <span>&nbsp; Web Designer & Web Developer &nbsp;</span>
                </SMD>
              </DIV3>

              <h5>
                <span>&#8220;</span>
                Living like everyone else, what's the point. Life is but a
                flicker of light in an eternitiy of darkness use it up while
                can,BE EXTRAORDINARY.
                <br />
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span>&#8221;</span>
              </h5>
            </Sdiv>
          </Fade>
        </Content1>
        <Content2>
          <Canvas shadows camera={{ position: [2, 2, 5], fov: 19 }}>
            <group position-y={-1}>
              <mesh>
                <Experience />
              </mesh>
            </group>
          </Canvas>
        </Content2>
        <MYMAIL>
          <span>swapnilchavan18901@gmail.com </span>
          <span2> -----------</span2>
        </MYMAIL>
      </DIV>
    </>
  );
}

export default Home;

const DIV = styled.div`
  display: flex;
  padding-left: 60px;
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
  // color: #1a1110;

  font-size: 100px;
  color: #bd85e9;
  font-weight: 900;
  font-family: "Helvetica", cursive;
  line-height: 80px;
  // height: 80px;
  letter-spacing: -1px;
  @media (max-width: 400px) {
    font-size: 40px;
    line-height: 40px;
  }
`;
const SD = styled.div`
  // color: #100c08;
  color: #fff;

  font-size: 22px;

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
    padding-top: 40px;
    text-align: left;
    padding-left: 10px;
    letter-spacing: 1.5px;
    // color: #282c35;
    color: #fff;
    span {
      font-size: 100px;
      line-height: 30px;
    }
    font-size: 22px;
    line-height: 30px;
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
  padding-top: 50px;
  width: 60%;
  @media (max-width: 400px) {
    width: 0px;
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
    background: green;
    display: none;
  }
`;
const SMD = styled.div`
  // margin-top: 10px;
  // margin-left: 10px;

  span {
    padding: 10px;
    font-weight: 900;
    font-family: "Helvetica", cursive;
    background: #292040;
    font-size: 17px;
    color: #fff;
  }
`;

const Content2 = styled.div`
  @media (max-width: 400px) {
    height: 340px;
  }
`;
