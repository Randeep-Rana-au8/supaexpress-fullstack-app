import React from "react";
import { Spinner } from "react-bootstrap";

const Loader = ({ variant, children }) => {
  return (
    <Spinner
      style={{ width: "100px", margin: "auto", height: "100px", display: "block" }}
      role="status"
      animation="border"
    >
      <span className="sr-only">Loading...</span>
    </Spinner>
  );
};

export default Loader;
