import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color";
import TEXT from "../../../variables/texts";
import Check from "../../../assets/svg/check.svg";
import pencil from "../../../assets/svg/pencil.svg";

const CheckBox = ({ onClick }) => {
  return (
    <StyledCheckBox onClick={onClick}>
      <img src={Check} />
    </StyledCheckBox>
  );
};

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

const EditButton = ({ editOnClick }) => {
  return (
    <StyledBtn onClick={editOnClick}>
      <HoverCircle />
      <Img src={pencil} />
    </StyledBtn>
  );
};

// HoverCircle→StyledBtnの順番でないと
// 親要素から子要素のスタイルを指定できないため以下の順番になっています。
// 参考(https://github.com/styled-components/styled-components/issues/3372#issuecomment-758119914)

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

const Task = () => {
  return (
    <StyledTask>
      <CheckBox />
      <Input />
      <p>taskname</p>
      <EditButton />
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

export default Task;
