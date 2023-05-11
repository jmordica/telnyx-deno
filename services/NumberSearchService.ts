/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AvailablePhoneNumber } from '../models/AvailablePhoneNumber.ts';
import type { AvailablePhoneNumberBlock } from '../models/AvailablePhoneNumberBlock.ts';
import type { AvailablePhoneNumbersMetadata } from '../models/AvailablePhoneNumbersMetadata.ts';
import type { Errors } from '../models/Errors.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import type { BaseHttpRequest } from '../core/BaseHttpRequest.ts';

export class NumberSearchService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List available phone number blocks
     * @param filterPhoneNumberStartsWith Filter number blocks that start with a pattern (meant to be used after `national_destination_code` filter has been set).
     * @param filterPhoneNumberEndsWith Filter numbers ending with a pattern.
     * @param filterPhoneNumberContains Filter numbers containing a pattern.
     * @param filterLocality Filter phone numbers by city.
     * @param filterAdministrativeArea Filter phone numbers by US state/CA province.
     * @param filterCountryCode Filter phone numbers by ISO alpha-2 country code.
     * @param filterNationalDestinationCode Filter by the national destination code of the number. This filter is only applicable to North American numbers.
     * @param filterRateCenter Filter phone numbers by NANP rate center. This filter is only applicable to North American numbers.
     * @param filterNumberType Filter phone numbers by number type.
     * @param filterFeatures Filter if the phone number should be used for voice, fax, mms, sms, emergency.
     * @param filterMinimumBlockSize Filter number blocks by minimum blocks size
     * @param filterLimit Limits the number of results.
     * @returns any Successful response with a list of available phone numbers blocks.
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public listAvailablePhoneNumberBlocks(
        filterPhoneNumberStartsWith?: string,
        filterPhoneNumberEndsWith?: string,
        filterPhoneNumberContains?: string,
        filterLocality?: string,
        filterAdministrativeArea?: string,
        filterCountryCode?: string,
        filterNationalDestinationCode?: string,
        filterRateCenter?: string,
        filterNumberType?: 'toll-free',
        filterFeatures?: Array<'sms' | 'mms' | 'voice' | 'fax' | 'emergency'>,
        filterMinimumBlockSize?: number,
        filterLimit?: number,
    ): CancelablePromise<{
        data?: Array<AvailablePhoneNumberBlock>;
        meta?: AvailablePhoneNumbersMetadata;
    } | Errors> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/available_phone_number_blocks',
            query: {
                'filter[phone_number][starts_with]': filterPhoneNumberStartsWith,
                'filter[phone_number][ends_with]': filterPhoneNumberEndsWith,
                'filter[phone_number][contains]': filterPhoneNumberContains,
                'filter[locality]': filterLocality,
                'filter[administrative_area]': filterAdministrativeArea,
                'filter[country_code]': filterCountryCode,
                'filter[national_destination_code]': filterNationalDestinationCode,
                'filter[rate_center]': filterRateCenter,
                'filter[number_type]': filterNumberType,
                'filter[features]': filterFeatures,
                'filter[minimum_block_size]': filterMinimumBlockSize,
                'filter[limit]': filterLimit,
            },
        });
    }

    /**
     * List available phone numbers
     * @param filterPhoneNumberStartsWith Filter numbers starting with a pattern (exclude NDC from start of this filter if used with `national_destination_code` filter).
     * @param filterPhoneNumberEndsWith Filter numbers ending with a pattern (max length of 4 digits if used with `national_destination_code` filter).
     * @param filterPhoneNumberContains Filter numbers containing a pattern (must be used with `national_destination_code` filter and only searches within last 4 digits).
     * @param filterLocality Filter phone numbers by city.
     * @param filterAdministrativeArea Filter phone numbers by US state/CA province.
     * @param filterCountryCode Filter phone numbers by ISO alpha-2 country code.
     * @param filterNationalDestinationCode Filter by the national destination code of the number. This filter is only applicable to North American numbers.
     * @param filterRateCenter Filter phone numbers by NANP rate center. This filter is only applicable to North American numbers.
     * @param filterPhoneNumberType Filter phone numbers by number type.
     * @param filterFeatures Filter if the phone number should be used for voice, fax, mms, sms, emergency.
     * @param filterLimit Limits the number of results.
     * @param filterBestEffort Filter to determine if best effort results should be included. Only available in NANPA countries.
     * @param filterQuickship Filter to exclude phone numbers that need additional time after to purchase to receive phone calls. Only available for toll-free numbers.
     * @param filterReservable Filter to exclude phone numbers that cannot be reserved before purchase.
     * @param filterExcludeHeldNumbers Filter to exclude phone numbers that are currently on hold for your account.
     * @returns any Successful response with a list of available phone numbers.
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public listAvailablePhoneNumbers(
        filterPhoneNumberStartsWith?: string,
        filterPhoneNumberEndsWith?: string,
        filterPhoneNumberContains?: string,
        filterLocality?: string,
        filterAdministrativeArea?: string,
        filterCountryCode?: string,
        filterNationalDestinationCode?: string,
        filterRateCenter?: string,
        filterPhoneNumberType?: 'local' | 'toll_free' | 'mobile' | 'national' | 'shared_cost' | 'landline',
        filterFeatures?: Array<'sms' | 'mms' | 'voice' | 'fax' | 'emergency'>,
        filterLimit?: number,
        filterBestEffort?: boolean,
        filterQuickship?: boolean,
        filterReservable?: boolean,
        filterExcludeHeldNumbers?: boolean,
    ): CancelablePromise<{
        data?: Array<AvailablePhoneNumber>;
        meta?: AvailablePhoneNumbersMetadata;
    } | Errors> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/available_phone_numbers',
            query: {
                'filter[phone_number][starts_with]': filterPhoneNumberStartsWith,
                'filter[phone_number][ends_with]': filterPhoneNumberEndsWith,
                'filter[phone_number][contains]': filterPhoneNumberContains,
                'filter[locality]': filterLocality,
                'filter[administrative_area]': filterAdministrativeArea,
                'filter[country_code]': filterCountryCode,
                'filter[national_destination_code]': filterNationalDestinationCode,
                'filter[rate_center]': filterRateCenter,
                'filter[phone_number_type]': filterPhoneNumberType,
                'filter[features]': filterFeatures,
                'filter[limit]': filterLimit,
                'filter[best_effort]': filterBestEffort,
                'filter[quickship]': filterQuickship,
                'filter[reservable]': filterReservable,
                'filter[exclude_held_numbers]': filterExcludeHeldNumbers,
            },
        });
    }

}
