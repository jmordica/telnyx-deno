/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { VerifiedCallsDisplayProfile_properties_call_reasons } from './VerifiedCallsDisplayProfile_properties_call_reasons.ts';
import type { VerifiedCallsDisplayProfile_properties_display_name } from './VerifiedCallsDisplayProfile_properties_display_name.ts';
import type { VerifiedCallsDisplayProfile_properties_logo_url } from './VerifiedCallsDisplayProfile_properties_logo_url.ts';
import type { VerifiedCallsDisplayProfile_properties_name } from './VerifiedCallsDisplayProfile_properties_name.ts';
import type { VerifiedCallsDisplayProfile_properties_phone_numbers } from './VerifiedCallsDisplayProfile_properties_phone_numbers.ts';

export type CreateVerifiedCallsDisplayProfileRequest = {
    /**
     * The ID of the business identity that owns the record
     */
    business_identity_id: string;
    name: VerifiedCallsDisplayProfile_properties_name;
    display_name?: VerifiedCallsDisplayProfile_properties_display_name;
    logo_url?: VerifiedCallsDisplayProfile_properties_logo_url;
    call_reasons?: VerifiedCallsDisplayProfile_properties_call_reasons;
    phone_numbers?: VerifiedCallsDisplayProfile_properties_phone_numbers;
};

