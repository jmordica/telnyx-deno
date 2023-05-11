/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type GcbPhoneNumber = {
    record_type: GcbPhoneNumber.record_type;
    channel_zone_id: string;
    id?: string;
    phone_number: string;
    /**
     * ISO 8601 formatted date of when the phone number was created
     */
    created_at?: string;
};

export namespace GcbPhoneNumber {

    export enum record_type {
        CHANNEL_ZONE_PHONE_NUMBER = 'channel_zone_phone_number',
    }


}

