# .NumberPortoutApi

All URIs are relative to *https://api.telnyx.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**findPortoutComments**](NumberPortoutApi.md#findPortoutComments) | **GET** /portouts/{id}/comments | List all comments for a portout request
[**findPortoutRequest**](NumberPortoutApi.md#findPortoutRequest) | **GET** /portouts/{id} | Get a portout request
[**getPortRequestSupportingDocuments**](NumberPortoutApi.md#getPortRequestSupportingDocuments) | **GET** /portouts/{id}/supporting_documents | List supporting documents on a portout request
[**listPortoutRequest**](NumberPortoutApi.md#listPortoutRequest) | **GET** /portouts | List portout requests
[**postPortRequestComment**](NumberPortoutApi.md#postPortRequestComment) | **POST** /portouts/{id}/comments | Create a comment on a portout request
[**postPortRequestSupportingDocuments**](NumberPortoutApi.md#postPortRequestSupportingDocuments) | **POST** /portouts/{id}/supporting_documents | Create a list of supporting documents on a portout request
[**updatePortoutRequest**](NumberPortoutApi.md#updatePortoutRequest) | **PATCH** /portouts/{id}/{status} | Update Status


# **findPortoutComments**
> FindPortoutComments200Response findPortoutComments()

Returns a list of comments for a portout request.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .NumberPortoutApi(configuration);

let body:.NumberPortoutApiFindPortoutCommentsRequest = {
  // string | Portout id
  id: "id_example",
};

apiInstance.findPortoutComments(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Portout id | defaults to undefined


### Return type

**FindPortoutComments200Response**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Portout Comments |  -  |
**401** | Unauthorized |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity. Check message field in response for details. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **findPortoutRequest**
> FindPortoutRequest200Response findPortoutRequest()

Returns the portout request based on the ID provided

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .NumberPortoutApi(configuration);

let body:.NumberPortoutApiFindPortoutRequestRequest = {
  // string | Portout id
  id: "id_example",
};

apiInstance.findPortoutRequest(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Portout id | defaults to undefined


### Return type

**FindPortoutRequest200Response**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Portout Response |  -  |
**401** | Unauthorized |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity. Check message field in response for details. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getPortRequestSupportingDocuments**
> GetPortRequestSupportingDocuments201Response getPortRequestSupportingDocuments()

List every supporting documents for a portout request.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .NumberPortoutApi(configuration);

let body:.NumberPortoutApiGetPortRequestSupportingDocumentsRequest = {
  // string | Portout id
  id: "id_example",
};

apiInstance.getPortRequestSupportingDocuments(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Portout id | defaults to undefined


### Return type

**GetPortRequestSupportingDocuments201Response**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Portout Supporting Documents |  -  |
**401** | Unauthorized |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listPortoutRequest**
> ListPortoutRequest200Response listPortoutRequest()

Returns the portout requests according to filters

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .NumberPortoutApi(configuration);

let body:.NumberPortoutApiListPortoutRequestRequest = {
  // string | Filter by new carrier name. (optional)
  filterCarrierName: "filter[carrier_name]_example",
  // string | Filter by new carrier spid. (optional)
  filterSpid: "filter[spid]_example",
  // 'pending' | 'authorized' | 'ported' | 'rejected' | 'rejected-pending' | 'canceled' | Filter by portout status. (optional)
  filterStatus: "pending",
  // number | The page number to load (optional)
  pageNumber: 1,
  // number | The size of the page (optional)
  pageSize: 20,
};

apiInstance.listPortoutRequest(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filterCarrierName** | [**string**] | Filter by new carrier name. | (optional) defaults to undefined
 **filterSpid** | [**string**] | Filter by new carrier spid. | (optional) defaults to undefined
 **filterStatus** | [**&#39;pending&#39; | &#39;authorized&#39; | &#39;ported&#39; | &#39;rejected&#39; | &#39;rejected-pending&#39; | &#39;canceled&#39;**]**Array<&#39;pending&#39; &#124; &#39;authorized&#39; &#124; &#39;ported&#39; &#124; &#39;rejected&#39; &#124; &#39;rejected-pending&#39; &#124; &#39;canceled&#39;>** | Filter by portout status. | (optional) defaults to undefined
 **pageNumber** | [**number**] | The page number to load | (optional) defaults to 1
 **pageSize** | [**number**] | The size of the page | (optional) defaults to 20


### Return type

**ListPortoutRequest200Response**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Portout Response |  -  |
**401** | Unauthorized |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity. Check message field in response for details. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **postPortRequestComment**
> PostPortRequestComment201Response postPortRequestComment(postPortRequestCommentRequest)

Creates a comment on a portout request.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .NumberPortoutApi(configuration);

let body:.NumberPortoutApiPostPortRequestCommentRequest = {
  // string | Portout id
  id: "id_example",
  // PostPortRequestCommentRequest
  postPortRequestCommentRequest: {
    body: "body_example",
  },
};

apiInstance.postPortRequestComment(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **postPortRequestCommentRequest** | **PostPortRequestCommentRequest**|  |
 **id** | [**string**] | Portout id | defaults to undefined


### Return type

**PostPortRequestComment201Response**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Portout Comment Response |  -  |
**401** | Unauthorized |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity. Check message field in response for details. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **postPortRequestSupportingDocuments**
> GetPortRequestSupportingDocuments201Response postPortRequestSupportingDocuments(postPortRequestSupportingDocumentsRequest)

Creates a list of supporting documents on a portout request.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .NumberPortoutApi(configuration);

let body:.NumberPortoutApiPostPortRequestSupportingDocumentsRequest = {
  // string | Portout id
  id: "id_example",
  // PostPortRequestSupportingDocumentsRequest
  postPortRequestSupportingDocumentsRequest: {
    documents: [
      {
        type: "loa",
        documentId: "0ccc7b54-4df3-4bca-a65a-3da1ecc777f0",
      },
    ],
  },
};

apiInstance.postPortRequestSupportingDocuments(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **postPortRequestSupportingDocumentsRequest** | **PostPortRequestSupportingDocumentsRequest**|  |
 **id** | [**string**] | Portout id | defaults to undefined


### Return type

**GetPortRequestSupportingDocuments201Response**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Portout Supporting Documents |  -  |
**401** | Unauthorized |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity. Check message field in response for details. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updatePortoutRequest**
> FindPortoutRequest200Response updatePortoutRequest(updatePortoutRequestRequest)

Authorize or reject portout request

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .NumberPortoutApi(configuration);

let body:.NumberPortoutApiUpdatePortoutRequestRequest = {
  // string | Portout id
  id: "id_example",
  // 'authorized' | 'rejected-pending' | Updated portout status
  status: "authorized",
  // UpdatePortoutRequestRequest
  updatePortoutRequestRequest: {
    reason: "I do not recognize this transaction",
  },
};

apiInstance.updatePortoutRequest(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updatePortoutRequestRequest** | **UpdatePortoutRequestRequest**|  |
 **id** | [**string**] | Portout id | defaults to undefined
 **status** | [**&#39;authorized&#39; | &#39;rejected-pending&#39;**]**Array<&#39;authorized&#39; &#124; &#39;rejected-pending&#39;>** | Updated portout status | defaults to undefined


### Return type

**FindPortoutRequest200Response**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Portout Response |  -  |
**401** | Unauthorized |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity. Check message field in response for details. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


