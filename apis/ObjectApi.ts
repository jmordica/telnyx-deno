// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi.ts';
import {Configuration} from '../configuration.ts';
import {RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http.ts';
import {ObjectSerializer} from '../models/ObjectSerializer.ts';
import {ApiException} from './exception.ts';
import {canConsumeForm, isCodeInRange} from '../util.ts';
import {SecurityAuthentication} from '../auth/auth.ts';


import { DeleteObjectsRequestInner } from '../models/DeleteObjectsRequestInner.ts';
import { ListObjectsResponse } from '../models/ListObjectsResponse.ts';

/**
 * no description
 */
export class ObjectApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Delete an object from a given bucket.
     * DeleteObject
     * @param bucketName The bucket name.
     * @param objectName The object name.
     */
    public async deleteObject(bucketName: string, objectName: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'bucketName' is not null or undefined
        if (bucketName === null || bucketName === undefined) {
            throw new RequiredError("ObjectApi", "deleteObject", "bucketName");
        }


        // verify required parameter 'objectName' is not null or undefined
        if (objectName === null || objectName === undefined) {
            throw new RequiredError("ObjectApi", "deleteObject", "objectName");
        }


        // Path Params
        const localVarPath = '/{bucketName}/{objectName}'
            .replace('{' + 'bucketName' + '}', encodeURIComponent(String(bucketName)))
            .replace('{' + 'objectName' + '}', encodeURIComponent(String(objectName)));

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
     * Deletes one or multiple objects from a given bucket.
     * DeleteObjects
     * @param bucketName The bucket name.
     * @param _delete 
     * @param deleteObjectsRequestInner 
     */
    public async deleteObjects(bucketName: string, _delete: boolean, deleteObjectsRequestInner: Array<DeleteObjectsRequestInner>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'bucketName' is not null or undefined
        if (bucketName === null || bucketName === undefined) {
            throw new RequiredError("ObjectApi", "deleteObjects", "bucketName");
        }


        // verify required parameter '_delete' is not null or undefined
        if (_delete === null || _delete === undefined) {
            throw new RequiredError("ObjectApi", "deleteObjects", "_delete");
        }


        // verify required parameter 'deleteObjectsRequestInner' is not null or undefined
        if (deleteObjectsRequestInner === null || deleteObjectsRequestInner === undefined) {
            throw new RequiredError("ObjectApi", "deleteObjects", "deleteObjectsRequestInner");
        }


        // Path Params
        const localVarPath = '/{bucketName}'
            .replace('{' + 'bucketName' + '}', encodeURIComponent(String(bucketName)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (_delete !== undefined) {
            requestContext.setQueryParam("delete", ObjectSerializer.serialize(_delete, "boolean", ""));
        }


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "text/xml"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(deleteObjectsRequestInner, "Array<DeleteObjectsRequestInner>", ""),
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
     * Retrieves an object from a given bucket.
     * GetObject
     * @param bucketName The bucket name.
     * @param objectName The object name.
     * @param uploadId 
     */
    public async getObject(bucketName: string, objectName: string, uploadId?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'bucketName' is not null or undefined
        if (bucketName === null || bucketName === undefined) {
            throw new RequiredError("ObjectApi", "getObject", "bucketName");
        }


        // verify required parameter 'objectName' is not null or undefined
        if (objectName === null || objectName === undefined) {
            throw new RequiredError("ObjectApi", "getObject", "objectName");
        }



        // Path Params
        const localVarPath = '/{bucketName}/{objectName}'
            .replace('{' + 'bucketName' + '}', encodeURIComponent(String(bucketName)))
            .replace('{' + 'objectName' + '}', encodeURIComponent(String(objectName)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (uploadId !== undefined) {
            requestContext.setQueryParam("uploadId", ObjectSerializer.serialize(uploadId, "string", ""));
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
     * Retrieves metadata from an object without returning the object itself.
     * HeadObject
     * @param bucketName The bucket name.
     * @param objectName The object name.
     */
    public async headObject(bucketName: string, objectName: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'bucketName' is not null or undefined
        if (bucketName === null || bucketName === undefined) {
            throw new RequiredError("ObjectApi", "headObject", "bucketName");
        }


        // verify required parameter 'objectName' is not null or undefined
        if (objectName === null || objectName === undefined) {
            throw new RequiredError("ObjectApi", "headObject", "objectName");
        }


        // Path Params
        const localVarPath = '/{bucketName}/{objectName}'
            .replace('{' + 'bucketName' + '}', encodeURIComponent(String(bucketName)))
            .replace('{' + 'objectName' + '}', encodeURIComponent(String(objectName)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.HEAD);
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
     * List all objects contained in a given bucket.
     * ListObjectsV2
     * @param bucketName The name of the bucket.
     * @param listType 
     */
    public async listObjectsV2(bucketName: string, listType?: 2, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'bucketName' is not null or undefined
        if (bucketName === null || bucketName === undefined) {
            throw new RequiredError("ObjectApi", "listObjectsV2", "bucketName");
        }



        // Path Params
        const localVarPath = '/{bucketName}'
            .replace('{' + 'bucketName' + '}', encodeURIComponent(String(bucketName)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (listType !== undefined) {
            requestContext.setQueryParam("list-type", ObjectSerializer.serialize(listType, "2", ""));
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
     * Add an object to a bucket.
     * PutObject
     * @param bucketName The bucket name.
     * @param objectName The object name.
     * @param body 
     * @param contentType 
     * @param partNumber 
     * @param uploadId 
     */
    public async putObject(bucketName: string, objectName: string, body: HttpFile, contentType?: string, partNumber?: string, uploadId?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'bucketName' is not null or undefined
        if (bucketName === null || bucketName === undefined) {
            throw new RequiredError("ObjectApi", "putObject", "bucketName");
        }


        // verify required parameter 'objectName' is not null or undefined
        if (objectName === null || objectName === undefined) {
            throw new RequiredError("ObjectApi", "putObject", "objectName");
        }


        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new RequiredError("ObjectApi", "putObject", "body");
        }





        // Path Params
        const localVarPath = '/{bucketName}/{objectName}'
            .replace('{' + 'bucketName' + '}', encodeURIComponent(String(bucketName)))
            .replace('{' + 'objectName' + '}', encodeURIComponent(String(objectName)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (partNumber !== undefined) {
            requestContext.setQueryParam("partNumber", ObjectSerializer.serialize(partNumber, "string", ""));
        }

        // Query Params
        if (uploadId !== undefined) {
            requestContext.setQueryParam("uploadId", ObjectSerializer.serialize(uploadId, "string", ""));
        }

        // Header Params
        requestContext.setHeaderParam("Content-type", ObjectSerializer.serialize(contentType, "string", ""));


        // Body Params
        //const contentType = ObjectSerializer.getPreferredMediaType([]);
        requestContext.setHeaderParam("Content-Type", ObjectSerializer.getPreferredMediaType([]));
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(body, "HttpFile", ""),
            ObjectSerializer.getPreferredMediaType([])
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

export class ObjectApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteObject
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteObject(response: ResponseContext): Promise<void > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("204", response.httpStatusCode)) {
            return;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: void = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "void", ""
            ) as void;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteObjects
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteObjects(response: ResponseContext): Promise<any > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return body;
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
     * @params response Response returned by the server for a request to getObject
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getObject(response: ResponseContext): Promise<HttpFile > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: HttpFile = await response.getBodyAsFile() as any as HttpFile;
            return body;
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "ObjectNotFound", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: HttpFile = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "HttpFile", "binary"
            ) as HttpFile;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to headObject
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async headObject(response: ResponseContext): Promise<void > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            return;
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "ObjectNotFound", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: void = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "void", ""
            ) as void;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listObjectsV2
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listObjectsV2(response: ResponseContext): Promise<ListObjectsResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ListObjectsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListObjectsResponse", ""
            ) as ListObjectsResponse;
            return body;
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Bucket does not exist.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ListObjectsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListObjectsResponse", ""
            ) as ListObjectsResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to putObject
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async putObject(response: ResponseContext): Promise<void > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            return;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: void = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "void", ""
            ) as void;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
