// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi.ts';
import {Configuration} from '../configuration.ts';
import {RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http.ts';
import {ObjectSerializer} from '../models/ObjectSerializer.ts';
import {ApiException} from './exception.ts';
import {canConsumeForm, isCodeInRange} from '../util.ts';
import {SecurityAuthentication} from '../auth/auth.ts';


import { AccessIPRangeListResponseSchema } from '../models/AccessIPRangeListResponseSchema.ts';
import { AccessIPRangePOST } from '../models/AccessIPRangePOST.ts';
import { AccessIPRangeResponseSchema } from '../models/AccessIPRangeResponseSchema.ts';
import { CloudflareSyncStatus } from '../models/CloudflareSyncStatus.ts';
import { Errors } from '../models/Errors.ts';

/**
 * no description
 */
export class IPRangesApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Create new Access IP Range
     * @param accessIPRangePOST 
     */
    public async accessIPRangeCreate(accessIPRangePOST: AccessIPRangePOST, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'accessIPRangePOST' is not null or undefined
        if (accessIPRangePOST === null || accessIPRangePOST === undefined) {
            throw new RequiredError("IPRangesApi", "accessIPRangeCreate", "accessIPRangePOST");
        }


        // Path Params
        const localVarPath = '/access_ip_ranges';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(accessIPRangePOST, "AccessIPRangePOST", ""),
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
     * List all Access IP Ranges
     * @param filterCidrBlock 
     * @param filterCidrBlockStartswith 
     * @param filterCidrBlockEndswith 
     * @param filterCidrBlockContains 
     * @param filterStatus 
     * @param filterCreatedAtGt 
     * @param filterCreatedAtLt 
     * @param pageNumber 
     * @param pageSize 
     */
    public async accessIPRangeList(filterCidrBlock?: string, filterCidrBlockStartswith?: string, filterCidrBlockEndswith?: string, filterCidrBlockContains?: string, filterStatus?: CloudflareSyncStatus, filterCreatedAtGt?: Date, filterCreatedAtLt?: Date, pageNumber?: number, pageSize?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;










        // Path Params
        const localVarPath = '/access_ip_ranges';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (filterCidrBlock !== undefined) {
            requestContext.setQueryParam("filter[cidr_block]", ObjectSerializer.serialize(filterCidrBlock, "string", ""));
        }

        // Query Params
        if (filterCidrBlockStartswith !== undefined) {
            requestContext.setQueryParam("filter[cidr_block][startswith]", ObjectSerializer.serialize(filterCidrBlockStartswith, "string", ""));
        }

        // Query Params
        if (filterCidrBlockEndswith !== undefined) {
            requestContext.setQueryParam("filter[cidr_block][endswith]", ObjectSerializer.serialize(filterCidrBlockEndswith, "string", ""));
        }

        // Query Params
        if (filterCidrBlockContains !== undefined) {
            requestContext.setQueryParam("filter[cidr_block][contains]", ObjectSerializer.serialize(filterCidrBlockContains, "string", ""));
        }

        // Query Params
        if (filterStatus !== undefined) {
            requestContext.setQueryParam("filter[status]", ObjectSerializer.serialize(filterStatus, "CloudflareSyncStatus", ""));
        }

        // Query Params
        if (filterCreatedAtGt !== undefined) {
            requestContext.setQueryParam("filter[created_at][gt]", ObjectSerializer.serialize(filterCreatedAtGt, "Date", "date-time"));
        }

        // Query Params
        if (filterCreatedAtLt !== undefined) {
            requestContext.setQueryParam("filter[created_at][lt]", ObjectSerializer.serialize(filterCreatedAtLt, "Date", "date-time"));
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
     * Delete access IP ranges
     * @param accessIpRangeId 
     */
    public async accessIpRangesAccessIpRangeIdDelete(accessIpRangeId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'accessIpRangeId' is not null or undefined
        if (accessIpRangeId === null || accessIpRangeId === undefined) {
            throw new RequiredError("IPRangesApi", "accessIpRangesAccessIpRangeIdDelete", "accessIpRangeId");
        }


        // Path Params
        const localVarPath = '/access_ip_ranges/{access_ip_range_id}'
            .replace('{' + 'access_ip_range_id' + '}', encodeURIComponent(String(accessIpRangeId)));

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

}

export class IPRangesApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to accessIPRangeCreate
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async accessIPRangeCreate(response: ResponseContext): Promise<AccessIPRangeResponseSchema > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: AccessIPRangeResponseSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AccessIPRangeResponseSchema", ""
            ) as AccessIPRangeResponseSchema;
            return body;
        }
        if (isCodeInRange("422", response.httpStatusCode)) {
            const body: Errors = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Errors", ""
            ) as Errors;
            throw new ApiException<Errors>(response.httpStatusCode, "Validation Error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AccessIPRangeResponseSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AccessIPRangeResponseSchema", ""
            ) as AccessIPRangeResponseSchema;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to accessIPRangeList
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async accessIPRangeList(response: ResponseContext): Promise<AccessIPRangeListResponseSchema > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: AccessIPRangeListResponseSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AccessIPRangeListResponseSchema", ""
            ) as AccessIPRangeListResponseSchema;
            return body;
        }
        if (isCodeInRange("422", response.httpStatusCode)) {
            const body: Errors = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Errors", ""
            ) as Errors;
            throw new ApiException<Errors>(response.httpStatusCode, "Validation Error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AccessIPRangeListResponseSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AccessIPRangeListResponseSchema", ""
            ) as AccessIPRangeListResponseSchema;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to accessIpRangesAccessIpRangeIdDelete
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async accessIpRangesAccessIpRangeIdDelete(response: ResponseContext): Promise<AccessIPRangeResponseSchema > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: AccessIPRangeResponseSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AccessIPRangeResponseSchema", ""
            ) as AccessIPRangeResponseSchema;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AccessIPRangeResponseSchema = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AccessIPRangeResponseSchema", ""
            ) as AccessIPRangeResponseSchema;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
