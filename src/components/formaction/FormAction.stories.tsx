// import type { Meta, StoryObj } from "@storybook/react";
// import { FormAction } from "./FormAction";

// const meta: Meta<typeof FormAction > = {
//     title: "FormAction/FormAction",
//     component: FormAction,
// }

// export default meta;

// type Story = StoryObj<typeof FormAction>;

// export const Basic: Story = {};


// FormAction.stories.tsx
import { StoryObj, Meta } from '@storybook/react';
import { FormAction, formActionProps } from './FormAction';

type Story = StoryObj<formActionProps>;

export default {
  title: 'FormActionButton/FormAction',
  component: FormAction,
  argTypes: {
    action: {
      control: 'select',
      options: ['submit', 'reset', 'button'],
    },
    text: {
      control: 'text',
    },
    // Demonstrates handling of functions in Storybook args
    handlesubmit: { action: 'handlesubmit' },
  },
} as Meta;

const Template: Story = (args: formActionProps) => <FormAction {...args} />;

export const SubmitButton = Template.bind({});
SubmitButton.args = {
  type: 'Button',
  action: 'submit',
  text: 'Submit',
  handlesubmit: (e) => {
    e.preventDefault(); // Prevents the default form action in the Storybook UI
    console.log('Form submitted');
  },
};

export const ResetButton = Template.bind({});
ResetButton.args = {
  type: 'Button',
  action: 'reset',
  text: 'Login',
  handlesubmit: (e) => {
    e.preventDefault(); // Prevents the default form action in the Storybook UI
    console.log('Form reset');
  },
};

export const ClickButton = Template ;
ClickButton.args = {
    type: "Button",
    action: "button",
    text: "Signup",
    handlesubmit: (e) => {
        e.preventDefault();
        console.log('Button clicked');
    }
}

export const InvisibleButton = Template.bind({});
InvisibleButton.args = {
  type: 'NotButton', // Assuming this means the button won't be rendered
  text: 'Invisible',
  handlesubmit: (e) => {
    e.preventDefault(); // Prevents the default form action in the Storybook UI
    console.log('Invisible action');
  },
};
