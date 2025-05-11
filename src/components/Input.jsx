import React, { useState, useEffect } from "react";

function Input({ type, id, name, placeholder, value, onChange, validation }) {
  /*
    We have to put some watch effect here!
    Watch effect will watch the value and validate everytime
  */
  // const [inputValue, setInputValue] = useState("");

  const [error, setError] = useState("");

  useEffect(() => {
    if (validation) {
      const result = validation(value);

      if (result !== true) {
        setError(result);
      } else {
        setError("");
      }
    }
  }, [value]);

  return (
    <div>
      <input
        className="bg-[#23155b] text-[#817d8e]"
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        /* required */
      ></input>

      {error && <p className="errorMessages">{error}</p>}
    </div>
  );
}

export default Input;
