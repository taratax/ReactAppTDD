import type { Meta, StoryObj } from "@storybook/react";
import { LoginPage } from "../pages/login/LoginPage";
import { withRouter } from "storybook-addon-remix-react-router";

const meta: Meta<typeof LoginPage> = {
  title: "LoginPage/Login",
  tags:['autodocs'],
  component: LoginPage,
  decorators: [withRouter],
  argTypes: {
    buttonStyleVersion: {
      control: 'select',
      options: ['style-button1','style-button2','style-button3'],
      description: 'Choose any of the options to see different versions of the button'
    },
    labelOfButton: {
      control: 'text',
      description: 'Pleate type text to display on the button',
      table: {
        
      }
    }
  }
};

export default meta;
type Story = StoryObj<typeof LoginPage>;

export const Basic: Story = {};
