# .RoomCompositionsApi

All URIs are relative to *https://api.telnyx.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createRoomComposition**](RoomCompositionsApi.md#createRoomComposition) | **POST** /room_compositions | Create a room composition.
[**deleteRoomComposition**](RoomCompositionsApi.md#deleteRoomComposition) | **DELETE** /room_compositions/{room_composition_id} | Delete a room composition.
[**listRoomCompositions**](RoomCompositionsApi.md#listRoomCompositions) | **GET** /room_compositions | View a list of room compositions.
[**viewRoomComposition**](RoomCompositionsApi.md#viewRoomComposition) | **GET** /room_compositions/{room_composition_id} | View a room composition.


# **createRoomComposition**
> CreateRoomComposition202Response createRoomComposition(createRoomCompositionRequest)

Asynchronously create a room composition.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .RoomCompositionsApi(configuration);

let body:.RoomCompositionsApiCreateRoomCompositionRequest = {
  // CreateRoomCompositionRequest | Parameters that can be defined during room composition creation.
  createRoomCompositionRequest: {
    format: "mp4",
    resolution: "800x600",
    sessionId: "0ccc7b54-4df3-4bca-a65a-3da1ecc777b0",
    videoLayout: {
      "key": {
        xPos: 100,
        yPos: 100,
        zPos: 1,
        height: 360,
        width: 480,
        maxColumns: 3,
        maxRows: 3,
        videoSources: [
          "7b61621f-62e0-4aad-ab11-9fd19e272e73",
        ],
      },
    },
    webhookEventUrl: "https://example.com",
    webhookEventFailoverUrl: "https://failover.example.com",
    webhookTimeoutSecs: 25,
  },
};

apiInstance.createRoomComposition(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createRoomCompositionRequest** | **CreateRoomCompositionRequest**| Parameters that can be defined during room composition creation. |


### Return type

**CreateRoomComposition202Response**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | Create room composition response. |  -  |
**422** | Unprocessable entity. Check the \&#39;detail\&#39; field in response for details. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteRoomComposition**
> void deleteRoomComposition()

Synchronously delete a room composition.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .RoomCompositionsApi(configuration);

let body:.RoomCompositionsApiDeleteRoomCompositionRequest = {
  // string | The unique identifier of a room composition.
  roomCompositionId: "5219b3af-87c6-4c08-9b58-5a533d893e21",
};

apiInstance.deleteRoomComposition(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **roomCompositionId** | [**string**] | The unique identifier of a room composition. | defaults to undefined


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

# **listRoomCompositions**
> ListRoomCompositions200Response listRoomCompositions()



### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .RoomCompositionsApi(configuration);

let body:.RoomCompositionsApiListRoomCompositionsRequest = {
  // string | ISO 8601 date for filtering room compositions created on that date. (optional)
  filterDateCreatedAtEq: new Date('Sat Apr 24 19:00:00 CDT 2021').toISOString().split('T')[0];,
  // string | ISO 8601 date for filtering room compositions created after that date. (optional)
  filterDateCreatedAtGte: new Date('Sat Apr 24 19:00:00 CDT 2021').toISOString().split('T')[0];,
  // string | ISO 8601 date for filtering room compositions created before that date. (optional)
  filterDateCreatedAtLte: new Date('Sat Apr 24 19:00:00 CDT 2021').toISOString().split('T')[0];,
  // string | The session_id for filtering room compositions. (optional)
  filterSessionId: "92e7d459-bcc5-4386-9f5f-6dd14a82588d",
  // 'completed' | 'processing' | 'enqueued' | The status for filtering room compositions. (optional)
  filterStatus: "completed",
  // number | The size of the page (optional)
  pageSize: 20,
  // number | The page number to load (optional)
  pageNumber: 1,
};

apiInstance.listRoomCompositions(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filterDateCreatedAtEq** | [**string**] | ISO 8601 date for filtering room compositions created on that date. | (optional) defaults to undefined
 **filterDateCreatedAtGte** | [**string**] | ISO 8601 date for filtering room compositions created after that date. | (optional) defaults to undefined
 **filterDateCreatedAtLte** | [**string**] | ISO 8601 date for filtering room compositions created before that date. | (optional) defaults to undefined
 **filterSessionId** | [**string**] | The session_id for filtering room compositions. | (optional) defaults to undefined
 **filterStatus** | [**&#39;completed&#39; | &#39;processing&#39; | &#39;enqueued&#39;**]**Array<&#39;completed&#39; &#124; &#39;processing&#39; &#124; &#39;enqueued&#39;>** | The status for filtering room compositions. | (optional) defaults to undefined
 **pageSize** | [**number**] | The size of the page | (optional) defaults to 20
 **pageNumber** | [**number**] | The page number to load | (optional) defaults to 1


### Return type

**ListRoomCompositions200Response**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List room compositions response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **viewRoomComposition**
> CreateRoomComposition202Response viewRoomComposition()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .RoomCompositionsApi(configuration);

let body:.RoomCompositionsApiViewRoomCompositionRequest = {
  // string | The unique identifier of a room composition.
  roomCompositionId: "5219b3af-87c6-4c08-9b58-5a533d893e21",
};

apiInstance.viewRoomComposition(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **roomCompositionId** | [**string**] | The unique identifier of a room composition. | defaults to undefined


### Return type

**CreateRoomComposition202Response**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Get room composition response. |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


