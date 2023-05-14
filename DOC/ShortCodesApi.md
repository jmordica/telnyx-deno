# .ShortCodesApi

All URIs are relative to *https://api.telnyx.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listShortCodes**](ShortCodesApi.md#listShortCodes) | **GET** /short_codes | List short codes
[**retrieveShortCode**](ShortCodesApi.md#retrieveShortCode) | **GET** /short_codes/{id} | Retrieve a short code
[**updateShortCode**](ShortCodesApi.md#updateShortCode) | **PATCH** /short_codes/{id} | Update short code


# **listShortCodes**
> ListShortCodesResponse listShortCodes()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ShortCodesApi(configuration);

let body:.ShortCodesApiListShortCodesRequest = {
  // number | The page number to load (optional)
  pageNumber: 1,
  // number | The size of the page (optional)
  pageSize: 20,
  // string | Filter by Messaging Profile ID. Use the string `null` for phone numbers without assigned profiles. A synonym for the `/messaging_profiles/{id}/short_codes` endpoint when querying about an extant profile. (optional)
  filterMessagingProfileId: "filter[messaging_profile_id]_example",
};

apiInstance.listShortCodes(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pageNumber** | [**number**] | The page number to load | (optional) defaults to 1
 **pageSize** | [**number**] | The size of the page | (optional) defaults to 20
 **filterMessagingProfileId** | [**string**] | Filter by Messaging Profile ID. Use the string &#x60;null&#x60; for phone numbers without assigned profiles. A synonym for the &#x60;/messaging_profiles/{id}/short_codes&#x60; endpoint when querying about an extant profile. | (optional) defaults to undefined


### Return type

**ListShortCodesResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response with a list of short codes. |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **retrieveShortCode**
> ShortCodeResponse retrieveShortCode()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ShortCodesApi(configuration);

let body:.ShortCodesApiRetrieveShortCodeRequest = {
  // string | The id of the short code
  id: "id_example",
};

apiInstance.retrieveShortCode(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | The id of the short code | defaults to undefined


### Return type

**ShortCodeResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response with details about a short code. |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateShortCode**
> ShortCodeResponse updateShortCode(updateShortCodeRequest)

Update the settings for a specific short code. To unbind a short code from a profile, set the `messaging_profile_id` to `null` or an empty string.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ShortCodesApi(configuration);

let body:.ShortCodesApiUpdateShortCodeRequest = {
  // string | The id of the short code
  id: "id_example",
  // UpdateShortCodeRequest | Short code update
  updateShortCodeRequest: {
    messagingProfileId: "messagingProfileId_example",
  },
};

apiInstance.updateShortCode(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateShortCodeRequest** | **UpdateShortCodeRequest**| Short code update |
 **id** | [**string**] | The id of the short code | defaults to undefined


### Return type

**ShortCodeResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response with details about a short code. |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


