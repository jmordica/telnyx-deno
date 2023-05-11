/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * The WhatsApp user object
 */
export type WhatsAppUser = {
    /**
     * Identifies the type of the resource.
     */
    readonly record_type?: WhatsAppUser.record_type;
    /**
     * The WhatsApp User ID, usually a phone number.
     */
    id?: string;
    /**
     * The URL that WhatsApp webhooks are sent to.
     */
    webhook_url?: string;
};

export namespace WhatsAppUser {

    /**
     * Identifies the type of the resource.
     */
    export enum record_type {
        WHATSAPP_USER = 'whatsapp_user',
    }


}

