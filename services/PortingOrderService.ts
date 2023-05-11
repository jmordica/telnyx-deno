/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreatePortingOrder } from '../models/CreatePortingOrder.ts';
import type { CreatePortingOrderComment } from '../models/CreatePortingOrderComment.ts';
import type { GetSubRequestByPortingOrder } from '../models/GetSubRequestByPortingOrder.ts';
import type { PaginationMeta } from '../models/PaginationMeta.ts';
import type { PortabilityStatus } from '../models/PortabilityStatus.ts';
import type { PortingOrder } from '../models/PortingOrder.ts';
import type { PortingOrderActivationStatus } from '../models/PortingOrderActivationStatus.ts';
import type { PortingOrderDocument } from '../models/PortingOrderDocument.ts';
import type { PortingOrderRequirementDetail } from '../models/PortingOrderRequirementDetail.ts';
import type { PortingOrdersActivationJob } from '../models/PortingOrdersActivationJob.ts';
import type { PortingOrdersAllowedFocWindow } from '../models/PortingOrdersAllowedFocWindow.ts';
import type { PortingOrdersComment } from '../models/PortingOrdersComment.ts';
import type { PortingOrdersExceptionType } from '../models/PortingOrdersExceptionType.ts';
import type { PortingOrderType } from '../models/PortingOrderType.ts';
import type { PortingPhoneNumber } from '../models/PortingPhoneNumber.ts';
import type { UpdatePortingOrder } from '../models/UpdatePortingOrder.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import type { BaseHttpRequest } from '../core/BaseHttpRequest.ts';

