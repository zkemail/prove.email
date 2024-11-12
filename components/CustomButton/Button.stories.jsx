import { Component } from "react";
import CustomButton from "./CustomButton";

export default {
    title: "Button",
    component: CustomButton,
}


export const ButtonTest = (args) => <CustomButton {...args} />
ButtonTest.args = {
    buttonLabel: "Test",
    filledIn: false,
    url: 'https://docs.prove.email'
}