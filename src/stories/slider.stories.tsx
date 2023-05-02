import Sliders, { SliderProps } from "../ComponentsS/Molecules/slider";
import { useState } from "react";

export default {
  title: "Molecules",
  component: Sliders,
  tags: ["autodocs"],
  argTypes: {
    initialValue: {
      control: { type: "number" },
      description: "Initial value of slider",
      default: 0,
    },
    onChange: {
      action: "Value Changed",
      description: "Value Changed When Slider Slides",
    },
  },
};

export const Slider = (args: SliderProps) => {
  const [value, setValue] = useState(args.initialValue);
  const handleChange = (newValue: number) => {
    setValue(newValue);
    args.onChange?.(newValue);
  };
  return <Sliders {...args} initialValue={value} onChange={handleChange} />;
};
