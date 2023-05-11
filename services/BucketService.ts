/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateBucketRequest } from '../models/CreateBucketRequest.ts';
import type { ListBucketsResponse } from '../models/ListBucketsResponse.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import type { BaseHttpRequest } from '../core/BaseHttpRequest.ts';

export class BucketService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * ListBuckets
     * List all Buckets.
     * @returns ListBucketsResponse Success
     * @throws ApiError
     */
    public listBuckets(): CancelablePromise<ListBucketsResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/',
        });
    }

    /**
     * DeleteBucket
     * Deletes a bucket. The bucket must be empty for it to be deleted.
     * @param bucketName The name of the bucket.
     * @returns void
     * @throws ApiError
     */
    public deleteBucket(
        bucketName: string,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/{bucketName}',
            path: {
                'bucketName': bucketName,
            },
        });
    }

    /**
     * HeadBucket
     * Determines if a bucket exists and you have permission to access it.
     * @param bucketName The name of the bucket.
     * @returns any Success
     * @throws ApiError
     */
    public headBucket(
        bucketName: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'HEAD',
            url: '/{bucketName}',
            path: {
                'bucketName': bucketName,
            },
            errors: {
                404: `NoSuchBucket`,
            },
        });
    }

    /**
     * CreateBucket
     * Create a bucket.
     * @param bucketName The name of the bucket.
     * @param requestBody
     * @returns any Success
     * @throws ApiError
     */
    public createBucket(
        bucketName: string,
        requestBody?: CreateBucketRequest,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/{bucketName}',
            path: {
                'bucketName': bucketName,
            },
            body: requestBody,
            mediaType: 'text/xml',
            errors: {
                409: `BucketAlreadyExists`,
            },
        });
    }

}
