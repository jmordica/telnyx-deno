// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi.ts';
import {Configuration} from '../configuration.ts';
import {RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http.ts';
import {ObjectSerializer} from '../models/ObjectSerializer.ts';
import {ApiException} from './exception.ts';
import {canConsumeForm, isCodeInRange} from '../util.ts';
import {SecurityAuthentication} from '../auth/auth.ts';


import { MdrDeleteUsageReportsResponse } from '../models/MdrDeleteUsageReportsResponse.ts';
import { MdrGetSyncUsageReportResponse } from '../models/MdrGetSyncUsageReportResponse.ts';
import { MdrGetUsageReportsByIdResponse } from '../models/MdrGetUsageReportsByIdResponse.ts';
import { MdrGetUsageReportsResponse } from '../models/MdrGetUsageReportsResponse.ts';
import { MdrPostUsageReportRequest } from '../models/MdrPostUsageReportRequest.ts';
import { MdrPostUsageReportsResponse } from '../models/MdrPostUsageReportsResponse.ts';

/**
 * no description
 */
export class MDRUsageReportsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Delete messaging usage report by id
     * @param id 
     */
    public async deleteUsageReport(id: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("MDRUsageReportsApi", "deleteUsageReport", "id");
        }


        // Path Params
        const localVarPath = '/reports/mdr_usage_reports/{id}'
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
     * Fetch a single messaging usage report by id
     * @param id 
     */
    public async getUsageReport(id: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("MDRUsageReportsApi", "getUsageReport", "id");
        }


        // Path Params
        const localVarPath = '/reports/mdr_usage_reports/{id}'
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
     * Generate and fetch messaging usage report synchronously. This endpoint will both generate and fetch the messaging report over a specified time period. No polling is necessary but the response may take up to a couple of minutes. 
     * @param aggregationType 
     * @param startDate 
     * @param endDate 
     * @param profiles 
     */
    public async getUsageReportSync1(aggregationType: 'NO_AGGREGATION' | 'PROFILE' | 'TAGS', startDate?: Date, endDate?: Date, profiles?: Array<string>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'aggregationType' is not null or undefined
        if (aggregationType === null || aggregationType === undefined) {
            throw new RequiredError("MDRUsageReportsApi", "getUsageReportSync1", "aggregationType");
        }





        // Path Params
        const localVarPath = '/reports/mdr_usage_reports/sync';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (startDate !== undefined) {
            requestContext.setQueryParam("start_date", ObjectSerializer.serialize(startDate, "Date", "date-time"));
        }

        // Query Params
        if (endDate !== undefined) {
            requestContext.setQueryParam("end_date", ObjectSerializer.serialize(endDate, "Date", "date-time"));
        }

        // Query Params
        if (aggregationType !== undefined) {
            requestContext.setQueryParam("aggregation_type", ObjectSerializer.serialize(aggregationType, "'NO_AGGREGATION' | 'PROFILE' | 'TAGS'", ""));
        }

        // Query Params
        if (profiles !== undefined) {
            requestContext.setQueryParam("profiles", ObjectSerializer.serialize(profiles, "Array<string>", ""));
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
     * Fetch all messaging usage reports. Usage reports are aggregated messaging data for specified time period and breakdown
     * @param pageNumber Page number
     * @param pageSize Size of the page
     */
    public async getUsageReports(pageNumber?: number, pageSize?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;



        // Path Params
        const localVarPath = '/reports/mdr_usage_reports';

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
     * Submit request for new new messaging usage report. This endpoint will pull and aggregate messaging data in specified time period. 
     * @param mdrPostUsageReportRequest Mdr usage report data
     */
    public async submitUsageReport(mdrPostUsageReportRequest: MdrPostUsageReportRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'mdrPostUsageReportRequest' is not null or undefined
        if (mdrPostUsageReportRequest === null || mdrPostUsageReportRequest === undefined) {
            throw new RequiredError("MDRUsageReportsApi", "submitUsageReport", "mdrPostUsageReportRequest");
        }


        // Path Params
        const localVarPath = '/reports/mdr_usage_reports';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(mdrPostUsageReportRequest, "MdrPostUsageReportRequest", ""),
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

export class MDRUsageReportsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteUsageReport
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteUsageReport(response: ResponseContext): Promise<MdrDeleteUsageReportsResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: MdrDeleteUsageReportsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MdrDeleteUsageReportsResponse", ""
            ) as MdrDeleteUsageReportsResponse;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: MdrDeleteUsageReportsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MdrDeleteUsageReportsResponse", ""
            ) as MdrDeleteUsageReportsResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getUsageReport
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getUsageReport(response: ResponseContext): Promise<MdrGetUsageReportsByIdResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: MdrGetUsageReportsByIdResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MdrGetUsageReportsByIdResponse", ""
            ) as MdrGetUsageReportsByIdResponse;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: MdrGetUsageReportsByIdResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MdrGetUsageReportsByIdResponse", ""
            ) as MdrGetUsageReportsByIdResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getUsageReportSync1
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getUsageReportSync1(response: ResponseContext): Promise<MdrGetSyncUsageReportResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: MdrGetSyncUsageReportResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MdrGetSyncUsageReportResponse", ""
            ) as MdrGetSyncUsageReportResponse;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: MdrGetSyncUsageReportResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MdrGetSyncUsageReportResponse", ""
            ) as MdrGetSyncUsageReportResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getUsageReports
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getUsageReports(response: ResponseContext): Promise<MdrGetUsageReportsResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: MdrGetUsageReportsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MdrGetUsageReportsResponse", ""
            ) as MdrGetUsageReportsResponse;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: MdrGetUsageReportsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MdrGetUsageReportsResponse", ""
            ) as MdrGetUsageReportsResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to submitUsageReport
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async submitUsageReport(response: ResponseContext): Promise<MdrPostUsageReportsResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: MdrPostUsageReportsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MdrPostUsageReportsResponse", ""
            ) as MdrPostUsageReportsResponse;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: MdrPostUsageReportsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MdrPostUsageReportsResponse", ""
            ) as MdrPostUsageReportsResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
