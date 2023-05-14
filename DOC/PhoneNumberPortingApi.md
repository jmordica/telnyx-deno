# .PhoneNumberPortingApi

All URIs are relative to *https://api.telnyx.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**postPortabilityCheck**](PhoneNumberPortingApi.md#postPortabilityCheck) | **POST** /portability_checks | Run a portability check


# **postPortabilityCheck**
> PostPortabilityCheck201Response postPortabilityCheck(postPortabilityCheckRequest)

Runs a portability check, returning the results immediately.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PhoneNumberPortingApi(configuration);

let body:.PhoneNumberPortingApiPostPortabilityCheckRequest = {
  // PostPortabilityCheckRequest
  postPortabilityCheckRequest: {
    phoneNumbers: ["+13035550000","+13035550001","+13035550002"],
  },
};

apiInstance.postPortabilityCheck(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **postPortabilityCheckRequest** | **PostPortabilityCheckRequest**|  |


### Return type

**PostPortabilityCheck201Response**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | PortabilityCheck Response |  -  |
**401** | Unauthorized |  -  |
**422** | Unprocessable entity. Check message field in response for details. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


