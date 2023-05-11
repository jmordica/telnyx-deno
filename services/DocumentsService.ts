/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateDocServiceDocumentRequest } from '../models/CreateDocServiceDocumentRequest.ts';
import type { DocServiceDocument } from '../models/DocServiceDocument.ts';
import type { DocServiceDocumentLink } from '../models/DocServiceDocumentLink.ts';
import type { Errors } from '../models/Errors.ts';
import type { PaginationMeta } from '../models/PaginationMeta.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import type { BaseHttpRequest } from '../core/BaseHttpRequest.ts';

export class DocumentsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List all document links
     * List all documents links ordered by created_at descending.
     * @param pageNumber The page number to load
     * @param pageSize The size of the page
     * @param filterDocumentId Identifies the associated document to filter on.
     * @param filterLinkedRecordType The `linked_record_type` of the document to filter on.
     * @param filterLinkedResourceId The `linked_resource_id` of the document to filter on.
     * @returns any Successful response
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public listDocumentLinks(
        pageNumber: number = 1,
        pageSize: number = 20,
        filterDocumentId?: string,
        filterLinkedRecordType?: string,
        filterLinkedResourceId?: string,
    ): CancelablePromise<{
        data?: Array<DocServiceDocumentLink>;
        meta?: PaginationMeta;
    } | Errors> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/document_links',
            query: {
                'page[number]': pageNumber,
                'page[size]': pageSize,
                'filter[document_id]': filterDocumentId,
                'filter[linked_record_type]': filterLinkedRecordType,
                'filter[linked_resource_id]': filterLinkedResourceId,
            },
        });
    }

    /**
     * List all documents
     * List all documents ordered by created_at descending.
     * @param filterFilenameContains Filter by string matching part of filename.
     * @param filterCustomerReferenceEq Filter documents by a customer references.
     * @param filterCustomerReferenceIn Filter documents by a list of customer references.
     * @param filterCreatedAtGt Filter by created at greater than provided value.
     * @param filterCreatedAtLt Filter by created at less than provided value.
     * @param sort Specifies the sort order for results. If you want to sort by a field in ascending order, include it as a sort parameter. If you want to sort in descending order, prepend a `-` in front of the field name.
     * @param pageNumber The page number to load
     * @param pageSize The size of the page
     * @returns any Successful response
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public listDocuments(
        filterFilenameContains?: string,
        filterCustomerReferenceEq?: string,
        filterCustomerReferenceIn?: string,
        filterCreatedAtGt?: string,
        filterCreatedAtLt?: string,
        sort?: 'filename' | 'created_at' | 'updated_at',
        pageNumber: number = 1,
        pageSize: number = 20,
    ): CancelablePromise<{
        data?: Array<DocServiceDocument>;
        meta?: PaginationMeta;
    } | Errors> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/documents',
            query: {
                'filter[filename][contains]': filterFilenameContains,
                'filter[customer_reference][eq]': filterCustomerReferenceEq,
                'filter[customer_reference][in][]': filterCustomerReferenceIn,
                'filter[created_at][gt]': filterCreatedAtGt,
                'filter[created_at][lt]': filterCreatedAtLt,
                'sort[]': sort,
                'page[number]': pageNumber,
                'page[size]': pageSize,
            },
        });
    }

    /**
     * Upload a document
     * Upload a document.<br /><br />Uploaded files must be linked to a service within 30 minutes or they will be automatically deleted.
     * @param requestBody
     * @returns any Successful response
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public createDocument(
        requestBody: CreateDocServiceDocumentRequest,
    ): CancelablePromise<{
        data?: DocServiceDocument;
    } | Errors> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/documents',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Unprocessable entity. Check the 'detail' field in response for details.`,
            },
        });
    }

    /**
     * Delete a document
     * Delete a document.<br /><br />A document can only be deleted if it's not linked to a service. If it is linked to a service, it must be unlinked prior to deleting.
     * @param id Identifies the resource.
     * @returns any Successful response
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public deleteDocument(
        id: string,
    ): CancelablePromise<{
        data?: DocServiceDocument;
    } | Errors> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/documents/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Retrieve a document
     * Retrieve a document.
     * @param id Identifies the resource.
     * @returns any Successful response
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public retrieveDocument(
        id: string,
    ): CancelablePromise<{
        data?: DocServiceDocument;
    } | Errors> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/documents/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Update a document
     * Update a document.
     * @param id Identifies the resource.
     * @param requestBody
     * @returns any Successful response
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public updateDocument(
        id: string,
        requestBody: DocServiceDocument,
    ): CancelablePromise<{
        data?: DocServiceDocument;
    } | Errors> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/documents/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Download a document
     * Download a document.
     * @param id Identifies the resource.
     * @returns binary Successful response
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public downloadDocServiceDocument(
        id: string,
    ): CancelablePromise<Blob | Errors> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/documents/{id}/download',
            path: {
                'id': id,
            },
        });
    }

}
