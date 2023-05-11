/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DeleteObjectsRequest } from '../models/DeleteObjectsRequest.ts';
import type { DeleteObjectsResponse } from '../models/DeleteObjectsResponse.ts';
import type { ListObjectsResponse } from '../models/ListObjectsResponse.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import type { BaseHttpRequest } from '../core/BaseHttpRequest.ts';

export class ObjectService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * ListObjectsV2
     * List all objects contained in a given bucket.
     * @param bucketName The name of the bucket.
     * @param listType
     * @returns ListObjectsResponse Success
     * @throws ApiError
     */
    public listObjectsV2(
        bucketName: string,
        listType?: 2,
    ): CancelablePromise<ListObjectsResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{bucketName}',
            path: {
                'bucketName': bucketName,
            },
            query: {
                'list-type': listType,
            },
            errors: {
                404: `Bucket does not exist.`,
            },
        });
    }

    /**
     * DeleteObjects
     * Deletes one or multiple objects from a given bucket.
     * @param bucketName The bucket name.
     * @param _delete
     * @param requestBody
     * @returns DeleteObjectsResponse Success
     * @throws ApiError
     */
    public deleteObjects(
        bucketName: string,
        _delete: boolean,
        requestBody: DeleteObjectsRequest,
    ): CancelablePromise<DeleteObjectsResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/{bucketName}',
            path: {
                'bucketName': bucketName,
            },
            query: {
                'delete': _delete,
            },
            body: requestBody,
            mediaType: 'text/xml',
        });
    }

    /**
     * DeleteObject
     * Delete an object from a given bucket.
     * @param bucketName The bucket name.
     * @param objectName The object name.
     * @returns void
     * @throws ApiError
     */
    public deleteObject(
        bucketName: string,
        objectName: string,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/{bucketName}/{objectName}',
            path: {
                'bucketName': bucketName,
                'objectName': objectName,
            },
        });
    }

    /**
     * GetObject
     * Retrieves an object from a given bucket.
     * @param bucketName The bucket name.
     * @param objectName The object name.
     * @param uploadId
     * @returns binary Success
     * @throws ApiError
     */
    public getObject(
        bucketName: string,
        objectName: string,
        uploadId?: string,
    ): CancelablePromise<Blob> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{bucketName}/{objectName}',
            path: {
                'bucketName': bucketName,
                'objectName': objectName,
            },
            query: {
                'uploadId': uploadId,
            },
            errors: {
                404: `ObjectNotFound`,
            },
        });
    }

    /**
     * HeadObject
     * Retrieves metadata from an object without returning the object itself.
     * @param bucketName The bucket name.
     * @param objectName The object name.
     * @returns string Success
     * @throws ApiError
     */
    public headObject(
        bucketName: string,
        objectName: string,
    ): CancelablePromise<string> {
        return this.httpRequest.request({
            method: 'HEAD',
            url: '/{bucketName}/{objectName}',
            path: {
                'bucketName': bucketName,
                'objectName': objectName,
            },
            responseHeader: 'Date',
            errors: {
                404: `ObjectNotFound`,
            },
        });
    }

    /**
     * PutObject
     * Add an object to a bucket.
     * @param bucketName The bucket name.
     * @param objectName The object name.
     * @param requestBody
     * @param contentType
     * @param partNumber
     * @param uploadId
     * @returns any Success
     * @throws ApiError
     */
    public putObject(
        bucketName: string,
        objectName: string,
        requestBody: Blob,
        contentType?: string,
        partNumber?: string,
        uploadId?: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/{bucketName}/{objectName}',
            path: {
                'bucketName': bucketName,
                'objectName': objectName,
            },
            headers: {
                'Content-type': contentType,
            },
            query: {
                'partNumber': partNumber,
                'uploadId': uploadId,
            },
            body: requestBody,
            mediaType: '*/*',
        });
    }

}
