import { keyframes } from "styled-components";
import styled from "styled-components";

const back = keyframes`
0%,100%{
  clip-path: polygon(0% 45%, 15% 44%, 32% 50%, 54% 60%, 70% 61%, 84% 59%, 100% 52%, 100% 100%, 0% 100%);
}
50%{
  clip-path: polygon(0 60%, 16% 65%, 34% 66%, 51% 62%, 67% 50%, 84% 45%, 100% 46%, 100% 100%, 0% 100%);
} `;
const nudgeText = keyframes` 
  0% { transform: translateY(0); }
  20% { transform: translateY(2px); }
  30% { transform: translateY(0); }
  50% { transform: translateY(2px); }
  60% { transform: translateY(0); }
  80% { transform: translateY(2px); }
  90% { transform: translateY(0); }
}`;

const colorText = keyframes`
 21% { color: #fff; }
30% { color: rgb(255, 221, 64); }
51% { color: #fff; }
60% { color: rgb(255, 221, 64); }
81% { color: #fff; }
90% { color: rgb(255, 221, 64); } `;
const nudgeMouse = keyframes` 
0% { transform: translateY(0); }
20% { transform: translateY(2px); }
30% { transform: translateY(0); }
50% { transform: translateY(2px); }
60% { transform: translateY(0); }
80% { transform: translateY(2px); }
90% { transform: translateY(0); }`;
const trackBallSlide = keyframes` 0% {
  opacity: 1;
  transform: scale(1) translateY(-20px);
}
6% { 
  opacity: 1;
  transform: scale(0.9) translateY(20px/4);
}
14% {
  opacity: 0;
  transform: scale(0.4) translateY(20px*2);
}
15%, 19% {
  opacity: 0;
  transform: scale(0.4) translateY(-20px);
}
28%, 29.99% {
  opacity: 1;
  transform: scale(1) translateY(-20px);
}
30% {
  opacity: 1;
  transform: scale(1) translateY(-20px);
}
36% { 
  opacity: 1;
  transform: scale(0.9) translateY(20px/4);
}
44% {
  opacity: 0;
  transform: scale(0.4) translateY(20px*2);
}
45%, 49% {
  opacity: 0;
  transform: scale(0.4) translateY(-20px);
}
58%, 59.99% {
  opacity: 1;
  transform: scale(1) translateY(-20px);
}
60% {
  opacity: 1;
  transform: scale(1) translateY(-20px);
}
21252966% { 
  opacity: 1;
  transform: scale(0.9) translateY(20px/4);
}
74% {
  opacity: 0;
  transform: scale(0.4) translateY(20px*2);
}
75%, 79% {
  opacity: 0;
  transform: scale(0.4) translateY(-20px);
}
88%, 100% {
  opacity: 1;
  transform: scale(1) translateY(-20px);
}

`;
const colorSlide = keyframes`
0% { background-position: 0% 100%; }
  20% { background-position: 0% 0%; }
  21% { background-color:  rgb(255, 221, 64); }
  29.99% { 
    background-color: #212529;
    background-position: 0% 0%;
  }
  30% { 
    background-color:  rgb(255, 221, 64);
    background-position: 0% 100%;
  }
  50% { background-position: 0% 0%; }
  51% { background-color:  rgb(255, 221, 64); }
  59% { 
    background-color: #212529;
    background-position: 0% 0%;
  }
  60% { 
    background-color:  rgb(255, 221, 64);
    background-position: 0% 100%;
  }
  80% { background-position: 0% 0%; }
  81% { background-color:  rgb(255, 221, 64); }
  90%, 100% { background-color: #212529; }`;

const animate__bounce = keyframes`
    -webkit-animation-name: bounce;
    animation-name: bounce;
    -webkit-transform-origin: center bottom;
    transform-origin: center bottom;
 
  @-webkit-keyframes flash {
    from,
    50%,
    to {
      opacity: 1;
    }
  
    25%,
    75% {
      opacity: 0;
    }
  `;
const animhome = {
  nudgeMouse,
  nudgeText,
  colorText,
  colorSlide,
  back,
  trackBallSlide,
  animate__bounce,
};
export default animhome;
