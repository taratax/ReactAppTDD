import type { Meta, StoryObj } from "@storybook/react";
import { withRouter } from "storybook-addon-remix-react-router";

import { Header } from "../components/header/Header";

// export default {
//   title: 'User Profile',
//   render: () => <Header />,
//   decorators: [withRouter],
//   parameters: {
//     reactRouter: reactRouterParameters({
//       location: {
//         pathParams: { userId: '42' },
//       },
//       routing: { path: '/users/:userId' },
//     }),
//   },
// };

const meta: Meta<typeof Header> = {
  component: Header,
  decorators: [withRouter],
};

export default meta;

type Story = StoryObj<typeof Header>;

export const Basic: Story = {};
export const Primary: Story = {
  args: {
    heading: "Signup to create account",
    paragraph: "Already have account?",
    linkName: "Login",
    linkUrl: "/",
  },
};
