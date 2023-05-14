// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi.ts';
import {Configuration} from '../configuration.ts';
import {RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http.ts';
import {ObjectSerializer} from '../models/ObjectSerializer.ts';
import {ApiException} from './exception.ts';
import {canConsumeForm, isCodeInRange} from '../util.ts';
import {SecurityAuthentication} from '../auth/auth.ts';


import { Campaign } from '../models/Campaign.ts';
import { CampaignCSP } from '../models/CampaignCSP.ts';
import { CampaignCost } from '../models/CampaignCost.ts';
import { CampaignDeletionResponse } from '../models/CampaignDeletionResponse.ts';
import { CampaignRecordSetCSP } from '../models/CampaignRecordSetCSP.ts';
import { CampaignRequest } from '../models/CampaignRequest.ts';
import { CampaignSharingChain } from '../models/CampaignSharingChain.ts';
import { HTTPValidationError } from '../models/HTTPValidationError.ts';
import { UpdateCampaign } from '../models/UpdateCampaign.ts';
import { UsecaseMetadata } from '../models/UsecaseMetadata.ts';

/**
 * no description
 */
export class CampaignApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Manually accept a campaign shared with Telnyx
     * Accept Shared Campaign
     * @param campaignId TCR\&#39;s ID for the campaign to import
     */
    public async acceptSharedCampaignCampaignAcceptSharingCampaignIdPost(campaignId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'campaignId' is not null or undefined
        if (campaignId === null || campaignId === undefined) {
            throw new RequiredError("CampaignApi", "acceptSharedCampaignCampaignAcceptSharingCampaignIdPost", "campaignId");
        }


        // Path Params
        const localVarPath = '/campaign/acceptSharing/{campaignId}'
            .replace('{' + 'campaignId' + '}', encodeURIComponent(String(campaignId)));

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
     * Terminate a campaign. Note that once deactivated, a campaign cannot be restored.
     * Deactivate My Campaign
     * @param campaignId 
     */
    public async deactivateMyCampaignCampaignCampaignIdDelete(campaignId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'campaignId' is not null or undefined
        if (campaignId === null || campaignId === undefined) {
            throw new RequiredError("CampaignApi", "deactivateMyCampaignCampaignCampaignIdDelete", "campaignId");
        }


        // Path Params
        const localVarPath = '/campaign/{campaignId}'
            .replace('{' + 'campaignId' + '}', encodeURIComponent(String(campaignId)));

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
     * Get Campaign Cost
     * @param usecase 
     */
    public async getCampaignCostCampaignUsecaseCostGet(usecase: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'usecase' is not null or undefined
        if (usecase === null || usecase === undefined) {
            throw new RequiredError("CampaignApi", "getCampaignCostCampaignUsecaseCostGet", "usecase");
        }


        // Path Params
        const localVarPath = '/campaign/usecase/cost';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (usecase !== undefined) {
            requestContext.setQueryParam("usecase", ObjectSerializer.serialize(usecase, "string", ""));
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
     * Get the campaign metadata for each MNO it was submitted to
     * Get Campaign Mno Metadata
     * @param campaignId ID of the campaign in question
     */
    public async getCampaignMnoMetadataCampaignCampaignIdMnoMetadataGet(campaignId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'campaignId' is not null or undefined
        if (campaignId === null || campaignId === undefined) {
            throw new RequiredError("CampaignApi", "getCampaignMnoMetadataCampaignCampaignIdMnoMetadataGet", "campaignId");
        }


        // Path Params
        const localVarPath = '/campaign/{campaignId}/mnoMetadata'
            .replace('{' + 'campaignId' + '}', encodeURIComponent(String(campaignId)));

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
     * Retrieve campaign details by `campaignId`.
     * Get My Campaign
     * @param campaignId 
     */
    public async getMyCampaignCampaignCampaignIdGet(campaignId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'campaignId' is not null or undefined
        if (campaignId === null || campaignId === undefined) {
            throw new RequiredError("CampaignApi", "getMyCampaignCampaignCampaignIdGet", "campaignId");
        }


        // Path Params
        const localVarPath = '/campaign/{campaignId}'
            .replace('{' + 'campaignId' + '}', encodeURIComponent(String(campaignId)));

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
     * Retrieve campaign\'s operation status at MNO level.
     * Get My Campaign Operation Status
     * @param campaignId 
     */
    public async getMyCampaignOperationStatusCampaignCampaignIdOperationStatusGet(campaignId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'campaignId' is not null or undefined
        if (campaignId === null || campaignId === undefined) {
            throw new RequiredError("CampaignApi", "getMyCampaignOperationStatusCampaignCampaignIdOperationStatusGet", "campaignId");
        }


        // Path Params
        const localVarPath = '/campaign/{campaignId}/operationStatus'
            .replace('{' + 'campaignId' + '}', encodeURIComponent(String(campaignId)));

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
     * Get My Osr Campaign Attributes
     * @param campaignId 
     */
    public async getMyOsrCampaignAttributesCampaignCampaignIdOsrAttributesGet(campaignId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'campaignId' is not null or undefined
        if (campaignId === null || campaignId === undefined) {
            throw new RequiredError("CampaignApi", "getMyOsrCampaignAttributesCampaignCampaignIdOsrAttributesGet", "campaignId");
        }


        // Path Params
        const localVarPath = '/campaign/{campaignId}/osr/attributes'
            .replace('{' + 'campaignId' + '}', encodeURIComponent(String(campaignId)));

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
     * Get Sharing Status
     * @param campaignId ID of the campaign in question
     */
    public async getSharingStatusCampaignCampaignIdSharingGet(campaignId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'campaignId' is not null or undefined
        if (campaignId === null || campaignId === undefined) {
            throw new RequiredError("CampaignApi", "getSharingStatusCampaignCampaignIdSharingGet", "campaignId");
        }


        // Path Params
        const localVarPath = '/campaign/{campaignId}/sharing'
            .replace('{' + 'campaignId' + '}', encodeURIComponent(String(campaignId)));

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
     * Retrieve a list of campaigns associated with a supplied `brandId`.
     * List Campaigns
     * @param brandId 
     * @param page The 1-indexed page number to get. The default value is &#x60;1&#x60;.
     * @param recordsPerPage The amount of records per page, limited to between 1 and 500 inclusive. The default value is &#x60;10&#x60;.
     */
    public async listCampaignsCampaignGet(brandId: string, page?: number, recordsPerPage?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'brandId' is not null or undefined
        if (brandId === null || brandId === undefined) {
            throw new RequiredError("CampaignApi", "listCampaignsCampaignGet", "brandId");
        }




        // Path Params
        const localVarPath = '/campaign';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (brandId !== undefined) {
            requestContext.setQueryParam("brandId", ObjectSerializer.serialize(brandId, "string", ""));
        }

        // Query Params
        if (page !== undefined) {
            requestContext.setQueryParam("page", ObjectSerializer.serialize(page, "number", ""));
        }

        // Query Params
        if (recordsPerPage !== undefined) {
            requestContext.setQueryParam("recordsPerPage", ObjectSerializer.serialize(recordsPerPage, "number", ""));
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
     * This endpoint allows you to see whether or not the supplied brand is suitable for your desired campaign use case.
     * Qualify By Usecase
     * @param usecase 
     * @param brandId 
     */
    public async qualifyByUsecaseCampaignBuilderBrandBrandIdUsecaseUsecaseGet(usecase: string, brandId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'usecase' is not null or undefined
        if (usecase === null || usecase === undefined) {
            throw new RequiredError("CampaignApi", "qualifyByUsecaseCampaignBuilderBrandBrandIdUsecaseUsecaseGet", "usecase");
        }


        // verify required parameter 'brandId' is not null or undefined
        if (brandId === null || brandId === undefined) {
            throw new RequiredError("CampaignApi", "qualifyByUsecaseCampaignBuilderBrandBrandIdUsecaseUsecaseGet", "brandId");
        }


        // Path Params
        const localVarPath = '/campaignBuilder/brand/{brandId}/usecase/{usecase}'
            .replace('{' + 'usecase' + '}', encodeURIComponent(String(usecase)))
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
     * Before creating a campaign, use the [Qualify By Usecase endpoint](https://developers.telnyx.com/docs/api/v2/10dlc/Campaign#qualify_by_usecase_campaignBuilder_brand__brand_id__usecase__usecase__get) to ensure that the brand you want to assign a new campaign to is qualified for the desired use case of that campaign. **Please note:** After campaign creation, you\'ll only be able to edit the campaign\'s sample messages. Creating a campaign will entail an upfront, non-refundable three month\'s cost that will depend on the campaign\'s use case ([see 10DLC Costs section for details](https://developers.telnyx.com/docs/api/v2/10dlc)).
     * Submit Campaign
     * @param campaignRequest 
     */
    public async submitCampaignCampaignBuilderPost(campaignRequest: CampaignRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'campaignRequest' is not null or undefined
        if (campaignRequest === null || campaignRequest === undefined) {
            throw new RequiredError("CampaignApi", "submitCampaignCampaignBuilderPost", "campaignRequest");
        }


        // Path Params
        const localVarPath = '/campaignBuilder';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(campaignRequest, "CampaignRequest", ""),
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
     * Update a campaign\'s properties by `campaignId`. **Please note:** only sample messages are editable.
     * Update My Campaign
     * @param campaignId 
     * @param updateCampaign 
     */
    public async updateMyCampaignCampaignCampaignIdPut(campaignId: string, updateCampaign: UpdateCampaign, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'campaignId' is not null or undefined
        if (campaignId === null || campaignId === undefined) {
            throw new RequiredError("CampaignApi", "updateMyCampaignCampaignCampaignIdPut", "campaignId");
        }


        // verify required parameter 'updateCampaign' is not null or undefined
        if (updateCampaign === null || updateCampaign === undefined) {
            throw new RequiredError("CampaignApi", "updateMyCampaignCampaignCampaignIdPut", "updateCampaign");
        }


        // Path Params
        const localVarPath = '/campaign/{campaignId}'
            .replace('{' + 'campaignId' + '}', encodeURIComponent(String(campaignId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(updateCampaign, "UpdateCampaign", ""),
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

export class CampaignApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to acceptSharedCampaignCampaignAcceptSharingCampaignIdPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async acceptSharedCampaignCampaignAcceptSharingCampaignIdPost(response: ResponseContext): Promise<any > {
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
     * @params response Response returned by the server for a request to deactivateMyCampaignCampaignCampaignIdDelete
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deactivateMyCampaignCampaignCampaignIdDelete(response: ResponseContext): Promise<CampaignDeletionResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CampaignDeletionResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CampaignDeletionResponse", ""
            ) as CampaignDeletionResponse;
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
            const body: CampaignDeletionResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CampaignDeletionResponse", ""
            ) as CampaignDeletionResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getCampaignCostCampaignUsecaseCostGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getCampaignCostCampaignUsecaseCostGet(response: ResponseContext): Promise<CampaignCost > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CampaignCost = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CampaignCost", ""
            ) as CampaignCost;
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
            const body: CampaignCost = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CampaignCost", ""
            ) as CampaignCost;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getCampaignMnoMetadataCampaignCampaignIdMnoMetadataGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getCampaignMnoMetadataCampaignCampaignIdMnoMetadataGet(response: ResponseContext): Promise<any > {
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
     * @params response Response returned by the server for a request to getMyCampaignCampaignCampaignIdGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getMyCampaignCampaignCampaignIdGet(response: ResponseContext): Promise<CampaignCSP > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CampaignCSP = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CampaignCSP", ""
            ) as CampaignCSP;
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
            const body: CampaignCSP = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CampaignCSP", ""
            ) as CampaignCSP;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getMyCampaignOperationStatusCampaignCampaignIdOperationStatusGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getMyCampaignOperationStatusCampaignCampaignIdOperationStatusGet(response: ResponseContext): Promise<any > {
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
     * @params response Response returned by the server for a request to getMyOsrCampaignAttributesCampaignCampaignIdOsrAttributesGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getMyOsrCampaignAttributesCampaignCampaignIdOsrAttributesGet(response: ResponseContext): Promise<any > {
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
     * @params response Response returned by the server for a request to getSharingStatusCampaignCampaignIdSharingGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getSharingStatusCampaignCampaignIdSharingGet(response: ResponseContext): Promise<CampaignSharingChain > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CampaignSharingChain = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CampaignSharingChain", ""
            ) as CampaignSharingChain;
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
            const body: CampaignSharingChain = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CampaignSharingChain", ""
            ) as CampaignSharingChain;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listCampaignsCampaignGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listCampaignsCampaignGet(response: ResponseContext): Promise<CampaignRecordSetCSP > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CampaignRecordSetCSP = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CampaignRecordSetCSP", ""
            ) as CampaignRecordSetCSP;
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
            const body: CampaignRecordSetCSP = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CampaignRecordSetCSP", ""
            ) as CampaignRecordSetCSP;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to qualifyByUsecaseCampaignBuilderBrandBrandIdUsecaseUsecaseGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async qualifyByUsecaseCampaignBuilderBrandBrandIdUsecaseUsecaseGet(response: ResponseContext): Promise<UsecaseMetadata > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: UsecaseMetadata = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UsecaseMetadata", ""
            ) as UsecaseMetadata;
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
            const body: UsecaseMetadata = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UsecaseMetadata", ""
            ) as UsecaseMetadata;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to submitCampaignCampaignBuilderPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async submitCampaignCampaignBuilderPost(response: ResponseContext): Promise<any | CampaignCSP > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: any | CampaignCSP = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any | CampaignCSP", ""
            ) as any | CampaignCSP;
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
            const body: any | CampaignCSP = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any | CampaignCSP", ""
            ) as any | CampaignCSP;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateMyCampaignCampaignCampaignIdPut
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updateMyCampaignCampaignCampaignIdPut(response: ResponseContext): Promise<Campaign > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Campaign = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Campaign", ""
            ) as Campaign;
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
            const body: Campaign = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Campaign", ""
            ) as Campaign;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
