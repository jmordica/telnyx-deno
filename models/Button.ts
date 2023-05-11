/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ButtonParameter } from './ButtonParameter.ts';

export type Button = {
    /**
     * Type of button being created.
     */
    sub_type: any;
    /**
     * Position index of the button. You can have up to 3 buttons using index values of 0-2.
     */
    index: number;
    /**
     * The parameters for the button, which are set at creation time in your Business Manager.
     */
    parameters: Array<ButtonParameter>;
};

