# .RequirementsApi

All URIs are relative to *https://api.telnyx.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**docReqsRetrieveDocumentRequirements**](RequirementsApi.md#docReqsRetrieveDocumentRequirements) | **GET** /requirements/{id} | Retrieve a document requirement
[**listRequirements**](RequirementsApi.md#listRequirements) | **GET** /requirements | List all requirements


# **docReqsRetrieveDocumentRequirements**
> DocReqsRetrieveDocumentRequirements200Response docReqsRetrieveDocumentRequirements()

Retrieve a document requirement record

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .RequirementsApi(configuration);

let body:.RequirementsApiDocReqsRetrieveDocumentRequirementsRequest = {
  // string | Uniquely identifies the requirement_type record
  id: "a9dad8d5-fdbd-49d7-aa23-39bb08a5ebaa",
};

apiInstance.docReqsRetrieveDocumentRequirements(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Uniquely identifies the requirement_type record | defaults to undefined


### Return type

**DocReqsRetrieveDocumentRequirements200Response**

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

# **listRequirements**
> ListRequirements200Response listRequirements()

List all requirements with filtering, sorting, and pagination

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .RequirementsApi(configuration);

let body:.RequirementsApiListRequirementsRequest = {
  // string | Filters results to those applying to a 2-character (ISO 3166-1 alpha-2) country code (optional)
  filterCountryCode: "US",
  // 'local' | 'national' | 'toll-free' | Filters results to those applying to a specific `phone_number_type` (optional)
  filterPhoneNumberType: "local",
  // 'ordering' | 'porting' | Filters requirements to those applying to a specific action. (optional)
  filterAction: "porting",
  // 'action' | 'country_code' | 'locality' | 'phone_number_type' | Specifies the sort order for results. If you want to sort by a field in ascending order, include it as a sort parameter. If you want to sort in descending order, prepend a `-` in front of the field name. (optional)
  sort: "country_code",
  // number | The page number to load (optional)
  pageNumber: 1,
  // number | The size of the page (optional)
  pageSize: 20,
};

apiInstance.listRequirements(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filterCountryCode** | [**string**] | Filters results to those applying to a 2-character (ISO 3166-1 alpha-2) country code | (optional) defaults to undefined
 **filterPhoneNumberType** | [**&#39;local&#39; | &#39;national&#39; | &#39;toll-free&#39;**]**Array<&#39;local&#39; &#124; &#39;national&#39; &#124; &#39;toll-free&#39;>** | Filters results to those applying to a specific &#x60;phone_number_type&#x60; | (optional) defaults to undefined
 **filterAction** | [**&#39;ordering&#39; | &#39;porting&#39;**]**Array<&#39;ordering&#39; &#124; &#39;porting&#39;>** | Filters requirements to those applying to a specific action. | (optional) defaults to undefined
 **sort** | [**&#39;action&#39; | &#39;country_code&#39; | &#39;locality&#39; | &#39;phone_number_type&#39;**]**Array<&#39;action&#39; &#124; &#39;country_code&#39; &#124; &#39;locality&#39; &#124; &#39;phone_number_type&#39;>** | Specifies the sort order for results. If you want to sort by a field in ascending order, include it as a sort parameter. If you want to sort in descending order, prepend a &#x60;-&#x60; in front of the field name. | (optional) defaults to undefined
 **pageNumber** | [**number**] | The page number to load | (optional) defaults to 1
 **pageSize** | [**number**] | The size of the page | (optional) defaults to 20


### Return type

**ListRequirements200Response**

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


