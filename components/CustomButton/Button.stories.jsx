import { Component } from "react";
import CustomButton from "./CustomButton";

export default {
    title: "Button",
    component: Button,
}


export const ButtonTest = (args) => <Button {...args} />
ButtonTest.args = {
    buttonLabel: "Test",
    filledIn: false,
    url: 'https://zkemail.gitbook.io/zk-email'
}