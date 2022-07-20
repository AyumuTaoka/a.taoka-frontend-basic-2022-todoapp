import React from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color";
import Check from "../../../assets/svg/check.svg";

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

export default CheckBox;
