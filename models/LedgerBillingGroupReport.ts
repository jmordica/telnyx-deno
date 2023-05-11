/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type LedgerBillingGroupReport = {
    /**
     * Identifies the type of the resource.
     */
    record_type?: LedgerBillingGroupReport.record_type;
    /**
     * Identifies the type of resource.
     */
    id?: string;
    /**
     * Uniquely identifies the organization that owns the resource.
     */
    organization_id?: string;
    /**
     * Status of the ledger billing group report
     */
    status?: LedgerBillingGroupReport.status;
    /**
     * External url of the ledger billing group report, if the status is complete
     */
    report_url?: string | null;
    /**
     * ISO 8601 formatted date indicating when the resource was created.
     */
    created_at?: string;
    /**
     * ISO 8601 formatted date indicating when the resource was updated.
     */
    updated_at?: string;
};

export namespace LedgerBillingGroupReport {

    /**
     * Identifies the type of the resource.
     */
    export enum record_type {
        LEDGER_BILLING_GROUP_REPORT = 'ledger_billing_group_report',
    }

    /**
     * Status of the ledger billing group report
     */
    export enum status {
        PENDING = 'pending',
        COMPLETE = 'complete',
        FAILED = 'failed',
        DELETED = 'deleted',
    }


}

