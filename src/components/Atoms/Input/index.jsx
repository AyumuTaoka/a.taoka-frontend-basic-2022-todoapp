import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color";
import TEXT from "../../../variables/texts";

const Input = ({ onEditComplete, defaultValue = undefined }) => {
  const ref = useRef(null);
  useEffect(() => {
    ref.current.focus();
  }, []);

  const handleKeyPress = (e) => {
    if (e.key == "Enter") {
      e.preventDefault();
      onEditComplete(e.target.value);
    }
  };

  return (
    <InputWrapper>
      <input
        ref={ref}
        onBlur={(e) => onEditComplete(e.target.value)}
        onKeyPress={handleKeyPress}
        defaultValue={defaultValue}
      />
    </InputWrapper>
  );
};

const InputWrapper = styled.div`
  width: 232px;
  height: 20px;
  & > input {
    width: 100%;
    height: 100%;
    padding: 0 4px;
    background-color: ${COLOR.BLACK};
    color: ${COLOR.LIGHT_GRAY};
    ${TEXT.S}
    font-weight: 500;
    border: none;
    border-radius: 2px;
    outline: none;
  }
`;

export default Input;
