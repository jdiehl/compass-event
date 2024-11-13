/**
 * This file was generated from CompassEvent.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { CSSProperties } from "react";
import { EditableValue } from "mendix";
import { Big } from "big.js";

export interface CompassEventProps<Style> {
    name: string;
    style: Style[];
    heading: EditableValue<Big>;
}

export interface CompassEventPreviewProps {
    /**
     * @deprecated Deprecated since version 9.18.0. Please use class property instead.
     */
    className: string;
    class: string;
    style: string;
    styleObject?: CSSProperties;
    readOnly: boolean;
    renderMode?: "design" | "xray" | "structure";
    heading: string;
    onHeadingChange: {} | null;
}
