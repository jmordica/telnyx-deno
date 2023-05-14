// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi.ts';
import {Configuration} from '../configuration.ts';
import {RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http.ts';
import {ObjectSerializer} from '../models/ObjectSerializer.ts';
import {ApiException} from './exception.ts';
import {canConsumeForm, isCodeInRange} from '../util.ts';
import {SecurityAuthentication} from '../auth/auth.ts';


import { Errors } from '../models/Errors.ts';
import { WireguardInterfaceCreate } from '../models/WireguardInterfaceCreate.ts';
import { WireguardInterfaceCreate202Response } from '../models/WireguardInterfaceCreate202Response.ts';
import { WireguardInterfaceList200Response } from '../models/WireguardInterfaceList200Response.ts';
import { WireguardPeerAllowedIPGet200Response } from '../models/WireguardPeerAllowedIPGet200Response.ts';
import { WireguardPeerAllowedIPList200Response } from '../models/WireguardPeerAllowedIPList200Response.ts';
import { WireguardPeerCreate } from '../models/WireguardPeerCreate.ts';
import { WireguardPeerCreate202Response } from '../models/WireguardPeerCreate202Response.ts';
import { WireguardPeerList200Response } from '../models/WireguardPeerList200Response.ts';
import { WireguardPeerPatch } from '../models/WireguardPeerPatch.ts';

/**
 * no description
 */
export class WireGuardInterfacesApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Create a new WireGuard Interface. Current limitation of 10 interfaces per user can be created.
     * Create a WireGuard Interface
     * @param wireguardInterfaceCreate 
     */
    public async wireguardInterfaceCreate(wireguardInterfaceCreate: WireguardInterfaceCreate, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'wireguardInterfaceCreate' is not null or undefined
        if (wireguardInterfaceCreate === null || wireguardInterfaceCreate === undefined) {
            throw new RequiredError("WireGuardInterfacesApi", "wireguardInterfaceCreate", "wireguardInterfaceCreate");
        }


        // Path Params
        const localVarPath = '/wireguard_interfaces';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(wireguardInterfaceCreate, "WireguardInterfaceCreate", ""),
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
     * Delete a WireGuard Interface.
     * Delete a WireGuard Interface
     * @param id Identifies the resource.
     */
    public async wireguardInterfaceDelete(id: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("WireGuardInterfacesApi", "wireguardInterfaceDelete", "id");
        }


        // Path Params
        const localVarPath = '/wireguard_interfaces/{id}'
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
     * Retrieve a WireGuard Interfaces.
     * Retrieve a WireGuard Interfaces
     * @param id Identifies the resource.
     */
    public async wireguardInterfaceGet(id: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("WireGuardInterfacesApi", "wireguardInterfaceGet", "id");
        }


        // Path Params
        const localVarPath = '/wireguard_interfaces/{id}'
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
     * List all WireGuard Interfaces.
     * List all WireGuard Interfaces
     * @param pageNumber The page number to load
     * @param pageSize The size of the page
     * @param filterNetworkId The associated network id to filter on.
     */
    public async wireguardInterfaceList(pageNumber?: number, pageSize?: number, filterNetworkId?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;




        // Path Params
        const localVarPath = '/wireguard_interfaces';

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
        if (filterNetworkId !== undefined) {
            requestContext.setQueryParam("filter[network_id]", ObjectSerializer.serialize(filterNetworkId, "string", ""));
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
     * Retrieve the Allowed IP.
     * Retrieve the Allowed IP
     * @param id Identifies the resource.
     * @param childId Identifies the child resource
     */
    public async wireguardPeerAllowedIPGet(id: string, childId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("WireGuardInterfacesApi", "wireguardPeerAllowedIPGet", "id");
        }


        // verify required parameter 'childId' is not null or undefined
        if (childId === null || childId === undefined) {
            throw new RequiredError("WireGuardInterfacesApi", "wireguardPeerAllowedIPGet", "childId");
        }


        // Path Params
        const localVarPath = '/wireguard_peers/{id}/allowed_ips/{child_id}'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)))
            .replace('{' + 'child_id' + '}', encodeURIComponent(String(childId)));

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
     * List all Allowed IPs for a WireGuard peer.
     * List all Allowed IPs for a WireGuard Peer
     * @param id Identifies the resource.
     * @param pageNumber The page number to load
     * @param pageSize The size of the page
     */
    public async wireguardPeerAllowedIPList(id: string, pageNumber?: number, pageSize?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("WireGuardInterfacesApi", "wireguardPeerAllowedIPList", "id");
        }




        // Path Params
        const localVarPath = '/wireguard_peers/{id}/allowed_ips'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

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
     * Retrieve Wireguard config template for Peer
     * Retrieve Wireguard config template for Peer
     * @param id Identifies the resource.
     */
    public async wireguardPeerConfig(id: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("WireGuardInterfacesApi", "wireguardPeerConfig", "id");
        }


        // Path Params
        const localVarPath = '/wireguard_peers/{id}/config'
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
     * Create a new WireGuard Peer. Current limitation of 5 peers per interface can be created.
     * Create a WireGuard Peer
     * @param id Identifies the resource.
     * @param wireguardPeerCreate 
     */
    public async wireguardPeerCreate(id: string, wireguardPeerCreate: WireguardPeerCreate, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("WireGuardInterfacesApi", "wireguardPeerCreate", "id");
        }


        // verify required parameter 'wireguardPeerCreate' is not null or undefined
        if (wireguardPeerCreate === null || wireguardPeerCreate === undefined) {
            throw new RequiredError("WireGuardInterfacesApi", "wireguardPeerCreate", "wireguardPeerCreate");
        }


        // Path Params
        const localVarPath = '/wireguard_peers'
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
            ObjectSerializer.serialize(wireguardPeerCreate, "WireguardPeerCreate", ""),
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
     * Delete the WireGuard peer.
     * Delete the WireGuard Peer
     * @param id Identifies the resource.
     */
    public async wireguardPeerDelete(id: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("WireGuardInterfacesApi", "wireguardPeerDelete", "id");
        }


        // Path Params
        const localVarPath = '/wireguard_peers/{id}'
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
     * Retrieve the WireGuard peer.
     * Retrieve the WireGuard Peer
     * @param id Identifies the resource.
     */
    public async wireguardPeerGet(id: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("WireGuardInterfacesApi", "wireguardPeerGet", "id");
        }


        // Path Params
        const localVarPath = '/wireguard_peers/{id}'
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
     * List all WireGuard peers.
     * List all WireGuard Peers
     * @param id Identifies the resource.
     * @param pageNumber The page number to load
     * @param pageSize The size of the page
     * @param filterWireguardInterfaceId The id of the associated WireGuard interface to filter on.
     */
    public async wireguardPeerList(id: string, pageNumber?: number, pageSize?: number, filterWireguardInterfaceId?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("WireGuardInterfacesApi", "wireguardPeerList", "id");
        }





        // Path Params
        const localVarPath = '/wireguard_peers'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

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
        if (filterWireguardInterfaceId !== undefined) {
            requestContext.setQueryParam("filter[wireguard_interface_id]", ObjectSerializer.serialize(filterWireguardInterfaceId, "string", "uuid"));
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
     * Update the WireGuard peer.
     * Update the WireGuard Peer
     * @param id Identifies the resource.
     * @param wireguardPeerPatch 
     */
    public async wireguardPeerUpdate(id: string, wireguardPeerPatch: WireguardPeerPatch, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("WireGuardInterfacesApi", "wireguardPeerUpdate", "id");
        }


        // verify required parameter 'wireguardPeerPatch' is not null or undefined
        if (wireguardPeerPatch === null || wireguardPeerPatch === undefined) {
            throw new RequiredError("WireGuardInterfacesApi", "wireguardPeerUpdate", "wireguardPeerPatch");
        }


        // Path Params
        const localVarPath = '/wireguard_peers/{id}'
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
            ObjectSerializer.serialize(wireguardPeerPatch, "WireguardPeerPatch", ""),
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

export class WireGuardInterfacesApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to wireguardInterfaceCreate
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async wireguardInterfaceCreate(response: ResponseContext): Promise<WireguardInterfaceCreate202Response > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("202", response.httpStatusCode)) {
            const body: WireguardInterfaceCreate202Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "WireguardInterfaceCreate202Response", ""
            ) as WireguardInterfaceCreate202Response;
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
            const body: WireguardInterfaceCreate202Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "WireguardInterfaceCreate202Response", ""
            ) as WireguardInterfaceCreate202Response;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to wireguardInterfaceDelete
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async wireguardInterfaceDelete(response: ResponseContext): Promise<WireguardInterfaceCreate202Response > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: WireguardInterfaceCreate202Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "WireguardInterfaceCreate202Response", ""
            ) as WireguardInterfaceCreate202Response;
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
            const body: WireguardInterfaceCreate202Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "WireguardInterfaceCreate202Response", ""
            ) as WireguardInterfaceCreate202Response;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to wireguardInterfaceGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async wireguardInterfaceGet(response: ResponseContext): Promise<WireguardInterfaceCreate202Response > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: WireguardInterfaceCreate202Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "WireguardInterfaceCreate202Response", ""
            ) as WireguardInterfaceCreate202Response;
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
            const body: WireguardInterfaceCreate202Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "WireguardInterfaceCreate202Response", ""
            ) as WireguardInterfaceCreate202Response;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to wireguardInterfaceList
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async wireguardInterfaceList(response: ResponseContext): Promise<WireguardInterfaceList200Response > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: WireguardInterfaceList200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "WireguardInterfaceList200Response", ""
            ) as WireguardInterfaceList200Response;
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
            const body: WireguardInterfaceList200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "WireguardInterfaceList200Response", ""
            ) as WireguardInterfaceList200Response;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to wireguardPeerAllowedIPGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async wireguardPeerAllowedIPGet(response: ResponseContext): Promise<WireguardPeerAllowedIPGet200Response > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: WireguardPeerAllowedIPGet200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "WireguardPeerAllowedIPGet200Response", ""
            ) as WireguardPeerAllowedIPGet200Response;
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
            const body: WireguardPeerAllowedIPGet200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "WireguardPeerAllowedIPGet200Response", ""
            ) as WireguardPeerAllowedIPGet200Response;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to wireguardPeerAllowedIPList
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async wireguardPeerAllowedIPList(response: ResponseContext): Promise<WireguardPeerAllowedIPList200Response > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: WireguardPeerAllowedIPList200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "WireguardPeerAllowedIPList200Response", ""
            ) as WireguardPeerAllowedIPList200Response;
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
            const body: WireguardPeerAllowedIPList200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "WireguardPeerAllowedIPList200Response", ""
            ) as WireguardPeerAllowedIPList200Response;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to wireguardPeerConfig
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async wireguardPeerConfig(response: ResponseContext): Promise<string > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
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
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to wireguardPeerCreate
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async wireguardPeerCreate(response: ResponseContext): Promise<WireguardPeerCreate202Response > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("202", response.httpStatusCode)) {
            const body: WireguardPeerCreate202Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "WireguardPeerCreate202Response", ""
            ) as WireguardPeerCreate202Response;
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
            const body: WireguardPeerCreate202Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "WireguardPeerCreate202Response", ""
            ) as WireguardPeerCreate202Response;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to wireguardPeerDelete
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async wireguardPeerDelete(response: ResponseContext): Promise<WireguardPeerCreate202Response > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: WireguardPeerCreate202Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "WireguardPeerCreate202Response", ""
            ) as WireguardPeerCreate202Response;
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
            const body: WireguardPeerCreate202Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "WireguardPeerCreate202Response", ""
            ) as WireguardPeerCreate202Response;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to wireguardPeerGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async wireguardPeerGet(response: ResponseContext): Promise<WireguardPeerCreate202Response > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: WireguardPeerCreate202Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "WireguardPeerCreate202Response", ""
            ) as WireguardPeerCreate202Response;
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
            const body: WireguardPeerCreate202Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "WireguardPeerCreate202Response", ""
            ) as WireguardPeerCreate202Response;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to wireguardPeerList
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async wireguardPeerList(response: ResponseContext): Promise<WireguardPeerList200Response > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: WireguardPeerList200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "WireguardPeerList200Response", ""
            ) as WireguardPeerList200Response;
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
            const body: WireguardPeerList200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "WireguardPeerList200Response", ""
            ) as WireguardPeerList200Response;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to wireguardPeerUpdate
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async wireguardPeerUpdate(response: ResponseContext): Promise<WireguardPeerCreate202Response > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: WireguardPeerCreate202Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "WireguardPeerCreate202Response", ""
            ) as WireguardPeerCreate202Response;
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
            const body: WireguardPeerCreate202Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "WireguardPeerCreate202Response", ""
            ) as WireguardPeerCreate202Response;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
