# .AdvancedOptInOptOutApi

All URIs are relative to *https://api.telnyx.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createAutorespConfigApiV2AutorespConfigsProfileIdPost**](AdvancedOptInOptOutApi.md#createAutorespConfigApiV2AutorespConfigsProfileIdPost) | **POST** /messaging_profiles/{profile_id}/autoresp_configs | Create Auto-Reponse Setting
[**deleteAutorespConfigApiV2AutorespConfigsProfileIdAutorespCfgIdDelete**](AdvancedOptInOptOutApi.md#deleteAutorespConfigApiV2AutorespConfigsProfileIdAutorespCfgIdDelete) | **DELETE** /messaging_profiles/{profile_id}/autoresp_configs/{autoresp_cfg_id} | Delete Auto-Response Setting
[**getAutorespConfigApiV2AutorespConfigsProfileIdAutorespCfgIdGet**](AdvancedOptInOptOutApi.md#getAutorespConfigApiV2AutorespConfigsProfileIdAutorespCfgIdGet) | **GET** /messaging_profiles/{profile_id}/autoresp_configs/{autoresp_cfg_id} | Get Auto-Response Setting
[**getAutorespConfigsApiV2AutorespConfigsProfileIdGet**](AdvancedOptInOptOutApi.md#getAutorespConfigsApiV2AutorespConfigsProfileIdGet) | **GET** /messaging_profiles/{profile_id}/autoresp_configs | List Auto-Response Settings
[**updateAutorespConfigApiV2AutorespConfigsProfileIdAutorespCfgIdPut**](AdvancedOptInOptOutApi.md#updateAutorespConfigApiV2AutorespConfigsProfileIdAutorespCfgIdPut) | **PUT** /messaging_profiles/{profile_id}/autoresp_configs/{autoresp_cfg_id} | Update Auto-Response Setting


# **createAutorespConfigApiV2AutorespConfigsProfileIdPost**
> AutorespConfigResponseSchema createAutorespConfigApiV2AutorespConfigsProfileIdPost(autoRespConfigCreateSchema)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AdvancedOptInOptOutApi(configuration);

let body:.AdvancedOptInOptOutApiCreateAutorespConfigApiV2AutorespConfigsProfileIdPostRequest = {
  // string
  profileId: "profile_id_example",
  // AutoRespConfigCreateSchema
  autoRespConfigCreateSchema: {
    op: "start",
    keywords: ["keyword1","keyword2"],
    respText: "Thank you for your message",
    countryCode: "US",
  },
};

apiInstance.createAutorespConfigApiV2AutorespConfigsProfileIdPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **autoRespConfigCreateSchema** | **AutoRespConfigCreateSchema**|  |
 **profileId** | [**string**] |  | defaults to undefined


### Return type

**AutorespConfigResponseSchema**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteAutorespConfigApiV2AutorespConfigsProfileIdAutorespCfgIdDelete**
> any deleteAutorespConfigApiV2AutorespConfigsProfileIdAutorespCfgIdDelete()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AdvancedOptInOptOutApi(configuration);

let body:.AdvancedOptInOptOutApiDeleteAutorespConfigApiV2AutorespConfigsProfileIdAutorespCfgIdDeleteRequest = {
  // string
  profileId: "profile_id_example",
  // string
  autorespCfgId: "autoresp_cfg_id_example",
};

apiInstance.deleteAutorespConfigApiV2AutorespConfigsProfileIdAutorespCfgIdDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **profileId** | [**string**] |  | defaults to undefined
 **autorespCfgId** | [**string**] |  | defaults to undefined


### Return type

**any**

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

# **getAutorespConfigApiV2AutorespConfigsProfileIdAutorespCfgIdGet**
> AutorespConfigResponseSchema getAutorespConfigApiV2AutorespConfigsProfileIdAutorespCfgIdGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AdvancedOptInOptOutApi(configuration);

let body:.AdvancedOptInOptOutApiGetAutorespConfigApiV2AutorespConfigsProfileIdAutorespCfgIdGetRequest = {
  // string
  profileId: "profile_id_example",
  // string
  autorespCfgId: "autoresp_cfg_id_example",
};

apiInstance.getAutorespConfigApiV2AutorespConfigsProfileIdAutorespCfgIdGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **profileId** | [**string**] |  | defaults to undefined
 **autorespCfgId** | [**string**] |  | defaults to undefined


### Return type

**AutorespConfigResponseSchema**

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

# **getAutorespConfigsApiV2AutorespConfigsProfileIdGet**
> AutorespConfigsResponseSchema getAutorespConfigsApiV2AutorespConfigsProfileIdGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AdvancedOptInOptOutApi(configuration);

let body:.AdvancedOptInOptOutApiGetAutorespConfigsApiV2AutorespConfigsProfileIdGetRequest = {
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

# **updateAutorespConfigApiV2AutorespConfigsProfileIdAutorespCfgIdPut**
> AutorespConfigResponseSchema updateAutorespConfigApiV2AutorespConfigsProfileIdAutorespCfgIdPut(autoRespConfigCreateSchema)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AdvancedOptInOptOutApi(configuration);

let body:.AdvancedOptInOptOutApiUpdateAutorespConfigApiV2AutorespConfigsProfileIdAutorespCfgIdPutRequest = {
  // string
  profileId: "profile_id_example",
  // string
  autorespCfgId: "autoresp_cfg_id_example",
  // AutoRespConfigCreateSchema
  autoRespConfigCreateSchema: {
    op: "start",
    keywords: ["keyword1","keyword2"],
    respText: "Thank you for your message",
    countryCode: "US",
  },
};

apiInstance.updateAutorespConfigApiV2AutorespConfigsProfileIdAutorespCfgIdPut(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **autoRespConfigCreateSchema** | **AutoRespConfigCreateSchema**|  |
 **profileId** | [**string**] |  | defaults to undefined
 **autorespCfgId** | [**string**] |  | defaults to undefined


### Return type

**AutorespConfigResponseSchema**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


