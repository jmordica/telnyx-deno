/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ButtonParameter = {
    /**
     * Indicates the type of parameter for the button.
     */
    type: any;
    /**
     * Developer-defined payload that will be returned when the button is clicked in addition to the display text on the button. Required for quick_reply buttons.
     */
    payload?: any;
    /**
     * Developer provided suffix that will be appended to a previously created dynamic URL button. Required for url buttons.
     */
    text?: any;
};

