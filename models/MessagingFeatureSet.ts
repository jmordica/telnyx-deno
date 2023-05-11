/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * The set of features available for a specific messaging use case (SMS or MMS). Features
 * can vary depending on the characteristics the phone number, as well as its current
 * product configuration.
 *
 */
export type MessagingFeatureSet = {
    /**
     * Send messages to and receive messages from numbers in the same country.
     */
    domestic_two_way: boolean;
    /**
     * Receive messages from numbers in other countries.
     */
    international_inbound: boolean;
    /**
     * Send messages to numbers in other countries.
     */
    international_outbound: boolean;
};

