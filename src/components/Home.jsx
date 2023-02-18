import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import prf from "../assets/prf.jpg";
import Typed from "typed.js";
import animhome from "../Animations/animationhome";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
function Home() {
  const state = {
    gradient: "linear-gradient(120deg, #f093fb 0%, #f5576c 100%)",
  };
  const el = useRef(null);
  useEffect(() => {
    var options = {};
    var typed = new Typed(el.current, {
      strings: ["Web-Developer", "Front-end Developer", "Back-end Developer"],
      typeSpeed: 150,
      backSpeed: 150,
      backDelay: 2000,
      smartBackspace: true,
      showCursor: false,
      loop: true,
    });
  });
  const userGradient = {
    webkitbackgroundclip: "text !important",
    color: `transparent`,
  };

  return (
    <DIV name="home">
      <Div1>
        <Content1>
          <Fade duration={2000} delay={1000}>
            <SD1>
              <span1> I'M</span1>
              <S1>
                {/* <img src={bg} /> */}
                <h1 style={userGradient}>SWAPNIL</h1>
                <h1>SWAPNIL</h1>
              </S1>
            </SD1>
          </Fade>
          <Sdiv>
            <DIV3>
              <Fade duration={3000} delay={1300}>
                &#123;
                <SMD>
                  <span ref={el}> </span>
                </SMD>
                &nbsp;&#125;
              </Fade>
            </DIV3>
            <Fade duration={3000} delay={1600}>
              <h5>
                &nbsp; Hey, I'm Full Stack Developer based in India, and I'm
                very passionate and dedicated to my work..
              </h5>
            </Fade>
            <Zoom left delay={2000} duration={1000}>
              <Button2>Say Hello</Button2>
            </Zoom>
          </Sdiv>
        </Content1>
      </Div1>
      <Div2>
        <Fade duration={2000} delay={1000}>
          <IMG src={prf} />
        </Fade>
        <SDiv2>
          <Fade duration={2000} delay={1000}>
            <Mouse></Mouse>
            <SCR>
              <span>&#8595;</span> Scroll
            </SCR>
          </Fade>
        </SDiv2>
      </Div2>
    </DIV>
  );
}

export default Home;

const DIV = styled.div`
  display: flex;
  background: #212529;
  overflow-y: hidden;
  justify-content: center;
  align-items: center;
  height: 100vh;
  @media (max-width: 400px) {
    flex-direction: column-reverse;
    width: 370px;
  }
`;
const SD1 = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 70px;
  margin-top: 100px;
  position: relative;
  span1 {
    font-size: 50px;
    margin-left: 20px;
  }
  @media (max-width: 400px) {
    // flex-direction: column;
    width: 70px;
    margin-left: 0px;
    margin-top: 00px;
    span1 {
      font-size: 30px;
      margin-left: 00px;
      margin-bottom: 10px;
    }
  }
`;
const S1 = styled.div`
  flex-direction: column;
  // width: 700px;
  h1 {
    color: green;
    margin-top: -30px;

    font-size: 140px;
    letter-spacing: 10px;
    position: absolute;
    &:nth-child(1) {
      -webkit-text-stroke: 1px rgb(255, 221, 64);
    }
    &:nth-child(2) {
      color: rgb(255, 221, 64);
      animation: ${animhome.back} 3s ease-in-out infinite;
    }
  }
  @media (max-width: 400px) {
    // flex-direction: column;
    width: 100px;
    h1 {
      font-size: 60px;
    }
  }
`;
const Div1 = styled.div`
  height: 78vh;
  color: white;
  margin-top: 150px;
  // margin-left: 40px;
  width: 55%;
  @media (max-width: 400px) {
    // flex-direction: column;
    width: 370px;
    height: auto;
    margin-top: 0px;
    padding-left: 20px;
  }
`;
const Div2 = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  height: 50vh;
  @media (max-width: 400px) {
    // flex-direction: column;
    width: 370px;

    flex-direction: row;
    justify-content: center;
  }
`;
const IMG = styled.img`
  width: 500px;
  // margin-top: 200px;
  height: 500px;
  @media (max-width: 400px) {
    // flex-direction: column;
    width: 300px;
    height: 300px;
    margin-top: 00px;
    margin-bottom: 20px;
  }
`;

const Sdiv = styled.div`
  display: flex;
  // border: 2px solid green;
  color: #ffff;
  width: 750px;
  flex-direction: column;
  h5 {
    margin-left: 70px;
    margin-top: 30px;
    text-align: left;
    font-size: 30px;
    width: 650px;
  }
  @media (max-width: 400px) {
    width: 350px;
    h5 {
      margin-left: 00px;
      margin-top: 00px;
      // text-align: left;
      font-size: 15px;
    }
  }
`;
const DIV3 = styled.div`
  margin-top: 160px;
  color: #fff;
  width: 700px;
  font-size: 50px;
  font-weight: 400;
  display: flex;
  margin-left: 70px;
  @media (max-width: 400px) {
    // flex-direction: column;
    margin-top: 40px;

    width: 350px;
    font-size: 20px;

    margin-left: 0px;
  }
`;
const Content1 = styled.div``;
const SMD = styled.div`
  margin-left: 10px;

  span {
    color: rgb(255, 221, 64);
    border-right: 5px solid rgb(255, 221, 64);
  }
`;
const Button2 = styled.button`
  width: 200px;
  margin-left: 90px;
  margin-top: 30px;
  height: 70px;
  border-radius: 8px;
  font-size: 24px;
  font-weight: 600;
  transition: all 250ms ease-in-out;
  border: 2px solid rgb(255, 221, 64);
  background: #212529;

  color: rgb(255, 221, 64);
  &:hover {
    transform: scale(1.05);
  }
  @media (max-width: 400px) {
    width: 120px;
    margin-left: 0px;
    margin-top: 10px;
    height: 40px;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 600;
    transition: all 250ms ease-in-out;
    border: 2px solid rgb(255, 221, 64);
    background: #212529;
  }
`;
const SDiv2 = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: center;
  margin-right: 20px;
  margin-top: 50px;
  @media (max-width: 400px) {
    border: 2px solid green;
    margin-right: 0px;
  }
`;

const SCR = styled.p`
  letter-spacing: 6px;
  text-indent: 12px;
  font-size: 20px;
  color: rgb(255, 221, 64);
  animation: ${animhome.colorText} 5s ease-out infinite,
    ${animhome.nudgeText} 5s ease-out infinite;

  span {
    font-size: 30px;
  }
  @media (max-width: 400px) {
    visibility: hidden;
    width: 0px;
  }
`;
const Mouse = styled.div`
  position: relative;
  width: 42px;
  margin-right: 30px;

  height: 78px;
  border-radius: 100px;
  background-size: 100% 200%;
  animation: ${animhome.colorSlide} 5s linear infinite,
    ${animhome.nudgeMouse} 5s ease-out infinite;
  &:before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    width: 36px;
    height: 72px;
    background-color: #212529;
    border-radius: 100px;
  }
  &:after {
    background-color: rgb(255, 221, 64);
    width: 10px;
    height: 10px;
    border-radius: 100%;
    animation: ${animhome.trackBallSlide} 5s linear infinite;
    content: "";
    position: absolute;
    top: 35px;
    right: 0;
    bottom: 0;
    left: 17px;
  }
  @media (max-width: 400px) {
    visibility: hidden;
    width: 0px;
  }
`;
