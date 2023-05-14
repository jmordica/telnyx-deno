# .RoomsClientTokensApi

All URIs are relative to *https://api.telnyx.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createRoomClientToken**](RoomsClientTokensApi.md#createRoomClientToken) | **POST** /rooms/{room_id}/actions/generate_join_client_token | Create Client Token to join a room.
[**refreshRoomClientToken**](RoomsClientTokensApi.md#refreshRoomClientToken) | **POST** /rooms/{room_id}/actions/refresh_client_token | Refresh Client Token to join a room.


# **createRoomClientToken**
> CreateRoomClientToken201Response createRoomClientToken(createRoomClientTokenRequest)

Synchronously create an Client Token to join a Room. Client Token is necessary to join a Telnyx Room. Client Token will expire after `token_ttl_secs`, a Refresh Token is also provided to refresh a Client Token, the Refresh Token expires after `refresh_token_ttl_secs`.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .RoomsClientTokensApi(configuration);

let body:.RoomsClientTokensApiCreateRoomClientTokenRequest = {
  // string | The unique identifier of a room.
  roomId: "0ccc7b54-4df3-4bca-a65a-3da1ecc777f0",
  // CreateRoomClientTokenRequest | Parameters that can be defined during Room Client Token creation.
  createRoomClientTokenRequest: {
    tokenTtlSecs: 600,
    refreshTokenTtlSecs: 3600,
  },
};

apiInstance.createRoomClientToken(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createRoomClientTokenRequest** | **CreateRoomClientTokenRequest**| Parameters that can be defined during Room Client Token creation. |
 **roomId** | [**string**] | The unique identifier of a room. | defaults to undefined


### Return type

**CreateRoomClientToken201Response**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Create room client token response. |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **refreshRoomClientToken**
> RefreshRoomClientToken201Response refreshRoomClientToken(refreshRoomClientTokenRequest)

Synchronously refresh an Client Token to join a Room. Client Token is necessary to join a Telnyx Room. Client Token will expire after `token_ttl_secs`.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .RoomsClientTokensApi(configuration);

let body:.RoomsClientTokensApiRefreshRoomClientTokenRequest = {
  // string | The unique identifier of a room.
  roomId: "0ccc7b54-4df3-4bca-a65a-3da1ecc777f0",
  // RefreshRoomClientTokenRequest | Parameters that can be defined during Room Client Token refresh.
  refreshRoomClientTokenRequest: {
    tokenTtlSecs: 600,
    refreshToken: "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJ0ZWxueXhfdGVsZXBob255IiwiZXhwIjoxNTkwMDEwMTQzLCJpYXQiOjE1ODc1OTA5NDMsImlzcyI6InRlbG55eF90ZWxlcGhvbnkiLCJqdGkiOiJiOGM3NDgzNy1kODllLTRhNjUtOWNmMi0zNGM3YTZmYTYwYzgiLCJuYmYiOjE1ODc1OTA5NDIsInN1YiI6IjVjN2FjN2QwLWRiNjUtNGYxMS05OGUxLWVlYzBkMWQ1YzZhZSIsInRlbF90b2tlbiI6InJqX1pra1pVT1pNeFpPZk9tTHBFVUIzc2lVN3U2UmpaRmVNOXMtZ2JfeENSNTZXRktGQUppTXlGMlQ2Q0JSbWxoX1N5MGlfbGZ5VDlBSThzRWlmOE1USUlzenl6U2xfYURuRzQ4YU81MHlhSEd1UlNZYlViU1ltOVdJaVEwZz09IiwidHlwIjoiYWNjZXNzIn0.gNEwzTow5MLLPLQENytca7pUN79PmPj6FyqZWW06ZeEmesxYpwKh0xRtA0TzLh6CDYIRHrI8seofOO0YFGDhpQ",
  },
};

apiInstance.refreshRoomClientToken(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **refreshRoomClientTokenRequest** | **RefreshRoomClientTokenRequest**| Parameters that can be defined during Room Client Token refresh. |
 **roomId** | [**string**] | The unique identifier of a room. | defaults to undefined


### Return type

**RefreshRoomClientToken201Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Refresh room client token response. |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


