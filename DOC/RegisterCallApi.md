# .RegisterCallApi

All URIs are relative to *https://api.telnyx.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**registerCall**](RegisterCallApi.md#registerCall) | **POST** /calls/register | Register the call for Google Verified Calls


# **registerCall**
> RegisterCallResponse registerCall(registerCallRequest)

Register the call before dialing to show your brand on callee\'s phone.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .RegisterCallApi(configuration);

let body:.RegisterCallApiRegisterCallRequest = {
  // RegisterCallRequest | Register call request
  registerCallRequest: {
    _from: "+15001340938",
    to: "+18005550100",
    reason: "Confirm the Doctor appointment.",
  },
};

apiInstance.registerCall(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **registerCallRequest** | **RegisterCallRequest**| Register call request |


### Return type

**RegisterCallResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response upon making a register call command. |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


