# .VirtualCrossConnectsApi

All URIs are relative to *https://api.telnyx.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**virtaulCrossConnectList**](VirtualCrossConnectsApi.md#virtaulCrossConnectList) | **GET** /virtual_cross_connects | List all Virtual Cross Connects
[**virtaulCrossConnectRegionList**](VirtualCrossConnectsApi.md#virtaulCrossConnectRegionList) | **GET** /virtual_cross_connect_regions | List all Virtual Cross Connect Cloud Regions
[**virtualCrossConnectCreate**](VirtualCrossConnectsApi.md#virtualCrossConnectCreate) | **POST** /virtual_cross_connects | Create a Virtual Cross Connect
[**virtualCrossConnectDelete**](VirtualCrossConnectsApi.md#virtualCrossConnectDelete) | **DELETE** /virtual_cross_connects/{id} | Delete a Virtual Cross Connect
[**virtualCrossConnectGet**](VirtualCrossConnectsApi.md#virtualCrossConnectGet) | **GET** /virtual_cross_connects/{id} | Retrieve a Virtual Cross Connect
[**virtualCrossConnectProvision**](VirtualCrossConnectsApi.md#virtualCrossConnectProvision) | **POST** /virtual_cross_connects/{id}/actions/provision | Provision a Virtual Cross Connect
[**virtualCrossConnectRegionGet**](VirtualCrossConnectsApi.md#virtualCrossConnectRegionGet) | **GET** /virtual_cross_connect_regions/{id} | Retrieve a Virtual Cross Connect Cloud Regions
[**virtualCrossConnectUpdate**](VirtualCrossConnectsApi.md#virtualCrossConnectUpdate) | **PATCH** /virtual_cross_connects/{id} | Update the Virtual Cross Connect


# **virtaulCrossConnectList**
> VirtaulCrossConnectList200Response virtaulCrossConnectList()

List all Virtual Cross Connects.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .VirtualCrossConnectsApi(configuration);

let body:.VirtualCrossConnectsApiVirtaulCrossConnectListRequest = {
  // number | The page number to load (optional)
  pageNumber: 1,
  // number | The size of the page (optional)
  pageSize: 20,
  // string | The associated network id to filter on. (optional)
  filterNetworkId: "6a09cdc3-8948-47f0-aa62-74ac943d6c58",
};

apiInstance.virtaulCrossConnectList(body).then((data:any) => {
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

**VirtaulCrossConnectList200Response**

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

# **virtaulCrossConnectRegionList**
> VirtaulCrossConnectRegionList200Response virtaulCrossConnectRegionList()

List all Virtual Cross Connects Cloud Regions.<br /><br />This endpoint shows which cloud regions are available for the `region_code` your Virtual Cross Connect will be provisioned in.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .VirtualCrossConnectsApi(configuration);

let body:.VirtualCrossConnectsApiVirtaulCrossConnectRegionListRequest = {
  // number | The page number to load (optional)
  pageNumber: 1,
  // number | The size of the page (optional)
  pageSize: 20,
  // string | The Telnyx region code (optional)
  filterRegionCode: "ashburn-va",
  // 'aws' | 'azure' | 'gce' | The Telnyx region code (optional)
  filterCloudProvider: "aws",
};

apiInstance.virtaulCrossConnectRegionList(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pageNumber** | [**number**] | The page number to load | (optional) defaults to 1
 **pageSize** | [**number**] | The size of the page | (optional) defaults to 20
 **filterRegionCode** | [**string**] | The Telnyx region code | (optional) defaults to undefined
 **filterCloudProvider** | [**&#39;aws&#39; | &#39;azure&#39; | &#39;gce&#39;**]**Array<&#39;aws&#39; &#124; &#39;azure&#39; &#124; &#39;gce&#39;>** | The Telnyx region code | (optional) defaults to undefined


### Return type

**VirtaulCrossConnectRegionList200Response**

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

# **virtualCrossConnectCreate**
> VirtualCrossConnectCreate200Response virtualCrossConnectCreate(virtualCrossConnectCreate)

Create a new Virtual Cross Connect.<br /><br />For AWS and GCE, you have the option of creating the primary connection first and the secondary connection later. You also have the option of disabling the primary and/or secondary connections at any time and later re-enabling them. With Azure, you do not have this option. Azure requires both the primary and secondary connections to be created at the same time and they can not be independantly disabled.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .VirtualCrossConnectsApi(configuration);

let body:.VirtualCrossConnectsApiVirtualCrossConnectCreateRequest = {
  // VirtualCrossConnectCreate
  virtualCrossConnectCreate: null,
};

apiInstance.virtualCrossConnectCreate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **virtualCrossConnectCreate** | **VirtualCrossConnectCreate**|  |


### Return type

**VirtualCrossConnectCreate200Response**

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

# **virtualCrossConnectDelete**
> VirtualCrossConnectCreate200Response virtualCrossConnectDelete()

Delete a Virtual Cross Connect.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .VirtualCrossConnectsApi(configuration);

let body:.VirtualCrossConnectsApiVirtualCrossConnectDeleteRequest = {
  // string | Identifies the resource.
  id: "6a09cdc3-8948-47f0-aa62-74ac943d6c58",
};

apiInstance.virtualCrossConnectDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Identifies the resource. | defaults to undefined


### Return type

**VirtualCrossConnectCreate200Response**

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

# **virtualCrossConnectGet**
> VirtualCrossConnectCreate200Response virtualCrossConnectGet()

Retrieve a Virtual Cross Connect.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .VirtualCrossConnectsApi(configuration);

let body:.VirtualCrossConnectsApiVirtualCrossConnectGetRequest = {
  // string | Identifies the resource.
  id: "6a09cdc3-8948-47f0-aa62-74ac943d6c58",
};

apiInstance.virtualCrossConnectGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Identifies the resource. | defaults to undefined


### Return type

**VirtualCrossConnectCreate200Response**

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

# **virtualCrossConnectProvision**
> VirtualCrossConnectCreate200Response virtualCrossConnectProvision()

Provision a new Virtual Cross Connect.<br /><br />This endpoint is only necessary for GCE cloud regions. Once you have patched your Cloud IPs, you must POST this request to trigger the provision.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .VirtualCrossConnectsApi(configuration);

let body:.VirtualCrossConnectsApiVirtualCrossConnectProvisionRequest = {
  // string | Identifies the resource.
  id: "6a09cdc3-8948-47f0-aa62-74ac943d6c58",
};

apiInstance.virtualCrossConnectProvision(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Identifies the resource. | defaults to undefined


### Return type

**VirtualCrossConnectCreate200Response**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | Successful response |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **virtualCrossConnectRegionGet**
> VirtualCrossConnectRegionGet200Response virtualCrossConnectRegionGet()

Retrieve a Virtual Cross Connect Cloud Regions.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .VirtualCrossConnectsApi(configuration);

let body:.VirtualCrossConnectsApiVirtualCrossConnectRegionGetRequest = {
  // string | Identifies the resource.
  id: "6a09cdc3-8948-47f0-aa62-74ac943d6c58",
};

apiInstance.virtualCrossConnectRegionGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Identifies the resource. | defaults to undefined


### Return type

**VirtualCrossConnectRegionGet200Response**

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

# **virtualCrossConnectUpdate**
> VirtualCrossConnectCreate200Response virtualCrossConnectUpdate(virtualCrossConnectPatch)

Update the Virtual Cross Connect.<br /><br />Cloud IPs can only be patched during the `created` state, as GCE will only inform you of your generated IP once the pending connection requested has been accepted. Once the Virtual Cross Connect has moved to `provisioning`, the IPs can no longer be patched.<br /><br />Once the Virtual Cross Connect has moved to `provisioned` and you are ready to enable routing, you can toggle the routing announcements to `true`.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .VirtualCrossConnectsApi(configuration);

let body:.VirtualCrossConnectsApiVirtualCrossConnectUpdateRequest = {
  // string | Identifies the resource.
  id: "6a09cdc3-8948-47f0-aa62-74ac943d6c58",
  // VirtualCrossConnectPatch
  virtualCrossConnectPatch: null,
};

apiInstance.virtualCrossConnectUpdate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **virtualCrossConnectPatch** | **VirtualCrossConnectPatch**|  |
 **id** | [**string**] | Identifies the resource. | defaults to undefined


### Return type

**VirtualCrossConnectCreate200Response**

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


