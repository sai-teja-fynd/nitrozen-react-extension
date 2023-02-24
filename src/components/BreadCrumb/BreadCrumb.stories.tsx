import BreadCrumb from "./BreadCrumb";
import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from "react";


export default {
    title:"Components/BreadCrumb",
    component:BreadCrumb
} as ComponentMeta<typeof BreadCrumb>;

const Template:ComponentStory<typeof BreadCrumb> = () => <BreadCrumb/>;

export const BreadCrumb_demo = Template.bind({});

