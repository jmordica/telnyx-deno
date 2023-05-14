// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi.ts';
import {Configuration} from '../configuration.ts';
import {RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http.ts';
import {ObjectSerializer} from '../models/ObjectSerializer.ts';
import {ApiException} from './exception.ts';
import {canConsumeForm, isCodeInRange} from '../util.ts';
import {SecurityAuthentication} from '../auth/auth.ts';


import { Errors } from '../models/Errors.ts';
import { ListMessagingSettingsResponse } from '../models/ListMessagingSettingsResponse.ts';
import { ListPhoneNumbersResponse } from '../models/ListPhoneNumbersResponse.ts';
import { ListPhoneNumbersWithVoiceSettingsResponse } from '../models/ListPhoneNumbersWithVoiceSettingsResponse.ts';
import { PhoneNumberEnableEmergency } from '../models/PhoneNumberEnableEmergency.ts';
import { PhoneNumberEnableEmergencyRequest } from '../models/PhoneNumberEnableEmergencyRequest.ts';
import { PhoneNumberResponse } from '../models/PhoneNumberResponse.ts';
import { PhoneNumberResponse1 } from '../models/PhoneNumberResponse1.ts';
import { RetrieveMessagingSettingsResponse } from '../models/RetrieveMessagingSettingsResponse.ts';
import { RetrievePhoneNumberVoiceResponse } from '../models/RetrievePhoneNumberVoiceResponse.ts';
import { UpdatePhoneNumberMessagingSettingsRequest } from '../models/UpdatePhoneNumberMessagingSettingsRequest.ts';
import { UpdatePhoneNumberRequest } from '../models/UpdatePhoneNumberRequest.ts';
import { UpdatePhoneNumberVoiceSettingsRequest } from '../models/UpdatePhoneNumberVoiceSettingsRequest.ts';

/**
 * no description
 */
export class NumberConfigurationsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Delete a phone number
     * @param id Identifies the resource.
     */
    public async deletePhoneNumber(id: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("NumberConfigurationsApi", "deletePhoneNumber", "id");
        }


        // Path Params
        const localVarPath = '/phone_numbers/{id}'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


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
     * Enable emergency for a phone number
     * @param id Identifies the resource.
     * @param phoneNumberEnableEmergencyRequest 
     */
    public async enableEmergencyPhoneNumber(id: string, phoneNumberEnableEmergencyRequest: PhoneNumberEnableEmergencyRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("NumberConfigurationsApi", "enableEmergencyPhoneNumber", "id");
        }


        // verify required parameter 'phoneNumberEnableEmergencyRequest' is not null or undefined
        if (phoneNumberEnableEmergencyRequest === null || phoneNumberEnableEmergencyRequest === undefined) {
            throw new RequiredError("NumberConfigurationsApi", "enableEmergencyPhoneNumber", "phoneNumberEnableEmergencyRequest");
        }


        // Path Params
        const localVarPath = '/phone_numbers/{id}/actions/enable_emergency'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(phoneNumberEnableEmergencyRequest, "PhoneNumberEnableEmergencyRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

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
     * List phone numbers
     * @param pageNumber The page number to load
     * @param pageSize The size of the page
     * @param filterTag Filter by phone number tags.
     * @param filterPhoneNumber Filter by phone number. Requires at least three digits.              Non-numerical characters will result in no values being returned.
     * @param filterStatus Filter by phone number status.
     * @param filterConnectionId Filter by connection_id.
     * @param filterVoiceConnectionNameContains Filter contains connection name. Requires at least three characters.
     * @param filterVoiceConnectionNameStartsWith Filter starts with connection name. Requires at least three characters.
     * @param filterVoiceConnectionNameEndsWith Filter ends with connection name. Requires at least three characters.
     * @param filterVoiceConnectionNameEq Filter by connection name.
     * @param filterUsagePaymentMethod Filter by usage_payment_method.
     * @param filterBillingGroupId Filter by the billing_group_id associated with phone numbers. To filter to only phone numbers that have no billing group associated them, set the value of this filter to the string \&#39;null\&#39;.
     * @param filterEmergencyAddressId Filter by the emergency_address_id associated with phone numbers. To filter only phone numbers that have no emergency address associated with them, set the value of this filter to the string \&#39;null\&#39;.
     * @param filterCustomerReference Filter numbers via the customer_reference set.
     * @param sort Specifies the sort order for results. If not given, results are sorted by created_at in descending order.
     */
    public async listPhoneNumbers(pageNumber?: number, pageSize?: number, filterTag?: string, filterPhoneNumber?: string, filterStatus?: 'purchase_pending' | 'purchase_failed' | 'port_pending' | 'active' | 'deleted' | 'port_failed' | 'emergency_only' | 'ported_out' | 'port_out_pending', filterConnectionId?: string, filterVoiceConnectionNameContains?: string, filterVoiceConnectionNameStartsWith?: string, filterVoiceConnectionNameEndsWith?: string, filterVoiceConnectionNameEq?: string, filterUsagePaymentMethod?: 'pay-per-minute' | 'channel', filterBillingGroupId?: string, filterEmergencyAddressId?: string, filterCustomerReference?: string, sort?: 'purchased_at' | 'phone_number' | 'connection_name' | 'usage_payment_method', _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;
















        // Path Params
        const localVarPath = '/phone_numbers';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (pageNumber !== undefined) {
            requestContext.setQueryParam("page[number]", ObjectSerializer.serialize(pageNumber, "number", ""));
        }

        // Query Params
        if (pageSize !== undefined) {
            requestContext.setQueryParam("page[size]", ObjectSerializer.serialize(pageSize, "number", ""));
        }

        // Query Params
        if (filterTag !== undefined) {
            requestContext.setQueryParam("filter[tag]", ObjectSerializer.serialize(filterTag, "string", ""));
        }

        // Query Params
        if (filterPhoneNumber !== undefined) {
            requestContext.setQueryParam("filter[phone_number]", ObjectSerializer.serialize(filterPhoneNumber, "string", ""));
        }

        // Query Params
        if (filterStatus !== undefined) {
            requestContext.setQueryParam("filter[status]", ObjectSerializer.serialize(filterStatus, "'purchase_pending' | 'purchase_failed' | 'port_pending' | 'active' | 'deleted' | 'port_failed' | 'emergency_only' | 'ported_out' | 'port_out_pending'", ""));
        }

        // Query Params
        if (filterConnectionId !== undefined) {
            requestContext.setQueryParam("filter[connection_id]", ObjectSerializer.serialize(filterConnectionId, "string", "int64"));
        }

        // Query Params
        if (filterVoiceConnectionNameContains !== undefined) {
            requestContext.setQueryParam("filter[voice.connection_name][contains]", ObjectSerializer.serialize(filterVoiceConnectionNameContains, "string", ""));
        }

        // Query Params
        if (filterVoiceConnectionNameStartsWith !== undefined) {
            requestContext.setQueryParam("filter[voice.connection_name][starts_with]", ObjectSerializer.serialize(filterVoiceConnectionNameStartsWith, "string", ""));
        }

        // Query Params
        if (filterVoiceConnectionNameEndsWith !== undefined) {
            requestContext.setQueryParam("filter[voice.connection_name][ends_with]", ObjectSerializer.serialize(filterVoiceConnectionNameEndsWith, "string", ""));
        }

        // Query Params
        if (filterVoiceConnectionNameEq !== undefined) {
            requestContext.setQueryParam("filter[voice.connection_name][eq]", ObjectSerializer.serialize(filterVoiceConnectionNameEq, "string", ""));
        }

        // Query Params
        if (filterUsagePaymentMethod !== undefined) {
            requestContext.setQueryParam("filter[usage_payment_method]", ObjectSerializer.serialize(filterUsagePaymentMethod, "'pay-per-minute' | 'channel'", ""));
        }

        // Query Params
        if (filterBillingGroupId !== undefined) {
            requestContext.setQueryParam("filter[billing_group_id]", ObjectSerializer.serialize(filterBillingGroupId, "string", ""));
        }

        // Query Params
        if (filterEmergencyAddressId !== undefined) {
            requestContext.setQueryParam("filter[emergency_address_id]", ObjectSerializer.serialize(filterEmergencyAddressId, "string", "int64"));
        }

        // Query Params
        if (filterCustomerReference !== undefined) {
            requestContext.setQueryParam("filter[customer_reference]", ObjectSerializer.serialize(filterCustomerReference, "string", ""));
        }

        // Query Params
        if (sort !== undefined) {
            requestContext.setQueryParam("sort", ObjectSerializer.serialize(sort, "'purchased_at' | 'phone_number' | 'connection_name' | 'usage_payment_method'", ""));
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
     * List phone numbers with messaging settings
     * @param pageNumber The page number to load
     * @param pageSize The size of the page
     */
    public async listPhoneNumbersWithMessagingSettings(pageNumber?: number, pageSize?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;



        // Path Params
        const localVarPath = '/phone_numbers/messaging';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (pageNumber !== undefined) {
            requestContext.setQueryParam("page[number]", ObjectSerializer.serialize(pageNumber, "number", ""));
        }

        // Query Params
        if (pageSize !== undefined) {
            requestContext.setQueryParam("page[size]", ObjectSerializer.serialize(pageSize, "number", ""));
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
     * List phone numbers with voice settings
     * @param pageNumber The page number to load
     * @param pageSize The size of the page
     * @param filterPhoneNumber Filter by phone number. Requires at least three digits.              Non-numerical characters will result in no values being returned.
     * @param filterConnectionNameContains Filter contains connection name. Requires at least three characters.
     * @param filterCustomerReference Filter numbers via the customer_reference set.
     * @param filterUsagePaymentMethod Filter by usage_payment_method.
     * @param sort Specifies the sort order for results. If not given, results are sorted by created_at in descending order.
     */
    public async listPhoneNumbersWithVoiceSettings(pageNumber?: number, pageSize?: number, filterPhoneNumber?: string, filterConnectionNameContains?: string, filterCustomerReference?: string, filterUsagePaymentMethod?: 'pay-per-minute' | 'channel', sort?: 'purchased_at' | 'phone_number' | 'connection_name' | 'usage_payment_method', _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;








        // Path Params
        const localVarPath = '/phone_numbers/voice';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (pageNumber !== undefined) {
            requestContext.setQueryParam("page[number]", ObjectSerializer.serialize(pageNumber, "number", ""));
        }

        // Query Params
        if (pageSize !== undefined) {
            requestContext.setQueryParam("page[size]", ObjectSerializer.serialize(pageSize, "number", ""));
        }

        // Query Params
        if (filterPhoneNumber !== undefined) {
            requestContext.setQueryParam("filter[phone_number]", ObjectSerializer.serialize(filterPhoneNumber, "string", ""));
        }

        // Query Params
        if (filterConnectionNameContains !== undefined) {
            requestContext.setQueryParam("filter[connection_name][contains]", ObjectSerializer.serialize(filterConnectionNameContains, "string", ""));
        }

        // Query Params
        if (filterCustomerReference !== undefined) {
            requestContext.setQueryParam("filter[customer_reference]", ObjectSerializer.serialize(filterCustomerReference, "string", ""));
        }

        // Query Params
        if (filterUsagePaymentMethod !== undefined) {
            requestContext.setQueryParam("filter[usage_payment_method]", ObjectSerializer.serialize(filterUsagePaymentMethod, "'pay-per-minute' | 'channel'", ""));
        }

        // Query Params
        if (sort !== undefined) {
            requestContext.setQueryParam("sort", ObjectSerializer.serialize(sort, "'purchased_at' | 'phone_number' | 'connection_name' | 'usage_payment_method'", ""));
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
     * Retrieve a phone number
     * @param id Identifies the resource.
     */
    public async retrievePhoneNumber(id: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("NumberConfigurationsApi", "retrievePhoneNumber", "id");
        }


        // Path Params
        const localVarPath = '/phone_numbers/{id}'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


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
     * Retrieve a phone number with messaging settings
     * @param id Identifies the type of resource.
     */
    public async retrievePhoneNumberWithMessagingSettings(id: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("NumberConfigurationsApi", "retrievePhoneNumberWithMessagingSettings", "id");
        }


        // Path Params
        const localVarPath = '/phone_numbers/{id}/messaging'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


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
     * Retrieve a phone number with voice settings
     * @param id Identifies the resource.
     */
    public async retrievePhoneNumberWithVoiceSettings(id: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("NumberConfigurationsApi", "retrievePhoneNumberWithVoiceSettings", "id");
        }


        // Path Params
        const localVarPath = '/phone_numbers/{id}/voice'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


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
     * Update a phone number
     * @param id Identifies the resource.
     * @param updatePhoneNumberRequest Updated settings for the phone number.
     */
    public async updatePhoneNumber(id: string, updatePhoneNumberRequest: UpdatePhoneNumberRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("NumberConfigurationsApi", "updatePhoneNumber", "id");
        }


        // verify required parameter 'updatePhoneNumberRequest' is not null or undefined
        if (updatePhoneNumberRequest === null || updatePhoneNumberRequest === undefined) {
            throw new RequiredError("NumberConfigurationsApi", "updatePhoneNumber", "updatePhoneNumberRequest");
        }


        // Path Params
        const localVarPath = '/phone_numbers/{id}'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PATCH);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(updatePhoneNumberRequest, "UpdatePhoneNumberRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

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
     * Update a phone number with messaging settings
     * @param id Identifies the type of resource.
     * @param updatePhoneNumberMessagingSettingsRequest Updated messaging settings for the phone number
     */
    public async updatePhoneNumberWithMessagingSettings(id: string, updatePhoneNumberMessagingSettingsRequest: UpdatePhoneNumberMessagingSettingsRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("NumberConfigurationsApi", "updatePhoneNumberWithMessagingSettings", "id");
        }


        // verify required parameter 'updatePhoneNumberMessagingSettingsRequest' is not null or undefined
        if (updatePhoneNumberMessagingSettingsRequest === null || updatePhoneNumberMessagingSettingsRequest === undefined) {
            throw new RequiredError("NumberConfigurationsApi", "updatePhoneNumberWithMessagingSettings", "updatePhoneNumberMessagingSettingsRequest");
        }


        // Path Params
        const localVarPath = '/phone_numbers/{id}/messaging'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PATCH);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(updatePhoneNumberMessagingSettingsRequest, "UpdatePhoneNumberMessagingSettingsRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

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
     * Update a phone number with voice settings
     * @param id Identifies the resource.
     * @param updatePhoneNumberVoiceSettingsRequest Updated voice settings for the phone number.
     */
    public async updatePhoneNumberWithVoiceSettings(id: string, updatePhoneNumberVoiceSettingsRequest: UpdatePhoneNumberVoiceSettingsRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("NumberConfigurationsApi", "updatePhoneNumberWithVoiceSettings", "id");
        }


        // verify required parameter 'updatePhoneNumberVoiceSettingsRequest' is not null or undefined
        if (updatePhoneNumberVoiceSettingsRequest === null || updatePhoneNumberVoiceSettingsRequest === undefined) {
            throw new RequiredError("NumberConfigurationsApi", "updatePhoneNumberWithVoiceSettings", "updatePhoneNumberVoiceSettingsRequest");
        }


        // Path Params
        const localVarPath = '/phone_numbers/{id}/voice'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PATCH);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(updatePhoneNumberVoiceSettingsRequest, "UpdatePhoneNumberVoiceSettingsRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

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

export class NumberConfigurationsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deletePhoneNumber
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deletePhoneNumber(response: ResponseContext): Promise<PhoneNumberResponse1 > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: PhoneNumberResponse1 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PhoneNumberResponse1", ""
            ) as PhoneNumberResponse1;
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
            const body: PhoneNumberResponse1 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PhoneNumberResponse1", ""
            ) as PhoneNumberResponse1;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to enableEmergencyPhoneNumber
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async enableEmergencyPhoneNumber(response: ResponseContext): Promise<PhoneNumberEnableEmergency > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: PhoneNumberEnableEmergency = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PhoneNumberEnableEmergency", ""
            ) as PhoneNumberEnableEmergency;
            return body;
        }
        if (isCodeInRange("202", response.httpStatusCode)) {
            const body: PhoneNumberEnableEmergency = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PhoneNumberEnableEmergency", ""
            ) as PhoneNumberEnableEmergency;
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
            const body: PhoneNumberEnableEmergency = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PhoneNumberEnableEmergency", ""
            ) as PhoneNumberEnableEmergency;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listPhoneNumbers
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listPhoneNumbers(response: ResponseContext): Promise<ListPhoneNumbersResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ListPhoneNumbersResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListPhoneNumbersResponse", ""
            ) as ListPhoneNumbersResponse;
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
            const body: ListPhoneNumbersResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListPhoneNumbersResponse", ""
            ) as ListPhoneNumbersResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listPhoneNumbersWithMessagingSettings
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listPhoneNumbersWithMessagingSettings(response: ResponseContext): Promise<ListMessagingSettingsResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ListMessagingSettingsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListMessagingSettingsResponse", ""
            ) as ListMessagingSettingsResponse;
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
            const body: ListMessagingSettingsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListMessagingSettingsResponse", ""
            ) as ListMessagingSettingsResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listPhoneNumbersWithVoiceSettings
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listPhoneNumbersWithVoiceSettings(response: ResponseContext): Promise<ListPhoneNumbersWithVoiceSettingsResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ListPhoneNumbersWithVoiceSettingsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListPhoneNumbersWithVoiceSettingsResponse", ""
            ) as ListPhoneNumbersWithVoiceSettingsResponse;
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
            const body: ListPhoneNumbersWithVoiceSettingsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListPhoneNumbersWithVoiceSettingsResponse", ""
            ) as ListPhoneNumbersWithVoiceSettingsResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to retrievePhoneNumber
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async retrievePhoneNumber(response: ResponseContext): Promise<PhoneNumberResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: PhoneNumberResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PhoneNumberResponse", ""
            ) as PhoneNumberResponse;
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
            const body: PhoneNumberResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PhoneNumberResponse", ""
            ) as PhoneNumberResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to retrievePhoneNumberWithMessagingSettings
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async retrievePhoneNumberWithMessagingSettings(response: ResponseContext): Promise<RetrieveMessagingSettingsResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RetrieveMessagingSettingsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RetrieveMessagingSettingsResponse", ""
            ) as RetrieveMessagingSettingsResponse;
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
            const body: RetrieveMessagingSettingsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RetrieveMessagingSettingsResponse", ""
            ) as RetrieveMessagingSettingsResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to retrievePhoneNumberWithVoiceSettings
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async retrievePhoneNumberWithVoiceSettings(response: ResponseContext): Promise<RetrievePhoneNumberVoiceResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RetrievePhoneNumberVoiceResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RetrievePhoneNumberVoiceResponse", ""
            ) as RetrievePhoneNumberVoiceResponse;
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
            const body: RetrievePhoneNumberVoiceResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RetrievePhoneNumberVoiceResponse", ""
            ) as RetrievePhoneNumberVoiceResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updatePhoneNumber
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updatePhoneNumber(response: ResponseContext): Promise<PhoneNumberResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: PhoneNumberResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PhoneNumberResponse", ""
            ) as PhoneNumberResponse;
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
            const body: PhoneNumberResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PhoneNumberResponse", ""
            ) as PhoneNumberResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updatePhoneNumberWithMessagingSettings
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updatePhoneNumberWithMessagingSettings(response: ResponseContext): Promise<RetrieveMessagingSettingsResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RetrieveMessagingSettingsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RetrieveMessagingSettingsResponse", ""
            ) as RetrieveMessagingSettingsResponse;
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
            const body: RetrieveMessagingSettingsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RetrieveMessagingSettingsResponse", ""
            ) as RetrieveMessagingSettingsResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updatePhoneNumberWithVoiceSettings
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updatePhoneNumberWithVoiceSettings(response: ResponseContext): Promise<RetrievePhoneNumberVoiceResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RetrievePhoneNumberVoiceResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RetrievePhoneNumberVoiceResponse", ""
            ) as RetrievePhoneNumberVoiceResponse;
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
            const body: RetrievePhoneNumberVoiceResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RetrievePhoneNumberVoiceResponse", ""
            ) as RetrievePhoneNumberVoiceResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
