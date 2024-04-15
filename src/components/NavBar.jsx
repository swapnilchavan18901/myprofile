import React, { Component } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import "./navbar.css";

class NavBar extends Component {
  render() {
    return (
      <nav>
        <ul class="nav-bar">
          <input type="checkbox" id="check" />
          <span class="menu">
            <li>
              <NavLink to="/">
                <a href="">Home</a>
              </NavLink>
            </li>
            <li>
              <NavLink to="/about">
                <a href="">About</a>
              </NavLink>
            </li>
            <li>
              <NavLink to="/skills">
                <a href="">Skillset</a>
              </NavLink>
            </li>
            <li>
              <NavLink to="/works">
                <a href="">Work</a>
              </NavLink>
            </li>{" "}
            <li>
              <NavLink to="/contact">
                <a href="">Contact </a>
              </NavLink>
            </li>
            <label for="check" class="close-menu">
              <i class="fas fa-times"></i>
            </label>
          </span>
          <label for="check" class="open-menu">
            <i class="fas fa-bars"></i>
          </label>
        </ul>
      </nav>
    );
  }
}

export default NavBar;
