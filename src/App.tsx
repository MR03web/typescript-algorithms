import * as React from "react";
import euclideanAlgorithm from "./algorithms/math/euclidean-algorithm";

class App extends React.Component {
  public render() {
    return (
      <div>
        <h6>欧几里德算法</h6>
        <span>{euclideanAlgorithm(100, 15)}</span>
      </div>
    );
  }
}

export default App;
