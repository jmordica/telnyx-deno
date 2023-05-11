/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type UplinkData = {
    /**
     * Uplink data
     */
    amount?: number;
    /**
     * Transmission unit
     */
    unit?: UplinkData.unit;
};

export namespace UplinkData {

    /**
     * Transmission unit
     */
    export enum unit {
        B = 'B',
        KB = 'KB',
        MB = 'MB',
    }


}

