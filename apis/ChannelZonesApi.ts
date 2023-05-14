// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi.ts';
import {Configuration} from '../configuration.ts';
import {RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http.ts';
import {ObjectSerializer} from '../models/ObjectSerializer.ts';
import {ApiException} from './exception.ts';
import {canConsumeForm, isCodeInRange} from '../util.ts';
import {SecurityAuthentication} from '../auth/auth.ts';


import { AssignPhoneNumberRequest } from '../models/AssignPhoneNumberRequest.ts';
import { Errors } from '../models/Errors.ts';
import { GcbChannelZone } from '../models/GcbChannelZone.ts';
import { GcbPhoneNumber } from '../models/GcbPhoneNumber.ts';
import { GetChannelZones200Response } from '../models/GetChannelZones200Response.ts';
import { GetPhoneNumbers200Response } from '../models/GetPhoneNumbers200Response.ts';
import { PatchGroupRequest } from '../models/PatchGroupRequest.ts';

/**
 * no description
 */
export class ChannelZonesApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * You should own the phone number being assigned to the channel zone. Remember that you should reserve channels in this channel zone, otherwise you won\'t be able to receive incoming calls.
     * Assign a phone number to a channel zone
     * @param channelZoneId Channel zone identifier
     * @param body Phone number to assign to the channel zone. The phone number should be in E.164 format.
     */
    public async assignPhoneNumber(channelZoneId: string, body: AssignPhoneNumberRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'channelZoneId' is not null or undefined
        if (channelZoneId === null || channelZoneId === undefined) {
            throw new RequiredError("ChannelZonesApi", "assignPhoneNumber", "channelZoneId");
        }


        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new RequiredError("ChannelZonesApi", "assignPhoneNumber", "body");
        }


        // Path Params
        const localVarPath = '/channel_zones/{channel_zone_id}/channel_zone_phone_numbers'
            .replace('{' + 'channel_zone_id' + '}', encodeURIComponent(String(channelZoneId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(body, "AssignPhoneNumberRequest", ""),
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
     * Get a specific channel zone
     * Get a specific channel zone
     * @param channelZoneId Channel zone identifier
     */
    public async getChannelZone(channelZoneId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'channelZoneId' is not null or undefined
        if (channelZoneId === null || channelZoneId === undefined) {
            throw new RequiredError("ChannelZonesApi", "getChannelZone", "channelZoneId");
        }


        // Path Params
        const localVarPath = '/channel_zones/{channel_zone_id}'
            .replace('{' + 'channel_zone_id' + '}', encodeURIComponent(String(channelZoneId)));

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
     * List of channel zones with their countries
     * Get list of channel zones
     * @param pageNumber The page number to load
     * @param pageSize The size of the page
     */
    public async getChannelZones(pageNumber?: number, pageSize?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;



        // Path Params
        const localVarPath = '/channel_zones';

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
     * Retrieve the assigned phone numbers in a channel zone. Phone numbers assigned to a channel zone can receive concurrent calls up to the quantity reserved in that channel zone. Additional concurrent calls are rejected with a busy signal.
     * Get the list of phone numbers assigned to a channel zone
     * @param channelZoneId Channel zone identifier
     * @param pageNumber The page number to load
     * @param pageSize The size of the page
     */
    public async getPhoneNumbers(channelZoneId: string, pageNumber?: number, pageSize?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'channelZoneId' is not null or undefined
        if (channelZoneId === null || channelZoneId === undefined) {
            throw new RequiredError("ChannelZonesApi", "getPhoneNumbers", "channelZoneId");
        }




        // Path Params
        const localVarPath = '/channel_zones/{channel_zone_id}/channel_zone_phone_numbers'
            .replace('{' + 'channel_zone_id' + '}', encodeURIComponent(String(channelZoneId)));

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
     * Change the amount of reserved channels at a given channel zone
     * Patch a channel zone
     * @param channelZoneId Channel zone identifier
     * @param body Quantity of reserved channels
     */
    public async patchGroup(channelZoneId: string, body: PatchGroupRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'channelZoneId' is not null or undefined
        if (channelZoneId === null || channelZoneId === undefined) {
            throw new RequiredError("ChannelZonesApi", "patchGroup", "channelZoneId");
        }


        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new RequiredError("ChannelZonesApi", "patchGroup", "body");
        }


        // Path Params
        const localVarPath = '/channel_zones/{channel_zone_id}'
            .replace('{' + 'channel_zone_id' + '}', encodeURIComponent(String(channelZoneId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PATCH);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(body, "PatchGroupRequest", ""),
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
     * Unassign a phone number from a channel zone
     * @param channelZoneId Channel zone identifier
     * @param phoneNumber The phone number to be looked up
     */
    public async unassignPhoneNumber(channelZoneId: string, phoneNumber: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'channelZoneId' is not null or undefined
        if (channelZoneId === null || channelZoneId === undefined) {
            throw new RequiredError("ChannelZonesApi", "unassignPhoneNumber", "channelZoneId");
        }


        // verify required parameter 'phoneNumber' is not null or undefined
        if (phoneNumber === null || phoneNumber === undefined) {
            throw new RequiredError("ChannelZonesApi", "unassignPhoneNumber", "phoneNumber");
        }


        // Path Params
        const localVarPath = '/channel_zones/{channel_zone_id}/channel_zone_phone_numbers/{phone_number}'
            .replace('{' + 'channel_zone_id' + '}', encodeURIComponent(String(channelZoneId)))
            .replace('{' + 'phone_number' + '}', encodeURIComponent(String(phoneNumber)));

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

}

export class ChannelZonesApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to assignPhoneNumber
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async assignPhoneNumber(response: ResponseContext): Promise<GcbPhoneNumber > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GcbPhoneNumber = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GcbPhoneNumber", ""
            ) as GcbPhoneNumber;
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
            const body: GcbPhoneNumber = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GcbPhoneNumber", ""
            ) as GcbPhoneNumber;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getChannelZone
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getChannelZone(response: ResponseContext): Promise<GcbChannelZone > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GcbChannelZone = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GcbChannelZone", ""
            ) as GcbChannelZone;
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
            const body: GcbChannelZone = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GcbChannelZone", ""
            ) as GcbChannelZone;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getChannelZones
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getChannelZones(response: ResponseContext): Promise<GetChannelZones200Response > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GetChannelZones200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetChannelZones200Response", ""
            ) as GetChannelZones200Response;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: GetChannelZones200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetChannelZones200Response", ""
            ) as GetChannelZones200Response;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getPhoneNumbers
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getPhoneNumbers(response: ResponseContext): Promise<GetPhoneNumbers200Response > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GetPhoneNumbers200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetPhoneNumbers200Response", ""
            ) as GetPhoneNumbers200Response;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: GetPhoneNumbers200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetPhoneNumbers200Response", ""
            ) as GetPhoneNumbers200Response;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to patchGroup
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async patchGroup(response: ResponseContext): Promise<GcbChannelZone > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GcbChannelZone = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GcbChannelZone", ""
            ) as GcbChannelZone;
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
            const body: GcbChannelZone = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GcbChannelZone", ""
            ) as GcbChannelZone;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to unassignPhoneNumber
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async unassignPhoneNumber(response: ResponseContext): Promise<void > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            return;
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
            const body: void = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "void", ""
            ) as void;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
