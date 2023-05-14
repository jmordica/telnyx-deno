// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi.ts';
import {Configuration} from '../configuration.ts';
import {RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http.ts';
import {ObjectSerializer} from '../models/ObjectSerializer.ts';
import {ApiException} from './exception.ts';
import {canConsumeForm, isCodeInRange} from '../util.ts';
import {SecurityAuthentication} from '../auth/auth.ts';


import { Comment } from '../models/Comment.ts';
import { CreateComment200Response } from '../models/CreateComment200Response.ts';
import { CreateNumberOrderRequest } from '../models/CreateNumberOrderRequest.ts';
import { Errors } from '../models/Errors.ts';
import { ListComments200Response } from '../models/ListComments200Response.ts';
import { ListNumberOrderPhoneNumbersResponse } from '../models/ListNumberOrderPhoneNumbersResponse.ts';
import { ListNumberOrdersResponse } from '../models/ListNumberOrdersResponse.ts';
import { ListRegulartoryRequirements200Response } from '../models/ListRegulartoryRequirements200Response.ts';
import { ListSubNumberOrdersResponse } from '../models/ListSubNumberOrdersResponse.ts';
import { MarkCommentRead200Response } from '../models/MarkCommentRead200Response.ts';
import { NumberOrderPhoneNumberResponse } from '../models/NumberOrderPhoneNumberResponse.ts';
import { NumberOrderResponse } from '../models/NumberOrderResponse.ts';
import { SubNumberOrderResponse } from '../models/SubNumberOrderResponse.ts';
import { UpdateNumberOrderPhoneNumberRequest } from '../models/UpdateNumberOrderPhoneNumberRequest.ts';
import { UpdateNumberOrderRequest } from '../models/UpdateNumberOrderRequest.ts';
import { UpdateSubNumberOrderRequest } from '../models/UpdateSubNumberOrderRequest.ts';

/**
 * no description
 */
export class NumberOrdersApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Create a comment
     * @param comment 
     */
    public async createComment(comment: Comment, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'comment' is not null or undefined
        if (comment === null || comment === undefined) {
            throw new RequiredError("NumberOrdersApi", "createComment", "comment");
        }


        // Path Params
        const localVarPath = '/comments';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(comment, "Comment", ""),
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
     * Creates a phone number order.
     * Create a number order
     * @param createNumberOrderRequest 
     */
    public async createNumberOrder(createNumberOrderRequest: CreateNumberOrderRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'createNumberOrderRequest' is not null or undefined
        if (createNumberOrderRequest === null || createNumberOrderRequest === undefined) {
            throw new RequiredError("NumberOrdersApi", "createNumberOrder", "createNumberOrderRequest");
        }


        // Path Params
        const localVarPath = '/number_orders';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(createNumberOrderRequest, "CreateNumberOrderRequest", ""),
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
     * Retrieve all comments
     * @param filterCommentRecordType Record type that the comment relates to i.e number_order, sub_number_order or number_order_phone_number
     * @param filterCommentRecordId ID of the record the comments relate to
     */
    public async listComments(filterCommentRecordType: string, filterCommentRecordId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'filterCommentRecordType' is not null or undefined
        if (filterCommentRecordType === null || filterCommentRecordType === undefined) {
            throw new RequiredError("NumberOrdersApi", "listComments", "filterCommentRecordType");
        }


        // verify required parameter 'filterCommentRecordId' is not null or undefined
        if (filterCommentRecordId === null || filterCommentRecordId === undefined) {
            throw new RequiredError("NumberOrdersApi", "listComments", "filterCommentRecordId");
        }


        // Path Params
        const localVarPath = '/comments';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (filterCommentRecordType !== undefined) {
            requestContext.setQueryParam("filter[comment_record_type]", ObjectSerializer.serialize(filterCommentRecordType, "string", ""));
        }

        // Query Params
        if (filterCommentRecordId !== undefined) {
            requestContext.setQueryParam("filter[comment_record_id]", ObjectSerializer.serialize(filterCommentRecordId, "string", ""));
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
     * Get a paginated list of number orders.
     * List number orders
     * @param filterStatus Filter number orders by status.
     * @param filterCreatedAtGt Filter number orders later than this value.
     * @param filterCreatedAtLt Filter number orders earlier than this value.
     * @param filterPhoneNumbersCount Filter number order with this amount of numbers
     * @param filterCustomerReference Filter number orders via the customer reference set.
     * @param filterRequirementsMet Filter number orders by requirements met.
     * @param pageNumber The page number to load
     * @param pageSize The size of the page
     */
    public async listNumberOrders(filterStatus?: string, filterCreatedAtGt?: string, filterCreatedAtLt?: string, filterPhoneNumbersCount?: string, filterCustomerReference?: string, filterRequirementsMet?: boolean, pageNumber?: number, pageSize?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;









        // Path Params
        const localVarPath = '/number_orders';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (filterStatus !== undefined) {
            requestContext.setQueryParam("filter[status]", ObjectSerializer.serialize(filterStatus, "string", ""));
        }

        // Query Params
        if (filterCreatedAtGt !== undefined) {
            requestContext.setQueryParam("filter[created_at][gt]", ObjectSerializer.serialize(filterCreatedAtGt, "string", ""));
        }

        // Query Params
        if (filterCreatedAtLt !== undefined) {
            requestContext.setQueryParam("filter[created_at][lt]", ObjectSerializer.serialize(filterCreatedAtLt, "string", ""));
        }

        // Query Params
        if (filterPhoneNumbersCount !== undefined) {
            requestContext.setQueryParam("filter[phone_numbers_count]", ObjectSerializer.serialize(filterPhoneNumbersCount, "string", ""));
        }

        // Query Params
        if (filterCustomerReference !== undefined) {
            requestContext.setQueryParam("filter[customer_reference]", ObjectSerializer.serialize(filterCustomerReference, "string", ""));
        }

        // Query Params
        if (filterRequirementsMet !== undefined) {
            requestContext.setQueryParam("filter[requirements_met]", ObjectSerializer.serialize(filterRequirementsMet, "boolean", ""));
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
     * Retrieve regulartory requirements
     * @param filterPhoneNumber Record type phone number/ phone numbers
     */
    public async listRegulartoryRequirements(filterPhoneNumber: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'filterPhoneNumber' is not null or undefined
        if (filterPhoneNumber === null || filterPhoneNumber === undefined) {
            throw new RequiredError("NumberOrdersApi", "listRegulartoryRequirements", "filterPhoneNumber");
        }


        // Path Params
        const localVarPath = '/phone_numbers_regulatory_requirements';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (filterPhoneNumber !== undefined) {
            requestContext.setQueryParam("filter[phone_number]", ObjectSerializer.serialize(filterPhoneNumber, "string", ""));
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
     * Get a paginated list of sub number orders.
     * List sub number orders
     * @param filterUserId User ID of the user who owns the sub number order
     * @param filterOrderRequestId ID of the number order the sub number order belongs to
     * @param filterCountryCode ISO alpha-2 country code.
     * @param filterPhoneNumberType Phone Number Type
     * @param filterPhoneNumbersCount Amount of numbers in the sub number order
     */
    public async listSubNumberOrders(filterUserId?: string, filterOrderRequestId?: string, filterCountryCode?: string, filterPhoneNumberType?: string, filterPhoneNumbersCount?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;






        // Path Params
        const localVarPath = '/sub_number_orders';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (filterUserId !== undefined) {
            requestContext.setQueryParam("filter[user_id]", ObjectSerializer.serialize(filterUserId, "string", "uuid"));
        }

        // Query Params
        if (filterOrderRequestId !== undefined) {
            requestContext.setQueryParam("filter[order_request_id]", ObjectSerializer.serialize(filterOrderRequestId, "string", "uuid"));
        }

        // Query Params
        if (filterCountryCode !== undefined) {
            requestContext.setQueryParam("filter[country_code]", ObjectSerializer.serialize(filterCountryCode, "string", ""));
        }

        // Query Params
        if (filterPhoneNumberType !== undefined) {
            requestContext.setQueryParam("filter[phone_number_type]", ObjectSerializer.serialize(filterPhoneNumberType, "string", ""));
        }

        // Query Params
        if (filterPhoneNumbersCount !== undefined) {
            requestContext.setQueryParam("filter[phone_numbers_count]", ObjectSerializer.serialize(filterPhoneNumbersCount, "number", ""));
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
     * Mark a comment as read
     * @param id The comment ID.
     */
    public async markCommentRead(id: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("NumberOrdersApi", "markCommentRead", "id");
        }


        // Path Params
        const localVarPath = '/comments/{id}/read'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PATCH);
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
     * Retrieve a comment
     * @param id The comment ID.
     */
    public async retrieveComment(id: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("NumberOrdersApi", "retrieveComment", "id");
        }


        // Path Params
        const localVarPath = '/comments/{id}'
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
     * Get an existing phone number order.
     * Retrieve a number order
     * @param numberOrderId The number order ID.
     */
    public async retrieveNumberOrder(numberOrderId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'numberOrderId' is not null or undefined
        if (numberOrderId === null || numberOrderId === undefined) {
            throw new RequiredError("NumberOrdersApi", "retrieveNumberOrder", "numberOrderId");
        }


        // Path Params
        const localVarPath = '/number_orders/{number_order_id}'
            .replace('{' + 'number_order_id' + '}', encodeURIComponent(String(numberOrderId)));

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
     * Get an existing number order phone number.
     * Retrieve a number order phone number.
     * @param numberOrderPhoneNumberId The number order phone number ID.
     */
    public async retrieveNumberOrderPhoneNumber(numberOrderPhoneNumberId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'numberOrderPhoneNumberId' is not null or undefined
        if (numberOrderPhoneNumberId === null || numberOrderPhoneNumberId === undefined) {
            throw new RequiredError("NumberOrdersApi", "retrieveNumberOrderPhoneNumber", "numberOrderPhoneNumberId");
        }


        // Path Params
        const localVarPath = '/number_order_phone_numbers/{number_order_phone_number_id}'
            .replace('{' + 'number_order_phone_number_id' + '}', encodeURIComponent(String(numberOrderPhoneNumberId)));

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
     * Get a list of phone numbers associated to orders.
     * Retrieve a list of phone numbers associated to orders
     */
    public async retrieveNumberOrderPhoneNumbers(_options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // Path Params
        const localVarPath = '/number_order_phone_numbers';

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
     * Get an existing sub number order.
     * Retrieve a sub number order
     * @param subNumberOrderId The sub number order ID.
     * @param filterIncludePhoneNumbers Include the first 50 phone number objects in the results
     */
    public async retrieveSubNumberOrder(subNumberOrderId: string, filterIncludePhoneNumbers?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'subNumberOrderId' is not null or undefined
        if (subNumberOrderId === null || subNumberOrderId === undefined) {
            throw new RequiredError("NumberOrdersApi", "retrieveSubNumberOrder", "subNumberOrderId");
        }



        // Path Params
        const localVarPath = '/sub_number_orders/{sub_number_order_id}'
            .replace('{' + 'sub_number_order_id' + '}', encodeURIComponent(String(subNumberOrderId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (filterIncludePhoneNumbers !== undefined) {
            requestContext.setQueryParam("filter[include_phone_numbers]", ObjectSerializer.serialize(filterIncludePhoneNumbers, "boolean", ""));
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
     * Updates a phone number order.
     * Update a number order
     * @param numberOrderId The number order ID.
     * @param updateNumberOrderRequest 
     */
    public async updateNumberOrder(numberOrderId: string, updateNumberOrderRequest: UpdateNumberOrderRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'numberOrderId' is not null or undefined
        if (numberOrderId === null || numberOrderId === undefined) {
            throw new RequiredError("NumberOrdersApi", "updateNumberOrder", "numberOrderId");
        }


        // verify required parameter 'updateNumberOrderRequest' is not null or undefined
        if (updateNumberOrderRequest === null || updateNumberOrderRequest === undefined) {
            throw new RequiredError("NumberOrdersApi", "updateNumberOrder", "updateNumberOrderRequest");
        }


        // Path Params
        const localVarPath = '/number_orders/{number_order_id}'
            .replace('{' + 'number_order_id' + '}', encodeURIComponent(String(numberOrderId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PATCH);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(updateNumberOrderRequest, "UpdateNumberOrderRequest", ""),
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
     * Updates a number order phone number.
     * Update a number order phone number.
     * @param numberOrderPhoneNumberId The number order phone number ID.
     * @param updateNumberOrderPhoneNumberRequest 
     */
    public async updateNumberOrderPhoneNumber(numberOrderPhoneNumberId: string, updateNumberOrderPhoneNumberRequest: UpdateNumberOrderPhoneNumberRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'numberOrderPhoneNumberId' is not null or undefined
        if (numberOrderPhoneNumberId === null || numberOrderPhoneNumberId === undefined) {
            throw new RequiredError("NumberOrdersApi", "updateNumberOrderPhoneNumber", "numberOrderPhoneNumberId");
        }


        // verify required parameter 'updateNumberOrderPhoneNumberRequest' is not null or undefined
        if (updateNumberOrderPhoneNumberRequest === null || updateNumberOrderPhoneNumberRequest === undefined) {
            throw new RequiredError("NumberOrdersApi", "updateNumberOrderPhoneNumber", "updateNumberOrderPhoneNumberRequest");
        }


        // Path Params
        const localVarPath = '/number_order_phone_numbers/{number_order_phone_number_id}'
            .replace('{' + 'number_order_phone_number_id' + '}', encodeURIComponent(String(numberOrderPhoneNumberId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PATCH);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(updateNumberOrderPhoneNumberRequest, "UpdateNumberOrderPhoneNumberRequest", ""),
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
     * Updates a sub number order.
     * Update a sub number order
     * @param subNumberOrderId The sub number order ID.
     * @param updateSubNumberOrderRequest 
     */
    public async updateSubNumberOrder(subNumberOrderId: string, updateSubNumberOrderRequest: UpdateSubNumberOrderRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'subNumberOrderId' is not null or undefined
        if (subNumberOrderId === null || subNumberOrderId === undefined) {
            throw new RequiredError("NumberOrdersApi", "updateSubNumberOrder", "subNumberOrderId");
        }


        // verify required parameter 'updateSubNumberOrderRequest' is not null or undefined
        if (updateSubNumberOrderRequest === null || updateSubNumberOrderRequest === undefined) {
            throw new RequiredError("NumberOrdersApi", "updateSubNumberOrder", "updateSubNumberOrderRequest");
        }


        // Path Params
        const localVarPath = '/sub_number_orders/{sub_number_order_id}'
            .replace('{' + 'sub_number_order_id' + '}', encodeURIComponent(String(subNumberOrderId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PATCH);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(updateSubNumberOrderRequest, "UpdateSubNumberOrderRequest", ""),
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

export class NumberOrdersApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createComment
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createComment(response: ResponseContext): Promise<CreateComment200Response > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CreateComment200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CreateComment200Response", ""
            ) as CreateComment200Response;
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
            const body: CreateComment200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CreateComment200Response", ""
            ) as CreateComment200Response;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createNumberOrder
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createNumberOrder(response: ResponseContext): Promise<NumberOrderResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: NumberOrderResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NumberOrderResponse", ""
            ) as NumberOrderResponse;
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
            const body: NumberOrderResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NumberOrderResponse", ""
            ) as NumberOrderResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listComments
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listComments(response: ResponseContext): Promise<ListComments200Response > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ListComments200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListComments200Response", ""
            ) as ListComments200Response;
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
            const body: ListComments200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListComments200Response", ""
            ) as ListComments200Response;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listNumberOrders
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listNumberOrders(response: ResponseContext): Promise<ListNumberOrdersResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ListNumberOrdersResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListNumberOrdersResponse", ""
            ) as ListNumberOrdersResponse;
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
            const body: ListNumberOrdersResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListNumberOrdersResponse", ""
            ) as ListNumberOrdersResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listRegulartoryRequirements
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listRegulartoryRequirements(response: ResponseContext): Promise<ListRegulartoryRequirements200Response > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ListRegulartoryRequirements200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListRegulartoryRequirements200Response", ""
            ) as ListRegulartoryRequirements200Response;
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
            const body: ListRegulartoryRequirements200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListRegulartoryRequirements200Response", ""
            ) as ListRegulartoryRequirements200Response;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listSubNumberOrders
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listSubNumberOrders(response: ResponseContext): Promise<ListSubNumberOrdersResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ListSubNumberOrdersResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListSubNumberOrdersResponse", ""
            ) as ListSubNumberOrdersResponse;
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
            const body: ListSubNumberOrdersResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListSubNumberOrdersResponse", ""
            ) as ListSubNumberOrdersResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to markCommentRead
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async markCommentRead(response: ResponseContext): Promise<MarkCommentRead200Response > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: MarkCommentRead200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MarkCommentRead200Response", ""
            ) as MarkCommentRead200Response;
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
            const body: MarkCommentRead200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MarkCommentRead200Response", ""
            ) as MarkCommentRead200Response;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to retrieveComment
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async retrieveComment(response: ResponseContext): Promise<CreateComment200Response > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CreateComment200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CreateComment200Response", ""
            ) as CreateComment200Response;
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
            const body: CreateComment200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CreateComment200Response", ""
            ) as CreateComment200Response;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to retrieveNumberOrder
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async retrieveNumberOrder(response: ResponseContext): Promise<NumberOrderResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: NumberOrderResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NumberOrderResponse", ""
            ) as NumberOrderResponse;
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
            const body: NumberOrderResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NumberOrderResponse", ""
            ) as NumberOrderResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to retrieveNumberOrderPhoneNumber
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async retrieveNumberOrderPhoneNumber(response: ResponseContext): Promise<NumberOrderPhoneNumberResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: NumberOrderPhoneNumberResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NumberOrderPhoneNumberResponse", ""
            ) as NumberOrderPhoneNumberResponse;
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
            const body: NumberOrderPhoneNumberResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NumberOrderPhoneNumberResponse", ""
            ) as NumberOrderPhoneNumberResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to retrieveNumberOrderPhoneNumbers
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async retrieveNumberOrderPhoneNumbers(response: ResponseContext): Promise<ListNumberOrderPhoneNumbersResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ListNumberOrderPhoneNumbersResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListNumberOrderPhoneNumbersResponse", ""
            ) as ListNumberOrderPhoneNumbersResponse;
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
            const body: ListNumberOrderPhoneNumbersResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListNumberOrderPhoneNumbersResponse", ""
            ) as ListNumberOrderPhoneNumbersResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to retrieveSubNumberOrder
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async retrieveSubNumberOrder(response: ResponseContext): Promise<SubNumberOrderResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SubNumberOrderResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SubNumberOrderResponse", ""
            ) as SubNumberOrderResponse;
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
            const body: SubNumberOrderResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SubNumberOrderResponse", ""
            ) as SubNumberOrderResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateNumberOrder
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updateNumberOrder(response: ResponseContext): Promise<NumberOrderResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: NumberOrderResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NumberOrderResponse", ""
            ) as NumberOrderResponse;
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
            const body: NumberOrderResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NumberOrderResponse", ""
            ) as NumberOrderResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateNumberOrderPhoneNumber
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updateNumberOrderPhoneNumber(response: ResponseContext): Promise<NumberOrderPhoneNumberResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: NumberOrderPhoneNumberResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NumberOrderPhoneNumberResponse", ""
            ) as NumberOrderPhoneNumberResponse;
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
            const body: NumberOrderPhoneNumberResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NumberOrderPhoneNumberResponse", ""
            ) as NumberOrderPhoneNumberResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateSubNumberOrder
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updateSubNumberOrder(response: ResponseContext): Promise<SubNumberOrderResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SubNumberOrderResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SubNumberOrderResponse", ""
            ) as SubNumberOrderResponse;
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
            const body: SubNumberOrderResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SubNumberOrderResponse", ""
            ) as SubNumberOrderResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
