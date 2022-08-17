import React, { useState } from "react";
import { loremIpsum } from "react-lorem-ipsum";

const initialState = {
  text: "Enter Text Here",
};

export default function Form() {
  const [text, setText] = useState(initialState.text);

  const handleClear = () => {
    let newText = "";
    setText(newText);
  };

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleCamelCase = () => {
    let newText = text
      .toLowerCase()
      .replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
    setText(newText);
  };

  const handleCapCase = () => {
    const arr = text.split(" ");
    for (var i = 0; i < arr.length; i++) {
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }

    const newText = arr.join(" ");
    setText(newText);
  };

  const handleGenrateText = () => {
    let count = 2;
    let newText = loremIpsum({ p: count });
    setText(newText.toString());
  };

  const handleOnChange = (e) => {
    setText(e.target.value);
  };
  return (
    <>
      <div>
        <h1>Enter The Text to Analyze</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            //placeholder={text}
            value={text}
            id="textForm"
            rows="8"
            onChange={handleOnChange}
          ></textarea>
        </div>
        <button
          type="button"
          className="btn btn-danger mx-2"
          onClick={handleClear}
        >
          Clear
        </button>
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleUpClick}
        >
          Convert to Uppercase
        </button>
        <button
          type="button"
          className="btn btn-primary mx-2"
          onClick={handleLoClick}
        >
          Convert to LowerCase
        </button>
        <button
          type="button"
          className="btn btn-primary mx-2"
          onClick={handleCamelCase}
        >
          Convert to Camel Case
        </button>
        <button
          type="button"
          className="btn btn-primary mx-2"
          onClick={handleCapCase}
        >
          Capitalize Case
        </button>
        <button
          type="button"
          className="btn btn-primary mx-2"
          onClick={handleGenrateText}
        >
          Generate Lorem Text
        </button>
      </div>
      <div className="container my-3">
        <h2> Text Summary</h2>
        <p>
          {text === "" ? "0" : text.trim().split(" ").length}{" "}
          {text.trim().split(" ").length === 1 ? "word" : "words"} and{" "}
          {text.length} Characters
        </p>
        <p>
          {" "}
          {text === "" ? "0" : 0.008 * text.split(" ").length} Minutes Of Read
        </p>
        <h2>Preview:</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
