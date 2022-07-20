import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color";
import TEXT from "../../../variables/texts";
import Check from "../../../assets/svg/check.svg";
import pencil from "../../../assets/svg/pencil.svg";

const Task = ({
  checkOnClick,
  onEditComplete,
  defaultValue = undefined,
  editOnClick,
}) => {
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
    <StyledTask>
      <StyledCheckBox onClick={checkOnClick}>
        <img src={Check} />
      </StyledCheckBox>
      <InputWrapper>
        <input
          ref={ref}
          onBlur={(e) => onEditComplete(e.target.value)}
          onKeyPress={handleKeyPress}
          defaultValue={defaultValue}
        />
      </InputWrapper>
      <p>taskname</p>
      <StyledBtn onClick={editOnClick}>
        <HoverCircle />
        <Img src={pencil} />
      </StyledBtn>
    </StyledTask>
  );
};

const StyledTask = styled.div`
  display: flex;
  gap: 10px;
  padding: 2px 6px;
  & > p {
    color: ${COLOR.LIGHT_GRAY};
    ${TEXT.S}
    font-weight: 500;
    margin: 0;
  }
`;
const StyledCheckBox = styled.div`
  position: relative;
  width: 20px;
  height: 20px;
  border: 2px solid ${COLOR.LIGHT_GRAY};
  border-radius: 2px;
  & > img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 14px;
    display: none;
  }
  &:hover {
    cursor: pointer;
    & > img {
      display: block;
    }
  }
`;

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
const HoverCircle = styled.div`
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: transparent;
`;

const StyledBtn = styled.button`
  position: relative;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: none;
  background-color: transparent;

  &:hover > ${HoverCircle} {
    background-color: ${COLOR.LIGHT_GRAY};
    opacity: 0.2;
  }
`;

const Img = styled.img`
  position: absolute;
  width: 15px;
  height: 15px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export default Task;
