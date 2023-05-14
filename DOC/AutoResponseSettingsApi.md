# .AutoResponseSettingsApi

All URIs are relative to *https://api.telnyx.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAutorespConfigsApiV2AutorespConfigsProfileIdGet**](AutoResponseSettingsApi.md#getAutorespConfigsApiV2AutorespConfigsProfileIdGet) | **GET** /messaging_profiles/{profile_id}/autoresp_configs | List Auto-Response Settings


# **getAutorespConfigsApiV2AutorespConfigsProfileIdGet**
> AutorespConfigsResponseSchema getAutorespConfigsApiV2AutorespConfigsProfileIdGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AutoResponseSettingsApi(configuration);

let body:.AutoResponseSettingsApiGetAutorespConfigsApiV2AutorespConfigsProfileIdGetRequest = {
  // string
  profileId: "profile_id_example",
  // string (optional)
  countryCode: "country_code_example",
  // string (optional)
  createdAtGte: "created_at[gte]_example",
  // string (optional)
  createdAtLte: "created_at[lte]_example",
  // string (optional)
  updatedAtGte: "updated_at[gte]_example",
  // string (optional)
  updatedAtLte: "updated_at[lte]_example",
};

apiInstance.getAutorespConfigsApiV2AutorespConfigsProfileIdGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **profileId** | [**string**] |  | defaults to undefined
 **countryCode** | [**string**] |  | (optional) defaults to undefined
 **createdAtGte** | [**string**] |  | (optional) defaults to undefined
 **createdAtLte** | [**string**] |  | (optional) defaults to undefined
 **updatedAtGte** | [**string**] |  | (optional) defaults to undefined
 **updatedAtLte** | [**string**] |  | (optional) defaults to undefined


### Return type

**AutorespConfigsResponseSchema**

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


