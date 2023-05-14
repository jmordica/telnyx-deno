# .DynamicEmergencyEndpointsApi

All URIs are relative to *https://api.telnyx.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createDyanmicEmergencyEndpoint**](DynamicEmergencyEndpointsApi.md#createDyanmicEmergencyEndpoint) | **POST** /dynamic_emergency_endpoints | Create a dynamic emergency endpoint.
[**deleteDynamicEmergencyEndpoint**](DynamicEmergencyEndpointsApi.md#deleteDynamicEmergencyEndpoint) | **DELETE** /dynamic_emergency_endpoints/{id} | Delete a dynamic emergency endpoint
[**getDynamicEmergencyEndpoint**](DynamicEmergencyEndpointsApi.md#getDynamicEmergencyEndpoint) | **GET** /dynamic_emergency_endpoints/{id} | Get a dynamic emergency endpoint
[**listDyanmicEmergencyEndpoints**](DynamicEmergencyEndpointsApi.md#listDyanmicEmergencyEndpoints) | **GET** /dynamic_emergency_endpoints | List dynamic emergency endpoints


# **createDyanmicEmergencyEndpoint**
> CreateDyanmicEmergencyEndpoint201Response createDyanmicEmergencyEndpoint(dynamicEmergencyEndpoint)

Creates a dynamic emergency endpoints.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DynamicEmergencyEndpointsApi(configuration);

let body:.DynamicEmergencyEndpointsApiCreateDyanmicEmergencyEndpointRequest = {
  // DynamicEmergencyEndpoint
  dynamicEmergencyEndpoint: {
    dynamicEmergencyAddressId: "0ccc7b54-4df3-4bca-a65a-3da1ecc777f0",
    callbackNumber: "+13125550000",
    callerName: "Jane Doe Desk Phone",
  },
};

apiInstance.createDyanmicEmergencyEndpoint(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dynamicEmergencyEndpoint** | **DynamicEmergencyEndpoint**|  |


### Return type

**CreateDyanmicEmergencyEndpoint201Response**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Dynamic Emergency Endpoint Response |  -  |
**401** | Unauthorized |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity. Check message field in response for details. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteDynamicEmergencyEndpoint**
> CreateDyanmicEmergencyEndpoint201Response deleteDynamicEmergencyEndpoint()

Deletes the dynamic emergency endpoint based on the ID provided

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DynamicEmergencyEndpointsApi(configuration);

let body:.DynamicEmergencyEndpointsApiDeleteDynamicEmergencyEndpointRequest = {
  // string | Dynamic Emergency Endpoint id
  id: "id_example",
};

apiInstance.deleteDynamicEmergencyEndpoint(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Dynamic Emergency Endpoint id | defaults to undefined


### Return type

**CreateDyanmicEmergencyEndpoint201Response**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Dynamic Emergency Endpoint Response |  -  |
**401** | Unauthorized |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity. Check message field in response for details. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getDynamicEmergencyEndpoint**
> CreateDyanmicEmergencyEndpoint201Response getDynamicEmergencyEndpoint()

Returns the dynamic emergency endpoint based on the ID provided

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DynamicEmergencyEndpointsApi(configuration);

let body:.DynamicEmergencyEndpointsApiGetDynamicEmergencyEndpointRequest = {
  // string | Dynamic Emergency Endpoint id
  id: "id_example",
};

apiInstance.getDynamicEmergencyEndpoint(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Dynamic Emergency Endpoint id | defaults to undefined


### Return type

**CreateDyanmicEmergencyEndpoint201Response**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Dynamic Emergency Endpoint Response |  -  |
**401** | Unauthorized |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity. Check message field in response for details. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listDyanmicEmergencyEndpoints**
> ListDyanmicEmergencyEndpoints200Response listDyanmicEmergencyEndpoints()

Returns the dynamic emergency endpoints according to filters

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DynamicEmergencyEndpointsApi(configuration);

let body:.DynamicEmergencyEndpointsApiListDyanmicEmergencyEndpointsRequest = {
  // 'pending' | 'activated' | 'rejected' | Filter by status. (optional)
  filterStatus: "pending",
  // string | Filter by country code. (optional)
  filterCountryCode: "filter[country_code]_example",
  // number | The page number to load (optional)
  pageNumber: 1,
  // number | The size of the page (optional)
  pageSize: 20,
};

apiInstance.listDyanmicEmergencyEndpoints(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filterStatus** | [**&#39;pending&#39; | &#39;activated&#39; | &#39;rejected&#39;**]**Array<&#39;pending&#39; &#124; &#39;activated&#39; &#124; &#39;rejected&#39;>** | Filter by status. | (optional) defaults to undefined
 **filterCountryCode** | [**string**] | Filter by country code. | (optional) defaults to undefined
 **pageNumber** | [**number**] | The page number to load | (optional) defaults to 1
 **pageSize** | [**number**] | The size of the page | (optional) defaults to 20


### Return type

**ListDyanmicEmergencyEndpoints200Response**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Dynamic Emergency Endpoints Responses |  -  |
**401** | Unauthorized |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity. Check message field in response for details. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


