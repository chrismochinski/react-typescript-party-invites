import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import List from "./components/List";
import Form from "./components/Form";

export interface IState {
  people: {
    name: string;
    age: number;
    url: string;
    note?: string;
  }[];
}

function App() {
  useEffect(() => {
    console.log("Loaded!");
  });

  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "Murphy",
      url: "data:image/jpeg;base64,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",
      age: 36,
      note: "Murphy is our next governor, y'all!",
    },
    {
      name: "Tyler",
      url: "data:image/jpeg;base64,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",
      age: 35,
    },
    {
      name: "Steven",
      url: "data:image/jpeg;base64,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",
      age: 39,
      note: "Dang Brazilian",
    },
  ]);

  console.log("people", people);

  return (
    <div className="App">
      <h1>People Invited to my Party</h1>

      <List people={people} />
      <Form people={people} setPeople={setPeople} />
    </div>
  );
}

export default App;
