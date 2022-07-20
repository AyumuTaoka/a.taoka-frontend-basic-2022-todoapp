import React from "react";
import Task_Import from "./index";

export default {
  component: Task_Import,
  title: "Molecules/Task_Import",
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
};

const editOnClick = (onEdit) => {
  if (onEdit) {
    onEdit = false;
  } else {
    onEdit = true;
  }
};

const onEditComplete = (value) => {
  console.log(value);
  console.log("clickeonEditCompleted!!!");
};

const Template = (args) => <Task_Import {...args} />;

export const Default = Template.bind({});
Default.args = {
  editOnClick: editOnClick,
  onEditComplete: onEditComplete,
  defaultValue: undefined,
};
