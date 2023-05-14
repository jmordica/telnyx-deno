# .MessagingTollfreeVerificationsApi

All URIs are relative to *https://api.telnyx.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteVerificationRequestPublicApiV2RequestsIdDelete**](MessagingTollfreeVerificationsApi.md#deleteVerificationRequestPublicApiV2RequestsIdDelete) | **DELETE** /messaging_tollfree/verification/requests/{id} | Delete Verification Request


# **deleteVerificationRequestPublicApiV2RequestsIdDelete**
> any deleteVerificationRequestPublicApiV2RequestsIdDelete()

Delete a verification request  A request may only be deleted when when the request is in the \"rejected\" state.  * `HTTP 200`: request successfully deleted * `HTTP 400`: request exists but can\'t be deleted (i.e. not rejected) * `HTTP 404`: request unknown or already deleted

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MessagingTollfreeVerificationsApi(configuration);

let body:.MessagingTollfreeVerificationsApiDeleteVerificationRequestPublicApiV2RequestsIdDeleteRequest = {
  // string
  id: "id_example",
};

apiInstance.deleteVerificationRequestPublicApiV2RequestsIdDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] |  | defaults to undefined


### Return type

**any**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


