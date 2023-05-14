// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi.ts';
import {Configuration} from '../configuration.ts';
import {RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http.ts';
import {ObjectSerializer} from '../models/ObjectSerializer.ts';
import {ApiException} from './exception.ts';
import {canConsumeForm, isCodeInRange} from '../util.ts';
import {SecurityAuthentication} from '../auth/auth.ts';


import { BulkSIMCardNetworkPreferences202Response } from '../models/BulkSIMCardNetworkPreferences202Response.ts';
import { BulkSIMCardNetworkPreferencesRequest } from '../models/BulkSIMCardNetworkPreferencesRequest.ts';
import { BulkSetPublicIPs202Response } from '../models/BulkSetPublicIPs202Response.ts';
import { BulkSetPublicIPsRequest } from '../models/BulkSetPublicIPsRequest.ts';
import { Errors } from '../models/Errors.ts';
import { ListSimCardDataUsageNotifications200Response } from '../models/ListSimCardDataUsageNotifications200Response.ts';
import { PostValidateRegistrationCodesRequest } from '../models/PostValidateRegistrationCodesRequest.ts';
import { SIMCard } from '../models/SIMCard.ts';
import { SIMCardDeviceDetailsGet200Response } from '../models/SIMCardDeviceDetailsGet200Response.ts';
import { SIMCardNetworkPreferencesGet200Response } from '../models/SIMCardNetworkPreferencesGet200Response.ts';
import { SIMCardNetworkPreferencesPutRequest } from '../models/SIMCardNetworkPreferencesPutRequest.ts';
import { SIMCardPublicIPGet200Response } from '../models/SIMCardPublicIPGet200Response.ts';
import { SIMCardRegistration } from '../models/SIMCardRegistration.ts';
import { SIMCardRegistrationCodeValidations } from '../models/SIMCardRegistrationCodeValidations.ts';
import { SimCardActionGet200Response } from '../models/SimCardActionGet200Response.ts';
import { SimCardDataUsageNotification } from '../models/SimCardDataUsageNotification.ts';
import { SimCardDataUsageNotificationsPost201Response } from '../models/SimCardDataUsageNotificationsPost201Response.ts';
import { SimCardDataUsageNotificationsPostRequest } from '../models/SimCardDataUsageNotificationsPostRequest.ts';
import { SimCardGet200Response } from '../models/SimCardGet200Response.ts';
import { SimCardRegister202Response } from '../models/SimCardRegister202Response.ts';
import { SimCardsGet200Response } from '../models/SimCardsGet200Response.ts';
import { WirelessConnectivityLogsGet200Response } from '../models/WirelessConnectivityLogsGet200Response.ts';

/**
 * no description
 */
export class SIMCardsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * This API allows dispatching the same operation described for the PUT sim_cards/:sim_card_id/network_preferences API for multiple SIM cards at once.<br/><br/> Although, a SIM card network preference may fail individually under any validation triggered as a consequence of its state. For example, a SIM can\'t have an in-progress OTA update for applying a Network Preference, so they\'ll fail when requested in this API. In that scenario, the specific error will be present in the response along with the successful definitions in the \"errors\" response node. 
     * Bulk Network Preferences for SIM cards
     * @param bulkSIMCardNetworkPreferencesRequest 
     */
    public async bulkSIMCardNetworkPreferences(bulkSIMCardNetworkPreferencesRequest?: BulkSIMCardNetworkPreferencesRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;


        // Path Params
        const localVarPath = '/actions/network_preferences/sim_cards';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(bulkSIMCardNetworkPreferencesRequest, "BulkSIMCardNetworkPreferencesRequest", ""),
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
     * This API triggers an asynchronous operation to set a public IP for each of the specified SIM cards.<br/> For each SIM Card a SIM Card Action will be generated. The status of the SIM Card Action can be followed through the [List SIM Card Action](https://developersdev.telnyx.com/docs/api/v2/wireless/SIM-Card-Actions#ListSIMCardActions) API. 
     * Request bulk setting SIM card public IPs.
     * @param bulkSetPublicIPsRequest 
     */
    public async bulkSetPublicIPs(bulkSetPublicIPsRequest?: BulkSetPublicIPsRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;


        // Path Params
        const localVarPath = '/sim_cards/actions/bulk_set_public_ips';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(bulkSetPublicIPsRequest, "BulkSetPublicIPsRequest", ""),
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
     * This API deletes network preferences for a SIM card.<br/> The API will trigger an asynchronous operation called a SIM Card Action. Creating network preferences may take a period of time. The status of the SIM Card Action can be followed through the [List SIM Card Action](https://developersdev.telnyx.com/docs/api/v2/wireless/SIM-Card-Actions#ListSIMCardActions) API. 
     * Delete network preferences for a SIM card
     * @param id Identifies the resource.
     */
    public async deleteNetworkPreference(id: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("SIMCardsApi", "deleteNetworkPreference", "id");
        }


        // Path Params
        const localVarPath = '/sim_cards/{id}/actions/delete_network_preferences'
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
     * Lists a paginated collection of SIM card data usage notifications. It enables exploring the collection using specific filters.
     * List SIM card data usage notifications
     * @param pageNumber The page number to load
     * @param pageSize The size of the page
     * @param filterSimCardId A valid SIM card ID.
     */
    public async listSimCardDataUsageNotifications(pageNumber?: number, pageSize?: number, filterSimCardId?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;




        // Path Params
        const localVarPath = '/sim_card_data_usage_notifications';

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
        if (filterSimCardId !== undefined) {
            requestContext.setQueryParam("filter[sim_card_id]", ObjectSerializer.serialize(filterSimCardId, "string", "uuid"));
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
     * It validates whether SIM card registration codes are valid or not.
     * Validate SIM cards registration codes
     * @param postValidateRegistrationCodesRequest 
     */
    public async postValidateRegistrationCodes(postValidateRegistrationCodesRequest: PostValidateRegistrationCodesRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'postValidateRegistrationCodesRequest' is not null or undefined
        if (postValidateRegistrationCodesRequest === null || postValidateRegistrationCodesRequest === undefined) {
            throw new RequiredError("SIMCardsApi", "postValidateRegistrationCodes", "postValidateRegistrationCodesRequest");
        }


        // Path Params
        const localVarPath = '/sim_cards/actions/validate_registration_codes';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(postValidateRegistrationCodesRequest, "PostValidateRegistrationCodesRequest", ""),
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
     * This API removes an existing public IP from a SIM card. <br/><br/>  The API will trigger an asynchronous operation called a SIM Card Action. The status of the SIM Card Action can be followed through the [List SIM Card Action](https://developers.telnyx.com/docs/api/v2/wireless/SIM-Card-Actions#ListSIMCardActions) API.
     * Request removing a SIM card public IP
     * @param id Identifies the resource.
     */
    public async removeSIMCardPublicIP(id: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("SIMCardsApi", "removeSIMCardPublicIP", "id");
        }


        // Path Params
        const localVarPath = '/sim_cards/{id}/actions/remove_public_ip'
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
     * It returns the device details where a SIM card is currently being used. 
     * Get SIM card device details
     * @param simCardId Identifies a SIM card.
     */
    public async sIMCardDeviceDetailsGet(simCardId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'simCardId' is not null or undefined
        if (simCardId === null || simCardId === undefined) {
            throw new RequiredError("SIMCardsApi", "sIMCardDeviceDetailsGet", "simCardId");
        }


        // Path Params
        const localVarPath = '/sim_cards/{sim_card_id}/device_details'
            .replace('{' + 'sim_card_id' + '}', encodeURIComponent(String(simCardId)));

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
     * This API asynchronously removes the custom-defined network preferences settings. After this operation is done the Telnyx default settings, the same applied for an unaltered SIM card, will be in place. 
     * DELETE network preferences
     * @param simCardId Identifies a SIM card.
     */
    public async sIMCardNetworkPreferencesDelete(simCardId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'simCardId' is not null or undefined
        if (simCardId === null || simCardId === undefined) {
            throw new RequiredError("SIMCardsApi", "sIMCardNetworkPreferencesDelete", "simCardId");
        }


        // Path Params
        const localVarPath = '/sim_cards/{sim_card_id}/network_preferences'
            .replace('{' + 'sim_card_id' + '}', encodeURIComponent(String(simCardId)));

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
     * It returns the network preferences currently applied in the SIM card. 
     * Get network preferences
     * @param simCardId Identifies a SIM card.
     * @param includeOtaUpdates It includes the associated OTA update objects in the response when present.
     */
    public async sIMCardNetworkPreferencesGet(simCardId: string, includeOtaUpdates?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'simCardId' is not null or undefined
        if (simCardId === null || simCardId === undefined) {
            throw new RequiredError("SIMCardsApi", "sIMCardNetworkPreferencesGet", "simCardId");
        }



        // Path Params
        const localVarPath = '/sim_cards/{sim_card_id}/network_preferences'
            .replace('{' + 'sim_card_id' + '}', encodeURIComponent(String(simCardId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (includeOtaUpdates !== undefined) {
            requestContext.setQueryParam("include_ota_updates", ObjectSerializer.serialize(includeOtaUpdates, "boolean", ""));
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
     * This API allows setting or updating a SIM card network preference. <br/><br/> Every SIM card has default network preferences defined on Telnyx. These preferences will determine how a SIMCard will connect to the network by considering a list of preferable operators.<br/><br/> There can be multiple scenarios where an operator can be preferred over another, for example, when a specific mobile operator can provide better network latency or better pricing. 
     * Set network preferences
     * @param simCardId Identifies a SIM card.
     * @param sIMCardNetworkPreferencesPutRequest 
     */
    public async sIMCardNetworkPreferencesPut(simCardId: string, sIMCardNetworkPreferencesPutRequest?: SIMCardNetworkPreferencesPutRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'simCardId' is not null or undefined
        if (simCardId === null || simCardId === undefined) {
            throw new RequiredError("SIMCardsApi", "sIMCardNetworkPreferencesPut", "simCardId");
        }



        // Path Params
        const localVarPath = '/sim_cards/{sim_card_id}/network_preferences'
            .replace('{' + 'sim_card_id' + '}', encodeURIComponent(String(simCardId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(sIMCardNetworkPreferencesPutRequest, "SIMCardNetworkPreferencesPutRequest", ""),
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
     * It returns the public IP requested for a SIM card. 
     * Get SIM card public IP definition
     * @param simCardId Identifies a SIM card.
     */
    public async sIMCardPublicIPGet(simCardId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'simCardId' is not null or undefined
        if (simCardId === null || simCardId === undefined) {
            throw new RequiredError("SIMCardsApi", "sIMCardPublicIPGet", "simCardId");
        }


        // Path Params
        const localVarPath = '/sim_cards/{sim_card_id}/public_ip'
            .replace('{' + 'sim_card_id' + '}', encodeURIComponent(String(simCardId)));

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
     * This API sets network preferences for a SIM card.<br/> Every SIM card has default network preferences defined on Telnyx. These preferences will determine how a SIMCard will connect to the network by considering a list of preferable operators.<br/><br/> The SIM card needs to be attached to the network so this can connect and SMS must be available, otherwise, the operation will fail. This preference will only be respected if the network is available, otherwise the strongest signal will be used. <br/><br/> The API will trigger an asynchronous operation called a SIM Card Action. Creating network preferences may take a period of time. The status of the SIM Card Action can be followed through the [List SIM Card Action](https://developersdev.telnyx.com/docs/api/v2/wireless/SIM-Card-Actions#ListSIMCardActions) API. 
     * Create or update network preferences for a SIM card
     * @param id Identifies the resource.
     */
    public async setNetworkPreference(id: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("SIMCardsApi", "setNetworkPreference", "id");
        }


        // Path Params
        const localVarPath = '/sim_cards/{id}/actions/set_network_preferences'
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
     * This API makes a SIM card reachable on the public internet by mapping a random public IP to the SIM card. <br/><br/>  The API will trigger an asynchronous operation called a SIM Card Action. The status of the SIM Card Action can be followed through the [List SIM Card Action](https://developers.telnyx.com/docs/api/v2/wireless/SIM-Card-Actions#ListSIMCardActions) API. <br/><br/>  Setting a Public IP to a SIM Card incurs a charge and will only succeed if the account has sufficient funds.
     * Request setting a SIM card public IP
     * @param id Identifies the resource.
     */
    public async setSIMCardPublicIP(id: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("SIMCardsApi", "setSIMCardPublicIP", "id");
        }


        // Path Params
        const localVarPath = '/sim_cards/{id}/actions/set_public_ip'
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
     * Delete the SIM Card Data Usage Notification.
     * Delete SIM card data usage notifications
     * @param id Identifies the resource.
     */
    public async simCardDataUsageNotificationsDelete(id: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("SIMCardsApi", "simCardDataUsageNotificationsDelete", "id");
        }


        // Path Params
        const localVarPath = '/sim_card_data_usage_notifications/{id}'
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
     * Get a single SIM Card Data Usage Notification.
     * Get a single SIM card data usage notification
     * @param id Identifies the resource.
     */
    public async simCardDataUsageNotificationsGet(id: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("SIMCardsApi", "simCardDataUsageNotificationsGet", "id");
        }


        // Path Params
        const localVarPath = '/sim_card_data_usage_notifications/{id}'
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
     * Updates information for a SIM Card Data Usage Notification.
     * Updates information for a SIM Card Data Usage Notification
     * @param id Identifies the resource.
     * @param simCardDataUsageNotification 
     */
    public async simCardDataUsageNotificationsPatch(id: string, simCardDataUsageNotification: SimCardDataUsageNotification, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("SIMCardsApi", "simCardDataUsageNotificationsPatch", "id");
        }


        // verify required parameter 'simCardDataUsageNotification' is not null or undefined
        if (simCardDataUsageNotification === null || simCardDataUsageNotification === undefined) {
            throw new RequiredError("SIMCardsApi", "simCardDataUsageNotificationsPatch", "simCardDataUsageNotification");
        }


        // Path Params
        const localVarPath = '/sim_card_data_usage_notifications/{id}'
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
            ObjectSerializer.serialize(simCardDataUsageNotification, "SimCardDataUsageNotification", ""),
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
     * Creates a new SIM card data usage notification.
     * Create a new SIM card data usage notification
     * @param simCardDataUsageNotificationsPostRequest 
     */
    public async simCardDataUsageNotificationsPost(simCardDataUsageNotificationsPostRequest: SimCardDataUsageNotificationsPostRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'simCardDataUsageNotificationsPostRequest' is not null or undefined
        if (simCardDataUsageNotificationsPostRequest === null || simCardDataUsageNotificationsPostRequest === undefined) {
            throw new RequiredError("SIMCardsApi", "simCardDataUsageNotificationsPost", "simCardDataUsageNotificationsPostRequest");
        }


        // Path Params
        const localVarPath = '/sim_card_data_usage_notifications';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(simCardDataUsageNotificationsPostRequest, "SimCardDataUsageNotificationsPostRequest", ""),
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
     * The SIM card will be decommissioned, removed from your account and you will stop being charged.<br />The SIM card won\'t be able to connect to the network after the deletion is completed, thus making it impossible to consume data.<br/> Transitioning to the disabled state may take a period of time.</br> Until the transition is completed, the SIM card status will be disabling <code>disabling</code>.<br />In order to re-enable the SIM card, you will need to re-register it.
     * Deletes a SIM card
     * @param id Identifies the resource.
     */
    public async simCardDelete(id: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("SIMCardsApi", "simCardDelete", "id");
        }


        // Path Params
        const localVarPath = '/sim_cards/{id}'
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
     * This API disables a SIM card, disconnecting it from the network and making it impossible to consume data.<br/> The API will trigger an asynchronous operation called a SIM Card Action. Transitioning to the disabled state may take a period of time. The status of the SIM Card Action can be followed through the [List SIM Card Action](https://developers.telnyx.com/docs/api/v2/wireless/SIM-Card-Actions#ListSIMCardActions) API. 
     * Request a SIM card disable
     * @param id Identifies the resource.
     */
    public async simCardDisable(id: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("SIMCardsApi", "simCardDisable", "id");
        }


        // Path Params
        const localVarPath = '/sim_cards/{id}/actions/disable'
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
     * This API enables a SIM card, connecting it to the network and making it possible to consume data.<br/> To enable a SIM card, it must be associated with a SIM card group.<br/> The API will trigger an asynchronous operation called a SIM Card Action. Transitioning to the enabled state may take a period of time. The status of the SIM Card Action can be followed through the [List SIM Card Action](https://developers.telnyx.com/docs/api/v2/wireless/SIM-Card-Actions#ListSIMCardActions) API. 
     * Request a SIM card enable
     * @param id Identifies the resource.
     */
    public async simCardEnable(id: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("SIMCardsApi", "simCardEnable", "id");
        }


        // Path Params
        const localVarPath = '/sim_cards/{id}/actions/enable'
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
     * Returns the details regarding a specific SIM card.
     * Get SIM card
     * @param id Identifies the resource.
     * @param includeSimCardGroup It includes the associated SIM card group object in the response when present.
     */
    public async simCardGet(id: string, includeSimCardGroup?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("SIMCardsApi", "simCardGet", "id");
        }



        // Path Params
        const localVarPath = '/sim_cards/{id}'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (includeSimCardGroup !== undefined) {
            requestContext.setQueryParam("include_sim_card_group", ObjectSerializer.serialize(includeSimCardGroup, "boolean", ""));
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
     * Register the SIM cards associated with the provided registration codes to the current user\'s account.<br/><br/> If <code>sim_card_group_id</code> is provided, the SIM cards will be associated with that group. Otherwise, the default group for the current user will be used.<br/><br/> 
     * Register SIM cards
     * @param sIMCardRegistration 
     */
    public async simCardRegister(sIMCardRegistration: SIMCardRegistration, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'sIMCardRegistration' is not null or undefined
        if (sIMCardRegistration === null || sIMCardRegistration === undefined) {
            throw new RequiredError("SIMCardsApi", "simCardRegister", "sIMCardRegistration");
        }


        // Path Params
        const localVarPath = '/actions/register/sim_cards';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(sIMCardRegistration, "SIMCardRegistration", ""),
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
     * The SIM card will be able to connect to the network once the process to set it to standby has been completed, thus making it possible to consume data.<br/> To set a SIM card to standby, it must be associated with SIM card group.<br/> The API will trigger an asynchronous operation called a SIM Card Action. Transitioning to the standby state may take a period of time. The status of the SIM Card Action can be followed through the [List SIM Card Action](https://developers.telnyx.com/docs/api/v2/wireless/SIM-Card-Actions#ListSIMCardActions) API. 
     * Request setting a SIM card to standby
     * @param id Identifies the resource.
     */
    public async simCardSetStandby(id: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("SIMCardsApi", "simCardSetStandby", "id");
        }


        // Path Params
        const localVarPath = '/sim_cards/{id}/actions/set_standby'
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
     * Updates SIM card data
     * Update a SIM card
     * @param id Identifies the resource.
     * @param sIMCard 
     */
    public async simCardUpdate(id: string, sIMCard: SIMCard, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("SIMCardsApi", "simCardUpdate", "id");
        }


        // verify required parameter 'sIMCard' is not null or undefined
        if (sIMCard === null || sIMCard === undefined) {
            throw new RequiredError("SIMCardsApi", "simCardUpdate", "sIMCard");
        }


        // Path Params
        const localVarPath = '/sim_cards/{id}'
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
            ObjectSerializer.serialize(sIMCard, "SIMCard", ""),
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
     * Get all SIM cards belonging to the user that match the given filters.
     * Get all SIM cards
     * @param pageNumber The page number to load
     * @param pageSize The size of the page
     * @param includeSimCardGroup It includes the associated SIM card group object in the response when present.
     * @param filterSimCardGroupId A valid SIM card group ID.
     * @param filterTags A list of SIM card tags to filter on.&lt;br/&gt;&lt;br/&gt; If the SIM card contains &lt;b&gt;&lt;i&gt;all&lt;/i&gt;&lt;/b&gt; of the given &lt;code&gt;tags&lt;/code&gt; they will be found.&lt;br/&gt;&lt;br/&gt; For example, if the SIM cards have the following tags: &lt;ul&gt;   &lt;li&gt;&lt;code&gt;[\&#39;customers\&#39;, \&#39;staff\&#39;, \&#39;test\&#39;]&lt;/code&gt;   &lt;li&gt;&lt;code&gt;[\&#39;test\&#39;]&lt;/code&gt;&lt;/li&gt;   &lt;li&gt;&lt;code&gt;[\&#39;customers\&#39;]&lt;/code&gt;&lt;/li&gt; &lt;/ul&gt; Searching for &lt;code&gt;[\&#39;customers\&#39;, \&#39;test\&#39;]&lt;/code&gt; returns only the first because it\&#39;s the only one with both tags.&lt;br/&gt; Searching for &lt;code&gt;test&lt;/code&gt; returns the first two SIMs, because both of them have such tag.&lt;br/&gt; Searching for &lt;code&gt;customers&lt;/code&gt; returns the first and last SIMs.&lt;br/&gt; 
     * @param filterIccid A search string to partially match for the SIM card\&#39;s ICCID.
     * @param filterStatus Filter by a SIM card\&#39;s status.
     */
    public async simCardsGet(pageNumber?: number, pageSize?: number, includeSimCardGroup?: boolean, filterSimCardGroupId?: string, filterTags?: Array<string>, filterIccid?: string, filterStatus?: Array<'enabled' | 'disabled' | 'standby' | 'data_limit_exceeded' | 'unauthorized_imei'>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;








        // Path Params
        const localVarPath = '/sim_cards';

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
        if (includeSimCardGroup !== undefined) {
            requestContext.setQueryParam("include_sim_card_group", ObjectSerializer.serialize(includeSimCardGroup, "boolean", ""));
        }

        // Query Params
        if (filterSimCardGroupId !== undefined) {
            requestContext.setQueryParam("filter[sim_card_group_id]", ObjectSerializer.serialize(filterSimCardGroupId, "string", "uuid"));
        }

        // Query Params
        if (filterTags !== undefined) {
            requestContext.setQueryParam("filter[tags]", ObjectSerializer.serialize(filterTags, "Array<string>", ""));
        }

        // Query Params
        if (filterIccid !== undefined) {
            requestContext.setQueryParam("filter[iccid]", ObjectSerializer.serialize(filterIccid, "string", ""));
        }

        // Query Params
        if (filterStatus !== undefined) {
            requestContext.setQueryParam("filter[status]", ObjectSerializer.serialize(filterStatus, "Array<'enabled' | 'disabled' | 'standby' | 'data_limit_exceeded' | 'unauthorized_imei'>", ""));
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
     * This API allows listing a paginated collection of Wireless Connectivity Logs associated with a SIM Card, for troubleshooting purposes.
     * List wireless connectivity logs
     * @param simCardId Identifies a SIM card.
     * @param pageNumber The page number to load
     * @param pageSize The size of the page
     */
    public async wirelessConnectivityLogsGet(simCardId: string, pageNumber?: number, pageSize?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'simCardId' is not null or undefined
        if (simCardId === null || simCardId === undefined) {
            throw new RequiredError("SIMCardsApi", "wirelessConnectivityLogsGet", "simCardId");
        }




        // Path Params
        const localVarPath = '/sim_cards/{sim_card_id}/wireless_connectivity_logs'
            .replace('{' + 'sim_card_id' + '}', encodeURIComponent(String(simCardId)));

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

}

export class SIMCardsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to bulkSIMCardNetworkPreferences
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async bulkSIMCardNetworkPreferences(response: ResponseContext): Promise<BulkSIMCardNetworkPreferences202Response > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("202", response.httpStatusCode)) {
            const body: BulkSIMCardNetworkPreferences202Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BulkSIMCardNetworkPreferences202Response", ""
            ) as BulkSIMCardNetworkPreferences202Response;
            return body;
        }
        if (isCodeInRange("422", response.httpStatusCode)) {
            const body: Errors = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Errors", ""
            ) as Errors;
            throw new ApiException<Errors>(response.httpStatusCode, "Unprocessable entity. Check the \&#39;detail\&#39; field in response for details.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: BulkSIMCardNetworkPreferences202Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BulkSIMCardNetworkPreferences202Response", ""
            ) as BulkSIMCardNetworkPreferences202Response;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to bulkSetPublicIPs
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async bulkSetPublicIPs(response: ResponseContext): Promise<BulkSetPublicIPs202Response > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("202", response.httpStatusCode)) {
            const body: BulkSetPublicIPs202Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BulkSetPublicIPs202Response", ""
            ) as BulkSetPublicIPs202Response;
            return body;
        }
        if (isCodeInRange("422", response.httpStatusCode)) {
            const body: Errors = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Errors", ""
            ) as Errors;
            throw new ApiException<Errors>(response.httpStatusCode, "Unprocessable entity. Check the \&#39;detail\&#39; field in response for details.", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: BulkSetPublicIPs202Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BulkSetPublicIPs202Response", ""
            ) as BulkSetPublicIPs202Response;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteNetworkPreference
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteNetworkPreference(response: ResponseContext): Promise<SimCardActionGet200Response > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("202", response.httpStatusCode)) {
            const body: SimCardActionGet200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SimCardActionGet200Response", ""
            ) as SimCardActionGet200Response;
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
            const body: SimCardActionGet200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SimCardActionGet200Response", ""
            ) as SimCardActionGet200Response;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listSimCardDataUsageNotifications
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listSimCardDataUsageNotifications(response: ResponseContext): Promise<ListSimCardDataUsageNotifications200Response > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ListSimCardDataUsageNotifications200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListSimCardDataUsageNotifications200Response", ""
            ) as ListSimCardDataUsageNotifications200Response;
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
            const body: ListSimCardDataUsageNotifications200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListSimCardDataUsageNotifications200Response", ""
            ) as ListSimCardDataUsageNotifications200Response;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to postValidateRegistrationCodes
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async postValidateRegistrationCodes(response: ResponseContext): Promise<SIMCardRegistrationCodeValidations > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SIMCardRegistrationCodeValidations = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SIMCardRegistrationCodeValidations", ""
            ) as SIMCardRegistrationCodeValidations;
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
            const body: SIMCardRegistrationCodeValidations = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SIMCardRegistrationCodeValidations", ""
            ) as SIMCardRegistrationCodeValidations;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to removeSIMCardPublicIP
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async removeSIMCardPublicIP(response: ResponseContext): Promise<SimCardActionGet200Response > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("202", response.httpStatusCode)) {
            const body: SimCardActionGet200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SimCardActionGet200Response", ""
            ) as SimCardActionGet200Response;
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
            const body: SimCardActionGet200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SimCardActionGet200Response", ""
            ) as SimCardActionGet200Response;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to sIMCardDeviceDetailsGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async sIMCardDeviceDetailsGet(response: ResponseContext): Promise<SIMCardDeviceDetailsGet200Response > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SIMCardDeviceDetailsGet200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SIMCardDeviceDetailsGet200Response", ""
            ) as SIMCardDeviceDetailsGet200Response;
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
            const body: SIMCardDeviceDetailsGet200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SIMCardDeviceDetailsGet200Response", ""
            ) as SIMCardDeviceDetailsGet200Response;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to sIMCardNetworkPreferencesDelete
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async sIMCardNetworkPreferencesDelete(response: ResponseContext): Promise<SIMCardNetworkPreferencesGet200Response > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("202", response.httpStatusCode)) {
            const body: SIMCardNetworkPreferencesGet200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SIMCardNetworkPreferencesGet200Response", ""
            ) as SIMCardNetworkPreferencesGet200Response;
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
            const body: SIMCardNetworkPreferencesGet200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SIMCardNetworkPreferencesGet200Response", ""
            ) as SIMCardNetworkPreferencesGet200Response;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to sIMCardNetworkPreferencesGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async sIMCardNetworkPreferencesGet(response: ResponseContext): Promise<SIMCardNetworkPreferencesGet200Response > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SIMCardNetworkPreferencesGet200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SIMCardNetworkPreferencesGet200Response", ""
            ) as SIMCardNetworkPreferencesGet200Response;
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
            const body: SIMCardNetworkPreferencesGet200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SIMCardNetworkPreferencesGet200Response", ""
            ) as SIMCardNetworkPreferencesGet200Response;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to sIMCardNetworkPreferencesPut
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async sIMCardNetworkPreferencesPut(response: ResponseContext): Promise<SIMCardNetworkPreferencesGet200Response > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("202", response.httpStatusCode)) {
            const body: SIMCardNetworkPreferencesGet200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SIMCardNetworkPreferencesGet200Response", ""
            ) as SIMCardNetworkPreferencesGet200Response;
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
            const body: SIMCardNetworkPreferencesGet200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SIMCardNetworkPreferencesGet200Response", ""
            ) as SIMCardNetworkPreferencesGet200Response;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to sIMCardPublicIPGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async sIMCardPublicIPGet(response: ResponseContext): Promise<SIMCardPublicIPGet200Response > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SIMCardPublicIPGet200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SIMCardPublicIPGet200Response", ""
            ) as SIMCardPublicIPGet200Response;
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
            const body: SIMCardPublicIPGet200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SIMCardPublicIPGet200Response", ""
            ) as SIMCardPublicIPGet200Response;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to setNetworkPreference
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async setNetworkPreference(response: ResponseContext): Promise<SimCardActionGet200Response > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("202", response.httpStatusCode)) {
            const body: SimCardActionGet200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SimCardActionGet200Response", ""
            ) as SimCardActionGet200Response;
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
            const body: SimCardActionGet200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SimCardActionGet200Response", ""
            ) as SimCardActionGet200Response;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to setSIMCardPublicIP
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async setSIMCardPublicIP(response: ResponseContext): Promise<SimCardActionGet200Response > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("202", response.httpStatusCode)) {
            const body: SimCardActionGet200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SimCardActionGet200Response", ""
            ) as SimCardActionGet200Response;
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
            const body: SimCardActionGet200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SimCardActionGet200Response", ""
            ) as SimCardActionGet200Response;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to simCardDataUsageNotificationsDelete
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async simCardDataUsageNotificationsDelete(response: ResponseContext): Promise<SimCardDataUsageNotificationsPost201Response > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SimCardDataUsageNotificationsPost201Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SimCardDataUsageNotificationsPost201Response", ""
            ) as SimCardDataUsageNotificationsPost201Response;
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
            const body: SimCardDataUsageNotificationsPost201Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SimCardDataUsageNotificationsPost201Response", ""
            ) as SimCardDataUsageNotificationsPost201Response;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to simCardDataUsageNotificationsGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async simCardDataUsageNotificationsGet(response: ResponseContext): Promise<SimCardDataUsageNotificationsPost201Response > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SimCardDataUsageNotificationsPost201Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SimCardDataUsageNotificationsPost201Response", ""
            ) as SimCardDataUsageNotificationsPost201Response;
            return body;
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: Error = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Error", ""
            ) as Error;
            throw new ApiException<Error>(response.httpStatusCode, "Resource not found", body, response.headers);
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
            const body: SimCardDataUsageNotificationsPost201Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SimCardDataUsageNotificationsPost201Response", ""
            ) as SimCardDataUsageNotificationsPost201Response;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to simCardDataUsageNotificationsPatch
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async simCardDataUsageNotificationsPatch(response: ResponseContext): Promise<SimCardDataUsageNotificationsPost201Response > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SimCardDataUsageNotificationsPost201Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SimCardDataUsageNotificationsPost201Response", ""
            ) as SimCardDataUsageNotificationsPost201Response;
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
            const body: SimCardDataUsageNotificationsPost201Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SimCardDataUsageNotificationsPost201Response", ""
            ) as SimCardDataUsageNotificationsPost201Response;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to simCardDataUsageNotificationsPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async simCardDataUsageNotificationsPost(response: ResponseContext): Promise<SimCardDataUsageNotificationsPost201Response > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: SimCardDataUsageNotificationsPost201Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SimCardDataUsageNotificationsPost201Response", ""
            ) as SimCardDataUsageNotificationsPost201Response;
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
            const body: SimCardDataUsageNotificationsPost201Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SimCardDataUsageNotificationsPost201Response", ""
            ) as SimCardDataUsageNotificationsPost201Response;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to simCardDelete
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async simCardDelete(response: ResponseContext): Promise<SimCardGet200Response > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SimCardGet200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SimCardGet200Response", ""
            ) as SimCardGet200Response;
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
            const body: SimCardGet200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SimCardGet200Response", ""
            ) as SimCardGet200Response;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to simCardDisable
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async simCardDisable(response: ResponseContext): Promise<SimCardActionGet200Response > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("202", response.httpStatusCode)) {
            const body: SimCardActionGet200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SimCardActionGet200Response", ""
            ) as SimCardActionGet200Response;
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
            const body: SimCardActionGet200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SimCardActionGet200Response", ""
            ) as SimCardActionGet200Response;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to simCardEnable
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async simCardEnable(response: ResponseContext): Promise<SimCardActionGet200Response > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("202", response.httpStatusCode)) {
            const body: SimCardActionGet200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SimCardActionGet200Response", ""
            ) as SimCardActionGet200Response;
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
            const body: SimCardActionGet200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SimCardActionGet200Response", ""
            ) as SimCardActionGet200Response;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to simCardGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async simCardGet(response: ResponseContext): Promise<SimCardGet200Response > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SimCardGet200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SimCardGet200Response", ""
            ) as SimCardGet200Response;
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
            const body: SimCardGet200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SimCardGet200Response", ""
            ) as SimCardGet200Response;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to simCardRegister
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async simCardRegister(response: ResponseContext): Promise<SimCardRegister202Response > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("202", response.httpStatusCode)) {
            const body: SimCardRegister202Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SimCardRegister202Response", ""
            ) as SimCardRegister202Response;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: SimCardRegister202Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SimCardRegister202Response", ""
            ) as SimCardRegister202Response;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to simCardSetStandby
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async simCardSetStandby(response: ResponseContext): Promise<SimCardActionGet200Response > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("202", response.httpStatusCode)) {
            const body: SimCardActionGet200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SimCardActionGet200Response", ""
            ) as SimCardActionGet200Response;
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
            const body: SimCardActionGet200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SimCardActionGet200Response", ""
            ) as SimCardActionGet200Response;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to simCardUpdate
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async simCardUpdate(response: ResponseContext): Promise<SimCardGet200Response > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SimCardGet200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SimCardGet200Response", ""
            ) as SimCardGet200Response;
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
            const body: SimCardGet200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SimCardGet200Response", ""
            ) as SimCardGet200Response;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to simCardsGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async simCardsGet(response: ResponseContext): Promise<SimCardsGet200Response > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SimCardsGet200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SimCardsGet200Response", ""
            ) as SimCardsGet200Response;
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
            const body: SimCardsGet200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SimCardsGet200Response", ""
            ) as SimCardsGet200Response;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to wirelessConnectivityLogsGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async wirelessConnectivityLogsGet(response: ResponseContext): Promise<WirelessConnectivityLogsGet200Response > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: WirelessConnectivityLogsGet200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "WirelessConnectivityLogsGet200Response", ""
            ) as WirelessConnectivityLogsGet200Response;
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
            const body: WirelessConnectivityLogsGet200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "WirelessConnectivityLogsGet200Response", ""
            ) as WirelessConnectivityLogsGet200Response;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
