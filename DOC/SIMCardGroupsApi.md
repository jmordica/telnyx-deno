# .SIMCardGroupsApi

All URIs are relative to *https://api.telnyx.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**removeSIMCardGroupPrivateWirelessGateway**](SIMCardGroupsApi.md#removeSIMCardGroupPrivateWirelessGateway) | **POST** /sim_card_groups/{id}/actions/remove_private_wireless_gateway | Request Private Wireless Gateway removal from SIM card group
[**setSIMCardGroupPrivateWirelessGateway**](SIMCardGroupsApi.md#setSIMCardGroupPrivateWirelessGateway) | **POST** /sim_card_groups/{id}/actions/set_private_wireless_gateway | Request Private Wireless Gateway assignment for SIM card group
[**simCardGroupDelete**](SIMCardGroupsApi.md#simCardGroupDelete) | **DELETE** /sim_card_groups/{id} | Delete a SIM card group
[**simCardGroupUpdate**](SIMCardGroupsApi.md#simCardGroupUpdate) | **PATCH** /sim_card_groups/{id} | Update a SIM card group
[**simCardGroupsGet**](SIMCardGroupsApi.md#simCardGroupsGet) | **GET** /sim_card_groups/{id} | Get SIM card group
[**simCardGroupsGetAll**](SIMCardGroupsApi.md#simCardGroupsGetAll) | **GET** /sim_card_groups | Get all SIM card groups
[**simCardGroupsPost**](SIMCardGroupsApi.md#simCardGroupsPost) | **POST** /sim_card_groups | Create a SIM card group


# **removeSIMCardGroupPrivateWirelessGateway**
> SimCardGroupActionGet200Response removeSIMCardGroupPrivateWirelessGateway()

This action will asynchronously remove an existing Private Wireless Gateway definition from a SIM card group. Completing this operation defines that all SIM cards in the SIM card group will get their traffic handled by Telnyx\'s default mobile network configuration.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SIMCardGroupsApi(configuration);

let body:.SIMCardGroupsApiRemoveSIMCardGroupPrivateWirelessGatewayRequest = {
  // string | Identifies the resource.
  id: "6a09cdc3-8948-47f0-aa62-74ac943d6c58",
};

apiInstance.removeSIMCardGroupPrivateWirelessGateway(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Identifies the resource. | defaults to undefined


### Return type

**SimCardGroupActionGet200Response**

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

# **setSIMCardGroupPrivateWirelessGateway**
> SimCardGroupActionGet200Response setSIMCardGroupPrivateWirelessGateway(setSIMCardGroupPrivateWirelessGatewayRequest)

This action will asynchronously assign a provisioned Private Wireless Gateway to the SIM card group. Completing this operation defines that all SIM cards in the SIM card group will get their traffic controlled by the associated Private Wireless Gateway. This operation will also imply that new SIM cards assigned to a group will inherit its network definitions. If it\'s moved to a different group that doesn\'t have a Private Wireless Gateway, it\'ll use Telnyx\'s default mobile network configuration.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SIMCardGroupsApi(configuration);

let body:.SIMCardGroupsApiSetSIMCardGroupPrivateWirelessGatewayRequest = {
  // string | Identifies the resource.
  id: "6a09cdc3-8948-47f0-aa62-74ac943d6c58",
  // SetSIMCardGroupPrivateWirelessGatewayRequest
  setSIMCardGroupPrivateWirelessGatewayRequest: {
    privateWirelessGatewayId: "6a09cdc3-8948-47f0-aa62-74ac943d6c58",
  },
};

apiInstance.setSIMCardGroupPrivateWirelessGateway(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **setSIMCardGroupPrivateWirelessGatewayRequest** | **SetSIMCardGroupPrivateWirelessGatewayRequest**|  |
 **id** | [**string**] | Identifies the resource. | defaults to undefined


### Return type

**SimCardGroupActionGet200Response**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | Successful Response |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **simCardGroupDelete**
> SimCardGroupsPost200Response simCardGroupDelete()

Permanently deletes a SIM card group

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SIMCardGroupsApi(configuration);

let body:.SIMCardGroupsApiSimCardGroupDeleteRequest = {
  // string | Identifies the resource.
  id: "6a09cdc3-8948-47f0-aa62-74ac943d6c58",
};

apiInstance.simCardGroupDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Identifies the resource. | defaults to undefined


### Return type

**SimCardGroupsPost200Response**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **simCardGroupUpdate**
> SimCardGroupsPost200Response simCardGroupUpdate(sIMCardGroupPatch)

Updates a SIM card group

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SIMCardGroupsApi(configuration);

let body:.SIMCardGroupsApiSimCardGroupUpdateRequest = {
  // string | Identifies the resource.
  id: "6a09cdc3-8948-47f0-aa62-74ac943d6c58",
  // SIMCardGroupPatch
  sIMCardGroupPatch: {
    name: "My Test Group",
    dataLimit: {
      amount: "2048.1",
      unit: "MB",
    },
  },
};

apiInstance.simCardGroupUpdate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sIMCardGroupPatch** | **SIMCardGroupPatch**|  |
 **id** | [**string**] | Identifies the resource. | defaults to undefined


### Return type

**SimCardGroupsPost200Response**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **simCardGroupsGet**
> SimCardGroupsPost200Response simCardGroupsGet()

Returns the details regarding a specific SIM card group

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SIMCardGroupsApi(configuration);

let body:.SIMCardGroupsApiSimCardGroupsGetRequest = {
  // string | Identifies the resource.
  id: "6a09cdc3-8948-47f0-aa62-74ac943d6c58",
};

apiInstance.simCardGroupsGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Identifies the resource. | defaults to undefined


### Return type

**SimCardGroupsPost200Response**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **simCardGroupsGetAll**
> SimCardGroupsGetAll200Response simCardGroupsGetAll()

Get all SIM card groups belonging to the user that match the given filters.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SIMCardGroupsApi(configuration);

let body:.SIMCardGroupsApiSimCardGroupsGetAllRequest = {
  // number | The page number to load (optional)
  pageNumber: 1,
  // number | The size of the page (optional)
  pageSize: 20,
  // string | A valid SIM card group name. (optional)
  filterName: "filter[name]_example",
  // string | A Private Wireless Gateway ID associated with the group. (optional)
  filterPrivateWirelessGatewayId: "7606c6d3-ff7c-49c1-943d-68879e9d584d",
};

apiInstance.simCardGroupsGetAll(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pageNumber** | [**number**] | The page number to load | (optional) defaults to 1
 **pageSize** | [**number**] | The size of the page | (optional) defaults to 20
 **filterName** | [**string**] | A valid SIM card group name. | (optional) defaults to undefined
 **filterPrivateWirelessGatewayId** | [**string**] | A Private Wireless Gateway ID associated with the group. | (optional) defaults to undefined


### Return type

**SimCardGroupsGetAll200Response**

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

# **simCardGroupsPost**
> SimCardGroupsPost200Response simCardGroupsPost(sIMCardGroupCreate)

Creates a new SIM card group object

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SIMCardGroupsApi(configuration);

let body:.SIMCardGroupsApiSimCardGroupsPostRequest = {
  // SIMCardGroupCreate
  sIMCardGroupCreate: {
    name: "My Test Group",
    dataLimit: {
      amount: "2048.1",
      unit: "MB",
    },
  },
};

apiInstance.simCardGroupsPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sIMCardGroupCreate** | **SIMCardGroupCreate**|  |


### Return type

**SimCardGroupsPost200Response**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


