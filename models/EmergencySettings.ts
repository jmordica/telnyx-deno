/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * The emergency services settings for a phone number.
 */
export type EmergencySettings = {
    /**
     * Allows you to enable or disable emergency services on the phone number. In order to enable emergency services, you must also set an emergency_address_id.
     */
    emergency_enabled?: boolean;
    /**
     * Identifies the address to be used with emergency services.
     */
    emergency_address_id?: string;
    /**
     * Represents the state of the number regarding emergency activation.
     */
    emergency_status?: EmergencySettings.emergency_status;
};

export namespace EmergencySettings {

    /**
     * Represents the state of the number regarding emergency activation.
     */
    export enum emergency_status {
        DISABLED = 'disabled',
        ACTIVE = 'active',
        PROVISIONING = 'provisioning',
        DEPROVISIONING = 'deprovisioning',
    }


}

