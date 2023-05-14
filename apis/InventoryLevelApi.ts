// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi.ts';
import {Configuration} from '../configuration.ts';
import {RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http.ts';
import {ObjectSerializer} from '../models/ObjectSerializer.ts';
import {ApiException} from './exception.ts';
import {canConsumeForm, isCodeInRange} from '../util.ts';
import {SecurityAuthentication} from '../auth/auth.ts';


import { CreateInventoryCoverageRequest200Response } from '../models/CreateInventoryCoverageRequest200Response.ts';
import { Errors } from '../models/Errors.ts';

/**
 * no description
 */
export class InventoryLevelApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Creates an inventory coverage request. If locality, npa or national_destination_code is used in groupBy, and no region or locality filters are used, the whole paginated set is returned.
     * Create an inventory coverage request
     * @param filterGroupBy 
     * @param filterNpa 
     * @param filterNxx 
     * @param filterAdministrativeArea 
     * @param filterPhoneNumberType 
     * @param filterCountryCode 
     * @param filterCount 
     * @param filterFeatures Filter if the phone number should be used for voice, fax, mms, sms, emergency. Returns features in the response when used
     */
    public async createInventoryCoverageRequest(filterGroupBy: 'locality' | 'npa' | 'national_destination_code', filterNpa?: number, filterNxx?: number, filterAdministrativeArea?: string, filterPhoneNumberType?: 'local' | 'toll_free' | 'national' | 'mobile' | 'landline' | 'shared_cost', filterCountryCode?: 'US' | 'CA' | 'GB', filterCount?: boolean, filterFeatures?: Array<'sms' | 'mms' | 'voice' | 'fax' | 'emergency'>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'filterGroupBy' is not null or undefined
        if (filterGroupBy === null || filterGroupBy === undefined) {
            throw new RequiredError("InventoryLevelApi", "createInventoryCoverageRequest", "filterGroupBy");
        }









        // Path Params
        const localVarPath = '/inventory_coverage';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (filterNpa !== undefined) {
            requestContext.setQueryParam("filter[npa]", ObjectSerializer.serialize(filterNpa, "number", ""));
        }

        // Query Params
        if (filterNxx !== undefined) {
            requestContext.setQueryParam("filter[nxx]", ObjectSerializer.serialize(filterNxx, "number", ""));
        }

        // Query Params
        if (filterAdministrativeArea !== undefined) {
            requestContext.setQueryParam("filter[administrative_area]", ObjectSerializer.serialize(filterAdministrativeArea, "string", ""));
        }

        // Query Params
        if (filterPhoneNumberType !== undefined) {
            requestContext.setQueryParam("filter[phone_number_type]", ObjectSerializer.serialize(filterPhoneNumberType, "'local' | 'toll_free' | 'national' | 'mobile' | 'landline' | 'shared_cost'", ""));
        }

        // Query Params
        if (filterCountryCode !== undefined) {
            requestContext.setQueryParam("filter[country_code]", ObjectSerializer.serialize(filterCountryCode, "'US' | 'CA' | 'GB'", ""));
        }

        // Query Params
        if (filterCount !== undefined) {
            requestContext.setQueryParam("filter[count]", ObjectSerializer.serialize(filterCount, "boolean", ""));
        }

        // Query Params
        if (filterFeatures !== undefined) {
            requestContext.setQueryParam("filter[features]", ObjectSerializer.serialize(filterFeatures, "Array<'sms' | 'mms' | 'voice' | 'fax' | 'emergency'>", ""));
        }

        // Query Params
        if (filterGroupBy !== undefined) {
            requestContext.setQueryParam("filter[groupBy]", ObjectSerializer.serialize(filterGroupBy, "'locality' | 'npa' | 'national_destination_code'", ""));
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

export class InventoryLevelApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createInventoryCoverageRequest
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createInventoryCoverageRequest(response: ResponseContext): Promise<CreateInventoryCoverageRequest200Response > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CreateInventoryCoverageRequest200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CreateInventoryCoverageRequest200Response", ""
            ) as CreateInventoryCoverageRequest200Response;
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
            const body: CreateInventoryCoverageRequest200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CreateInventoryCoverageRequest200Response", ""
            ) as CreateInventoryCoverageRequest200Response;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
