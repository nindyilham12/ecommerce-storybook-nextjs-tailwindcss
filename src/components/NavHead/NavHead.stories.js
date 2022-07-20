import React from 'react';

import NavHead from './NavHead';

export default {
  title: 'Task #1/NavHead',
  component: NavHead,
  argTypes: {
    bgColor: { control: 'text' }
  }
};

const Template = (args) => <NavHead {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Menu',
  bgColor: 'black'
};
