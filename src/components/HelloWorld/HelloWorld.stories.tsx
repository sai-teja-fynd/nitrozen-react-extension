import HelloWorld from "./HelloWorld";
import { ComponentStory, ComponentMeta } from '@storybook/react';


export default {
    title:"Components/HelloWorld",
    component:HelloWorld,
} as ComponentMeta<typeof HelloWorld>;

const Template:ComponentStory<typeof HelloWorld> = () => <HelloWorld/>;

export const HelloWorld_demo = Template.bind({});

