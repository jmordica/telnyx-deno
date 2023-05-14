// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi.ts';
import {Configuration} from '../configuration.ts';
import {RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http.ts';
import {ObjectSerializer} from '../models/ObjectSerializer.ts';
import {ApiException} from './exception.ts';
import {canConsumeForm, isCodeInRange} from '../util.ts';
import {SecurityAuthentication} from '../auth/auth.ts';


import { CreateNumberBlockOrderRequest } from '../models/CreateNumberBlockOrderRequest.ts';
import { Errors } from '../models/Errors.ts';
import { ListNumberBlockOrdersResponse } from '../models/ListNumberBlockOrdersResponse.ts';
import { NumberBlockOrderResponse } from '../models/NumberBlockOrderResponse.ts';

/**
 * no description
 */
export class NumberBlockOrdersApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Creates a phone number block order.
     * Create a number block order
     * @param createNumberBlockOrderRequest 
     */
    public async createNumberBlockOrder(createNumberBlockOrderRequest: CreateNumberBlockOrderRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'createNumberBlockOrderRequest' is not null or undefined
        if (createNumberBlockOrderRequest === null || createNumberBlockOrderRequest === undefined) {
            throw new RequiredError("NumberBlockOrdersApi", "createNumberBlockOrder", "createNumberBlockOrderRequest");
        }


        // Path Params
        const localVarPath = '/number_block_orders';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(createNumberBlockOrderRequest, "CreateNumberBlockOrderRequest", ""),
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
     * Get a paginated list of number block orders.
     * List number block orders
     * @param filterStatus Filter number block orders by status.
     * @param filterCreatedAtGt Filter number block orders later than this value.
     * @param filterCreatedAtLt Filter number block orders earlier than this value.
     * @param filterPhoneNumbersStartingNumber Filter number block  orders having these phone numbers.
     * @param pageNumber The page number to load
     * @param pageSize The size of the page
     */
    public async listNumberBlockOrders(filterStatus?: string, filterCreatedAtGt?: string, filterCreatedAtLt?: string, filterPhoneNumbersStartingNumber?: string, pageNumber?: number, pageSize?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;







        // Path Params
        const localVarPath = '/number_block_orders';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (filterStatus !== undefined) {
            requestContext.setQueryParam("filter[status]", ObjectSerializer.serialize(filterStatus, "string", ""));
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
        if (filterPhoneNumbersStartingNumber !== undefined) {
            requestContext.setQueryParam("filter[phone_numbers.starting_number]", ObjectSerializer.serialize(filterPhoneNumbersStartingNumber, "string", ""));
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
     * Get an existing phone number block order.
     * Retrieve a number block order
     * @param numberBlockOrderId The number block order ID.
     */
    public async retrieveNumberBlockOrder(numberBlockOrderId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'numberBlockOrderId' is not null or undefined
        if (numberBlockOrderId === null || numberBlockOrderId === undefined) {
            throw new RequiredError("NumberBlockOrdersApi", "retrieveNumberBlockOrder", "numberBlockOrderId");
        }


        // Path Params
        const localVarPath = '/number_block_orders/{number_block_order_id}'
            .replace('{' + 'number_block_order_id' + '}', encodeURIComponent(String(numberBlockOrderId)));

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

export class NumberBlockOrdersApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createNumberBlockOrder
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createNumberBlockOrder(response: ResponseContext): Promise<NumberBlockOrderResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: NumberBlockOrderResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NumberBlockOrderResponse", ""
            ) as NumberBlockOrderResponse;
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
            const body: NumberBlockOrderResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NumberBlockOrderResponse", ""
            ) as NumberBlockOrderResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listNumberBlockOrders
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listNumberBlockOrders(response: ResponseContext): Promise<ListNumberBlockOrdersResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ListNumberBlockOrdersResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListNumberBlockOrdersResponse", ""
            ) as ListNumberBlockOrdersResponse;
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
            const body: ListNumberBlockOrdersResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListNumberBlockOrdersResponse", ""
            ) as ListNumberBlockOrdersResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to retrieveNumberBlockOrder
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async retrieveNumberBlockOrder(response: ResponseContext): Promise<NumberBlockOrderResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: NumberBlockOrderResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NumberBlockOrderResponse", ""
            ) as NumberBlockOrderResponse;
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
            const body: NumberBlockOrderResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NumberBlockOrderResponse", ""
            ) as NumberBlockOrderResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
