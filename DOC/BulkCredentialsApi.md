# .BulkCredentialsApi

All URIs are relative to *https://api.telnyx.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**bulkCredentialAction**](BulkCredentialsApi.md#bulkCredentialAction) | **POST** /actions/{action}/telephony_credentials | Perform activate or deactivate action on all credentials filtered by the provided tag.
[**createBulkTelephonyCredential**](BulkCredentialsApi.md#createBulkTelephonyCredential) | **POST** /actions/bulk/telephony_credentials | Creates several credentials
[**deleteBulkTelephonyCredential**](BulkCredentialsApi.md#deleteBulkTelephonyCredential) | **DELETE** /actions/bulk/telephony_credentials | Delete several credentials
[**updateBulkTelephonyCredential**](BulkCredentialsApi.md#updateBulkTelephonyCredential) | **PATCH** /actions/bulk/telephony_credentials | Update several credentials


# **bulkCredentialAction**
> BulkCredentialResponse bulkCredentialAction()

Perform activate or deactivate action on all credentials filtered by the provided tag. Activate action will change the status to active, making it possible to connect calls with the credential. Deactivate action will change the status to inactive, making it impossible to connect calls with the credential.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BulkCredentialsApi(configuration);

let body:.BulkCredentialsApiBulkCredentialActionRequest = {
  // 'activate' | 'deactivate' | Identifies the action to be taken. Activate will change the status to active. Deactivate will change the status to inactive.
  action: "activate",
  // string | Filter by tag, required by bulk operations.
  filterTag: "filter[tag]_example",
};

apiInstance.bulkCredentialAction(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **action** | [**&#39;activate&#39; | &#39;deactivate&#39;**]**Array<&#39;activate&#39; &#124; &#39;deactivate&#39;>** | Identifies the action to be taken. Activate will change the status to active. Deactivate will change the status to inactive. | defaults to undefined
 **filterTag** | [**string**] | Filter by tag, required by bulk operations. | defaults to undefined


### Return type

**BulkCredentialResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response for Bulk credential requests |  -  |
**401** | Unauthorized |  -  |
**404** | Resource not found |  -  |
**422** | Bad request |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createBulkTelephonyCredential**
> BulkCredentialResponse createBulkTelephonyCredential(bulkCredentialRequest)

Creates several credentials in bulk.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BulkCredentialsApi(configuration);

let body:.BulkCredentialsApiCreateBulkTelephonyCredentialRequest = {
  // BulkCredentialRequest | Requested parameters to create credentials on bulk
  bulkCredentialRequest: {
    name: "Default Credentials",
    tag: "My Credentials",
    amount: 100,
    connectionId: "1234567890",
  },
};

apiInstance.createBulkTelephonyCredential(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bulkCredentialRequest** | **BulkCredentialRequest**| Requested parameters to create credentials on bulk |


### Return type

**BulkCredentialResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successful response for Bulk credential requests |  -  |
**422** | Bad request |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteBulkTelephonyCredential**
> BulkCredentialResponse deleteBulkTelephonyCredential()

Delete several credentials in bulk.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BulkCredentialsApi(configuration);

let body:.BulkCredentialsApiDeleteBulkTelephonyCredentialRequest = {
  // string | Filter by tag, required by bulk operations.
  filterTag: "filter[tag]_example",
};

apiInstance.deleteBulkTelephonyCredential(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filterTag** | [**string**] | Filter by tag, required by bulk operations. | defaults to undefined


### Return type

**BulkCredentialResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successful response for Bulk credential requests |  -  |
**422** | Bad request |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateBulkTelephonyCredential**
> BulkCredentialResponse updateBulkTelephonyCredential(bulkCredentialRequest)

Update several credentials in bulk.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BulkCredentialsApi(configuration);

let body:.BulkCredentialsApiUpdateBulkTelephonyCredentialRequest = {
  // string | Filter by tag, required by bulk operations.
  filterTag: "filter[tag]_example",
  // BulkCredentialRequest | Parameters to update credentials on bulk
  bulkCredentialRequest: {
    name: "Default Credentials",
    tag: "My Credentials",
    amount: 100,
    connectionId: "1234567890",
  },
};

apiInstance.updateBulkTelephonyCredential(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bulkCredentialRequest** | **BulkCredentialRequest**| Parameters to update credentials on bulk |
 **filterTag** | [**string**] | Filter by tag, required by bulk operations. | defaults to undefined


### Return type

**BulkCredentialResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successful response for Bulk credential requests |  -  |
**422** | Bad request |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


