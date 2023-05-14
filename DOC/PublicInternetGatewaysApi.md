# .PublicInternetGatewaysApi

All URIs are relative to *https://api.telnyx.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**publicInternetGatewayCreate**](PublicInternetGatewaysApi.md#publicInternetGatewayCreate) | **POST** /public_internet_gateways | Create a Public Internet Gateway
[**publicInternetGatewayDelete**](PublicInternetGatewaysApi.md#publicInternetGatewayDelete) | **DELETE** /public_internet_gateways/{id} | Delete a Public Internet Gateway
[**publicInternetGatewayGet**](PublicInternetGatewaysApi.md#publicInternetGatewayGet) | **GET** /public_internet_gateways/{id} | Retrieve a Public Internet Gateway
[**publicInternetGatewayList**](PublicInternetGatewaysApi.md#publicInternetGatewayList) | **GET** /public_internet_gateways | List all Public Internet Gateways


# **publicInternetGatewayCreate**
> PublicInternetGatewayCreate202Response publicInternetGatewayCreate(publicInternetGatewayCreate)

Create a new Public Internet Gateway.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PublicInternetGatewaysApi(configuration);

let body:.PublicInternetGatewaysApiPublicInternetGatewayCreateRequest = {
  // PublicInternetGatewayCreate
  publicInternetGatewayCreate: null,
};

apiInstance.publicInternetGatewayCreate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **publicInternetGatewayCreate** | **PublicInternetGatewayCreate**|  |


### Return type

**PublicInternetGatewayCreate202Response**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | Successful response |  -  |
**422** | Unprocessable entity. Check the \&#39;detail\&#39; field in response for details. |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **publicInternetGatewayDelete**
> PublicInternetGatewayCreate202Response publicInternetGatewayDelete()

Delete a Public Internet Gateway.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PublicInternetGatewaysApi(configuration);

let body:.PublicInternetGatewaysApiPublicInternetGatewayDeleteRequest = {
  // string | Identifies the resource.
  id: "6a09cdc3-8948-47f0-aa62-74ac943d6c58",
};

apiInstance.publicInternetGatewayDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Identifies the resource. | defaults to undefined


### Return type

**PublicInternetGatewayCreate202Response**

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

# **publicInternetGatewayGet**
> PublicInternetGatewayCreate202Response publicInternetGatewayGet()

Retrieve a Public Internet Gateway.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PublicInternetGatewaysApi(configuration);

let body:.PublicInternetGatewaysApiPublicInternetGatewayGetRequest = {
  // string | Identifies the resource.
  id: "6a09cdc3-8948-47f0-aa62-74ac943d6c58",
};

apiInstance.publicInternetGatewayGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Identifies the resource. | defaults to undefined


### Return type

**PublicInternetGatewayCreate202Response**

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

# **publicInternetGatewayList**
> PublicInternetGatewayList200Response publicInternetGatewayList()

List all Public Internet Gateways.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PublicInternetGatewaysApi(configuration);

let body:.PublicInternetGatewaysApiPublicInternetGatewayListRequest = {
  // number | The page number to load (optional)
  pageNumber: 1,
  // number | The size of the page (optional)
  pageSize: 20,
  // string | The associated network id to filter on. (optional)
  filterNetworkId: "6a09cdc3-8948-47f0-aa62-74ac943d6c58",
};

apiInstance.publicInternetGatewayList(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pageNumber** | [**number**] | The page number to load | (optional) defaults to 1
 **pageSize** | [**number**] | The size of the page | (optional) defaults to 20
 **filterNetworkId** | [**string**] | The associated network id to filter on. | (optional) defaults to undefined


### Return type

**PublicInternetGatewayList200Response**

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


