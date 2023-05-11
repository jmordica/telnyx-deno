/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Errors } from '../models/Errors.ts';
import type { InventoryCoverage } from '../models/InventoryCoverage.ts';
import type { InventoryCoverageMetadata } from '../models/InventoryCoverageMetadata.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import type { BaseHttpRequest } from '../core/BaseHttpRequest.ts';

export class InventoryLevelService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Create an inventory coverage request
     * Creates an inventory coverage request. If locality, npa or national_destination_code is used in groupBy, and no region or locality filters are used, the whole paginated set is returned.
     * @param filterGroupBy
     * @param filterNpa
     * @param filterNxx
     * @param filterAdministrativeArea
     * @param filterPhoneNumberType
     * @param filterCountryCode
     * @param filterCount
     * @param filterFeatures Filter if the phone number should be used for voice, fax, mms, sms, emergency. Returns features in the response when used
     * @returns any Successful response with a list of inventory coverage levels
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public createInventoryCoverageRequest(
        filterGroupBy: 'locality' | 'npa' | 'national_destination_code',
        filterNpa?: number,
        filterNxx?: number,
        filterAdministrativeArea?: string,
        filterPhoneNumberType?: 'local' | 'toll_free' | 'national' | 'mobile' | 'landline' | 'shared_cost',
        filterCountryCode?: 'US' | 'CA' | 'GB',
        filterCount?: boolean,
        filterFeatures?: Array<'sms' | 'mms' | 'voice' | 'fax' | 'emergency'>,
    ): CancelablePromise<{
        data?: Array<InventoryCoverage>;
        meta?: InventoryCoverageMetadata;
    } | Errors> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/inventory_coverage',
            query: {
                'filter[npa]': filterNpa,
                'filter[nxx]': filterNxx,
                'filter[administrative_area]': filterAdministrativeArea,
                'filter[phone_number_type]': filterPhoneNumberType,
                'filter[country_code]': filterCountryCode,
                'filter[count]': filterCount,
                'filter[features]': filterFeatures,
                'filter[groupBy]': filterGroupBy,
            },
        });
    }

}
