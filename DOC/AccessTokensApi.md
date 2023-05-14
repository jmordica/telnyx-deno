# .AccessTokensApi

All URIs are relative to *https://api.telnyx.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createTelephonyCredentialToken**](AccessTokensApi.md#createTelephonyCredentialToken) | **POST** /telephony_credentials/{id}/token | Create an Access Token.


# **createTelephonyCredentialToken**
> string createTelephonyCredentialToken()

Create an Access Token (JWT) for the credential.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AccessTokensApi(configuration);

let body:.AccessTokensApiCreateTelephonyCredentialTokenRequest = {
  // string | Identifies the resource.
  id: "id_example",
};

apiInstance.createTelephonyCredentialToken(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Identifies the resource. | defaults to undefined


### Return type

**string**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | JWT |  -  |
**404** | Resource not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


