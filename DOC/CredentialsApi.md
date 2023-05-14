# .CredentialsApi

All URIs are relative to *https://api.telnyx.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createTelephonyCredential**](CredentialsApi.md#createTelephonyCredential) | **POST** /telephony_credentials | Create a credential
[**deleteTelephonyCredential**](CredentialsApi.md#deleteTelephonyCredential) | **DELETE** /telephony_credentials/{id} | Delete a credential
[**findTelephonyCredentials**](CredentialsApi.md#findTelephonyCredentials) | **GET** /telephony_credentials | List all credentials
[**getTelephonyCredential**](CredentialsApi.md#getTelephonyCredential) | **GET** /telephony_credentials/{id} | Get a credential
[**listTags**](CredentialsApi.md#listTags) | **GET** /telephony_credentials/tags | List all tags
[**telephonyCredentialAction**](CredentialsApi.md#telephonyCredentialAction) | **POST** /telephony_credentials/{id}/actions/{action} | Perform activate or deactivate action on provided Credential
[**updateTelephonyCredential**](CredentialsApi.md#updateTelephonyCredential) | **PATCH** /telephony_credentials/{id} | Update a credential


# **createTelephonyCredential**
> TelephonyCredentialResponse createTelephonyCredential(telephonyCredentialCreateRequest)

Create a credential.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CredentialsApi(configuration);

let body:.CredentialsApiCreateTelephonyCredentialRequest = {
  // TelephonyCredentialCreateRequest | Parameters that can be defined during credential creation
  telephonyCredentialCreateRequest: {
    name: "name_example",
    tag: "some_tag",
    connectionId: "1234567890",
    expiresAt: "2018-02-02T22:25:27.521Z",
  },
};

apiInstance.createTelephonyCredential(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **telephonyCredentialCreateRequest** | **TelephonyCredentialCreateRequest**| Parameters that can be defined during credential creation |


### Return type

**TelephonyCredentialResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successful response with details about a credential |  -  |
**422** | Bad request |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteTelephonyCredential**
> TelephonyCredentialResponse deleteTelephonyCredential()

Delete an existing credential.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CredentialsApi(configuration);

let body:.CredentialsApiDeleteTelephonyCredentialRequest = {
  // string | Identifies the resource.
  id: "id_example",
};

apiInstance.deleteTelephonyCredential(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Identifies the resource. | defaults to undefined


### Return type

**TelephonyCredentialResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response with details about a credential |  -  |
**401** | Unauthorized |  -  |
**404** | Resource not found |  -  |
**422** | Bad request |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **findTelephonyCredentials**
> GetAllTelephonyCredentialResponse findTelephonyCredentials()

List all On-demand Credentials.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CredentialsApi(configuration);

let body:.CredentialsApiFindTelephonyCredentialsRequest = {
  // number | The page number to load (optional)
  pageNumber: 1,
  // number | The size of the page (optional)
  pageSize: 20,
  // string | Filter by tag (optional)
  filterTag: "filter[tag]_example",
  // string | Filter by name (optional)
  filterName: "filter[name]_example",
  // string | Filter by status (optional)
  filterStatus: "filter[status]_example",
  // string | Filter by resource_id (optional)
  filterResourceId: "filter[resource_id]_example",
  // string | Filter by sip_username (optional)
  filterSipUsername: "filter[sip_username]_example",
};

apiInstance.findTelephonyCredentials(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pageNumber** | [**number**] | The page number to load | (optional) defaults to 1
 **pageSize** | [**number**] | The size of the page | (optional) defaults to 20
 **filterTag** | [**string**] | Filter by tag | (optional) defaults to undefined
 **filterName** | [**string**] | Filter by name | (optional) defaults to undefined
 **filterStatus** | [**string**] | Filter by status | (optional) defaults to undefined
 **filterResourceId** | [**string**] | Filter by resource_id | (optional) defaults to undefined
 **filterSipUsername** | [**string**] | Filter by sip_username | (optional) defaults to undefined


### Return type

**GetAllTelephonyCredentialResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response with multiple credentials |  -  |
**400** | Bad request |  -  |
**401** | Unauthorized |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getTelephonyCredential**
> TelephonyCredentialResponse getTelephonyCredential()

Get the details of an existing On-demand Credential.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CredentialsApi(configuration);

let body:.CredentialsApiGetTelephonyCredentialRequest = {
  // string | Identifies the resource.
  id: "id_example",
};

apiInstance.getTelephonyCredential(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Identifies the resource. | defaults to undefined


### Return type

**TelephonyCredentialResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response with details about a credential |  -  |
**400** | Bad request |  -  |
**401** | Unauthorized |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listTags**
> ListTagsResponse listTags()

Returns a list of tags used on Credentials

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CredentialsApi(configuration);

let body:.CredentialsApiListTagsRequest = {
  // number | The page number to load (optional)
  pageNumber: 1,
  // number | The size of the page (optional)
  pageSize: 20,
};

apiInstance.listTags(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pageNumber** | [**number**] | The page number to load | (optional) defaults to 1
 **pageSize** | [**number**] | The size of the page | (optional) defaults to 20


### Return type

**ListTagsResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response with multiple tags |  -  |
**400** | Bad request |  -  |
**401** | Unauthorized |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **telephonyCredentialAction**
> TelephonyCredentialResponse telephonyCredentialAction()

Perform activate or deactivate action on provided Credential. Activate action will change the status to active, making it possible to connect calls with the credential. Deactivate action will change the status to inactive, making it impossible to connect calls with the credential.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CredentialsApi(configuration);

let body:.CredentialsApiTelephonyCredentialActionRequest = {
  // string | Identifies the resource.
  id: "id_example",
  // 'activate' | 'deactivate' | Identifies the action to be taken.
  action: "activate",
};

apiInstance.telephonyCredentialAction(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Identifies the resource. | defaults to undefined
 **action** | [**&#39;activate&#39; | &#39;deactivate&#39;**]**Array<&#39;activate&#39; &#124; &#39;deactivate&#39;>** | Identifies the action to be taken. | defaults to undefined


### Return type

**TelephonyCredentialResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response with details about a credential |  -  |
**400** | Bad request |  -  |
**401** | Unauthorized |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateTelephonyCredential**
> TelephonyCredentialResponse updateTelephonyCredential(telephonyCredentialUpdateRequest)

Update an existing credential.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CredentialsApi(configuration);

let body:.CredentialsApiUpdateTelephonyCredentialRequest = {
  // string | Identifies the resource.
  id: "id_example",
  // TelephonyCredentialUpdateRequest | Parameters that can be updated in a credential
  telephonyCredentialUpdateRequest: {
    name: "name_example",
    tag: "some_tag",
    connectionId: "987654321",
    expiresAt: "2018-02-02T22:25:27.521Z",
  },
};

apiInstance.updateTelephonyCredential(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **telephonyCredentialUpdateRequest** | **TelephonyCredentialUpdateRequest**| Parameters that can be updated in a credential |
 **id** | [**string**] | Identifies the resource. | defaults to undefined


### Return type

**TelephonyCredentialResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response with details about a credential |  -  |
**401** | Unauthorized |  -  |
**404** | Resource not found |  -  |
**422** | Bad request |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


