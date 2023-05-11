/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type BillingGroup = {
    /**
     * Identifies the type of the resource.
     */
    record_type?: BillingGroup.record_type;
    /**
     * Identifies the type of resource.
     */
    id?: string;
    /**
     * Identifies the organization that owns the resource.
     */
    organization_id?: string;
    /**
     * A user-specified name for the billing group
     */
    name?: string;
    /**
     * ISO 8601 formatted date indicating when the resource was created.
     */
    created_at?: string;
    /**
     * ISO 8601 formatted date indicating when the resource was updated.
     */
    updated_at?: string;
    /**
     * ISO 8601 formatted date indicating when the resource was removed.
     */
    deleted_at?: string;
};

export namespace BillingGroup {

    /**
     * Identifies the type of the resource.
     */
    export enum record_type {
        BILLING_GROUP = 'billing_group',
    }


}

