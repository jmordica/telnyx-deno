/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type VerifyDetailRecord = {
    /**
     * Unique ID of the verification
     */
    id?: string;
    verify_profile_id?: string;
    delivery_status?: string;
    verification_status?: string;
    /**
     * E.164 formatted phone number
     */
    destination_phone_number?: string;
    /**
     * Depending on the type of verification, the `verify_channel_id`
     * points to one of the following channel ids;
     * ---
     * verify_channel_type | verify_channel_id
     * ------------------- | -----------------
     * sms, psd2           | messaging_id
     * call, flashcall     | call_control_id
     * whatsapp            | messaging_whatsapp_id
     * ---
     *
     */
    verify_channel_type?: VerifyDetailRecord.verify_channel_type;
    verify_channel_id?: string;
    created_at?: string;
    updated_at?: string;
    /**
     * Currency amount per billing unit used to calculate the Telnyx billing costs
     */
    rate?: string;
    /**
     * Billing unit used to calculate the Telnyx billing costs
     */
    rate_measured_in?: string;
    /**
     * Currency amount for Verify Usage Fee
     */
    verify_usage_fee?: string;
    /**
     * Telnyx account currency used to describe monetary values, including billing costs
     */
    currency?: string;
    record_type: 'VerifyDetailRecord.ts';
};

export namespace VerifyDetailRecord {

    /**
     * Depending on the type of verification, the `verify_channel_id`
     * points to one of the following channel ids;
     * ---
     * verify_channel_type | verify_channel_id
     * ------------------- | -----------------
     * sms, psd2           | messaging_id
     * call, flashcall     | call_control_id
     * whatsapp            | messaging_whatsapp_id
     * ---
     *
     */
    export enum verify_channel_type {
        SMS = 'sms',
        PSD2 = 'psd2',
        CALL = 'call',
        FLASHCALL = 'flashcall',
        WHATSAPP = 'whatsapp',
    }


}

