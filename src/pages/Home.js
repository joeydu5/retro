import React from "react";
import "../style/style.css";
import img1 from "../resources/images/img1.jpeg";

import img2 from "../resources/images/img2.jpeg";
import HomeSlideShow from "./HomeSlideShow";

export default function Home() {
  const img1url =
    "https://images.pexels.com/photos/1300578/pexels-photo-1300578.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";

  const img2url =
    "https://images.pexels.com/photos/164716/pexels-photo-164716.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";
  return (
    <div>
      {/* <div className="homeMain">
        <h1>Every Great Album Has a Story</h1>
      </div> */}

      <HomeSlideShow />
      <div className="home-main2 flex-box">
        <div className="home-main2-left">
          <img src={img1url} alt="record image 1" />
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
          <img src={img2url} alt="record image 2" />
        </div>
      </div>
    </div>
  );
}
