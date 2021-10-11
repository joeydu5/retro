import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../style/style.css";
import useScreensizing from "../components/hook/useScreensizing";

function HomeSlideShow() {
  var settings = {
    className: "slider variable-width",
    dots: true,
    // lazyLoad: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    // initialSlide: 2,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    // variableWidth: true,
  };

  const slideImages = [
    {
      id: "1",
      image:
        "https://images.pexels.com/photos/167092/pexels-photo-167092.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      text: "Welcome to RetroRecords Newtown",
    },
    {
      id: "2",
      image:
        "https://images.pexels.com/photos/3328881/pexels-photo-3328881.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      text: "A one-stop-shop",
    },
    {
      id: "3",
      image:
        "https://images.pexels.com/photos/2086669/pexels-photo-2086669.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      text: "Every Great Album Has a Story",
    },
    {
      id: "4",
      image:
        "https://images.pexels.com/photos/9786210/pexels-photo-9786210.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
      text: "Vinyl records sound better",
    },
    {
      id: "5",
      image:
        "https://images.pexels.com/photos/3944104/pexels-photo-3944104.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      text: "Find us at Newtown King St.",
    },
  ];

  const { screenWidth, screenHeight } = useScreensizing();
  const calcWidth = screenWidth * 0.7;
  const calcHeight = (calcWidth / 16) * 9;
  console.log("width:" + calcWidth, "height:" + calcHeight);
  return (
    <div
      className="slideparent"
      style={{ width: calcWidth, height: calcHeight }}
    >
      <Slider {...settings}>
        {slideImages.map((each) => {
          return (
            <div
              className="slideImage"
              key={each.id}
              //   style={{ width: calcWidth, height: calcHeight }}
            >
              <img
                src={each.image}
                alt={each.text}
                style={{ width: calcWidth, height: calcHeight }}
              />
              <h4>{each.text}</h4>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default HomeSlideShow;
