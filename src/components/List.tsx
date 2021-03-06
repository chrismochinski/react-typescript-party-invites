import React from "react";
import { IState as IProps } from '../App';


const List: React.FC<IProps> = ({ people }) => {
  const renderList = (): JSX.Element[] => {
    return people.map((person) => {
      return (
        <li className="List" key="person.url">
          <div className="List-header">
            <img className="List-img" src={person.url} alt={person.name} />
            <h2>{person.name}</h2>
            <p>{person.age} Years Old</p>
            <p className="List-note">{person.note}</p>
          </div>
        </li>
      );
    });
  };

  return (
    <div>
      <h2>I am a list</h2>
      <ul>{renderList()}</ul>
    </div>
  );
};

export default List;
