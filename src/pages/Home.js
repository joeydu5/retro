import React from "react";
import "./Home.css";
import img1 from "../resources/images/img1.jpeg";
import img2 from "../resources/images/img2.jpeg";
import HomeSlideShow from "./HomeSlideShow";

export default function Home() {
  return (
    <div>
      {/* <div className="homeMain">
        <h1>Every Great Album Has a Story</h1>
      </div> */}

      <HomeSlideShow />
      <div className="home-main2 flex-box">
        <div className="home-main2-left">
          <img src={img1} alt="" />
        </div>

        <div className="home-main2-right">
          <h2>The Story of Sydney International Records</h2>
          <p>
            To honor the label’s 50th anniversary, we’re exploring PIR’s unique
            blend of soul, R&B, gospel and doo-wop music that came to define The
            Sound of Australia. This story is told through eight albums of
            distinct, inimitable Australian soul, with special attention to
            vibrant storytelling and quality mastering.
          </p>
        </div>
      </div>
      <div className="home-main3 flex-box">
        <div className="home-main3-left">
          <h2>The story of vanguard</h2>
          <p>
            A story told through six albums of peerless folk, with an eye
            towards historical accuracy and faithful mastering.
          </p>
        </div>
        <div className="home-main3-right">
          <img src={img2} alt="" />
        </div>
      </div>
    </div>
  );
}
