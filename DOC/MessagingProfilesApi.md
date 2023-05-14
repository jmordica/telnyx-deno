# .MessagingProfilesApi

All URIs are relative to *https://api.telnyx.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createMessagingProfile**](MessagingProfilesApi.md#createMessagingProfile) | **POST** /messaging_profiles | Create a messaging profile
[**deleteMessagingProfile**](MessagingProfilesApi.md#deleteMessagingProfile) | **DELETE** /messaging_profiles/{id} | Delete a messaging profile
[**listMessagingProfileMetrics**](MessagingProfilesApi.md#listMessagingProfileMetrics) | **GET** /messaging_profile_metrics | List messaging profile metrics
[**listMessagingProfilePhoneNumbers**](MessagingProfilesApi.md#listMessagingProfilePhoneNumbers) | **GET** /messaging_profiles/{id}/phone_numbers | List phone numbers associated with a messaging profile
[**listMessagingProfileShortCodes**](MessagingProfilesApi.md#listMessagingProfileShortCodes) | **GET** /messaging_profiles/{id}/short_codes | List short codes associated with a messaging profile
[**listMessagingProfiles**](MessagingProfilesApi.md#listMessagingProfiles) | **GET** /messaging_profiles | List messaging profiles
[**retrieveMessagingProfile**](MessagingProfilesApi.md#retrieveMessagingProfile) | **GET** /messaging_profiles/{id} | Retrieve a messaging profile
[**retrieveMessagingProfileDetailedMetrics**](MessagingProfilesApi.md#retrieveMessagingProfileDetailedMetrics) | **GET** /messaging_profiles/{id}/metrics | Retrieve messaging profile metrics
[**updateMessagingProfile**](MessagingProfilesApi.md#updateMessagingProfile) | **PATCH** /messaging_profiles/{id} | Update a messaging profile


# **createMessagingProfile**
> MessagingProfileResponse createMessagingProfile(createMessagingProfileRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MessagingProfilesApi(configuration);

let body:.MessagingProfilesApiCreateMessagingProfileRequest = {
  // CreateMessagingProfileRequest | New Messaging Profile object
  createMessagingProfileRequest: {
    name: "name_example",
    enabled: true,
    webhookUrl: "",
    webhookFailoverUrl: "",
    webhookApiVersion: "2",
    numberPoolSettings: {
      tollFreeWeight: 10,
      longCodeWeight: 1,
      skipUnhealthy: true,
      stickySender: false,
      geomatch: false,
    },
    urlShortenerSettings: {
      domain: "acct.fyi",
      prefix: "",
      replaceBlacklistOnly: true,
      sendWebhooks: false,
    },
  },
};

apiInstance.createMessagingProfile(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createMessagingProfileRequest** | **CreateMessagingProfileRequest**| New Messaging Profile object |


### Return type

**MessagingProfileResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response with details about a messaging profile. |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteMessagingProfile**
> MessagingProfileResponse deleteMessagingProfile()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MessagingProfilesApi(configuration);

let body:.MessagingProfilesApiDeleteMessagingProfileRequest = {
  // string | The id of the messaging profile to retrieve
  id: "id_example",
};

apiInstance.deleteMessagingProfile(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | The id of the messaging profile to retrieve | defaults to undefined


### Return type

**MessagingProfileResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response with details about a messaging profile. |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listMessagingProfileMetrics**
> ListMessagingProfileMetricsResponse listMessagingProfileMetrics()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MessagingProfilesApi(configuration);

let body:.MessagingProfilesApiListMessagingProfileMetricsRequest = {
  // number | The page number to load (optional)
  pageNumber: 1,
  // number | The size of the page (optional)
  pageSize: 20,
  // string | The id of the messaging profile(s) to retrieve (optional)
  id: "id_example",
  // '1h' | '3h' | '24h' | '3d' | '7d' | '30d' | The timeframe for which you\'d like to retrieve metrics. (optional)
  timeFrame: "24h",
};

apiInstance.listMessagingProfileMetrics(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pageNumber** | [**number**] | The page number to load | (optional) defaults to 1
 **pageSize** | [**number**] | The size of the page | (optional) defaults to 20
 **id** | [**string**] | The id of the messaging profile(s) to retrieve | (optional) defaults to undefined
 **timeFrame** | [**&#39;1h&#39; | &#39;3h&#39; | &#39;24h&#39; | &#39;3d&#39; | &#39;7d&#39; | &#39;30d&#39;**]**Array<&#39;1h&#39; &#124; &#39;3h&#39; &#124; &#39;24h&#39; &#124; &#39;3d&#39; &#124; &#39;7d&#39; &#124; &#39;30d&#39;>** | The timeframe for which you\&#39;d like to retrieve metrics. | (optional) defaults to '24h'


### Return type

**ListMessagingProfileMetricsResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response with a list of messaging profile metrics. |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listMessagingProfilePhoneNumbers**
> ListMessagingProfilePhoneNumbersResponse listMessagingProfilePhoneNumbers()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MessagingProfilesApi(configuration);

let body:.MessagingProfilesApiListMessagingProfilePhoneNumbersRequest = {
  // string | The id of the messaging profile to retrieve
  id: "id_example",
  // number | The page number to load (optional)
  pageNumber: 1,
  // number | The size of the page (optional)
  pageSize: 20,
};

apiInstance.listMessagingProfilePhoneNumbers(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | The id of the messaging profile to retrieve | defaults to undefined
 **pageNumber** | [**number**] | The page number to load | (optional) defaults to 1
 **pageSize** | [**number**] | The size of the page | (optional) defaults to 20


### Return type

**ListMessagingProfilePhoneNumbersResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response with a list of messaging profile phone numbers. |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listMessagingProfileShortCodes**
> ListMessagingProfileShortCodesResponse listMessagingProfileShortCodes()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MessagingProfilesApi(configuration);

let body:.MessagingProfilesApiListMessagingProfileShortCodesRequest = {
  // string | The id of the messaging profile to retrieve
  id: "id_example",
  // number | The page number to load (optional)
  pageNumber: 1,
  // number | The size of the page (optional)
  pageSize: 20,
};

apiInstance.listMessagingProfileShortCodes(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | The id of the messaging profile to retrieve | defaults to undefined
 **pageNumber** | [**number**] | The page number to load | (optional) defaults to 1
 **pageSize** | [**number**] | The size of the page | (optional) defaults to 20


### Return type

**ListMessagingProfileShortCodesResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response with a list of messaging profile short codes. |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listMessagingProfiles**
> ListMessagingProfilesResponse listMessagingProfiles()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MessagingProfilesApi(configuration);

let body:.MessagingProfilesApiListMessagingProfilesRequest = {
  // number | The page number to load (optional)
  pageNumber: 1,
  // number | The size of the page (optional)
  pageSize: 20,
  // string | Filter by name (optional)
  filterName: "filter[name]_example",
};

apiInstance.listMessagingProfiles(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pageNumber** | [**number**] | The page number to load | (optional) defaults to 1
 **pageSize** | [**number**] | The size of the page | (optional) defaults to 20
 **filterName** | [**string**] | Filter by name | (optional) defaults to undefined


### Return type

**ListMessagingProfilesResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response with a list of messaging profiles. |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **retrieveMessagingProfile**
> MessagingProfileResponse retrieveMessagingProfile()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MessagingProfilesApi(configuration);

let body:.MessagingProfilesApiRetrieveMessagingProfileRequest = {
  // string | The id of the messaging profile to retrieve
  id: "id_example",
};

apiInstance.retrieveMessagingProfile(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | The id of the messaging profile to retrieve | defaults to undefined


### Return type

**MessagingProfileResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response with details about a messaging profile. |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **retrieveMessagingProfileDetailedMetrics**
> RetrieveMessagingProfileMetricsResponse retrieveMessagingProfileDetailedMetrics()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MessagingProfilesApi(configuration);

let body:.MessagingProfilesApiRetrieveMessagingProfileDetailedMetricsRequest = {
  // string | The id of the messaging profile to retrieve
  id: "id_example",
  // '1h' | '3h' | '24h' | '3d' | '7d' | '30d' | The timeframe for which you\'d like to retrieve metrics. (optional)
  timeFrame: "24h",
};

apiInstance.retrieveMessagingProfileDetailedMetrics(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | The id of the messaging profile to retrieve | defaults to undefined
 **timeFrame** | [**&#39;1h&#39; | &#39;3h&#39; | &#39;24h&#39; | &#39;3d&#39; | &#39;7d&#39; | &#39;30d&#39;**]**Array<&#39;1h&#39; &#124; &#39;3h&#39; &#124; &#39;24h&#39; &#124; &#39;3d&#39; &#124; &#39;7d&#39; &#124; &#39;30d&#39;>** | The timeframe for which you\&#39;d like to retrieve metrics. | (optional) defaults to '24h'


### Return type

**RetrieveMessagingProfileMetricsResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response with details about a messaging profile\&#39;s metrics. |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateMessagingProfile**
> MessagingProfileResponse updateMessagingProfile(updateMessagingProfileRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MessagingProfilesApi(configuration);

let body:.MessagingProfilesApiUpdateMessagingProfileRequest = {
  // string | The id of the messaging profile to retrieve
  id: "id_example",
  // UpdateMessagingProfileRequest | New Messaging Profile object
  updateMessagingProfileRequest: {
    name: "name_example",
    enabled: true,
    webhookUrl: "webhookUrl_example",
    webhookFailoverUrl: "webhookFailoverUrl_example",
    webhookApiVersion: "1",
    whitelistedDestinations: [
      "AE",
    ],
    v1Secret: "v1Secret_example",
    numberPoolSettings: {
      tollFreeWeight: 10,
      longCodeWeight: 1,
      skipUnhealthy: true,
      stickySender: false,
      geomatch: false,
    },
    urlShortenerSettings: {
      domain: "acct.fyi",
      prefix: "",
      replaceBlacklistOnly: true,
      sendWebhooks: false,
    },
  },
};

apiInstance.updateMessagingProfile(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateMessagingProfileRequest** | **UpdateMessagingProfileRequest**| New Messaging Profile object |
 **id** | [**string**] | The id of the messaging profile to retrieve | defaults to undefined


### Return type

**MessagingProfileResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response with details about a messaging profile. |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


