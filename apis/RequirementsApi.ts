// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi.ts';
import {Configuration} from '../configuration.ts';
import {RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http.ts';
import {ObjectSerializer} from '../models/ObjectSerializer.ts';
import {ApiException} from './exception.ts';
import {canConsumeForm, isCodeInRange} from '../util.ts';
import {SecurityAuthentication} from '../auth/auth.ts';


import { DocReqsRetrieveDocumentRequirements200Response } from '../models/DocReqsRetrieveDocumentRequirements200Response.ts';
import { Errors } from '../models/Errors.ts';
import { ListRequirements200Response } from '../models/ListRequirements200Response.ts';

/**
 * no description
 */
export class RequirementsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Retrieve a document requirement record
     * Retrieve a document requirement
     * @param id Uniquely identifies the requirement_type record
     */
    public async docReqsRetrieveDocumentRequirements(id: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("RequirementsApi", "docReqsRetrieveDocumentRequirements", "id");
        }


        // Path Params
        const localVarPath = '/requirements/{id}'
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
     * List all requirements with filtering, sorting, and pagination
     * List all requirements
     * @param filterCountryCode Filters results to those applying to a 2-character (ISO 3166-1 alpha-2) country code
     * @param filterPhoneNumberType Filters results to those applying to a specific &#x60;phone_number_type&#x60;
     * @param filterAction Filters requirements to those applying to a specific action.
     * @param sort Specifies the sort order for results. If you want to sort by a field in ascending order, include it as a sort parameter. If you want to sort in descending order, prepend a &#x60;-&#x60; in front of the field name.
     * @param pageNumber The page number to load
     * @param pageSize The size of the page
     */
    public async listRequirements(filterCountryCode?: string, filterPhoneNumberType?: 'local' | 'national' | 'toll-free', filterAction?: 'ordering' | 'porting', sort?: 'action' | 'country_code' | 'locality' | 'phone_number_type', pageNumber?: number, pageSize?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;







        // Path Params
        const localVarPath = '/requirements';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (filterCountryCode !== undefined) {
            requestContext.setQueryParam("filter[country_code]", ObjectSerializer.serialize(filterCountryCode, "string", ""));
        }

        // Query Params
        if (filterPhoneNumberType !== undefined) {
            requestContext.setQueryParam("filter[phone_number_type]", ObjectSerializer.serialize(filterPhoneNumberType, "'local' | 'national' | 'toll-free'", ""));
        }

        // Query Params
        if (filterAction !== undefined) {
            requestContext.setQueryParam("filter[action]", ObjectSerializer.serialize(filterAction, "'ordering' | 'porting'", ""));
        }

        // Query Params
        if (sort !== undefined) {
            requestContext.setQueryParam("sort[]", ObjectSerializer.serialize(sort, "'action' | 'country_code' | 'locality' | 'phone_number_type'", ""));
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

export class RequirementsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to docReqsRetrieveDocumentRequirements
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async docReqsRetrieveDocumentRequirements(response: ResponseContext): Promise<DocReqsRetrieveDocumentRequirements200Response > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: DocReqsRetrieveDocumentRequirements200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DocReqsRetrieveDocumentRequirements200Response", ""
            ) as DocReqsRetrieveDocumentRequirements200Response;
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
            const body: DocReqsRetrieveDocumentRequirements200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DocReqsRetrieveDocumentRequirements200Response", ""
            ) as DocReqsRetrieveDocumentRequirements200Response;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listRequirements
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listRequirements(response: ResponseContext): Promise<ListRequirements200Response > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ListRequirements200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListRequirements200Response", ""
            ) as ListRequirements200Response;
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
            const body: ListRequirements200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListRequirements200Response", ""
            ) as ListRequirements200Response;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
