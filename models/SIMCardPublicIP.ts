/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type SIMCardPublicIP = {
    readonly record_type?: string;
    sim_card_id?: string;
    readonly type?: SIMCardPublicIP.type;
    /**
     * The provisioned IP address. This attribute will only be available when underlying resource status is in a "provisioned" status.
     */
    readonly ip?: string;
    /**
     * ISO 8601 formatted date-time indicating when the resource was created.
     */
    readonly created_at?: string;
    /**
     * ISO 8601 formatted date-time indicating when the resource was updated.
     */
    readonly updated_at?: string;
};

export namespace SIMCardPublicIP {

    export enum type {
        IPV4 = 'ipv4',
    }


}

