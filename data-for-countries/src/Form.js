import React from "react";

const Form = ({ handleChange }) => {
  return (
    <form>
      find countries <input type="search" onChange={handleChange} />
    </form>
  );
};

export default Form;
