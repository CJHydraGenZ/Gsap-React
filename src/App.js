import React, { useRef } from "react";
// import logo from "./logo.svg";
import "./App.scss";
import arrow from "./img/next.svg";
import imgG from "./img/63583009_p4_master1200.jpg";
import imgB from "./img/65922134_p1_master1200.jpg";
import { TweenMax, Power3 } from "gsap";

function App() {
  return (
    <div className="hero">
      <div className="container">
        <div className="hero-inner">
          <div className="hero-content">
            <div className="hero-content-inner">
              <h1>
                <div className="hero-content-line">
                  <div className="hero-content-line-inner">
                    Reliving the burden
                  </div>
                </div>
                <div className="hero-content-line">
                  <div className="hero-content-line-inner">belajar gsap</div>
                </div>
                <div className="hero-content-line">
                  <div className="hero-content-line-inner">web site</div>
                </div>
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
                cupiditate aperiam provident possimus, iste soluta aspernatur?
                Unde possimus odio, dolore iste cupiditate vitae. Nemo obcaecati
                doloribus quos vitae, nostrum consectetur.
              </p>
              <div className="btn-row">
                <button className="exp-btn">
                  explore
                  <div className="arrow-icon">
                    <img src={arrow} alt="" />
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className="hero-img">
            <div className="hero-images-inner">
              <div className="hero-images girl">
                <img src={imgG} alt="" />
              </div>
              <div className="hero-images boys">
                <img src={imgB} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
