/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type BusinessIdentity = {
    readonly record_type?: string;
    readonly id?: string;
    /**
     * The ID of the organization that owns the record
     */
    readonly organization_id?: string;
    /**
     * The name of the business identity on the telnyx platform
     */
    name?: string;
    /**
     * The email of the business
     */
    business_email?: string;
    /**
     * The name of the business
     */
    business_name?: string;
    business_phone_number?: string;
    business_description?: string;
    /**
     * User acceptance of the terms of submission
     */
    submission_acknowledgement?: boolean;
    website_url?: Array<string>;
    /**
     * The primary address of the business
     */
    address?: {
        readonly record_type?: string;
        readonly id?: string;
        city?: string;
        country?: string;
        extended_address?: string;
        postal_code?: string;
        state?: string;
        street?: string;
    };
    contacts?: Array<{
        readonly record_type?: string;
        readonly id?: string;
        email?: string;
        first_name?: string;
        job_title?: string;
        last_name?: string;
        phone_number?: string;
    }>;
    /**
     * An ISO 8601 datetime string for when the business identity was added to the Telnyx platform
     */
    readonly created_at?: string;
    /**
     * An ISO 8601 datetime string for when the business identity was updated
     */
    readonly updated_at?: string;
};

