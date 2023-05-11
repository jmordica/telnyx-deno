/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type PortingOrderRequirementDetail = {
    /**
     * Type of value expected on field_value field
     */
    field_type?: PortingOrderRequirementDetail.field_type;
    /**
     * Identifies the document that satisfies this requirement
     */
    field_value?: string;
    /**
     * Identifies the requirement type that meets this requirement
     */
    requirement_type?: {
        /**
         * The acceptance criteria for the requirement type
         */
        acceptance_criteria?: Record<string, any>;
        /**
         * A description of the requirement type
         */
        description?: string;
        /**
         * An example of the requirement type
         */
        example?: string;
        /**
         * Identifies the requirement type
         */
        id?: string;
        /**
         * The name of the requirement type
         */
        name?: string;
        /**
         * The type of the requirement type
         */
        type?: string;
    };
    /**
     * Status of the requirement
     */
    requirement_status?: string;
    /**
     * Identifies the type of the resource.
     */
    record_type?: string;
};

export namespace PortingOrderRequirementDetail {

    /**
     * Type of value expected on field_value field
     */
    export enum field_type {
        DOCUMENT = 'document',
        TEXTUAL = 'textual',
    }


}

