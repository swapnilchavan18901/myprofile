import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-scroll";

class NavBar extends Component {
  render() {
    return (
      <Container>
        <LOGO>
          <Link
            to="home"
            activeClass="active"
            spy={true}
            smooth={true}
            duration={500}
          >
            SC
          </Link>
          <HAM>
            <i class="fa fa-bars" aria-hidden="true"></i>
          </HAM>
        </LOGO>

        <UL>
          <LI>
            <Link
              to="home"
              activeClass="active"
              spy={true}
              smooth={true}
              duration={500}
            >
              Home
            </Link>
          </LI>{" "}
          <LI>
            <Link
              to="about"
              activeClass="active"
              spy={true}
              smooth={true}
              duration={500}
            >
              {" "}
              about
            </Link>
          </LI>{" "}
          <LI>
            <Link
              to="skills"
              activeClass="active"
              spy={true}
              smooth={true}
              duration={500}
            >
              Skills
            </Link>
          </LI>
          <LI>
            <Link
              to="projects"
              activeClass="active"
              spy={true}
              smooth={true}
              duration={500}
            >
              {" "}
              Projects
            </Link>
          </LI>
          <LI>
            <Link
              to="talkwithme"
              activeClass="active"
              spy={true}
              smooth={true}
              duration={500}
            >
              {" "}
              Talk with me !
            </Link>
          </LI>
        </UL>
      </Container>
    );
  }
}

export default NavBar;
const Container = styled.div`
  position: fixed;
  display: flex;
  background: #212529;
  height: 80px;
  @media (max-width: 400px) {
    width: 400px;
    background: purple;
    height: 80px;
    align-items: center;
    flex-direction: column;
  }
`;
const HAM = styled.div`
  visibility: hidden;
  @media (max-width: 400px) {
    width: 160px;
    display: flex;
    margin-top: 20px;
    font-size: 30px;
    color: #fff;
    justify-content: end;
  }
`;
const LOGO = styled.a`
  // padding: 10px 10px;
  margin: 20px;
  width: 200px;
  margin-top: 25px;
  display: flex;
  margin-left: 170px;
  text-decoration: none;
  a {
    text-decoration: none;
    color: rgb(255, 221, 64);
    font-size: 40px;
    -webkit-text-stroke: 1px rgb(255, 221, 64);
    cursor: pointer;
  }

  @media (max-width: 400px) {
    width: 370px;
    margin: 0px;
    margin-top: 0px;
    margin-left: 0px;
    justify-content: end;
  }
`;
const UL = styled.ul`
  display: flex;
  margin-left: 290px;
  margin-top: 14px;
  color: #ffff;
  // background: red;
  @media (max-width: 400px) {
    margin-left: 0px;
  }
`;
const LI = styled.li`
  cursor: pointer;
  list-style: none;
  // padding: 10px 10px;
  margin: 20px;
  list-type: none;
  a {
    position: relative;
    color: white;
    text-decoration: none;
    font-size: 20px;
    &:after {
      content: "";
      height: 2px;
      position: absolute;
      background: rgb(255, 221, 64);
      left: 0;
      right: 0;
      bottom: -6px;
      opacity: 0;
      transform-origin: left center;
      transform: scaleX(0);
      transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    }
  }
  &:hover {
    a {
      &:after {
        transform: scaleX(1);
        opacity: 1;
      }
    }
  }
  @media (max-width: 400px) {
    margin: 0px;
  }
`;
