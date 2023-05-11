/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type InventoryCoverage = {
    group?: string;
    group_type?: string;
    number_range?: number;
    number_type?: InventoryCoverage.number_type;
    phone_number_type?: InventoryCoverage.phone_number_type;
    coverage_type?: InventoryCoverage.coverage_type;
    record_type?: string;
    count?: number;
};

export namespace InventoryCoverage {

    export enum number_type {
        DID = 'did',
        TOLL_FREE = 'toll-free',
    }

    export enum phone_number_type {
        LOCAL = 'local',
        TOLL_FREE = 'toll_free',
        NATIONAL = 'national',
        LANDLINE = 'landline',
        SHARED_COST = 'shared_cost',
        MOBILE = 'mobile',
    }

    export enum coverage_type {
        NUMBER = 'number',
        BLOCK = 'block',
    }


}

