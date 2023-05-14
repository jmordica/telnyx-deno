// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi.ts';
import {Configuration} from '../configuration.ts';
import {RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http.ts';
import {ObjectSerializer} from '../models/ObjectSerializer.ts';
import {ApiException} from './exception.ts';
import {canConsumeForm, isCodeInRange} from '../util.ts';
import {SecurityAuthentication} from '../auth/auth.ts';


import { Errors } from '../models/Errors.ts';
import { ListAvailablePhoneNumbersBlocksResponse } from '../models/ListAvailablePhoneNumbersBlocksResponse.ts';
import { ListAvailablePhoneNumbersResponse } from '../models/ListAvailablePhoneNumbersResponse.ts';

/**
 * no description
 */
export class NumberSearchApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * List available phone number blocks
     * @param filterPhoneNumberStartsWith Filter number blocks that start with a pattern (meant to be used after &#x60;national_destination_code&#x60; filter has been set).
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
     */
    public async listAvailablePhoneNumberBlocks(filterPhoneNumberStartsWith?: string, filterPhoneNumberEndsWith?: string, filterPhoneNumberContains?: string, filterLocality?: string, filterAdministrativeArea?: string, filterCountryCode?: string, filterNationalDestinationCode?: string, filterRateCenter?: string, filterNumberType?: 'toll-free', filterFeatures?: Array<'sms' | 'mms' | 'voice' | 'fax' | 'emergency'>, filterMinimumBlockSize?: number, filterLimit?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;













        // Path Params
        const localVarPath = '/available_phone_number_blocks';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (filterPhoneNumberStartsWith !== undefined) {
            requestContext.setQueryParam("filter[phone_number][starts_with]", ObjectSerializer.serialize(filterPhoneNumberStartsWith, "string", ""));
        }

        // Query Params
        if (filterPhoneNumberEndsWith !== undefined) {
            requestContext.setQueryParam("filter[phone_number][ends_with]", ObjectSerializer.serialize(filterPhoneNumberEndsWith, "string", ""));
        }

        // Query Params
        if (filterPhoneNumberContains !== undefined) {
            requestContext.setQueryParam("filter[phone_number][contains]", ObjectSerializer.serialize(filterPhoneNumberContains, "string", ""));
        }

        // Query Params
        if (filterLocality !== undefined) {
            requestContext.setQueryParam("filter[locality]", ObjectSerializer.serialize(filterLocality, "string", ""));
        }

        // Query Params
        if (filterAdministrativeArea !== undefined) {
            requestContext.setQueryParam("filter[administrative_area]", ObjectSerializer.serialize(filterAdministrativeArea, "string", ""));
        }

        // Query Params
        if (filterCountryCode !== undefined) {
            requestContext.setQueryParam("filter[country_code]", ObjectSerializer.serialize(filterCountryCode, "string", ""));
        }

        // Query Params
        if (filterNationalDestinationCode !== undefined) {
            requestContext.setQueryParam("filter[national_destination_code]", ObjectSerializer.serialize(filterNationalDestinationCode, "string", ""));
        }

        // Query Params
        if (filterRateCenter !== undefined) {
            requestContext.setQueryParam("filter[rate_center]", ObjectSerializer.serialize(filterRateCenter, "string", ""));
        }

        // Query Params
        if (filterNumberType !== undefined) {
            requestContext.setQueryParam("filter[number_type]", ObjectSerializer.serialize(filterNumberType, "'toll-free'", ""));
        }

        // Query Params
        if (filterFeatures !== undefined) {
            requestContext.setQueryParam("filter[features]", ObjectSerializer.serialize(filterFeatures, "Array<'sms' | 'mms' | 'voice' | 'fax' | 'emergency'>", ""));
        }

        // Query Params
        if (filterMinimumBlockSize !== undefined) {
            requestContext.setQueryParam("filter[minimum_block_size]", ObjectSerializer.serialize(filterMinimumBlockSize, "number", ""));
        }

        // Query Params
        if (filterLimit !== undefined) {
            requestContext.setQueryParam("filter[limit]", ObjectSerializer.serialize(filterLimit, "number", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["bearerAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * List available phone numbers
     * @param filterPhoneNumberStartsWith Filter numbers starting with a pattern (exclude NDC from start of this filter if used with &#x60;national_destination_code&#x60; filter).
     * @param filterPhoneNumberEndsWith Filter numbers ending with a pattern (max length of 4 digits if used with &#x60;national_destination_code&#x60; filter).
     * @param filterPhoneNumberContains Filter numbers containing a pattern (must be used with &#x60;national_destination_code&#x60; filter and only searches within last 4 digits).
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
     */
    public async listAvailablePhoneNumbers(filterPhoneNumberStartsWith?: string, filterPhoneNumberEndsWith?: string, filterPhoneNumberContains?: string, filterLocality?: string, filterAdministrativeArea?: string, filterCountryCode?: string, filterNationalDestinationCode?: string, filterRateCenter?: string, filterPhoneNumberType?: 'local' | 'toll_free' | 'mobile' | 'national' | 'shared_cost' | 'landline', filterFeatures?: Array<'sms' | 'mms' | 'voice' | 'fax' | 'emergency'>, filterLimit?: number, filterBestEffort?: boolean, filterQuickship?: boolean, filterReservable?: boolean, filterExcludeHeldNumbers?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;
















        // Path Params
        const localVarPath = '/available_phone_numbers';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (filterPhoneNumberStartsWith !== undefined) {
            requestContext.setQueryParam("filter[phone_number][starts_with]", ObjectSerializer.serialize(filterPhoneNumberStartsWith, "string", ""));
        }

        // Query Params
        if (filterPhoneNumberEndsWith !== undefined) {
            requestContext.setQueryParam("filter[phone_number][ends_with]", ObjectSerializer.serialize(filterPhoneNumberEndsWith, "string", ""));
        }

        // Query Params
        if (filterPhoneNumberContains !== undefined) {
            requestContext.setQueryParam("filter[phone_number][contains]", ObjectSerializer.serialize(filterPhoneNumberContains, "string", ""));
        }

        // Query Params
        if (filterLocality !== undefined) {
            requestContext.setQueryParam("filter[locality]", ObjectSerializer.serialize(filterLocality, "string", ""));
        }

        // Query Params
        if (filterAdministrativeArea !== undefined) {
            requestContext.setQueryParam("filter[administrative_area]", ObjectSerializer.serialize(filterAdministrativeArea, "string", ""));
        }

        // Query Params
        if (filterCountryCode !== undefined) {
            requestContext.setQueryParam("filter[country_code]", ObjectSerializer.serialize(filterCountryCode, "string", ""));
        }

        // Query Params
        if (filterNationalDestinationCode !== undefined) {
            requestContext.setQueryParam("filter[national_destination_code]", ObjectSerializer.serialize(filterNationalDestinationCode, "string", ""));
        }

        // Query Params
        if (filterRateCenter !== undefined) {
            requestContext.setQueryParam("filter[rate_center]", ObjectSerializer.serialize(filterRateCenter, "string", ""));
        }

        // Query Params
        if (filterPhoneNumberType !== undefined) {
            requestContext.setQueryParam("filter[phone_number_type]", ObjectSerializer.serialize(filterPhoneNumberType, "'local' | 'toll_free' | 'mobile' | 'national' | 'shared_cost' | 'landline'", ""));
        }

        // Query Params
        if (filterFeatures !== undefined) {
            requestContext.setQueryParam("filter[features]", ObjectSerializer.serialize(filterFeatures, "Array<'sms' | 'mms' | 'voice' | 'fax' | 'emergency'>", ""));
        }

        // Query Params
        if (filterLimit !== undefined) {
            requestContext.setQueryParam("filter[limit]", ObjectSerializer.serialize(filterLimit, "number", ""));
        }

        // Query Params
        if (filterBestEffort !== undefined) {
            requestContext.setQueryParam("filter[best_effort]", ObjectSerializer.serialize(filterBestEffort, "boolean", ""));
        }

        // Query Params
        if (filterQuickship !== undefined) {
            requestContext.setQueryParam("filter[quickship]", ObjectSerializer.serialize(filterQuickship, "boolean", ""));
        }

        // Query Params
        if (filterReservable !== undefined) {
            requestContext.setQueryParam("filter[reservable]", ObjectSerializer.serialize(filterReservable, "boolean", ""));
        }

        // Query Params
        if (filterExcludeHeldNumbers !== undefined) {
            requestContext.setQueryParam("filter[exclude_held_numbers]", ObjectSerializer.serialize(filterExcludeHeldNumbers, "boolean", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["bearerAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class NumberSearchApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listAvailablePhoneNumberBlocks
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listAvailablePhoneNumberBlocks(response: ResponseContext): Promise<ListAvailablePhoneNumbersBlocksResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ListAvailablePhoneNumbersBlocksResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListAvailablePhoneNumbersBlocksResponse", ""
            ) as ListAvailablePhoneNumbersBlocksResponse;
            return body;
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: Errors = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Errors", ""
            ) as Errors;
            throw new ApiException<Errors>(response.httpStatusCode, "Unexpected error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ListAvailablePhoneNumbersBlocksResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListAvailablePhoneNumbersBlocksResponse", ""
            ) as ListAvailablePhoneNumbersBlocksResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listAvailablePhoneNumbers
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listAvailablePhoneNumbers(response: ResponseContext): Promise<ListAvailablePhoneNumbersResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ListAvailablePhoneNumbersResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListAvailablePhoneNumbersResponse", ""
            ) as ListAvailablePhoneNumbersResponse;
            return body;
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: Errors = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Errors", ""
            ) as Errors;
            throw new ApiException<Errors>(response.httpStatusCode, "Unexpected error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ListAvailablePhoneNumbersResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListAvailablePhoneNumbersResponse", ""
            ) as ListAvailablePhoneNumbersResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
