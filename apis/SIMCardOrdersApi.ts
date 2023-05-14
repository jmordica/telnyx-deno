// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi.ts';
import {Configuration} from '../configuration.ts';
import {RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http.ts';
import {ObjectSerializer} from '../models/ObjectSerializer.ts';
import {ApiException} from './exception.ts';
import {canConsumeForm, isCodeInRange} from '../util.ts';
import {SecurityAuthentication} from '../auth/auth.ts';


import { Errors } from '../models/Errors.ts';
import { SimCardOrderCreate } from '../models/SimCardOrderCreate.ts';
import { SimCardOrdersGet200Response } from '../models/SimCardOrdersGet200Response.ts';
import { SimCardOrdersPost200Response } from '../models/SimCardOrdersPost200Response.ts';
import { SimCardOrdersPreview202Response } from '../models/SimCardOrdersPreview202Response.ts';
import { SimCardOrdersPreviewRequest } from '../models/SimCardOrdersPreviewRequest.ts';

/**
 * no description
 */
export class SIMCardOrdersApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Get a single SIM card order by its ID.
     * Get a single SIM card order
     * @param id Identifies the resource.
     */
    public async simCardOrderGet(id: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("SIMCardOrdersApi", "simCardOrderGet", "id");
        }


        // Path Params
        const localVarPath = '/sim_card_orders/{id}'
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
     * Get all SIM card orders according to filters.
     * Get all SIM card orders
     * @param filterCreatedAt Filter by ISO 8601 formatted date-time string matching resource creation date-time.
     * @param filterUpdatedAt Filter by ISO 8601 formatted date-time string matching resource last update date-time.
     * @param filterQuantity Filter orders by how many SIM cards were ordered.
     * @param filterCostAmount The total monetary amount of the order.
     * @param filterCostCurrency Filter by ISO 4217 currency string.
     * @param filterAddressId Uniquely identifies the address for the order.
     * @param filterAddressStreetAddress Returns entries with matching name of the street where the address is located.
     * @param filterAddressExtendedAddress Returns entries with matching name of the supplemental field for address information.
     * @param filterAddressLocality Filter by the name of the city where the address is located.
     * @param filterAddressAdministrativeArea Filter by state or province where the address is located.
     * @param filterAddressCountryCode Filter by the mobile operator two-character (ISO 3166-1 alpha-2) origin country code.
     * @param filterAddressPostalCode Filter by postal code for the address.
     * @param pageNumber The page number to load
     * @param pageSize The size of the page
     */
    public async simCardOrdersGet(filterCreatedAt?: string, filterUpdatedAt?: string, filterQuantity?: number, filterCostAmount?: string, filterCostCurrency?: string, filterAddressId?: string, filterAddressStreetAddress?: string, filterAddressExtendedAddress?: string, filterAddressLocality?: string, filterAddressAdministrativeArea?: string, filterAddressCountryCode?: string, filterAddressPostalCode?: string, pageNumber?: number, pageSize?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;















        // Path Params
        const localVarPath = '/sim_card_orders';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (filterCreatedAt !== undefined) {
            requestContext.setQueryParam("filter[created_at]", ObjectSerializer.serialize(filterCreatedAt, "string", "datetime"));
        }

        // Query Params
        if (filterUpdatedAt !== undefined) {
            requestContext.setQueryParam("filter[updated_at]", ObjectSerializer.serialize(filterUpdatedAt, "string", "datetime"));
        }

        // Query Params
        if (filterQuantity !== undefined) {
            requestContext.setQueryParam("filter[quantity]", ObjectSerializer.serialize(filterQuantity, "number", ""));
        }

        // Query Params
        if (filterCostAmount !== undefined) {
            requestContext.setQueryParam("filter[cost.amount]", ObjectSerializer.serialize(filterCostAmount, "string", ""));
        }

        // Query Params
        if (filterCostCurrency !== undefined) {
            requestContext.setQueryParam("filter[cost.currency]", ObjectSerializer.serialize(filterCostCurrency, "string", ""));
        }

        // Query Params
        if (filterAddressId !== undefined) {
            requestContext.setQueryParam("filter[address.id]", ObjectSerializer.serialize(filterAddressId, "string", "int64"));
        }

        // Query Params
        if (filterAddressStreetAddress !== undefined) {
            requestContext.setQueryParam("filter[address.street_address]", ObjectSerializer.serialize(filterAddressStreetAddress, "string", ""));
        }

        // Query Params
        if (filterAddressExtendedAddress !== undefined) {
            requestContext.setQueryParam("filter[address.extended_address]", ObjectSerializer.serialize(filterAddressExtendedAddress, "string", ""));
        }

        // Query Params
        if (filterAddressLocality !== undefined) {
            requestContext.setQueryParam("filter[address.locality]", ObjectSerializer.serialize(filterAddressLocality, "string", ""));
        }

        // Query Params
        if (filterAddressAdministrativeArea !== undefined) {
            requestContext.setQueryParam("filter[address.administrative_area]", ObjectSerializer.serialize(filterAddressAdministrativeArea, "string", ""));
        }

        // Query Params
        if (filterAddressCountryCode !== undefined) {
            requestContext.setQueryParam("filter[address.country_code]", ObjectSerializer.serialize(filterAddressCountryCode, "string", ""));
        }

        // Query Params
        if (filterAddressPostalCode !== undefined) {
            requestContext.setQueryParam("filter[address.postal_code]", ObjectSerializer.serialize(filterAddressPostalCode, "string", ""));
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
     * Creates a new order for SIM cards.
     * Create a SIM card order
     * @param simCardOrderCreate 
     */
    public async simCardOrdersPost(simCardOrderCreate: SimCardOrderCreate, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'simCardOrderCreate' is not null or undefined
        if (simCardOrderCreate === null || simCardOrderCreate === undefined) {
            throw new RequiredError("SIMCardOrdersApi", "simCardOrdersPost", "simCardOrderCreate");
        }


        // Path Params
        const localVarPath = '/sim_card_orders';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(simCardOrderCreate, "SimCardOrderCreate", ""),
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
     * Preview SIM card order purchases.
     * Preview SIM card orders
     * @param simCardOrdersPreviewRequest 
     */
    public async simCardOrdersPreview(simCardOrdersPreviewRequest?: SimCardOrdersPreviewRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;


        // Path Params
        const localVarPath = '/sim_card_order_preview';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(simCardOrdersPreviewRequest, "SimCardOrdersPreviewRequest", ""),
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

export class SIMCardOrdersApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to simCardOrderGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async simCardOrderGet(response: ResponseContext): Promise<SimCardOrdersPost200Response > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SimCardOrdersPost200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SimCardOrdersPost200Response", ""
            ) as SimCardOrdersPost200Response;
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
            const body: SimCardOrdersPost200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SimCardOrdersPost200Response", ""
            ) as SimCardOrdersPost200Response;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to simCardOrdersGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async simCardOrdersGet(response: ResponseContext): Promise<SimCardOrdersGet200Response > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SimCardOrdersGet200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SimCardOrdersGet200Response", ""
            ) as SimCardOrdersGet200Response;
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
            const body: SimCardOrdersGet200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SimCardOrdersGet200Response", ""
            ) as SimCardOrdersGet200Response;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to simCardOrdersPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async simCardOrdersPost(response: ResponseContext): Promise<SimCardOrdersPost200Response > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SimCardOrdersPost200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SimCardOrdersPost200Response", ""
            ) as SimCardOrdersPost200Response;
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
            const body: SimCardOrdersPost200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SimCardOrdersPost200Response", ""
            ) as SimCardOrdersPost200Response;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to simCardOrdersPreview
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async simCardOrdersPreview(response: ResponseContext): Promise<SimCardOrdersPreview202Response > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("202", response.httpStatusCode)) {
            const body: SimCardOrdersPreview202Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SimCardOrdersPreview202Response", ""
            ) as SimCardOrdersPreview202Response;
            return body;
        }
        if (isCodeInRange("422", response.httpStatusCode)) {
            const body: Errors = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Errors", ""
            ) as Errors;
            throw new ApiException<Errors>(response.httpStatusCode, "Unprocessable entity. Check the \&#39;detail\&#39; field in response for details.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: SimCardOrdersPreview202Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SimCardOrdersPreview202Response", ""
            ) as SimCardOrdersPreview202Response;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
