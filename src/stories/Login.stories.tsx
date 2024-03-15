import type { Meta, StoryObj } from "@storybook/react";
import { LoginPage } from "../pages/login/LoginPage";
import { withRouter } from "storybook-addon-remix-react-router";

const meta: Meta<typeof LoginPage> = {
  component: LoginPage,
  decorators: [withRouter],
};

export default meta;
type Story = StoryObj<typeof LoginPage>;

export const Basic: Story = {};
