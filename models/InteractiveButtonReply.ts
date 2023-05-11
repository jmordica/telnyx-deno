/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type InteractiveButtonReply = {
    /**
     * Button title. It cannot be an empty string and must be unique within the message. Emojis are supported, markdown is not.
     */
    title: string;
    /**
     * Unique identifier for your button. This ID is returned in the webhook when the button is clicked by the user. You cannot have leading or trailing spaces when setting the ID.
     */
    id: string;
};

