import { Story } from '@storybook/react';
import React from 'react';
import Header, { IHeader } from './Header';



const Template: Story<IHeader> = (args) => <Header {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {},
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};

const story = {
  title: 'Example/Header',
  component: Header,
};

export default story;
