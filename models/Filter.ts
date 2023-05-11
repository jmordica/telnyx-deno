/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Filter = {
    filter_type?: Filter.filter_type;
    cli?: string;
    cli_filter?: Filter.cli_filter;
    cld?: string;
    cld_filter?: Filter.cld_filter;
    tags_list?: string;
    billing_group?: string;
};

export namespace Filter {

    export enum filter_type {
        AND = 'and',
        OR = 'or',
    }

    export enum cli_filter {
        CONTAINS = 'contains',
        STARTS_WITH = 'starts_with',
        ENDS_WITH = 'ends_with',
    }

    export enum cld_filter {
        CONTAINS = 'contains',
        STARTS_WITH = 'starts_with',
        ENDS_WITH = 'ends_with',
    }


}

