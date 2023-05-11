/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CostInformation } from './CostInformation.ts';
import type { Feature } from './Feature.ts';
import type { RegionInformation } from './RegionInformation.ts';

export type AvailablePhoneNumberBlock = {
    record_type?: AvailablePhoneNumberBlock.record_type;
    starting_number?: string;
    range?: number;
    region_information?: Array<RegionInformation>;
    cost_information?: CostInformation;
    features?: Array<Feature>;
};

export namespace AvailablePhoneNumberBlock {

    export enum record_type {
        AVAILABLE_PHONE_NUMBER_BLOCK = 'available_phone_number_block',
    }


}

