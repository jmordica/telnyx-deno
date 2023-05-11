/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type DocReqsRequirementType = {
    /**
     * Specifies objective criteria for acceptance
     */
    acceptance_criteria?: {
        /**
         * Specifies time-based acceptance criteria
         */
        time_limit?: string;
        /**
         * Specifies geography-based acceptance criteria
         */
        locality_limit?: string;
    };
    /**
     * Describes the requirement type
     */
    description?: string;
    /**
     * Provides one or more examples of acceptable documents
     */
    example?: string;
    /**
     * Defines the type of this requirement type
     */
    type?: DocReqsRequirementType.type;
    /**
     * A short descriptive name for this requirement_type
     */
    readonly name?: string;
    /**
     * Identifies the type of the resource
     */
    readonly record_type?: string;
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

export namespace DocReqsRequirementType {

    /**
     * Defines the type of this requirement type
     */
    export enum type {
        DOCUMENT = 'document',
        ADDRESS = 'address',
        TEXTUAL = 'textual',
    }


}

