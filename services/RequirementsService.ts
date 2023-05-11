/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DocReqsRequirement } from '../models/DocReqsRequirement.ts';
import type { DocReqsRequirementList } from '../models/DocReqsRequirementList.ts';
import type { Errors } from '../models/Errors.ts';
import type { PaginationMeta } from '../models/PaginationMeta.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import type { BaseHttpRequest } from '../core/BaseHttpRequest.ts';

export class RequirementsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List all requirements
     * List all requirements with filtering, sorting, and pagination
     * @param filterCountryCode Filters results to those applying to a 2-character (ISO 3166-1 alpha-2) country code
     * @param filterPhoneNumberType Filters results to those applying to a specific `phone_number_type`
     * @param filterAction Filters requirements to those applying to a specific action.
     * @param sort Specifies the sort order for results. If you want to sort by a field in ascending order, include it as a sort parameter. If you want to sort in descending order, prepend a `-` in front of the field name.
     * @param pageNumber The page number to load
     * @param pageSize The size of the page
     * @returns any Successful response
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public listRequirements(
        filterCountryCode?: string,
        filterPhoneNumberType?: 'local' | 'national' | 'toll-free',
        filterAction?: 'ordering' | 'porting',
        sort?: 'action' | 'country_code' | 'locality' | 'phone_number_type',
        pageNumber: number = 1,
        pageSize: number = 20,
    ): CancelablePromise<{
        data?: DocReqsRequirementList;
        meta?: PaginationMeta;
    } | Errors> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/requirements',
            query: {
                'filter[country_code]': filterCountryCode,
                'filter[phone_number_type]': filterPhoneNumberType,
                'filter[action]': filterAction,
                'sort[]': sort,
                'page[number]': pageNumber,
                'page[size]': pageSize,
            },
        });
    }

    /**
     * Retrieve a document requirement
     * Retrieve a document requirement record
     * @param id Uniquely identifies the requirement_type record
     * @returns any Successful response
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public docReqsRetrieveDocumentRequirements(
        id: string,
    ): CancelablePromise<{
        data?: DocReqsRequirement;
    } | Errors> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/requirements/{id}',
            path: {
                'id': id,
            },
        });
    }

}
