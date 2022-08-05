import React from "react";
import "../App.css";
import { IState as IProps } from "../App";

const List: React.FC<IProps> = ({ people }) => {
  const renderList = (): JSX.Element[] => {
    return people.map((person, index) => {
      return (
        <li key={index}>
          <div className="List">
            <div className="List-header">
              <img className="List-img" src={person.url} alt={person.name} />
              <h2> {person.name}</h2>
            </div>
            <p> {person.age} years old </p>
            <p className="List-note">{person.note}</p>
          </div>
        </li>
      );
    });
  };

  return <ul>{renderList()}</ul>;
};

export default List;
