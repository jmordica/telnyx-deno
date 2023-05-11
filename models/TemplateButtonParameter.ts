/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ButtonParameterType } from './ButtonParameterType.ts';

export type TemplateButtonParameter = {
    /**
     * Indicates the type of parameter for the button.
     */
    type: ButtonParameterType;
    /**
     * Required for quick_reply buttons. Developer-defined payload that will be returned when the button is clicked in addition to the display text on the button.
     */
    payload?: string;
    /**
     * Required for url buttons. Developer provided suffix that will be appended to a previously created dynamic URL button.
     */
    text?: string;
};

