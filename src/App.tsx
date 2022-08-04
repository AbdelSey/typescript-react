import React, { useState } from "react";
import List from "./components/List";

import "./App.css";

function App() {
  // use state is responsible for storing data inside a component ;

  interface IState {
    people: {
      name: string;
      age: number;
      url: string;
      note?: string;
    }[];
  }

  const [people, setPeople] = useState<IState["people"]>([]);

  return (
    <div className="App">
      <h1> People invited to my party </h1>
      <List people={people} />
    </div>
  );
}

export default App;
