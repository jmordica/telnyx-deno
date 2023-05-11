/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Errors } from '../models/Errors.ts';
import type { UpdateWhatsappPhoneNumberAboutRequest } from '../models/UpdateWhatsappPhoneNumberAboutRequest.ts';
import type { UpdateWhatsappPhoneNumberRequest } from '../models/UpdateWhatsappPhoneNumberRequest.ts';
import type { UploadWhatsappProfilePhotoRequest } from '../models/UploadWhatsappProfilePhotoRequest.ts';
import type { WhatsappPhoneNumber } from '../models/WhatsappPhoneNumber.ts';
import type { WhatsappProfilePhoto } from '../models/WhatsappProfilePhoto.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import type { BaseHttpRequest } from '../core/BaseHttpRequest.ts';

export class WhatsAppPhoneNumberService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Retrieves a WhatsApp Phone Number
     * @param id Identifies the WhatsApp Phone Number
     * @returns any WhatsApp Phone Number details
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public retrieveWhatsappPhoneNumber(
        id: string,
    ): CancelablePromise<{
        data?: WhatsappPhoneNumber;
    } | Errors> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/whatsapp_phone_numbers/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Update a WhatsApp Phone Number webhook
     * @param id Identifies the WhatsApp Phone Number
     * @param requestBody
     * @returns any Updated WhatsApp Phone Number details
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public patchWhatsappPhoneNumber(
        id: string,
        requestBody: UpdateWhatsappPhoneNumberRequest,
    ): CancelablePromise<{
        data?: WhatsappPhoneNumber;
    } | Errors> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/whatsapp_phone_numbers/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Update a WhatsApp Phone Number about text
     * @param id Identifies the WhatsApp Phone Number
     * @param requestBody
     * @returns any Updated WhatsApp Phone Number about text
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public patchWhatsappPhoneNumberAbout(
        id: string,
        requestBody: UpdateWhatsappPhoneNumberAboutRequest,
    ): CancelablePromise<any | Errors> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/whatsapp_phone_numbers/{id}/about',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Retrieves a Whatsapp Profile Photo for a WhatsApp Phone Number
     * @param id Identifies the WhatsApp Phone Number
     * @returns any WhatsApp Profile Photo
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public retrieveWhatsappProfilePhoto(
        id: string,
    ): CancelablePromise<{
        data?: WhatsappProfilePhoto;
    } | Errors> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/whatsapp_phone_numbers/{id}/photo',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Update the Whatsapp Profile Photo for a given Whatsapp Phone Number
     * @param id Identifies the WhatsApp Phone Number
     * @param formData
     * @returns any WhatsApp Profile Photo
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public patchWhatsappProfilePhoto(
        id: string,
        formData: UploadWhatsappProfilePhotoRequest,
    ): CancelablePromise<{
        data?: WhatsappProfilePhoto;
    } | Errors> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/whatsapp_phone_numbers/{id}/photo',
            path: {
                'id': id,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

}
