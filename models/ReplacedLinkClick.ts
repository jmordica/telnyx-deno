/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ReplacedLinkClick = {
    /**
     * Identifies the type of the resource.
     */
    record_type?: string;
    /**
     * The original link that was sent in the message.
     */
    url?: string;
    /**
     * Sending address (+E.164 formatted phone number, alphanumeric sender ID, or short code).
     */
    to?: string;
    /**
     * The message ID associated with the clicked link.
     */
    message_id?: string;
    /**
     * ISO 8601 formatted date indicating when the message request was received.
     */
    time_clicked?: string;
};

