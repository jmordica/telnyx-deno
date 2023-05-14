// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi.ts';
import {Configuration} from '../configuration.ts';
import {RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http.ts';
import {ObjectSerializer} from '../models/ObjectSerializer.ts';
import {ApiException} from './exception.ts';
import {canConsumeForm, isCodeInRange} from '../util.ts';
import {SecurityAuthentication} from '../auth/auth.ts';


import { ActiveCallsResponse } from '../models/ActiveCallsResponse.ts';
import { Errors } from '../models/Errors.ts';
import { RetrieveCallStatusResponse } from '../models/RetrieveCallStatusResponse.ts';

/**
 * no description
 */
export class CallInformationApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Lists all active calls for given connection. Acceptable connections are either SIP connections with webhook_url or xml_request_url, call control or texml. Returned results are cursor paginated. 
     * List all active calls for given connection
     * @param connectionId Telnyx connection id
     * @param pageLimit Limit of records per single page
     * @param pageAfter Opaque identifier of next page
     * @param pageBefore Opaque identifier of previous page
     */
    public async listConnectionActiveCalls(connectionId: string, pageLimit?: number, pageAfter?: string, pageBefore?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'connectionId' is not null or undefined
        if (connectionId === null || connectionId === undefined) {
            throw new RequiredError("CallInformationApi", "listConnectionActiveCalls", "connectionId");
        }





        // Path Params
        const localVarPath = '/connections/{connection_id}/active_calls'
            .replace('{' + 'connection_id' + '}', encodeURIComponent(String(connectionId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (pageLimit !== undefined) {
            requestContext.setQueryParam("page[limit]", ObjectSerializer.serialize(pageLimit, "number", ""));
        }

        // Query Params
        if (pageAfter !== undefined) {
            requestContext.setQueryParam("page[after]", ObjectSerializer.serialize(pageAfter, "string", ""));
        }

        // Query Params
        if (pageBefore !== undefined) {
            requestContext.setQueryParam("page[before]", ObjectSerializer.serialize(pageBefore, "string", ""));
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
     * Returns the status of a call (data is available 10 minutes after call ended).
     * Retrieve a call status
     * @param callControlId Unique identifier and token for controlling the call
     */
    public async retrieveCallStatus(callControlId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'callControlId' is not null or undefined
        if (callControlId === null || callControlId === undefined) {
            throw new RequiredError("CallInformationApi", "retrieveCallStatus", "callControlId");
        }


        // Path Params
        const localVarPath = '/calls/{call_control_id}'
            .replace('{' + 'call_control_id' + '}', encodeURIComponent(String(callControlId)));

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

}

export class CallInformationApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listConnectionActiveCalls
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listConnectionActiveCalls(response: ResponseContext): Promise<ActiveCallsResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ActiveCallsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ActiveCallsResponse", ""
            ) as ActiveCallsResponse;
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
            const body: ActiveCallsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ActiveCallsResponse", ""
            ) as ActiveCallsResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to retrieveCallStatus
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async retrieveCallStatus(response: ResponseContext): Promise<RetrieveCallStatusResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RetrieveCallStatusResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RetrieveCallStatusResponse", ""
            ) as RetrieveCallStatusResponse;
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
            const body: RetrieveCallStatusResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RetrieveCallStatusResponse", ""
            ) as RetrieveCallStatusResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
