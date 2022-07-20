import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color";
import TEXT from "../../../variables/texts";

import CheckBox from "../../Atoms/CheckBox";
import Input from "../../Atoms/Input";
import EditButton from "../../Atoms/EditButton";

//
//
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
