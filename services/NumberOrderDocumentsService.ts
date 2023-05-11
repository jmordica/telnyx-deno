/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateNumberOrderDocumentRequest } from '../models/CreateNumberOrderDocumentRequest.ts';
import type { Errors } from '../models/Errors.ts';
import type { NumberOrderDocument } from '../models/NumberOrderDocument.ts';
import type { PaginationMeta } from '../models/PaginationMeta.ts';
import type { UpdateNumberOrderDocumentRequest } from '../models/UpdateNumberOrderDocumentRequest.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import type { BaseHttpRequest } from '../core/BaseHttpRequest.ts';

export class NumberOrderDocumentsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List number order documents
     * Gets a paginated list of number order documents.
     * @param filterRequirementId Filter number order documents by `requirement_id`.
     * @param filterCreatedAtGt Filter number order documents after this datetime.
     * @param filterCreatedAtLt Filter number order documents from before this datetime.
     * @param pageNumber The page number to load
     * @param pageSize The size of the page
     * @returns any Successful response with a list of number order documents.
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public listNumberOrderDocuments(
        filterRequirementId?: string,
        filterCreatedAtGt?: string,
        filterCreatedAtLt?: string,
        pageNumber: number = 1,
        pageSize: number = 20,
    ): CancelablePromise<{
        data?: Array<NumberOrderDocument>;
        meta?: PaginationMeta;
    } | Errors> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/number_order_documents',
            query: {
                'filter[requirement_id]': filterRequirementId,
                'filter[created_at][gt]': filterCreatedAtGt,
                'filter[created_at][lt]': filterCreatedAtLt,
                'page[number]': pageNumber,
                'page[size]': pageSize,
            },
        });
    }

    /**
     * Create a number order document
     * Upload a phone number order document.
     * @param requestBody
     * @returns any Successful response with details about a number order document.
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public createNumberOrderDocument(
        requestBody: CreateNumberOrderDocumentRequest,
    ): CancelablePromise<{
        data?: NumberOrderDocument;
    } | Errors> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/number_order_documents',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Retrieve a number order document
     * Gets a single number order document.
     * @param numberOrderDocumentId The number order document ID.
     * @returns any Successful response with details about a number order document.
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public retrieveNumberOrderDocument(
        numberOrderDocumentId: string,
    ): CancelablePromise<{
        data?: NumberOrderDocument;
    } | Errors> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/number_order_documents/{number_order_document_id}',
            path: {
                'number_order_document_id': numberOrderDocumentId,
            },
        });
    }

    /**
     * Update a number order document
     * Updates a number order document.
     * @param numberOrderDocumentId The number order document ID.
     * @param requestBody
     * @returns any Successful response with details about a number order document.
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public updateNumberOrderDocument(
        numberOrderDocumentId: string,
        requestBody: UpdateNumberOrderDocumentRequest,
    ): CancelablePromise<{
        data?: NumberOrderDocument;
    } | Errors> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/number_order_documents/{number_order_document_id}',
            path: {
                'number_order_document_id': numberOrderDocumentId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
