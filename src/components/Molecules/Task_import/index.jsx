import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color";
import TEXT from "../../../variables/texts";

import CheckBox from "../../Atoms/CheckBox";
import Input from "../../Atoms/Input";
import EditButton from "../../Atoms/EditButton";

const Task = ({ checkOnClick, onEditComplete, defaultValue = undefined }) => {
  const [isOnEdit, setIsOnEdit] = useState(false);

  if (isOnEdit) {
    return (
      <StyledTask>
        <CheckBox onClick={checkOnClick} />
        <Input onEditComplete={onEditComplete} defaultValue={defaultValue} />
      </StyledTask>
    );
  } else {
    return (
      <StyledTask>
        <CheckBox onClick={checkOnClick} />
        <TaskTextWrapper>
          <p>{defaultValue}</p>
        </TaskTextWrapper>
        <EditButton onClick={() => setIsOnEdit(true)} />
      </StyledTask>
    );
  }
};

const TaskTextWrapper = styled.div`
  width: 184px;
`;

const StyledTask = styled.div`
  width: 256px;
  height: 24px;
  display: flex;
  gap: 10px;
  padding: 2px 6px;
  & > ${TaskTextWrapper} {
    & > p {
      color: ${COLOR.LIGHT_GRAY};
      ${TEXT.S}
      font-weight: 500;
      margin: 0;
      ${({ isOnEdit }) => (isOnEdit ? `display:none` : `display:block`)};
    }
  }
`;
export default Task;
