import React from "react";
import CheckBox from "./index";

export default {
  component: CheckBox,
  title: "Atoms/CheckBox",
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
};

const onClick = () => {
  console.log("clicked!!!");
};

const Template = (args) => <CheckBox {...args} />;

export const Default = Template.bind({});
Default.args = {
  onClick: onClick,
};
