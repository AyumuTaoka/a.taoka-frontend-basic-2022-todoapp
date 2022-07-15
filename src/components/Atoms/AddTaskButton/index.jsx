import React from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color";
import TEXT from "../../../variables/texts";
import FONTFAMILY from "../../../variables/font_family";
import plus from "../../../assets/svg/plus.svg";

const AddTaskButton = ({ onClick }) => {
  return (
    <StyledBtn onClick={onClick}>
      <HoverCircle />
      <Img src={plus} />
      <Mess>タスクを追加</Mess>
    </StyledBtn>
  );
};

// HoverCircle→StyledBtnの順番でないと
// 親要素から子要素のスタイルを指定できないため以下の順番になっています。
// 参考(https://github.com/styled-components/styled-components/issues/3372#issuecomment-758119914)

const HoverCircle = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 12px;
  top: 0;
  left: 0;
  background-color: transparent;
`;

const StyledBtn = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  width: 126px;
  height: 24px;
  border-radius: 12px;
  padding: 0 6px;
  border: none;
  background-color: transparent;

  &:hover {
    cursor: pointer;
    & > ${HoverCircle} {
      background-color: ${COLOR.GREEN};
      opacity: 0.2;
    }
  }
`;

const Img = styled.img`
  width: 20px;
  height: 20px;
`;

const Mess = styled.p`
  margin: 0;
  ${TEXT.S}
  font-family: ${FONTFAMILY.NOTO_SANS};
  color: ${COLOR.GREEN};
`;

export default AddTaskButton;
