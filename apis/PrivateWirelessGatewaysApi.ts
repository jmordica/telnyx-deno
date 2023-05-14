// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi.ts';
import {Configuration} from '../configuration.ts';
import {RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http.ts';
import {ObjectSerializer} from '../models/ObjectSerializer.ts';
import {ApiException} from './exception.ts';
import {canConsumeForm, isCodeInRange} from '../util.ts';
import {SecurityAuthentication} from '../auth/auth.ts';


import { CreatePrivateWirelessGateway202Response } from '../models/CreatePrivateWirelessGateway202Response.ts';
import { CreatePrivateWirelessGatewayRequest } from '../models/CreatePrivateWirelessGatewayRequest.ts';
import { Errors } from '../models/Errors.ts';
import { GetPrivateWirelessGateways200Response } from '../models/GetPrivateWirelessGateways200Response.ts';

/**
 * no description
 */
export class PrivateWirelessGatewaysApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Asynchronously create a Private Wireless Gateway for SIM cards for a previously created network.
     * Create a Private Wireless Gateway
     * @param createPrivateWirelessGatewayRequest 
     */
    public async createPrivateWirelessGateway(createPrivateWirelessGatewayRequest: CreatePrivateWirelessGatewayRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'createPrivateWirelessGatewayRequest' is not null or undefined
        if (createPrivateWirelessGatewayRequest === null || createPrivateWirelessGatewayRequest === undefined) {
            throw new RequiredError("PrivateWirelessGatewaysApi", "createPrivateWirelessGateway", "createPrivateWirelessGatewayRequest");
        }


        // Path Params
        const localVarPath = '/private_wireless_gateways';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(createPrivateWirelessGatewayRequest, "CreatePrivateWirelessGatewayRequest", ""),
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
     * Deletes the Private Wireless Gateway.
     * Delete a Private Wireless Gateway
     * @param id Identifies the resource.
     */
    public async deletePrivateWirelessGateway(id: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("PrivateWirelessGatewaysApi", "deletePrivateWirelessGateway", "id");
        }


        // Path Params
        const localVarPath = '/private_wireless_gateways/{id}'
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
     * Retrieve information about a Private Wireless Gateway.
     * Get a Private Wireless Gateway
     * @param id Identifies the resource.
     */
    public async getPrivateWirelessGateway(id: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("PrivateWirelessGatewaysApi", "getPrivateWirelessGateway", "id");
        }


        // Path Params
        const localVarPath = '/private_wireless_gateways/{id}'
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
     * Get all Private Wireless Gateways belonging to the user.
     * Get all Private Wireless Gateways
     * @param pageNumber The page number to load
     * @param pageSize The size of the page
     * @param filterName The name of the Private Wireless Gateway.
     * @param filterIpRange The IP address range of the Private Wireless Gateway.
     * @param filterRegionCode The name of the region where the Private Wireless Gateway is deployed.
     * @param filterCreatedAt Private Wireless Gateway resource creation date.
     * @param filterUpdatedAt When the Private Wireless Gateway was last updated.
     */
    public async getPrivateWirelessGateways(pageNumber?: number, pageSize?: number, filterName?: string, filterIpRange?: string, filterRegionCode?: string, filterCreatedAt?: string, filterUpdatedAt?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;








        // Path Params
        const localVarPath = '/private_wireless_gateways';

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
        if (filterName !== undefined) {
            requestContext.setQueryParam("filter[name]", ObjectSerializer.serialize(filterName, "string", ""));
        }

        // Query Params
        if (filterIpRange !== undefined) {
            requestContext.setQueryParam("filter[ip_range]", ObjectSerializer.serialize(filterIpRange, "string", ""));
        }

        // Query Params
        if (filterRegionCode !== undefined) {
            requestContext.setQueryParam("filter[region_code]", ObjectSerializer.serialize(filterRegionCode, "string", ""));
        }

        // Query Params
        if (filterCreatedAt !== undefined) {
            requestContext.setQueryParam("filter[created_at]", ObjectSerializer.serialize(filterCreatedAt, "string", ""));
        }

        // Query Params
        if (filterUpdatedAt !== undefined) {
            requestContext.setQueryParam("filter[updated_at]", ObjectSerializer.serialize(filterUpdatedAt, "string", ""));
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

export class PrivateWirelessGatewaysApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createPrivateWirelessGateway
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createPrivateWirelessGateway(response: ResponseContext): Promise<CreatePrivateWirelessGateway202Response > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("202", response.httpStatusCode)) {
            const body: CreatePrivateWirelessGateway202Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CreatePrivateWirelessGateway202Response", ""
            ) as CreatePrivateWirelessGateway202Response;
            return body;
        }
        if (isCodeInRange("422", response.httpStatusCode)) {
            const body: Errors = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Errors", ""
            ) as Errors;
            throw new ApiException<Errors>(response.httpStatusCode, "Unprocessable entity. Check the \&#39;detail\&#39; field in response for details.", body, response.headers);
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
            const body: CreatePrivateWirelessGateway202Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CreatePrivateWirelessGateway202Response", ""
            ) as CreatePrivateWirelessGateway202Response;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deletePrivateWirelessGateway
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deletePrivateWirelessGateway(response: ResponseContext): Promise<CreatePrivateWirelessGateway202Response > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CreatePrivateWirelessGateway202Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CreatePrivateWirelessGateway202Response", ""
            ) as CreatePrivateWirelessGateway202Response;
            return body;
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: Error = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Error", ""
            ) as Error;
            throw new ApiException<Error>(response.httpStatusCode, "Resource not found", body, response.headers);
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
            const body: CreatePrivateWirelessGateway202Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CreatePrivateWirelessGateway202Response", ""
            ) as CreatePrivateWirelessGateway202Response;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getPrivateWirelessGateway
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getPrivateWirelessGateway(response: ResponseContext): Promise<CreatePrivateWirelessGateway202Response > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CreatePrivateWirelessGateway202Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CreatePrivateWirelessGateway202Response", ""
            ) as CreatePrivateWirelessGateway202Response;
            return body;
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: Error = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Error", ""
            ) as Error;
            throw new ApiException<Error>(response.httpStatusCode, "Resource not found", body, response.headers);
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
            const body: CreatePrivateWirelessGateway202Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CreatePrivateWirelessGateway202Response", ""
            ) as CreatePrivateWirelessGateway202Response;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getPrivateWirelessGateways
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getPrivateWirelessGateways(response: ResponseContext): Promise<GetPrivateWirelessGateways200Response > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GetPrivateWirelessGateways200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetPrivateWirelessGateways200Response", ""
            ) as GetPrivateWirelessGateways200Response;
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
            const body: GetPrivateWirelessGateways200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetPrivateWirelessGateways200Response", ""
            ) as GetPrivateWirelessGateways200Response;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
