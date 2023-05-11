/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CreateMessagingHostedNumberOrderRequest = {
    /**
     * Phone numbers to be used for hosted messaging.
     */
    phone_numbers?: Array<string>;
    /**
     * Automatically associate the number with this messaging profile ID when the order is complete.
     */
    messaging_profile_id?: string;
};

