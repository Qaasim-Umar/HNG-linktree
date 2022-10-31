import React from "react";
import "./Link.css";

const link = ({name}) => {
  return (
    <div className="link">
      {" "}
      <a href=""> {name} </a>{" "}
    </div>
  );
};

export default link;
