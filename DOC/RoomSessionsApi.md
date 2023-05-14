# .RoomSessionsApi

All URIs are relative to *https://api.telnyx.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**endSession**](RoomSessionsApi.md#endSession) | **POST** /room_sessions/{room_session_id}/actions/end | End a room session.
[**kickParticipantInSession**](RoomSessionsApi.md#kickParticipantInSession) | **POST** /room_sessions/{room_session_id}/actions/kick | Kick participants from a room session.
[**listRoomSessions**](RoomSessionsApi.md#listRoomSessions) | **GET** /room_sessions | View a list of room sessions.
[**muteParticipantInSession**](RoomSessionsApi.md#muteParticipantInSession) | **POST** /room_sessions/{room_session_id}/actions/mute | Mute participants in room session.
[**nestedListRoomParticipants**](RoomSessionsApi.md#nestedListRoomParticipants) | **GET** /room_sessions/{room_session_id}/participants | View a list of room participants.
[**unmuteParticipantInSession**](RoomSessionsApi.md#unmuteParticipantInSession) | **POST** /room_sessions/{room_session_id}/actions/unmute | Unmute participants in room session.
[**viewRoomSession**](RoomSessionsApi.md#viewRoomSession) | **GET** /room_sessions/{room_session_id} | View a room session.


# **endSession**
> EndSession200Response endSession()

Note: this will also kick all participants currently present in the room

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .RoomSessionsApi(configuration);

let body:.RoomSessionsApiEndSessionRequest = {
  // string | The unique identifier of a room session.
  roomSessionId: "0ccc7b54-4df3-4bca-a65a-3da1ecc777f0",
};

apiInstance.endSession(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **roomSessionId** | [**string**] | The unique identifier of a room session. | defaults to undefined


### Return type

**EndSession200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success Action Response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **kickParticipantInSession**
> EndSession200Response kickParticipantInSession(actionsParticipantsRequest)



### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .RoomSessionsApi(configuration);

let body:.RoomSessionsApiKickParticipantInSessionRequest = {
  // string | The unique identifier of a room session.
  roomSessionId: "0ccc7b54-4df3-4bca-a65a-3da1ecc777f0",
  // ActionsParticipantsRequest | Parameters that can be defined during Kick action.
  actionsParticipantsRequest: {
    participants: null,
    exclude: [
      "7b61621f-62e0-4aad-ab11-9fd19e272e73",
    ],
  },
};

apiInstance.kickParticipantInSession(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **actionsParticipantsRequest** | **ActionsParticipantsRequest**| Parameters that can be defined during Kick action. |
 **roomSessionId** | [**string**] | The unique identifier of a room session. | defaults to undefined


### Return type

**EndSession200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success Action Response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listRoomSessions**
> ListRoomSessions200Response listRoomSessions()



### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .RoomSessionsApi(configuration);

let body:.RoomSessionsApiListRoomSessionsRequest = {
  // string | ISO 8601 date for filtering room sessions created on that date. (optional)
  filterDateCreatedAtEq: new Date('Sat Apr 24 19:00:00 CDT 2021').toISOString().split('T')[0];,
  // string | ISO 8601 date for filtering room sessions created after that date. (optional)
  filterDateCreatedAtGte: new Date('Sat Apr 24 19:00:00 CDT 2021').toISOString().split('T')[0];,
  // string | ISO 8601 date for filtering room sessions created before that date. (optional)
  filterDateCreatedAtLte: new Date('Sat Apr 24 19:00:00 CDT 2021').toISOString().split('T')[0];,
  // string | ISO 8601 date for filtering room sessions updated on that date. (optional)
  filterDateUpdatedAtEq: new Date('Sat Apr 24 19:00:00 CDT 2021').toISOString().split('T')[0];,
  // string | ISO 8601 date for filtering room sessions updated after that date. (optional)
  filterDateUpdatedAtGte: new Date('Sat Apr 24 19:00:00 CDT 2021').toISOString().split('T')[0];,
  // string | ISO 8601 date for filtering room sessions updated before that date. (optional)
  filterDateUpdatedAtLte: new Date('Sat Apr 24 19:00:00 CDT 2021').toISOString().split('T')[0];,
  // string | ISO 8601 date for filtering room sessions ended on that date. (optional)
  filterDateEndedAtEq: new Date('Sat Apr 24 19:00:00 CDT 2021').toISOString().split('T')[0];,
  // string | ISO 8601 date for filtering room sessions ended after that date. (optional)
  filterDateEndedAtGte: new Date('Sat Apr 24 19:00:00 CDT 2021').toISOString().split('T')[0];,
  // string | ISO 8601 date for filtering room sessions ended before that date. (optional)
  filterDateEndedAtLte: new Date('Sat Apr 24 19:00:00 CDT 2021').toISOString().split('T')[0];,
  // string | Room_id for filtering room sessions. (optional)
  filterRoomId: "0ccc7b54-4df3-4bca-a65a-3da1ecc777f0",
  // boolean | Filter active or inactive room sessions. (optional)
  filterActive: true,
  // boolean | To decide if room participants should be included in the response. (optional)
  includeParticipants: true,
  // number | The size of the page (optional)
  pageSize: 20,
  // number | The page number to load (optional)
  pageNumber: 1,
};

apiInstance.listRoomSessions(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filterDateCreatedAtEq** | [**string**] | ISO 8601 date for filtering room sessions created on that date. | (optional) defaults to undefined
 **filterDateCreatedAtGte** | [**string**] | ISO 8601 date for filtering room sessions created after that date. | (optional) defaults to undefined
 **filterDateCreatedAtLte** | [**string**] | ISO 8601 date for filtering room sessions created before that date. | (optional) defaults to undefined
 **filterDateUpdatedAtEq** | [**string**] | ISO 8601 date for filtering room sessions updated on that date. | (optional) defaults to undefined
 **filterDateUpdatedAtGte** | [**string**] | ISO 8601 date for filtering room sessions updated after that date. | (optional) defaults to undefined
 **filterDateUpdatedAtLte** | [**string**] | ISO 8601 date for filtering room sessions updated before that date. | (optional) defaults to undefined
 **filterDateEndedAtEq** | [**string**] | ISO 8601 date for filtering room sessions ended on that date. | (optional) defaults to undefined
 **filterDateEndedAtGte** | [**string**] | ISO 8601 date for filtering room sessions ended after that date. | (optional) defaults to undefined
 **filterDateEndedAtLte** | [**string**] | ISO 8601 date for filtering room sessions ended before that date. | (optional) defaults to undefined
 **filterRoomId** | [**string**] | Room_id for filtering room sessions. | (optional) defaults to undefined
 **filterActive** | [**boolean**] | Filter active or inactive room sessions. | (optional) defaults to undefined
 **includeParticipants** | [**boolean**] | To decide if room participants should be included in the response. | (optional) defaults to undefined
 **pageSize** | [**number**] | The size of the page | (optional) defaults to 20
 **pageNumber** | [**number**] | The page number to load | (optional) defaults to 1


### Return type

**ListRoomSessions200Response**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List room sessions response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **muteParticipantInSession**
> EndSession200Response muteParticipantInSession(actionsParticipantsRequest)



### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .RoomSessionsApi(configuration);

let body:.RoomSessionsApiMuteParticipantInSessionRequest = {
  // string | The unique identifier of a room session.
  roomSessionId: "0ccc7b54-4df3-4bca-a65a-3da1ecc777f0",
  // ActionsParticipantsRequest | Parameters that can be defined during Mute action.
  actionsParticipantsRequest: {
    participants: null,
    exclude: [
      "7b61621f-62e0-4aad-ab11-9fd19e272e73",
    ],
  },
};

apiInstance.muteParticipantInSession(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **actionsParticipantsRequest** | **ActionsParticipantsRequest**| Parameters that can be defined during Mute action. |
 **roomSessionId** | [**string**] | The unique identifier of a room session. | defaults to undefined


### Return type

**EndSession200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success Action Response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **nestedListRoomParticipants**
> ListRoomParticipants200Response nestedListRoomParticipants()



### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .RoomSessionsApi(configuration);

let body:.RoomSessionsApiNestedListRoomParticipantsRequest = {
  // string | The unique identifier of a room session.
  roomSessionId: "0ccc7b54-4df3-4bca-a65a-3da1ecc777f0",
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
  // number | The size of the page (optional)
  pageSize: 20,
  // number | The page number to load (optional)
  pageNumber: 1,
};

apiInstance.nestedListRoomParticipants(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **roomSessionId** | [**string**] | The unique identifier of a room session. | defaults to undefined
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

# **unmuteParticipantInSession**
> EndSession200Response unmuteParticipantInSession(actionsParticipantsRequest)



### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .RoomSessionsApi(configuration);

let body:.RoomSessionsApiUnmuteParticipantInSessionRequest = {
  // string | The unique identifier of a room session.
  roomSessionId: "0ccc7b54-4df3-4bca-a65a-3da1ecc777f0",
  // ActionsParticipantsRequest | Parameters that can be defined during Unmute action.
  actionsParticipantsRequest: {
    participants: null,
    exclude: [
      "7b61621f-62e0-4aad-ab11-9fd19e272e73",
    ],
  },
};

apiInstance.unmuteParticipantInSession(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **actionsParticipantsRequest** | **ActionsParticipantsRequest**| Parameters that can be defined during Unmute action. |
 **roomSessionId** | [**string**] | The unique identifier of a room session. | defaults to undefined


### Return type

**EndSession200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success Action Response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **viewRoomSession**
> ViewRoomSession200Response viewRoomSession()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .RoomSessionsApi(configuration);

let body:.RoomSessionsApiViewRoomSessionRequest = {
  // string | The unique identifier of a room session.
  roomSessionId: "0ccc7b54-4df3-4bca-a65a-3da1ecc777f0",
  // boolean | To decide if room participants should be included in the response. (optional)
  includeParticipants: true,
};

apiInstance.viewRoomSession(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **roomSessionId** | [**string**] | The unique identifier of a room session. | defaults to undefined
 **includeParticipants** | [**boolean**] | To decide if room participants should be included in the response. | (optional) defaults to undefined


### Return type

**ViewRoomSession200Response**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Get room session response. |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


