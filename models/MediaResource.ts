/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type MediaResource = {
    /**
     * Uniquely identifies a media resource.
     */
    media_name?: string;
    /**
     * ISO 8601 formatted date of when the media resource will expire and be deleted.
     */
    expires_at?: string;
    /**
     * ISO 8601 formatted date of when the media resource was created
     */
    created_at?: string;
    /**
     * ISO 8601 formatted date of when the media resource was last updated
     */
    updated_at?: string;
    /**
     * Content type of the file
     */
    content_type?: string;
};

