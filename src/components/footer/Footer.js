import React from "react";
import "../../style/style.css";
import facebook from "../../resources/social media/facebook_small.png";
import twitter from "../../resources/social media/twitter_small.png";
import ins from "../../resources/social media/instagram_small.png";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footersub flex-box">
        <div className="footer1">
          <h3>SERVICE</h3>
          <ul>
            <li>My Account</li>
            <li>Track Order</li>
            <li>Shipping and Delivery</li>
          </ul>
        </div>
        <div className="footer2">
          <h3>About Us</h3>
          <ul>
            <li>ABOUT US</li>
            <li>FAQs</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="footer3">
          <h3>INFORMATION</h3>
          <ul>
            <li>Terms of Use</li>
            <li>Privacy Policy</li>
            <li>Copyright 2021</li>
          </ul>
        </div>
        <div className="footer4">
          <h3>Follow Us</h3>
          <ul>
            <li>
              <a href="www.facebook.com">
                <img src={facebook} alt="facebook Icon" />
              </a>
            </li>
            <li>
              <a href="www.twitter.com">
                <img src={twitter} alt="twtter Icon" />
              </a>
            </li>
            {/* <li>
              <a href="www.facebook.com">
                <img src={ins} alt="facebook Icon" />
              </a>
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
}
