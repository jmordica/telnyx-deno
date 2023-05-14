# .RoomsApi

All URIs are relative to *https://api.telnyx.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createRoom**](RoomsApi.md#createRoom) | **POST** /rooms | Create a room.
[**deleteRoom**](RoomsApi.md#deleteRoom) | **DELETE** /rooms/{room_id} | Delete a room.
[**listRooms**](RoomsApi.md#listRooms) | **GET** /rooms | View a list of rooms.
[**nestedListRoomSessions**](RoomsApi.md#nestedListRoomSessions) | **GET** /rooms/{room_id}/sessions | View a list of room sessions.
[**patchRoom**](RoomsApi.md#patchRoom) | **PATCH** /rooms/{room_id} | Update a room.
[**viewRoom**](RoomsApi.md#viewRoom) | **GET** /rooms/{room_id} | View a room.


# **createRoom**
> CreateRoom201Response createRoom(createRoomRequest)

Synchronously create a Room.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .RoomsApi(configuration);

let body:.RoomsApiCreateRoomRequest = {
  // CreateRoomRequest | Parameters that can be defined during room creation.
  createRoomRequest: {
    uniqueName: "My room",
    maxParticipants: 10,
    enableRecording: true,
    webhookEventUrl: "https://example.com",
    webhookEventFailoverUrl: "https://failover.example.com",
    webhookTimeoutSecs: 25,
  },
};

apiInstance.createRoom(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createRoomRequest** | **CreateRoomRequest**| Parameters that can be defined during room creation. |


### Return type

**CreateRoom201Response**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Create room response. |  -  |
**422** | Unprocessable entity. Check the \&#39;detail\&#39; field in response for details. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteRoom**
> void deleteRoom()

Synchronously delete a Room. Participants from that room will be kicked out, they won\'t be able to join that room anymore, and you won\'t be charged anymore for that room.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .RoomsApi(configuration);

let body:.RoomsApiDeleteRoomRequest = {
  // string | The unique identifier of a room.
  roomId: "0ccc7b54-4df3-4bca-a65a-3da1ecc777f0",
};

apiInstance.deleteRoom(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **roomId** | [**string**] | The unique identifier of a room. | defaults to undefined


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

# **listRooms**
> ListRooms200Response listRooms()



### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .RoomsApi(configuration);

let body:.RoomsApiListRoomsRequest = {
  // string | ISO 8601 date for filtering rooms created on that date. (optional)
  filterDateCreatedAtEq: new Date('Sat Apr 24 19:00:00 CDT 2021').toISOString().split('T')[0];,
  // string | ISO 8601 date for filtering rooms created after that date. (optional)
  filterDateCreatedAtGte: new Date('Sat Apr 24 19:00:00 CDT 2021').toISOString().split('T')[0];,
  // string | ISO 8601 date for filtering rooms created before that date. (optional)
  filterDateCreatedAtLte: new Date('Sat Apr 24 19:00:00 CDT 2021').toISOString().split('T')[0];,
  // string | ISO 8601 date for filtering rooms updated on that date. (optional)
  filterDateUpdatedAtEq: new Date('Sat Apr 24 19:00:00 CDT 2021').toISOString().split('T')[0];,
  // string | ISO 8601 date for filtering rooms updated after that date. (optional)
  filterDateUpdatedAtGte: new Date('Sat Apr 24 19:00:00 CDT 2021').toISOString().split('T')[0];,
  // string | ISO 8601 date for filtering rooms updated before that date. (optional)
  filterDateUpdatedAtLte: new Date('Sat Apr 24 19:00:00 CDT 2021').toISOString().split('T')[0];,
  // string | Unique_name for filtering rooms. (optional)
  filterUniqueName: "my_video_room",
  // boolean | To decide if room sessions should be included in the response. (optional)
  includeSessions: true,
  // number | The size of the page (optional)
  pageSize: 20,
  // number | The page number to load (optional)
  pageNumber: 1,
};

apiInstance.listRooms(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filterDateCreatedAtEq** | [**string**] | ISO 8601 date for filtering rooms created on that date. | (optional) defaults to undefined
 **filterDateCreatedAtGte** | [**string**] | ISO 8601 date for filtering rooms created after that date. | (optional) defaults to undefined
 **filterDateCreatedAtLte** | [**string**] | ISO 8601 date for filtering rooms created before that date. | (optional) defaults to undefined
 **filterDateUpdatedAtEq** | [**string**] | ISO 8601 date for filtering rooms updated on that date. | (optional) defaults to undefined
 **filterDateUpdatedAtGte** | [**string**] | ISO 8601 date for filtering rooms updated after that date. | (optional) defaults to undefined
 **filterDateUpdatedAtLte** | [**string**] | ISO 8601 date for filtering rooms updated before that date. | (optional) defaults to undefined
 **filterUniqueName** | [**string**] | Unique_name for filtering rooms. | (optional) defaults to undefined
 **includeSessions** | [**boolean**] | To decide if room sessions should be included in the response. | (optional) defaults to undefined
 **pageSize** | [**number**] | The size of the page | (optional) defaults to 20
 **pageNumber** | [**number**] | The page number to load | (optional) defaults to 1


### Return type

**ListRooms200Response**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List rooms response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **nestedListRoomSessions**
> ListRoomSessions200Response nestedListRoomSessions()



### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .RoomsApi(configuration);

let body:.RoomsApiNestedListRoomSessionsRequest = {
  // string | The unique identifier of a room.
  roomId: "0ccc7b54-4df3-4bca-a65a-3da1ecc777f0",
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
  // boolean | Filter active or inactive room sessions. (optional)
  filterActive: true,
  // boolean | To decide if room participants should be included in the response. (optional)
  includeParticipants: true,
  // number | The size of the page (optional)
  pageSize: 20,
  // number | The page number to load (optional)
  pageNumber: 1,
};

apiInstance.nestedListRoomSessions(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **roomId** | [**string**] | The unique identifier of a room. | defaults to undefined
 **filterDateCreatedAtEq** | [**string**] | ISO 8601 date for filtering room sessions created on that date. | (optional) defaults to undefined
 **filterDateCreatedAtGte** | [**string**] | ISO 8601 date for filtering room sessions created after that date. | (optional) defaults to undefined
 **filterDateCreatedAtLte** | [**string**] | ISO 8601 date for filtering room sessions created before that date. | (optional) defaults to undefined
 **filterDateUpdatedAtEq** | [**string**] | ISO 8601 date for filtering room sessions updated on that date. | (optional) defaults to undefined
 **filterDateUpdatedAtGte** | [**string**] | ISO 8601 date for filtering room sessions updated after that date. | (optional) defaults to undefined
 **filterDateUpdatedAtLte** | [**string**] | ISO 8601 date for filtering room sessions updated before that date. | (optional) defaults to undefined
 **filterDateEndedAtEq** | [**string**] | ISO 8601 date for filtering room sessions ended on that date. | (optional) defaults to undefined
 **filterDateEndedAtGte** | [**string**] | ISO 8601 date for filtering room sessions ended after that date. | (optional) defaults to undefined
 **filterDateEndedAtLte** | [**string**] | ISO 8601 date for filtering room sessions ended before that date. | (optional) defaults to undefined
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

# **patchRoom**
> CreateRoom201Response patchRoom(patchRoomRequest)

Synchronously update a Room.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .RoomsApi(configuration);

let body:.RoomsApiPatchRoomRequest = {
  // string | The unique identifier of a room.
  roomId: "0ccc7b54-4df3-4bca-a65a-3da1ecc777f0",
  // PatchRoomRequest | Parameters that can be defined during room update.
  patchRoomRequest: {
    uniqueName: "My room",
    maxParticipants: 10,
    enableRecording: true,
    webhookEventUrl: "https://example.com",
    webhookEventFailoverUrl: "https://failover.example.com",
    webhookTimeoutSecs: 25,
  },
};

apiInstance.patchRoom(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **patchRoomRequest** | **PatchRoomRequest**| Parameters that can be defined during room update. |
 **roomId** | [**string**] | The unique identifier of a room. | defaults to undefined


### Return type

**CreateRoom201Response**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Update room response. |  -  |
**401** | Unauthorized |  -  |
**404** | Resource not found |  -  |
**422** | Bad request |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **viewRoom**
> CreateRoom201Response viewRoom()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .RoomsApi(configuration);

let body:.RoomsApiViewRoomRequest = {
  // string | The unique identifier of a room.
  roomId: "0ccc7b54-4df3-4bca-a65a-3da1ecc777f0",
  // boolean | To decide if room sessions should be included in the response. (optional)
  includeSessions: true,
};

apiInstance.viewRoom(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **roomId** | [**string**] | The unique identifier of a room. | defaults to undefined
 **includeSessions** | [**boolean**] | To decide if room sessions should be included in the response. | (optional) defaults to undefined


### Return type

**CreateRoom201Response**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Get room response. |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


