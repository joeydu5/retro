import React from "react";
import "../style/style.css";

export default function Contact() {
  const demos = {
    shopmap:
      '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3311.525680872826!2d151.17674901557976!3d-33.90186768064714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12b0344fa7ea4d%3A0x46ac659f8e191298!2sKing%20St%2C%20Newtown%20NSW%202042!5e0!3m2!1sen!2sau!4v1633483891559!5m2!1sen!2sau" width="500" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
  };

  function Iframe(props) {
    return (
      <div
        dangerouslySetInnerHTML={{ __html: props.iframe ? props.iframe : "" }}
      />
    );
  }
  return (
    <div className="contact">
      <div className="contact-first-row">
        <div>
          <h1>Calling record collectors</h1>
          <h1> you must visit Retro record</h1>
        </div>
      </div>
      <div className="contact-second-row flex-box">
        <div className="contact-info">
          <div>
            <h1>Retro Records NewTown</h1>
            <h2>Address: We are located at the top of King Street</h2>
            <h2>Phone: 02-9519 1234</h2>
            <Iframe iframe={demos["shopmap"]} allow="autoplay" />
          </div>
        </div>

        <div className="formparent">
          <form className="contact-form">
            <h1>Contact Us</h1>
            <div>
              <label htmlFor="firstname">First Name:</label>
              <input type="text" id="firstname" name="firstname" required />
            </div>
            <div>
              <label htmlFor="lastname">Last Name:</label>
              <input type="text" id="lastname" name="lastname" required />
            </div>
            <div>
              <label htmlFor="mobile">Mobile:</label>
              <input type="text" id="mobile" name="mobile" required />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div>
              <label htmlFor="artist">Artist:</label>
              <input type="text" id="artist" name="artist" required />
            </div>
            <div>
              <label htmlFor="album">Album:</label>
              <input type="text" id="album" name="album" required />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
