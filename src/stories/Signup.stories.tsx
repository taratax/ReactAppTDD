import type { Meta, StoryObj } from "@storybook/react";
import { SignupPage } from "../pages/signup/SignupPage";
import { withRouter } from "storybook-addon-remix-react-router";

const meta: Meta<typeof SignupPage> = {
  component: SignupPage,
  decorators: [withRouter],
};

export default meta;
type Story = StoryObj<typeof SignupPage>;

export const Basic: Story = {};
