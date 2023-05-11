/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Currencies } from './Currencies.ts';

/**
 * The request body when creating a verification.
 */
export type CreateVerificationRequestPSD2 = {
    /**
     * +E164 formatted phone number.
     */
    phone_number: string;
    /**
     * The identifier of the associated Verify profile.
     */
    verify_profile_id: string;
    currency: Currencies;
    amount: string;
    payee: string;
    /**
     * The number of seconds the verification code is valid for.
     */
    timeout_secs?: number;
};

