# .PushCredentialsApi

All URIs are relative to *https://api.telnyx.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createPushCredential**](PushCredentialsApi.md#createPushCredential) | **POST** /mobile_push_credentials | Creates a new mobile push credential
[**deletePushCredentialById**](PushCredentialsApi.md#deletePushCredentialById) | **DELETE** /mobile_push_credentials/{push_credential_id} | Deletes a mobile push credential
[**getPushCredentialById**](PushCredentialsApi.md#getPushCredentialById) | **GET** /mobile_push_credentials/{push_credential_id} | Retrieves a mobile push credential
[**listPushCredentials**](PushCredentialsApi.md#listPushCredentials) | **GET** /mobile_push_credentials | List mobile push credentials


# **createPushCredential**
> void createPushCredential(createPushCredentialRequest)

Creates a new mobile push credential

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PushCredentialsApi(configuration);

let body:.PushCredentialsApiCreatePushCredentialRequest = {
  // CreatePushCredentialRequest | Mobile push credential parameters that need to be sent in the request
  createPushCredentialRequest: null,
};

apiInstance.createPushCredential(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createPushCredentialRequest** | **CreatePushCredentialRequest**| Mobile push credential parameters that need to be sent in the request |


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
**200** | Mobile push credential created |  -  |
**401** | Unauthorized request |  -  |
**422** | Unable to process request |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deletePushCredentialById**
> void deletePushCredentialById()

Deletes a mobile push credential based on the given `push_credential_id`

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PushCredentialsApi(configuration);

let body:.PushCredentialsApiDeletePushCredentialByIdRequest = {
  // string | The unique identifier of a mobile push credential
  pushCredentialId: "0ccc7b76-4df3-4bca-a05a-3da1ecc389f0",
};

apiInstance.deletePushCredentialById(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pushCredentialId** | [**string**] | The unique identifier of a mobile push credential | defaults to undefined


### Return type

**void**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | The mobile push credential was deleted successfully |  -  |
**401** | Unauthorized request |  -  |
**404** | Resource not found |  -  |
**422** | Unable to process request |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getPushCredentialById**
> void getPushCredentialById()

Retrieves mobile push credential based on the given `push_credential_id`

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PushCredentialsApi(configuration);

let body:.PushCredentialsApiGetPushCredentialByIdRequest = {
  // string | The unique identifier of a mobile push credential
  pushCredentialId: "0ccc7b76-4df3-4bca-a05a-3da1ecc389f0",
};

apiInstance.getPushCredentialById(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pushCredentialId** | [**string**] | The unique identifier of a mobile push credential | defaults to undefined


### Return type

**void**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful get mobile push credential response |  -  |
**401** | Unauthorized request |  -  |
**404** | Resource not found |  -  |
**422** | Unable to process request |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listPushCredentials**
> void listPushCredentials()

List mobile push credentials

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PushCredentialsApi(configuration);

let body:.PushCredentialsApiListPushCredentialsRequest = {
  // 'ios' | 'android' | type of mobile push credentials (optional)
  filterType: "ios",
  // string | Unique mobile push credential alias (optional)
  filterAlias: "LucyCredential",
  // number | The size of the page (optional)
  pageSize: 20,
  // number | The page number to load (optional)
  pageNumber: 1,
};

apiInstance.listPushCredentials(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filterType** | [**&#39;ios&#39; | &#39;android&#39;**]**Array<&#39;ios&#39; &#124; &#39;android&#39;>** | type of mobile push credentials | (optional) defaults to undefined
 **filterAlias** | [**string**] | Unique mobile push credential alias | (optional) defaults to undefined
 **pageSize** | [**number**] | The size of the page | (optional) defaults to 20
 **pageNumber** | [**number**] | The page number to load | (optional) defaults to 1


### Return type

**void**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Mobile mobile push credentials |  -  |
**401** | Unauthorized request |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


