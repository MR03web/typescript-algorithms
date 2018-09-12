import * as React from "react";
import selectionSort from "./algorithms/sorting/selection-sort";

class App extends React.Component {
  public render() {
    return (
      <div>
        <h6>选择排序</h6>
        <h4>{selectionSort([1, 2, 45, 456, 23])}</h4>
      </div>
    );
  }
}

export default App;
