/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CostInformation } from './CostInformation.ts';
import type { Feature } from './Feature.ts';
import type { RegionInformation } from './RegionInformation.ts';

export type AvailablePhoneNumber = {
    record_type?: AvailablePhoneNumber.record_type;
    phone_number?: string;
    vanity_format?: string;
    /**
     * Specifies whether the phone number is an exact match based on the search criteria or not.
     */
    best_effort?: boolean;
    /**
     * Specifies whether the phone number can receive calls immediately after purchase or not.
     */
    quickship?: boolean;
    /**
     * Specifies whether the phone number can be reserved before purchase or not.
     */
    reservable?: boolean;
    region_information?: Array<RegionInformation>;
    cost_information?: CostInformation;
    features?: Array<Feature>;
};

export namespace AvailablePhoneNumber {

    export enum record_type {
        AVAILABLE_PHONE_NUMBER = 'available_phone_number',
    }


}

