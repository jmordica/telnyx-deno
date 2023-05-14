# .WireGuardInterfacesApi

All URIs are relative to *https://api.telnyx.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**wireguardInterfaceCreate**](WireGuardInterfacesApi.md#wireguardInterfaceCreate) | **POST** /wireguard_interfaces | Create a WireGuard Interface
[**wireguardInterfaceDelete**](WireGuardInterfacesApi.md#wireguardInterfaceDelete) | **DELETE** /wireguard_interfaces/{id} | Delete a WireGuard Interface
[**wireguardInterfaceGet**](WireGuardInterfacesApi.md#wireguardInterfaceGet) | **GET** /wireguard_interfaces/{id} | Retrieve a WireGuard Interfaces
[**wireguardInterfaceList**](WireGuardInterfacesApi.md#wireguardInterfaceList) | **GET** /wireguard_interfaces | List all WireGuard Interfaces
[**wireguardPeerAllowedIPGet**](WireGuardInterfacesApi.md#wireguardPeerAllowedIPGet) | **GET** /wireguard_peers/{id}/allowed_ips/{child_id} | Retrieve the Allowed IP
[**wireguardPeerAllowedIPList**](WireGuardInterfacesApi.md#wireguardPeerAllowedIPList) | **GET** /wireguard_peers/{id}/allowed_ips | List all Allowed IPs for a WireGuard Peer
[**wireguardPeerConfig**](WireGuardInterfacesApi.md#wireguardPeerConfig) | **GET** /wireguard_peers/{id}/config | Retrieve Wireguard config template for Peer
[**wireguardPeerCreate**](WireGuardInterfacesApi.md#wireguardPeerCreate) | **POST** /wireguard_peers | Create a WireGuard Peer
[**wireguardPeerDelete**](WireGuardInterfacesApi.md#wireguardPeerDelete) | **DELETE** /wireguard_peers/{id} | Delete the WireGuard Peer
[**wireguardPeerGet**](WireGuardInterfacesApi.md#wireguardPeerGet) | **GET** /wireguard_peers/{id} | Retrieve the WireGuard Peer
[**wireguardPeerList**](WireGuardInterfacesApi.md#wireguardPeerList) | **GET** /wireguard_peers | List all WireGuard Peers
[**wireguardPeerUpdate**](WireGuardInterfacesApi.md#wireguardPeerUpdate) | **PATCH** /wireguard_peers/{id} | Update the WireGuard Peer


# **wireguardInterfaceCreate**
> WireguardInterfaceCreate202Response wireguardInterfaceCreate(wireguardInterfaceCreate)

Create a new WireGuard Interface. Current limitation of 10 interfaces per user can be created.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .WireGuardInterfacesApi(configuration);

let body:.WireGuardInterfacesApiWireguardInterfaceCreateRequest = {
  // WireguardInterfaceCreate
  wireguardInterfaceCreate: null,
};

apiInstance.wireguardInterfaceCreate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **wireguardInterfaceCreate** | **WireguardInterfaceCreate**|  |


### Return type

**WireguardInterfaceCreate202Response**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | Successful response |  -  |
**422** | Unprocessable entity. Check the \&#39;detail\&#39; field in response for details. |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **wireguardInterfaceDelete**
> WireguardInterfaceCreate202Response wireguardInterfaceDelete()

Delete a WireGuard Interface.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .WireGuardInterfacesApi(configuration);

let body:.WireGuardInterfacesApiWireguardInterfaceDeleteRequest = {
  // string | Identifies the resource.
  id: "6a09cdc3-8948-47f0-aa62-74ac943d6c58",
};

apiInstance.wireguardInterfaceDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Identifies the resource. | defaults to undefined


### Return type

**WireguardInterfaceCreate202Response**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **wireguardInterfaceGet**
> WireguardInterfaceCreate202Response wireguardInterfaceGet()

Retrieve a WireGuard Interfaces.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .WireGuardInterfacesApi(configuration);

let body:.WireGuardInterfacesApiWireguardInterfaceGetRequest = {
  // string | Identifies the resource.
  id: "6a09cdc3-8948-47f0-aa62-74ac943d6c58",
};

apiInstance.wireguardInterfaceGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Identifies the resource. | defaults to undefined


### Return type

**WireguardInterfaceCreate202Response**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **wireguardInterfaceList**
> WireguardInterfaceList200Response wireguardInterfaceList()

List all WireGuard Interfaces.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .WireGuardInterfacesApi(configuration);

let body:.WireGuardInterfacesApiWireguardInterfaceListRequest = {
  // number | The page number to load (optional)
  pageNumber: 1,
  // number | The size of the page (optional)
  pageSize: 20,
  // string | The associated network id to filter on. (optional)
  filterNetworkId: "6a09cdc3-8948-47f0-aa62-74ac943d6c58",
};

apiInstance.wireguardInterfaceList(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pageNumber** | [**number**] | The page number to load | (optional) defaults to 1
 **pageSize** | [**number**] | The size of the page | (optional) defaults to 20
 **filterNetworkId** | [**string**] | The associated network id to filter on. | (optional) defaults to undefined


### Return type

**WireguardInterfaceList200Response**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **wireguardPeerAllowedIPGet**
> WireguardPeerAllowedIPGet200Response wireguardPeerAllowedIPGet()

Retrieve the Allowed IP.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .WireGuardInterfacesApi(configuration);

let body:.WireGuardInterfacesApiWireguardPeerAllowedIPGetRequest = {
  // string | Identifies the resource.
  id: "6a09cdc3-8948-47f0-aa62-74ac943d6c58",
  // string | Identifies the child resource
  childId: "6a09cdc3-8948-47f0-aa62-74ac943d6c58",
};

apiInstance.wireguardPeerAllowedIPGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Identifies the resource. | defaults to undefined
 **childId** | [**string**] | Identifies the child resource | defaults to undefined


### Return type

**WireguardPeerAllowedIPGet200Response**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **wireguardPeerAllowedIPList**
> WireguardPeerAllowedIPList200Response wireguardPeerAllowedIPList()

List all Allowed IPs for a WireGuard peer.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .WireGuardInterfacesApi(configuration);

let body:.WireGuardInterfacesApiWireguardPeerAllowedIPListRequest = {
  // string | Identifies the resource.
  id: "6a09cdc3-8948-47f0-aa62-74ac943d6c58",
  // number | The page number to load (optional)
  pageNumber: 1,
  // number | The size of the page (optional)
  pageSize: 20,
};

apiInstance.wireguardPeerAllowedIPList(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Identifies the resource. | defaults to undefined
 **pageNumber** | [**number**] | The page number to load | (optional) defaults to 1
 **pageSize** | [**number**] | The size of the page | (optional) defaults to 20


### Return type

**WireguardPeerAllowedIPList200Response**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **wireguardPeerConfig**
> string wireguardPeerConfig()

Retrieve Wireguard config template for Peer

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .WireGuardInterfacesApi(configuration);

let body:.WireGuardInterfacesApiWireguardPeerConfigRequest = {
  // string | Identifies the resource.
  id: "6a09cdc3-8948-47f0-aa62-74ac943d6c58",
};

apiInstance.wireguardPeerConfig(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Identifies the resource. | defaults to undefined


### Return type

**string**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain; charset=utf-8, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **wireguardPeerCreate**
> WireguardPeerCreate202Response wireguardPeerCreate(wireguardPeerCreate)

Create a new WireGuard Peer. Current limitation of 5 peers per interface can be created.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .WireGuardInterfacesApi(configuration);

let body:.WireGuardInterfacesApiWireguardPeerCreateRequest = {
  // string | Identifies the resource.
  id: "6a09cdc3-8948-47f0-aa62-74ac943d6c58",
  // WireguardPeerCreate
  wireguardPeerCreate: null,
};

apiInstance.wireguardPeerCreate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **wireguardPeerCreate** | **WireguardPeerCreate**|  |
 **id** | [**string**] | Identifies the resource. | defaults to undefined


### Return type

**WireguardPeerCreate202Response**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | Successful response |  -  |
**422** | Unprocessable entity. Check the \&#39;detail\&#39; field in response for details. |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **wireguardPeerDelete**
> WireguardPeerCreate202Response wireguardPeerDelete()

Delete the WireGuard peer.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .WireGuardInterfacesApi(configuration);

let body:.WireGuardInterfacesApiWireguardPeerDeleteRequest = {
  // string | Identifies the resource.
  id: "6a09cdc3-8948-47f0-aa62-74ac943d6c58",
};

apiInstance.wireguardPeerDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Identifies the resource. | defaults to undefined


### Return type

**WireguardPeerCreate202Response**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **wireguardPeerGet**
> WireguardPeerCreate202Response wireguardPeerGet()

Retrieve the WireGuard peer.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .WireGuardInterfacesApi(configuration);

let body:.WireGuardInterfacesApiWireguardPeerGetRequest = {
  // string | Identifies the resource.
  id: "6a09cdc3-8948-47f0-aa62-74ac943d6c58",
};

apiInstance.wireguardPeerGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Identifies the resource. | defaults to undefined


### Return type

**WireguardPeerCreate202Response**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **wireguardPeerList**
> WireguardPeerList200Response wireguardPeerList()

List all WireGuard peers.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .WireGuardInterfacesApi(configuration);

let body:.WireGuardInterfacesApiWireguardPeerListRequest = {
  // string | Identifies the resource.
  id: "6a09cdc3-8948-47f0-aa62-74ac943d6c58",
  // number | The page number to load (optional)
  pageNumber: 1,
  // number | The size of the page (optional)
  pageSize: 20,
  // string | The id of the associated WireGuard interface to filter on. (optional)
  filterWireguardInterfaceId: "6a09cdc3-8948-47f0-aa62-74ac943d6c58",
};

apiInstance.wireguardPeerList(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Identifies the resource. | defaults to undefined
 **pageNumber** | [**number**] | The page number to load | (optional) defaults to 1
 **pageSize** | [**number**] | The size of the page | (optional) defaults to 20
 **filterWireguardInterfaceId** | [**string**] | The id of the associated WireGuard interface to filter on. | (optional) defaults to undefined


### Return type

**WireguardPeerList200Response**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **wireguardPeerUpdate**
> WireguardPeerCreate202Response wireguardPeerUpdate(wireguardPeerPatch)

Update the WireGuard peer.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .WireGuardInterfacesApi(configuration);

let body:.WireGuardInterfacesApiWireguardPeerUpdateRequest = {
  // string | Identifies the resource.
  id: "6a09cdc3-8948-47f0-aa62-74ac943d6c58",
  // WireguardPeerPatch
  wireguardPeerPatch: {
    publicKey: "qF4EqlZq+5JL2IKYY8ij49daYyfKVhevJrcDxdqC8GU=",
  },
};

apiInstance.wireguardPeerUpdate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **wireguardPeerPatch** | **WireguardPeerPatch**|  |
 **id** | [**string**] | Identifies the resource. | defaults to undefined


### Return type

**WireguardPeerCreate202Response**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**422** | Unprocessable entity. Check the \&#39;detail\&#39; field in response for details. |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


