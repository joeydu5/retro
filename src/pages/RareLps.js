import React from "react";
import RareLpsCard from "../components/card/RareLpsCard";
import data from "./RareLps.json";
import "../style/style.css";

export default function RareLps() {
  return (
    <div className="rarelps flex-box">
      <div className="rarelps-left">
        <h1>Rare and Vintage Vinyl Records</h1>
        <p>
          More than a digitally perfect CD, and way more than a compressed audio
          file downloaded to a portable device, a vinyl record is a record, if
          you will, of an artist or genre at a particular moment in time. From
          the pantheon of 1950s jazz to the Psych records of the 1960s, vintage
          vinyl records in their original jackets deliver sound as well as
          sensibility. No wonder contemporary artists like Pearl Jam and
          Radiohead insist on releasing their new work in a variety of media,
          with vinyl at the top of the list.{" "}
        </p>
        <p>
          Vinyl records were not the first form of analog sound recordings.
          Cylinders came first, invented by Thomas Edison in 1877. Edison did a
          great many things right, but his phonograph cylinders were bulky and
          expensive to produce, so in 1887, Emile Berliner invented a gramophone
          that could play flat discs. By 1929, the cylinder was dead.
        </p>
        <p>
          The earliest records were not even made of vinyl. Some were fashioned
          of hard rubber but most were pressed out of shellac, which was a
          mixture of resin and fiber (cotton was commonly used). Shellac records
          had their drawbacks (they were so brittle that if you dropped one it
          was likely to crack or shatter), but the format lasted until about
          1950 when vinyl finally took over.
        </p>
        <p>
          The first vinyl records had actually been manufactured by RCA many
          years before, in 1930. Those discs were 12 inches in diameter and
          meant to be played at 33 1/3 revolutions per minute, or RPM. Although
          vinyl records generated a lot less playback noise than shellac, the
          Great Depression was no time to be introducing a new entertainment
          product with limited manufacturer support, so vinyl didn’t catch on
          then.
        </p>
      </div>
      <div className="rarelps-right">
        {data.map((each) => {
          return (
            <>
              <RareLpsCard each={each} key={each.album} />
            </>
          );
        })}
      </div>
    </div>
  );
}
