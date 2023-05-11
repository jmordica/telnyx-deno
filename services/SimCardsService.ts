/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BulkSIMCardAction } from '../models/BulkSIMCardAction.ts';
import type { Error } from '../models/Error.ts';
import type { Errors } from '../models/Errors.ts';
import type { Id } from '../models/Id.ts';
import type { MobileOperatorNetworkPreferencesRequest } from '../models/MobileOperatorNetworkPreferencesRequest.ts';
import type { MobileOperatorNetworksPreferencesRequest } from '../models/MobileOperatorNetworksPreferencesRequest.ts';
import type { PaginationMeta } from '../models/PaginationMeta.ts';
import type { SIMCard } from '../models/SIMCard.ts';
import type { SIMCardAction } from '../models/SIMCardAction.ts';
import type { SimCardDataUsageNotification } from '../models/SimCardDataUsageNotification.ts';
import type { SIMCardDeviceDetails } from '../models/SIMCardDeviceDetails.ts';
import type { SIMCardNetworkPreferenceWithOTAUpdates } from '../models/SIMCardNetworkPreferenceWithOTAUpdates.ts';
import type { SIMCardPublicIP } from '../models/SIMCardPublicIP.ts';
import type { SIMCardRegistration } from '../models/SIMCardRegistration.ts';
import type { SIMCardRegistrationCodeValidations } from '../models/SIMCardRegistrationCodeValidations.ts';
import type { SimpleSIMCard } from '../models/SimpleSIMCard.ts';
import type { WirelessConnectivityLog } from '../models/WirelessConnectivityLog.ts';

import type { CancelablePromise } from '../core/CancelablePromise.ts';
import type { BaseHttpRequest } from '../core/BaseHttpRequest.ts';

