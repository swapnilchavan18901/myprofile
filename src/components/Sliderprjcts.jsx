import React from "react";
import SwiperCore, { Autoplay, EffectCoverflow, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "../App.css";
import ProjectCard from "./ProjectCard.jsx";
import styled from "styled-components";

SwiperCore.use([EffectCoverflow, Autoplay, Pagination]);

const data = [
  {
    title: "GP Pen Official Website",
    desc: " It is the official institution website of Government Polytechnic Pen created using Next JS, Chakra UI and Notion.It is hosted live (visited by 41k+ visitors till date) and used by the students, faculty members and others for getting updates and all the information about the institute and the courses it provides.",
    color: "green",
  },
  {
    title: "GPP Student Section Portal",
    desc: "It is official web application made using React JS and Firebase for the purpose of providing online Bonafide Certificate system to the students of the Government Polytechnic Pen. It also automates the process of creating Leaving Certificate and managing all its operations.It is live website used by the faculty members and students of the Government Polytechnic Pen on the regular basis.",
  },
  {
    title: "AICTE PORTAL (SIH 22 Project)",
    desc: "It is the web application created using React JS, Firebase and Tailwind CSS for SIH 22 Finale. This project fills the gap between the technologies used in the market and the technologies/subjects taught in the college. It has an intelligent algorithm which is capable of finding the best fit for a particular subject of a given course in a curriculum considering the new subject/technology pre requisites.",
    color: "red",
  },
  {
    title: "SC GAMING",
    desc: "It is online Game forum web application made using PHP and MySQL. User can have discussions on various problems faced and can also comment on the other user's asked questions. It contains various categories and also includes enchanced security features like protection against potential XSS attacks",
  },
];

function Sliderprjcts() {
  return (
    <DIV className="main-swiper" id="projectSliderContainer" name="projects">
      <Headers>
        PROJECTS
        <Header2>featured work and project showcase</Header2>
      </Headers>
      <Swiper
        style={{ maxWidth: "100vw", scrollX: "hidden" }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        grabCursor={false}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={true}
        className="mySwiper"
      >
        {/* using array */}
        {data.map((ele) => {
          return (
            <SwiperSlide maxWidth={"100vw"} key={ele.title}>
              <ProjectCard title={ele.title} desc={ele.desc} tags={ele.tags} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </DIV>
  );
}

export default Sliderprjcts;

const DIV = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  @media (max-width: 400px) {
    width: 400px;
    padding-top: 0px;
  }
`;
const Headers = styled.div`
  font-size: 100px;
  font-weight: bold;
  color: #292040;
  padding-left: 50px;
  font-family: "Helvetica", cursive;

  @media (max-width: 400px) {
    font-size: 40px;
  }
`;
const Header2 = styled.div`
  color: #7e8492;
  letter-spacing: 0px;
  font-size: 20px;
  width: 350px;
  position: absolute;
  top: 130px;
  left: 230px;

  @media (max-width: 400px) {
    font-size: 15px;
    margin: 10px;
    display: none;
    text-align: center;
  }
`;
