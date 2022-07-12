import React from "react";
import AddTaskButton from "./index";

export default {
  component: AddTaskButton,
  title: "Atoms/AddTaskButton",
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
};

const onClick = () => {
  console.log("clicked!!!");
};
const Template = (args) => <AddTaskButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  onClick: onClick,
};
