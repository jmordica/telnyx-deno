// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi.ts';
import {Configuration} from '../configuration.ts';
import {RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http.ts';
import {ObjectSerializer} from '../models/ObjectSerializer.ts';
import {ApiException} from './exception.ts';
import {canConsumeForm, isCodeInRange} from '../util.ts';
import {SecurityAuthentication} from '../auth/auth.ts';


import { Errors } from '../models/Errors.ts';
import { GlobalIP } from '../models/GlobalIP.ts';
import { GlobalIpAllowedPortList200Response } from '../models/GlobalIpAllowedPortList200Response.ts';
import { GlobalIpAssignment } from '../models/GlobalIpAssignment.ts';
import { GlobalIpAssignmentCreate202Response } from '../models/GlobalIpAssignmentCreate202Response.ts';
import { GlobalIpAssignmentHealth200Response } from '../models/GlobalIpAssignmentHealth200Response.ts';
import { GlobalIpAssignmentList200Response } from '../models/GlobalIpAssignmentList200Response.ts';
import { GlobalIpAssignmentUpdate } from '../models/GlobalIpAssignmentUpdate.ts';
import { GlobalIpAssignmentUsage200Response } from '../models/GlobalIpAssignmentUsage200Response.ts';
import { GlobalIpCreate202Response } from '../models/GlobalIpCreate202Response.ts';
import { GlobalIpLatency200Response } from '../models/GlobalIpLatency200Response.ts';
import { GlobalIpList200Response } from '../models/GlobalIpList200Response.ts';
import { GlobalIpProtocolList200Response } from '../models/GlobalIpProtocolList200Response.ts';
import { GlobalIpUsage200Response } from '../models/GlobalIpUsage200Response.ts';

/**
 * no description
 */
export class GlobalIPsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * List all Global IP Allowed Ports
     * List all Global IP Allowed Ports
     */
    public async globalIpAllowedPortList(_options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // Path Params
        const localVarPath = '/global_ip_allowed_ports';

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
     * Create a Global IP assignment.
     * Create a Global IP assignment
     * @param globalIpAssignment 
     */
    public async globalIpAssignmentCreate(globalIpAssignment: GlobalIpAssignment, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'globalIpAssignment' is not null or undefined
        if (globalIpAssignment === null || globalIpAssignment === undefined) {
            throw new RequiredError("GlobalIPsApi", "globalIpAssignmentCreate", "globalIpAssignment");
        }


        // Path Params
        const localVarPath = '/global_ip_assignments';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(globalIpAssignment, "GlobalIpAssignment", ""),
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
     * Delete a Global IP assignment.
     * Delete a Global IP assignment
     * @param id Identifies the resource.
     */
    public async globalIpAssignmentDelete(id: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("GlobalIPsApi", "globalIpAssignmentDelete", "id");
        }


        // Path Params
        const localVarPath = '/global_ip_assignments/{id}'
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
     * Retrieve a Global IP assignment.
     * Retrieve a Global IP
     * @param id Identifies the resource.
     */
    public async globalIpAssignmentGet(id: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("GlobalIPsApi", "globalIpAssignmentGet", "id");
        }


        // Path Params
        const localVarPath = '/global_ip_assignments/{id}'
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
     * @param filterGlobalIpIdIn Filter by Global IP ID(s) separated by commas
     * @param filterGlobalIpAssignmentIdIn Filter by Global IP Assignment ID(s) separated by commas
     * @param filterTimestampGt Filter by timestamp greater than
     * @param filterTimestampLt Filter by timestamp less than
     */
    public async globalIpAssignmentHealth(filterGlobalIpIdIn?: string, filterGlobalIpAssignmentIdIn?: string, filterTimestampGt?: Date, filterTimestampLt?: Date, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;





        // Path Params
        const localVarPath = '/global_ip_assignment_health';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (filterGlobalIpIdIn !== undefined) {
            requestContext.setQueryParam("filter[global_ip_id][in]", ObjectSerializer.serialize(filterGlobalIpIdIn, "string", ""));
        }

        // Query Params
        if (filterGlobalIpAssignmentIdIn !== undefined) {
            requestContext.setQueryParam("filter[global_ip_assignment_id][in]", ObjectSerializer.serialize(filterGlobalIpAssignmentIdIn, "string", ""));
        }

        // Query Params
        if (filterTimestampGt !== undefined) {
            requestContext.setQueryParam("filter[timestamp][gt]", ObjectSerializer.serialize(filterTimestampGt, "Date", "date-time"));
        }

        // Query Params
        if (filterTimestampLt !== undefined) {
            requestContext.setQueryParam("filter[timestamp][lt]", ObjectSerializer.serialize(filterTimestampLt, "Date", "date-time"));
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
     * List all Global IP assignments.
     * List all Global IP assignments
     * @param pageNumber The page number to load
     * @param pageSize The size of the page
     */
    public async globalIpAssignmentList(pageNumber?: number, pageSize?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;



        // Path Params
        const localVarPath = '/global_ip_assignments';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

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
     * Update a Global IP assignment.
     * Update a Global IP assignment
     * @param id Identifies the resource.
     * @param globalIpAssignmentUpdate 
     */
    public async globalIpAssignmentUpdate(id: string, globalIpAssignmentUpdate: GlobalIpAssignmentUpdate, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("GlobalIPsApi", "globalIpAssignmentUpdate", "id");
        }


        // verify required parameter 'globalIpAssignmentUpdate' is not null or undefined
        if (globalIpAssignmentUpdate === null || globalIpAssignmentUpdate === undefined) {
            throw new RequiredError("GlobalIPsApi", "globalIpAssignmentUpdate", "globalIpAssignmentUpdate");
        }


        // Path Params
        const localVarPath = '/global_ip_assignments/{id}'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PATCH);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(globalIpAssignmentUpdate, "GlobalIpAssignmentUpdate", ""),
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
     * @param filterGlobalIpAssignmentIdIn Filter by Global IP Assignment ID(s) separated by commas
     * @param filterGlobalIpIdIn Filter by Global IP ID(s), separated by commas
     * @param filterTimestampGt Filter by timestamp greater than
     * @param filterTimestampLt Filter by timestamp less than
     */
    public async globalIpAssignmentUsage(filterGlobalIpAssignmentIdIn?: string, filterGlobalIpIdIn?: string, filterTimestampGt?: Date, filterTimestampLt?: Date, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;





        // Path Params
        const localVarPath = '/global_ip_assignments_usage';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (filterGlobalIpAssignmentIdIn !== undefined) {
            requestContext.setQueryParam("filter[global_ip_assignment_id][in]", ObjectSerializer.serialize(filterGlobalIpAssignmentIdIn, "string", ""));
        }

        // Query Params
        if (filterGlobalIpIdIn !== undefined) {
            requestContext.setQueryParam("filter[global_ip_id][in]", ObjectSerializer.serialize(filterGlobalIpIdIn, "string", ""));
        }

        // Query Params
        if (filterTimestampGt !== undefined) {
            requestContext.setQueryParam("filter[timestamp][gt]", ObjectSerializer.serialize(filterTimestampGt, "Date", "date-time"));
        }

        // Query Params
        if (filterTimestampLt !== undefined) {
            requestContext.setQueryParam("filter[timestamp][lt]", ObjectSerializer.serialize(filterTimestampLt, "Date", "date-time"));
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
     * Create a Global IP.
     * Create a Global IP
     * @param globalIP 
     */
    public async globalIpCreate(globalIP: GlobalIP, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'globalIP' is not null or undefined
        if (globalIP === null || globalIP === undefined) {
            throw new RequiredError("GlobalIPsApi", "globalIpCreate", "globalIP");
        }


        // Path Params
        const localVarPath = '/global_ips';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(globalIP, "GlobalIP", ""),
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
     * Delete a Global IP.
     * Delete a Global IP
     * @param id Identifies the resource.
     */
    public async globalIpDelete(id: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("GlobalIPsApi", "globalIpDelete", "id");
        }


        // Path Params
        const localVarPath = '/global_ips/{id}'
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
     * Retrieve a Global IP.
     * Retrieve a Global IP
     * @param id Identifies the resource.
     */
    public async globalIpGet(id: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("GlobalIPsApi", "globalIpGet", "id");
        }


        // Path Params
        const localVarPath = '/global_ips/{id}'
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
     * @param filterGlobalIpIdIn Filter by Global IP ID(s) separated by commas
     * @param filterTimestampGt Filter by timestamp greater than
     * @param filterTimestampLt Filter by timestamp less than
     */
    public async globalIpLatency(filterGlobalIpIdIn?: string, filterTimestampGt?: Date, filterTimestampLt?: Date, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;




        // Path Params
        const localVarPath = '/global_ip_latency';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (filterGlobalIpIdIn !== undefined) {
            requestContext.setQueryParam("filter[global_ip_id][in]", ObjectSerializer.serialize(filterGlobalIpIdIn, "string", ""));
        }

        // Query Params
        if (filterTimestampGt !== undefined) {
            requestContext.setQueryParam("filter[timestamp][gt]", ObjectSerializer.serialize(filterTimestampGt, "Date", "date-time"));
        }

        // Query Params
        if (filterTimestampLt !== undefined) {
            requestContext.setQueryParam("filter[timestamp][lt]", ObjectSerializer.serialize(filterTimestampLt, "Date", "date-time"));
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
     * List all Global IPs.
     * List all Global IPs
     * @param pageNumber The page number to load
     * @param pageSize The size of the page
     */
    public async globalIpList(pageNumber?: number, pageSize?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;



        // Path Params
        const localVarPath = '/global_ips';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

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
     * List all Global IP Protocols
     * List all Global IP Protocols
     */
    public async globalIpProtocolList(_options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // Path Params
        const localVarPath = '/global_ip_protocols';

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
     * @param filterGlobalIpIdIn Filter by Global IP ID(s) separated by commas
     * @param filterTimestampGt Filter by timestamp greater than
     * @param filterTimestampLt Filter by timestamp less than
     */
    public async globalIpUsage(filterGlobalIpIdIn?: string, filterTimestampGt?: Date, filterTimestampLt?: Date, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;




        // Path Params
        const localVarPath = '/global_ip_usage';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (filterGlobalIpIdIn !== undefined) {
            requestContext.setQueryParam("filter[global_ip_id][in]", ObjectSerializer.serialize(filterGlobalIpIdIn, "string", ""));
        }

        // Query Params
        if (filterTimestampGt !== undefined) {
            requestContext.setQueryParam("filter[timestamp][gt]", ObjectSerializer.serialize(filterTimestampGt, "Date", "date-time"));
        }

        // Query Params
        if (filterTimestampLt !== undefined) {
            requestContext.setQueryParam("filter[timestamp][lt]", ObjectSerializer.serialize(filterTimestampLt, "Date", "date-time"));
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

export class GlobalIPsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to globalIpAllowedPortList
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async globalIpAllowedPortList(response: ResponseContext): Promise<GlobalIpAllowedPortList200Response > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GlobalIpAllowedPortList200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GlobalIpAllowedPortList200Response", ""
            ) as GlobalIpAllowedPortList200Response;
            return body;
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: Errors = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Errors", ""
            ) as Errors;
            throw new ApiException<Errors>(response.httpStatusCode, "Unexpected error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: GlobalIpAllowedPortList200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GlobalIpAllowedPortList200Response", ""
            ) as GlobalIpAllowedPortList200Response;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to globalIpAssignmentCreate
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async globalIpAssignmentCreate(response: ResponseContext): Promise<GlobalIpAssignmentCreate202Response > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("202", response.httpStatusCode)) {
            const body: GlobalIpAssignmentCreate202Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GlobalIpAssignmentCreate202Response", ""
            ) as GlobalIpAssignmentCreate202Response;
            return body;
        }
        if (isCodeInRange("422", response.httpStatusCode)) {
            const body: Errors = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Errors", ""
            ) as Errors;
            throw new ApiException<Errors>(response.httpStatusCode, "Unprocessable entity. Check the \&#39;detail\&#39; field in response for details.", body, response.headers);
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: Errors = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Errors", ""
            ) as Errors;
            throw new ApiException<Errors>(response.httpStatusCode, "Unexpected error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: GlobalIpAssignmentCreate202Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GlobalIpAssignmentCreate202Response", ""
            ) as GlobalIpAssignmentCreate202Response;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to globalIpAssignmentDelete
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async globalIpAssignmentDelete(response: ResponseContext): Promise<GlobalIpAssignmentCreate202Response > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GlobalIpAssignmentCreate202Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GlobalIpAssignmentCreate202Response", ""
            ) as GlobalIpAssignmentCreate202Response;
            return body;
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: Errors = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Errors", ""
            ) as Errors;
            throw new ApiException<Errors>(response.httpStatusCode, "Unexpected error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: GlobalIpAssignmentCreate202Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GlobalIpAssignmentCreate202Response", ""
            ) as GlobalIpAssignmentCreate202Response;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to globalIpAssignmentGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async globalIpAssignmentGet(response: ResponseContext): Promise<GlobalIpAssignmentCreate202Response > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GlobalIpAssignmentCreate202Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GlobalIpAssignmentCreate202Response", ""
            ) as GlobalIpAssignmentCreate202Response;
            return body;
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: Errors = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Errors", ""
            ) as Errors;
            throw new ApiException<Errors>(response.httpStatusCode, "Unexpected error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: GlobalIpAssignmentCreate202Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GlobalIpAssignmentCreate202Response", ""
            ) as GlobalIpAssignmentCreate202Response;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to globalIpAssignmentHealth
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async globalIpAssignmentHealth(response: ResponseContext): Promise<GlobalIpAssignmentHealth200Response > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GlobalIpAssignmentHealth200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GlobalIpAssignmentHealth200Response", ""
            ) as GlobalIpAssignmentHealth200Response;
            return body;
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: Errors = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Errors", ""
            ) as Errors;
            throw new ApiException<Errors>(response.httpStatusCode, "Unexpected error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: GlobalIpAssignmentHealth200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GlobalIpAssignmentHealth200Response", ""
            ) as GlobalIpAssignmentHealth200Response;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to globalIpAssignmentList
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async globalIpAssignmentList(response: ResponseContext): Promise<GlobalIpAssignmentList200Response > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GlobalIpAssignmentList200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GlobalIpAssignmentList200Response", ""
            ) as GlobalIpAssignmentList200Response;
            return body;
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: Errors = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Errors", ""
            ) as Errors;
            throw new ApiException<Errors>(response.httpStatusCode, "Unexpected error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: GlobalIpAssignmentList200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GlobalIpAssignmentList200Response", ""
            ) as GlobalIpAssignmentList200Response;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to globalIpAssignmentUpdate
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async globalIpAssignmentUpdate(response: ResponseContext): Promise<GlobalIpAssignmentCreate202Response > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GlobalIpAssignmentCreate202Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GlobalIpAssignmentCreate202Response", ""
            ) as GlobalIpAssignmentCreate202Response;
            return body;
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: Errors = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Errors", ""
            ) as Errors;
            throw new ApiException<Errors>(response.httpStatusCode, "Unexpected error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: GlobalIpAssignmentCreate202Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GlobalIpAssignmentCreate202Response", ""
            ) as GlobalIpAssignmentCreate202Response;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to globalIpAssignmentUsage
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async globalIpAssignmentUsage(response: ResponseContext): Promise<GlobalIpAssignmentUsage200Response > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GlobalIpAssignmentUsage200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GlobalIpAssignmentUsage200Response", ""
            ) as GlobalIpAssignmentUsage200Response;
            return body;
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: Errors = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Errors", ""
            ) as Errors;
            throw new ApiException<Errors>(response.httpStatusCode, "Unexpected error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: GlobalIpAssignmentUsage200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GlobalIpAssignmentUsage200Response", ""
            ) as GlobalIpAssignmentUsage200Response;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to globalIpCreate
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async globalIpCreate(response: ResponseContext): Promise<GlobalIpCreate202Response > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("202", response.httpStatusCode)) {
            const body: GlobalIpCreate202Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GlobalIpCreate202Response", ""
            ) as GlobalIpCreate202Response;
            return body;
        }
        if (isCodeInRange("422", response.httpStatusCode)) {
            const body: Errors = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Errors", ""
            ) as Errors;
            throw new ApiException<Errors>(response.httpStatusCode, "Unprocessable entity. Check the \&#39;detail\&#39; field in response for details.", body, response.headers);
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: Errors = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Errors", ""
            ) as Errors;
            throw new ApiException<Errors>(response.httpStatusCode, "Unexpected error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: GlobalIpCreate202Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GlobalIpCreate202Response", ""
            ) as GlobalIpCreate202Response;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to globalIpDelete
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async globalIpDelete(response: ResponseContext): Promise<GlobalIpCreate202Response > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GlobalIpCreate202Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GlobalIpCreate202Response", ""
            ) as GlobalIpCreate202Response;
            return body;
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: Errors = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Errors", ""
            ) as Errors;
            throw new ApiException<Errors>(response.httpStatusCode, "Unexpected error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: GlobalIpCreate202Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GlobalIpCreate202Response", ""
            ) as GlobalIpCreate202Response;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to globalIpGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async globalIpGet(response: ResponseContext): Promise<GlobalIpCreate202Response > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GlobalIpCreate202Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GlobalIpCreate202Response", ""
            ) as GlobalIpCreate202Response;
            return body;
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: Errors = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Errors", ""
            ) as Errors;
            throw new ApiException<Errors>(response.httpStatusCode, "Unexpected error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: GlobalIpCreate202Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GlobalIpCreate202Response", ""
            ) as GlobalIpCreate202Response;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to globalIpLatency
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async globalIpLatency(response: ResponseContext): Promise<GlobalIpLatency200Response > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GlobalIpLatency200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GlobalIpLatency200Response", ""
            ) as GlobalIpLatency200Response;
            return body;
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: Errors = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Errors", ""
            ) as Errors;
            throw new ApiException<Errors>(response.httpStatusCode, "Unexpected error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: GlobalIpLatency200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GlobalIpLatency200Response", ""
            ) as GlobalIpLatency200Response;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to globalIpList
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async globalIpList(response: ResponseContext): Promise<GlobalIpList200Response > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GlobalIpList200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GlobalIpList200Response", ""
            ) as GlobalIpList200Response;
            return body;
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: Errors = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Errors", ""
            ) as Errors;
            throw new ApiException<Errors>(response.httpStatusCode, "Unexpected error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: GlobalIpList200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GlobalIpList200Response", ""
            ) as GlobalIpList200Response;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to globalIpProtocolList
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async globalIpProtocolList(response: ResponseContext): Promise<GlobalIpProtocolList200Response > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GlobalIpProtocolList200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GlobalIpProtocolList200Response", ""
            ) as GlobalIpProtocolList200Response;
            return body;
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: Errors = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Errors", ""
            ) as Errors;
            throw new ApiException<Errors>(response.httpStatusCode, "Unexpected error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: GlobalIpProtocolList200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GlobalIpProtocolList200Response", ""
            ) as GlobalIpProtocolList200Response;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to globalIpUsage
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async globalIpUsage(response: ResponseContext): Promise<GlobalIpUsage200Response > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GlobalIpUsage200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GlobalIpUsage200Response", ""
            ) as GlobalIpUsage200Response;
            return body;
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: Errors = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Errors", ""
            ) as Errors;
            throw new ApiException<Errors>(response.httpStatusCode, "Unexpected error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: GlobalIpUsage200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GlobalIpUsage200Response", ""
            ) as GlobalIpUsage200Response;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
