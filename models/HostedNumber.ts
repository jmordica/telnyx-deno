/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type HostedNumber = {
    record_type?: string;
    /**
     * Identifies the type of resource.
     */
    readonly id?: string;
    /**
     * The messaging hosted phone number (+E.164 format)
     */
    phone_number?: string;
    status?: HostedNumber.status;
};

export namespace HostedNumber {

    export enum status {
        DELETED = 'deleted',
        FAILED = 'failed',
        PENDING = 'pending',
        SUCCESSFUL = 'successful',
    }


}

