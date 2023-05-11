/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ShortCode = {
    /**
     * Identifies the type of the resource.
     */
    readonly record_type?: ShortCode.record_type;
    /**
     * Identifies the type of resource.
     */
    readonly id?: string;
    /**
     * Short digit sequence used to address messages.
     */
    readonly short_code?: string;
    /**
     * ISO 3166-1 alpha-2 country code.
     */
    readonly country_code?: string;
    /**
     * Unique identifier for a messaging profile.
     */
    messaging_profile_id: string | null;
    /**
     * ISO 8601 formatted date indicating when the resource was created.
     */
    readonly created_at?: string;
    /**
     * ISO 8601 formatted date indicating when the resource was updated.
     */
    readonly updated_at?: string;
};

export namespace ShortCode {

    /**
     * Identifies the type of the resource.
     */
    export enum record_type {
        SHORT_CODE = 'short_code',
    }


}

