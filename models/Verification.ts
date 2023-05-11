/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { VerificationRecordType } from './VerificationRecordType.ts';
import type { VerificationStatus } from './VerificationStatus.ts';
import type { VerificationType } from './VerificationType.ts';

export type Verification = {
    id?: string;
    type?: VerificationType;
    record_type?: VerificationRecordType;
    /**
     * +E164 formatted phone number.
     */
    phone_number?: string;
    /**
     * The identifier of the associated Verify profile.
     */
    verify_profile_id?: string;
    /**
     * This is the number of seconds before the code of the request is expired. Once this request has expired, the code will no longer verify the user. Note: this will override the `default_verification_timeout_secs` on the Verify profile.
     */
    timeout_secs?: number;
    /**
     * This is the number of seconds before the call ends, if the verification makes a call. Note: this will override the `default_call_timeout_secs` on the Verify profile.
     */
    call_timeout_secs?: number;
    status?: VerificationStatus;
    created_at?: string;
    updated_at?: string;
};

