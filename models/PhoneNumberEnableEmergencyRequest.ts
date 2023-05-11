/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type PhoneNumberEnableEmergencyRequest = {
    /**
     * Indicates whether to enable emergency services on this number.
     */
    emergency_enabled: boolean;
    /**
     * Identifies the address to be used with emergency services.
     */
    emergency_address_id: string;
};

