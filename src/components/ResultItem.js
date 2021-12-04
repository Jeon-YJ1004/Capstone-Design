import React from "react";

function ResultItem({ name, addr, score, lat,lon}) {
  return (
    <li className="component component--item_card" addr={addr}>
      <p>
        카페명 : <span>{name}</span>
      </p>
      <p>위치 : {addr}</p>
      <p>평점 :{score}</p>
    </li>
  );
}
export default ResultItem;
