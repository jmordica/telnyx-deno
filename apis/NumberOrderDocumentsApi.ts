// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi.ts';
import {Configuration} from '../configuration.ts';
import {RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http.ts';
import {ObjectSerializer} from '../models/ObjectSerializer.ts';
import {ApiException} from './exception.ts';
import {canConsumeForm, isCodeInRange} from '../util.ts';
import {SecurityAuthentication} from '../auth/auth.ts';


import { CreateNumberOrderDocumentRequest } from '../models/CreateNumberOrderDocumentRequest.ts';
import { Errors } from '../models/Errors.ts';
import { ListNumberOrderDocumentsResponse } from '../models/ListNumberOrderDocumentsResponse.ts';
import { NumberOrderDocumentResponse } from '../models/NumberOrderDocumentResponse.ts';
import { UpdateNumberOrderDocumentRequest } from '../models/UpdateNumberOrderDocumentRequest.ts';

/**
 * no description
 */
export class NumberOrderDocumentsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Upload a phone number order document.
     * Create a number order document
     * @param createNumberOrderDocumentRequest 
     */
    public async createNumberOrderDocument(createNumberOrderDocumentRequest: CreateNumberOrderDocumentRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'createNumberOrderDocumentRequest' is not null or undefined
        if (createNumberOrderDocumentRequest === null || createNumberOrderDocumentRequest === undefined) {
            throw new RequiredError("NumberOrderDocumentsApi", "createNumberOrderDocument", "createNumberOrderDocumentRequest");
        }


        // Path Params
        const localVarPath = '/number_order_documents';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(createNumberOrderDocumentRequest, "CreateNumberOrderDocumentRequest", ""),
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
     * Gets a paginated list of number order documents.
     * List number order documents
     * @param filterRequirementId Filter number order documents by &#x60;requirement_id&#x60;.
     * @param filterCreatedAtGt Filter number order documents after this datetime.
     * @param filterCreatedAtLt Filter number order documents from before this datetime.
     * @param pageNumber The page number to load
     * @param pageSize The size of the page
     */
    public async listNumberOrderDocuments(filterRequirementId?: string, filterCreatedAtGt?: string, filterCreatedAtLt?: string, pageNumber?: number, pageSize?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;






        // Path Params
        const localVarPath = '/number_order_documents';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (filterRequirementId !== undefined) {
            requestContext.setQueryParam("filter[requirement_id]", ObjectSerializer.serialize(filterRequirementId, "string", ""));
        }

        // Query Params
        if (filterCreatedAtGt !== undefined) {
            requestContext.setQueryParam("filter[created_at][gt]", ObjectSerializer.serialize(filterCreatedAtGt, "string", ""));
        }

        // Query Params
        if (filterCreatedAtLt !== undefined) {
            requestContext.setQueryParam("filter[created_at][lt]", ObjectSerializer.serialize(filterCreatedAtLt, "string", ""));
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

    /**
     * Gets a single number order document.
     * Retrieve a number order document
     * @param numberOrderDocumentId The number order document ID.
     */
    public async retrieveNumberOrderDocument(numberOrderDocumentId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'numberOrderDocumentId' is not null or undefined
        if (numberOrderDocumentId === null || numberOrderDocumentId === undefined) {
            throw new RequiredError("NumberOrderDocumentsApi", "retrieveNumberOrderDocument", "numberOrderDocumentId");
        }


        // Path Params
        const localVarPath = '/number_order_documents/{number_order_document_id}'
            .replace('{' + 'number_order_document_id' + '}', encodeURIComponent(String(numberOrderDocumentId)));

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
     * Updates a number order document.
     * Update a number order document
     * @param numberOrderDocumentId The number order document ID.
     * @param updateNumberOrderDocumentRequest 
     */
    public async updateNumberOrderDocument(numberOrderDocumentId: string, updateNumberOrderDocumentRequest: UpdateNumberOrderDocumentRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'numberOrderDocumentId' is not null or undefined
        if (numberOrderDocumentId === null || numberOrderDocumentId === undefined) {
            throw new RequiredError("NumberOrderDocumentsApi", "updateNumberOrderDocument", "numberOrderDocumentId");
        }


        // verify required parameter 'updateNumberOrderDocumentRequest' is not null or undefined
        if (updateNumberOrderDocumentRequest === null || updateNumberOrderDocumentRequest === undefined) {
            throw new RequiredError("NumberOrderDocumentsApi", "updateNumberOrderDocument", "updateNumberOrderDocumentRequest");
        }


        // Path Params
        const localVarPath = '/number_order_documents/{number_order_document_id}'
            .replace('{' + 'number_order_document_id' + '}', encodeURIComponent(String(numberOrderDocumentId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PATCH);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(updateNumberOrderDocumentRequest, "UpdateNumberOrderDocumentRequest", ""),
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

export class NumberOrderDocumentsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createNumberOrderDocument
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createNumberOrderDocument(response: ResponseContext): Promise<NumberOrderDocumentResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: NumberOrderDocumentResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NumberOrderDocumentResponse", ""
            ) as NumberOrderDocumentResponse;
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
            const body: NumberOrderDocumentResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NumberOrderDocumentResponse", ""
            ) as NumberOrderDocumentResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listNumberOrderDocuments
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listNumberOrderDocuments(response: ResponseContext): Promise<ListNumberOrderDocumentsResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ListNumberOrderDocumentsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListNumberOrderDocumentsResponse", ""
            ) as ListNumberOrderDocumentsResponse;
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
            const body: ListNumberOrderDocumentsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListNumberOrderDocumentsResponse", ""
            ) as ListNumberOrderDocumentsResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to retrieveNumberOrderDocument
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async retrieveNumberOrderDocument(response: ResponseContext): Promise<NumberOrderDocumentResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: NumberOrderDocumentResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NumberOrderDocumentResponse", ""
            ) as NumberOrderDocumentResponse;
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
            const body: NumberOrderDocumentResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NumberOrderDocumentResponse", ""
            ) as NumberOrderDocumentResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateNumberOrderDocument
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updateNumberOrderDocument(response: ResponseContext): Promise<NumberOrderDocumentResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: NumberOrderDocumentResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NumberOrderDocumentResponse", ""
            ) as NumberOrderDocumentResponse;
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
            const body: NumberOrderDocumentResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NumberOrderDocumentResponse", ""
            ) as NumberOrderDocumentResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
