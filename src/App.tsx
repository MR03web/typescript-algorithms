import * as React from "react";
import insertionSort from "./algorithms/sorting/insertion-sort";

const arr: number[] = [3, 1, 45, 1, 45, 47, 6, 4, 23];
class App extends React.Component {
  public render() {
    return (
      <div>
        <h6>选择排序</h6>
        <h6>{arr.toString()}</h6>
        {insertionSort(arr).map((el: number, i: number) => {
          return <h6 key={i}>{el}</h6>;
        })}
      </div>
    );
  }
}

export default App;
