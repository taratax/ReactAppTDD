import type { Meta, StoryObj } from "@storybook/react";
import { SignupPage } from "../pages/signup/SignupPage";
import { withRouter } from "storybook-addon-remix-react-router";

const meta: Meta<typeof SignupPage> = {
  title: "SignupPage/SignupPage",
  component: SignupPage,
  decorators: [withRouter],
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: {
      control: "color",
      description:
        "please change the background color within the purple spectrum",
      table: {
        defaultValue: { summary: "#a34646" },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof SignupPage>;

export const Basic: Story = {
  args: {
    backgroundColor: "#a34646",
  },
};
