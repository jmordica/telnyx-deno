/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type PortingOrderPhoneNumberConfiguration = {
    /**
     * identifies the connection to set on the numbers when ported
     */
    connection_id?: string;
    /**
     * identifies the messaging profile to set on the numbers when ported
     */
    messaging_profile_id?: string;
    /**
     * identifies the emergency address to set on the numbers when ported
     */
    emergency_address_id?: string;
    tags?: Array<string>;
};

