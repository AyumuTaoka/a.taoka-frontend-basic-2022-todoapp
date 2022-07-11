import React from "react";
import EditButton from "./index";

export default {
  component: EditButton,
  title: "Atoms/EditButton",
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
};

const onClick = () => {
  console.log("clicked!!!");
};
const Template = (args) => <EditButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  onClick: onClick,
};
