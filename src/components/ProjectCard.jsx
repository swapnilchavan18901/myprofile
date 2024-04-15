import React from "react";
import styled from "styled-components";
import "../App.css";

function ProjectCard({ color, title, desc, github, video, imgPath, tags }) {
  return (
    <Holder>
      <ARTICLE className={"postcard dark"}>
        <Sdiv1>
          <IMG
            className="postcard__img"
            src="https://picsum.photos/1000/1000"
            alt="Image Title"
          />
        </Sdiv1>
        <Sdiv2>
          <TEXT>
            <h1>
              <a href="#">{title}</a>
            </h1>

            <DESC>{desc}</DESC>
          </TEXT>
          <BTDIV>
            <BUTTON>GITHUB</BUTTON>
            <BUTTON>VIDEO</BUTTON>
            <BUTTON>WEBSITE</BUTTON>
          </BTDIV>
        </Sdiv2>
      </ARTICLE>
    </Holder>
  );
}

export default ProjectCard;
const ARTICLE = styled.div`
  display: flex;
  height: 300px;
  background: #151627;
  @media (max-width: 400px) {
    flex-direction: column;
    width: 380px;
    // height: max-content;
    height: 1000px;

    // justify-content: center;
    align-items: center;
  }
`;
const DESC = styled.div`
  font-size: 17px;
  font-family: "Helvetica";
  color: #dee1e6;
  @media (max-width: 400px) {
    font-size: 13px;
    padding: 10px;
  }
`;
const TEXT = styled.div`
  a {
    font-size: 30px;
    //     color: #dee1e6;

    color: #dee1e6;
  }
  h1 {
    margin: 20px;
  }
  @media (max-width: 400px) {
    a {
      font-size: 25px;
    }
  }
`;
const Sdiv1 = styled.div`
  padding: 20px 20px 20px 20px;

  @media (max-width: 400px) {
    padding: 10px 0px 0px 0px;
    width: 160px;
    height: 160px;
    display: flex;
    justify-content: center;
    border-right: 0px solid #fff;
  }
`;
const Sdiv2 = styled.div`
  padding-left: 30px;
  color: #dee1e6;

  padding-right: 30px;
  font-size: 20px;
  @media (max-width: 400px) {
    padding-left: 0px;
    font-size: 18px;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
`;
const IMG = styled.img`
  height: 300px;
  width: 300px;
  padding-right: 50px;
  border-right: 2px solid #fff;
  @media (max-width: 400px) {
    border-right: 0px;
    height: 160px;
    width: 160px;
    padding-right: 0px;
  }
`;
const BTDIV = styled.div``;
const BUTTON = styled.button`
  height: 50px;
  width: 140px;
  margin-right: 10px;
  margin-top: 30px;
  background-color: transparent;
  border: 2px solid #fff;
  color: #dee1e6;

  @media (max-width: 400px) {
    width: 80px;
    margin-bottom: 20px;
  }
`;
const Holder = styled.div`
  // margin-top: 55px;
  // margin-right: 10px;
  width: 100%;
  display: flex;
  padding-left: 5%;
  padding-right: 5%;
  @media (max-width: 400px) {
    height: fit-content;
    flex-direction: column;
    width: 90%;
    height: fit-content;
    font-size: 25px;
    text-align: center;
    margin-bottom: 12px;
  }
`;
