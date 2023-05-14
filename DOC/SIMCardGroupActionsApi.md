# .SIMCardGroupActionsApi

All URIs are relative to *https://api.telnyx.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**simCardGroupActionGet**](SIMCardGroupActionsApi.md#simCardGroupActionGet) | **GET** /sim_card_group_actions/{id} | Get SIM card group action details
[**simCardGroupActionsGet**](SIMCardGroupActionsApi.md#simCardGroupActionsGet) | **GET** /sim_card_group_actions | List SIM card group actions


# **simCardGroupActionGet**
> SimCardGroupActionGet200Response simCardGroupActionGet()

This API allows fetching detailed information about a SIM card group action resource to make follow-ups in an existing asynchronous operation.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SIMCardGroupActionsApi(configuration);

let body:.SIMCardGroupActionsApiSimCardGroupActionGetRequest = {
  // string | Identifies the resource.
  id: "6a09cdc3-8948-47f0-aa62-74ac943d6c58",
};

apiInstance.simCardGroupActionGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Identifies the resource. | defaults to undefined


### Return type

**SimCardGroupActionGet200Response**

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

# **simCardGroupActionsGet**
> SimCardGroupActionsGet200Response simCardGroupActionsGet()

This API allows listing a paginated collection a SIM card group actions. It allows to explore a collection of existing asynchronous operation using specific filters.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SIMCardGroupActionsApi(configuration);

let body:.SIMCardGroupActionsApiSimCardGroupActionsGetRequest = {
  // number | The page number to load (optional)
  pageNumber: 1,
  // number | The size of the page (optional)
  pageSize: 20,
  // string | A valid SIM card group ID. (optional)
  filterSimCardGroupId: "47a1c2b0-cc7b-4ab1-bb98-b33fb0fc61b9",
  // 'in-progress' | 'completed' | 'failed' | Filter by a specific status of the resource\'s lifecycle. (optional)
  filterStatus: "in-progress",
  // 'set_private_wireless_gateway' | 'remove_private_wireless_gateway' | Filter by action type. (optional)
  filterType: "set_private_wireless_gateway",
};

apiInstance.simCardGroupActionsGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pageNumber** | [**number**] | The page number to load | (optional) defaults to 1
 **pageSize** | [**number**] | The size of the page | (optional) defaults to 20
 **filterSimCardGroupId** | [**string**] | A valid SIM card group ID. | (optional) defaults to undefined
 **filterStatus** | [**&#39;in-progress&#39; | &#39;completed&#39; | &#39;failed&#39;**]**Array<&#39;in-progress&#39; &#124; &#39;completed&#39; &#124; &#39;failed&#39;>** | Filter by a specific status of the resource\&#39;s lifecycle. | (optional) defaults to undefined
 **filterType** | [**&#39;set_private_wireless_gateway&#39; | &#39;remove_private_wireless_gateway&#39;**]**Array<&#39;set_private_wireless_gateway&#39; &#124; &#39;remove_private_wireless_gateway&#39;>** | Filter by action type. | (optional) defaults to undefined


### Return type

**SimCardGroupActionsGet200Response**

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


