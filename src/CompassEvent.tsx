import { useEffect } from "react";
import { TextStyle, ViewStyle } from "react-native";
// @ts-ignore
import CompassHeading from "react-native-compass-heading";

import { Style } from "@mendix/pluggable-widgets-tools";

import { CompassEventProps } from "../typings/CompassEventProps";
import Big from "big.js";

export interface CustomStyle extends Style {
    container: ViewStyle;
    label: TextStyle;
}

export function CompassEvent({ heading }: CompassEventProps<CustomStyle>): any {
    useEffect(() => {
        const degree_update_rate = 3;

        CompassHeading.start(degree_update_rate, (update: any) => {
            console.info("CompassHeading: ", update.heading, update.accuracy);
            heading.setValue(new Big(update.heading));
        });

        return () => {
            CompassHeading.stop();
        };
    }, []);

    return null;
}
