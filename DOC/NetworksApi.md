# .NetworksApi

All URIs are relative to *https://api.telnyx.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**networkCreate**](NetworksApi.md#networkCreate) | **POST** /networks | Create a Network
[**networkDelete**](NetworksApi.md#networkDelete) | **DELETE** /networks/{id} | Delete a Network
[**networkGet**](NetworksApi.md#networkGet) | **GET** /networks/{id} | Retrieve a Network
[**networkInterfaceList**](NetworksApi.md#networkInterfaceList) | **GET** /networks/{id}/network_interfaces | List all Interfaces for a Network.
[**networkList**](NetworksApi.md#networkList) | **GET** /networks | List all Networks
[**networkUpdate**](NetworksApi.md#networkUpdate) | **PATCH** /networks/{id} | Update a Network


# **networkCreate**
> NetworkCreate200Response networkCreate(networkCreate)

Create a new Network.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .NetworksApi(configuration);

let body:.NetworksApiNetworkCreateRequest = {
  // NetworkCreate
  networkCreate: null,
};

apiInstance.networkCreate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkCreate** | **NetworkCreate**|  |


### Return type

**NetworkCreate200Response**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**422** | Unprocessable entity. Check the \&#39;detail\&#39; field in response for details. |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **networkDelete**
> NetworkCreate200Response networkDelete()

Delete a Network.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .NetworksApi(configuration);

let body:.NetworksApiNetworkDeleteRequest = {
  // string | Identifies the resource.
  id: "6a09cdc3-8948-47f0-aa62-74ac943d6c58",
};

apiInstance.networkDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Identifies the resource. | defaults to undefined


### Return type

**NetworkCreate200Response**

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

# **networkGet**
> NetworkCreate200Response networkGet()

Retrieve a Network.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .NetworksApi(configuration);

let body:.NetworksApiNetworkGetRequest = {
  // string | Identifies the resource.
  id: "6a09cdc3-8948-47f0-aa62-74ac943d6c58",
};

apiInstance.networkGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Identifies the resource. | defaults to undefined


### Return type

**NetworkCreate200Response**

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

# **networkInterfaceList**
> NetworkInterfaceList200Response networkInterfaceList()

List all Interfaces for a Network.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .NetworksApi(configuration);

let body:.NetworksApiNetworkInterfaceListRequest = {
  // string | Identifies the resource.
  id: "6a09cdc3-8948-47f0-aa62-74ac943d6c58",
  // number | The page number to load (optional)
  pageNumber: 1,
  // number | The size of the page (optional)
  pageSize: 20,
  // string | The interface name to filter on. (optional)
  filterName: "test interface",
  // string | The interface type to filter on. (optional)
  filterType: "wireguard_interface",
  // InterfaceStatus | The interface status to filter on. (optional)
  filterStatus: "provisioned",
};

apiInstance.networkInterfaceList(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Identifies the resource. | defaults to undefined
 **pageNumber** | [**number**] | The page number to load | (optional) defaults to 1
 **pageSize** | [**number**] | The size of the page | (optional) defaults to 20
 **filterName** | [**string**] | The interface name to filter on. | (optional) defaults to undefined
 **filterType** | [**string**] | The interface type to filter on. | (optional) defaults to undefined
 **filterStatus** | **InterfaceStatus** | The interface status to filter on. | (optional) defaults to undefined


### Return type

**NetworkInterfaceList200Response**

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

# **networkList**
> NetworkList200Response networkList()

List all Networks.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .NetworksApi(configuration);

let body:.NetworksApiNetworkListRequest = {
  // number | The page number to load (optional)
  pageNumber: 1,
  // number | The size of the page (optional)
  pageSize: 20,
  // string | The network name to filter on. (optional)
  filterName: "test network",
};

apiInstance.networkList(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pageNumber** | [**number**] | The page number to load | (optional) defaults to 1
 **pageSize** | [**number**] | The size of the page | (optional) defaults to 20
 **filterName** | [**string**] | The network name to filter on. | (optional) defaults to undefined


### Return type

**NetworkList200Response**

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

# **networkUpdate**
> NetworkCreate200Response networkUpdate(networkCreate)

Update a Network.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .NetworksApi(configuration);

let body:.NetworksApiNetworkUpdateRequest = {
  // string | Identifies the resource.
  id: "6a09cdc3-8948-47f0-aa62-74ac943d6c58",
  // NetworkCreate
  networkCreate: null,
};

apiInstance.networkUpdate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkCreate** | **NetworkCreate**|  |
 **id** | [**string**] | Identifies the resource. | defaults to undefined


### Return type

**NetworkCreate200Response**

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


