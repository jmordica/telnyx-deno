# .InventoryLevelApi

All URIs are relative to *https://api.telnyx.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createInventoryCoverageRequest**](InventoryLevelApi.md#createInventoryCoverageRequest) | **GET** /inventory_coverage | Create an inventory coverage request


# **createInventoryCoverageRequest**
> CreateInventoryCoverageRequest200Response createInventoryCoverageRequest()

Creates an inventory coverage request. If locality, npa or national_destination_code is used in groupBy, and no region or locality filters are used, the whole paginated set is returned.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .InventoryLevelApi(configuration);

let body:.InventoryLevelApiCreateInventoryCoverageRequestRequest = {
  // 'locality' | 'npa' | 'national_destination_code'
  filterGroupBy: "nxx",
  // number (optional)
  filterNpa: 318,
  // number (optional)
  filterNxx: 202,
  // string (optional)
  filterAdministrativeArea: "LA",
  // 'local' | 'toll_free' | 'national' | 'mobile' | 'landline' | 'shared_cost' (optional)
  filterPhoneNumberType: "local",
  // 'US' | 'CA' | 'GB' (optional)
  filterCountryCode: "US",
  // boolean (optional)
  filterCount: true,
  // Array<'sms' | 'mms' | 'voice' | 'fax' | 'emergency'> | Filter if the phone number should be used for voice, fax, mms, sms, emergency. Returns features in the response when used (optional)
  filterFeatures: [
    "voice,sms",
  ],
};

apiInstance.createInventoryCoverageRequest(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filterGroupBy** | [**&#39;locality&#39; | &#39;npa&#39; | &#39;national_destination_code&#39;**]**Array<&#39;locality&#39; &#124; &#39;npa&#39; &#124; &#39;national_destination_code&#39;>** |  | defaults to undefined
 **filterNpa** | [**number**] |  | (optional) defaults to undefined
 **filterNxx** | [**number**] |  | (optional) defaults to undefined
 **filterAdministrativeArea** | [**string**] |  | (optional) defaults to undefined
 **filterPhoneNumberType** | [**&#39;local&#39; | &#39;toll_free&#39; | &#39;national&#39; | &#39;mobile&#39; | &#39;landline&#39; | &#39;shared_cost&#39;**]**Array<&#39;local&#39; &#124; &#39;toll_free&#39; &#124; &#39;national&#39; &#124; &#39;mobile&#39; &#124; &#39;landline&#39; &#124; &#39;shared_cost&#39;>** |  | (optional) defaults to undefined
 **filterCountryCode** | [**&#39;US&#39; | &#39;CA&#39; | &#39;GB&#39;**]**Array<&#39;US&#39; &#124; &#39;CA&#39; &#124; &#39;GB&#39;>** |  | (optional) defaults to undefined
 **filterCount** | [**boolean**] |  | (optional) defaults to undefined
 **filterFeatures** | **Array<&#39;sms&#39; &#124; &#39;mms&#39; &#124; &#39;voice&#39; &#124; &#39;fax&#39; &#124; &#39;emergency&#39;>** | Filter if the phone number should be used for voice, fax, mms, sms, emergency. Returns features in the response when used | (optional) defaults to undefined


### Return type

**CreateInventoryCoverageRequest200Response**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response with a list of inventory coverage levels |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


