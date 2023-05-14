# .RecordingsCommandsApi

All URIs are relative to *https://api.telnyx.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listRecordings**](RecordingsCommandsApi.md#listRecordings) | **GET** /recordings | List recordings
[**retrieveRecording**](RecordingsCommandsApi.md#retrieveRecording) | **GET** /recordings/{id} | Retrieve a recording


# **listRecordings**
> ListRecordingsResponse listRecordings()

Lists recordings for the authenticated user

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .RecordingsCommandsApi(configuration);

let body:.RecordingsCommandsApiListRecordingsRequest = {
  // string | Return only recordings associated with a given conference (optional)
  filterConferenceId: "428c31b6-7af4-4bcb-b7f5-5013ef9657c1",
  // string | Return only recordings created later than or at given ISO 8601 datetime (optional)
  filterCreatedAtGte: "2019-03-29T11:10:00Z",
  // string | Return only recordings created earlier than or at given ISO 8601 datetime (optional)
  filterCreatedAtLte: "2019-03-29T11:10:00Z",
  // number | The page number to load (optional)
  pageNumber: 1,
  // number | The size of the page (optional)
  pageSize: 20,
};

apiInstance.listRecordings(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filterConferenceId** | [**string**] | Return only recordings associated with a given conference | (optional) defaults to undefined
 **filterCreatedAtGte** | [**string**] | Return only recordings created later than or at given ISO 8601 datetime | (optional) defaults to undefined
 **filterCreatedAtLte** | [**string**] | Return only recordings created earlier than or at given ISO 8601 datetime | (optional) defaults to undefined
 **pageNumber** | [**number**] | The page number to load | (optional) defaults to 1
 **pageSize** | [**number**] | The size of the page | (optional) defaults to 20


### Return type

**ListRecordingsResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response with a list of recordings. |  -  |
**401** | Unauthorized |  -  |
**422** | Unprocessable entity |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **retrieveRecording**
> GetRecordingResponse retrieveRecording()

Retrieve a recording from the authenticated user\'s recordings

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .RecordingsCommandsApi(configuration);

let body:.RecordingsCommandsApiRetrieveRecordingRequest = {
  // string | Uniquely identifies the recording
  id: "id_example",
};

apiInstance.retrieveRecording(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Uniquely identifies the recording | defaults to undefined


### Return type

**GetRecordingResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response with details about a recording. |  -  |
**401** | Unauthorized |  -  |
**404** | Conference does not exist |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


