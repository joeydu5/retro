import React from "react";
import "../style/style.css";
import data from "./UsedRecords.json";
import RareLpsCard from "../components/card/RareLpsCard";

export default function UsedRecords() {
  return (
    <div className="usedrecords">
      <div className="used-firstrow">
        <h1>Exchange your old records for a good price</h1>
        <p>
          If you have too many old records that you think are a worth a bit of
          money, then get in touch with Sifters Records in Manchester. We can
          offer you an instant quote on them.We also sell second-hand records at
          affordable prices.
        </p>
        <h1>We buy both vintage and brand new records</h1>
        <p>
          Whether you have an old vintage record you want to cash-in or don't
          like a recently purchased record, sell it to us. In addition, we have
          a huge collection of music CDs, LPs and records from different genres
          and different eras. Pay us a visit and have a look around.
        </p>
      </div>
      <div className="used-secondrow">
        <h2>What's New?</h2>
      </div>
      <div className="used-thirdrow">
        {data.map((each) => {
          return (
            <>
              <RareLpsCard each={each} key={each.album} />
            </>
          );
        })}
      </div>
      <div className="used-fourthrow">
        <div className="used-secondrow">
          <h2>Welcome to Retro Vinyl Newtown, plenty of used records</h2>
        </div>

        <p>
          Specialist dealer in Rare and Collectable Vinyl Records, Out Of Print
          CD's and Music Memorabilia.We offer a large selection of items from
          the 1950's 1960's 1970's 1980's 1990's and 2000's. Genres include:
          Rock . Pop . Soul . Funk . Dance . Alternative . Indie . Metal . Punk
          . Psych . Progressive . Jazz . Beat . Power Pop . Audiophile . Blues .
          Folk . Reggae . Garage . Country & Western . Classical . World .
          Soundtracks.
        </p>
        <p>
          Our music memorabilia section includes sheet music, tour programs,
          concert tickets, posters, books, magazines, and promotional items. We
          have a large network of contacts and sources of supply, plus many
          unlisted items. So if you don't find it here, please Send your Want
          List WE BUY QUALITY RECORD COLLECTIONS. Please Contact us We hope that
          you will enjoy your visit to our site and that you will return
          regularly to view our ever changing stock. Thank you.
        </p>
      </div>
    </div>
  );
}