export class PortingOrderService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List all porting orders
     * Returns a list of your porting order.
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
     * @returns any Successful response
     * @throws ApiError
     */
    public listPortingOrders(
        pageNumber: number = 1,
        pageSize: number = 20,
        includePhoneNumbers: boolean = true,
        filterStatus?: 'draft' | 'in-process' | 'submitted' | 'exception' | 'foc-date-confirmed' | 'cancel-pending' | 'ported' | 'cancelled',
        filterStatusIn?: 'draft' | 'in-process' | 'submitted' | 'exception' | 'foc-date-confirmed' | 'cancel-pending' | 'ported' | 'cancelled',
        filterCustomerReference?: string,
        filterParentSupportKey?: string,
        filterPhoneNumbersCountryCode?: string,
        filterPhoneNumbersCarrierName?: string,
        filterMiscType?: PortingOrderType,
        filterEndUserAdminEntityName?: string,
        filterEndUserAdminAuthPersonName?: string,
        filterActivationSettingsFastPortEligible?: boolean,
        filterActivationSettingsFocDatetimeRequestedGt?: string,
        filterActivationSettingsFocDatetimeRequestedLt?: string,
        filterPhoneNumbersPhoneNumberContains?: string,
        sort?: 'created_at' | '-created_at' | 'activation_settings.foc_datetime_requested' | '-activation_settings.foc_datetime_requested',
    ): CancelablePromise<{
        data?: Array<PortingOrder>;
        meta?: PaginationMeta;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/porting_orders',
            query: {
                'page[number]': pageNumber,
                'page[size]': pageSize,
                'include_phone_numbers': includePhoneNumbers,
                'filter[status]': filterStatus,
                'filter[status][in][]': filterStatusIn,
                'filter[customer_reference]': filterCustomerReference,
                'filter[parent_support_key]': filterParentSupportKey,
                'filter[phone_numbers.country_code]': filterPhoneNumbersCountryCode,
                'filter[phone_numbers.carrier_name]': filterPhoneNumbersCarrierName,
                'filter[misc.type]': filterMiscType,
                'filter[end_user.admin.entity_name]': filterEndUserAdminEntityName,
                'filter[end_user.admin.auth_person_name]': filterEndUserAdminAuthPersonName,
                'filter[activation_settings.fast_port_eligible]': filterActivationSettingsFastPortEligible,
                'filter[activation_settings.foc_datetime_requested][gt]': filterActivationSettingsFocDatetimeRequestedGt,
                'filter[activation_settings.foc_datetime_requested][lt]': filterActivationSettingsFocDatetimeRequestedLt,
                'filter[phone_numbers.phone_number][contains]': filterPhoneNumbersPhoneNumberContains,
                'sort[]': sort,
            },
            errors: {
                401: `Unauthorized`,
                422: `Unprocessable entity. Check message field in response for details.`,
            },
        });
    }

    /**
     * Create a porting order
     * Creates a new porting order object.
     * @param requestBody
     * @returns any Successful response
     * @throws ApiError
     */
    public createPortingOrder(
        requestBody: CreatePortingOrder,
    ): CancelablePromise<{
        data?: Array<PortingOrder>;
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/porting_orders',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Unauthorized`,
                422: `Unprocessable entity. Check message field in response for details.`,
            },
        });
    }

    /**
     * List all exception types
     * Returns a list of all possible exception types for a porting order.
     * @returns any Successful response
     * @throws ApiError
     */
    public listPortingOrdersExceptionTypes(): CancelablePromise<{
        data?: Array<PortingOrdersExceptionType>;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/porting_orders/exception_types',
            errors: {
                401: `Unauthorized`,
                422: `Unprocessable entity. Check message field in response for details.`,
            },
        });
    }

    /**
     * Delete a porting order
     * Deletes an existing porting order. This operation is restrict to porting orders in draft state.
     * @param id Porting Order id
     * @returns void
     * @throws ApiError
     */
    public deletePortingOrder(
        id: string,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/porting_orders/{id}',
            path: {
                'id': id,
            },
            errors: {
                401: `Unauthorized`,
                422: `Unprocessable entity. Check message field in response for details.`,
            },
        });
    }

    /**
     * Retrieve a porting order
     * Retrieves the details of an existing porting order.
     * @param id Porting Order id
     * @param includePhoneNumbers Include the first 50 phone number objects in the results
     * @returns any Successful response
     * @throws ApiError
     */
    public getPortingOrder(
        id: string,
        includePhoneNumbers: boolean = true,
    ): CancelablePromise<{
        data?: PortingOrder;
        meta?: {
            /**
             * Link to list all phone numbers
             */
            phone_numbers_url?: string;
        };
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/porting_orders/{id}',
            path: {
                'id': id,
            },
            query: {
                'include_phone_numbers': includePhoneNumbers,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * Edit a porting order
     * Edits the details of an existing porting order.
     *
     * Any or all of a porting order’s attributes may be included in the resource object included in a PATCH request.
     *
     * If a request does not include all of the attributes for a resource, the system will interpret the missing attributes as if they were included with their current values. To explicitly set something to null, it must be included in the request with a null value.
     * @param id Porting Order id
     * @param requestBody
     * @returns any Successful response
     * @throws ApiError
     */
    public updatePortingOrder(
        id: string,
        requestBody: UpdatePortingOrder,
    ): CancelablePromise<{
        data?: PortingOrder;
        meta?: {
            /**
             * Link to list all phone numbers
             */
            phone_numbers_url?: string;
        };
    }> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/porting_orders/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Unauthorized`,
                422: `Unprocessable entity. Check message field in response for details.`,
            },
        });
    }

    /**
     * Activate every number in a porting order asynchronously.
     * Activate each number in a porting order asynchronously. This operation is limited to US FastPort orders only.
     * @param id Porting Order id
     * @returns any Successful response
     * @throws ApiError
     */
    public activatePortingOrder(
        id: string,
    ): CancelablePromise<{
        data?: PortingOrdersActivationJob;
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/porting_orders/{id}/actions/activate',
            path: {
                'id': id,
            },
            errors: {
                401: `Unauthorized`,
                422: `Unprocessable entity. Check message field in response for details.`,
            },
        });
    }

    /**
     * Cancel a porting order
     * Cancel a porting order
     * @param id Porting Order id
     * @returns any Successful response
     * @throws ApiError
     */
    public cancelPortingOrder(
        id: string,
    ): CancelablePromise<{
        data?: PortingOrder;
        meta?: {
            /**
             * Link to list all phone numbers
             */
            phone_numbers_url?: string;
        };
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/porting_orders/{id}/actions/cancel',
            path: {
                'id': id,
            },
            errors: {
                401: `Unauthorized`,
                422: `Unprocessable entity. Check message field in response for details.`,
            },
        });
    }

    /**
     * Submit a porting order.
     * Confirm and submit your porting order.
     * @param id Porting Order id
     * @returns any Successful response
     * @throws ApiError
     */
    public confirmPortingOrder(
        id: string,
    ): CancelablePromise<{
        data?: PortingOrder;
        meta?: {
            /**
             * Link to list all phone numbers
             */
            phone_numbers_url?: string;
        };
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/porting_orders/{id}/actions/confirm',
            path: {
                'id': id,
            },
            errors: {
                401: `Unauthorized`,
                422: `Unprocessable entity. Check message field in response for details.`,
            },
        });
    }

    /**
     * List all porting activation jobs
     * Returns a list of your porting activation jobs.
     * @param id Porting Order id
     * @param pageNumber The page number to load
     * @param pageSize The size of the page
     * @returns any Successful response
     * @throws ApiError
     */
    public listPortingOrdersActivationJobs(
        id: string,
        pageNumber: number = 1,
        pageSize: number = 20,
    ): CancelablePromise<{
        data?: Array<PortingOrdersActivationJob>;
        meta?: PaginationMeta;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/porting_orders/{id}/activation_jobs',
            path: {
                'id': id,
            },
            query: {
                'page[number]': pageNumber,
                'page[size]': pageSize,
            },
            errors: {
                401: `Unauthorized`,
                422: `Unprocessable entity. Check message field in response for details.`,
            },
        });
    }

    /**
     * Retrieve a porting activation job
     * Returns a porting activation job.
     * @param id Porting Order id
     * @param activationJobId Activation Job Identifier
     * @returns any Successful response
     * @throws ApiError
     */
    public getPortingOrdersActivationJob(
        id: string,
        activationJobId: string,
    ): CancelablePromise<{
        data?: PortingOrdersActivationJob;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/porting_orders/{id}/activation_jobs/{activationJobId}',
            path: {
                'id': id,
                'activationJobId': activationJobId,
            },
            errors: {
                401: `Unauthorized`,
                422: `Unprocessable entity. Check message field in response for details.`,
            },
        });
    }

    /**
     * List allowed FOC dates
     * Returns a list of allowed FOC dates for a porting order.
     * @param id Porting Order id
     * @returns any Successful response
     * @throws ApiError
     */
    public listAllowedFocWindows(
        id: string,
    ): CancelablePromise<{
        data?: Array<PortingOrdersAllowedFocWindow>;
        meta?: PaginationMeta;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/porting_orders/{id}/allowed_foc_windows',
            path: {
                'id': id,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * List all comments of a porting order
     * Returns a list of all comments of a porting order.
     * @param id Porting Order id
     * @param pageNumber The page number to load
     * @param pageSize The size of the page
     * @returns any Successful response
     * @throws ApiError
     */
    public listPortingOrdersComments(
        id: string,
        pageNumber: number = 1,
        pageSize: number = 20,
    ): CancelablePromise<{
        data?: Array<PortingOrdersComment>;
        meta?: PaginationMeta;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/porting_orders/{id}/comments',
            path: {
                'id': id,
            },
            query: {
                'page[number]': pageNumber,
                'page[size]': pageSize,
            },
            errors: {
                401: `Unauthorized`,
                422: `Unprocessable entity. Check message field in response for details.`,
            },
        });
    }

    /**
     * Create a comment for a porting order
     * Creates a new comment for a porting order.
     * @param id Porting Order id
     * @param requestBody
     * @returns any Successful response
     * @throws ApiError
     */
    public createPortingOrderComment(
        id: string,
        requestBody: CreatePortingOrderComment,
    ): CancelablePromise<{
        data?: PortingOrdersComment;
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/porting_orders/{id}/comments',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Unauthorized`,
                422: `Unprocessable entity. Check message field in response for details.`,
            },
        });
    }

    /**
     * List all documents associated with a porting order
     * Returns a list of all documents associated with a porting order.
     * @param id Porting Order id
     * @param pageNumber The page number to load
     * @param pageSize The size of the page
     * @returns any Successful response
     * @throws ApiError
     */
    public listPortingOrderDocuments(
        id: string,
        pageNumber: number = 1,
        pageSize: number = 20,
    ): CancelablePromise<{
        data?: Array<PortingOrderDocument>;
        meta?: PaginationMeta;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/porting_orders/{id}/documents',
            path: {
                'id': id,
            },
            query: {
                'page[number]': pageNumber,
                'page[size]': pageSize,
            },
            errors: {
                401: `Unauthorized`,
                422: `Unprocessable entity. Check message field in response for details.`,
            },
        });
    }

    /**
     * Associate a list of documents with a porting order
     * Associate a list of documents with a porting order.
     * @param id Porting Order id
     * @param requestBody
     * @returns any Successful response
     * @throws ApiError
     */
    public uploadPortingOrderDocuments(
        id: string,
        requestBody: {
            /**
             * A list of documents to be associated with a porting order.
             */
            documents: Array<{
                /**
                 * The type of the document.
                 */
                document_type: 'loa' | 'invoice' | 'other.ts';
                /**
                 * Uniquely identifies a document uploaded via the <code><a href="https://developers.telnyx.com/docs/api/v2/documents/Documents#createDocument">/v2/documents</a></code> endpoint.
                 */
                document_id: string;
            }>;
        },
    ): CancelablePromise<{
        data?: Array<PortingOrderDocument>;
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/porting_orders/{id}/documents',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Unauthorized`,
                422: `Unprocessable entity. Check message field in response for details.`,
            },
        });
    }

    /**
     * Download a porting order loa template
     * Download a porting order loa template
     * @param id Porting Order id
     * @returns binary Successful response
     * @throws ApiError
     */
    public getPortingOrderLoaTemplate(
        id: string,
    ): CancelablePromise<Blob> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/porting_orders/{id}/loa_template',
            path: {
                'id': id,
            },
            errors: {
                401: `Unauthorized`,
            },
        });
    }

    /**
     * List porting order requirements
     * Returns a list of all requirements based on country/number type for this porting order.
     * @param id Porting Order id
     * @param pageNumber The page number to load
     * @param pageSize The size of the page
     * @returns any Successful response
     * @throws ApiError
     */
    public listPortingOrderRequirements(
        id: string,
        pageNumber: number = 1,
        pageSize: number = 20,
    ): CancelablePromise<{
        data?: Array<PortingOrderRequirementDetail>;
        meta?: PaginationMeta;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/porting_orders/{id}/requirements',
            path: {
                'id': id,
            },
            query: {
                'page[number]': pageNumber,
                'page[size]': pageSize,
            },
            errors: {
                401: `Unauthorized`,
                422: `Unprocessable entity. Check message field in response for details.`,
            },
        });
    }

    /**
     * Retrieve the associated V1 sub_request_id and port_request_id
     * Retrieve the associated V1 sub_request_id and port_request_id
     * @param id Porting Order id
     * @returns any Successful response
     * @throws ApiError
     */
    public getPortingOrderSubRequest(
        id: string,
    ): CancelablePromise<{
        data?: GetSubRequestByPortingOrder;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/porting_orders/{id}/sub_request',
            path: {
                'id': id,
            },
            errors: {
                401: `Unauthorized`,
                404: `Porting Order not found`,
            },
        });
    }

    /**
     * List all porting phone numbers
     * Returns a list of your porting phone numbers.
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
     * @returns any Successful response
     * @throws ApiError
     */
    public listPortingPhoneNumbers(
        pageNumber: number = 1,
        pageSize: number = 20,
        filterPortingOrderId?: string,
        filterPortingOrderIdIn?: Array<string>,
        filterSupportKeyEq?: string,
        filterSupportKeyIn?: Array<string>,
        filterPhoneNumber?: string,
        filterPhoneNumberIn?: Array<string>,
        filterPortingOrderStatus?: 'draft' | 'in-process' | 'submitted' | 'exception' | 'foc-date-confirmed' | 'cancel-pending' | 'ported' | 'cancelled',
        filterActivationStatus?: PortingOrderActivationStatus,
        filterPortabilityStatus?: PortabilityStatus,
    ): CancelablePromise<{
        data?: Array<PortingPhoneNumber>;
        meta?: PaginationMeta;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/porting_phone_numbers',
            query: {
                'page[number]': pageNumber,
                'page[size]': pageSize,
                'filter[porting_order_id]': filterPortingOrderId,
                'filter[porting_order_id][in][]': filterPortingOrderIdIn,
                'filter[support_key][eq]': filterSupportKeyEq,
                'filter[support_key][in][]': filterSupportKeyIn,
                'filter[phone_number]': filterPhoneNumber,
                'filter[phone_number][in][]': filterPhoneNumberIn,
                'filter[porting_order_status]': filterPortingOrderStatus,
                'filter[activation_status]': filterActivationStatus,
                'filter[portability_status]': filterPortabilityStatus,
            },
            errors: {
                401: `Unauthorized`,
                422: `Unprocessable entity. Check message field in response for details.`,
            },
        });
    }

}
