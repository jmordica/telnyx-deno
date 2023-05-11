/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Errors } from '../models/Errors.ts';
import type { MediaResource } from '../models/MediaResource.ts';
import type { PaginationMeta } from '../models/PaginationMeta.ts';
import type { UpdateMediaRequest } from '../models/UpdateMediaRequest.ts';
import type { UploadMediaRequest } from '../models/UploadMediaRequest.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import type { BaseHttpRequest } from '../core/BaseHttpRequest.ts';

export class MediaStorageApiService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List uploaded media
     * Returns a list of stored media files.
     * @param filterContentType Filters files by given content types
     * @returns any A response with a list of media resources
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public listMediaStorage(
        filterContentType?: string,
    ): CancelablePromise<{
        data?: Array<MediaResource>;
        meta?: PaginationMeta;
    } | Errors> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/media',
            query: {
                'filter[content_type][]': filterContentType,
            },
        });
    }

    /**
     * Upload media
     * Upload media file to Telnyx so it can be used with other Telnyx services
     * @param requestBody Upload media request
     * @returns Errors Unexpected error
     * @returns any A response describing a media resource
     * @throws ApiError
     */
    public createMediaStorage(
        requestBody: UploadMediaRequest,
    ): CancelablePromise<Errors | {
        data?: MediaResource;
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/media',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Deletes stored media
     * Deletes a stored media file.
     * @param mediaName Uniquely identifies a media resource.
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public deleteMediaStorage(
        mediaName: string,
    ): CancelablePromise<Errors> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/media/{media_name}',
            path: {
                'media_name': mediaName,
            },
        });
    }

    /**
     * Retrieve stored media
     * Returns the information about a stored media file.
     * @param mediaName Uniquely identifies a media resource.
     * @returns any A response describing a media resource
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public getMediaStorage(
        mediaName: string,
    ): CancelablePromise<{
        data?: MediaResource;
    } | Errors> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/media/{media_name}',
            path: {
                'media_name': mediaName,
            },
        });
    }

    /**
     * Update stored media
     * Updates a stored media file.
     * @param mediaName Uniquely identifies a media resource.
     * @param requestBody Update media request
     * @returns any A response describing a media resource
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public updateMediaStorage(
        mediaName: string,
        requestBody: UpdateMediaRequest,
    ): CancelablePromise<{
        data?: MediaResource;
    } | Errors> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/media/{media_name}',
            path: {
                'media_name': mediaName,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Download stored media
     * Downloads a stored media file.
     * @param mediaName Uniquely identifies a media resource.
     * @returns binary A response describing a media resource
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public downloadMediaStorage(
        mediaName: string,
    ): CancelablePromise<Blob | Errors> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/media/{media_name}/download',
            path: {
                'media_name': mediaName,
            },
        });
    }

}
