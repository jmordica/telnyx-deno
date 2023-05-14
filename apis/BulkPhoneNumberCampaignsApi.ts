// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi.ts';
import {Configuration} from '../configuration.ts';
import {RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http.ts';
import {ObjectSerializer} from '../models/ObjectSerializer.ts';
import {ApiException} from './exception.ts';
import {canConsumeForm, isCodeInRange} from '../util.ts';
import {SecurityAuthentication} from '../auth/auth.ts';


import { AssignProfileToCampaignRequest } from '../models/AssignProfileToCampaignRequest.ts';
import { AssignmentTaskStatusResponse } from '../models/AssignmentTaskStatusResponse.ts';
import { HTTPValidationError } from '../models/HTTPValidationError.ts';
import { PhoneNumberStatusResponsePaginated } from '../models/PhoneNumberStatusResponsePaginated.ts';
import { ResponseAssignMessagingProfileToCampaignPublicPhonenumberassignmentbyprofilePost } from '../models/ResponseAssignMessagingProfileToCampaignPublicPhonenumberassignmentbyprofilePost.ts';

/**
 * no description
 */
export class BulkPhoneNumberCampaignsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * This endpoint allows you to link all phone numbers associated with a Messaging Profile to a campaign. **Please note:** if you want to assign phone numbers to a campaign that you did not create with Telnyx 10DLC services, this endpoint allows that provided that you\'ve shared the campaign with Telnyx. In this case, only provide the parameter, `tcrCampaignId`, and not `campaignId`. In all other cases (where the campaign you\'re assigning was created with Telnyx 10DLC services), only provide `campaignId`, not `tcrCampaignId`.
     * Assign Messaging Profile To Campaign
     * @param assignProfileToCampaignRequest 
     */
    public async assignMessagingProfileToCampaignPhoneNumberAssignmentByProfilePost(assignProfileToCampaignRequest: AssignProfileToCampaignRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'assignProfileToCampaignRequest' is not null or undefined
        if (assignProfileToCampaignRequest === null || assignProfileToCampaignRequest === undefined) {
            throw new RequiredError("BulkPhoneNumberCampaignsApi", "assignMessagingProfileToCampaignPhoneNumberAssignmentByProfilePost", "assignProfileToCampaignRequest");
        }


        // Path Params
        const localVarPath = '/phoneNumberAssignmentByProfile';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(assignProfileToCampaignRequest, "AssignProfileToCampaignRequest", ""),
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
     * Check the status of the task associated with assigning all phone numbers on a messaging profile to a campaign by `taskId`.
     * Get Assignment Task Status
     * @param taskId 
     */
    public async getAssignmentTaskStatusPhoneNumberAssignmentByProfileTaskIdGet(taskId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'taskId' is not null or undefined
        if (taskId === null || taskId === undefined) {
            throw new RequiredError("BulkPhoneNumberCampaignsApi", "getAssignmentTaskStatusPhoneNumberAssignmentByProfileTaskIdGet", "taskId");
        }


        // Path Params
        const localVarPath = '/phoneNumberAssignmentByProfile/{taskId}'
            .replace('{' + 'taskId' + '}', encodeURIComponent(String(taskId)));

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
     * Check the status of the individual phone number/campaign assignments associated with the supplied `taskId`.
     * Get Phone Number Status
     * @param taskId 
     * @param recordsPerPage 
     * @param page 
     */
    public async getPhoneNumberStatusPhoneNumberAssignmentByProfileTaskIdPhoneNumbersGet(taskId: string, recordsPerPage?: any, page?: any, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'taskId' is not null or undefined
        if (taskId === null || taskId === undefined) {
            throw new RequiredError("BulkPhoneNumberCampaignsApi", "getPhoneNumberStatusPhoneNumberAssignmentByProfileTaskIdPhoneNumbersGet", "taskId");
        }




        // Path Params
        const localVarPath = '/phoneNumberAssignmentByProfile/{taskId}/phoneNumbers'
            .replace('{' + 'taskId' + '}', encodeURIComponent(String(taskId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (recordsPerPage !== undefined) {
            requestContext.setQueryParam("recordsPerPage", ObjectSerializer.serialize(recordsPerPage, "any", ""));
        }

        // Query Params
        if (page !== undefined) {
            requestContext.setQueryParam("page", ObjectSerializer.serialize(page, "any", ""));
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

export class BulkPhoneNumberCampaignsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to assignMessagingProfileToCampaignPhoneNumberAssignmentByProfilePost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async assignMessagingProfileToCampaignPhoneNumberAssignmentByProfilePost(response: ResponseContext): Promise<ResponseAssignMessagingProfileToCampaignPublicPhonenumberassignmentbyprofilePost > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("202", response.httpStatusCode)) {
            const body: ResponseAssignMessagingProfileToCampaignPublicPhonenumberassignmentbyprofilePost = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ResponseAssignMessagingProfileToCampaignPublicPhonenumberassignmentbyprofilePost", ""
            ) as ResponseAssignMessagingProfileToCampaignPublicPhonenumberassignmentbyprofilePost;
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
            const body: ResponseAssignMessagingProfileToCampaignPublicPhonenumberassignmentbyprofilePost = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ResponseAssignMessagingProfileToCampaignPublicPhonenumberassignmentbyprofilePost", ""
            ) as ResponseAssignMessagingProfileToCampaignPublicPhonenumberassignmentbyprofilePost;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getAssignmentTaskStatusPhoneNumberAssignmentByProfileTaskIdGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getAssignmentTaskStatusPhoneNumberAssignmentByProfileTaskIdGet(response: ResponseContext): Promise<AssignmentTaskStatusResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: AssignmentTaskStatusResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AssignmentTaskStatusResponse", ""
            ) as AssignmentTaskStatusResponse;
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
            const body: AssignmentTaskStatusResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AssignmentTaskStatusResponse", ""
            ) as AssignmentTaskStatusResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getPhoneNumberStatusPhoneNumberAssignmentByProfileTaskIdPhoneNumbersGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getPhoneNumberStatusPhoneNumberAssignmentByProfileTaskIdPhoneNumbersGet(response: ResponseContext): Promise<PhoneNumberStatusResponsePaginated > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: PhoneNumberStatusResponsePaginated = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PhoneNumberStatusResponsePaginated", ""
            ) as PhoneNumberStatusResponsePaginated;
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
            const body: PhoneNumberStatusResponsePaginated = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PhoneNumberStatusResponsePaginated", ""
            ) as PhoneNumberStatusResponsePaginated;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
