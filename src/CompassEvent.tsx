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

export function CompassEvent({ degreeUpdateRate, headingValue }: CompassEventProps<CustomStyle>): any {
    useEffect(() => {
        if (headingValue.status !== "available") {
            return;
        }

        CompassHeading.start(degreeUpdateRate, ({ heading, accuracy }: any) => {
            const bigValue = new Big(heading).round();
            console.debug("CompassHeading: ", heading, accuracy);
            headingValue.setValue(bigValue);
        });

        return () => {
            CompassHeading.stop();
        };
    }, [headingValue.status, degreeUpdateRate]);

    return null;
}
