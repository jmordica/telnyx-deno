/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type DynamicEmergencyEndpoint = {
    readonly id?: string;
    /**
     * Identifies the type of the resource.
     */
    readonly record_type?: string;
    /**
     * An id of a currently active dynamic emergency location.
     */
    dynamic_emergency_address_id: string;
    /**
     * Status of dynamic emergency address
     */
    readonly status?: DynamicEmergencyEndpoint.status;
    readonly sip_from_id?: string;
    callback_number: string;
    caller_name: string;
    /**
     * ISO 8601 formatted date of when the resource was created
     */
    readonly created_at?: string;
    /**
     * ISO 8601 formatted date of when the resource was last updated
     */
    readonly updated_at?: string;
};

export namespace DynamicEmergencyEndpoint {

    /**
     * Status of dynamic emergency address
     */
    export enum status {
        PENDING = 'pending',
        ACTIVATED = 'activated',
        REJECTED = 'rejected',
    }


}

