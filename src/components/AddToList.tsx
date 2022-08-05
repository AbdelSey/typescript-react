import React, { useState } from "react";
import { IState as Props } from "../App";

interface IProps {
  people: Props["people"];
  setPeople: React.Dispatch<React.SetStateAction<Props["people"]>>;
}

const AddToList: React.FC<IProps> = ({ people, setPeople }) => {
  const [input, setInput] = useState({
    name: "",
    age: "",
    url: "",
    note: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = (): void => {
    if (!input.name || !input.age || !input.url) {
      return alert("Please fill in all fields");
    }
    setPeople([
      ...people,
      {
        name: input.name,
        age: Number(input.age),
        url: input.url,
        note: input.note,
      },
    ]);
    setInput({
      name: "",
      age: "",
      url: "",
      note: "",
    });
  };

  return (
    <div className="AddToList">
      <input
        type="text"
        className="AddToList-input"
        placeholder="Name"
        value={input.name}
        onChange={handleChange}
        name="name"
      />
      <input
        type="number"
        className="AddToList-input"
        placeholder="Age"
        value={input.age}
        onChange={handleChange}
        name="age"
      />
      <input
        type="text"
        className="AddToList-input"
        placeholder="Image URL"
        value={input.url}
        onChange={handleChange}
        name="url"
      />
      <textarea
        className="AddToList-input"
        placeholder="Note"
        value={input.note}
        onChange={handleChange}
        name="note"
      />
      <button className="AddToList-btn" onClick={handleClick}>
        Add To List
      </button>
    </div>
  );
};

export default AddToList;
