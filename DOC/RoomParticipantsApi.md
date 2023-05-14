# .RoomParticipantsApi

All URIs are relative to *https://api.telnyx.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listRoomParticipants**](RoomParticipantsApi.md#listRoomParticipants) | **GET** /room_participants | View a list of room participants.
[**viewRoomParticipant**](RoomParticipantsApi.md#viewRoomParticipant) | **GET** /room_participants/{room_participant_id} | View a room participant.


# **listRoomParticipants**
> ListRoomParticipants200Response listRoomParticipants()



### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .RoomParticipantsApi(configuration);

let body:.RoomParticipantsApiListRoomParticipantsRequest = {
  // string | ISO 8601 date for filtering room participants that joined on that date. (optional)
  filterDateJoinedAtEq: new Date('Sat Apr 24 19:00:00 CDT 2021').toISOString().split('T')[0];,
  // string | ISO 8601 date for filtering room participants that joined after that date. (optional)
  filterDateJoinedAtGte: new Date('Sat Apr 24 19:00:00 CDT 2021').toISOString().split('T')[0];,
  // string | ISO 8601 date for filtering room participants that joined before that date. (optional)
  filterDateJoinedAtLte: new Date('Sat Apr 24 19:00:00 CDT 2021').toISOString().split('T')[0];,
  // string | ISO 8601 date for filtering room participants updated on that date. (optional)
  filterDateUpdatedAtEq: new Date('Sat Apr 24 19:00:00 CDT 2021').toISOString().split('T')[0];,
  // string | ISO 8601 date for filtering room participants updated after that date. (optional)
  filterDateUpdatedAtGte: new Date('Sat Apr 24 19:00:00 CDT 2021').toISOString().split('T')[0];,
  // string | ISO 8601 date for filtering room participants updated before that date. (optional)
  filterDateUpdatedAtLte: new Date('Sat Apr 24 19:00:00 CDT 2021').toISOString().split('T')[0];,
  // string | ISO 8601 date for filtering room participants that left on that date. (optional)
  filterDateLeftAtEq: new Date('Sat Apr 24 19:00:00 CDT 2021').toISOString().split('T')[0];,
  // string | ISO 8601 date for filtering room participants that left after that date. (optional)
  filterDateLeftAtGte: new Date('Sat Apr 24 19:00:00 CDT 2021').toISOString().split('T')[0];,
  // string | ISO 8601 date for filtering room participants that left before that date. (optional)
  filterDateLeftAtLte: new Date('Sat Apr 24 19:00:00 CDT 2021').toISOString().split('T')[0];,
  // string | Filter room participants based on the context. (optional)
  filterContext: "Alice",
  // string | Session_id for filtering room participants. (optional)
  filterSessionId: "0ccc7b54-4df3-4bca-a65a-3da1ecc777f0",
  // number | The size of the page (optional)
  pageSize: 20,
  // number | The page number to load (optional)
  pageNumber: 1,
};

apiInstance.listRoomParticipants(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filterDateJoinedAtEq** | [**string**] | ISO 8601 date for filtering room participants that joined on that date. | (optional) defaults to undefined
 **filterDateJoinedAtGte** | [**string**] | ISO 8601 date for filtering room participants that joined after that date. | (optional) defaults to undefined
 **filterDateJoinedAtLte** | [**string**] | ISO 8601 date for filtering room participants that joined before that date. | (optional) defaults to undefined
 **filterDateUpdatedAtEq** | [**string**] | ISO 8601 date for filtering room participants updated on that date. | (optional) defaults to undefined
 **filterDateUpdatedAtGte** | [**string**] | ISO 8601 date for filtering room participants updated after that date. | (optional) defaults to undefined
 **filterDateUpdatedAtLte** | [**string**] | ISO 8601 date for filtering room participants updated before that date. | (optional) defaults to undefined
 **filterDateLeftAtEq** | [**string**] | ISO 8601 date for filtering room participants that left on that date. | (optional) defaults to undefined
 **filterDateLeftAtGte** | [**string**] | ISO 8601 date for filtering room participants that left after that date. | (optional) defaults to undefined
 **filterDateLeftAtLte** | [**string**] | ISO 8601 date for filtering room participants that left before that date. | (optional) defaults to undefined
 **filterContext** | [**string**] | Filter room participants based on the context. | (optional) defaults to undefined
 **filterSessionId** | [**string**] | Session_id for filtering room participants. | (optional) defaults to undefined
 **pageSize** | [**number**] | The size of the page | (optional) defaults to 20
 **pageNumber** | [**number**] | The page number to load | (optional) defaults to 1


### Return type

**ListRoomParticipants200Response**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List room participants response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **viewRoomParticipant**
> ViewRoomParticipant200Response viewRoomParticipant()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .RoomParticipantsApi(configuration);

let body:.RoomParticipantsApiViewRoomParticipantRequest = {
  // string | The unique identifier of a room participant.
  roomParticipantId: "0ccc7b54-4df3-4bca-a65a-3da1ecc777f0",
};

apiInstance.viewRoomParticipant(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **roomParticipantId** | [**string**] | The unique identifier of a room participant. | defaults to undefined


### Return type

**ViewRoomParticipant200Response**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Get room participant response. |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


