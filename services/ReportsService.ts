/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Errors } from '../models/Errors.ts';
import type { LedgerBillingGroupReport } from '../models/LedgerBillingGroupReport.ts';
import type { NewLedgerBillingGroupReport } from '../models/NewLedgerBillingGroupReport.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import type { BaseHttpRequest } from '../core/BaseHttpRequest.ts';

export class ReportsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Create a ledger billing group report
     * @param requestBody New ledger billing group report parameters
     * @returns any Expected ledger billing group report response to a valid request
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public createLedgerBillingGroupReport(
        requestBody: NewLedgerBillingGroupReport,
    ): CancelablePromise<{
        data?: LedgerBillingGroupReport;
    } | Errors> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/ledger_billing_group_reports',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Retrieve a ledger billing group report
     * @param id The id of the ledger billing group report
     * @returns any Expected ledger billing group report response to a valid request
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public retrieveLedgerBillingGroupReport(
        id: string,
    ): CancelablePromise<{
        data?: LedgerBillingGroupReport;
    } | Errors> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/ledger_billing_group_reports/{id}',
            path: {
                'id': id,
            },
        });
    }

}
