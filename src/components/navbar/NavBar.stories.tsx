import type { Meta, StoryObj } from "@storybook/react";
import NavBar from "./NavBar";
import { withRouter } from "storybook-addon-remix-react-router";

const meta: Meta<typeof NavBar> = {
  title: "Components/NavBar",
  tags: ["autodocs"],
  component: NavBar,
  decorators: [withRouter],
};

export default meta;
type Story = StoryObj<typeof NavBar>;

export const Basic: Story = {};
