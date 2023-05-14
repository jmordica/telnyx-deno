# .CallInformationApi

All URIs are relative to *https://api.telnyx.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listConnectionActiveCalls**](CallInformationApi.md#listConnectionActiveCalls) | **GET** /connections/{connection_id}/active_calls | List all active calls for given connection
[**retrieveCallStatus**](CallInformationApi.md#retrieveCallStatus) | **GET** /calls/{call_control_id} | Retrieve a call status


# **listConnectionActiveCalls**
> ActiveCallsResponse listConnectionActiveCalls()

Lists all active calls for given connection. Acceptable connections are either SIP connections with webhook_url or xml_request_url, call control or texml. Returned results are cursor paginated. 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CallInformationApi(configuration);

let body:.CallInformationApiListConnectionActiveCallsRequest = {
  // string | Telnyx connection id
  connectionId: "1293384261075731461",
  // number | Limit of records per single page (optional)
  pageLimit: 20,
  // string | Opaque identifier of next page (optional)
  pageAfter: "null",
  // string | Opaque identifier of previous page (optional)
  pageBefore: "null",
};

apiInstance.listConnectionActiveCalls(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **connectionId** | [**string**] | Telnyx connection id | defaults to undefined
 **pageLimit** | [**number**] | Limit of records per single page | (optional) defaults to 20
 **pageAfter** | [**string**] | Opaque identifier of next page | (optional) defaults to 'null'
 **pageBefore** | [**string**] | Opaque identifier of previous page | (optional) defaults to 'null'


### Return type

**ActiveCallsResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response with list of details about active calls. |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **retrieveCallStatus**
> RetrieveCallStatusResponse retrieveCallStatus()

Returns the status of a call (data is available 10 minutes after call ended).

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CallInformationApi(configuration);

let body:.CallInformationApiRetrieveCallStatusRequest = {
  // string | Unique identifier and token for controlling the call
  callControlId: "call_control_id_example",
};

apiInstance.retrieveCallStatus(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **callControlId** | [**string**] | Unique identifier and token for controlling the call | defaults to undefined


### Return type

**RetrieveCallStatusResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response with details about a call status. |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


