/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type UploadMedia = {
    /**
     * Identifies the type of the resource.
     */
    readonly record_type?: UploadMedia.record_type;
    id?: string;
};

export namespace UploadMedia {

    /**
     * Identifies the type of the resource.
     */
    export enum record_type {
        WHATSAPP_MEDIA_ID = 'whatsapp_media_id',
    }


}

