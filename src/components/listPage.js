import React, { Component } from "react";
import ResultItem from "./ResultItem";

class Listpage extends Component {
  id = 1;
  state = {};

  render() {
    const { ResultItem } = this.props;
    return (
      <ul className="list__itemview">
        {ResultItem &&
          ResultItem.map((itemdata, insertIndex) => {
            return (
              <ResultItem
                addr={insertIndex}
                name={itemdata.name}
                score={itemdata.score}
                lat={itemdata.lat}
                lon={itemdata.lon}
              />
            );
          })}
      </ul>
    );
  }
}
export default Listpage;