import React from "react";
import "../../style/style.css";

export default function RareLpsCard(props) {
  const { image, artist, album, price } = props.each;
  return (
    <div className="rarelpscard">
      <img src={image} alt="" />
      <div className="rarecaption flex-box">
        <p>{artist}</p>
        <p>{price}</p>
      </div>
      <p>[{album}]</p>
    </div>
  );
}
