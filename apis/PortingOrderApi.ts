// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi.ts';
import {Configuration} from '../configuration.ts';
import {RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http.ts';
import {ObjectSerializer} from '../models/ObjectSerializer.ts';
import {ApiException} from './exception.ts';
import {canConsumeForm, isCodeInRange} from '../util.ts';
import {SecurityAuthentication} from '../auth/auth.ts';


import { ActivatePortingOrder202Response } from '../models/ActivatePortingOrder202Response.ts';
import { CancelPortingOrder200Response } from '../models/CancelPortingOrder200Response.ts';
import { ConfirmPortingOrder200Response } from '../models/ConfirmPortingOrder200Response.ts';
import { CreatePortingOrder } from '../models/CreatePortingOrder.ts';
import { CreatePortingOrder201Response } from '../models/CreatePortingOrder201Response.ts';
import { CreatePortingOrderComment } from '../models/CreatePortingOrderComment.ts';
import { CreatePortingOrderComment201Response } from '../models/CreatePortingOrderComment201Response.ts';
import { GetPortingOrder200Response } from '../models/GetPortingOrder200Response.ts';
import { GetPortingOrderSubRequest200Response } from '../models/GetPortingOrderSubRequest200Response.ts';
import { ListAllowedFocWindows200Response } from '../models/ListAllowedFocWindows200Response.ts';
import { ListPortingOrderDocuments200Response } from '../models/ListPortingOrderDocuments200Response.ts';
import { ListPortingOrderRequirements200Response } from '../models/ListPortingOrderRequirements200Response.ts';
import { ListPortingOrders200Response } from '../models/ListPortingOrders200Response.ts';
import { ListPortingOrdersActivationJobs200Response } from '../models/ListPortingOrdersActivationJobs200Response.ts';
import { ListPortingOrdersComments200Response } from '../models/ListPortingOrdersComments200Response.ts';
import { ListPortingOrdersExceptionTypes200Response } from '../models/ListPortingOrdersExceptionTypes200Response.ts';
import { ListPortingPhoneNumbers200Response } from '../models/ListPortingPhoneNumbers200Response.ts';
import { PortabilityStatus } from '../models/PortabilityStatus.ts';
import { PortingOrderActivationStatus } from '../models/PortingOrderActivationStatus.ts';
import { PortingOrderType } from '../models/PortingOrderType.ts';
import { UpdatePortingOrder } from '../models/UpdatePortingOrder.ts';
import { UpdatePortingOrder200Response } from '../models/UpdatePortingOrder200Response.ts';
import { UploadPortingOrderDocuments201Response } from '../models/UploadPortingOrderDocuments201Response.ts';
import { UploadPortingOrderDocumentsRequest } from '../models/UploadPortingOrderDocumentsRequest.ts';

/**
 * no description
 */
export class PortingOrderApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Activate each number in a porting order asynchronously. This operation is limited to US FastPort orders only.
     * Activate every number in a porting order asynchronously.
     * @param id Porting Order id
     */
    public async activatePortingOrder(id: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("PortingOrderApi", "activatePortingOrder", "id");
        }


        // Path Params
        const localVarPath = '/porting_orders/{id}/actions/activate'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
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
     * Cancel a porting order
     * Cancel a porting order
     * @param id Porting Order id
     */
    public async cancelPortingOrder(id: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("PortingOrderApi", "cancelPortingOrder", "id");
        }


        // Path Params
        const localVarPath = '/porting_orders/{id}/actions/cancel'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
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
     * Confirm and submit your porting order.
     * Submit a porting order.
     * @param id Porting Order id
     */
    public async confirmPortingOrder(id: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("PortingOrderApi", "confirmPortingOrder", "id");
        }


        // Path Params
        const localVarPath = '/porting_orders/{id}/actions/confirm'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
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
     * Creates a new porting order object.
     * Create a porting order
     * @param createPortingOrder 
     */
    public async createPortingOrder(createPortingOrder: CreatePortingOrder, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'createPortingOrder' is not null or undefined
        if (createPortingOrder === null || createPortingOrder === undefined) {
            throw new RequiredError("PortingOrderApi", "createPortingOrder", "createPortingOrder");
        }


        // Path Params
        const localVarPath = '/porting_orders';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(createPortingOrder, "CreatePortingOrder", ""),
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
     * Creates a new comment for a porting order.
     * Create a comment for a porting order
     * @param id Porting Order id
     * @param createPortingOrderComment 
     */
    public async createPortingOrderComment(id: string, createPortingOrderComment: CreatePortingOrderComment, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("PortingOrderApi", "createPortingOrderComment", "id");
        }


        // verify required parameter 'createPortingOrderComment' is not null or undefined
        if (createPortingOrderComment === null || createPortingOrderComment === undefined) {
            throw new RequiredError("PortingOrderApi", "createPortingOrderComment", "createPortingOrderComment");
        }


        // Path Params
        const localVarPath = '/porting_orders/{id}/comments'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(createPortingOrderComment, "CreatePortingOrderComment", ""),
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
     * Deletes an existing porting order. This operation is restrict to porting orders in draft state.
     * Delete a porting order
     * @param id Porting Order id
     */
    public async deletePortingOrder(id: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("PortingOrderApi", "deletePortingOrder", "id");
        }


        // Path Params
        const localVarPath = '/porting_orders/{id}'
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
     * Retrieves the details of an existing porting order.
     * Retrieve a porting order
     * @param id Porting Order id
     * @param includePhoneNumbers Include the first 50 phone number objects in the results
     */
    public async getPortingOrder(id: string, includePhoneNumbers?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("PortingOrderApi", "getPortingOrder", "id");
        }



        // Path Params
        const localVarPath = '/porting_orders/{id}'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (includePhoneNumbers !== undefined) {
            requestContext.setQueryParam("include_phone_numbers", ObjectSerializer.serialize(includePhoneNumbers, "boolean", ""));
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
     * Download a porting order loa template
     * Download a porting order loa template
     * @param id Porting Order id
     */
    public async getPortingOrderLOATemplate(id: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("PortingOrderApi", "getPortingOrderLOATemplate", "id");
        }


        // Path Params
        const localVarPath = '/porting_orders/{id}/loa_template'
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
     * Retrieve the associated V1 sub_request_id and port_request_id
     * Retrieve the associated V1 sub_request_id and port_request_id
     * @param id Porting Order id
     */
    public async getPortingOrderSubRequest(id: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("PortingOrderApi", "getPortingOrderSubRequest", "id");
        }


        // Path Params
        const localVarPath = '/porting_orders/{id}/sub_request'
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
     * Returns a porting activation job.
     * Retrieve a porting activation job
     * @param id Porting Order id
     * @param activationJobId Activation Job Identifier
     */
    public async getPortingOrdersActivationJob(id: string, activationJobId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("PortingOrderApi", "getPortingOrdersActivationJob", "id");
        }


        // verify required parameter 'activationJobId' is not null or undefined
        if (activationJobId === null || activationJobId === undefined) {
            throw new RequiredError("PortingOrderApi", "getPortingOrdersActivationJob", "activationJobId");
        }


        // Path Params
        const localVarPath = '/porting_orders/{id}/activation_jobs/{activationJobId}'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)))
            .replace('{' + 'activationJobId' + '}', encodeURIComponent(String(activationJobId)));

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
     * Returns a list of allowed FOC dates for a porting order.
     * List allowed FOC dates
     * @param id Porting Order id
     */
    public async listAllowedFocWindows(id: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("PortingOrderApi", "listAllowedFocWindows", "id");
        }


        // Path Params
        const localVarPath = '/porting_orders/{id}/allowed_foc_windows'
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
     * Returns a list of all documents associated with a porting order.
     * List all documents associated with a porting order
     * @param id Porting Order id
     * @param pageNumber The page number to load
     * @param pageSize The size of the page
     */
    public async listPortingOrderDocuments(id: string, pageNumber?: number, pageSize?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("PortingOrderApi", "listPortingOrderDocuments", "id");
        }




        // Path Params
        const localVarPath = '/porting_orders/{id}/documents'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

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
     * Returns a list of all requirements based on country/number type for this porting order.
     * List porting order requirements
     * @param id Porting Order id
     * @param pageNumber The page number to load
     * @param pageSize The size of the page
     */
    public async listPortingOrderRequirements(id: string, pageNumber?: number, pageSize?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("PortingOrderApi", "listPortingOrderRequirements", "id");
        }




        // Path Params
        const localVarPath = '/porting_orders/{id}/requirements'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

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
     * Returns a list of your porting order.
     * List all porting orders
     * @param pageNumber The page number to load
     * @param pageSize The size of the page
     * @param includePhoneNumbers Include the first 50 phone number objects in the results
     * @param filterStatus Filter results by status
     * @param filterStatusIn Filter porting orders by multiple statuses
     * @param filterCustomerReference Filter results by customer_reference
     * @param filterParentSupportKey Filter results by parent_support_key
     * @param filterPhoneNumbersCountryCode Filter results by country ISO 3166-1 alpha-2 code
     * @param filterPhoneNumbersCarrierName Filter results by old service provider
     * @param filterMiscType Filter results by porting order type
     * @param filterEndUserAdminEntityName Filter results by person or company name
     * @param filterEndUserAdminAuthPersonName Filter results by authorized person
     * @param filterActivationSettingsFastPortEligible Filter results by fast port eligible
     * @param filterActivationSettingsFocDatetimeRequestedGt Filter results by foc date later than this value
     * @param filterActivationSettingsFocDatetimeRequestedLt Filter results by foc date earlier than this value
     * @param filterPhoneNumbersPhoneNumberContains Filter results by full or partial phone_number
     * @param sort Specifies the sort order for results. If not given, results are sorted by created_at in descending order.
     */
    public async listPortingOrders(pageNumber?: number, pageSize?: number, includePhoneNumbers?: boolean, filterStatus?: 'draft' | 'in-process' | 'submitted' | 'exception' | 'foc-date-confirmed' | 'cancel-pending' | 'ported' | 'cancelled', filterStatusIn?: 'draft' | 'in-process' | 'submitted' | 'exception' | 'foc-date-confirmed' | 'cancel-pending' | 'ported' | 'cancelled', filterCustomerReference?: string, filterParentSupportKey?: string, filterPhoneNumbersCountryCode?: string, filterPhoneNumbersCarrierName?: string, filterMiscType?: PortingOrderType, filterEndUserAdminEntityName?: string, filterEndUserAdminAuthPersonName?: string, filterActivationSettingsFastPortEligible?: boolean, filterActivationSettingsFocDatetimeRequestedGt?: string, filterActivationSettingsFocDatetimeRequestedLt?: string, filterPhoneNumbersPhoneNumberContains?: string, sort?: 'created_at' | '-created_at' | 'activation_settings.foc_datetime_requested' | '-activation_settings.foc_datetime_requested', _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;


















        // Path Params
        const localVarPath = '/porting_orders';

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

        // Query Params
        if (includePhoneNumbers !== undefined) {
            requestContext.setQueryParam("include_phone_numbers", ObjectSerializer.serialize(includePhoneNumbers, "boolean", ""));
        }

        // Query Params
        if (filterStatus !== undefined) {
            requestContext.setQueryParam("filter[status]", ObjectSerializer.serialize(filterStatus, "'draft' | 'in-process' | 'submitted' | 'exception' | 'foc-date-confirmed' | 'cancel-pending' | 'ported' | 'cancelled'", ""));
        }

        // Query Params
        if (filterStatusIn !== undefined) {
            requestContext.setQueryParam("filter[status][in][]", ObjectSerializer.serialize(filterStatusIn, "'draft' | 'in-process' | 'submitted' | 'exception' | 'foc-date-confirmed' | 'cancel-pending' | 'ported' | 'cancelled'", ""));
        }

        // Query Params
        if (filterCustomerReference !== undefined) {
            requestContext.setQueryParam("filter[customer_reference]", ObjectSerializer.serialize(filterCustomerReference, "string", ""));
        }

        // Query Params
        if (filterParentSupportKey !== undefined) {
            requestContext.setQueryParam("filter[parent_support_key]", ObjectSerializer.serialize(filterParentSupportKey, "string", ""));
        }

        // Query Params
        if (filterPhoneNumbersCountryCode !== undefined) {
            requestContext.setQueryParam("filter[phone_numbers.country_code]", ObjectSerializer.serialize(filterPhoneNumbersCountryCode, "string", ""));
        }

        // Query Params
        if (filterPhoneNumbersCarrierName !== undefined) {
            requestContext.setQueryParam("filter[phone_numbers.carrier_name]", ObjectSerializer.serialize(filterPhoneNumbersCarrierName, "string", ""));
        }

        // Query Params
        if (filterMiscType !== undefined) {
            requestContext.setQueryParam("filter[misc.type]", ObjectSerializer.serialize(filterMiscType, "PortingOrderType", ""));
        }

        // Query Params
        if (filterEndUserAdminEntityName !== undefined) {
            requestContext.setQueryParam("filter[end_user.admin.entity_name]", ObjectSerializer.serialize(filterEndUserAdminEntityName, "string", ""));
        }

        // Query Params
        if (filterEndUserAdminAuthPersonName !== undefined) {
            requestContext.setQueryParam("filter[end_user.admin.auth_person_name]", ObjectSerializer.serialize(filterEndUserAdminAuthPersonName, "string", ""));
        }

        // Query Params
        if (filterActivationSettingsFastPortEligible !== undefined) {
            requestContext.setQueryParam("filter[activation_settings.fast_port_eligible]", ObjectSerializer.serialize(filterActivationSettingsFastPortEligible, "boolean", ""));
        }

        // Query Params
        if (filterActivationSettingsFocDatetimeRequestedGt !== undefined) {
            requestContext.setQueryParam("filter[activation_settings.foc_datetime_requested][gt]", ObjectSerializer.serialize(filterActivationSettingsFocDatetimeRequestedGt, "string", ""));
        }

        // Query Params
        if (filterActivationSettingsFocDatetimeRequestedLt !== undefined) {
            requestContext.setQueryParam("filter[activation_settings.foc_datetime_requested][lt]", ObjectSerializer.serialize(filterActivationSettingsFocDatetimeRequestedLt, "string", ""));
        }

        // Query Params
        if (filterPhoneNumbersPhoneNumberContains !== undefined) {
            requestContext.setQueryParam("filter[phone_numbers.phone_number][contains]", ObjectSerializer.serialize(filterPhoneNumbersPhoneNumberContains, "string", ""));
        }

        // Query Params
        if (sort !== undefined) {
            requestContext.setQueryParam("sort[]", ObjectSerializer.serialize(sort, "'created_at' | '-created_at' | 'activation_settings.foc_datetime_requested' | '-activation_settings.foc_datetime_requested'", ""));
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
     * Returns a list of your porting activation jobs.
     * List all porting activation jobs
     * @param id Porting Order id
     * @param pageNumber The page number to load
     * @param pageSize The size of the page
     */
    public async listPortingOrdersActivationJobs(id: string, pageNumber?: number, pageSize?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("PortingOrderApi", "listPortingOrdersActivationJobs", "id");
        }




        // Path Params
        const localVarPath = '/porting_orders/{id}/activation_jobs'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

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
     * Returns a list of all comments of a porting order.
     * List all comments of a porting order
     * @param id Porting Order id
     * @param pageNumber The page number to load
     * @param pageSize The size of the page
     */
    public async listPortingOrdersComments(id: string, pageNumber?: number, pageSize?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("PortingOrderApi", "listPortingOrdersComments", "id");
        }




        // Path Params
        const localVarPath = '/porting_orders/{id}/comments'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

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
     * Returns a list of all possible exception types for a porting order.
     * List all exception types
     */
    public async listPortingOrdersExceptionTypes(_options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // Path Params
        const localVarPath = '/porting_orders/exception_types';

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
     * Returns a list of your porting phone numbers.
     * List all porting phone numbers
     * @param pageNumber The page number to load
     * @param pageSize The size of the page
     * @param filterPortingOrderId Filter results by porting order id
     * @param filterPortingOrderIdIn Filter results by a list of porting order ids
     * @param filterSupportKeyEq Filter results by support key
     * @param filterSupportKeyIn Filter results by a list of support keys
     * @param filterPhoneNumber Filter results by phone number
     * @param filterPhoneNumberIn Filter results by a list of phone numbers
     * @param filterPortingOrderStatus Filter results by porting order status
     * @param filterActivationStatus Filter results by activation status
     * @param filterPortabilityStatus Filter results by portability status
     */
    public async listPortingPhoneNumbers(pageNumber?: number, pageSize?: number, filterPortingOrderId?: string, filterPortingOrderIdIn?: Array<string>, filterSupportKeyEq?: string, filterSupportKeyIn?: Array<string>, filterPhoneNumber?: string, filterPhoneNumberIn?: Array<string>, filterPortingOrderStatus?: 'draft' | 'in-process' | 'submitted' | 'exception' | 'foc-date-confirmed' | 'cancel-pending' | 'ported' | 'cancelled', filterActivationStatus?: PortingOrderActivationStatus, filterPortabilityStatus?: PortabilityStatus, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;












        // Path Params
        const localVarPath = '/porting_phone_numbers';

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

        // Query Params
        if (filterPortingOrderId !== undefined) {
            requestContext.setQueryParam("filter[porting_order_id]", ObjectSerializer.serialize(filterPortingOrderId, "string", "uuid"));
        }

        // Query Params
        if (filterPortingOrderIdIn !== undefined) {
            requestContext.setQueryParam("filter[porting_order_id][in][]", ObjectSerializer.serialize(filterPortingOrderIdIn, "Array<string>", "uuid"));
        }

        // Query Params
        if (filterSupportKeyEq !== undefined) {
            requestContext.setQueryParam("filter[support_key][eq]", ObjectSerializer.serialize(filterSupportKeyEq, "string", ""));
        }

        // Query Params
        if (filterSupportKeyIn !== undefined) {
            requestContext.setQueryParam("filter[support_key][in][]", ObjectSerializer.serialize(filterSupportKeyIn, "Array<string>", ""));
        }

        // Query Params
        if (filterPhoneNumber !== undefined) {
            requestContext.setQueryParam("filter[phone_number]", ObjectSerializer.serialize(filterPhoneNumber, "string", ""));
        }

        // Query Params
        if (filterPhoneNumberIn !== undefined) {
            requestContext.setQueryParam("filter[phone_number][in][]", ObjectSerializer.serialize(filterPhoneNumberIn, "Array<string>", ""));
        }

        // Query Params
        if (filterPortingOrderStatus !== undefined) {
            requestContext.setQueryParam("filter[porting_order_status]", ObjectSerializer.serialize(filterPortingOrderStatus, "'draft' | 'in-process' | 'submitted' | 'exception' | 'foc-date-confirmed' | 'cancel-pending' | 'ported' | 'cancelled'", ""));
        }

        // Query Params
        if (filterActivationStatus !== undefined) {
            requestContext.setQueryParam("filter[activation_status]", ObjectSerializer.serialize(filterActivationStatus, "PortingOrderActivationStatus", ""));
        }

        // Query Params
        if (filterPortabilityStatus !== undefined) {
            requestContext.setQueryParam("filter[portability_status]", ObjectSerializer.serialize(filterPortabilityStatus, "PortabilityStatus", ""));
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
     * Edits the details of an existing porting order.  Any or all of a porting order’s attributes may be included in the resource object included in a PATCH request.  If a request does not include all of the attributes for a resource, the system will interpret the missing attributes as if they were included with their current values. To explicitly set something to null, it must be included in the request with a null value.
     * Edit a porting order
     * @param id Porting Order id
     * @param updatePortingOrder 
     */
    public async updatePortingOrder(id: string, updatePortingOrder: UpdatePortingOrder, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("PortingOrderApi", "updatePortingOrder", "id");
        }


        // verify required parameter 'updatePortingOrder' is not null or undefined
        if (updatePortingOrder === null || updatePortingOrder === undefined) {
            throw new RequiredError("PortingOrderApi", "updatePortingOrder", "updatePortingOrder");
        }


        // Path Params
        const localVarPath = '/porting_orders/{id}'
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
            ObjectSerializer.serialize(updatePortingOrder, "UpdatePortingOrder", ""),
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
     * Associate a list of documents with a porting order.
     * Associate a list of documents with a porting order
     * @param id Porting Order id
     * @param uploadPortingOrderDocumentsRequest 
     */
    public async uploadPortingOrderDocuments(id: string, uploadPortingOrderDocumentsRequest: UploadPortingOrderDocumentsRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("PortingOrderApi", "uploadPortingOrderDocuments", "id");
        }


        // verify required parameter 'uploadPortingOrderDocumentsRequest' is not null or undefined
        if (uploadPortingOrderDocumentsRequest === null || uploadPortingOrderDocumentsRequest === undefined) {
            throw new RequiredError("PortingOrderApi", "uploadPortingOrderDocuments", "uploadPortingOrderDocumentsRequest");
        }


        // Path Params
        const localVarPath = '/porting_orders/{id}/documents'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(uploadPortingOrderDocumentsRequest, "UploadPortingOrderDocumentsRequest", ""),
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

export class PortingOrderApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to activatePortingOrder
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async activatePortingOrder(response: ResponseContext): Promise<ActivatePortingOrder202Response > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("202", response.httpStatusCode)) {
            const body: ActivatePortingOrder202Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ActivatePortingOrder202Response", ""
            ) as ActivatePortingOrder202Response;
            return body;
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Unauthorized", undefined, response.headers);
        }
        if (isCodeInRange("422", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Unprocessable entity. Check message field in response for details.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ActivatePortingOrder202Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ActivatePortingOrder202Response", ""
            ) as ActivatePortingOrder202Response;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to cancelPortingOrder
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async cancelPortingOrder(response: ResponseContext): Promise<CancelPortingOrder200Response > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CancelPortingOrder200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CancelPortingOrder200Response", ""
            ) as CancelPortingOrder200Response;
            return body;
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Unauthorized", undefined, response.headers);
        }
        if (isCodeInRange("422", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Unprocessable entity. Check message field in response for details.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: CancelPortingOrder200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CancelPortingOrder200Response", ""
            ) as CancelPortingOrder200Response;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to confirmPortingOrder
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async confirmPortingOrder(response: ResponseContext): Promise<ConfirmPortingOrder200Response > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ConfirmPortingOrder200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ConfirmPortingOrder200Response", ""
            ) as ConfirmPortingOrder200Response;
            return body;
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Unauthorized", undefined, response.headers);
        }
        if (isCodeInRange("422", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Unprocessable entity. Check message field in response for details.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ConfirmPortingOrder200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ConfirmPortingOrder200Response", ""
            ) as ConfirmPortingOrder200Response;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createPortingOrder
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createPortingOrder(response: ResponseContext): Promise<CreatePortingOrder201Response > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: CreatePortingOrder201Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CreatePortingOrder201Response", ""
            ) as CreatePortingOrder201Response;
            return body;
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Unauthorized", undefined, response.headers);
        }
        if (isCodeInRange("422", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Unprocessable entity. Check message field in response for details.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: CreatePortingOrder201Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CreatePortingOrder201Response", ""
            ) as CreatePortingOrder201Response;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createPortingOrderComment
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createPortingOrderComment(response: ResponseContext): Promise<CreatePortingOrderComment201Response > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: CreatePortingOrderComment201Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CreatePortingOrderComment201Response", ""
            ) as CreatePortingOrderComment201Response;
            return body;
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Unauthorized", undefined, response.headers);
        }
        if (isCodeInRange("422", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Unprocessable entity. Check message field in response for details.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: CreatePortingOrderComment201Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CreatePortingOrderComment201Response", ""
            ) as CreatePortingOrderComment201Response;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deletePortingOrder
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deletePortingOrder(response: ResponseContext): Promise<void > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("204", response.httpStatusCode)) {
            return;
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Unauthorized", undefined, response.headers);
        }
        if (isCodeInRange("422", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Unprocessable entity. Check message field in response for details.", undefined, response.headers);
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
     * @params response Response returned by the server for a request to getPortingOrder
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getPortingOrder(response: ResponseContext): Promise<GetPortingOrder200Response > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GetPortingOrder200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetPortingOrder200Response", ""
            ) as GetPortingOrder200Response;
            return body;
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Unauthorized", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: GetPortingOrder200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetPortingOrder200Response", ""
            ) as GetPortingOrder200Response;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getPortingOrderLOATemplate
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getPortingOrderLOATemplate(response: ResponseContext): Promise<HttpFile > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: HttpFile = await response.getBodyAsFile() as any as HttpFile;
            return body;
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Unauthorized", undefined, response.headers);
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
     * @params response Response returned by the server for a request to getPortingOrderSubRequest
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getPortingOrderSubRequest(response: ResponseContext): Promise<GetPortingOrderSubRequest200Response > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GetPortingOrderSubRequest200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetPortingOrderSubRequest200Response", ""
            ) as GetPortingOrderSubRequest200Response;
            return body;
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Unauthorized", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Porting Order not found", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: GetPortingOrderSubRequest200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetPortingOrderSubRequest200Response", ""
            ) as GetPortingOrderSubRequest200Response;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getPortingOrdersActivationJob
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getPortingOrdersActivationJob(response: ResponseContext): Promise<ActivatePortingOrder202Response > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ActivatePortingOrder202Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ActivatePortingOrder202Response", ""
            ) as ActivatePortingOrder202Response;
            return body;
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Unauthorized", undefined, response.headers);
        }
        if (isCodeInRange("422", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Unprocessable entity. Check message field in response for details.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ActivatePortingOrder202Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ActivatePortingOrder202Response", ""
            ) as ActivatePortingOrder202Response;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listAllowedFocWindows
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listAllowedFocWindows(response: ResponseContext): Promise<ListAllowedFocWindows200Response > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ListAllowedFocWindows200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListAllowedFocWindows200Response", ""
            ) as ListAllowedFocWindows200Response;
            return body;
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Unauthorized", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ListAllowedFocWindows200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListAllowedFocWindows200Response", ""
            ) as ListAllowedFocWindows200Response;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listPortingOrderDocuments
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listPortingOrderDocuments(response: ResponseContext): Promise<ListPortingOrderDocuments200Response > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ListPortingOrderDocuments200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListPortingOrderDocuments200Response", ""
            ) as ListPortingOrderDocuments200Response;
            return body;
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Unauthorized", undefined, response.headers);
        }
        if (isCodeInRange("422", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Unprocessable entity. Check message field in response for details.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ListPortingOrderDocuments200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListPortingOrderDocuments200Response", ""
            ) as ListPortingOrderDocuments200Response;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listPortingOrderRequirements
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listPortingOrderRequirements(response: ResponseContext): Promise<ListPortingOrderRequirements200Response > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ListPortingOrderRequirements200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListPortingOrderRequirements200Response", ""
            ) as ListPortingOrderRequirements200Response;
            return body;
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Unauthorized", undefined, response.headers);
        }
        if (isCodeInRange("422", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Unprocessable entity. Check message field in response for details.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ListPortingOrderRequirements200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListPortingOrderRequirements200Response", ""
            ) as ListPortingOrderRequirements200Response;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listPortingOrders
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listPortingOrders(response: ResponseContext): Promise<ListPortingOrders200Response > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ListPortingOrders200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListPortingOrders200Response", ""
            ) as ListPortingOrders200Response;
            return body;
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Unauthorized", undefined, response.headers);
        }
        if (isCodeInRange("422", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Unprocessable entity. Check message field in response for details.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ListPortingOrders200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListPortingOrders200Response", ""
            ) as ListPortingOrders200Response;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listPortingOrdersActivationJobs
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listPortingOrdersActivationJobs(response: ResponseContext): Promise<ListPortingOrdersActivationJobs200Response > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ListPortingOrdersActivationJobs200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListPortingOrdersActivationJobs200Response", ""
            ) as ListPortingOrdersActivationJobs200Response;
            return body;
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Unauthorized", undefined, response.headers);
        }
        if (isCodeInRange("422", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Unprocessable entity. Check message field in response for details.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ListPortingOrdersActivationJobs200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListPortingOrdersActivationJobs200Response", ""
            ) as ListPortingOrdersActivationJobs200Response;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listPortingOrdersComments
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listPortingOrdersComments(response: ResponseContext): Promise<ListPortingOrdersComments200Response > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ListPortingOrdersComments200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListPortingOrdersComments200Response", ""
            ) as ListPortingOrdersComments200Response;
            return body;
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Unauthorized", undefined, response.headers);
        }
        if (isCodeInRange("422", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Unprocessable entity. Check message field in response for details.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ListPortingOrdersComments200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListPortingOrdersComments200Response", ""
            ) as ListPortingOrdersComments200Response;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listPortingOrdersExceptionTypes
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listPortingOrdersExceptionTypes(response: ResponseContext): Promise<ListPortingOrdersExceptionTypes200Response > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ListPortingOrdersExceptionTypes200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListPortingOrdersExceptionTypes200Response", ""
            ) as ListPortingOrdersExceptionTypes200Response;
            return body;
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Unauthorized", undefined, response.headers);
        }
        if (isCodeInRange("422", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Unprocessable entity. Check message field in response for details.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ListPortingOrdersExceptionTypes200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListPortingOrdersExceptionTypes200Response", ""
            ) as ListPortingOrdersExceptionTypes200Response;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listPortingPhoneNumbers
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listPortingPhoneNumbers(response: ResponseContext): Promise<ListPortingPhoneNumbers200Response > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ListPortingPhoneNumbers200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListPortingPhoneNumbers200Response", ""
            ) as ListPortingPhoneNumbers200Response;
            return body;
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Unauthorized", undefined, response.headers);
        }
        if (isCodeInRange("422", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Unprocessable entity. Check message field in response for details.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ListPortingPhoneNumbers200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListPortingPhoneNumbers200Response", ""
            ) as ListPortingPhoneNumbers200Response;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updatePortingOrder
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updatePortingOrder(response: ResponseContext): Promise<UpdatePortingOrder200Response > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: UpdatePortingOrder200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UpdatePortingOrder200Response", ""
            ) as UpdatePortingOrder200Response;
            return body;
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Unauthorized", undefined, response.headers);
        }
        if (isCodeInRange("422", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Unprocessable entity. Check message field in response for details.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: UpdatePortingOrder200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UpdatePortingOrder200Response", ""
            ) as UpdatePortingOrder200Response;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to uploadPortingOrderDocuments
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async uploadPortingOrderDocuments(response: ResponseContext): Promise<UploadPortingOrderDocuments201Response > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: UploadPortingOrderDocuments201Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UploadPortingOrderDocuments201Response", ""
            ) as UploadPortingOrderDocuments201Response;
            return body;
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Unauthorized", undefined, response.headers);
        }
        if (isCodeInRange("422", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Unprocessable entity. Check message field in response for details.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: UploadPortingOrderDocuments201Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UploadPortingOrderDocuments201Response", ""
            ) as UploadPortingOrderDocuments201Response;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
