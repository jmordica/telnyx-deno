// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi.ts';
import {Configuration} from '../configuration.ts';
import {RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http.ts';
import {ObjectSerializer} from '../models/ObjectSerializer.ts';
import {ApiException} from './exception.ts';
import {canConsumeForm, isCodeInRange} from '../util.ts';
import {SecurityAuthentication} from '../auth/auth.ts';


import { Errors } from '../models/Errors.ts';
import { Fax } from '../models/Fax.ts';
import { GetFaxResponse } from '../models/GetFaxResponse.ts';
import { ListFaxesResponse } from '../models/ListFaxesResponse.ts';
import { RefreshFaxResponse } from '../models/RefreshFaxResponse.ts';
//import { SendFaxMultipartRequest } from '../models/SendFaxMultipartRequest.ts';
import { SendFaxRequest } from '../models/SendFaxRequest.ts';
import { SuccessfulResponseUponAcceptingCancelFaxCommand } from '../models/SuccessfulResponseUponAcceptingCancelFaxCommand.ts';

/**
 * no description
 */
export class ProgrammableFaxCommandsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Cancel the outbound fax that is in one of the following states: `queued`, `media.processed`, `originated` or `sending` 
     * Cancel a fax
     * @param id The unique identifier of a fax.
     */
    public async cancelFax(id: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("ProgrammableFaxCommandsApi", "cancelFax", "id");
        }


        // Path Params
        const localVarPath = '/faxes/{id}/actions/cancel'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
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
     * Delete a fax
     * @param id The unique identifier of a fax.
     */
    public async deleteFax(id: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("ProgrammableFaxCommandsApi", "deleteFax", "id");
        }


        // Path Params
        const localVarPath = '/faxes/{id}'
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
     * 
     * View a list of faxes
     * @param filterCreatedAtGte ISO 8601 date time for filtering faxes created after or on that date
     * @param filterCreatedAtGt ISO 8601 date time for filtering faxes created after that date
     * @param filterCreatedAtLte ISO 8601 formatted date time for filtering faxes created on or before that date
     * @param filterCreatedAtLt ISO 8601 formatted date time for filtering faxes created before that date
     * @param filterDirectionEq The direction, inbound or outbound, for filtering faxes sent from this account
     * @param filterFromEq The phone number, in E.164 format for filtering faxes sent from this number
     * @param pageSize Number of fax resourcxes for the single page returned
     * @param pageNumber Number of the page to be retrieved
     */
    public async listFaxes(filterCreatedAtGte?: Date, filterCreatedAtGt?: Date, filterCreatedAtLte?: Date, filterCreatedAtLt?: Date, filterDirectionEq?: string, filterFromEq?: string, pageSize?: number, pageNumber?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;









        // Path Params
        const localVarPath = '/faxes';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (filterCreatedAtGte !== undefined) {
            requestContext.setQueryParam("filter[created_at][gte]", ObjectSerializer.serialize(filterCreatedAtGte, "Date", "date-time"));
        }

        // Query Params
        if (filterCreatedAtGt !== undefined) {
            requestContext.setQueryParam("filter[created_at][gt]", ObjectSerializer.serialize(filterCreatedAtGt, "Date", "date-time"));
        }

        // Query Params
        if (filterCreatedAtLte !== undefined) {
            requestContext.setQueryParam("filter[created_at][lte]", ObjectSerializer.serialize(filterCreatedAtLte, "Date", "date-time"));
        }

        // Query Params
        if (filterCreatedAtLt !== undefined) {
            requestContext.setQueryParam("filter[created_at][lt]", ObjectSerializer.serialize(filterCreatedAtLt, "Date", "date-time"));
        }

        // Query Params
        if (filterDirectionEq !== undefined) {
            requestContext.setQueryParam("filter[direction][eq]", ObjectSerializer.serialize(filterDirectionEq, "string", ""));
        }

        // Query Params
        if (filterFromEq !== undefined) {
            requestContext.setQueryParam("filter[from][eq]", ObjectSerializer.serialize(filterFromEq, "string", ""));
        }

        // Query Params
        if (pageSize !== undefined) {
            requestContext.setQueryParam("page[size]", ObjectSerializer.serialize(pageSize, "number", ""));
        }

        // Query Params
        if (pageNumber !== undefined) {
            requestContext.setQueryParam("page[number]", ObjectSerializer.serialize(pageNumber, "number", ""));
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
     * Refreshes the inbound fax\'s media_url when it has expired
     * Refresh a fax
     * @param id The unique identifier of a fax.
     */
    public async refreshFax(id: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("ProgrammableFaxCommandsApi", "refreshFax", "id");
        }


        // Path Params
        const localVarPath = '/faxes/{id}/actions/refresh'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
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
     * Send a fax. Files have size limits and page count limit validations. If a file is bigger than 50MB or has more than 350 pages it will fail with `file_size_limit_exceeded` and `page_count_limit_exceeded` respectively.   **Expected Webhooks:**  - `fax.queued` - `fax.media.processed` - `fax.sending.started` - `fax.delivered` - `fax.failed` 
     * Send a fax
     * @param sendFaxRequest Send fax request
     */
    public async sendFax(sendFaxRequest: SendFaxRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'sendFaxRequest' is not null or undefined
        if (sendFaxRequest === null || sendFaxRequest === undefined) {
            throw new RequiredError("ProgrammableFaxCommandsApi", "sendFax", "sendFaxRequest");
        }


        // Path Params
        const localVarPath = '/faxes';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json",
        
            "multipart/form-data"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(sendFaxRequest, "SendFaxRequest", ""),
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
     * View a fax
     * @param id The unique identifier of a fax.
     */
    public async viewFax(id: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("ProgrammableFaxCommandsApi", "viewFax", "id");
        }


        // Path Params
        const localVarPath = '/faxes/{id}'
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

}

export class ProgrammableFaxCommandsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to cancelFax
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async cancelFax(response: ResponseContext): Promise<SuccessfulResponseUponAcceptingCancelFaxCommand > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("202", response.httpStatusCode)) {
            const body: SuccessfulResponseUponAcceptingCancelFaxCommand = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SuccessfulResponseUponAcceptingCancelFaxCommand", ""
            ) as SuccessfulResponseUponAcceptingCancelFaxCommand;
            return body;
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Conference does not exist", undefined, response.headers);
        }
        if (isCodeInRange("422", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Unprocessable entity", undefined, response.headers);
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
            const body: SuccessfulResponseUponAcceptingCancelFaxCommand = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SuccessfulResponseUponAcceptingCancelFaxCommand", ""
            ) as SuccessfulResponseUponAcceptingCancelFaxCommand;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteFax
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteFax(response: ResponseContext): Promise<void > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("204", response.httpStatusCode)) {
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

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listFaxes
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listFaxes(response: ResponseContext): Promise<ListFaxesResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ListFaxesResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListFaxesResponse", ""
            ) as ListFaxesResponse;
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
            const body: ListFaxesResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListFaxesResponse", ""
            ) as ListFaxesResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to refreshFax
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async refreshFax(response: ResponseContext): Promise<RefreshFaxResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RefreshFaxResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RefreshFaxResponse", ""
            ) as RefreshFaxResponse;
            return body;
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Conference does not exist", undefined, response.headers);
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
            const body: RefreshFaxResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RefreshFaxResponse", ""
            ) as RefreshFaxResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to sendFax
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async sendFax(response: ResponseContext): Promise<any > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("202", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
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
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to viewFax
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async viewFax(response: ResponseContext): Promise<GetFaxResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GetFaxResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetFaxResponse", ""
            ) as GetFaxResponse;
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
            const body: GetFaxResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetFaxResponse", ""
            ) as GetFaxResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
