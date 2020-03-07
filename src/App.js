import React, { useRef, useEffect } from "react";

import "./App.scss";
import arrow from "./img/next.svg";
import imgG from "./img/63583009_p4_master1200.jpg";
import imgB from "./img/65922134_p1_master1200.jpg";
import { TweenMax, TimelineLite, Power3 } from "gsap";

function App() {
  let app = useRef(null);
  let images = useRef(null);
  let content = useRef(null);

  let tl = new TimelineLite({ delay: 0.8 });

  useEffect(() => {
    // console.log(images.lastElementChild);
    //images vars

    const girlImg = images.firstElementChild;
    const boyImg = images.lastElementChild;

    // console.log(...content.children);

    // content.children.forEach(c => console.log(c));
    // content.children.map(c => console.log(c));
    //Content vars
    const headlineFirst = content.children[0].children[0];
    const headlineSec = headlineFirst.nextSibling;
    const headlineThird = headlineSec.nextSibling;
    const contentP = content.children[1];
    const contentButton = content.children[2];

    //images animation
    TweenMax.to(app, 0, { css: { visibility: "visible" } });
    tl.from(girlImg, 1.2, { y: 1200, ease: Power3.easeOut }, "Start")
      .from(
        girlImg.firstElementChild,
        2,
        { scale: 1.6, ease: Power3.easeOut },
        0.2
      )
      .from(boyImg, 1.2, { y: 1200, ease: Power3.easeOut }, 0.2)
      .from(
        boyImg.firstElementChild,
        2,
        { scale: 1.6, ease: Power3.easeOut },
        0.2
      );
    //Content Animation
    tl.staggerFrom(
      [headlineFirst.children, headlineSec.children, headlineThird.children],
      1,
      {
        y: 44,
        ease: Power3.easeOut,
        delay: 0.8
      },
      0.15,
      "Start"
    )
      .from(
        contentP,
        1,
        {
          y: 20,
          opacity: 0,
          ease: Power3.easeOut
        },
        1.4
      )
      .from(
        contentButton,
        1,
        {
          y: 20,
          opacity: 0,
          ease: Power3.easeOut
        },
        1.6
      );
  }, [tl]);

  return (
    <div className="hero" ref={el => (app = el)}>
      <div className="container">
        <div className="hero-inner">
          <div className="hero-content">
            <div className="hero-content-inner" ref={el => (content = el)}>
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
            <div className="hero-images-inner" ref={e => (images = e)}>
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
