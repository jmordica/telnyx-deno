# .OutboundVoiceProfilesApi

All URIs are relative to *https://api.telnyx.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createOutboundVoiceProfile**](OutboundVoiceProfilesApi.md#createOutboundVoiceProfile) | **POST** /outbound_voice_profiles | Create an outbound voice profile
[**deleteOutboundVoiceProfile**](OutboundVoiceProfilesApi.md#deleteOutboundVoiceProfile) | **DELETE** /outbound_voice_profiles/{id} | Delete an outbound voice profile
[**listOutboundVoiceProfiles**](OutboundVoiceProfilesApi.md#listOutboundVoiceProfiles) | **GET** /outbound_voice_profiles | Get all outbound voice profiles
[**retrieveOutboundVoiceProfile**](OutboundVoiceProfilesApi.md#retrieveOutboundVoiceProfile) | **GET** /outbound_voice_profiles/{id} | Retrieve an outbound voice profile
[**updateOutboundVoiceProfile**](OutboundVoiceProfilesApi.md#updateOutboundVoiceProfile) | **PATCH** /outbound_voice_profiles/{id} | Updates an existing outbound voice profile.


# **createOutboundVoiceProfile**
> OutboundVoiceProfileResponse createOutboundVoiceProfile(createOutboundVoiceProfileRequest)

Create an outbound voice profile.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OutboundVoiceProfilesApi(configuration);

let body:.OutboundVoiceProfilesApiCreateOutboundVoiceProfileRequest = {
  // CreateOutboundVoiceProfileRequest | Parameters that can be defined when creating an outbound voice profile
  createOutboundVoiceProfileRequest: {
    name: "office",
    trafficType: "conversational",
    servicePlan: "global",
    concurrentCallLimit: 10,
    enabled: true,
    tags: ["office-profile"],
    usagePaymentMethod: "tariff",
    whitelistedDestinations: ["US","BR","AU"],
    maxDestinationRate: 3.14,
    dailySpendLimit: "100.00",
    dailySpendLimitEnabled: true,
    callRecording: {
      callRecordingType: "all",
      callRecordingCallerPhoneNumbers: ["+19705555098"],
      callRecordingChannels: "dual",
      callRecordingFormat: "mp3",
    },
    billingGroupId: "6a09cdc3-8948-47f0-aa62-74ac943d6c58",
  },
};

apiInstance.createOutboundVoiceProfile(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createOutboundVoiceProfileRequest** | **CreateOutboundVoiceProfileRequest**| Parameters that can be defined when creating an outbound voice profile |


### Return type

**OutboundVoiceProfileResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**401** | Unauthorized |  -  |
**404** | Resource not found |  -  |
**422** | Bad request |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteOutboundVoiceProfile**
> OutboundVoiceProfileResponse deleteOutboundVoiceProfile()

Deletes an existing outbound voice profile.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OutboundVoiceProfilesApi(configuration);

let body:.OutboundVoiceProfilesApiDeleteOutboundVoiceProfileRequest = {
  // string | Identifies the resource.
  id: "1293384261075731499",
};

apiInstance.deleteOutboundVoiceProfile(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Identifies the resource. | defaults to undefined


### Return type

**OutboundVoiceProfileResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**401** | Unauthorized |  -  |
**404** | Resource not found |  -  |
**422** | Bad request |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listOutboundVoiceProfiles**
> ListOutboundVoiceProfilesResponse listOutboundVoiceProfiles()

Get all outbound voice profiles belonging to the user that match the given filters.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OutboundVoiceProfilesApi(configuration);

let body:.OutboundVoiceProfilesApiListOutboundVoiceProfilesRequest = {
  // number | The page number to load (optional)
  pageNumber: 1,
  // number | The size of the page (optional)
  pageSize: 20,
  // string | Optional filter on outbound voice profile name. (optional)
  filterNameContains: "office-profile",
  // 'enabled' | '-enabled' | 'created_at' | '-created_at' | 'name' | '-name' | 'service_plan' | '-service_plan' | 'traffic_type' | '-traffic_type' | 'usage_payment_method' | '-usage_payment_method' | Specifies the sort order for results. By default sorting direction is ascending. To have the results sorted in descending order add the <code>-</code> prefix.<br/><br/> That is: <ul>   <li>     <code>name</code>: sorts the result by the     <code>name</code> field in ascending order.   </li>    <li>     <code>-name</code>: sorts the result by the     <code>name</code> field in descending order.   </li> </ul> <br/> (optional)
  sort: "name",
};

apiInstance.listOutboundVoiceProfiles(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pageNumber** | [**number**] | The page number to load | (optional) defaults to 1
 **pageSize** | [**number**] | The size of the page | (optional) defaults to 20
 **filterNameContains** | [**string**] | Optional filter on outbound voice profile name. | (optional) defaults to undefined
 **sort** | [**&#39;enabled&#39; | &#39;-enabled&#39; | &#39;created_at&#39; | &#39;-created_at&#39; | &#39;name&#39; | &#39;-name&#39; | &#39;service_plan&#39; | &#39;-service_plan&#39; | &#39;traffic_type&#39; | &#39;-traffic_type&#39; | &#39;usage_payment_method&#39; | &#39;-usage_payment_method&#39;**]**Array<&#39;enabled&#39; &#124; &#39;-enabled&#39; &#124; &#39;created_at&#39; &#124; &#39;-created_at&#39; &#124; &#39;name&#39; &#124; &#39;-name&#39; &#124; &#39;service_plan&#39; &#124; &#39;-service_plan&#39; &#124; &#39;traffic_type&#39; &#124; &#39;-traffic_type&#39; &#124; &#39;usage_payment_method&#39; &#124; &#39;-usage_payment_method&#39;>** | Specifies the sort order for results. By default sorting direction is ascending. To have the results sorted in descending order add the &lt;code&gt;-&lt;/code&gt; prefix.&lt;br/&gt;&lt;br/&gt; That is: &lt;ul&gt;   &lt;li&gt;     &lt;code&gt;name&lt;/code&gt;: sorts the result by the     &lt;code&gt;name&lt;/code&gt; field in ascending order.   &lt;/li&gt;    &lt;li&gt;     &lt;code&gt;-name&lt;/code&gt;: sorts the result by the     &lt;code&gt;name&lt;/code&gt; field in descending order.   &lt;/li&gt; &lt;/ul&gt; &lt;br/&gt; | (optional) defaults to '-created_at'


### Return type

**ListOutboundVoiceProfilesResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**401** | Unauthorized |  -  |
**422** | Bad request |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **retrieveOutboundVoiceProfile**
> OutboundVoiceProfileResponse retrieveOutboundVoiceProfile()

Retrieves the details of an existing outbound voice profile.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OutboundVoiceProfilesApi(configuration);

let body:.OutboundVoiceProfilesApiRetrieveOutboundVoiceProfileRequest = {
  // string | Identifies the resource.
  id: "1293384261075731499",
};

apiInstance.retrieveOutboundVoiceProfile(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Identifies the resource. | defaults to undefined


### Return type

**OutboundVoiceProfileResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**401** | Unauthorized |  -  |
**404** | Resource not found |  -  |
**422** | Bad request |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateOutboundVoiceProfile**
> OutboundVoiceProfileResponse updateOutboundVoiceProfile(updateOutboundVoiceProfileRequest)

Updates an existing outbound voice profile.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OutboundVoiceProfilesApi(configuration);

let body:.OutboundVoiceProfilesApiUpdateOutboundVoiceProfileRequest = {
  // string | Identifies the resource.
  id: "1293384261075731499",
  // UpdateOutboundVoiceProfileRequest | Parameters that can be updated on an outbound voice profile
  updateOutboundVoiceProfileRequest: {
    name: "office",
    trafficType: "conversational",
    servicePlan: "global",
    concurrentCallLimit: 10,
    enabled: true,
    tags: ["office-profile"],
    usagePaymentMethod: "tariff",
    whitelistedDestinations: ["US","BR","AU"],
    maxDestinationRate: 3.14,
    dailySpendLimit: "100.00",
    dailySpendLimitEnabled: true,
    callRecording: {
      callRecordingType: "all",
      callRecordingCallerPhoneNumbers: ["+19705555098"],
      callRecordingChannels: "dual",
      callRecordingFormat: "mp3",
    },
    billingGroupId: "6a09cdc3-8948-47f0-aa62-74ac943d6c58",
  },
};

apiInstance.updateOutboundVoiceProfile(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateOutboundVoiceProfileRequest** | **UpdateOutboundVoiceProfileRequest**| Parameters that can be updated on an outbound voice profile |
 **id** | [**string**] | Identifies the resource. | defaults to undefined


### Return type

**OutboundVoiceProfileResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**401** | Unauthorized |  -  |
**404** | Resource not found |  -  |
**422** | Bad request |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


