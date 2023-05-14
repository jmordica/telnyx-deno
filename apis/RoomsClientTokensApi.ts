// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi.ts';
import {Configuration} from '../configuration.ts';
import {RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http.ts';
import {ObjectSerializer} from '../models/ObjectSerializer.ts';
import {ApiException} from './exception.ts';
import {canConsumeForm, isCodeInRange} from '../util.ts';
import {SecurityAuthentication} from '../auth/auth.ts';


import { CreateRoomClientToken201Response } from '../models/CreateRoomClientToken201Response.ts';
import { CreateRoomClientTokenRequest } from '../models/CreateRoomClientTokenRequest.ts';
import { RefreshRoomClientToken201Response } from '../models/RefreshRoomClientToken201Response.ts';
import { RefreshRoomClientTokenRequest } from '../models/RefreshRoomClientTokenRequest.ts';

/**
 * no description
 */
export class RoomsClientTokensApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Synchronously create an Client Token to join a Room. Client Token is necessary to join a Telnyx Room. Client Token will expire after `token_ttl_secs`, a Refresh Token is also provided to refresh a Client Token, the Refresh Token expires after `refresh_token_ttl_secs`.
     * Create Client Token to join a room.
     * @param roomId The unique identifier of a room.
     * @param createRoomClientTokenRequest Parameters that can be defined during Room Client Token creation.
     */
    public async createRoomClientToken(roomId: string, createRoomClientTokenRequest: CreateRoomClientTokenRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'roomId' is not null or undefined
        if (roomId === null || roomId === undefined) {
            throw new RequiredError("RoomsClientTokensApi", "createRoomClientToken", "roomId");
        }


        // verify required parameter 'createRoomClientTokenRequest' is not null or undefined
        if (createRoomClientTokenRequest === null || createRoomClientTokenRequest === undefined) {
            throw new RequiredError("RoomsClientTokensApi", "createRoomClientToken", "createRoomClientTokenRequest");
        }


        // Path Params
        const localVarPath = '/rooms/{room_id}/actions/generate_join_client_token'
            .replace('{' + 'room_id' + '}', encodeURIComponent(String(roomId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(createRoomClientTokenRequest, "CreateRoomClientTokenRequest", ""),
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
     * Synchronously refresh an Client Token to join a Room. Client Token is necessary to join a Telnyx Room. Client Token will expire after `token_ttl_secs`.
     * Refresh Client Token to join a room.
     * @param roomId The unique identifier of a room.
     * @param refreshRoomClientTokenRequest Parameters that can be defined during Room Client Token refresh.
     */
    public async refreshRoomClientToken(roomId: string, refreshRoomClientTokenRequest: RefreshRoomClientTokenRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'roomId' is not null or undefined
        if (roomId === null || roomId === undefined) {
            throw new RequiredError("RoomsClientTokensApi", "refreshRoomClientToken", "roomId");
        }


        // verify required parameter 'refreshRoomClientTokenRequest' is not null or undefined
        if (refreshRoomClientTokenRequest === null || refreshRoomClientTokenRequest === undefined) {
            throw new RequiredError("RoomsClientTokensApi", "refreshRoomClientToken", "refreshRoomClientTokenRequest");
        }


        // Path Params
        const localVarPath = '/rooms/{room_id}/actions/refresh_client_token'
            .replace('{' + 'room_id' + '}', encodeURIComponent(String(roomId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(refreshRoomClientTokenRequest, "RefreshRoomClientTokenRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class RoomsClientTokensApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createRoomClientToken
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createRoomClientToken(response: ResponseContext): Promise<CreateRoomClientToken201Response > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: CreateRoomClientToken201Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CreateRoomClientToken201Response", ""
            ) as CreateRoomClientToken201Response;
            return body;
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: Error = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Error", ""
            ) as Error;
            throw new ApiException<Error>(response.httpStatusCode, "Forbidden", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: CreateRoomClientToken201Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CreateRoomClientToken201Response", ""
            ) as CreateRoomClientToken201Response;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to refreshRoomClientToken
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async refreshRoomClientToken(response: ResponseContext): Promise<RefreshRoomClientToken201Response > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: RefreshRoomClientToken201Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RefreshRoomClientToken201Response", ""
            ) as RefreshRoomClientToken201Response;
            return body;
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: Error = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Error", ""
            ) as Error;
            throw new ApiException<Error>(response.httpStatusCode, "Forbidden", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RefreshRoomClientToken201Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RefreshRoomClientToken201Response", ""
            ) as RefreshRoomClientToken201Response;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
