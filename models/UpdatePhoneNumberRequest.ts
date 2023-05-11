/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type UpdatePhoneNumberRequest = {
    /**
     * Identifies the type of resource.
     */
    readonly id?: string;
    /**
     * A list of user-assigned tags to help organize phone numbers.
     */
    tags?: Array<string>;
    /**
     * If someone attempts to port your phone number away from Telnyx and your phone number has an external PIN set, we will attempt to verify that you provided the correct external PIN to the winning carrier. Note that not all carriers cooperate with this security mechanism.
     */
    external_pin?: string;
    /**
     * A customer reference string for customer look ups.
     */
    customer_reference?: string;
    /**
     * Identifies the connection associated with the phone number.
     */
    connection_id?: string;
    /**
     * Identifies the billing group associated with the phone number.
     */
    billing_group_id?: string;
    /**
     * Specifies whether the number can have overrides to the routing settings on itself (enabled) or if it uses the associated connection for all routing settings (disabled). Defaults to enabled but will be changed to disabled in the future. There are performance advantages to using disabled and setting all routing information at the connection level.
     */
    number_level_routing?: UpdatePhoneNumberRequest.number_level_routing;
};

export namespace UpdatePhoneNumberRequest {

    /**
     * Specifies whether the number can have overrides to the routing settings on itself (enabled) or if it uses the associated connection for all routing settings (disabled). Defaults to enabled but will be changed to disabled in the future. There are performance advantages to using disabled and setting all routing information at the connection level.
     */
    export enum number_level_routing {
        ENABLED = 'enabled',
        DISABLED = 'disabled',
    }


}

