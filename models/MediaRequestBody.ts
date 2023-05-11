/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type MediaRequestBody = {
    /**
     * The user's WhatsApp ID.
     */
    whatsapp_user_id: string;
    /**
     * The content-type of the uplaoded media.
     */
    media_content_type: string;
    /**
     * The media to store with WhatsApp.
     */
    upload_file: Blob;
};

