# .RequirementTypesApi

All URIs are relative to *https://api.telnyx.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**docReqsListRequirementTypes**](RequirementTypesApi.md#docReqsListRequirementTypes) | **GET** /requirement_types | List all requirement types
[**docReqsRetrieveRequirementType**](RequirementTypesApi.md#docReqsRetrieveRequirementType) | **GET** /requirement_types/{id} | Retrieve a requirement types


# **docReqsListRequirementTypes**
> DocReqsListRequirementTypes200Response docReqsListRequirementTypes()

List all requirement types ordered by created_at descending

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .RequirementTypesApi(configuration);

let body:.RequirementTypesApiDocReqsListRequirementTypesRequest = {
  // string | Filters requirement types to those whose name contains a certain string. (optional)
  filterNameContains: "utility bill",
  // 'created_at' | 'name' | 'updated_at' | Specifies the sort order for results. If you want to sort by a field in ascending order, include it as a sort parameter. If you want to sort in descending order, prepend a `-` in front of the field name. (optional)
  sort: "country_code",
};

apiInstance.docReqsListRequirementTypes(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filterNameContains** | [**string**] | Filters requirement types to those whose name contains a certain string. | (optional) defaults to undefined
 **sort** | [**&#39;created_at&#39; | &#39;name&#39; | &#39;updated_at&#39;**]**Array<&#39;created_at&#39; &#124; &#39;name&#39; &#124; &#39;updated_at&#39;>** | Specifies the sort order for results. If you want to sort by a field in ascending order, include it as a sort parameter. If you want to sort in descending order, prepend a &#x60;-&#x60; in front of the field name. | (optional) defaults to undefined


### Return type

**DocReqsListRequirementTypes200Response**

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

# **docReqsRetrieveRequirementType**
> DocReqsRetrieveRequirementType200Response docReqsRetrieveRequirementType()

Retrieve a requirement type by id

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .RequirementTypesApi(configuration);

let body:.RequirementTypesApiDocReqsRetrieveRequirementTypeRequest = {
  // string | Uniquely identifies the requirement_type record
  id: "a38c217a-8019-48f8-bff6-0fdd9939075b",
};

apiInstance.docReqsRetrieveRequirementType(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Uniquely identifies the requirement_type record | defaults to undefined


### Return type

**DocReqsRetrieveRequirementType200Response**

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


