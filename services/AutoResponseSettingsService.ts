/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AutorespConfigsResponseSchema } from '../models/AutorespConfigsResponseSchema.ts';
import type { Errors } from '../models/Errors.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import type { BaseHttpRequest } from '../core/BaseHttpRequest.ts';

export class AutoResponseSettingsService {

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

}
