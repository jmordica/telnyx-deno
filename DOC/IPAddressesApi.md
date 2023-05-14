# .IPAddressesApi

All URIs are relative to *https://api.telnyx.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**accessIPAddressCreate**](IPAddressesApi.md#accessIPAddressCreate) | **POST** /access_ip_address | Create new Access IP Address
[**accessIPAddressDelete**](IPAddressesApi.md#accessIPAddressDelete) | **DELETE** /access_ip_address/{access_ip_address_id} | Delete access IP address
[**accessIPAddressGet**](IPAddressesApi.md#accessIPAddressGet) | **GET** /access_ip_address/{access_ip_address_id} | Retrieve an access IP address
[**accessIPAddressList**](IPAddressesApi.md#accessIPAddressList) | **GET** /access_ip_address | List all Access IP Addresses


# **accessIPAddressCreate**
> AccessIPAddressResponseSchema accessIPAddressCreate(accessIPAddressPOST)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .IPAddressesApi(configuration);

let body:.IPAddressesApiAccessIPAddressCreateRequest = {
  // AccessIPAddressPOST
  accessIPAddressPOST: {
    ipAddress: "ipAddress_example",
    description: "description_example",
  },
};

apiInstance.accessIPAddressCreate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accessIPAddressPOST** | **AccessIPAddressPOST**|  |


### Return type

**AccessIPAddressResponseSchema**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **accessIPAddressDelete**
> AccessIPAddressResponseSchema accessIPAddressDelete()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .IPAddressesApi(configuration);

let body:.IPAddressesApiAccessIPAddressDeleteRequest = {
  // string
  accessIpAddressId: "access_ip_address_id_example",
};

apiInstance.accessIPAddressDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accessIpAddressId** | [**string**] |  | defaults to undefined


### Return type

**AccessIPAddressResponseSchema**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **accessIPAddressGet**
> AccessIPAddressResponseSchema accessIPAddressGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .IPAddressesApi(configuration);

let body:.IPAddressesApiAccessIPAddressGetRequest = {
  // string
  accessIpAddressId: "access_ip_address_id_example",
};

apiInstance.accessIPAddressGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accessIpAddressId** | [**string**] |  | defaults to undefined


### Return type

**AccessIPAddressResponseSchema**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **accessIPAddressList**
> AccessIPAddressListResponseSchema accessIPAddressList()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .IPAddressesApi(configuration);

let body:.IPAddressesApiAccessIPAddressListRequest = {
  // string (optional)
  filterIpSource: "filter[ip_source]_example",
  // string (optional)
  filterIpAddress: "filter[ip_address]_example",
  // CloudflareSyncStatus (optional)
  filterStatus: "pending",
  // Date (optional)
  filterCreatedAtGt: new Date('1970-01-01T00:00:00.00Z'),
  // Date (optional)
  filterCreatedAtLt: new Date('1970-01-01T00:00:00.00Z'),
  // number (optional)
  pageNumber: 1,
  // number (optional)
  pageSize: 20,
};

apiInstance.accessIPAddressList(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filterIpSource** | [**string**] |  | (optional) defaults to undefined
 **filterIpAddress** | [**string**] |  | (optional) defaults to undefined
 **filterStatus** | **CloudflareSyncStatus** |  | (optional) defaults to undefined
 **filterCreatedAtGt** | [**Date**] |  | (optional) defaults to undefined
 **filterCreatedAtLt** | [**Date**] |  | (optional) defaults to undefined
 **pageNumber** | [**number**] |  | (optional) defaults to 1
 **pageSize** | [**number**] |  | (optional) defaults to 20


### Return type

**AccessIPAddressListResponseSchema**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


