import * as React from "react";
import shellSort from "./algorithms/sorting/shell-sort";

const arr: number[] = [3, 1, 45, 2, 40, 47, 6, 4, 23, 5];
class App extends React.Component {
  public render() {
    return (
      <div>
        <h3>排序数组</h3>
        <h6>{arr.toString()}</h6>
        <h3>排序结果</h3>
        {shellSort(arr).map((el: number, i: number) => {
          return <h6 key={i}>{el}</h6>;
        })}
      </div>
    );
  }
}

export default App;
