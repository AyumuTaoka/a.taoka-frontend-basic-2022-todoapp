import React from "react";
import Input from "./index";

export default {
  component: Input,
  title: "Atoms/Input",
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
};

const onEditComplete = () => {
  console.log("clickeonEditCompleted!!!");
};

const Template = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  onEditComplete: onEditComplete,
  defaultValue: undefined,
};
