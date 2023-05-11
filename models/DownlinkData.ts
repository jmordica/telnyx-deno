/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type DownlinkData = {
    /**
     * Downlink data
     */
    amount?: number;
    /**
     * Transmission unit
     */
    unit?: DownlinkData.unit;
};

export namespace DownlinkData {

    /**
     * Transmission unit
     */
    export enum unit {
        B = 'B',
        KB = 'KB',
        MB = 'MB',
    }


}

