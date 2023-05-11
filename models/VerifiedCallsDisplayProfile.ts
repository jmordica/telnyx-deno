/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type VerifiedCallsDisplayProfile = {
    readonly record_type?: string;
    readonly id?: string;
    /**
     * The Verified Calls Display Profile's name
     */
    name?: string;
    /**
     * The display name to be shown as the caller name in phones
     */
    display_name?: string;
    /**
     * The URL pointing to a public image file that will be displayed during calls in phones
     */
    logo_url?: string;
    /**
     * The approval status of the Verified Calls Display Profile in Google
     */
    readonly status?: VerifiedCallsDisplayProfile.status;
    /**
     * The associated Business Identity
     */
    business_identity?: {
        record_type?: string;
        /**
         * The name of the business identity on the telnyx platform
         */
        name?: string;
    };
    phone_numbers?: Array<{
        readonly record_type?: string;
        readonly id?: string;
        /**
         * The phone number in e164 format
         */
        phone_number?: string;
        /**
         * The approval status of this individual phone number in Google
         */
        readonly google_verification_status?: 'STATE_UNSPECIFIED' | 'PENDING_APPROVAL' | 'APPROVED' | 'DENIED' | 'PENDING_REMOVAL.ts';
        /**
         * Additional information about the decision, if available.
         */
        readonly google_approval_info?: string;
        readonly display_profile_id?: string;
        /**
         * Marks the Phone Number to be removed from the Display Profile
         */
        delete?: boolean;
    }>;
    call_reasons?: Array<{
        readonly record_type?: string;
        readonly id?: string;
        /**
         * The Call Reason text to be displayed to the call recipient
         */
        reason?: string;
        /**
         * The approval status of this individual call reason in Google
         */
        readonly google_verification_status?: 'STATE_UNSPECIFIED' | 'PENDING_APPROVAL' | 'APPROVED' | 'DENIED' | 'PENDING_REMOVAL.ts';
        /**
         * Additional information about the decision, if available.
         */
        readonly google_approval_info?: string;
        readonly display_profile_id?: string;
        /**
         * Marks the Phone Number to be removed from the Display Profile
         */
        delete?: boolean;
    }>;
    /**
     * An ISO 8601 datetime string for when the display profile was added to the Telnyx platform
     */
    readonly created_at?: string;
    /**
     * An ISO 8601 datetime string for when the display profile was updated
     */
    readonly updated_at?: string;
};

export namespace VerifiedCallsDisplayProfile {

    /**
     * The approval status of the Verified Calls Display Profile in Google
     */
    export enum status {
        VERIFICATION_STATE_UNSPECIFIED = 'VERIFICATION_STATE_UNSPECIFIED',
        VERIFICATION_STATE_UNVERIFIED = 'VERIFICATION_STATE_UNVERIFIED',
        VERIFICATION_STATE_PENDING = 'VERIFICATION_STATE_PENDING',
        VERIFICATION_STATE_VERIFIED = 'VERIFICATION_STATE_VERIFIED',
        VERIFICATION_STATE_SUSPENDED_IN_GMB = 'VERIFICATION_STATE_SUSPENDED_IN_GMB',
    }


}

