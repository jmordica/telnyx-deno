/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type GcbChannelZone = {
    record_type: GcbChannelZone.record_type;
    /**
     * List of countries (in ISO 3166-2, capitalized) members of the billing channel zone
     */
    countries: Array<string>;
    id: string;
    name: string;
    channels: number;
    /**
     * ISO 8601 formatted date of when the channel zone was created
     */
    created_at?: string;
    /**
     * ISO 8601 formatted date of when the channel zone was updated
     */
    updated_at?: string;
};

export namespace GcbChannelZone {

    export enum record_type {
        CHANNEL_ZONE = 'channel_zone',
    }


}

