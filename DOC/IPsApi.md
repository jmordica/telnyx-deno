# .IPsApi

All URIs are relative to *https://api.telnyx.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createIp**](IPsApi.md#createIp) | **POST** /ips | Create an Ip
[**deleteIp**](IPsApi.md#deleteIp) | **DELETE** /ips/{id} | Delete an Ip
[**listIps**](IPsApi.md#listIps) | **GET** /ips | List Ips
[**retrieveIp**](IPsApi.md#retrieveIp) | **GET** /ips/{id} | Retrieve an Ip
[**updateIp**](IPsApi.md#updateIp) | **PATCH** /ips/{id} | Update an Ip


# **createIp**
> IpResponse createIp()

Create a new IP object.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .IPsApi(configuration);

let body:.IPsApiCreateIpRequest = {
  // CreateIpRequest (optional)
  createIpRequest: {
    connectionId: "connectionId_example",
    ipAddress: "192.168.0.0",
    port: 5060,
  },
};

apiInstance.createIp(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createIpRequest** | **CreateIpRequest**|  |


### Return type

**IpResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successful response with details about an IP. |  -  |
**400** | Bad request |  -  |
**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteIp**
> IpResponse deleteIp()

Delete an IP.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .IPsApi(configuration);

let body:.IPsApiDeleteIpRequest = {
  // string | Identifies the type of resource.
  id: "6a09cdc3-8948-47f0-aa62-74ac943d6c58",
};

apiInstance.deleteIp(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Identifies the type of resource. | defaults to undefined


### Return type

**IpResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response with details about an IP. |  -  |
**400** | Bad request |  -  |
**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listIps**
> ListIpsResponse listIps()

Get all IPs belonging to the user that match the given filters.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .IPsApi(configuration);

let body:.IPsApiListIpsRequest = {
  // number | The page number to load (optional)
  pageNumber: 1,
  // number | The size of the page (optional)
  pageSize: 20,
  // string | ID of the IP Connection to which this IP should be attached. (optional)
  filterConnectionId: "filter[connection_id]_example",
  // string | IP adddress represented by this resource. (optional)
  filterIpAddress: "192.168.0.0",
  // number | Port to use when connecting to this IP. (optional)
  filterPort: 5060,
};

apiInstance.listIps(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pageNumber** | [**number**] | The page number to load | (optional) defaults to 1
 **pageSize** | [**number**] | The size of the page | (optional) defaults to 20
 **filterConnectionId** | [**string**] | ID of the IP Connection to which this IP should be attached. | (optional) defaults to undefined
 **filterIpAddress** | [**string**] | IP adddress represented by this resource. | (optional) defaults to undefined
 **filterPort** | [**number**] | Port to use when connecting to this IP. | (optional) defaults to undefined


### Return type

**ListIpsResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response with a list of IPs. |  -  |
**400** | Bad request |  -  |
**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **retrieveIp**
> IpResponse retrieveIp()

Return the details regarding a specific IP.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .IPsApi(configuration);

let body:.IPsApiRetrieveIpRequest = {
  // string | Identifies the type of resource.
  id: "6a09cdc3-8948-47f0-aa62-74ac943d6c58",
};

apiInstance.retrieveIp(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Identifies the type of resource. | defaults to undefined


### Return type

**IpResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response with details about an IP. |  -  |
**400** | Bad request |  -  |
**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateIp**
> IpResponse updateIp()

Update the details of a specific IP.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .IPsApi(configuration);

let body:.IPsApiUpdateIpRequest = {
  // string | Identifies the type of resource.
  id: "6a09cdc3-8948-47f0-aa62-74ac943d6c58",
  // UpdateIpRequest (optional)
  updateIpRequest: {
    connectionId: "connectionId_example",
    ipAddress: "192.168.0.0",
    port: 5060,
  },
};

apiInstance.updateIp(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateIpRequest** | **UpdateIpRequest**|  |
 **id** | [**string**] | Identifies the type of resource. | defaults to undefined


### Return type

**IpResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response with details about an IP. |  -  |
**400** | Bad request |  -  |
**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


