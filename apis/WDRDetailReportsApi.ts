// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi.ts';
import {Configuration} from '../configuration.ts';
import {RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http.ts';
import {ObjectSerializer} from '../models/ObjectSerializer.ts';
import {ApiException} from './exception.ts';
import {canConsumeForm, isCodeInRange} from '../util.ts';
import {SecurityAuthentication} from '../auth/auth.ts';


import { ExternalWdrGetDetailResponse } from '../models/ExternalWdrGetDetailResponse.ts';

/**
 * no description
 */
export class WDRDetailReportsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Fetch all Wdr records 
     * @param startDate Start date
     * @param endDate End date
     * @param id 
     * @param mcc 
     * @param mnc 
     * @param imsi 
     * @param simGroupName 
     * @param simGroupId 
     * @param simCardId 
     * @param phoneNumber 
     * @param pageNumber Page number
     * @param pageSize Size of the page
     * @param sort 
     */
    public async getPaginatedWdrs(startDate?: string, endDate?: string, id?: string, mcc?: string, mnc?: string, imsi?: string, simGroupName?: string, simGroupId?: string, simCardId?: string, phoneNumber?: string, pageNumber?: number, pageSize?: number, sort?: Array<string>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;














        // Path Params
        const localVarPath = '/reports/wdrs';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (startDate !== undefined) {
            requestContext.setQueryParam("start_date", ObjectSerializer.serialize(startDate, "string", ""));
        }

        // Query Params
        if (endDate !== undefined) {
            requestContext.setQueryParam("end_date", ObjectSerializer.serialize(endDate, "string", ""));
        }

        // Query Params
        if (id !== undefined) {
            requestContext.setQueryParam("id", ObjectSerializer.serialize(id, "string", ""));
        }

        // Query Params
        if (mcc !== undefined) {
            requestContext.setQueryParam("mcc", ObjectSerializer.serialize(mcc, "string", ""));
        }

        // Query Params
        if (mnc !== undefined) {
            requestContext.setQueryParam("mnc", ObjectSerializer.serialize(mnc, "string", ""));
        }

        // Query Params
        if (imsi !== undefined) {
            requestContext.setQueryParam("imsi", ObjectSerializer.serialize(imsi, "string", ""));
        }

        // Query Params
        if (simGroupName !== undefined) {
            requestContext.setQueryParam("sim_group_name", ObjectSerializer.serialize(simGroupName, "string", ""));
        }

        // Query Params
        if (simGroupId !== undefined) {
            requestContext.setQueryParam("sim_group_id", ObjectSerializer.serialize(simGroupId, "string", ""));
        }

        // Query Params
        if (simCardId !== undefined) {
            requestContext.setQueryParam("sim_card_id", ObjectSerializer.serialize(simCardId, "string", ""));
        }

        // Query Params
        if (phoneNumber !== undefined) {
            requestContext.setQueryParam("phone_number", ObjectSerializer.serialize(phoneNumber, "string", ""));
        }

        // Query Params
        if (pageNumber !== undefined) {
            requestContext.setQueryParam("page[number]", ObjectSerializer.serialize(pageNumber, "number", "int32"));
        }

        // Query Params
        if (pageSize !== undefined) {
            requestContext.setQueryParam("page[size]", ObjectSerializer.serialize(pageSize, "number", "int32"));
        }

        // Query Params
        if (sort !== undefined) {
            requestContext.setQueryParam("sort", ObjectSerializer.serialize(sort, "Array<string>", ""));
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

export class WDRDetailReportsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getPaginatedWdrs
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getPaginatedWdrs(response: ResponseContext): Promise<ExternalWdrGetDetailResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ExternalWdrGetDetailResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ExternalWdrGetDetailResponse", ""
            ) as ExternalWdrGetDetailResponse;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ExternalWdrGetDetailResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ExternalWdrGetDetailResponse", ""
            ) as ExternalWdrGetDetailResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
