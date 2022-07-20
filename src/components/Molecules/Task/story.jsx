import React from "react";
import Task from "./index";

export default {
  component: Task,
  title: "Molecules/Task",
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

const Template = (args) => <Task {...args} />;

export const Default = Template.bind({});
Default.args = {
  editOnClick: editOnClick,
  onEditComplete: onEditComplete,
  defaultValue: undefined,
};
