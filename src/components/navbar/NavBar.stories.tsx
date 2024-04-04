import type { Meta, StoryObj } from "@storybook/react";
import NavBar from "./NavBar";
import { withRouter } from "storybook-addon-remix-react-router";

const meta: Meta<typeof NavBar> = {
  title: "Components/NavBar",
  tags: ["autodocs"],
  component: NavBar,
  decorators: [withRouter],
  argTypes: {
    color: {
      control: "color",
      description: "background color",
      table: {
        defaultValue: { summary: "#a34646" },
      },
    },
    textColor: {
      control: "color",
      description: "text color of links",
      table: {
        defaultValue: { summary: "#ffffff" },
      },
    },
    guideTextColor: {
      control: "color",
      description: "text color for main Link",
      table: {
        defaultValue: { summary: "#ffffff" },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof NavBar>;

export const Basic: Story = {};
