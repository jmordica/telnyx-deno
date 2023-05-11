/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AutoRespConfigCreateSchema } from '../models/AutoRespConfigCreateSchema.ts';
import type { AutorespConfigResponseSchema } from '../models/AutorespConfigResponseSchema.ts';
import type { AutorespConfigsResponseSchema } from '../models/AutorespConfigsResponseSchema.ts';
import type { Errors } from '../models/Errors.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import type { BaseHttpRequest } from '../core/BaseHttpRequest.ts';

export class AdvancedOptInOptOutService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List Auto-Response Settings
     * @param profileId
     * @param countryCode
     * @param createdAtGte
     * @param createdAtLte
     * @param updatedAtGte
     * @param updatedAtLte
     * @returns AutorespConfigsResponseSchema Successful Response
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public getAutorespConfigsApiV2AutorespConfigsProfileIdGet(
        profileId: string,
        countryCode?: string,
        createdAtGte?: string,
        createdAtLte?: string,
        updatedAtGte?: string,
        updatedAtLte?: string,
    ): CancelablePromise<AutorespConfigsResponseSchema | Errors> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/messaging_profiles/{profile_id}/autoresp_configs',
            path: {
                'profile_id': profileId,
            },
            query: {
                'country_code': countryCode,
                'created_at[gte]': createdAtGte,
                'created_at[lte]': createdAtLte,
                'updated_at[gte]': updatedAtGte,
                'updated_at[lte]': updatedAtLte,
            },
        });
    }

    /**
     * Create Auto-Reponse Setting
     * @param profileId
     * @param requestBody
     * @returns AutorespConfigResponseSchema Successful Response
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public createAutorespConfigApiV2AutorespConfigsProfileIdPost(
        profileId: string,
        requestBody: AutoRespConfigCreateSchema,
    ): CancelablePromise<AutorespConfigResponseSchema | Errors> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/messaging_profiles/{profile_id}/autoresp_configs',
            path: {
                'profile_id': profileId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Delete Auto-Response Setting
     * @param profileId
     * @param autorespCfgId
     * @returns any Successful Response
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public deleteAutorespConfigApiV2AutorespConfigsProfileIdAutorespCfgIdDelete(
        profileId: string,
        autorespCfgId: string,
    ): CancelablePromise<any | Errors> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/messaging_profiles/{profile_id}/autoresp_configs/{autoresp_cfg_id}',
            path: {
                'profile_id': profileId,
                'autoresp_cfg_id': autorespCfgId,
            },
        });
    }

    /**
     * Get Auto-Response Setting
     * @param profileId
     * @param autorespCfgId
     * @returns AutorespConfigResponseSchema Successful Response
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public getAutorespConfigApiV2AutorespConfigsProfileIdAutorespCfgIdGet(
        profileId: string,
        autorespCfgId: string,
    ): CancelablePromise<AutorespConfigResponseSchema | Errors> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/messaging_profiles/{profile_id}/autoresp_configs/{autoresp_cfg_id}',
            path: {
                'profile_id': profileId,
                'autoresp_cfg_id': autorespCfgId,
            },
        });
    }

    /**
     * Update Auto-Response Setting
     * @param profileId
     * @param autorespCfgId
     * @param requestBody
     * @returns AutorespConfigResponseSchema Successful Response
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public updateAutorespConfigApiV2AutorespConfigsProfileIdAutorespCfgIdPut(
        profileId: string,
        autorespCfgId: string,
        requestBody: AutoRespConfigCreateSchema,
    ): CancelablePromise<AutorespConfigResponseSchema | Errors> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/messaging_profiles/{profile_id}/autoresp_configs/{autoresp_cfg_id}',
            path: {
                'profile_id': profileId,
                'autoresp_cfg_id': autorespCfgId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
