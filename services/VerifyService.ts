/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateVerificationRequestCall } from '../models/CreateVerificationRequestCall.ts';
import type { CreateVerificationRequestFlashcall } from '../models/CreateVerificationRequestFlashcall.ts';
import type { CreateVerificationRequestPSD2 } from '../models/CreateVerificationRequestPSD2.ts';
import type { CreateVerificationRequestSMS } from '../models/CreateVerificationRequestSMS.ts';
import type { CreateVerificationRequestWhatsapp } from '../models/CreateVerificationRequestWhatsapp.ts';
import type { CreateVerificationResponse } from '../models/CreateVerificationResponse.ts';
import type { CreateVerifyProfileCallRequest } from '../models/CreateVerifyProfileCallRequest.ts';
import type { CreateVerifyProfileFlashcallRequest } from '../models/CreateVerifyProfileFlashcallRequest.ts';
import type { CreateVerifyProfilePSD2Request } from '../models/CreateVerifyProfilePSD2Request.ts';
import type { CreateVerifyProfileSMSRequest } from '../models/CreateVerifyProfileSMSRequest.ts';
import type { CreateVerifyProfileWhatsappRequest } from '../models/CreateVerifyProfileWhatsappRequest.ts';
import type { ListVerificationsResponse } from '../models/ListVerificationsResponse.ts';
import type { ListVerifyProfilesResponse } from '../models/ListVerifyProfilesResponse.ts';
import type { RetrieveVerificationResponse } from '../models/RetrieveVerificationResponse.ts';
import type { UpdateVerifyProfileCallRequest } from '../models/UpdateVerifyProfileCallRequest.ts';
import type { UpdateVerifyProfileFlashcallRequest } from '../models/UpdateVerifyProfileFlashcallRequest.ts';
import type { UpdateVerifyProfilePSD2Request } from '../models/UpdateVerifyProfilePSD2Request.ts';
import type { UpdateVerifyProfileSMSRequest } from '../models/UpdateVerifyProfileSMSRequest.ts';
import type { UpdateVerifyProfileWhatsappRequest } from '../models/UpdateVerifyProfileWhatsappRequest.ts';
import type { VerifyProfileResponseDataWrapper } from '../models/VerifyProfileResponseDataWrapper.ts';
import type { VerifyVerificationCodeRequest } from '../models/VerifyVerificationCodeRequest.ts';
import type { VerifyVerificationCodeResponse } from '../models/VerifyVerificationCodeResponse.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import type { BaseHttpRequest } from '../core/BaseHttpRequest.ts';

