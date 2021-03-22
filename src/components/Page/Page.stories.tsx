import { Story } from '@storybook/react';
import React from 'react';
import * as HeaderStories from '../Header/Header.stories';
import Page, { IPage } from './Page';

const Template: Story<IPage> = (args) => <Page {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  ...HeaderStories.LoggedIn.args,
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {
  ...HeaderStories.LoggedOut.args,
};

const story = {
  title: 'Example/Page',
  component: Page,
};

export default story;
