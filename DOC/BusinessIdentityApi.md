# .BusinessIdentityApi

All URIs are relative to *https://api.telnyx.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createBusinessIdentity**](BusinessIdentityApi.md#createBusinessIdentity) | **POST** /business_identities | Creates a Business Identity
[**deleteBusinessIdentity**](BusinessIdentityApi.md#deleteBusinessIdentity) | **DELETE** /business_identities/{id} | Delete a Business Identity
[**displayBusinessIdentity**](BusinessIdentityApi.md#displayBusinessIdentity) | **GET** /business_identities/{id} | Display the Business Identity
[**listBusinessIdentities**](BusinessIdentityApi.md#listBusinessIdentities) | **GET** /business_identities | Lists the Business Identities owned by the current user/organization
[**updateBusinessIdentity**](BusinessIdentityApi.md#updateBusinessIdentity) | **PATCH** /business_identities/{id} | Update a Business Identity


# **createBusinessIdentity**
> void createBusinessIdentity(createOrUpdateBusinessIdentityRequest)

Creates a new Business Identity.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BusinessIdentityApi(configuration);

let body:.BusinessIdentityApiCreateBusinessIdentityRequest = {
  // CreateOrUpdateBusinessIdentityRequest
  createOrUpdateBusinessIdentityRequest: {
    name: "Okta",
  },
};

apiInstance.createBusinessIdentity(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createOrUpdateBusinessIdentityRequest** | **CreateOrUpdateBusinessIdentityRequest**|  |


### Return type

**void**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Business Identity was created. |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteBusinessIdentity**
> ShowBusinessIdentityResponse deleteBusinessIdentity()

Deletes the Business Identity. This action will fail if any verification requests have been made for any associated Display Profile. Please contact support@telnyx.com in case you want to delete a Business Identity in that situation.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BusinessIdentityApi(configuration);

let body:.BusinessIdentityApiDeleteBusinessIdentityRequest = {
  // string | Identifies the Business Identity
  id: "id_example",
};

apiInstance.deleteBusinessIdentity(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Identifies the Business Identity | defaults to undefined


### Return type

**ShowBusinessIdentityResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response with a Business Identity. |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **displayBusinessIdentity**
> ShowBusinessIdentityResponse displayBusinessIdentity()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BusinessIdentityApi(configuration);

let body:.BusinessIdentityApiDisplayBusinessIdentityRequest = {
  // string | Identifies the Business Identity
  id: "id_example",
};

apiInstance.displayBusinessIdentity(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Identifies the Business Identity | defaults to undefined


### Return type

**ShowBusinessIdentityResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response with a Business Identity. |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listBusinessIdentities**
> ListBusinessIdentitiesResponse listBusinessIdentities()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BusinessIdentityApi(configuration);

let body:.BusinessIdentityApiListBusinessIdentitiesRequest = {
  // number | The page number to load (optional)
  pageNumber: 1,
  // number | The size of the page (optional)
  pageSize: 20,
};

apiInstance.listBusinessIdentities(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pageNumber** | [**number**] | The page number to load | (optional) defaults to 1
 **pageSize** | [**number**] | The size of the page | (optional) defaults to 20


### Return type

**ListBusinessIdentitiesResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response with a list of Business Identities. |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateBusinessIdentity**
> void updateBusinessIdentity(createOrUpdateBusinessIdentityRequest)

Update an existing Business Identity.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BusinessIdentityApi(configuration);

let body:.BusinessIdentityApiUpdateBusinessIdentityRequest = {
  // string | Identifies the Business Identity
  id: "id_example",
  // CreateOrUpdateBusinessIdentityRequest
  createOrUpdateBusinessIdentityRequest: {
    name: "Okta",
  },
};

apiInstance.updateBusinessIdentity(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createOrUpdateBusinessIdentityRequest** | **CreateOrUpdateBusinessIdentityRequest**|  |
 **id** | [**string**] | Identifies the Business Identity | defaults to undefined


### Return type

**void**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Business Identity was updated. |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


