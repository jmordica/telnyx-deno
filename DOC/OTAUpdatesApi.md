# .OTAUpdatesApi

All URIs are relative to *https://api.telnyx.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**oTAUpdateGET**](OTAUpdatesApi.md#oTAUpdateGET) | **GET** /ota_updates/{id} | Get OTA update
[**oTAUpdatesList**](OTAUpdatesApi.md#oTAUpdatesList) | **GET** /ota_updates | List OTA updates


# **oTAUpdateGET**
> OTAUpdateGET200Response oTAUpdateGET()

This API returns the details of an Over the Air (OTA) update.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OTAUpdatesApi(configuration);

let body:.OTAUpdatesApiOTAUpdateGETRequest = {
  // string | Identifies the resource.
  id: "6a09cdc3-8948-47f0-aa62-74ac943d6c58",
};

apiInstance.oTAUpdateGET(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Identifies the resource. | defaults to undefined


### Return type

**OTAUpdateGET200Response**

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

# **oTAUpdatesList**
> OTAUpdatesList200Response oTAUpdatesList()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OTAUpdatesApi(configuration);

let body:.OTAUpdatesApiOTAUpdatesListRequest = {
  // number | The page number to load (optional)
  pageNumber: 1,
  // number | The size of the page (optional)
  pageSize: 20,
  // 'in-progress' | 'completed' | 'failed' | Filter by a specific status of the resource\'s lifecycle. (optional)
  filterStatus: "in-progress",
  // string | The SIM card identification UUID. (optional)
  filterSimCardId: "filter[sim_card_id]_example",
  // 'sim_card_network_preferences' | Filter by type. (optional)
  filterType: "sim_card_network_preferences",
};

apiInstance.oTAUpdatesList(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pageNumber** | [**number**] | The page number to load | (optional) defaults to 1
 **pageSize** | [**number**] | The size of the page | (optional) defaults to 20
 **filterStatus** | [**&#39;in-progress&#39; | &#39;completed&#39; | &#39;failed&#39;**]**Array<&#39;in-progress&#39; &#124; &#39;completed&#39; &#124; &#39;failed&#39;>** | Filter by a specific status of the resource\&#39;s lifecycle. | (optional) defaults to undefined
 **filterSimCardId** | [**string**] | The SIM card identification UUID. | (optional) defaults to undefined
 **filterType** | [**&#39;sim_card_network_preferences&#39;**]**Array<&#39;sim_card_network_preferences&#39;>** | Filter by type. | (optional) defaults to undefined


### Return type

**OTAUpdatesList200Response**

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


