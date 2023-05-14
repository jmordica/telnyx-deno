# .DynamicEmergencyAddressesApi

All URIs are relative to *https://api.telnyx.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createDyanmicEmergencyAddress**](DynamicEmergencyAddressesApi.md#createDyanmicEmergencyAddress) | **POST** /dynamic_emergency_addresses | Create a dynamic emergency address.
[**deleteDynamicEmergencyAddress**](DynamicEmergencyAddressesApi.md#deleteDynamicEmergencyAddress) | **DELETE** /dynamic_emergency_addresses/{id} | Delete a dynamic emergency address
[**getDynamicEmergencyAddress**](DynamicEmergencyAddressesApi.md#getDynamicEmergencyAddress) | **GET** /dynamic_emergency_addresses/{id} | Get a dynamic emergency address
[**listDyanmicEmergencyAddresses**](DynamicEmergencyAddressesApi.md#listDyanmicEmergencyAddresses) | **GET** /dynamic_emergency_addresses | List dynamic emergency addresses


# **createDyanmicEmergencyAddress**
> CreateDyanmicEmergencyAddress201Response createDyanmicEmergencyAddress(dynamicEmergencyAddress)

Creates a dynamic emergency address.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DynamicEmergencyAddressesApi(configuration);

let body:.DynamicEmergencyAddressesApiCreateDyanmicEmergencyAddressRequest = {
  // DynamicEmergencyAddress
  dynamicEmergencyAddress: {
    houseNumber: "311",
    houseSuffix: "houseSuffix_example",
    streetPreDirectional: "W",
    streetName: "Superior",
    streetSuffix: "streetSuffix_example",
    streetPostDirectional: "streetPostDirectional_example",
    extendedAddress: "extendedAddress_example",
    locality: "Chicago",
    administrativeArea: "IL",
    postalCode: "60654",
    countryCode: "US",
  },
};

apiInstance.createDyanmicEmergencyAddress(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dynamicEmergencyAddress** | **DynamicEmergencyAddress**|  |


### Return type

**CreateDyanmicEmergencyAddress201Response**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Dynamic Emergency Address Response |  -  |
**401** | Unauthorized |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity. Check message field in response for details. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteDynamicEmergencyAddress**
> CreateDyanmicEmergencyAddress201Response deleteDynamicEmergencyAddress()

Deletes the dynamic emergency address based on the ID provided

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DynamicEmergencyAddressesApi(configuration);

let body:.DynamicEmergencyAddressesApiDeleteDynamicEmergencyAddressRequest = {
  // string | Dynamic Emergency Address id
  id: "id_example",
};

apiInstance.deleteDynamicEmergencyAddress(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Dynamic Emergency Address id | defaults to undefined


### Return type

**CreateDyanmicEmergencyAddress201Response**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Dynamic Emergency Address Response |  -  |
**401** | Unauthorized |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity. Check message field in response for details. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getDynamicEmergencyAddress**
> CreateDyanmicEmergencyAddress201Response getDynamicEmergencyAddress()

Returns the dynamic emergency address based on the ID provided

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DynamicEmergencyAddressesApi(configuration);

let body:.DynamicEmergencyAddressesApiGetDynamicEmergencyAddressRequest = {
  // string | Dynamic Emergency Address id
  id: "id_example",
};

apiInstance.getDynamicEmergencyAddress(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Dynamic Emergency Address id | defaults to undefined


### Return type

**CreateDyanmicEmergencyAddress201Response**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Dynamic Emergency Address Response |  -  |
**401** | Unauthorized |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity. Check message field in response for details. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listDyanmicEmergencyAddresses**
> ListDyanmicEmergencyAddresses200Response listDyanmicEmergencyAddresses()

Returns the dynamic emergency addresses according to filters

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DynamicEmergencyAddressesApi(configuration);

let body:.DynamicEmergencyAddressesApiListDyanmicEmergencyAddressesRequest = {
  // 'pending' | 'activated' | 'rejected' | Filter by status. (optional)
  filterStatus: "pending",
  // string | Filter by country code. (optional)
  filterCountryCode: "filter[country_code]_example",
  // number | The page number to load (optional)
  pageNumber: 1,
  // number | The size of the page (optional)
  pageSize: 20,
};

apiInstance.listDyanmicEmergencyAddresses(body).then((data:any) => {
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

**ListDyanmicEmergencyAddresses200Response**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Dynamic Emergency Address Responses |  -  |
**401** | Unauthorized |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity. Check message field in response for details. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


