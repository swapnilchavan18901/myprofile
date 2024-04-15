import React from "react";
import "./contactuspage2.css";
import { Canvas } from "@react-three/fiber";
import { Experience2 } from "./Experience2";
function contactuspage2() {
  return (
    <div>
      <div class="container">
        <span class="big-circle"></span>
        <div class="form">
          <div class="contact-info">
            <h3 class="title">Let's get in touch</h3>
            <div className="Modal">
              <Canvas shadows camera={{ position: [-1, 3, 8], fov: 10 }}>
                <group position-y={-1}>
                  <mesh>
                    <Experience2 />
                  </mesh>
                </group>
              </Canvas>
            </div>
            <div class="social-media">
              <p>Connect with us :</p>
              <div class="social-icons">
                <a href="https://twitter.com/swapnil18901">
                  <i class="fab fa-twitter"></i>
                </a>
                <a href="https://www.instagram.com/swapnilchavan1890/">
                  <i class="fab fa-instagram"></i>
                </a>
                <a href="https://www.linkedin.com/in/swapnil-chavan-0a1a95214/">
                  <i class="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>

          <div class="contact-form">
            <span class="circle one"></span>
            <span class="circle two"></span>

            <form action="index.html" autocomplete="off">
              <h3 class="title">Contact us</h3>
              <div class="input-container">
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  class="input"
                />
              </div>
              <div class="input-container">
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  class="input"
                />
              </div>

              <div class="input-container textarea">
                <textarea
                  name="message"
                  placeholder="Message"
                  class="input"
                ></textarea>
              </div>
              <input type="submit" value="Send" class="btn" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default contactuspage2;
