# .NumberLookupApi

All URIs are relative to *https://api.telnyx.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**numberLookup**](NumberLookupApi.md#numberLookup) | **GET** /number_lookup/{phone_number} | Lookup phone number data


# **numberLookup**
> NumberLookupResponse numberLookup()

Returns information about the provided phone number.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .NumberLookupApi(configuration);

let body:.NumberLookupApiNumberLookupRequest = {
  // string | The phone number to be looked up
  phoneNumber: "+18665552368",
  // 'carrier' | 'caller-name' | Specifies the type of number lookup to be performed (optional)
  type: "carrier",
};

apiInstance.numberLookup(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **phoneNumber** | [**string**] | The phone number to be looked up | defaults to undefined
 **type** | [**&#39;carrier&#39; | &#39;caller-name&#39;**]**Array<&#39;carrier&#39; &#124; &#39;caller-name&#39;>** | Specifies the type of number lookup to be performed | (optional) defaults to undefined


### Return type

**NumberLookupResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**422** | Unprocessable entity. Check the \&#39;detail\&#39; field in response for details. |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


