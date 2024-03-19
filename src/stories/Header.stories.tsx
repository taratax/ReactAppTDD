import type { Meta, StoryObj } from "@storybook/react";
import { withRouter } from "storybook-addon-remix-react-router";
import { Header } from "../components/header/Header";

const meta: Meta<typeof Header> = {
  title: "Header/Header",
  component: Header,
  decorators: [withRouter],
  tags: ["autodocs"],
  args: {
    heading: "test header",
    paragraph: "test paragraph",
    linkName: "test linkName",
    linkUrl: "test urls",
  },
};

export default meta;

type Story = StoryObj<typeof Header>;

export const Basic: Story = {};
export const Login: Story = {
  args: {
    heading: "Signup to create account",
    paragraph: "Already have account?",
    linkName: "Login",
    linkUrl: "/",
  },
  parameters: {
    docs: {
      description: {
        story: "This is the signup page header component",
      },
    },
  },
};

export const Signup: Story = {
  args: {
    ...Login.args,
    paragraph: "Do not have an account yet?",
    linkName: "Signup",
    linkUrl: "/signup",
  },
  parameters: {
    docs: {
      ...Login.parameters?.docs,
      linkName: "Signup",
      linkUrl: "/Signup",
    },
  },
};
