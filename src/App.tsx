import * as React from "react";
import selectionSort from "./algorithms/sorting/selection-sort";

class App extends React.Component {
  public render() {
    return (
      <div>
        <h6>选择排序</h6>
        <h6>{[3, 45, 1, 45, 47, 6, 4, 23].toString()}</h6>
        {selectionSort([3, 45, 1, 45, 47, 6, 4, 23]).map((el: number, i: number) => {
          return <h6 key={i}>{el}</h6>;
        })}
      </div>
    );
  }
}

export default App;
