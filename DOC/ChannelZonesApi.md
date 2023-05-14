# .ChannelZonesApi

All URIs are relative to *https://api.telnyx.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**assignPhoneNumber**](ChannelZonesApi.md#assignPhoneNumber) | **POST** /channel_zones/{channel_zone_id}/channel_zone_phone_numbers | Assign a phone number to a channel zone
[**getChannelZone**](ChannelZonesApi.md#getChannelZone) | **GET** /channel_zones/{channel_zone_id} | Get a specific channel zone
[**getChannelZones**](ChannelZonesApi.md#getChannelZones) | **GET** /channel_zones | Get list of channel zones
[**getPhoneNumbers**](ChannelZonesApi.md#getPhoneNumbers) | **GET** /channel_zones/{channel_zone_id}/channel_zone_phone_numbers | Get the list of phone numbers assigned to a channel zone
[**patchGroup**](ChannelZonesApi.md#patchGroup) | **PATCH** /channel_zones/{channel_zone_id} | Patch a channel zone
[**unassignPhoneNumber**](ChannelZonesApi.md#unassignPhoneNumber) | **DELETE** /channel_zones/{channel_zone_id}/channel_zone_phone_numbers/{phone_number} | Unassign a phone number from a channel zone


# **assignPhoneNumber**
> GcbPhoneNumber assignPhoneNumber(body)

You should own the phone number being assigned to the channel zone. Remember that you should reserve channels in this channel zone, otherwise you won\'t be able to receive incoming calls.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ChannelZonesApi(configuration);

let body:.ChannelZonesApiAssignPhoneNumberRequest = {
  // string | Channel zone identifier
  channelZoneId: "channel_zone_id_example",
  // AssignPhoneNumberRequest | Phone number to assign to the channel zone. The phone number should be in E.164 format.
  body: {
    phoneNumber: "+15554441234",
  },
};

apiInstance.assignPhoneNumber(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **AssignPhoneNumberRequest**| Phone number to assign to the channel zone. The phone number should be in E.164 format. |
 **channelZoneId** | [**string**] | Channel zone identifier | defaults to undefined


### Return type

**GcbPhoneNumber**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A new inserted phone number |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getChannelZone**
> GcbChannelZone getChannelZone()

Get a specific channel zone

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ChannelZonesApi(configuration);

let body:.ChannelZonesApiGetChannelZoneRequest = {
  // string | Channel zone identifier
  channelZoneId: "channel_zone_id_example",
};

apiInstance.getChannelZone(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **channelZoneId** | [**string**] | Channel zone identifier | defaults to undefined


### Return type

**GcbChannelZone**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Requested channel zone |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getChannelZones**
> GetChannelZones200Response getChannelZones()

List of channel zones with their countries

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ChannelZonesApi(configuration);

let body:.ChannelZonesApiGetChannelZonesRequest = {
  // number | The page number to load (optional)
  pageNumber: 1,
  // number | The size of the page (optional)
  pageSize: 20,
};

apiInstance.getChannelZones(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pageNumber** | [**number**] | The page number to load | (optional) defaults to 1
 **pageSize** | [**number**] | The size of the page | (optional) defaults to 20


### Return type

**GetChannelZones200Response**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of channel zones |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getPhoneNumbers**
> GetPhoneNumbers200Response getPhoneNumbers()

Retrieve the assigned phone numbers in a channel zone. Phone numbers assigned to a channel zone can receive concurrent calls up to the quantity reserved in that channel zone. Additional concurrent calls are rejected with a busy signal.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ChannelZonesApi(configuration);

let body:.ChannelZonesApiGetPhoneNumbersRequest = {
  // string | Channel zone identifier
  channelZoneId: "channel_zone_id_example",
  // number | The page number to load (optional)
  pageNumber: 1,
  // number | The size of the page (optional)
  pageSize: 20,
};

apiInstance.getPhoneNumbers(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **channelZoneId** | [**string**] | Channel zone identifier | defaults to undefined
 **pageNumber** | [**number**] | The page number to load | (optional) defaults to 1
 **pageSize** | [**number**] | The size of the page | (optional) defaults to 20


### Return type

**GetPhoneNumbers200Response**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of phone numbers |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **patchGroup**
> GcbChannelZone patchGroup(body)

Change the amount of reserved channels at a given channel zone

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ChannelZonesApi(configuration);

let body:.ChannelZonesApiPatchGroupRequest = {
  // string | Channel zone identifier
  channelZoneId: "channel_zone_id_example",
  // PatchGroupRequest | Quantity of reserved channels
  body: {
    channels: 1,
  },
};

apiInstance.patchGroup(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **PatchGroupRequest**| Quantity of reserved channels |
 **channelZoneId** | [**string**] | Channel zone identifier | defaults to undefined


### Return type

**GcbChannelZone**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfuly patched channel zone |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **unassignPhoneNumber**
> void unassignPhoneNumber()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ChannelZonesApi(configuration);

let body:.ChannelZonesApiUnassignPhoneNumberRequest = {
  // string | Channel zone identifier
  channelZoneId: "channel_zone_id_example",
  // string | The phone number to be looked up
  phoneNumber: "+15554441234",
};

apiInstance.unassignPhoneNumber(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **channelZoneId** | [**string**] | Channel zone identifier | defaults to undefined
 **phoneNumber** | [**string**] | The phone number to be looked up | defaults to undefined


### Return type

**void**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The phone number is successfully deleted |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


