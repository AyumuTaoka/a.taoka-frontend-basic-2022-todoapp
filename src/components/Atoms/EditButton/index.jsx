import React from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color";
import pencil from "../../../assets/svg/pencil.svg";

const EditButton = ({ onClick }) => {
  return (
    <StyledBtn onClick={onClick}>
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

export default EditButton;
