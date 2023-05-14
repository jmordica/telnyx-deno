// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi.ts';
import {Configuration} from '../configuration.ts';
import {RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http.ts';
import {ObjectSerializer} from '../models/ObjectSerializer.ts';
import {ApiException} from './exception.ts';
import {canConsumeForm, isCodeInRange} from '../util.ts';
import {SecurityAuthentication} from '../auth/auth.ts';


import { CampaignSharingStatus } from '../models/CampaignSharingStatus.ts';
import { HTTPValidationError } from '../models/HTTPValidationError.ts';
import { SharedCampaignRecordSet } from '../models/SharedCampaignRecordSet.ts';

/**
 * no description
 */
export class SharedCampaignsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Get all partner campaigns you have shared to Telnyx in a paginated fashion  This endpoint is currently limited to only returning shared campaigns that Telnyx has accepted. In other words, shared but pending campaigns are currently omitted from the response from this endpoint.
     * Get Partner Campaigns Shared By User
     * @param page The 1-indexed page number to get. The default value is &#x60;1&#x60;.
     * @param recordsPerPage The amount of records per page, limited to between 1 and 500 inclusive. The default value is &#x60;10&#x60;.
     */
    public async getPartnerCampaignsSharedByUserPartnerCampaignSharedByMeGet(page?: number, recordsPerPage?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;



        // Path Params
        const localVarPath = '/partnerCampaign/sharedByMe';

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
    public async getSharingStatusPartnerCampaignCampaignIdSharingGet(campaignId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'campaignId' is not null or undefined
        if (campaignId === null || campaignId === undefined) {
            throw new RequiredError("SharedCampaignsApi", "getSharingStatusPartnerCampaignCampaignIdSharingGet", "campaignId");
        }


        // Path Params
        const localVarPath = '/partnerCampaign/{campaignId}/sharing'
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

}

export class SharedCampaignsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getPartnerCampaignsSharedByUserPartnerCampaignSharedByMeGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getPartnerCampaignsSharedByUserPartnerCampaignSharedByMeGet(response: ResponseContext): Promise<SharedCampaignRecordSet > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SharedCampaignRecordSet = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SharedCampaignRecordSet", ""
            ) as SharedCampaignRecordSet;
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
            const body: SharedCampaignRecordSet = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SharedCampaignRecordSet", ""
            ) as SharedCampaignRecordSet;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getSharingStatusPartnerCampaignCampaignIdSharingGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getSharingStatusPartnerCampaignCampaignIdSharingGet(response: ResponseContext): Promise<{ [key: string]: CampaignSharingStatus; } > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: { [key: string]: CampaignSharingStatus; } = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "{ [key: string]: CampaignSharingStatus; }", ""
            ) as { [key: string]: CampaignSharingStatus; };
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
            const body: { [key: string]: CampaignSharingStatus; } = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "{ [key: string]: CampaignSharingStatus; }", ""
            ) as { [key: string]: CampaignSharingStatus; };
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
