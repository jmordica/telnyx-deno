/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CheckContact = {
    /**
     * Identifies the type of the resource.
     */
    readonly record_type?: CheckContact.record_type;
    /**
     * The value you sent in the contacts field of the JSON request.
     */
    input?: string;
    /**
     * Status of the user.
     */
    status?: CheckContact.status;
    /**
     * WhatsApp user identifier that can be used in other API calls. Only returned if the status is valid.
     */
    id?: string;
};

export namespace CheckContact {

    /**
     * Identifies the type of the resource.
     */
    export enum record_type {
        WHATSAPP_CONTACT = 'whatsapp_contact',
    }

    /**
     * Status of the user.
     */
    export enum status {
        PROCESSING = 'processing',
        VALID = 'valid',
        INVALID = 'invalid',
    }


}

