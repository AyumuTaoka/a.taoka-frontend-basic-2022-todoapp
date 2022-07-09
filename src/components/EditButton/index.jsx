import React from "react";
import styled from "styled-components";
import COLOR from "../../variables/color";
import pencil from "../../assets/svg/pencil.svg";

const Example = () => {
  return (
    <StyledBtn onclick>
      <HoverCircle></HoverCircle>
      <Pencil src={pencil} />
    </StyledBtn>
  );
};

const StyledBtn = styled.button`
  position: relative;
`;

const HoverCircle = styled.div`
  width: 20px;
  height: 20px;
  background-color: ${COLOR.BLACK};
  border-radius: 50%;
`;

const Pencil = styled.img`
  width: 15px;
  height: 15px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export default Example;
