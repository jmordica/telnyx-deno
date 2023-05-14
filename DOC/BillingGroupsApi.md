# .BillingGroupsApi

All URIs are relative to *https://api.telnyx.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createBillingGroup**](BillingGroupsApi.md#createBillingGroup) | **POST** /billing_groups | Create a billing group
[**deleteBillingGroup**](BillingGroupsApi.md#deleteBillingGroup) | **DELETE** /billing_groups/{id} | Delete a billing group
[**listBillingGroups**](BillingGroupsApi.md#listBillingGroups) | **GET** /billing_groups | List all billing groups
[**retrieveBillingGroup**](BillingGroupsApi.md#retrieveBillingGroup) | **GET** /billing_groups/{id} | Retrieve a billing group
[**updateBillingGroup**](BillingGroupsApi.md#updateBillingGroup) | **PATCH** /billing_groups/{id} | Update a billing group


# **createBillingGroup**
> CreateBillingGroup200Response createBillingGroup(newBillingGroup)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BillingGroupsApi(configuration);

let body:.BillingGroupsApiCreateBillingGroupRequest = {
  // NewBillingGroup | New billing group object
  newBillingGroup: null,
};

apiInstance.createBillingGroup(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **newBillingGroup** | **NewBillingGroup**| New billing group object |


### Return type

**CreateBillingGroup200Response**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Expected billing group response to a valid request |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteBillingGroup**
> CreateBillingGroup200Response deleteBillingGroup()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BillingGroupsApi(configuration);

let body:.BillingGroupsApiDeleteBillingGroupRequest = {
  // string | The id of the billing group
  id: "id_example",
};

apiInstance.deleteBillingGroup(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | The id of the billing group | defaults to undefined


### Return type

**CreateBillingGroup200Response**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Expected billing group response to a valid request |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listBillingGroups**
> ListBillingGroups200Response listBillingGroups()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BillingGroupsApi(configuration);

let body:.BillingGroupsApiListBillingGroupsRequest = {
  // number | The page number to load (optional)
  pageNumber: 1,
  // number | The size of the page (optional)
  pageSize: 20,
};

apiInstance.listBillingGroups(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pageNumber** | [**number**] | The page number to load | (optional) defaults to 1
 **pageSize** | [**number**] | The size of the page | (optional) defaults to 20


### Return type

**ListBillingGroups200Response**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A paginated array of billing groups |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **retrieveBillingGroup**
> CreateBillingGroup200Response retrieveBillingGroup()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BillingGroupsApi(configuration);

let body:.BillingGroupsApiRetrieveBillingGroupRequest = {
  // string | The id of the billing group
  id: "id_example",
};

apiInstance.retrieveBillingGroup(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | The id of the billing group | defaults to undefined


### Return type

**CreateBillingGroup200Response**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Expected billing group response to a valid request |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateBillingGroup**
> CreateBillingGroup200Response updateBillingGroup(updateBillingGroup)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BillingGroupsApi(configuration);

let body:.BillingGroupsApiUpdateBillingGroupRequest = {
  // string | The id of the billing group
  id: "id_example",
  // UpdateBillingGroup | Update billing group object
  updateBillingGroup: null,
};

apiInstance.updateBillingGroup(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateBillingGroup** | **UpdateBillingGroup**| Update billing group object |
 **id** | [**string**] | The id of the billing group | defaults to undefined


### Return type

**CreateBillingGroup200Response**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Expected billing group response to a valid request |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


