# .QueueCommandsApi

All URIs are relative to *https://api.telnyx.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listQueueCalls**](QueueCommandsApi.md#listQueueCalls) | **GET** /queues/{queue_name}/calls | Retrieve calls from a queue
[**retrieveCallFromQueue**](QueueCommandsApi.md#retrieveCallFromQueue) | **GET** /queues/{queue_name}/calls/{call_control_id} | Retrieve a call from a queue
[**retrieveCallQueue**](QueueCommandsApi.md#retrieveCallQueue) | **GET** /queues/{queue_name} | Retrieve a call queue


# **listQueueCalls**
> ListQueueCallsResponse listQueueCalls()

Retrieve the list of calls in an existing queue

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .QueueCommandsApi(configuration);

let body:.QueueCommandsApiListQueueCallsRequest = {
  // string | Uniquely identifies the queue by name
  queueName: "queue_name_example",
  // number | The page number to load (optional)
  pageNumber: 1,
  // number | The size of the page (optional)
  pageSize: 20,
};

apiInstance.listQueueCalls(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **queueName** | [**string**] | Uniquely identifies the queue by name | defaults to undefined
 **pageNumber** | [**number**] | The page number to load | (optional) defaults to 1
 **pageSize** | [**number**] | The size of the page | (optional) defaults to 20


### Return type

**ListQueueCallsResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response with a list of calls in a queue. |  -  |
**404** | Conference does not exist |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **retrieveCallFromQueue**
> QueueCallResponse retrieveCallFromQueue()

Retrieve an existing call from an existing queue

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .QueueCommandsApi(configuration);

let body:.QueueCommandsApiRetrieveCallFromQueueRequest = {
  // string | Uniquely identifies the queue by name
  queueName: "queue_name_example",
  // string | Unique identifier and token for controlling the call
  callControlId: "call_control_id_example",
};

apiInstance.retrieveCallFromQueue(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **queueName** | [**string**] | Uniquely identifies the queue by name | defaults to undefined
 **callControlId** | [**string**] | Unique identifier and token for controlling the call | defaults to undefined


### Return type

**QueueCallResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response with details about a call in a queue. |  -  |
**404** | Conference does not exist |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **retrieveCallQueue**
> QueueResponse retrieveCallQueue()

Retrieve an existing call queue

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .QueueCommandsApi(configuration);

let body:.QueueCommandsApiRetrieveCallQueueRequest = {
  // string | Uniquely identifies the queue by name
  queueName: "queue_name_example",
};

apiInstance.retrieveCallQueue(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **queueName** | [**string**] | Uniquely identifies the queue by name | defaults to undefined


### Return type

**QueueResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response with details about a queue. |  -  |
**404** | Conference does not exist |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


