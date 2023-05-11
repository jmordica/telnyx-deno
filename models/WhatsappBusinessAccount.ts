/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type WhatsappBusinessAccount = {
    record_type?: string;
    id?: string;
    /**
     * The owning organization's ID
     */
    organization_id?: string;
    /**
     * The configuration status for the account in the Telnyx platform
     */
    status?: WhatsappBusinessAccount.status;
    /**
     * The Facebook settings associated with the business account
     */
    whatsapp_settings?: {
        /**
         * The unique ID of the business account in Facebook
         */
        id?: string;
        /**
         * The name of the business account in Facebook
         */
        name?: string;
        /**
         * The review status of the account in Facebook.</br><ul><li><code>PENDING</code>The account is waiting for review by the WhatsApp team. At this stage, the account is allowed only to send messages using the pre-approved messaging templates, from a single verified phone-number.</li><li><code>APPROVED</code>The WhatsApp team demeed the account as valid and now it has access to all capabilities that the WhatsApp integration offers.</li><li><code>REJECTED</code>The account was rejected by the WhatsApp team. It will need to re-submit its business information to resume the approval process.</li></ul>
         */
        account_review_status?: WhatsappBusinessAccount.account_review_status;
        /**
         * The unique ID of the business that owns the account in Facebook
         */
        owner_business_id?: string;
        /**
         * The name of the business that owns the account in Facebook
         */
        owner_business_name?: string;
        /**
         * The account's message template namespace provideded by Facebook
         */
        message_template_namespace?: string;
        /**
         * The ban state of the account in Facebook.
         */
        ban_state?: WhatsappBusinessAccount.ban_state;
        /**
         * The date the account was banned in Facebook.
         */
        ban_date?: string;
    };
    /**
     * An ISO 8601 datetime string denoting when the account was added to the Telnyx platform
     */
    created_at?: string;
    /**
     * An ISO 8601 datetime string for when the number order was updated.
     */
    updated_at?: string;
};

export namespace WhatsappBusinessAccount {

    /**
     * The configuration status for the account in the Telnyx platform
     */
    export enum status {
        SETUP = 'setup',
        READY = 'ready',
    }

    /**
     * The review status of the account in Facebook.</br><ul><li><code>PENDING</code>The account is waiting for review by the WhatsApp team. At this stage, the account is allowed only to send messages using the pre-approved messaging templates, from a single verified phone-number.</li><li><code>APPROVED</code>The WhatsApp team demeed the account as valid and now it has access to all capabilities that the WhatsApp integration offers.</li><li><code>REJECTED</code>The account was rejected by the WhatsApp team. It will need to re-submit its business information to resume the approval process.</li></ul>
     */
    export enum account_review_status {
        PENDING = 'PENDING',
        APPROVED = 'APPROVED',
        REJECTED = 'REJECTED',
    }

    /**
     * The ban state of the account in Facebook.
     */
    export enum ban_state {
        SCHEDULE_FOR_DISABLE = 'SCHEDULE_FOR_DISABLE',
        DISABLE = 'DISABLE',
        REINSTATE = 'REINSTATE',
    }


}

