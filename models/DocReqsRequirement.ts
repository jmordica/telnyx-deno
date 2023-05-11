/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DocReqsRequirementType } from './DocReqsRequirementType.ts';

export type DocReqsRequirement = {
    /**
     * Identifies the type of the resource.
     */
    readonly record_type?: string;
    /**
     * The 2-character (ISO 3166-1 alpha-2) country code where this requirement applies
     */
    country_code?: string;
    /**
     * The locality where this requirement applies
     */
    locality?: string;
    /**
     * Indicates the phone_number_type this requirement applies to. Leave blank if this requirement applies to all number_types.
     */
    phone_number_type?: DocReqsRequirement.phone_number_type;
    /**
     * Indicates whether this requirement applies to ordering, porting, or both
     */
    action?: DocReqsRequirement.action;
    /**
     * Lists the requirement types necessary to fulfill this requirement
     */
    readonly requirements_types?: Array<DocReqsRequirementType>;
    /**
     * Identifies the associated document
     */
    readonly id?: string;
    /**
     * ISO 8601 formatted date-time indicating when the resource was created.
     */
    readonly created_at?: string;
    /**
     * ISO 8601 formatted date-time indicating when the resource was last updated.
     */
    readonly updated_at?: string;
};

export namespace DocReqsRequirement {

    /**
     * Indicates the phone_number_type this requirement applies to. Leave blank if this requirement applies to all number_types.
     */
    export enum phone_number_type {
        LOCAL = 'local',
        NATIONAL = 'national',
        TOLL_FREE = 'toll_free',
    }

    /**
     * Indicates whether this requirement applies to ordering, porting, or both
     */
    export enum action {
        BOTH = 'both',
        ORDERING = 'ordering',
        PORTING = 'porting',
    }


}

