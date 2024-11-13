import { ReactElement, createElement } from "react";
import { TextStyle, ViewStyle } from "react-native";

import { Style } from "@mendix/pluggable-widgets-tools";

import { HelloWorld } from "./components/HelloWorld";
import { CompassEventProps } from "../typings/CompassEventProps";

export interface CustomStyle extends Style {
    container: ViewStyle;
    label: TextStyle;
}

export function CompassEvent({ style, yourName }: CompassEventProps<CustomStyle>): ReactElement {
    return <HelloWorld name={yourName} style={style} />;
}
