import HelloWorld from "./HelloWorld";
import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from "react";


export default {
    title:"Components/HelloWorld",
    component:HelloWorld,
    argTypes:{
        text: {
            control: "text",
            description: `This property sets the width of the alert.`,
            defaultValue:"This is default value"
        },
    }
} as ComponentMeta<typeof HelloWorld>;

const Template:ComponentStory<typeof HelloWorld> = (args) => <HelloWorld {...args}/>;

export const HelloWorld_demo = Template.bind({});
HelloWorld_demo.args = {
    text:""
}

