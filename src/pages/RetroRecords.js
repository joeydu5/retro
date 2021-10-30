import React from "react";
import data from "./RetroRecords.json";
import { useState } from "react";
import "../style/style.css";
import img1 from "../resources/images/record2.jpeg";

export default function RetroRecords() {
  const [selectRecord, setSelectRecord] = useState(false);
  const [selectDesc, setSelectDesc] = useState({
    id: "",
    cover: "",
    name: "",
    artist: "",
    year: "",
    price: "",
    description: "",
  });
  const imgClickHandler = (each) => {
    setSelectRecord(true);
    setSelectDesc(each);
  };

  const closeBtnHandler = () => {
    setSelectRecord(false);
  };
  return (
    <div className="retrorecords-main">
      {selectRecord && (
        <div className="modal">
          <div className="closeBtn" onClick={closeBtnHandler}>
            <p>CLOSE</p>
          </div>
          <div className="modal-img">
            <img src={selectDesc.cover} alt="this is the cover" />
          </div>
          <p>{selectDesc.description}</p>
        </div>
      )}
      <h1>The latest records</h1>
      <table>
        <tr className="table-th">
          <th>Cover</th>
          <th>Name</th>
          <th>Artist</th>
          <th>Released Year</th>
          <th>Price</th>
        </tr>
        {data.map((each) => {
          return (
            <tr key={each.id}>
              <td>
                <img
                  className="album-cover"
                  src={each.cover}
                  alt="this is the album cover"
                  onClick={() => imgClickHandler(each)}
                />
              </td>
              <td>{each.name}</td>
              <td>{each.artist}</td>
              <td>{each.year} </td>
              <td>{each.price}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}
