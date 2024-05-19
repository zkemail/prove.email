import { Component } from "react";
import Accordion from "./Accordion";

export default {
    title: "Accordion",
    component: Accordion,
}


export const AccordionTest = (args) => <Accordion {...args} />
AccordionTest.args = {
    title: "main question",
    contents: "expanded test about about about",
}