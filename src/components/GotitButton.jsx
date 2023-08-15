import React from "react";

const GotitButton = (props) => {
  return (
    <div>
      <button type="button" onClick={props.actions.handleGotItButton}>
        Got It
      </button>
    </div>
  );
};

export default GotitButton;
