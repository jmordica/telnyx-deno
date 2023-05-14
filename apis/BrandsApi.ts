// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi.ts';
import {Configuration} from '../configuration.ts';
import {RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http.ts';
import {ObjectSerializer} from '../models/ObjectSerializer.ts';
import {ApiException} from './exception.ts';
import {canConsumeForm, isCodeInRange} from '../util.ts';
import {SecurityAuthentication} from '../auth/auth.ts';


import { BrandFeedback } from '../models/BrandFeedback.ts';
import { BrandRecordSetCSP } from '../models/BrandRecordSetCSP.ts';
import { CreateBrand } from '../models/CreateBrand.ts';
import { ExternalVetting } from '../models/ExternalVetting.ts';
import { HTTPValidationError } from '../models/HTTPValidationError.ts';
import { ImportExternalVetting } from '../models/ImportExternalVetting.ts';
import { OrderExternalVetting } from '../models/OrderExternalVetting.ts';
import { TelnyxBrand } from '../models/TelnyxBrand.ts';
import { UpdateBrand } from '../models/UpdateBrand.ts';

/**
 * no description
 */
export class BrandsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * This endpoint is used to create a new brand. A brand is an entity created by The Campaign Registry (TCR) that represents an organization or a company. It is this entity that TCR created campaigns will be associated with. Each brand creation will entail an upfront, non-refundable $4 expense.
     * Create Brand
     * @param createBrand 
     */
    public async createBrandBrandPost(createBrand: CreateBrand, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'createBrand' is not null or undefined
        if (createBrand === null || createBrand === undefined) {
            throw new RequiredError("BrandsApi", "createBrandBrandPost", "createBrand");
        }


        // Path Params
        const localVarPath = '/brand';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(createBrand, "CreateBrand", ""),
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
     * Delete Brand
     * @param brandId 
     */
    public async deleteBrandBrandBrandIdDelete(brandId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'brandId' is not null or undefined
        if (brandId === null || brandId === undefined) {
            throw new RequiredError("BrandsApi", "deleteBrandBrandBrandIdDelete", "brandId");
        }


        // Path Params
        const localVarPath = '/brand/{brandId}'
            .replace('{' + 'brandId' + '}', encodeURIComponent(String(brandId)));

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
     * Retrieve a brand by `brandId`.
     * Get Brand
     * @param brandId 
     */
    public async getBrandBrandBrandIdGet(brandId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'brandId' is not null or undefined
        if (brandId === null || brandId === undefined) {
            throw new RequiredError("BrandsApi", "getBrandBrandBrandIdGet", "brandId");
        }


        // Path Params
        const localVarPath = '/brand/{brandId}'
            .replace('{' + 'brandId' + '}', encodeURIComponent(String(brandId)));

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
     * Get feedback about a brand by ID. This endpoint can be used after creating or revetting a brand.  Possible values for `.category[].id`:  * `TAX_ID` - Data mismatch related to tax id and its associated properties. * `STOCK_SYMBOL` - Non public entity registered as a public for profit entity or   the stock information mismatch. * `GOVERNMENT_ENTITY` - Non government entity registered as a government entity.   Must be a U.S. government entity. * `NONPROFIT` - Not a recognized non-profit entity. No IRS tax-exempt status   found. * `OTHERS` - Details of the data misrepresentation if any.
     * Get Brand Feedback By Id
     * @param brandId 
     */
    public async getBrandFeedbackByIdBrandFeedbackBrandIdGet(brandId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'brandId' is not null or undefined
        if (brandId === null || brandId === undefined) {
            throw new RequiredError("BrandsApi", "getBrandFeedbackByIdBrandFeedbackBrandIdGet", "brandId");
        }


        // Path Params
        const localVarPath = '/brand/feedback/{brandId}'
            .replace('{' + 'brandId' + '}', encodeURIComponent(String(brandId)));

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
     * This operation can be used to import an external vetting record from a TCR-approved vetting provider. If the vetting provider confirms validity of the record, it will be saved with the brand and will be considered for future campaign qualification.
     * Import External Vetting Record
     * @param brandId 
     * @param importExternalVetting 
     */
    public async importExternalVettingRecordBrandBrandIdExternalVettingPut(brandId: string, importExternalVetting: ImportExternalVetting, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'brandId' is not null or undefined
        if (brandId === null || brandId === undefined) {
            throw new RequiredError("BrandsApi", "importExternalVettingRecordBrandBrandIdExternalVettingPut", "brandId");
        }


        // verify required parameter 'importExternalVetting' is not null or undefined
        if (importExternalVetting === null || importExternalVetting === undefined) {
            throw new RequiredError("BrandsApi", "importExternalVettingRecordBrandBrandIdExternalVettingPut", "importExternalVetting");
        }


        // Path Params
        const localVarPath = '/brand/{brandId}/externalVetting'
            .replace('{' + 'brandId' + '}', encodeURIComponent(String(brandId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(importExternalVetting, "ImportExternalVetting", ""),
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
     * This endpoint is used to list all brands associated with your organization.
     * List Brands
     * @param page 
     * @param recordsPerPage number of records per page. maximum of 500
     * @param displayName 
     * @param entityType 
     * @param state 
     * @param country 
     */
    public async listBrandsBrandGet(page?: number, recordsPerPage?: number, displayName?: string, entityType?: string, state?: string, country?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;







        // Path Params
        const localVarPath = '/brand';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (page !== undefined) {
            requestContext.setQueryParam("page", ObjectSerializer.serialize(page, "number", ""));
        }

        // Query Params
        if (recordsPerPage !== undefined) {
            requestContext.setQueryParam("recordsPerPage", ObjectSerializer.serialize(recordsPerPage, "number", ""));
        }

        // Query Params
        if (displayName !== undefined) {
            requestContext.setQueryParam("displayName", ObjectSerializer.serialize(displayName, "string", ""));
        }

        // Query Params
        if (entityType !== undefined) {
            requestContext.setQueryParam("entityType", ObjectSerializer.serialize(entityType, "string", ""));
        }

        // Query Params
        if (state !== undefined) {
            requestContext.setQueryParam("state", ObjectSerializer.serialize(state, "string", ""));
        }

        // Query Params
        if (country !== undefined) {
            requestContext.setQueryParam("country", ObjectSerializer.serialize(country, "string", ""));
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
     * Get list of valid external vetting record for a given brand
     * List External Vettings
     * @param brandId 
     */
    public async listExternalVettingsBrandBrandIdExternalVettingGet(brandId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'brandId' is not null or undefined
        if (brandId === null || brandId === undefined) {
            throw new RequiredError("BrandsApi", "listExternalVettingsBrandBrandIdExternalVettingGet", "brandId");
        }


        // Path Params
        const localVarPath = '/brand/{brandId}/externalVetting'
            .replace('{' + 'brandId' + '}', encodeURIComponent(String(brandId)));

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
     * Order new external vetting for a brand
     * Order Brand External Vetting
     * @param brandId 
     * @param orderExternalVetting 
     */
    public async orderBrandExternalVettingBrandBrandIdExternalVettingPost(brandId: string, orderExternalVetting: OrderExternalVetting, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'brandId' is not null or undefined
        if (brandId === null || brandId === undefined) {
            throw new RequiredError("BrandsApi", "orderBrandExternalVettingBrandBrandIdExternalVettingPost", "brandId");
        }


        // verify required parameter 'orderExternalVetting' is not null or undefined
        if (orderExternalVetting === null || orderExternalVetting === undefined) {
            throw new RequiredError("BrandsApi", "orderBrandExternalVettingBrandBrandIdExternalVettingPost", "orderExternalVetting");
        }


        // Path Params
        const localVarPath = '/brand/{brandId}/externalVetting'
            .replace('{' + 'brandId' + '}', encodeURIComponent(String(brandId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(orderExternalVetting, "OrderExternalVetting", ""),
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
     * This operation allows you to revet the brand. However, revetting is allowed once after the successful brand registration and thereafter limited to once every 3 months.
     * Revet Brand
     * @param brandId 
     */
    public async revetBrandBrandBrandIdRevetPut(brandId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'brandId' is not null or undefined
        if (brandId === null || brandId === undefined) {
            throw new RequiredError("BrandsApi", "revetBrandBrandBrandIdRevetPut", "brandId");
        }


        // Path Params
        const localVarPath = '/brand/{brandId}/revet'
            .replace('{' + 'brandId' + '}', encodeURIComponent(String(brandId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
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
     * Update a brand\'s attributes by `brandId`.
     * Update Brand
     * @param brandId 
     * @param updateBrand 
     */
    public async updateBrandBrandBrandIdPut(brandId: string, updateBrand: UpdateBrand, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'brandId' is not null or undefined
        if (brandId === null || brandId === undefined) {
            throw new RequiredError("BrandsApi", "updateBrandBrandBrandIdPut", "brandId");
        }


        // verify required parameter 'updateBrand' is not null or undefined
        if (updateBrand === null || updateBrand === undefined) {
            throw new RequiredError("BrandsApi", "updateBrandBrandBrandIdPut", "updateBrand");
        }


        // Path Params
        const localVarPath = '/brand/{brandId}'
            .replace('{' + 'brandId' + '}', encodeURIComponent(String(brandId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(updateBrand, "UpdateBrand", ""),
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

export class BrandsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createBrandBrandPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createBrandBrandPost(response: ResponseContext): Promise<any > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return body;
        }
        if (isCodeInRange("422", response.httpStatusCode)) {
            const body: HTTPValidationError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "HTTPValidationError", ""
            ) as HTTPValidationError;
            throw new ApiException<HTTPValidationError>(response.httpStatusCode, "Validation Error", body, response.headers);
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
     * @params response Response returned by the server for a request to deleteBrandBrandBrandIdDelete
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteBrandBrandBrandIdDelete(response: ResponseContext): Promise<any > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return body;
        }
        if (isCodeInRange("422", response.httpStatusCode)) {
            const body: HTTPValidationError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "HTTPValidationError", ""
            ) as HTTPValidationError;
            throw new ApiException<HTTPValidationError>(response.httpStatusCode, "Validation Error", body, response.headers);
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
     * @params response Response returned by the server for a request to getBrandBrandBrandIdGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getBrandBrandBrandIdGet(response: ResponseContext): Promise<TelnyxBrand > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: TelnyxBrand = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "TelnyxBrand", ""
            ) as TelnyxBrand;
            return body;
        }
        if (isCodeInRange("422", response.httpStatusCode)) {
            const body: HTTPValidationError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "HTTPValidationError", ""
            ) as HTTPValidationError;
            throw new ApiException<HTTPValidationError>(response.httpStatusCode, "Validation Error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: TelnyxBrand = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "TelnyxBrand", ""
            ) as TelnyxBrand;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getBrandFeedbackByIdBrandFeedbackBrandIdGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getBrandFeedbackByIdBrandFeedbackBrandIdGet(response: ResponseContext): Promise<BrandFeedback > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: BrandFeedback = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BrandFeedback", ""
            ) as BrandFeedback;
            return body;
        }
        if (isCodeInRange("422", response.httpStatusCode)) {
            const body: HTTPValidationError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "HTTPValidationError", ""
            ) as HTTPValidationError;
            throw new ApiException<HTTPValidationError>(response.httpStatusCode, "Validation Error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: BrandFeedback = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BrandFeedback", ""
            ) as BrandFeedback;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to importExternalVettingRecordBrandBrandIdExternalVettingPut
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async importExternalVettingRecordBrandBrandIdExternalVettingPut(response: ResponseContext): Promise<ExternalVetting > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ExternalVetting = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ExternalVetting", ""
            ) as ExternalVetting;
            return body;
        }
        if (isCodeInRange("422", response.httpStatusCode)) {
            const body: HTTPValidationError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "HTTPValidationError", ""
            ) as HTTPValidationError;
            throw new ApiException<HTTPValidationError>(response.httpStatusCode, "Validation Error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ExternalVetting = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ExternalVetting", ""
            ) as ExternalVetting;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listBrandsBrandGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listBrandsBrandGet(response: ResponseContext): Promise<BrandRecordSetCSP > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: BrandRecordSetCSP = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BrandRecordSetCSP", ""
            ) as BrandRecordSetCSP;
            return body;
        }
        if (isCodeInRange("422", response.httpStatusCode)) {
            const body: HTTPValidationError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "HTTPValidationError", ""
            ) as HTTPValidationError;
            throw new ApiException<HTTPValidationError>(response.httpStatusCode, "Validation Error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: BrandRecordSetCSP = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BrandRecordSetCSP", ""
            ) as BrandRecordSetCSP;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listExternalVettingsBrandBrandIdExternalVettingGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listExternalVettingsBrandBrandIdExternalVettingGet(response: ResponseContext): Promise<any > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return body;
        }
        if (isCodeInRange("422", response.httpStatusCode)) {
            const body: HTTPValidationError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "HTTPValidationError", ""
            ) as HTTPValidationError;
            throw new ApiException<HTTPValidationError>(response.httpStatusCode, "Validation Error", body, response.headers);
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
     * @params response Response returned by the server for a request to orderBrandExternalVettingBrandBrandIdExternalVettingPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async orderBrandExternalVettingBrandBrandIdExternalVettingPost(response: ResponseContext): Promise<any > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return body;
        }
        if (isCodeInRange("422", response.httpStatusCode)) {
            const body: HTTPValidationError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "HTTPValidationError", ""
            ) as HTTPValidationError;
            throw new ApiException<HTTPValidationError>(response.httpStatusCode, "Validation Error", body, response.headers);
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
     * @params response Response returned by the server for a request to revetBrandBrandBrandIdRevetPut
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async revetBrandBrandBrandIdRevetPut(response: ResponseContext): Promise<any > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return body;
        }
        if (isCodeInRange("422", response.httpStatusCode)) {
            const body: HTTPValidationError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "HTTPValidationError", ""
            ) as HTTPValidationError;
            throw new ApiException<HTTPValidationError>(response.httpStatusCode, "Validation Error", body, response.headers);
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
     * @params response Response returned by the server for a request to updateBrandBrandBrandIdPut
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updateBrandBrandBrandIdPut(response: ResponseContext): Promise<TelnyxBrand > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: TelnyxBrand = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "TelnyxBrand", ""
            ) as TelnyxBrand;
            return body;
        }
        if (isCodeInRange("422", response.httpStatusCode)) {
            const body: HTTPValidationError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "HTTPValidationError", ""
            ) as HTTPValidationError;
            throw new ApiException<HTTPValidationError>(response.httpStatusCode, "Validation Error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: TelnyxBrand = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "TelnyxBrand", ""
            ) as TelnyxBrand;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
