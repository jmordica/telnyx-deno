# .PrivateWirelessGatewaysApi

All URIs are relative to *https://api.telnyx.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createPrivateWirelessGateway**](PrivateWirelessGatewaysApi.md#createPrivateWirelessGateway) | **POST** /private_wireless_gateways | Create a Private Wireless Gateway
[**deletePrivateWirelessGateway**](PrivateWirelessGatewaysApi.md#deletePrivateWirelessGateway) | **DELETE** /private_wireless_gateways/{id} | Delete a Private Wireless Gateway
[**getPrivateWirelessGateway**](PrivateWirelessGatewaysApi.md#getPrivateWirelessGateway) | **GET** /private_wireless_gateways/{id} | Get a Private Wireless Gateway
[**getPrivateWirelessGateways**](PrivateWirelessGatewaysApi.md#getPrivateWirelessGateways) | **GET** /private_wireless_gateways | Get all Private Wireless Gateways


# **createPrivateWirelessGateway**
> CreatePrivateWirelessGateway202Response createPrivateWirelessGateway(createPrivateWirelessGatewayRequest)

Asynchronously create a Private Wireless Gateway for SIM cards for a previously created network.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PrivateWirelessGatewaysApi(configuration);

let body:.PrivateWirelessGatewaysApiCreatePrivateWirelessGatewayRequest = {
  // CreatePrivateWirelessGatewayRequest
  createPrivateWirelessGatewayRequest: {
    networkId: "6a09cdc3-8948-47f0-aa62-74ac943d6c58",
    name: "My private wireless gateway",
  },
};

apiInstance.createPrivateWirelessGateway(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createPrivateWirelessGatewayRequest** | **CreatePrivateWirelessGatewayRequest**|  |


### Return type

**CreatePrivateWirelessGateway202Response**

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

# **deletePrivateWirelessGateway**
> CreatePrivateWirelessGateway202Response deletePrivateWirelessGateway()

Deletes the Private Wireless Gateway.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PrivateWirelessGatewaysApi(configuration);

let body:.PrivateWirelessGatewaysApiDeletePrivateWirelessGatewayRequest = {
  // string | Identifies the resource.
  id: "6a09cdc3-8948-47f0-aa62-74ac943d6c58",
};

apiInstance.deletePrivateWirelessGateway(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Identifies the resource. | defaults to undefined


### Return type

**CreatePrivateWirelessGateway202Response**

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

# **getPrivateWirelessGateway**
> CreatePrivateWirelessGateway202Response getPrivateWirelessGateway()

Retrieve information about a Private Wireless Gateway.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PrivateWirelessGatewaysApi(configuration);

let body:.PrivateWirelessGatewaysApiGetPrivateWirelessGatewayRequest = {
  // string | Identifies the resource.
  id: "6a09cdc3-8948-47f0-aa62-74ac943d6c58",
};

apiInstance.getPrivateWirelessGateway(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Identifies the resource. | defaults to undefined


### Return type

**CreatePrivateWirelessGateway202Response**

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

# **getPrivateWirelessGateways**
> GetPrivateWirelessGateways200Response getPrivateWirelessGateways()

Get all Private Wireless Gateways belonging to the user.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PrivateWirelessGatewaysApi(configuration);

let body:.PrivateWirelessGatewaysApiGetPrivateWirelessGatewaysRequest = {
  // number | The page number to load (optional)
  pageNumber: 1,
  // number | The size of the page (optional)
  pageSize: 20,
  // string | The name of the Private Wireless Gateway. (optional)
  filterName: "my private gateway",
  // string | The IP address range of the Private Wireless Gateway. (optional)
  filterIpRange: "192.168.0.0/24",
  // string | The name of the region where the Private Wireless Gateway is deployed. (optional)
  filterRegionCode: "ashburn-va",
  // string | Private Wireless Gateway resource creation date. (optional)
  filterCreatedAt: "2018-02-02T22:25:27.521Z",
  // string | When the Private Wireless Gateway was last updated. (optional)
  filterUpdatedAt: "2018-02-02T22:25:27.521Z",
};

apiInstance.getPrivateWirelessGateways(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pageNumber** | [**number**] | The page number to load | (optional) defaults to 1
 **pageSize** | [**number**] | The size of the page | (optional) defaults to 20
 **filterName** | [**string**] | The name of the Private Wireless Gateway. | (optional) defaults to undefined
 **filterIpRange** | [**string**] | The IP address range of the Private Wireless Gateway. | (optional) defaults to undefined
 **filterRegionCode** | [**string**] | The name of the region where the Private Wireless Gateway is deployed. | (optional) defaults to undefined
 **filterCreatedAt** | [**string**] | Private Wireless Gateway resource creation date. | (optional) defaults to undefined
 **filterUpdatedAt** | [**string**] | When the Private Wireless Gateway was last updated. | (optional) defaults to undefined


### Return type

**GetPrivateWirelessGateways200Response**

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


