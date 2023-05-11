/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type PortingOrderRequirement = {
    /**
     * Type of value expected on field_value field
     */
    field_type?: PortingOrderRequirement.field_type;
    /**
     * identifies the document that satisfies this requirement
     */
    field_value?: string;
    /**
     * Identifies the requirement type that meets this requirement
     */
    requirement_type_id?: string;
    /**
     * Identifies the type of the resource.
     */
    record_type?: string;
};

export namespace PortingOrderRequirement {

    /**
     * Type of value expected on field_value field
     */
    export enum field_type {
        DOCUMENT = 'document',
    }


}

