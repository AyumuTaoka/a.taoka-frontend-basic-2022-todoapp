import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color";
import TEXT from "../../../variables/texts";
import FONTFAMILY from "../../../variables/font_family";

const Input = ({ onEditComplete, defaultValue }) => {
  const ref = useRef(null);

  useEffect(() => {
    let value = null;
    if (defaultValue == null) {
      value = "";
    } else {
      value = defaultValue;
    }

    ref.current.focus();
  }, []);

  const handleEnter = (e) => {
    if (e.key == "Enter") {
      e.preventDefault();
      onEditComplete();
    }
  };

  return (
    <StyleldInput
      ref={ref}
      onBlur={onEditComplete}
      onKeyPress={(e) => handleEnter(e)}
    />
  );
};

const StyleldInput = styled.input`
  width: 232px;
  height: 20px;
  padding: 0 4px;
  background-color: ${COLOR.BLACK};
  color: ${COLOR.LIGHT_GRAY};
  font-family: ${FONTFAMILY.NOTO_SANS};
  ${TEXT.S}
  font-weight: 500;
  border: none;
  border-radius: 2px;
  outline: none;
`;

export default Input;
