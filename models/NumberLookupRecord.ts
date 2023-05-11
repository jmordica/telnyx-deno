/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CallerName } from './CallerName.ts';
import type { Carrier } from './Carrier.ts';
import type { Portability } from './Portability.ts';

export type NumberLookupRecord = {
    /**
     * Identifies the type of record
     */
    record_type?: string;
    /**
     * Region code that matches the specific country calling code
     */
    country_code?: string;
    /**
     * Hyphen-separated national number, preceded by the national destination code (NDC), with a 0 prefix, if an NDC is found
     */
    national_format?: string;
    /**
     * E164-formatted phone number
     */
    phone_number?: string;
    /**
     * Unused
     */
    fraud?: string;
    carrier?: Carrier;
    caller_name?: CallerName;
    portability?: Portability;
};

