// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi.ts';
import {Configuration} from '../configuration.ts';
import {RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http.ts';
import {ObjectSerializer} from '../models/ObjectSerializer.ts';
import {ApiException} from './exception.ts';
import {canConsumeForm, isCodeInRange} from '../util.ts';
import {SecurityAuthentication} from '../auth/auth.ts';


import { MdrDeleteDetailReportResponse } from '../models/MdrDeleteDetailReportResponse.ts';
import { MdrGetDetailReportByIdResponse } from '../models/MdrGetDetailReportByIdResponse.ts';
import { MdrGetDetailReportResponse } from '../models/MdrGetDetailReportResponse.ts';
import { MdrGetDetailResponse } from '../models/MdrGetDetailResponse.ts';
import { MdrPostDetailReportRequest } from '../models/MdrPostDetailReportRequest.ts';
import { MdrPostDetailReportResponse } from '../models/MdrPostDetailReportResponse.ts';

/**
 * no description
 */
export class MDRDetailReportsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Delete generated messaging detail report by id
     * @param id 
     */
    public async deleteMdrRequest(id: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("MDRDetailReportsApi", "deleteMdrRequest", "id");
        }


        // Path Params
        const localVarPath = '/reports/batch_mdr_reports/{id}'
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
     * Fetch all previous requests for messaging detail reports. Messaging detail reports are reports for pulling all messaging records. 
     * @param pageNumber Page number
     * @param pageSize Size of the page
     */
    public async getCdrRequests(pageNumber?: number, pageSize?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;



        // Path Params
        const localVarPath = '/reports/batch_mdr_reports';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (pageNumber !== undefined) {
            requestContext.setQueryParam("page[number]", ObjectSerializer.serialize(pageNumber, "number", "int32"));
        }

        // Query Params
        if (pageSize !== undefined) {
            requestContext.setQueryParam("page[size]", ObjectSerializer.serialize(pageSize, "number", "int32"));
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
     * Fetch single messaging detail report by id.
     * @param id 
     */
    public async getMdrRequest(id: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("MDRDetailReportsApi", "getMdrRequest", "id");
        }


        // Path Params
        const localVarPath = '/reports/batch_mdr_reports/{id}'
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
     * Fetch all Mdr records 
     * @param startDate Pagination start date
     * @param endDate Pagination end date
     * @param id 
     * @param direction 
     * @param profile 
     * @param cld 
     * @param cli 
     * @param status 
     * @param messageType 
     */
    public async getPaginatedMdrs(startDate?: string, endDate?: string, id?: string, direction?: 'INBOUND' | 'OUTBOUND', profile?: string, cld?: string, cli?: string, status?: 'GW_TIMEOUT' | 'DELIVERED' | 'DLR_UNCONFIRMED' | 'DLR_TIMEOUT' | 'RECEIVED' | 'GW_REJECT' | 'FAILED', messageType?: 'SMS' | 'MMS', _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;










        // Path Params
        const localVarPath = '/reports/mdrs';

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
        if (direction !== undefined) {
            requestContext.setQueryParam("direction", ObjectSerializer.serialize(direction, "'INBOUND' | 'OUTBOUND'", ""));
        }

        // Query Params
        if (profile !== undefined) {
            requestContext.setQueryParam("profile", ObjectSerializer.serialize(profile, "string", ""));
        }

        // Query Params
        if (cld !== undefined) {
            requestContext.setQueryParam("cld", ObjectSerializer.serialize(cld, "string", ""));
        }

        // Query Params
        if (cli !== undefined) {
            requestContext.setQueryParam("cli", ObjectSerializer.serialize(cli, "string", ""));
        }

        // Query Params
        if (status !== undefined) {
            requestContext.setQueryParam("status", ObjectSerializer.serialize(status, "'GW_TIMEOUT' | 'DELIVERED' | 'DLR_UNCONFIRMED' | 'DLR_TIMEOUT' | 'RECEIVED' | 'GW_REJECT' | 'FAILED'", ""));
        }

        // Query Params
        if (messageType !== undefined) {
            requestContext.setQueryParam("message_type", ObjectSerializer.serialize(messageType, "'SMS' | 'MMS'", ""));
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
     * Submit a request for new messaging detail report. Messaging detail report pulls all raw messaging data according to defined filters.
     * @param mdrPostDetailReportRequest Mdr detail request data
     */
    public async submitMdrRequest(mdrPostDetailReportRequest: MdrPostDetailReportRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'mdrPostDetailReportRequest' is not null or undefined
        if (mdrPostDetailReportRequest === null || mdrPostDetailReportRequest === undefined) {
            throw new RequiredError("MDRDetailReportsApi", "submitMdrRequest", "mdrPostDetailReportRequest");
        }


        // Path Params
        const localVarPath = '/reports/batch_mdr_reports';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(mdrPostDetailReportRequest, "MdrPostDetailReportRequest", ""),
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

export class MDRDetailReportsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteMdrRequest
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteMdrRequest(response: ResponseContext): Promise<MdrDeleteDetailReportResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: MdrDeleteDetailReportResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MdrDeleteDetailReportResponse", ""
            ) as MdrDeleteDetailReportResponse;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: MdrDeleteDetailReportResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MdrDeleteDetailReportResponse", ""
            ) as MdrDeleteDetailReportResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getCdrRequests
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getCdrRequests(response: ResponseContext): Promise<MdrGetDetailReportResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: MdrGetDetailReportResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MdrGetDetailReportResponse", ""
            ) as MdrGetDetailReportResponse;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: MdrGetDetailReportResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MdrGetDetailReportResponse", ""
            ) as MdrGetDetailReportResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getMdrRequest
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getMdrRequest(response: ResponseContext): Promise<MdrGetDetailReportByIdResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: MdrGetDetailReportByIdResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MdrGetDetailReportByIdResponse", ""
            ) as MdrGetDetailReportByIdResponse;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: MdrGetDetailReportByIdResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MdrGetDetailReportByIdResponse", ""
            ) as MdrGetDetailReportByIdResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getPaginatedMdrs
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getPaginatedMdrs(response: ResponseContext): Promise<MdrGetDetailResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: MdrGetDetailResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MdrGetDetailResponse", ""
            ) as MdrGetDetailResponse;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: MdrGetDetailResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MdrGetDetailResponse", ""
            ) as MdrGetDetailResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to submitMdrRequest
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async submitMdrRequest(response: ResponseContext): Promise<MdrPostDetailReportResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: MdrPostDetailReportResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MdrPostDetailReportResponse", ""
            ) as MdrPostDetailReportResponse;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: MdrPostDetailReportResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MdrPostDetailReportResponse", ""
            ) as MdrPostDetailReportResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
