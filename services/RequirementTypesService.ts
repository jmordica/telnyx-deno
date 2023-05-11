/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DocReqsRequirementType } from '../models/DocReqsRequirementType.ts';
import type { DocReqsRequirementTypeList } from '../models/DocReqsRequirementTypeList.ts';
import type { Errors } from '../models/Errors.ts';
import type { PaginationMeta } from '../models/PaginationMeta.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import type { BaseHttpRequest } from '../core/BaseHttpRequest.ts';

export class RequirementTypesService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List all requirement types
     * List all requirement types ordered by created_at descending
     * @param filterNameContains Filters requirement types to those whose name contains a certain string.
     * @param sort Specifies the sort order for results. If you want to sort by a field in ascending order, include it as a sort parameter. If you want to sort in descending order, prepend a `-` in front of the field name.
     * @returns any Successful response
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public docReqsListRequirementTypes(
        filterNameContains?: string,
        sort?: 'created_at' | 'name' | 'updated_at',
    ): CancelablePromise<{
        data?: DocReqsRequirementTypeList;
        meta?: PaginationMeta;
    } | Errors> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/requirement_types',
            query: {
                'filter[name][contains]': filterNameContains,
                'sort[]': sort,
            },
        });
    }

    /**
     * Retrieve a requirement types
     * Retrieve a requirement type by id
     * @param id Uniquely identifies the requirement_type record
     * @returns any Successful response
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public docReqsRetrieveRequirementType(
        id: string,
    ): CancelablePromise<{
        data?: DocReqsRequirementType;
    } | Errors> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/requirement_types/{id}',
            path: {
                'id': id,
            },
        });
    }

}
