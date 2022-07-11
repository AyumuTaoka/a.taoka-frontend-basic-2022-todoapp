import React from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color";
import pencil from "../../../assets/svg/pencil.svg";

const EditButton = (props) => {
  return (
    <StyledBtn onClick={props.onClick}>
      <Img src={pencil} />
      <HoverCircle></HoverCircle>
      {/* ↑HoverCircle, Imgの順番だと
      Imgにホバーした時、HoverCircleの背景色の設定ができず、
      背景色が元に戻ってしまうため
       Img, HoverCircleの順にしています*/}
    </StyledBtn>
  );
};

const StyledBtn = styled.button`
  position: relative;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: none;
  background-color: transparent;
  & > ${Img}:hover {
    + ${HoverCircle} {
      background-color: ${COLOR.WHITE};
      opacity: 0.2;
    }
  }
  & > ${HoverCircle}:hover {
    background-color: ${COLOR.WHITE};
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

export default EditButton;
