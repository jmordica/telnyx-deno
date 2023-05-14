# .MobileOperatorNetworksApi

All URIs are relative to *https://api.telnyx.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**mobileOperatorNetworksGet**](MobileOperatorNetworksApi.md#mobileOperatorNetworksGet) | **GET** /mobile_operator_networks | List mobile operator networks


# **mobileOperatorNetworksGet**
> MobileOperatorNetworksGet200Response mobileOperatorNetworksGet()

Telnyx has a set of GSM mobile operators partners that are available through our mobile network roaming. This resource is entirely managed by Telnyx and may change over time. That means that this resource won\'t allow any write operations for it. Still, it\'s available so it can be used as a support resource that can be related to other resources or become a configuration option.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MobileOperatorNetworksApi(configuration);

let body:.MobileOperatorNetworksApiMobileOperatorNetworksGetRequest = {
  // number | The page number to load (optional)
  pageNumber: 1,
  // number | The size of the page (optional)
  pageSize: 20,
  // string | Filter by name starting with. (optional)
  filterNameStartsWith: "AT",
  // string | Filter by name containing match. (optional)
  filterNameContains: "T&T",
  // string | Filter by name ending with. (optional)
  filterNameEndsWith: "T",
  // string | Filter by exact country_code. (optional)
  filterCountryCode: "US",
  // string | Filter by exact MCC. (optional)
  filterMcc: "310",
  // string | Filter by exact MNC. (optional)
  filterMnc: "410",
  // string | Filter by exact TADIG. (optional)
  filterTadig: "USACG",
};

apiInstance.mobileOperatorNetworksGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pageNumber** | [**number**] | The page number to load | (optional) defaults to 1
 **pageSize** | [**number**] | The size of the page | (optional) defaults to 20
 **filterNameStartsWith** | [**string**] | Filter by name starting with. | (optional) defaults to undefined
 **filterNameContains** | [**string**] | Filter by name containing match. | (optional) defaults to undefined
 **filterNameEndsWith** | [**string**] | Filter by name ending with. | (optional) defaults to undefined
 **filterCountryCode** | [**string**] | Filter by exact country_code. | (optional) defaults to undefined
 **filterMcc** | [**string**] | Filter by exact MCC. | (optional) defaults to undefined
 **filterMnc** | [**string**] | Filter by exact MNC. | (optional) defaults to undefined
 **filterTadig** | [**string**] | Filter by exact TADIG. | (optional) defaults to undefined


### Return type

**MobileOperatorNetworksGet200Response**

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


