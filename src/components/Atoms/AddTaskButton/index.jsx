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
  width: 126px;
  height: 24px;
  border-radius: 12px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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
  padding: 0;
  border: none;
  background-color: transparent;

  &:hover > ${HoverCircle} {
    background-color: ${COLOR.GREEN};
    opacity: 0.2;
  }
`;

const Img = styled.img`
  width: 20px;
  height: 20px;
  margin-left: 6px;
`;

const Mess = styled.p`
  padding: 0 6px 0 10px;
  margin: 0;
  ${TEXT.S}
  font-family: ${FONTFAMILY.NOTO_SANS};
  color: ${COLOR.GREEN};
`;

export default AddTaskButton;
