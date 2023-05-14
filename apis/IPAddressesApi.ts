// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi.ts';
import {Configuration} from '../configuration.ts';
import {RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http.ts';
import {ObjectSerializer} from '../models/ObjectSerializer.ts';
import {ApiException} from './exception.ts';
import {canConsumeForm, isCodeInRange} from '../util.ts';
import {SecurityAuthentication} from '../auth/auth.ts';


import { AccessIPAddressListResponseSchema } from '../models/AccessIPAddressListResponseSchema.ts';
import { AccessIPAddressPOST } from '../models/AccessIPAddressPOST.ts';
import { AccessIPAddressResponseSchema } from '../models/AccessIPAddressResponseSchema.ts';
import { CloudflareSyncStatus } from '../models/CloudflareSyncStatus.ts';
import { Errors } from '../models/Errors.ts';

/**
 * no description
 */
export class IPAddressesApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Create new Access IP Address
     * @param accessIPAddressPOST 
     */
    public async accessIPAddressCreate(accessIPAddressPOST: AccessIPAddressPOST, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'accessIPAddressPOST' is not null or undefined
        if (accessIPAddressPOST === null || accessIPAddressPOST === undefined) {
            throw new RequiredError("IPAddressesApi", "accessIPAddressCreate", "accessIPAddressPOST");
        }


        // Path Params
        const localVarPath = '/access_ip_address';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(accessIPAddressPOST, "AccessIPAddressPOST", ""),
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
     * Delete access IP address
     * @param accessIpAddressId 
     */
    public async accessIPAddressDelete(accessIpAddressId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'accessIpAddressId' is not null or undefined
        if (accessIpAddressId === null || accessIpAddressId === undefined) {
            throw new RequiredError("IPAddressesApi", "accessIPAddressDelete", "accessIpAddressId");
        }


        // Path Params
        const localVarPath = '/access_ip_address/{access_ip_address_id}'
            .replace('{' + 'access_ip_address_id' + '}', encodeURIComponent(String(accessIpAddressId)));

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
     * Retrieve an access IP address
     * @param accessIpAddressId 
     */
    public async accessIPAddressGet(accessIpAddressId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'accessIpAddressId' is not null or undefined
        if (accessIpAddressId === null || accessIpAddressId === undefined) {
            throw new RequiredError("IPAddressesApi", "accessIPAddressGet", "accessIpAddressId");
        }


        // Path Params
        const localVarPath = '/access_ip_address/{access_ip_address_id}'
            .replace('{' + 'access_ip_address_id' + '}', encodeURIComponent(String(accessIpAddressId)));

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
     * List all Access IP Addresses
     * @param filterIpSource 
     * @param filterIpAddress 
     * @param filterStatus 
     * @param filterCreatedAtGt 
     * @param filterCreatedAtLt 
     * @param pageNumber 
     * @param pageSize 
     */
    public async accessIPAddressList(filterIpSource?: string, filterIpAddress?: string, filterStatus?: CloudflareSyncStatus, filterCreatedAtGt?: Date, filterCreatedAtLt?: Date, pageNumber?: number, pageSize?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;








        // Path Params
        const localVarPath = '/access_ip_address';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (filterIpSource !== undefined) {
            requestContext.setQueryParam("filter[ip_source]", ObjectSerializer.serialize(filterIpSource, "string", ""));
        }

        // Query Params
        if (filterIpAddress !== undefined) {
            requestContext.setQueryParam("filter[ip_address]", ObjectSerializer.serialize(filterIpAddress, "string", ""));
        }

        // Query Params
        if (filterStatus !== undefined) {
            requestContext.setQueryParam("filter[status]", ObjectSerializer.serialize(filterStatus, "CloudflareSyncStatus", ""));
        }

        // Query Params
        if (filterCreatedAtGt !== undefined) {
            requestContext.setQueryParam("filter[created_at][gt]", ObjectSerializer.serialize(filterCreatedAtGt, "Date", "date-time"));
        }

        // Query Params
        if (filterCreatedAtLt !== undefined) {
            requestContext.setQueryParam("filter[created_at][lt]", ObjectSerializer.serialize(filterCreatedAtLt, "Date", "date-time"));
        }

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

}

export class IPAddressesApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to accessIPAddressCreate
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async accessIPAddressCreate(response: ResponseContext): Promise<AccessIPAddressResponseSchema > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: AccessIPAddressResponseSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AccessIPAddressResponseSchema", ""
            ) as AccessIPAddressResponseSchema;
            return body;
        }
        if (isCodeInRange("422", response.httpStatusCode)) {
            const body: Errors = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Errors", ""
            ) as Errors;
            throw new ApiException<Errors>(response.httpStatusCode, "Validation Error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AccessIPAddressResponseSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AccessIPAddressResponseSchema", ""
            ) as AccessIPAddressResponseSchema;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to accessIPAddressDelete
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async accessIPAddressDelete(response: ResponseContext): Promise<AccessIPAddressResponseSchema > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: AccessIPAddressResponseSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AccessIPAddressResponseSchema", ""
            ) as AccessIPAddressResponseSchema;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AccessIPAddressResponseSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AccessIPAddressResponseSchema", ""
            ) as AccessIPAddressResponseSchema;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to accessIPAddressGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async accessIPAddressGet(response: ResponseContext): Promise<AccessIPAddressResponseSchema > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: AccessIPAddressResponseSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AccessIPAddressResponseSchema", ""
            ) as AccessIPAddressResponseSchema;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AccessIPAddressResponseSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AccessIPAddressResponseSchema", ""
            ) as AccessIPAddressResponseSchema;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to accessIPAddressList
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async accessIPAddressList(response: ResponseContext): Promise<AccessIPAddressListResponseSchema > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: AccessIPAddressListResponseSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AccessIPAddressListResponseSchema", ""
            ) as AccessIPAddressListResponseSchema;
            return body;
        }
        if (isCodeInRange("422", response.httpStatusCode)) {
            const body: Errors = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Errors", ""
            ) as Errors;
            throw new ApiException<Errors>(response.httpStatusCode, "Validation Error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AccessIPAddressListResponseSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AccessIPAddressListResponseSchema", ""
            ) as AccessIPAddressListResponseSchema;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