export class SimCardsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Bulk Network Preferences for SIM cards
     * This API allows dispatching the same operation described for the PUT sim_cards/:sim_card_id/network_preferences API for multiple SIM cards at once.<br/><br/>
     * Although, a SIM card network preference may fail individually under any validation triggered as a consequence of its state. For example, a SIM can't have an in-progress OTA update for applying a Network Preference, so they'll fail when requested in this API. In that scenario, the specific error will be present in the response along with the successful definitions in the "errors" response node.
     *
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public bulkSimCardNetworkPreferences(
        requestBody?: {
            sim_card_ids?: Array<string>;
            mobile_operator_networks_preferences?: MobileOperatorNetworksPreferencesRequest;
        },
    ): CancelablePromise<{
        /**
         * Multi requested SIM cards network preferences.
         */
        data?: Array<SIMCardNetworkPreferenceWithOTAUpdates>;
        errors?: Array<Error>;
    }> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/actions/network_preferences/sim_cards',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Unprocessable entity. Check the 'detail' field in response for details.`,
            },
        });
    }

    /**
     * Register SIM cards
     * Register the SIM cards associated with the provided registration codes to the current user's account.<br/><br/>
     * If <code>sim_card_group_id</code> is provided, the SIM cards will be associated with that group. Otherwise, the default group for the current user will be used.<br/><br/>
     *
     * @param requestBody
     * @returns any Successful response
     * @throws ApiError
     */
    public simCardRegister(
        requestBody: SIMCardRegistration,
    ): CancelablePromise<{
        /**
         * Successfully registered SIM cards.
         */
        data?: Array<SimpleSIMCard>;
        errors?: Array<Error>;
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/actions/register/sim_cards',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * List SIM card data usage notifications
     * Lists a paginated collection of SIM card data usage notifications. It enables exploring the collection using specific filters.
     * @param pageNumber The page number to load
     * @param pageSize The size of the page
     * @param filterSimCardId A valid SIM card ID.
     * @returns any Successful response
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public listSimCardDataUsageNotifications(
        pageNumber: number = 1,
        pageSize: number = 20,
        filterSimCardId?: string,
    ): CancelablePromise<{
        data?: Array<SimCardDataUsageNotification>;
        meta?: PaginationMeta;
    } | Errors> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/sim_card_data_usage_notifications',
            query: {
                'page[number]': pageNumber,
                'page[size]': pageSize,
                'filter[sim_card_id]': filterSimCardId,
            },
        });
    }

    /**
     * Create a new SIM card data usage notification
     * Creates a new SIM card data usage notification.
     * @param requestBody
     * @returns Errors Unexpected error
     * @returns any Successful response
     * @throws ApiError
     */
    public simCardDataUsageNotificationsPost(
        requestBody: {
            /**
             * The identification UUID of the related SIM card resource.
             */
            sim_card_id: string;
            /**
             * Data usage threshold that will trigger the notification.
             */
            threshold: {
                amount?: string;
                unit?: 'MB' | 'GB.ts';
            };
        },
    ): CancelablePromise<Errors | {
        data?: SimCardDataUsageNotification;
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/sim_card_data_usage_notifications',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Delete SIM card data usage notifications
     * Delete the SIM Card Data Usage Notification.
     * @param id Identifies the resource.
     * @returns any Successful response
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public simCardDataUsageNotificationsDelete(
        id: string,
    ): CancelablePromise<{
        data?: SimCardDataUsageNotification;
    } | Errors> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/sim_card_data_usage_notifications/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Get a single SIM card data usage notification
     * Get a single SIM Card Data Usage Notification.
     * @param id Identifies the resource.
     * @returns any Successful response
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public simCardDataUsageNotificationsGet(
        id: string,
    ): CancelablePromise<{
        data?: SimCardDataUsageNotification;
    } | Errors> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/sim_card_data_usage_notifications/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Resource not found`,
            },
        });
    }

    /**
     * Updates information for a SIM Card Data Usage Notification
     * Updates information for a SIM Card Data Usage Notification.
     * @param id Identifies the resource.
     * @param requestBody
     * @returns any Successful response
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public simCardDataUsageNotificationsPatch(
        id: string,
        requestBody: SimCardDataUsageNotification,
    ): CancelablePromise<{
        data?: SimCardDataUsageNotification;
    } | Errors> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/sim_card_data_usage_notifications/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get all SIM cards
     * Get all SIM cards belonging to the user that match the given filters.
     * @param pageNumber The page number to load
     * @param pageSize The size of the page
     * @param includeSimCardGroup It includes the associated SIM card group object in the response when present.
     * @param filterSimCardGroupId A valid SIM card group ID.
     * @param filterTags A list of SIM card tags to filter on.<br/><br/>
     * If the SIM card contains <b><i>all</i></b> of the given <code>tags</code> they will be found.<br/><br/>
     * For example, if the SIM cards have the following tags: <ul>
     * <li><code>['customers', 'staff', 'test']</code>
     * <li><code>['test']</code></li>
     * <li><code>['customers']</code></li>
     * </ul>
     * Searching for <code>['customers', 'test']</code> returns only the first because it's the only one with both tags.<br/> Searching for <code>test</code> returns the first two SIMs, because both of them have such tag.<br/> Searching for <code>customers</code> returns the first and last SIMs.<br/>
     *
     * @param filterIccid A search string to partially match for the SIM card's ICCID.
     * @param filterStatus Filter by a SIM card's status.
     * @returns any Successful response
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public simCardsGet(
        pageNumber: number = 1,
        pageSize: number = 20,
        includeSimCardGroup: boolean = false,
        filterSimCardGroupId?: string,
        filterTags?: Array<string>,
        filterIccid?: string,
        filterStatus?: Array<'enabled' | 'disabled' | 'standby' | 'data_limit_exceeded' | 'unauthorized_imei'>,
    ): CancelablePromise<{
        data?: Array<SimpleSIMCard>;
        meta?: PaginationMeta;
    } | Errors> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/sim_cards',
            query: {
                'page[number]': pageNumber,
                'page[size]': pageSize,
                'include_sim_card_group': includeSimCardGroup,
                'filter[sim_card_group_id]': filterSimCardGroupId,
                'filter[tags]': filterTags,
                'filter[iccid]': filterIccid,
                'filter[status]': filterStatus,
            },
        });
    }

    /**
     * Request bulk setting SIM card public IPs.
     * This API triggers an asynchronous operation to set a public IP for each of the specified SIM cards.<br/>
     * For each SIM Card a SIM Card Action will be generated. The status of the SIM Card Action can be followed through the [List SIM Card Action](https://developersdev.telnyx.com/docs/api/v2/wireless/SIM-Card-Actions#ListSIMCardActions) API.
     *
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public bulkSetPublicIPs(
        requestBody?: {
            sim_card_ids: Array<Id>;
        },
    ): CancelablePromise<{
        data?: BulkSIMCardAction;
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/sim_cards/actions/bulk_set_public_ips',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Unprocessable entity. Check the 'detail' field in response for details.`,
            },
        });
    }

    /**
     * Validate SIM cards registration codes
     * It validates whether SIM card registration codes are valid or not.
     * @param requestBody
     * @returns SIMCardRegistrationCodeValidations Successful
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public postValidateRegistrationCodes(
        requestBody: {
            registration_codes?: Array<string>;
        },
    ): CancelablePromise<SIMCardRegistrationCodeValidations | Errors> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/sim_cards/actions/validate_registration_codes',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Deletes a SIM card
     * The SIM card will be decommissioned, removed from your account and you will stop being charged.<br />The SIM card won't be able to connect to the network after the deletion is completed, thus making it impossible to consume data.<br/>
     * Transitioning to the disabled state may take a period of time.</br>
     * Until the transition is completed, the SIM card status will be disabling <code>disabling</code>.<br />In order to re-enable the SIM card, you will need to re-register it.
     * @param id Identifies the resource.
     * @returns any Successful response
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public simCardDelete(
        id: string,
    ): CancelablePromise<{
        data?: SIMCard;
    } | Errors> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/sim_cards/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Get SIM card
     * Returns the details regarding a specific SIM card.
     * @param id Identifies the resource.
     * @param includeSimCardGroup It includes the associated SIM card group object in the response when present.
     * @returns any Successful response
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public simCardGet(
        id: string,
        includeSimCardGroup: boolean = false,
    ): CancelablePromise<{
        data?: SIMCard;
    } | Errors> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/sim_cards/{id}',
            path: {
                'id': id,
            },
            query: {
                'include_sim_card_group': includeSimCardGroup,
            },
        });
    }

    /**
     * Update a SIM card
     * Updates SIM card data
     * @param id Identifies the resource.
     * @param requestBody
     * @returns any Successful response
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public simCardUpdate(
        id: string,
        requestBody: SIMCard,
    ): CancelablePromise<{
        data?: SIMCard;
    } | Errors> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/sim_cards/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Delete network preferences for a SIM card
     * This API deletes network preferences for a SIM card.<br/>
     * The API will trigger an asynchronous operation called a SIM Card Action. Creating network preferences may take a period of time. The status of the SIM Card Action can be followed through the [List SIM Card Action](https://developersdev.telnyx.com/docs/api/v2/wireless/SIM-Card-Actions#ListSIMCardActions) API.
     *
     * @param id Identifies the resource.
     * @returns Errors Unexpected error
     * @returns any Successful Response
     * @throws ApiError
     */
    public deleteNetworkPreference(
        id: string,
    ): CancelablePromise<Errors | {
        data?: SIMCardAction;
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/sim_cards/{id}/actions/delete_network_preferences',
            path: {
                'id': id,
            },
            errors: {
                422: `Unprocessable entity. Check the 'detail' field in response for details.`,
            },
        });
    }

    /**
     * Request a SIM card disable
     * This API disables a SIM card, disconnecting it from the network and making it impossible to consume data.<br/>
     * The API will trigger an asynchronous operation called a SIM Card Action. Transitioning to the disabled state may take a period of time. The status of the SIM Card Action can be followed through the [List SIM Card Action](https://developers.telnyx.com/docs/api/v2/wireless/SIM-Card-Actions#ListSIMCardActions) API.
     *
     * @param id Identifies the resource.
     * @returns Errors Unexpected error
     * @returns any Successful Response
     * @throws ApiError
     */
    public simCardDisable(
        id: string,
    ): CancelablePromise<Errors | {
        data?: SIMCardAction;
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/sim_cards/{id}/actions/disable',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Request a SIM card enable
     * This API enables a SIM card, connecting it to the network and making it possible to consume data.<br/>
     * To enable a SIM card, it must be associated with a SIM card group.<br/>
     * The API will trigger an asynchronous operation called a SIM Card Action. Transitioning to the enabled state may take a period of time. The status of the SIM Card Action can be followed through the [List SIM Card Action](https://developers.telnyx.com/docs/api/v2/wireless/SIM-Card-Actions#ListSIMCardActions) API.
     *
     * @param id Identifies the resource.
     * @returns Errors Unexpected error
     * @returns any Successful Response
     * @throws ApiError
     */
    public simCardEnable(
        id: string,
    ): CancelablePromise<Errors | {
        data?: SIMCardAction;
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/sim_cards/{id}/actions/enable',
            path: {
                'id': id,
            },
            errors: {
                422: `Unprocessable entity. Check the 'detail' field in response for details.`,
            },
        });
    }

    /**
     * Request removing a SIM card public IP
     * This API removes an existing public IP from a SIM card. <br/><br/>
     * The API will trigger an asynchronous operation called a SIM Card Action. The status of the SIM Card Action can be followed through the [List SIM Card Action](https://developers.telnyx.com/docs/api/v2/wireless/SIM-Card-Actions#ListSIMCardActions) API.
     * @param id Identifies the resource.
     * @returns Errors Unexpected error
     * @returns any Successful Response
     * @throws ApiError
     */
    public removeSimCardPublicIp(
        id: string,
    ): CancelablePromise<Errors | {
        data?: SIMCardAction;
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/sim_cards/{id}/actions/remove_public_ip',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Create or update network preferences for a SIM card
     * This API sets network preferences for a SIM card.<br/>
     * Every SIM card has default network preferences defined on Telnyx. These preferences will determine how a SIMCard will connect to the network by considering a list of preferable operators.<br/><br/>
     * The SIM card needs to be attached to the network so this can connect and SMS must be available, otherwise, the operation will fail. This preference will only be respected if the network is available, otherwise the strongest signal will be used. <br/><br/>
     * The API will trigger an asynchronous operation called a SIM Card Action. Creating network preferences may take a period of time. The status of the SIM Card Action can be followed through the [List SIM Card Action](https://developersdev.telnyx.com/docs/api/v2/wireless/SIM-Card-Actions#ListSIMCardActions) API.
     *
     * @param id Identifies the resource.
     * @returns Errors Unexpected error
     * @returns any Successful Response
     * @throws ApiError
     */
    public setNetworkPreference(
        id: string,
    ): CancelablePromise<Errors | {
        data?: SIMCardAction;
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/sim_cards/{id}/actions/set_network_preferences',
            path: {
                'id': id,
            },
            errors: {
                422: `Unprocessable entity. Check the 'detail' field in response for details.`,
            },
        });
    }

    /**
     * Request setting a SIM card public IP
     * This API makes a SIM card reachable on the public internet by mapping a random public IP to the SIM card. <br/><br/>
     * The API will trigger an asynchronous operation called a SIM Card Action. The status of the SIM Card Action can be followed through the [List SIM Card Action](https://developers.telnyx.com/docs/api/v2/wireless/SIM-Card-Actions#ListSIMCardActions) API. <br/><br/>
     * Setting a Public IP to a SIM Card incurs a charge and will only succeed if the account has sufficient funds.
     * @param id Identifies the resource.
     * @returns Errors Unexpected error
     * @returns any Successful Response
     * @throws ApiError
     */
    public setSimCardPublicIp(
        id: string,
    ): CancelablePromise<Errors | {
        data?: SIMCardAction;
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/sim_cards/{id}/actions/set_public_ip',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Request setting a SIM card to standby
     * The SIM card will be able to connect to the network once the process to set it to standby has been completed, thus making it possible to consume data.<br/>
     * To set a SIM card to standby, it must be associated with SIM card group.<br/>
     * The API will trigger an asynchronous operation called a SIM Card Action. Transitioning to the standby state may take a period of time. The status of the SIM Card Action can be followed through the [List SIM Card Action](https://developers.telnyx.com/docs/api/v2/wireless/SIM-Card-Actions#ListSIMCardActions) API.
     *
     * @param id Identifies the resource.
     * @returns Errors Unexpected error
     * @returns any Successful Response
     * @throws ApiError
     */
    public simCardSetStandby(
        id: string,
    ): CancelablePromise<Errors | {
        data?: SIMCardAction;
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/sim_cards/{id}/actions/set_standby',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Get SIM card device details
     * It returns the device details where a SIM card is currently being used.
     *
     * @param simCardId Identifies a SIM card.
     * @returns any Successful response
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public simCardDeviceDetailsGet(
        simCardId: string,
    ): CancelablePromise<{
        data?: SIMCardDeviceDetails;
    } | Errors> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/sim_cards/{sim_card_id}/device_details',
            path: {
                'sim_card_id': simCardId,
            },
        });
    }

    /**
     * DELETE network preferences
     * This API asynchronously removes the custom-defined network preferences settings. After this operation is done the Telnyx default settings, the same applied for an unaltered SIM card, will be in place.
     *
     * @param simCardId Identifies a SIM card.
     * @returns Errors Unexpected error
     * @returns any A successful network preferences deletion response. <br/><br/>
     * The delete won't be done right away - this is an asynchronous operation. The request will return the resource with an in-progress OTA update resource (in the ota_updates node) representing the delete operation. Similarly to the PUT API, the resource will only be deleted when the OTA updated is successfully completed.
     * @throws ApiError
     */
    public simCardNetworkPreferencesDelete(
        simCardId: string,
    ): CancelablePromise<Errors | {
        data?: SIMCardNetworkPreferenceWithOTAUpdates;
    }> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/sim_cards/{sim_card_id}/network_preferences',
            path: {
                'sim_card_id': simCardId,
            },
        });
    }

    /**
     * Get network preferences
     * It returns the network preferences currently applied in the SIM card.
     *
     * @param simCardId Identifies a SIM card.
     * @param includeOtaUpdates It includes the associated OTA update objects in the response when present.
     * @returns any A successful network preferences definition response.
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public simCardNetworkPreferencesGet(
        simCardId: string,
        includeOtaUpdates: boolean = false,
    ): CancelablePromise<{
        data?: SIMCardNetworkPreferenceWithOTAUpdates;
    } | Errors> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/sim_cards/{sim_card_id}/network_preferences',
            path: {
                'sim_card_id': simCardId,
            },
            query: {
                'include_ota_updates': includeOtaUpdates,
            },
        });
    }

    /**
     * Set network preferences
     * This API allows setting or updating a SIM card network preference. <br/><br/>
     * Every SIM card has default network preferences defined on Telnyx. These preferences will determine how a SIMCard will connect to the network by considering a list of preferable operators.<br/><br/>
     * There can be multiple scenarios where an operator can be preferred over another, for example, when a specific mobile operator can provide better network latency or better pricing.
     *
     * @param simCardId Identifies a SIM card.
     * @param requestBody
     * @returns Errors Unexpected error
     * @returns any A successful network preferences definition response. <br/><br/>
     * The sent mobile_operator_networks_preferences parameter won't be applied to the main resource right away - this is an asynchronous operation. While interacting with this API, you will face the following scenarios:
     *
     * * The first request for this API will return an empty mobile_operator_networks_preferences with an in-progress OTA update resource in the ota_updates node containing the exact sent parameters to indicate the operation progress. The value will be applied to the principal object when the OTA update finishes its processing, thus indicating the SIM card network preference current state.
     * * The subsequent requests will contain the current state, that is what's applied to the SIM card settings, and return the related OTA update in the ota_updates node.
     *
     * The returned OTA updated (present in the ota_updates node) will, by default, be the resource related to the operation, not all of them.
     * @throws ApiError
     */
    public simCardNetworkPreferencesPut(
        simCardId: string,
        requestBody?: {
            /**
             * A list of mobile operator networks and the priority that should be applied when the SIM is connecting to the network.
             */
            mobile_operator_networks_preferences?: Array<MobileOperatorNetworkPreferencesRequest>;
        },
    ): CancelablePromise<Errors | {
        data?: SIMCardNetworkPreferenceWithOTAUpdates;
    }> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/sim_cards/{sim_card_id}/network_preferences',
            path: {
                'sim_card_id': simCardId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get SIM card public IP definition
     * It returns the public IP requested for a SIM card.
     *
     * @param simCardId Identifies a SIM card.
     * @returns any Successful response
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public simCardPublicIpGet(
        simCardId: string,
    ): CancelablePromise<{
        data?: SIMCardPublicIP;
    } | Errors> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/sim_cards/{sim_card_id}/public_ip',
            path: {
                'sim_card_id': simCardId,
            },
        });
    }

    /**
     * List wireless connectivity logs
     * This API allows listing a paginated collection of Wireless Connectivity Logs associated with a SIM Card, for troubleshooting purposes.
     * @param simCardId Identifies a SIM card.
     * @param pageNumber The page number to load
     * @param pageSize The size of the page
     * @returns any Successful response
     * @returns Errors Unexpected error
     * @throws ApiError
     */
    public wirelessConnectivityLogsGet(
        simCardId: string,
        pageNumber: number = 1,
        pageSize: number = 20,
    ): CancelablePromise<{
        data?: Array<WirelessConnectivityLog>;
        meta?: PaginationMeta;
    } | Errors> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/sim_cards/{sim_card_id}/wireless_connectivity_logs',
            path: {
                'sim_card_id': simCardId,
            },
            query: {
                'page[number]': pageNumber,
                'page[size]': pageSize,
            },
        });
    }

}
