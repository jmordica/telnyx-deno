/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type WhatsappPhoneNumber = {
    record_type?: string;
    id?: string;
    /**
     * The owning organization's ID
     */
    organization_id?: string;
    /**
     * The associated WhatsApp Business Account ID
     */
    whatsapp_business_account_id?: string;
    /**
     * The configuration status for the phone number in the Telnyx platform
     */
    status?: WhatsappPhoneNumber.status;
    /**
     * The webhook url to be used by facebook
     */
    webhook_url?: string;
    /**
     * The WhatsApp about section content
     */
    about?: string;
    /**
     * The phone number in E164 format
     */
    phone_number?: string;
    /**
     * The phone number's WhatsApp User ID, used in other Telnyx Whatsapp API endpoints
     */
    whatsapp_user_id?: string;
    /**
     * The WhatsApp settings associated with the business account
     */
    whatsapp_settings?: any;
    /**
     * An ISO 8601 datetime string denoting when the account was added to the Telnyx platform
     */
    created_at?: string;
    /**
     * An ISO 8601 datetime string for when the number order was updated.
     */
    updated_at?: string;
};

export namespace WhatsappPhoneNumber {

    /**
     * The configuration status for the phone number in the Telnyx platform
     */
    export enum status {
        PENDING = 'pending',
        READY = 'ready',
        DISCONNECTED = 'disconnected',
    }


}

