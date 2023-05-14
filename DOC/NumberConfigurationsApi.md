# .NumberConfigurationsApi

All URIs are relative to *https://api.telnyx.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deletePhoneNumber**](NumberConfigurationsApi.md#deletePhoneNumber) | **DELETE** /phone_numbers/{id} | Delete a phone number
[**enableEmergencyPhoneNumber**](NumberConfigurationsApi.md#enableEmergencyPhoneNumber) | **POST** /phone_numbers/{id}/actions/enable_emergency | Enable emergency for a phone number
[**listPhoneNumbers**](NumberConfigurationsApi.md#listPhoneNumbers) | **GET** /phone_numbers | List phone numbers
[**listPhoneNumbersWithMessagingSettings**](NumberConfigurationsApi.md#listPhoneNumbersWithMessagingSettings) | **GET** /phone_numbers/messaging | List phone numbers with messaging settings
[**listPhoneNumbersWithVoiceSettings**](NumberConfigurationsApi.md#listPhoneNumbersWithVoiceSettings) | **GET** /phone_numbers/voice | List phone numbers with voice settings
[**retrievePhoneNumber**](NumberConfigurationsApi.md#retrievePhoneNumber) | **GET** /phone_numbers/{id} | Retrieve a phone number
[**retrievePhoneNumberWithMessagingSettings**](NumberConfigurationsApi.md#retrievePhoneNumberWithMessagingSettings) | **GET** /phone_numbers/{id}/messaging | Retrieve a phone number with messaging settings
[**retrievePhoneNumberWithVoiceSettings**](NumberConfigurationsApi.md#retrievePhoneNumberWithVoiceSettings) | **GET** /phone_numbers/{id}/voice | Retrieve a phone number with voice settings
[**updatePhoneNumber**](NumberConfigurationsApi.md#updatePhoneNumber) | **PATCH** /phone_numbers/{id} | Update a phone number
[**updatePhoneNumberWithMessagingSettings**](NumberConfigurationsApi.md#updatePhoneNumberWithMessagingSettings) | **PATCH** /phone_numbers/{id}/messaging | Update a phone number with messaging settings
[**updatePhoneNumberWithVoiceSettings**](NumberConfigurationsApi.md#updatePhoneNumberWithVoiceSettings) | **PATCH** /phone_numbers/{id}/voice | Update a phone number with voice settings


# **deletePhoneNumber**
> PhoneNumberResponse1 deletePhoneNumber()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .NumberConfigurationsApi(configuration);

let body:.NumberConfigurationsApiDeletePhoneNumberRequest = {
  // string | Identifies the resource.
  id: "1293384261075731499",
};

apiInstance.deletePhoneNumber(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Identifies the resource. | defaults to undefined


### Return type

**PhoneNumberResponse1**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response with details about a phone number. |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **enableEmergencyPhoneNumber**
> PhoneNumberEnableEmergency enableEmergencyPhoneNumber(phoneNumberEnableEmergencyRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .NumberConfigurationsApi(configuration);

let body:.NumberConfigurationsApiEnableEmergencyPhoneNumberRequest = {
  // string | Identifies the resource.
  id: "1293384261075731499",
  // PhoneNumberEnableEmergencyRequest
  phoneNumberEnableEmergencyRequest: {
    emergencyEnabled: true,
    emergencyAddressId: "emergencyAddressId_example",
  },
};

apiInstance.enableEmergencyPhoneNumber(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **phoneNumberEnableEmergencyRequest** | **PhoneNumberEnableEmergencyRequest**|  |
 **id** | [**string**] | Identifies the resource. | defaults to undefined


### Return type

**PhoneNumberEnableEmergency**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Phone number emergency enabled. |  -  |
**202** | Phone number emergency requested. |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listPhoneNumbers**
> ListPhoneNumbersResponse listPhoneNumbers()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .NumberConfigurationsApi(configuration);

let body:.NumberConfigurationsApiListPhoneNumbersRequest = {
  // number | The page number to load (optional)
  pageNumber: 1,
  // number | The size of the page (optional)
  pageSize: 20,
  // string | Filter by phone number tags. (optional)
  filterTag: "filter[tag]_example",
  // string | Filter by phone number. Requires at least three digits.              Non-numerical characters will result in no values being returned. (optional)
  filterPhoneNumber: "filter[phone_number]_example",
  // 'purchase_pending' | 'purchase_failed' | 'port_pending' | 'active' | 'deleted' | 'port_failed' | 'emergency_only' | 'ported_out' | 'port_out_pending' | Filter by phone number status. (optional)
  filterStatus: "active",
  // string | Filter by connection_id. (optional)
  filterConnectionId: "1521916448077776306",
  // string | Filter contains connection name. Requires at least three characters. (optional)
  filterVoiceConnectionNameContains: "test",
  // string | Filter starts with connection name. Requires at least three characters. (optional)
  filterVoiceConnectionNameStartsWith: "test",
  // string | Filter ends with connection name. Requires at least three characters. (optional)
  filterVoiceConnectionNameEndsWith: "test",
  // string | Filter by connection name. (optional)
  filterVoiceConnectionNameEq: "test",
  // 'pay-per-minute' | 'channel' | Filter by usage_payment_method. (optional)
  filterUsagePaymentMethod: "channel",
  // string | Filter by the billing_group_id associated with phone numbers. To filter to only phone numbers that have no billing group associated them, set the value of this filter to the string \'null\'. (optional)
  filterBillingGroupId: "62e4bf2e-c278-4282-b524-488d9c9c43b2",
  // string | Filter by the emergency_address_id associated with phone numbers. To filter only phone numbers that have no emergency address associated with them, set the value of this filter to the string \'null\'. (optional)
  filterEmergencyAddressId: "9102160989215728032",
  // string | Filter numbers via the customer_reference set. (optional)
  filterCustomerReference: "filter[customer_reference]_example",
  // 'purchased_at' | 'phone_number' | 'connection_name' | 'usage_payment_method' | Specifies the sort order for results. If not given, results are sorted by created_at in descending order. (optional)
  sort: "connection_name",
};

apiInstance.listPhoneNumbers(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pageNumber** | [**number**] | The page number to load | (optional) defaults to 1
 **pageSize** | [**number**] | The size of the page | (optional) defaults to 20
 **filterTag** | [**string**] | Filter by phone number tags. | (optional) defaults to undefined
 **filterPhoneNumber** | [**string**] | Filter by phone number. Requires at least three digits.              Non-numerical characters will result in no values being returned. | (optional) defaults to undefined
 **filterStatus** | [**&#39;purchase_pending&#39; | &#39;purchase_failed&#39; | &#39;port_pending&#39; | &#39;active&#39; | &#39;deleted&#39; | &#39;port_failed&#39; | &#39;emergency_only&#39; | &#39;ported_out&#39; | &#39;port_out_pending&#39;**]**Array<&#39;purchase_pending&#39; &#124; &#39;purchase_failed&#39; &#124; &#39;port_pending&#39; &#124; &#39;active&#39; &#124; &#39;deleted&#39; &#124; &#39;port_failed&#39; &#124; &#39;emergency_only&#39; &#124; &#39;ported_out&#39; &#124; &#39;port_out_pending&#39;>** | Filter by phone number status. | (optional) defaults to undefined
 **filterConnectionId** | [**string**] | Filter by connection_id. | (optional) defaults to undefined
 **filterVoiceConnectionNameContains** | [**string**] | Filter contains connection name. Requires at least three characters. | (optional) defaults to undefined
 **filterVoiceConnectionNameStartsWith** | [**string**] | Filter starts with connection name. Requires at least three characters. | (optional) defaults to undefined
 **filterVoiceConnectionNameEndsWith** | [**string**] | Filter ends with connection name. Requires at least three characters. | (optional) defaults to undefined
 **filterVoiceConnectionNameEq** | [**string**] | Filter by connection name. | (optional) defaults to undefined
 **filterUsagePaymentMethod** | [**&#39;pay-per-minute&#39; | &#39;channel&#39;**]**Array<&#39;pay-per-minute&#39; &#124; &#39;channel&#39;>** | Filter by usage_payment_method. | (optional) defaults to undefined
 **filterBillingGroupId** | [**string**] | Filter by the billing_group_id associated with phone numbers. To filter to only phone numbers that have no billing group associated them, set the value of this filter to the string \&#39;null\&#39;. | (optional) defaults to undefined
 **filterEmergencyAddressId** | [**string**] | Filter by the emergency_address_id associated with phone numbers. To filter only phone numbers that have no emergency address associated with them, set the value of this filter to the string \&#39;null\&#39;. | (optional) defaults to undefined
 **filterCustomerReference** | [**string**] | Filter numbers via the customer_reference set. | (optional) defaults to undefined
 **sort** | [**&#39;purchased_at&#39; | &#39;phone_number&#39; | &#39;connection_name&#39; | &#39;usage_payment_method&#39;**]**Array<&#39;purchased_at&#39; &#124; &#39;phone_number&#39; &#124; &#39;connection_name&#39; &#124; &#39;usage_payment_method&#39;>** | Specifies the sort order for results. If not given, results are sorted by created_at in descending order. | (optional) defaults to undefined


### Return type

**ListPhoneNumbersResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response with a list of phone numbers. |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listPhoneNumbersWithMessagingSettings**
> ListMessagingSettingsResponse listPhoneNumbersWithMessagingSettings()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .NumberConfigurationsApi(configuration);

let body:.NumberConfigurationsApiListPhoneNumbersWithMessagingSettingsRequest = {
  // number | The page number to load (optional)
  pageNumber: 1,
  // number | The size of the page (optional)
  pageSize: 20,
};

apiInstance.listPhoneNumbersWithMessagingSettings(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pageNumber** | [**number**] | The page number to load | (optional) defaults to 1
 **pageSize** | [**number**] | The size of the page | (optional) defaults to 20


### Return type

**ListMessagingSettingsResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response with a list of phone numbers with messaging settings. |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listPhoneNumbersWithVoiceSettings**
> ListPhoneNumbersWithVoiceSettingsResponse listPhoneNumbersWithVoiceSettings()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .NumberConfigurationsApi(configuration);

let body:.NumberConfigurationsApiListPhoneNumbersWithVoiceSettingsRequest = {
  // number | The page number to load (optional)
  pageNumber: 1,
  // number | The size of the page (optional)
  pageSize: 20,
  // string | Filter by phone number. Requires at least three digits.              Non-numerical characters will result in no values being returned. (optional)
  filterPhoneNumber: "filter[phone_number]_example",
  // string | Filter contains connection name. Requires at least three characters. (optional)
  filterConnectionNameContains: "test",
  // string | Filter numbers via the customer_reference set. (optional)
  filterCustomerReference: "filter[customer_reference]_example",
  // 'pay-per-minute' | 'channel' | Filter by usage_payment_method. (optional)
  filterUsagePaymentMethod: "channel",
  // 'purchased_at' | 'phone_number' | 'connection_name' | 'usage_payment_method' | Specifies the sort order for results. If not given, results are sorted by created_at in descending order. (optional)
  sort: "connection_name",
};

apiInstance.listPhoneNumbersWithVoiceSettings(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pageNumber** | [**number**] | The page number to load | (optional) defaults to 1
 **pageSize** | [**number**] | The size of the page | (optional) defaults to 20
 **filterPhoneNumber** | [**string**] | Filter by phone number. Requires at least three digits.              Non-numerical characters will result in no values being returned. | (optional) defaults to undefined
 **filterConnectionNameContains** | [**string**] | Filter contains connection name. Requires at least three characters. | (optional) defaults to undefined
 **filterCustomerReference** | [**string**] | Filter numbers via the customer_reference set. | (optional) defaults to undefined
 **filterUsagePaymentMethod** | [**&#39;pay-per-minute&#39; | &#39;channel&#39;**]**Array<&#39;pay-per-minute&#39; &#124; &#39;channel&#39;>** | Filter by usage_payment_method. | (optional) defaults to undefined
 **sort** | [**&#39;purchased_at&#39; | &#39;phone_number&#39; | &#39;connection_name&#39; | &#39;usage_payment_method&#39;**]**Array<&#39;purchased_at&#39; &#124; &#39;phone_number&#39; &#124; &#39;connection_name&#39; &#124; &#39;usage_payment_method&#39;>** | Specifies the sort order for results. If not given, results are sorted by created_at in descending order. | (optional) defaults to undefined


### Return type

**ListPhoneNumbersWithVoiceSettingsResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response with a list of phone numbers with voice settings. |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **retrievePhoneNumber**
> PhoneNumberResponse retrievePhoneNumber()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .NumberConfigurationsApi(configuration);

let body:.NumberConfigurationsApiRetrievePhoneNumberRequest = {
  // string | Identifies the resource.
  id: "1293384261075731499",
};

apiInstance.retrievePhoneNumber(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Identifies the resource. | defaults to undefined


### Return type

**PhoneNumberResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response with details about a phone number. |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **retrievePhoneNumberWithMessagingSettings**
> RetrieveMessagingSettingsResponse retrievePhoneNumberWithMessagingSettings()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .NumberConfigurationsApi(configuration);

let body:.NumberConfigurationsApiRetrievePhoneNumberWithMessagingSettingsRequest = {
  // string | Identifies the type of resource.
  id: "id_example",
};

apiInstance.retrievePhoneNumberWithMessagingSettings(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Identifies the type of resource. | defaults to undefined


### Return type

**RetrieveMessagingSettingsResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response with details about a phone number including voice settings. |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **retrievePhoneNumberWithVoiceSettings**
> RetrievePhoneNumberVoiceResponse retrievePhoneNumberWithVoiceSettings()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .NumberConfigurationsApi(configuration);

let body:.NumberConfigurationsApiRetrievePhoneNumberWithVoiceSettingsRequest = {
  // string | Identifies the resource.
  id: "1293384261075731499",
};

apiInstance.retrievePhoneNumberWithVoiceSettings(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Identifies the resource. | defaults to undefined


### Return type

**RetrievePhoneNumberVoiceResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response with details about a phone number including voice settings. |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updatePhoneNumber**
> PhoneNumberResponse updatePhoneNumber(updatePhoneNumberRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .NumberConfigurationsApi(configuration);

let body:.NumberConfigurationsApiUpdatePhoneNumberRequest = {
  // string | Identifies the resource.
  id: "1293384261075731499",
  // UpdatePhoneNumberRequest | Updated settings for the phone number.
  updatePhoneNumberRequest: {
    tags: [
      "tags_example",
    ],
    externalPin: "externalPin_example",
    customerReference: "MY REF 001",
    connectionId: "connectionId_example",
    billingGroupId: "billingGroupId_example",
    numberLevelRouting: "enabled",
  },
};

apiInstance.updatePhoneNumber(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updatePhoneNumberRequest** | **UpdatePhoneNumberRequest**| Updated settings for the phone number. |
 **id** | [**string**] | Identifies the resource. | defaults to undefined


### Return type

**PhoneNumberResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response with details about a phone number. |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updatePhoneNumberWithMessagingSettings**
> RetrieveMessagingSettingsResponse updatePhoneNumberWithMessagingSettings(updatePhoneNumberMessagingSettingsRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .NumberConfigurationsApi(configuration);

let body:.NumberConfigurationsApiUpdatePhoneNumberWithMessagingSettingsRequest = {
  // string | Identifies the type of resource.
  id: "id_example",
  // UpdatePhoneNumberMessagingSettingsRequest | Updated messaging settings for the phone number
  updatePhoneNumberMessagingSettingsRequest: {
    messagingProfileId: "messagingProfileId_example",
    messagingProduct: "P2P",
  },
};

apiInstance.updatePhoneNumberWithMessagingSettings(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updatePhoneNumberMessagingSettingsRequest** | **UpdatePhoneNumberMessagingSettingsRequest**| Updated messaging settings for the phone number |
 **id** | [**string**] | Identifies the type of resource. | defaults to undefined


### Return type

**RetrieveMessagingSettingsResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response with details about a phone number including voice settings. |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updatePhoneNumberWithVoiceSettings**
> RetrievePhoneNumberVoiceResponse updatePhoneNumberWithVoiceSettings(updatePhoneNumberVoiceSettingsRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .NumberConfigurationsApi(configuration);

let body:.NumberConfigurationsApiUpdatePhoneNumberWithVoiceSettingsRequest = {
  // string | Identifies the resource.
  id: "1293384261075731499",
  // UpdatePhoneNumberVoiceSettingsRequest | Updated voice settings for the phone number.
  updatePhoneNumberVoiceSettingsRequest: {
    techPrefixEnabled: false,
    translatedNumber: "translatedNumber_example",
    callForwarding: {
      callForwardingEnabled: true,
      forwardsTo: "forwardsTo_example",
      forwardingType: "always",
    },
    cnamListing: {
      cnamListingEnabled: false,
      cnamListingDetails: "cnamListingDetails_example",
    },
    usagePaymentMethod: "pay-per-minute",
    mediaFeatures: {
      rtpAutoAdjustEnabled: true,
      acceptAnyRtpPacketsEnabled: false,
      t38FaxGatewayEnabled: false,
    },
    callRecording: {
      inboundCallRecordingEnabled: false,
      inboundCallRecordingFormat: "wav",
      inboundCallRecordingChannels: "single",
    },
  },
};

apiInstance.updatePhoneNumberWithVoiceSettings(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updatePhoneNumberVoiceSettingsRequest** | **UpdatePhoneNumberVoiceSettingsRequest**| Updated voice settings for the phone number. |
 **id** | [**string**] | Identifies the resource. | defaults to undefined


### Return type

**RetrievePhoneNumberVoiceResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response with details about a phone number including voice settings. |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


