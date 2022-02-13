import React from "react";
import { IState as Props } from "../App";

interface IProps {
  people: Props["people"];
  setPeople: React.Dispatch<React.SetStateAction<Props["people"]>>;
}


const Form: React.FC<IProps> = ({people, setPeople}) => {
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    console.log("change! Added:" + e.target.value);
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = (): void => {
    if (!input.name || !input.age || !input.url) {
      return;
    }

    setPeople([
        ...people, 
        {
            name: input.name,
            age: parseInt(input.age),
            url: input.url,
            note: input.note
        }
    ])

    setInput({
        name: "",
    age: "",
    url: "",
    note: "",
    })

  };

  const [input, setInput] = React.useState({
    name: "",
    age: "",
    url: "",
    note: "",
  });
  return (
    <div className="AddToList">
      <input
        type="text"
        placeholder="Name"
        value={input.name}
        onChange={handleChange}
        name="name"
        className="AddToList-input"
      />

      <input
        type="number"
        placeholder="Age"
        value={input.age}
        onChange={handleChange}
        name="age"
        className="AddToList-input"
      />

      <input
        type="text"
        placeholder="Image URL"
        value={input.url}
        onChange={handleChange}
        name="url"
        className="AddToList-input"
      />

      <textarea
        placeholder="Notes"
        value={input.note}
        onChange={handleChange}
        name="note"
        className="AddToList-input"
      />

      <button className="AddToList-btn" onClick={handleClick}>
        Add To List
      </button>
    </div>
  );
};

export default Form;
