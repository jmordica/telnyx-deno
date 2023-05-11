/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type AmdDetailRecord = {
    /**
     * Feature invocation id
     */
    id?: string;
    /**
     * Feature invocation time
     */
    invoked_at?: string;
    /**
     * Feature name
     */
    feature?: AmdDetailRecord.feature;
    /**
     * User-provided tags
     */
    tags?: string;
    /**
     * Billing Group id
     */
    billing_group_id?: string;
    /**
     * Name of the Billing Group specified in billing_group_id
     */
    billing_group_name?: string;
    /**
     * Connection id
     */
    connection_id?: string;
    /**
     * Connection name
     */
    connection_name?: string;
    /**
     * Telnyx UUID that identifies the related call leg
     */
    call_leg_id?: string;
    /**
     * Telnyx UUID that identifies the related call session
     */
    call_session_id?: string;
    /**
     * Indicates whether Telnyx billing charges might be applicable
     */
    is_telnyx_billable?: boolean;
    /**
     * Currency amount per billing unit used to calculate the Telnyx billing cost
     */
    rate?: string;
    /**
     * Billing unit used to calculate the Telnyx billing cost
     */
    rate_measured_in?: string;
    /**
     * Currency amount for Telnyx billing cost
     */
    cost?: string;
    /**
     * Telnyx account currency used to describe monetary values, including billing cost
     */
    currency?: string;
    record_type: 'AmdDetailRecord.ts';
};

export namespace AmdDetailRecord {

    /**
     * Feature name
     */
    export enum feature {
        PREMIUM = 'PREMIUM',
    }


}