export class VerifyService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List verifications by phone number
     * @param phoneNumber The phone number associated with the verifications to retrieve.
     * @returns ListVerificationsResponse Expected verifications response to a valid request.
     * @throws ApiError
     */
    public listVerifications(
        phoneNumber: string,
    ): CancelablePromise<ListVerificationsResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/verifications/by_phone_number/{phone_number}',
            path: {
                'phone_number': phoneNumber,
            },
            errors: {
                400: `Unexpected error`,
            },
        });
    }

    /**
     * Submit a verification code. Deprecation notice: `verify_profile_id' is now a mandatory field. The sunset date for this change is 2022-04-02 00:00:00.
     * @param phoneNumber The phone number associated with the verification code being verified.
     * @param requestBody
     * @returns VerifyVerificationCodeResponse Expected verify response to a valid request.
     * @throws ApiError
     */
    public verifyVerificationCode(
        phoneNumber: string,
        requestBody: VerifyVerificationCodeRequest,
    ): CancelablePromise<VerifyVerificationCodeResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/verifications/by_phone_number/{phone_number}/actions/verify',
            path: {
                'phone_number': phoneNumber,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Unexpected error`,
            },
        });
    }

    /**
     * Trigger a Call verification
     * @param requestBody
     * @returns CreateVerificationResponse Expected verifications response to a valid request.
     * @throws ApiError
     */
    public createVerificationCall(
        requestBody: CreateVerificationRequestCall,
    ): CancelablePromise<CreateVerificationResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/verifications/call',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Unexpected error`,
            },
        });
    }

    /**
     * Trigger a Flash call verification
     * @param requestBody
     * @returns CreateVerificationResponse Expected verifications response to a valid request.
     * @throws ApiError
     */
    public createVerificationFlashcall(
        requestBody: CreateVerificationRequestFlashcall,
    ): CancelablePromise<CreateVerificationResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/verifications/flashcall',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Unexpected error`,
            },
        });
    }

    /**
     * Trigger a PSD2 verification
     * @param requestBody
     * @returns CreateVerificationResponse Expected verifications response to a valid request.
     * @throws ApiError
     */
    public createVerificationPsd2(
        requestBody: CreateVerificationRequestPSD2,
    ): CancelablePromise<CreateVerificationResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/verifications/psd2',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Unexpected error`,
            },
        });
    }

    /**
     * Trigger a SMS verification
     * @param requestBody
     * @returns CreateVerificationResponse Expected verifications response to a valid request.
     * @throws ApiError
     */
    public createVerificationSms(
        requestBody: CreateVerificationRequestSMS,
    ): CancelablePromise<CreateVerificationResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/verifications/sms',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Unexpected error`,
            },
        });
    }

    /**
     * Trigger a Whatsapp verification
     * @param requestBody
     * @returns CreateVerificationResponse Expected verifications response to a valid request.
     * @throws ApiError
     */
    public createVerificationWhatsapp(
        requestBody: CreateVerificationRequestWhatsapp,
    ): CancelablePromise<CreateVerificationResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/verifications/whatsapp',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Unexpected error`,
            },
        });
    }

    /**
     * Retrieve a verification
     * @param verificationId The identifier of the verification to retrieve.
     * @returns RetrieveVerificationResponse Expected verifications response to a valid request.
     * @throws ApiError
     */
    public retrieveVerification(
        verificationId: string,
    ): CancelablePromise<RetrieveVerificationResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/verifications/{verification_id}',
            path: {
                'verification_id': verificationId,
            },
            errors: {
                400: `Unexpected error`,
            },
        });
    }

    /**
     * List all Verify profiles
     * Gets a paginated list of Verify profiles.
     * @param filterName
     * @param pageSize
     * @param pageNumber
     * @returns ListVerifyProfilesResponse Expected Verify profile response to a valid request.
     * @throws ApiError
     */
    public listVerifyProfiles(
        filterName?: string,
        pageSize: number = 25,
        pageNumber: number = 1,
    ): CancelablePromise<ListVerifyProfilesResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/verify_profiles',
            query: {
                'filter[name]': filterName,
                'page[size]': pageSize,
                'page[number]': pageNumber,
            },
            errors: {
                400: `Unexpected error`,
            },
        });
    }

    /**
     * Create a Verify profile
     * Creates a new Verify profile to associate verifications with.
     * @param requestBody
     * @returns VerifyProfileResponseDataWrapper Expected Verify profile response to a valid request.
     * @throws ApiError
     */
    public createVerifyProfile(
        requestBody: {
            name: string;
            webhook_url?: string;
            webhook_failover_url?: string;
            sms?: CreateVerifyProfileSMSRequest;
            psd2?: CreateVerifyProfilePSD2Request;
            whatsapp?: CreateVerifyProfileWhatsappRequest;
            call?: CreateVerifyProfileCallRequest;
            flashcall?: CreateVerifyProfileFlashcallRequest;
            language?: string;
        },
    ): CancelablePromise<VerifyProfileResponseDataWrapper> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/verify_profiles',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Unexpected error`,
            },
        });
    }

    /**
     * Delete a Verify profile
     * @param verifyProfileId The identifier of the Verify profile to delete.
     * @returns VerifyProfileResponseDataWrapper Expected Verify profile response to a valid request.
     * @throws ApiError
     */
    public deleteVerifyProfile(
        verifyProfileId: string,
    ): CancelablePromise<VerifyProfileResponseDataWrapper> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/verify_profiles/{verify_profile_id}',
            path: {
                'verify_profile_id': verifyProfileId,
            },
            errors: {
                400: `Unexpected error`,
            },
        });
    }

    /**
     * Retrieve a Verify profile
     * Gets a single Verify profile.
     * @param verifyProfileId The identifier of the Verify profile to retrieve.
     * @returns VerifyProfileResponseDataWrapper Expected Verify profile response to a valid request.
     * @throws ApiError
     */
    public retrieveVerifyProfile(
        verifyProfileId: string,
    ): CancelablePromise<VerifyProfileResponseDataWrapper> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/verify_profiles/{verify_profile_id}',
            path: {
                'verify_profile_id': verifyProfileId,
            },
            errors: {
                400: `Unexpected error`,
            },
        });
    }

    /**
     * Update a Verify profile
     * @param verifyProfileId The identifier of the Verify profile to update.
     * @param requestBody
     * @returns VerifyProfileResponseDataWrapper Expected Verify profile response to a valid request.
     * @throws ApiError
     */
    public updateVerifyProfile(
        verifyProfileId: string,
        requestBody: {
            name?: string;
            webhook_url?: string;
            webhook_failover_url?: string;
            sms?: UpdateVerifyProfileSMSRequest;
            psd2?: UpdateVerifyProfilePSD2Request;
            whatsapp?: UpdateVerifyProfileWhatsappRequest;
            call?: UpdateVerifyProfileCallRequest;
            flashcall?: UpdateVerifyProfileFlashcallRequest;
            language?: string;
        },
    ): CancelablePromise<VerifyProfileResponseDataWrapper> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/verify_profiles/{verify_profile_id}',
            path: {
                'verify_profile_id': verifyProfileId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Unexpected error`,
            },
        });
    }

}
