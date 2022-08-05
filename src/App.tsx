import React, { useState } from "react";
import List from "./components/List";
import "./App.css";
import AddToList from "./components/AddToList";

// when it comes to props we define interfaces

export interface IState {
  people: {
    name: string;
    age: number;
    url: string;
    note?: string;
  }[];
}

function App() {
  // use state is responsible for storing data inside a component ;

  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "Lebron James",
      url: "https://upload.wikimedia.org/wikipedia/commons/b/bf/LeBron_James_-_51959723161_%28cropped%29.jpg",
      age: 35,
      note: "i am the greatest player",
    },
  ]);

  return (
    <div className="App">
      <h1> People invited to my party </h1>
      <List people={people} />
      <AddToList people={people} setPeople={setPeople} />
    </div>
  );
}

export default App;
