import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './components/List';

interface IState {
  people: {
    name: string
    age: number
    url: string
    note?: string
  }[]
}

function App() {

  useEffect(() => {
    console.log('Loaded!');
  })

  // const [people, setPeople] = useState([{
  //   name: 'Murphy',
  //   url: "https://mikemurphyformn.com/",
  //   age: 36,
  //   note: "Murphy is our next governor, y'all!"
  // }, {
  //   name: 'Tyler',
  //   url: "https://junkfm.com",
  //   age: 35
  // }, {
  //   name: 'Steven',
  //   url: "",
  //   age: 39,
  //   note: "Dang Brazilian"
  // }]);

  const [people, setPeople] = useState<IState["people"]>([]);

console.log('people', people);

  return (
    <div className="App">
      <h1>People Invited to my Party</h1>

      <List people={people}/>

    <ul>
      {
        people.map((person) => {
          return (
            <li>Invited: {person.name}</li>
          )
        })
      }
    </ul>
      

    </div>
  );
}

export default App;
  