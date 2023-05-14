// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi.ts';
import {Configuration} from '../configuration.ts';
import {RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http.ts';
import {ObjectSerializer} from '../models/ObjectSerializer.ts';
import {ApiException} from './exception.ts';
import {canConsumeForm, isCodeInRange} from '../util.ts';
import {SecurityAuthentication} from '../auth/auth.ts';


import { DetailRecordsSearchResponse } from '../models/DetailRecordsSearchResponse.ts';

/**
 * no description
 */
export class DetailRecordsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Search for any detail record across the Telnyx Platform. Examples and additional information found [here](/docs/v2/debugging/detail-record-search).
     * Search detail records
     * @param filterRecordType Filter by the given record type.
     * @param filterDateRange Filter by the given user-friendly date range. You can specify one of the following enum values, or a dynamic one using this format: last_N_days.
     * @param filter Filter records on a given record attribute and value. &lt;br/&gt;Example: filter[status]&#x3D;delivered
     * @param pageNumber Page number
     * @param pageSize Page size
     * @param sort Specifies the sort order for results. &lt;br/&gt;Example: sort&#x3D;-created_at
     */
    public async detailRecordsSearch(filterRecordType: 'amd' | 'conference' | 'conference-participant' | 'media_storage' | 'messaging' | 'verify' | 'whatsapp' | 'whatsapp-conversation' | 'wireless', filterDateRange?: 'yesterday' | 'today' | 'tomorrow' | 'last_week' | 'this_week' | 'next_week' | 'last_month' | 'this_month' | 'next_month', filter?: { [key: string]: any; }, pageNumber?: number, pageSize?: number, sort?: Array<string>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'filterRecordType' is not null or undefined
        if (filterRecordType === null || filterRecordType === undefined) {
            throw new RequiredError("DetailRecordsApi", "detailRecordsSearch", "filterRecordType");
        }







        // Path Params
        const localVarPath = '/detail_records';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (filterRecordType !== undefined) {
            requestContext.setQueryParam("filter[record_type]", ObjectSerializer.serialize(filterRecordType, "'amd' | 'conference' | 'conference-participant' | 'media_storage' | 'messaging' | 'verify' | 'whatsapp' | 'whatsapp-conversation' | 'wireless'", ""));
        }

        // Query Params
        if (filterDateRange !== undefined) {
            requestContext.setQueryParam("filter[date_range]", ObjectSerializer.serialize(filterDateRange, "'yesterday' | 'today' | 'tomorrow' | 'last_week' | 'this_week' | 'next_week' | 'last_month' | 'this_month' | 'next_month'", ""));
        }

        // Query Params
        if (filter !== undefined) {
            requestContext.setQueryParam("filter", ObjectSerializer.serialize(filter, "{ [key: string]: any; }", ""));
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

export class DetailRecordsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to detailRecordsSearch
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async detailRecordsSearch(response: ResponseContext): Promise<DetailRecordsSearchResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: DetailRecordsSearchResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DetailRecordsSearchResponse", ""
            ) as DetailRecordsSearchResponse;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: DetailRecordsSearchResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DetailRecordsSearchResponse", ""
            ) as DetailRecordsSearchResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
