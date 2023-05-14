// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi.ts';
import {Configuration} from '../configuration.ts';
import {RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http.ts';
import {ObjectSerializer} from '../models/ObjectSerializer.ts';
import {ApiException} from './exception.ts';
import {canConsumeForm, isCodeInRange} from '../util.ts';
import {SecurityAuthentication} from '../auth/auth.ts';


import { CdrGetSyncUsageReportResponse } from '../models/CdrGetSyncUsageReportResponse.ts';

/**
 * no description
 */
export class CDRUsageReportsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Generate and fetch voice usage report synchronously. This endpoint will both generate and fetch the voice report over a specified time period. No polling is necessary but the response may take up to a couple of minutes. 
     * @param aggregationType 
     * @param productBreakdown 
     * @param startDate 
     * @param endDate 
     * @param connections 
     */
    public async getUsageReportSync(aggregationType: 'NO_AGGREGATION' | 'CONNECTION' | 'TAG' | 'BILLING_GROUP', productBreakdown: 'NO_BREAKDOWN' | 'DID_VS_TOLL_FREE' | 'COUNTRY' | 'DID_VS_TOLL_FREE_PER_COUNTRY', startDate?: Date, endDate?: Date, connections?: Array<number>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'aggregationType' is not null or undefined
        if (aggregationType === null || aggregationType === undefined) {
            throw new RequiredError("CDRUsageReportsApi", "getUsageReportSync", "aggregationType");
        }


        // verify required parameter 'productBreakdown' is not null or undefined
        if (productBreakdown === null || productBreakdown === undefined) {
            throw new RequiredError("CDRUsageReportsApi", "getUsageReportSync", "productBreakdown");
        }





        // Path Params
        const localVarPath = '/reports/cdr_usage_reports/sync';

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
            requestContext.setQueryParam("aggregation_type", ObjectSerializer.serialize(aggregationType, "'NO_AGGREGATION' | 'CONNECTION' | 'TAG' | 'BILLING_GROUP'", ""));
        }

        // Query Params
        if (productBreakdown !== undefined) {
            requestContext.setQueryParam("product_breakdown", ObjectSerializer.serialize(productBreakdown, "'NO_BREAKDOWN' | 'DID_VS_TOLL_FREE' | 'COUNTRY' | 'DID_VS_TOLL_FREE_PER_COUNTRY'", ""));
        }

        // Query Params
        if (connections !== undefined) {
            requestContext.setQueryParam("connections", ObjectSerializer.serialize(connections, "Array<number>", ""));
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

export class CDRUsageReportsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getUsageReportSync
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getUsageReportSync(response: ResponseContext): Promise<CdrGetSyncUsageReportResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CdrGetSyncUsageReportResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CdrGetSyncUsageReportResponse", ""
            ) as CdrGetSyncUsageReportResponse;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: CdrGetSyncUsageReportResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CdrGetSyncUsageReportResponse", ""
            ) as CdrGetSyncUsageReportResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
