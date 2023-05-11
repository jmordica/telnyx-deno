/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Errors } from '../models/Errors.ts';
import type { MediaRequestBody } from '../models/MediaRequestBody.ts';
import type { UploadMedia } from '../models/UploadMedia.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import type { BaseHttpRequest } from '../core/BaseHttpRequest.ts';

export class WhatsAppMediaService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Upload Media
     * Upload media. Accepted media types include image/jpeg, image/png, video/mp4, video/3gpp, audio/aac, audio/ogg.
     * @param formData
     * @returns any Successful response
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public uploadMedia(
        formData: MediaRequestBody,
    ): CancelablePromise<{
        data?: Array<UploadMedia>;
    } | Errors> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/whatsapp_media',
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * Delete Media
     * Delete uploaded media.
     * @param whatsappUserId User's WhatsApp ID
     * @param mediaId WhatsApp's Media ID
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public deleteMedia(
        whatsappUserId: string,
        mediaId: string,
    ): CancelablePromise<Errors> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/whatsapp_media/{whatsapp_user_id}/{media_id}',
            path: {
                'whatsapp_user_id': whatsappUserId,
                'media_id': mediaId,
            },
        });
    }

    /**
     * Download Media
     * Retrieve uploaded media. Media is typically available for 30 days after uploading.
     * @param whatsappUserId User's WhatsApp ID
     * @param mediaId WhatsApp's Media ID
     * @returns binary Successful response
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public downloadMedia(
        whatsappUserId: string,
        mediaId: string,
    ): CancelablePromise<Blob | Errors> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/whatsapp_media/{whatsapp_user_id}/{media_id}',
            path: {
                'whatsapp_user_id': whatsappUserId,
                'media_id': mediaId,
            },
        });
    }

}
