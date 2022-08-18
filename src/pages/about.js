import React from "react";

const about = (props) => {
  return (
    <div className={`text-${props.mode === "light" ? "dark" : "light"}`}>
      <h1 style={{ marginTop: "10px", textAlign: "center" }}> About Texti</h1>
      <p>
        Online text tools is a collection of useful text processing utilities.
        All text tools are simple, free and easy to use. Just the utilities that
        work right in your browser. And all utilities work exactly the same way
        — load text, get result.
      </p>
      <p>
        A very handy online text tool where you can change between lower case
        and upper case letters, where you can capitalize, uncapitalize, convert
        to mix case and manipulate your text.
      </p>
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      <p>&nbsp;</p>
    </div>
  );
};

export default about;
