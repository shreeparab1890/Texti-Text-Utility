import React, { useState } from "react";
import { loremIpsum } from "react-lorem-ipsum";

const initialState = {
  text: "Enter Text Here",
};

export default function Form(props) {
  const [text, setText] = useState(initialState.text);
  const [stop, setStop] = useState("");

  const handleClear = () => {
    setText("");
    setStop("");
  };

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    setStop("");
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    setStop("");
  };

  const handleCamelCase = () => {
    let newText = text
      .toLowerCase()
      .replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
    setText(newText);
    setStop("");
  };

  const handleCapCase = () => {
    const arr = text.split(" ");
    for (var i = 0; i < arr.length; i++) {
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }

    const newText = arr.join(" ");
    setText(newText);
    setStop("");
  };

  const handleAltCase = () => {
    var midText = text.toLowerCase().split("");
    console.log(midText);
    for (var i = 0; i < midText.length; i += 2) {
      midText[i] = midText[i].toUpperCase();
      console.log(midText[i]);
    }
    const newText = midText.join("");
    setText(newText);
    setStop("");
  };

  const handleSenCase = () => {
    let newText = text.charAt(0).toUpperCase() + text.slice(1);
    setText(newText);
    setStop("");
  };

  const handleTitleCase = () => {
    let newText = text.replace(/\w\S*/g, function (t) {
      return t.charAt(0).toUpperCase() + t.substr(1).toLowerCase();
    });
    setText(newText);
    setStop("");
  };

  const handleGenrateText = () => {
    let count = 2;
    let newText = loremIpsum({ p: count });
    setText(newText.toString());
    setStop("");
  };

  const handleSplit = () => {
    let newText = text.split(" ");
    setText(newText.join("\r\n"));
    setStop("");
  };

  const handleJoin = () => {
    let newText = "";
    if (text.includes("\r\n")) {
      newText = text.split("\r\n").join(" ");
    } else {
      newText = text.split("\n").join(" ");
    }
    setText(newText);
    setStop("");
  };

  const handleReverse = () => {
    let newText = text.split("").reverse().join("");
    setText(newText);
    setStop("");
  };

  const handleRemoveEmpty = () => {
    let regex = /^\s*$(?:\r\n?|\n)/gm;
    let newText = text.replace(regex, "");
    setText(newText);
    setStop("");
  };

  const handleDuplicateLines = () => {
    const newLineExpression = /\r\n|\n\r|\n|\r/g;
    let newText = text
      .split(newLineExpression)
      .filter((item, index, array) => array.indexOf(item) === index)
      .join("\n");
    setText(newText);
    setStop("");
  };

  const handleDuplicateWords = () => {
    let newText = text
      .split(" ")
      .filter(function (item, i, allItems) {
        return i === allItems.indexOf(item);
      })
      .join(" ");
    setText(newText);
    setStop("");
  };

  const handleStopWord = () => {
    const stopwords = [
      "i",
      "me",
      "my",
      "myself",
      "we",
      "our",
      "ours",
      "ourselves",
      "you",
      "your",
      "yours",
      "yourself",
      "yourselves",
      "he",
      "him",
      "his",
      "himself",
      "she",
      "her",
      "hers",
      "herself",
      "it",
      "its",
      "itself",
      "the",
      "they",
      "them",
      "their",
      "theirs",
      "themselves",
      "what",
      "which",
      "who",
      "whom",
      "this",
      "that",
      "these",
      "those",
      "am",
      "is",
      "are",
      "was",
      "were",
      "be",
      "been",
      "being",
      "have",
      "has",
      "had",
      "having",
      "do",
      "does",
      "did",
      "doing",
      "a",
      "an",
      "the",
      "and",
      "but",
      "if",
      "or",
      "because",
      "as",
      "until",
      "while",
      "of",
      "at",
      "by",
      "for",
      "with",
      "about",
      "against",
      "between",
      "into",
      "through",
      "during",
      "before",
      "after",
      "above",
      "below",
      "to",
      "from",
      "up",
      "down",
      "in",
      "out",
      "on",
      "off",
      "over",
      "under",
      "again",
      "further",
      "then",
      "once",
      "here",
      "there",
      "when",
      "where",
      "why",
      "how",
      "all",
      "any",
      "both",
      "each",
      "few",
      "more",
      "most",
      "other",
      "some",
      "such",
      "no",
      "nor",
      "not",
      "only",
      "own",
      "same",
      "so",
      "than",
      "too",
      "very",
      "s",
      "t",
      "can",
      "will",
      "just",
      "don",
      "should",
      "now",
    ];

    let res = [];
    let words = text.toLowerCase().split(" ");
    for (let i = 0; i < words.length; i++) {
      let word_clean = words[i].split(".").join("");
      if (!stopwords.includes(word_clean)) {
        res.push(word_clean);
      }
    }
    let newText = res.join(" ");
    setText(newText);
    setStop(stopwords.join(" "));
  };

  const handleExtraSpaces = (e) => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };

  const handleOnChange = (e) => {
    setText(e.target.value);
  };
  return (
    <>
      <div>
        <div className="row">
          <div className="col-6">
            <h1 className={`text-${props.mode === "light" ? "dark" : "light"}`}>
              Enter The Text to Analyze
            </h1>
          </div>

          <div className="col-6" style={{ textAlign: "right" }}>
            <button
              type="button"
              className="btn btn-light my-2 mx-2"
              onClick={() => {
                navigator.clipboard.writeText(text);
              }}
            >
              Copy to Clipboard
            </button>
            <button
              type="button"
              className="btn btn-danger my-2 mx-2"
              onClick={handleClear}
            >
              Clear
            </button>
          </div>
        </div>

        <div className="mb-3">
          <textarea
            className="form-control"
            //placeholder={text}
            value={text}
            id="textForm"
            rows="8"
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
          ></textarea>
        </div>
        <div className="container">
          <h3 className={`text-${props.mode === "light" ? "dark" : "light"}`}>
            {stop ? "Stopwords: " + stop.split(" ").length + " words" : ""}
          </h3>
          <p className={`text-${props.mode === "light" ? "dark" : "light"}`}>
            {stop}
          </p>
        </div>

        <button
          type="button"
          className={`btn btn-${props.mode === "dark" ? "dark" : "primary"}`}
          onClick={handleUpClick}
        >
          to UPPERCASE
        </button>
        <button
          type="button"
          className={`btn btn-${
            props.mode === "dark" ? "dark" : "primary"
          } my-2 mx-2`}
          onClick={handleLoClick}
        >
          to lowercase
        </button>
        <button
          type="button"
          className={`btn btn-${
            props.mode === "dark" ? "dark" : "primary"
          } my-2 mx-2`}
          onClick={handleCamelCase}
        >
          to camelCase
        </button>
        <button
          type="button"
          className={`btn btn-${
            props.mode === "dark" ? "dark" : "primary"
          } my-2 mx-2`}
          onClick={handleCapCase}
        >
          to Capitalize Case
        </button>
        <button
          type="button"
          className={`btn btn-${
            props.mode === "dark" ? "dark" : "primary"
          } my-2 mx-2`}
          onClick={handleAltCase}
        >
          to aLtErNaTe CaSe
        </button>
        <button
          type="button"
          className={`btn btn-${
            props.mode === "dark" ? "dark" : "primary"
          } my-2 mx-2`}
          onClick={handleSenCase}
        >
          to Sentence case
        </button>
        <button
          type="button"
          className={`btn btn-${
            props.mode === "dark" ? "dark" : "primary"
          } my-2 mx-2`}
          onClick={handleTitleCase}
        >
          to Title Case
        </button>
        <button
          type="button"
          className={`btn btn-${
            props.mode === "dark" ? "dark" : "primary"
          } my-2 mx-2`}
          onClick={handleSplit}
        >
          Split Text
        </button>
        <button
          type="button"
          className={`btn btn-${
            props.mode === "dark" ? "dark" : "primary"
          } my-2 mx-2`}
          onClick={handleJoin}
        >
          Join Text
        </button>
        <button
          type="button"
          className={`btn btn-${
            props.mode === "dark" ? "dark" : "primary"
          } my-2 mx-2`}
          onClick={handleReverse}
        >
          Reverse Text
        </button>
        <button
          type="button"
          className={`btn btn-${
            props.mode === "dark" ? "dark" : "primary"
          } my-2 mx-2`}
          onClick={handleRemoveEmpty}
        >
          Remove Empty LInes
        </button>
        <button
          type="button"
          className={`btn btn-${
            props.mode === "dark" ? "dark" : "primary"
          } my-2 mx-2`}
          onClick={handleDuplicateLines}
        >
          Remove Duplicate Lines
        </button>
        <button
          type="button"
          className={`btn btn-${
            props.mode === "dark" ? "dark" : "primary"
          } my-2 mx-2`}
          onClick={handleDuplicateWords}
        >
          Remove Duplicate Words
        </button>
        <button
          type="button"
          className={`btn btn-${
            props.mode === "dark" ? "dark" : "primary"
          } my-2 mx-2`}
          onClick={handleExtraSpaces}
        >
          Remove Extra Space
        </button>
        <button
          type="button"
          className={`btn btn-${
            props.mode === "dark" ? "dark" : "primary"
          } my-2 mx-2`}
          onClick={handleStopWord}
        >
          Remove Stop Words
        </button>
        <button
          type="button"
          className={`btn btn-${
            props.mode === "dark" ? "dark" : "primary"
          } my-2 mx-2`}
          onClick={handleGenrateText}
        >
          Generate Text
        </button>
      </div>
      <div
        className={`container my-3 text-${
          props.mode === "light" ? "dark" : "light"
        }`}
      >
        <h2> Text Summary</h2>
        <p>
          {text === "" ? "0" : text.trim().split(" ").length}{" "}
          {text.trim().split(" ").length === 1 ? "word" : "words"} and{" "}
          {text.length} Characters and{" "}
          {text === "" ? "0" : text.split(/\r\n|\r|\n/).length} Lines
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
