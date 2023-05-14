# .SIMCardsApi

All URIs are relative to *https://api.telnyx.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**bulkSIMCardNetworkPreferences**](SIMCardsApi.md#bulkSIMCardNetworkPreferences) | **PUT** /actions/network_preferences/sim_cards | Bulk Network Preferences for SIM cards
[**bulkSetPublicIPs**](SIMCardsApi.md#bulkSetPublicIPs) | **POST** /sim_cards/actions/bulk_set_public_ips | Request bulk setting SIM card public IPs.
[**deleteNetworkPreference**](SIMCardsApi.md#deleteNetworkPreference) | **POST** /sim_cards/{id}/actions/delete_network_preferences | Delete network preferences for a SIM card
[**listSimCardDataUsageNotifications**](SIMCardsApi.md#listSimCardDataUsageNotifications) | **GET** /sim_card_data_usage_notifications | List SIM card data usage notifications
[**postValidateRegistrationCodes**](SIMCardsApi.md#postValidateRegistrationCodes) | **POST** /sim_cards/actions/validate_registration_codes | Validate SIM cards registration codes
[**removeSIMCardPublicIP**](SIMCardsApi.md#removeSIMCardPublicIP) | **POST** /sim_cards/{id}/actions/remove_public_ip | Request removing a SIM card public IP
[**sIMCardDeviceDetailsGet**](SIMCardsApi.md#sIMCardDeviceDetailsGet) | **GET** /sim_cards/{sim_card_id}/device_details | Get SIM card device details
[**sIMCardNetworkPreferencesDelete**](SIMCardsApi.md#sIMCardNetworkPreferencesDelete) | **DELETE** /sim_cards/{sim_card_id}/network_preferences | DELETE network preferences
[**sIMCardNetworkPreferencesGet**](SIMCardsApi.md#sIMCardNetworkPreferencesGet) | **GET** /sim_cards/{sim_card_id}/network_preferences | Get network preferences
[**sIMCardNetworkPreferencesPut**](SIMCardsApi.md#sIMCardNetworkPreferencesPut) | **PUT** /sim_cards/{sim_card_id}/network_preferences | Set network preferences
[**sIMCardPublicIPGet**](SIMCardsApi.md#sIMCardPublicIPGet) | **GET** /sim_cards/{sim_card_id}/public_ip | Get SIM card public IP definition
[**setNetworkPreference**](SIMCardsApi.md#setNetworkPreference) | **POST** /sim_cards/{id}/actions/set_network_preferences | Create or update network preferences for a SIM card
[**setSIMCardPublicIP**](SIMCardsApi.md#setSIMCardPublicIP) | **POST** /sim_cards/{id}/actions/set_public_ip | Request setting a SIM card public IP
[**simCardDataUsageNotificationsDelete**](SIMCardsApi.md#simCardDataUsageNotificationsDelete) | **DELETE** /sim_card_data_usage_notifications/{id} | Delete SIM card data usage notifications
[**simCardDataUsageNotificationsGet**](SIMCardsApi.md#simCardDataUsageNotificationsGet) | **GET** /sim_card_data_usage_notifications/{id} | Get a single SIM card data usage notification
[**simCardDataUsageNotificationsPatch**](SIMCardsApi.md#simCardDataUsageNotificationsPatch) | **PATCH** /sim_card_data_usage_notifications/{id} | Updates information for a SIM Card Data Usage Notification
[**simCardDataUsageNotificationsPost**](SIMCardsApi.md#simCardDataUsageNotificationsPost) | **POST** /sim_card_data_usage_notifications | Create a new SIM card data usage notification
[**simCardDelete**](SIMCardsApi.md#simCardDelete) | **DELETE** /sim_cards/{id} | Deletes a SIM card
[**simCardDisable**](SIMCardsApi.md#simCardDisable) | **POST** /sim_cards/{id}/actions/disable | Request a SIM card disable
[**simCardEnable**](SIMCardsApi.md#simCardEnable) | **POST** /sim_cards/{id}/actions/enable | Request a SIM card enable
[**simCardGet**](SIMCardsApi.md#simCardGet) | **GET** /sim_cards/{id} | Get SIM card
[**simCardRegister**](SIMCardsApi.md#simCardRegister) | **POST** /actions/register/sim_cards | Register SIM cards
[**simCardSetStandby**](SIMCardsApi.md#simCardSetStandby) | **POST** /sim_cards/{id}/actions/set_standby | Request setting a SIM card to standby
[**simCardUpdate**](SIMCardsApi.md#simCardUpdate) | **PATCH** /sim_cards/{id} | Update a SIM card
[**simCardsGet**](SIMCardsApi.md#simCardsGet) | **GET** /sim_cards | Get all SIM cards
[**wirelessConnectivityLogsGet**](SIMCardsApi.md#wirelessConnectivityLogsGet) | **GET** /sim_cards/{sim_card_id}/wireless_connectivity_logs | List wireless connectivity logs


# **bulkSIMCardNetworkPreferences**
> BulkSIMCardNetworkPreferences202Response bulkSIMCardNetworkPreferences()

This API allows dispatching the same operation described for the PUT sim_cards/:sim_card_id/network_preferences API for multiple SIM cards at once.<br/><br/> Although, a SIM card network preference may fail individually under any validation triggered as a consequence of its state. For example, a SIM can\'t have an in-progress OTA update for applying a Network Preference, so they\'ll fail when requested in this API. In that scenario, the specific error will be present in the response along with the successful definitions in the \"errors\" response node. 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SIMCardsApi(configuration);

let body:.SIMCardsApiBulkSIMCardNetworkPreferencesRequest = {
  // BulkSIMCardNetworkPreferencesRequest (optional)
  bulkSIMCardNetworkPreferencesRequest: {
    simCardIds: ["6b14e151-8493-4fa1-8664-1cc4e6d14158","6b14e151-8493-4fa1-8664-1cc4e6d14158"],
    mobileOperatorNetworksPreferences: [
      {
        mobileOperatorNetworkId: "6a09cdc3-8948-47f0-aa62-74ac943d6c58",
        priority: 0,
      },
    ],
  },
};

apiInstance.bulkSIMCardNetworkPreferences(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bulkSIMCardNetworkPreferencesRequest** | **BulkSIMCardNetworkPreferencesRequest**|  |


### Return type

**BulkSIMCardNetworkPreferences202Response**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** |  |  -  |
**422** | Unprocessable entity. Check the \&#39;detail\&#39; field in response for details. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **bulkSetPublicIPs**
> BulkSetPublicIPs202Response bulkSetPublicIPs()

This API triggers an asynchronous operation to set a public IP for each of the specified SIM cards.<br/> For each SIM Card a SIM Card Action will be generated. The status of the SIM Card Action can be followed through the [List SIM Card Action](https://developersdev.telnyx.com/docs/api/v2/wireless/SIM-Card-Actions#ListSIMCardActions) API. 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SIMCardsApi(configuration);

let body:.SIMCardsApiBulkSetPublicIPsRequest = {
  // BulkSetPublicIPsRequest (optional)
  bulkSetPublicIPsRequest: {
    simCardIds: ["6b14e151-8493-4fa1-8664-1cc4e6d14158"],
  },
};

apiInstance.bulkSetPublicIPs(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bulkSetPublicIPsRequest** | **BulkSetPublicIPsRequest**|  |


### Return type

**BulkSetPublicIPs202Response**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | Successful Response |  -  |
**422** | Unprocessable entity. Check the \&#39;detail\&#39; field in response for details. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteNetworkPreference**
> SimCardActionGet200Response deleteNetworkPreference()

This API deletes network preferences for a SIM card.<br/> The API will trigger an asynchronous operation called a SIM Card Action. Creating network preferences may take a period of time. The status of the SIM Card Action can be followed through the [List SIM Card Action](https://developersdev.telnyx.com/docs/api/v2/wireless/SIM-Card-Actions#ListSIMCardActions) API. 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SIMCardsApi(configuration);

let body:.SIMCardsApiDeleteNetworkPreferenceRequest = {
  // string | Identifies the resource.
  id: "6a09cdc3-8948-47f0-aa62-74ac943d6c58",
};

apiInstance.deleteNetworkPreference(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Identifies the resource. | defaults to undefined


### Return type

**SimCardActionGet200Response**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | Successful Response |  -  |
**422** | Unprocessable entity. Check the \&#39;detail\&#39; field in response for details. |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listSimCardDataUsageNotifications**
> ListSimCardDataUsageNotifications200Response listSimCardDataUsageNotifications()

Lists a paginated collection of SIM card data usage notifications. It enables exploring the collection using specific filters.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SIMCardsApi(configuration);

let body:.SIMCardsApiListSimCardDataUsageNotificationsRequest = {
  // number | The page number to load (optional)
  pageNumber: 1,
  // number | The size of the page (optional)
  pageSize: 20,
  // string | A valid SIM card ID. (optional)
  filterSimCardId: "47a1c2b0-cc7b-4ab1-bb98-b33fb0fc61b9",
};

apiInstance.listSimCardDataUsageNotifications(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pageNumber** | [**number**] | The page number to load | (optional) defaults to 1
 **pageSize** | [**number**] | The size of the page | (optional) defaults to 20
 **filterSimCardId** | [**string**] | A valid SIM card ID. | (optional) defaults to undefined


### Return type

**ListSimCardDataUsageNotifications200Response**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **postValidateRegistrationCodes**
> SIMCardRegistrationCodeValidations postValidateRegistrationCodes(postValidateRegistrationCodesRequest)

It validates whether SIM card registration codes are valid or not.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SIMCardsApi(configuration);

let body:.SIMCardsApiPostValidateRegistrationCodesRequest = {
  // PostValidateRegistrationCodesRequest
  postValidateRegistrationCodesRequest: {
    registrationCodes: [
      "registrationCodes_example",
    ],
  },
};

apiInstance.postValidateRegistrationCodes(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **postValidateRegistrationCodesRequest** | **PostValidateRegistrationCodesRequest**|  |


### Return type

**SIMCardRegistrationCodeValidations**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **removeSIMCardPublicIP**
> SimCardActionGet200Response removeSIMCardPublicIP()

This API removes an existing public IP from a SIM card. <br/><br/>  The API will trigger an asynchronous operation called a SIM Card Action. The status of the SIM Card Action can be followed through the [List SIM Card Action](https://developers.telnyx.com/docs/api/v2/wireless/SIM-Card-Actions#ListSIMCardActions) API.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SIMCardsApi(configuration);

let body:.SIMCardsApiRemoveSIMCardPublicIPRequest = {
  // string | Identifies the resource.
  id: "6a09cdc3-8948-47f0-aa62-74ac943d6c58",
};

apiInstance.removeSIMCardPublicIP(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Identifies the resource. | defaults to undefined


### Return type

**SimCardActionGet200Response**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | Successful Response |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **sIMCardDeviceDetailsGet**
> SIMCardDeviceDetailsGet200Response sIMCardDeviceDetailsGet()

It returns the device details where a SIM card is currently being used. 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SIMCardsApi(configuration);

let body:.SIMCardsApiSIMCardDeviceDetailsGetRequest = {
  // string | Identifies a SIM card.
  simCardId: "6a09cdc3-8948-47f0-aa62-74ac943d6c58",
};

apiInstance.sIMCardDeviceDetailsGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **simCardId** | [**string**] | Identifies a SIM card. | defaults to undefined


### Return type

**SIMCardDeviceDetailsGet200Response**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **sIMCardNetworkPreferencesDelete**
> SIMCardNetworkPreferencesGet200Response sIMCardNetworkPreferencesDelete()

This API asynchronously removes the custom-defined network preferences settings. After this operation is done the Telnyx default settings, the same applied for an unaltered SIM card, will be in place. 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SIMCardsApi(configuration);

let body:.SIMCardsApiSIMCardNetworkPreferencesDeleteRequest = {
  // string | Identifies a SIM card.
  simCardId: "6a09cdc3-8948-47f0-aa62-74ac943d6c58",
};

apiInstance.sIMCardNetworkPreferencesDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **simCardId** | [**string**] | Identifies a SIM card. | defaults to undefined


### Return type

**SIMCardNetworkPreferencesGet200Response**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | A successful network preferences deletion response. &lt;br/&gt;&lt;br/&gt; The delete won\&#39;t be done right away - this is an asynchronous operation. The request will return the resource with an in-progress OTA update resource (in the ota_updates node) representing the delete operation. Similarly to the PUT API, the resource will only be deleted when the OTA updated is successfully completed. |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **sIMCardNetworkPreferencesGet**
> SIMCardNetworkPreferencesGet200Response sIMCardNetworkPreferencesGet()

It returns the network preferences currently applied in the SIM card. 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SIMCardsApi(configuration);

let body:.SIMCardsApiSIMCardNetworkPreferencesGetRequest = {
  // string | Identifies a SIM card.
  simCardId: "6a09cdc3-8948-47f0-aa62-74ac943d6c58",
  // boolean | It includes the associated OTA update objects in the response when present. (optional)
  includeOtaUpdates: true,
};

apiInstance.sIMCardNetworkPreferencesGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **simCardId** | [**string**] | Identifies a SIM card. | defaults to undefined
 **includeOtaUpdates** | [**boolean**] | It includes the associated OTA update objects in the response when present. | (optional) defaults to false


### Return type

**SIMCardNetworkPreferencesGet200Response**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful network preferences definition response. |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **sIMCardNetworkPreferencesPut**
> SIMCardNetworkPreferencesGet200Response sIMCardNetworkPreferencesPut()

This API allows setting or updating a SIM card network preference. <br/><br/> Every SIM card has default network preferences defined on Telnyx. These preferences will determine how a SIMCard will connect to the network by considering a list of preferable operators.<br/><br/> There can be multiple scenarios where an operator can be preferred over another, for example, when a specific mobile operator can provide better network latency or better pricing. 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SIMCardsApi(configuration);

let body:.SIMCardsApiSIMCardNetworkPreferencesPutRequest = {
  // string | Identifies a SIM card.
  simCardId: "6a09cdc3-8948-47f0-aa62-74ac943d6c58",
  // SIMCardNetworkPreferencesPutRequest (optional)
  sIMCardNetworkPreferencesPutRequest: {
    mobileOperatorNetworksPreferences: [
      {
        mobileOperatorNetworkId: "6a09cdc3-8948-47f0-aa62-74ac943d6c58",
        priority: 0,
      },
    ],
  },
};

apiInstance.sIMCardNetworkPreferencesPut(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sIMCardNetworkPreferencesPutRequest** | **SIMCardNetworkPreferencesPutRequest**|  |
 **simCardId** | [**string**] | Identifies a SIM card. | defaults to undefined


### Return type

**SIMCardNetworkPreferencesGet200Response**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | A successful network preferences definition response. &lt;br/&gt;&lt;br/&gt; The sent mobile_operator_networks_preferences parameter won\&#39;t be applied to the main resource right away - this is an asynchronous operation. While interacting with this API, you will face the following scenarios:    * The first request for this API will return an empty mobile_operator_networks_preferences with an in-progress OTA update resource in the ota_updates node containing the exact sent parameters to indicate the operation progress. The value will be applied to the principal object when the OTA update finishes its processing, thus indicating the SIM card network preference current state.    * The subsequent requests will contain the current state, that is what\&#39;s applied to the SIM card settings, and return the related OTA update in the ota_updates node.    The returned OTA updated (present in the ota_updates node) will, by default, be the resource related to the operation, not all of them. |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **sIMCardPublicIPGet**
> SIMCardPublicIPGet200Response sIMCardPublicIPGet()

It returns the public IP requested for a SIM card. 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SIMCardsApi(configuration);

let body:.SIMCardsApiSIMCardPublicIPGetRequest = {
  // string | Identifies a SIM card.
  simCardId: "6a09cdc3-8948-47f0-aa62-74ac943d6c58",
};

apiInstance.sIMCardPublicIPGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **simCardId** | [**string**] | Identifies a SIM card. | defaults to undefined


### Return type

**SIMCardPublicIPGet200Response**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **setNetworkPreference**
> SimCardActionGet200Response setNetworkPreference()

This API sets network preferences for a SIM card.<br/> Every SIM card has default network preferences defined on Telnyx. These preferences will determine how a SIMCard will connect to the network by considering a list of preferable operators.<br/><br/> The SIM card needs to be attached to the network so this can connect and SMS must be available, otherwise, the operation will fail. This preference will only be respected if the network is available, otherwise the strongest signal will be used. <br/><br/> The API will trigger an asynchronous operation called a SIM Card Action. Creating network preferences may take a period of time. The status of the SIM Card Action can be followed through the [List SIM Card Action](https://developersdev.telnyx.com/docs/api/v2/wireless/SIM-Card-Actions#ListSIMCardActions) API. 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SIMCardsApi(configuration);

let body:.SIMCardsApiSetNetworkPreferenceRequest = {
  // string | Identifies the resource.
  id: "6a09cdc3-8948-47f0-aa62-74ac943d6c58",
};

apiInstance.setNetworkPreference(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Identifies the resource. | defaults to undefined


### Return type

**SimCardActionGet200Response**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | Successful Response |  -  |
**422** | Unprocessable entity. Check the \&#39;detail\&#39; field in response for details. |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **setSIMCardPublicIP**
> SimCardActionGet200Response setSIMCardPublicIP()

This API makes a SIM card reachable on the public internet by mapping a random public IP to the SIM card. <br/><br/>  The API will trigger an asynchronous operation called a SIM Card Action. The status of the SIM Card Action can be followed through the [List SIM Card Action](https://developers.telnyx.com/docs/api/v2/wireless/SIM-Card-Actions#ListSIMCardActions) API. <br/><br/>  Setting a Public IP to a SIM Card incurs a charge and will only succeed if the account has sufficient funds.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SIMCardsApi(configuration);

let body:.SIMCardsApiSetSIMCardPublicIPRequest = {
  // string | Identifies the resource.
  id: "6a09cdc3-8948-47f0-aa62-74ac943d6c58",
};

apiInstance.setSIMCardPublicIP(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Identifies the resource. | defaults to undefined


### Return type

**SimCardActionGet200Response**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | Successful Response |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **simCardDataUsageNotificationsDelete**
> SimCardDataUsageNotificationsPost201Response simCardDataUsageNotificationsDelete()

Delete the SIM Card Data Usage Notification.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SIMCardsApi(configuration);

let body:.SIMCardsApiSimCardDataUsageNotificationsDeleteRequest = {
  // string | Identifies the resource.
  id: "6a09cdc3-8948-47f0-aa62-74ac943d6c58",
};

apiInstance.simCardDataUsageNotificationsDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Identifies the resource. | defaults to undefined


### Return type

**SimCardDataUsageNotificationsPost201Response**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **simCardDataUsageNotificationsGet**
> SimCardDataUsageNotificationsPost201Response simCardDataUsageNotificationsGet()

Get a single SIM Card Data Usage Notification.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SIMCardsApi(configuration);

let body:.SIMCardsApiSimCardDataUsageNotificationsGetRequest = {
  // string | Identifies the resource.
  id: "6a09cdc3-8948-47f0-aa62-74ac943d6c58",
};

apiInstance.simCardDataUsageNotificationsGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Identifies the resource. | defaults to undefined


### Return type

**SimCardDataUsageNotificationsPost201Response**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**404** | Resource not found |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **simCardDataUsageNotificationsPatch**
> SimCardDataUsageNotificationsPost201Response simCardDataUsageNotificationsPatch(simCardDataUsageNotification)

Updates information for a SIM Card Data Usage Notification.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SIMCardsApi(configuration);

let body:.SIMCardsApiSimCardDataUsageNotificationsPatchRequest = {
  // string | Identifies the resource.
  id: "6a09cdc3-8948-47f0-aa62-74ac943d6c58",
  // SimCardDataUsageNotification
  simCardDataUsageNotification: {
    simCardId: "b34c1683-cd85-4493-b9a5-315eb4bc5e19",
    threshold: {
      amount: "2048.1",
      unit: "MB",
    },
  },
};

apiInstance.simCardDataUsageNotificationsPatch(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **simCardDataUsageNotification** | **SimCardDataUsageNotification**|  |
 **id** | [**string**] | Identifies the resource. | defaults to undefined


### Return type

**SimCardDataUsageNotificationsPost201Response**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **simCardDataUsageNotificationsPost**
> SimCardDataUsageNotificationsPost201Response simCardDataUsageNotificationsPost(simCardDataUsageNotificationsPostRequest)

Creates a new SIM card data usage notification.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SIMCardsApi(configuration);

let body:.SIMCardsApiSimCardDataUsageNotificationsPostRequest = {
  // SimCardDataUsageNotificationsPostRequest
  simCardDataUsageNotificationsPostRequest: {
    simCardId: "6a09cdc3-8948-47f0-aa62-74ac943d6c58",
    threshold: {
      amount: "2048.1",
      unit: "MB",
    },
  },
};

apiInstance.simCardDataUsageNotificationsPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **simCardDataUsageNotificationsPostRequest** | **SimCardDataUsageNotificationsPostRequest**|  |


### Return type

**SimCardDataUsageNotificationsPost201Response**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successful response |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **simCardDelete**
> SimCardGet200Response simCardDelete()

The SIM card will be decommissioned, removed from your account and you will stop being charged.<br />The SIM card won\'t be able to connect to the network after the deletion is completed, thus making it impossible to consume data.<br/> Transitioning to the disabled state may take a period of time.</br> Until the transition is completed, the SIM card status will be disabling <code>disabling</code>.<br />In order to re-enable the SIM card, you will need to re-register it.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SIMCardsApi(configuration);

let body:.SIMCardsApiSimCardDeleteRequest = {
  // string | Identifies the resource.
  id: "6a09cdc3-8948-47f0-aa62-74ac943d6c58",
};

apiInstance.simCardDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Identifies the resource. | defaults to undefined


### Return type

**SimCardGet200Response**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **simCardDisable**
> SimCardActionGet200Response simCardDisable()

This API disables a SIM card, disconnecting it from the network and making it impossible to consume data.<br/> The API will trigger an asynchronous operation called a SIM Card Action. Transitioning to the disabled state may take a period of time. The status of the SIM Card Action can be followed through the [List SIM Card Action](https://developers.telnyx.com/docs/api/v2/wireless/SIM-Card-Actions#ListSIMCardActions) API. 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SIMCardsApi(configuration);

let body:.SIMCardsApiSimCardDisableRequest = {
  // string | Identifies the resource.
  id: "6a09cdc3-8948-47f0-aa62-74ac943d6c58",
};

apiInstance.simCardDisable(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Identifies the resource. | defaults to undefined


### Return type

**SimCardActionGet200Response**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | Successful Response |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **simCardEnable**
> SimCardActionGet200Response simCardEnable()

This API enables a SIM card, connecting it to the network and making it possible to consume data.<br/> To enable a SIM card, it must be associated with a SIM card group.<br/> The API will trigger an asynchronous operation called a SIM Card Action. Transitioning to the enabled state may take a period of time. The status of the SIM Card Action can be followed through the [List SIM Card Action](https://developers.telnyx.com/docs/api/v2/wireless/SIM-Card-Actions#ListSIMCardActions) API. 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SIMCardsApi(configuration);

let body:.SIMCardsApiSimCardEnableRequest = {
  // string | Identifies the resource.
  id: "6a09cdc3-8948-47f0-aa62-74ac943d6c58",
};

apiInstance.simCardEnable(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Identifies the resource. | defaults to undefined


### Return type

**SimCardActionGet200Response**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | Successful Response |  -  |
**422** | Unprocessable entity. Check the \&#39;detail\&#39; field in response for details. |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **simCardGet**
> SimCardGet200Response simCardGet()

Returns the details regarding a specific SIM card.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SIMCardsApi(configuration);

let body:.SIMCardsApiSimCardGetRequest = {
  // string | Identifies the resource.
  id: "6a09cdc3-8948-47f0-aa62-74ac943d6c58",
  // boolean | It includes the associated SIM card group object in the response when present. (optional)
  includeSimCardGroup: true,
};

apiInstance.simCardGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Identifies the resource. | defaults to undefined
 **includeSimCardGroup** | [**boolean**] | It includes the associated SIM card group object in the response when present. | (optional) defaults to false


### Return type

**SimCardGet200Response**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **simCardRegister**
> SimCardRegister202Response simCardRegister(sIMCardRegistration)

Register the SIM cards associated with the provided registration codes to the current user\'s account.<br/><br/> If <code>sim_card_group_id</code> is provided, the SIM cards will be associated with that group. Otherwise, the default group for the current user will be used.<br/><br/> 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SIMCardsApi(configuration);

let body:.SIMCardsApiSimCardRegisterRequest = {
  // SIMCardRegistration
  sIMCardRegistration: {
    simCardGroupId: "6a09cdc3-8948-47f0-aa62-74ac943d6c58",
    tags: ["personal","customers","active-customers"],
    registrationCodes: ["0000000001","0000000002","0000000003"],
    status: "standby",
  },
};

apiInstance.simCardRegister(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sIMCardRegistration** | **SIMCardRegistration**|  |


### Return type

**SimCardRegister202Response**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **simCardSetStandby**
> SimCardActionGet200Response simCardSetStandby()

The SIM card will be able to connect to the network once the process to set it to standby has been completed, thus making it possible to consume data.<br/> To set a SIM card to standby, it must be associated with SIM card group.<br/> The API will trigger an asynchronous operation called a SIM Card Action. Transitioning to the standby state may take a period of time. The status of the SIM Card Action can be followed through the [List SIM Card Action](https://developers.telnyx.com/docs/api/v2/wireless/SIM-Card-Actions#ListSIMCardActions) API. 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SIMCardsApi(configuration);

let body:.SIMCardsApiSimCardSetStandbyRequest = {
  // string | Identifies the resource.
  id: "6a09cdc3-8948-47f0-aa62-74ac943d6c58",
};

apiInstance.simCardSetStandby(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Identifies the resource. | defaults to undefined


### Return type

**SimCardActionGet200Response**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | Successful Response |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **simCardUpdate**
> SimCardGet200Response simCardUpdate(sIMCard)

Updates SIM card data

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SIMCardsApi(configuration);

let body:.SIMCardsApiSimCardUpdateRequest = {
  // string | Identifies the resource.
  id: "6a09cdc3-8948-47f0-aa62-74ac943d6c58",
  // SIMCard
  sIMCard: {
    status: {
    },
    simCardGroupId: "6a09cdc3-8948-47f0-aa62-74ac943d6c58",
    tags: ["personal","customers","active-customers"],
    dataLimit: {
      amount: "2048.1",
      unit: "MB",
    },
    authorizedImeis: ["106516771852751","534051870479563","508821468377961"],
  },
};

apiInstance.simCardUpdate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sIMCard** | **SIMCard**|  |
 **id** | [**string**] | Identifies the resource. | defaults to undefined


### Return type

**SimCardGet200Response**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **simCardsGet**
> SimCardsGet200Response simCardsGet()

Get all SIM cards belonging to the user that match the given filters.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SIMCardsApi(configuration);

let body:.SIMCardsApiSimCardsGetRequest = {
  // number | The page number to load (optional)
  pageNumber: 1,
  // number | The size of the page (optional)
  pageSize: 20,
  // boolean | It includes the associated SIM card group object in the response when present. (optional)
  includeSimCardGroup: true,
  // string | A valid SIM card group ID. (optional)
  filterSimCardGroupId: "47a1c2b0-cc7b-4ab1-bb98-b33fb0fc61b9",
  // Array<string> | A list of SIM card tags to filter on.<br/><br/> If the SIM card contains <b><i>all</i></b> of the given <code>tags</code> they will be found.<br/><br/> For example, if the SIM cards have the following tags: <ul>   <li><code>[\'customers\', \'staff\', \'test\']</code>   <li><code>[\'test\']</code></li>   <li><code>[\'customers\']</code></li> </ul> Searching for <code>[\'customers\', \'test\']</code> returns only the first because it\'s the only one with both tags.<br/> Searching for <code>test</code> returns the first two SIMs, because both of them have such tag.<br/> Searching for <code>customers</code> returns the first and last SIMs.<br/>  (optional)
  filterTags: ["personal","customers","active-customers"],
  // string | A search string to partially match for the SIM card\'s ICCID. (optional)
  filterIccid: "89310410106543789301",
  // Array<'enabled' | 'disabled' | 'standby' | 'data_limit_exceeded' | 'unauthorized_imei'> | Filter by a SIM card\'s status. (optional)
  filterStatus: [
    "enabled",
  ],
};

apiInstance.simCardsGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pageNumber** | [**number**] | The page number to load | (optional) defaults to 1
 **pageSize** | [**number**] | The size of the page | (optional) defaults to 20
 **includeSimCardGroup** | [**boolean**] | It includes the associated SIM card group object in the response when present. | (optional) defaults to false
 **filterSimCardGroupId** | [**string**] | A valid SIM card group ID. | (optional) defaults to undefined
 **filterTags** | **Array&lt;string&gt;** | A list of SIM card tags to filter on.&lt;br/&gt;&lt;br/&gt; If the SIM card contains &lt;b&gt;&lt;i&gt;all&lt;/i&gt;&lt;/b&gt; of the given &lt;code&gt;tags&lt;/code&gt; they will be found.&lt;br/&gt;&lt;br/&gt; For example, if the SIM cards have the following tags: &lt;ul&gt;   &lt;li&gt;&lt;code&gt;[\&#39;customers\&#39;, \&#39;staff\&#39;, \&#39;test\&#39;]&lt;/code&gt;   &lt;li&gt;&lt;code&gt;[\&#39;test\&#39;]&lt;/code&gt;&lt;/li&gt;   &lt;li&gt;&lt;code&gt;[\&#39;customers\&#39;]&lt;/code&gt;&lt;/li&gt; &lt;/ul&gt; Searching for &lt;code&gt;[\&#39;customers\&#39;, \&#39;test\&#39;]&lt;/code&gt; returns only the first because it\&#39;s the only one with both tags.&lt;br/&gt; Searching for &lt;code&gt;test&lt;/code&gt; returns the first two SIMs, because both of them have such tag.&lt;br/&gt; Searching for &lt;code&gt;customers&lt;/code&gt; returns the first and last SIMs.&lt;br/&gt;  | (optional) defaults to undefined
 **filterIccid** | [**string**] | A search string to partially match for the SIM card\&#39;s ICCID. | (optional) defaults to undefined
 **filterStatus** | **Array<&#39;enabled&#39; &#124; &#39;disabled&#39; &#124; &#39;standby&#39; &#124; &#39;data_limit_exceeded&#39; &#124; &#39;unauthorized_imei&#39;>** | Filter by a SIM card\&#39;s status. | (optional) defaults to undefined


### Return type

**SimCardsGet200Response**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **wirelessConnectivityLogsGet**
> WirelessConnectivityLogsGet200Response wirelessConnectivityLogsGet()

This API allows listing a paginated collection of Wireless Connectivity Logs associated with a SIM Card, for troubleshooting purposes.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SIMCardsApi(configuration);

let body:.SIMCardsApiWirelessConnectivityLogsGetRequest = {
  // string | Identifies a SIM card.
  simCardId: "6a09cdc3-8948-47f0-aa62-74ac943d6c58",
  // number | The page number to load (optional)
  pageNumber: 1,
  // number | The size of the page (optional)
  pageSize: 20,
};

apiInstance.wirelessConnectivityLogsGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **simCardId** | [**string**] | Identifies a SIM card. | defaults to undefined
 **pageNumber** | [**number**] | The page number to load | (optional) defaults to 1
 **pageSize** | [**number**] | The size of the page | (optional) defaults to 20


### Return type

**WirelessConnectivityLogsGet200Response**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


