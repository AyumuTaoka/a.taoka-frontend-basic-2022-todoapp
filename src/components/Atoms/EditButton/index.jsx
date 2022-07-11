import React from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color";
import pencil from "../../../assets/svg/pencil.svg";

const EditButton = (props) => {
  return (
    <StyledBtn onClick={props.onClick}>
      <HoverCircle></HoverCircle>
      <Img src={pencil} />
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
  ${StyledBtn}:hover > & {
    background-color: ${COLOR.LIGHT_GRAY};
    opacity: 0.2;
  }
`;

export default EditButton;
