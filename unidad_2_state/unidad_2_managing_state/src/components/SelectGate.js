import React from "react";

import { useState } from "react";

const SelectGate = ({
  inputValue,
  checkBoxValue,
}) => {

  const [selectValue, setSelectValue] = useState("OR");
  const selectHandler = (elem) => {
    setSelectValue(elem.target.value);
    ;
  };

  const setResult = () => {
    if (selectValue === "OR") {
      return(inputValue || checkBoxValue);
    } else if (selectValue === "AND") {
      return(inputValue && checkBoxValue);
    } else if (selectValue === "NAND") {
      return(1 - (inputValue && checkBoxValue));
    } else if (selectValue === "NOR") {
      return(1 - (inputValue || checkBoxValue));
    } else if (selectValue === "XOR") {
      return(inputValue ^ checkBoxValue);
    }
  };

  return (
    <div>
      <label for="selectGate">Compuerta lógica:</label>
      <select id="selectGate" value={selectValue} onChange={selectHandler}>
        <option value="OR">OR</option>
        <option value="AND">AND</option>
        <option value="NAND">NAND</option>
        <option value="NOR">NOR</option>
        <option value="XOR">XOR</option>
      </select>
      <div>
        <span>Salida: {setResult()}</span>
      </div>
    </div>
  );
};

export default SelectGate;
