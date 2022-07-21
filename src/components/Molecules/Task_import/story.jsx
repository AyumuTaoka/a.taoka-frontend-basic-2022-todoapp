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

const checkOnClick = () => {
  console.log("task completed");
};

const onEditComplete = (value) => {
  console.log("taskname changed: " + value);
};

const Template = (args) => <Task_Import {...args} />;

export const Default = Template.bind({});
Default.args = {
  checkOnClick: checkOnClick,
  onEditComplete: onEditComplete,
  defaultValue: "taskname",
};
