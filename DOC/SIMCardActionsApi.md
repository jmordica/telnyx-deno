# .SIMCardActionsApi

All URIs are relative to *https://api.telnyx.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**bulkSimCardActionGet**](SIMCardActionsApi.md#bulkSimCardActionGet) | **GET** /bulk_sim_card_actions/{id} | Get bulk SIM card action details
[**listBulkSIMCardActions**](SIMCardActionsApi.md#listBulkSIMCardActions) | **GET** /bulk_sim_card_actions | List bulk SIM card actions
[**listSIMCardActions**](SIMCardActionsApi.md#listSIMCardActions) | **GET** /sim_card_actions | List SIM card actions
[**simCardActionGet**](SIMCardActionsApi.md#simCardActionGet) | **GET** /sim_card_actions/{id} | Get SIM card action details


# **bulkSimCardActionGet**
> BulkSimCardActionGet200Response bulkSimCardActionGet()

This API fetches information about a bulk SIM card action. A bulk SIM card action contains details about a collection of individual SIM card actions.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SIMCardActionsApi(configuration);

let body:.SIMCardActionsApiBulkSimCardActionGetRequest = {
  // string | Identifies the resource.
  id: "6a09cdc3-8948-47f0-aa62-74ac943d6c58",
};

apiInstance.bulkSimCardActionGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Identifies the resource. | defaults to undefined


### Return type

**BulkSimCardActionGet200Response**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listBulkSIMCardActions**
> ListBulkSIMCardActions200Response listBulkSIMCardActions()

This API lists a paginated collection of bulk SIM card actions. A bulk SIM card action contains details about a collection of individual SIM card actions.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SIMCardActionsApi(configuration);

let body:.SIMCardActionsApiListBulkSIMCardActionsRequest = {
  // number | The page number to load (optional)
  pageNumber: 1,
  // number | The size of the page (optional)
  pageSize: 20,
  // 'bulk_set_public_ips' | Filter by action type. (optional)
  filterActionType: "bulk_set_public_ips",
};

apiInstance.listBulkSIMCardActions(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pageNumber** | [**number**] | The page number to load | (optional) defaults to 1
 **pageSize** | [**number**] | The size of the page | (optional) defaults to 20
 **filterActionType** | [**&#39;bulk_set_public_ips&#39;**]**Array<&#39;bulk_set_public_ips&#39;>** | Filter by action type. | (optional) defaults to undefined


### Return type

**ListBulkSIMCardActions200Response**

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

# **listSIMCardActions**
> ListSIMCardActions200Response listSIMCardActions()

This API lists a paginated collection of SIM card actions. It enables exploring a collection of existing asynchronous operations using specific filters.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SIMCardActionsApi(configuration);

let body:.SIMCardActionsApiListSIMCardActionsRequest = {
  // number | The page number to load (optional)
  pageNumber: 1,
  // number | The size of the page (optional)
  pageSize: 20,
  // string | A valid SIM card ID. (optional)
  filterSimCardId: "47a1c2b0-cc7b-4ab1-bb98-b33fb0fc61b9",
  // 'in-progress' | 'completed' | 'failed' | Filter by a specific status of the resource\'s lifecycle. (optional)
  filterStatus: "in-progress",
  // string | Filter by a bulk SIM card action ID. (optional)
  filterBulkSimCardActionId: "47a1c2b0-cc7b-4ab1-bb98-b33fb0fc61b9",
  // 'enable' | 'enable_standby_sim_card' | 'disable' | 'set_standby' | 'remove_public_ip' | 'set_public_ip' | Filter by action type. (optional)
  filterActionType: "disable",
};

apiInstance.listSIMCardActions(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pageNumber** | [**number**] | The page number to load | (optional) defaults to 1
 **pageSize** | [**number**] | The size of the page | (optional) defaults to 20
 **filterSimCardId** | [**string**] | A valid SIM card ID. | (optional) defaults to undefined
 **filterStatus** | [**&#39;in-progress&#39; | &#39;completed&#39; | &#39;failed&#39;**]**Array<&#39;in-progress&#39; &#124; &#39;completed&#39; &#124; &#39;failed&#39;>** | Filter by a specific status of the resource\&#39;s lifecycle. | (optional) defaults to undefined
 **filterBulkSimCardActionId** | [**string**] | Filter by a bulk SIM card action ID. | (optional) defaults to undefined
 **filterActionType** | [**&#39;enable&#39; | &#39;enable_standby_sim_card&#39; | &#39;disable&#39; | &#39;set_standby&#39; | &#39;remove_public_ip&#39; | &#39;set_public_ip&#39;**]**Array<&#39;enable&#39; &#124; &#39;enable_standby_sim_card&#39; &#124; &#39;disable&#39; &#124; &#39;set_standby&#39; &#124; &#39;remove_public_ip&#39; &#124; &#39;set_public_ip&#39;>** | Filter by action type. | (optional) defaults to undefined


### Return type

**ListSIMCardActions200Response**

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

# **simCardActionGet**
> SimCardActionGet200Response simCardActionGet()

This API fetches detailed information about a SIM card action to follow-up on an existing asynchronous operation.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SIMCardActionsApi(configuration);

let body:.SIMCardActionsApiSimCardActionGetRequest = {
  // string | Identifies the resource.
  id: "6a09cdc3-8948-47f0-aa62-74ac943d6c58",
};

apiInstance.simCardActionGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Identifies the resource. | defaults to undefined


### Return type

**SimCardActionGet200Response**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


