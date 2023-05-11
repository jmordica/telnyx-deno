/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * The SIM card individual data usage notification information.
 */
export type SimCardDataUsageNotification = {
    /**
     * Identifies the resource.
     */
    readonly id?: string;
    /**
     * The identification UUID of the related SIM card resource.
     */
    sim_card_id?: string;
    readonly record_type?: string;
    /**
     * Data usage threshold that will trigger the notification.
     */
    threshold?: {
        amount?: string;
        unit?: SimCardDataUsageNotification.unit;
    };
    /**
     * ISO 8601 formatted date-time indicating when the resource was created.
     */
    readonly created_at?: string;
    /**
     * ISO 8601 formatted date-time indicating when the resource was updated.
     */
    readonly updated_at?: string;
};

export namespace SimCardDataUsageNotification {

    export enum unit {
        MB = 'MB',
        GB = 'GB',
    }


}

