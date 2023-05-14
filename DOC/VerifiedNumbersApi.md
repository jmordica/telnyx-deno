# .VerifiedNumbersApi

All URIs are relative to *https://api.telnyx.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createVerifiedNumber**](VerifiedNumbersApi.md#createVerifiedNumber) | **POST** /verified_numbers | Request phone number verification
[**deleteVerifiedNumber**](VerifiedNumbersApi.md#deleteVerifiedNumber) | **DELETE** /verified_numbers/{phone_number} | Delete a verified number
[**listVerifiedNumbers**](VerifiedNumbersApi.md#listVerifiedNumbers) | **GET** /verified_numbers | List all Verified Numbers
[**retrieveVerifiedNumber**](VerifiedNumbersApi.md#retrieveVerifiedNumber) | **GET** /verified_numbers/{phone_number} | Retrieve a verified number
[**verifiedNumbersPhoneNumberActionsVerifyPost**](VerifiedNumbersApi.md#verifiedNumbersPhoneNumberActionsVerifyPost) | **POST** /verified_numbers/{phone_number}/actions/verify | Submit verification code


# **createVerifiedNumber**
> CreateVerifiedNumberResponse createVerifiedNumber(createVerifiedNumberRequest)

Initiates phone number verification procedure.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .VerifiedNumbersApi(configuration);

let body:.VerifiedNumbersApiCreateVerifiedNumberRequest = {
  // CreateVerifiedNumberRequest
  createVerifiedNumberRequest: {
    phoneNumber: "+15551234567",
    verificationMethod: "sms",
  },
};

apiInstance.createVerifiedNumber(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createVerifiedNumberRequest** | **CreateVerifiedNumberRequest**|  |


### Return type

**CreateVerifiedNumberResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Expected response to a valid request. |  -  |
**400** | Unexpected error |  -  |
**401** | Unauthorized Request |  -  |
**422** | Unprocessable entity. Check the \&#39;detail\&#39; field in response for details. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteVerifiedNumber**
> VerifiedNumberResponseDataWrapper deleteVerifiedNumber()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .VerifiedNumbersApi(configuration);

let body:.VerifiedNumbersApiDeleteVerifiedNumberRequest = {
  // string | The phone number being deleted.
  phoneNumber: "+15551234567",
};

apiInstance.deleteVerifiedNumber(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **phoneNumber** | [**string**] | The phone number being deleted. | defaults to undefined


### Return type

**VerifiedNumberResponseDataWrapper**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Expected verifications response to a valid request. |  -  |
**400** | Unexpected error |  -  |
**401** | Unauthorized Request |  -  |
**404** | Resource Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listVerifiedNumbers**
> ListVerifiedNumbersResponse listVerifiedNumbers()

Gets a paginated list of Verified Numbers.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .VerifiedNumbersApi(configuration);

let body:.VerifiedNumbersApiListVerifiedNumbersRequest = {
  // number (optional)
  pageSize: 25,
  // number (optional)
  pageNumber: 1,
};

apiInstance.listVerifiedNumbers(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pageSize** | [**number**] |  | (optional) defaults to 25
 **pageNumber** | [**number**] |  | (optional) defaults to 1


### Return type

**ListVerifiedNumbersResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Expected response to a valid request. |  -  |
**400** | Unexpected error |  -  |
**401** | Unauthorized Request |  -  |
**422** | Unprocessable entity. Check the \&#39;detail\&#39; field in response for details. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **retrieveVerifiedNumber**
> VerifiedNumberResponseDataWrapper retrieveVerifiedNumber()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .VerifiedNumbersApi(configuration);

let body:.VerifiedNumbersApiRetrieveVerifiedNumberRequest = {
  // string | The phone number being requested.
  phoneNumber: "+15551234567",
};

apiInstance.retrieveVerifiedNumber(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **phoneNumber** | [**string**] | The phone number being requested. | defaults to undefined


### Return type

**VerifiedNumberResponseDataWrapper**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Expected verifications response to a valid request. |  -  |
**400** | Unexpected error |  -  |
**401** | Unauthorized Request |  -  |
**404** | Resource Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **verifiedNumbersPhoneNumberActionsVerifyPost**
> VerifiedNumberResponseDataWrapper verifiedNumbersPhoneNumberActionsVerifyPost(verifyVerificationCodeRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .VerifiedNumbersApi(configuration);

let body:.VerifiedNumbersApiVerifiedNumbersPhoneNumberActionsVerifyPostRequest = {
  // string | The phone number being verified.
  phoneNumber: "+15551234567",
  // VerifyVerificationCodeRequest
  verifyVerificationCodeRequest: {
    verificationCode: "123456",
  },
};

apiInstance.verifiedNumbersPhoneNumberActionsVerifyPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **verifyVerificationCodeRequest** | **VerifyVerificationCodeRequest**|  |
 **phoneNumber** | [**string**] | The phone number being verified. | defaults to undefined


### Return type

**VerifiedNumberResponseDataWrapper**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Expected response to a valid request. |  -  |
**400** | Unexpected error |  -  |
**401** | Unauthorized Request |  -  |
**404** | Resource Not Found |  -  |
**422** | Unprocessable entity. Check the \&#39;detail\&#39; field in response for details. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


