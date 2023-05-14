# .RoomRecordingsApi

All URIs are relative to *https://api.telnyx.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteRoomRecording**](RoomRecordingsApi.md#deleteRoomRecording) | **DELETE** /room_recordings/{room_recording_id} | Delete a room recording.
[**deleteRoomRecordings**](RoomRecordingsApi.md#deleteRoomRecordings) | **DELETE** /room_recordings | Delete several room recordings in a bulk.
[**listRoomRecordings**](RoomRecordingsApi.md#listRoomRecordings) | **GET** /room_recordings | View a list of room recordings.
[**viewRoomRecording**](RoomRecordingsApi.md#viewRoomRecording) | **GET** /room_recordings/{room_recording_id} | View a room recording.


# **deleteRoomRecording**
> void deleteRoomRecording()

Synchronously delete a Room Recording.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .RoomRecordingsApi(configuration);

let body:.RoomRecordingsApiDeleteRoomRecordingRequest = {
  // string | The unique identifier of a room recording.
  roomRecordingId: "0ccc7b54-4df3-4bca-a65a-3da1ecc777f0",
};

apiInstance.deleteRoomRecording(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **roomRecordingId** | [**string**] | The unique identifier of a room recording. | defaults to undefined


### Return type

**void**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | The resource was deleted successfully. |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteRoomRecordings**
> BulkRoomRecordingsDeleteResponse deleteRoomRecordings()



### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .RoomRecordingsApi(configuration);

let body:.RoomRecordingsApiDeleteRoomRecordingsRequest = {
  // string | ISO 8601 date for filtering room recordings ended on that date. (optional)
  filterDateEndedAtEq: new Date('Sat Apr 24 19:00:00 CDT 2021').toISOString().split('T')[0];,
  // string | ISO 8601 date for filtering room recordings ended after that date. (optional)
  filterDateEndedAtGte: new Date('Sat Apr 24 19:00:00 CDT 2021').toISOString().split('T')[0];,
  // string | ISO 8601 date for filtering room recordings ended before that date. (optional)
  filterDateEndedAtLte: new Date('Sat Apr 24 19:00:00 CDT 2021').toISOString().split('T')[0];,
  // string | ISO 8601 date for filtering room recordings started on that date. (optional)
  filterDateStartedAtEq: new Date('Sat Apr 24 19:00:00 CDT 2021').toISOString().split('T')[0];,
  // string | ISO 8601 date for filtering room recordings started after that date. (optional)
  filterDateStartedAtGte: new Date('Sat Apr 24 19:00:00 CDT 2021').toISOString().split('T')[0];,
  // string | ISO 8601 date for filtering room recordings started before that date. (optional)
  filterDateStartedAtLte: new Date('Sat Apr 24 19:00:00 CDT 2021').toISOString().split('T')[0];,
  // string | room_id for filtering room recordings. (optional)
  filterRoomId: "0ccc7b54-4df3-4bca-a65a-3da1ecc777f0",
  // string | participant_id for filtering room recordings. (optional)
  filterParticipantId: "0ccc7b54-4df3-4bca-a65a-3da1ecc777f0",
  // string | session_id for filtering room recordings. (optional)
  filterSessionId: "0ccc7b54-4df3-4bca-a65a-3da1ecc777f0",
  // string | status for filtering room recordings. (optional)
  filterStatus: "completed",
  // string | type for filtering room recordings. (optional)
  filterType: "audio",
  // number | duration_secs equal for filtering room recordings. (optional)
  filterDurationSecsEq: 20,
  // number | duration_secs less or equal for filtering room recordings. (optional)
  filterDurationSecsLte: 20,
  // number | duration_secs greater or equal for filtering room recordings. (optional)
  filterDurationSecsGte: 20,
  // number | The size of the page (optional)
  pageSize: 20,
  // number | The page number to load (optional)
  pageNumber: 1,
};

apiInstance.deleteRoomRecordings(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filterDateEndedAtEq** | [**string**] | ISO 8601 date for filtering room recordings ended on that date. | (optional) defaults to undefined
 **filterDateEndedAtGte** | [**string**] | ISO 8601 date for filtering room recordings ended after that date. | (optional) defaults to undefined
 **filterDateEndedAtLte** | [**string**] | ISO 8601 date for filtering room recordings ended before that date. | (optional) defaults to undefined
 **filterDateStartedAtEq** | [**string**] | ISO 8601 date for filtering room recordings started on that date. | (optional) defaults to undefined
 **filterDateStartedAtGte** | [**string**] | ISO 8601 date for filtering room recordings started after that date. | (optional) defaults to undefined
 **filterDateStartedAtLte** | [**string**] | ISO 8601 date for filtering room recordings started before that date. | (optional) defaults to undefined
 **filterRoomId** | [**string**] | room_id for filtering room recordings. | (optional) defaults to undefined
 **filterParticipantId** | [**string**] | participant_id for filtering room recordings. | (optional) defaults to undefined
 **filterSessionId** | [**string**] | session_id for filtering room recordings. | (optional) defaults to undefined
 **filterStatus** | [**string**] | status for filtering room recordings. | (optional) defaults to undefined
 **filterType** | [**string**] | type for filtering room recordings. | (optional) defaults to undefined
 **filterDurationSecsEq** | [**number**] | duration_secs equal for filtering room recordings. | (optional) defaults to undefined
 **filterDurationSecsLte** | [**number**] | duration_secs less or equal for filtering room recordings. | (optional) defaults to undefined
 **filterDurationSecsGte** | [**number**] | duration_secs greater or equal for filtering room recordings. | (optional) defaults to undefined
 **pageSize** | [**number**] | The size of the page | (optional) defaults to 20
 **pageNumber** | [**number**] | The page number to load | (optional) defaults to 1


### Return type

**BulkRoomRecordingsDeleteResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successful response for Bulk Delete Room recordings requests |  -  |
**422** | Unprocessable entity. Check the \&#39;detail\&#39; field in response for details. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listRoomRecordings**
> ListRoomRecordings200Response listRoomRecordings()



### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .RoomRecordingsApi(configuration);

let body:.RoomRecordingsApiListRoomRecordingsRequest = {
  // string | ISO 8601 date for filtering room recordings ended on that date. (optional)
  filterDateEndedAtEq: new Date('Sat Apr 24 19:00:00 CDT 2021').toISOString().split('T')[0];,
  // string | ISO 8601 date for filtering room recordings ended after that date. (optional)
  filterDateEndedAtGte: new Date('Sat Apr 24 19:00:00 CDT 2021').toISOString().split('T')[0];,
  // string | ISO 8601 date for filtering room recordings ended before that date. (optional)
  filterDateEndedAtLte: new Date('Sat Apr 24 19:00:00 CDT 2021').toISOString().split('T')[0];,
  // string | ISO 8601 date for filtering room recordings started on that date. (optional)
  filterDateStartedAtEq: new Date('Sat Apr 24 19:00:00 CDT 2021').toISOString().split('T')[0];,
  // string | ISO 8601 date for filtering room recordings started after that date. (optional)
  filterDateStartedAtGte: new Date('Sat Apr 24 19:00:00 CDT 2021').toISOString().split('T')[0];,
  // string | ISO 8601 date for filtering room recordings started before that date. (optional)
  filterDateStartedAtLte: new Date('Sat Apr 24 19:00:00 CDT 2021').toISOString().split('T')[0];,
  // string | room_id for filtering room recordings. (optional)
  filterRoomId: "0ccc7b54-4df3-4bca-a65a-3da1ecc777f0",
  // string | participant_id for filtering room recordings. (optional)
  filterParticipantId: "0ccc7b54-4df3-4bca-a65a-3da1ecc777f0",
  // string | session_id for filtering room recordings. (optional)
  filterSessionId: "0ccc7b54-4df3-4bca-a65a-3da1ecc777f0",
  // string | status for filtering room recordings. (optional)
  filterStatus: "completed",
  // string | type for filtering room recordings. (optional)
  filterType: "audio",
  // number | duration_secs equal for filtering room recordings. (optional)
  filterDurationSecsEq: 20,
  // number | duration_secs less or equal for filtering room recordings. (optional)
  filterDurationSecsLte: 20,
  // number | duration_secs greater or equal for filtering room recordings. (optional)
  filterDurationSecsGte: 20,
  // number | The size of the page (optional)
  pageSize: 20,
  // number | The page number to load (optional)
  pageNumber: 1,
};

apiInstance.listRoomRecordings(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filterDateEndedAtEq** | [**string**] | ISO 8601 date for filtering room recordings ended on that date. | (optional) defaults to undefined
 **filterDateEndedAtGte** | [**string**] | ISO 8601 date for filtering room recordings ended after that date. | (optional) defaults to undefined
 **filterDateEndedAtLte** | [**string**] | ISO 8601 date for filtering room recordings ended before that date. | (optional) defaults to undefined
 **filterDateStartedAtEq** | [**string**] | ISO 8601 date for filtering room recordings started on that date. | (optional) defaults to undefined
 **filterDateStartedAtGte** | [**string**] | ISO 8601 date for filtering room recordings started after that date. | (optional) defaults to undefined
 **filterDateStartedAtLte** | [**string**] | ISO 8601 date for filtering room recordings started before that date. | (optional) defaults to undefined
 **filterRoomId** | [**string**] | room_id for filtering room recordings. | (optional) defaults to undefined
 **filterParticipantId** | [**string**] | participant_id for filtering room recordings. | (optional) defaults to undefined
 **filterSessionId** | [**string**] | session_id for filtering room recordings. | (optional) defaults to undefined
 **filterStatus** | [**string**] | status for filtering room recordings. | (optional) defaults to undefined
 **filterType** | [**string**] | type for filtering room recordings. | (optional) defaults to undefined
 **filterDurationSecsEq** | [**number**] | duration_secs equal for filtering room recordings. | (optional) defaults to undefined
 **filterDurationSecsLte** | [**number**] | duration_secs less or equal for filtering room recordings. | (optional) defaults to undefined
 **filterDurationSecsGte** | [**number**] | duration_secs greater or equal for filtering room recordings. | (optional) defaults to undefined
 **pageSize** | [**number**] | The size of the page | (optional) defaults to 20
 **pageNumber** | [**number**] | The page number to load | (optional) defaults to 1


### Return type

**ListRoomRecordings200Response**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List room recordings response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **viewRoomRecording**
> ViewRoomRecording200Response viewRoomRecording()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .RoomRecordingsApi(configuration);

let body:.RoomRecordingsApiViewRoomRecordingRequest = {
  // string | The unique identifier of a room recording.
  roomRecordingId: "0ccc7b54-4df3-4bca-a65a-3da1ecc777f0",
};

apiInstance.viewRoomRecording(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **roomRecordingId** | [**string**] | The unique identifier of a room recording. | defaults to undefined


### Return type

**ViewRoomRecording200Response**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Get room recording response. |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


