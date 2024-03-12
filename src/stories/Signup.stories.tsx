import type { Meta, StoryObj } from "@storybook/react";
import { SignupPage } from "../pages/signup/SignupPage";

const meta = {
  component: SignupPage,
  title: "Signup page",
  tags: ["autodocs"],
} satisfies Meta<typeof SignupPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
    label: "Button",
  },
};
