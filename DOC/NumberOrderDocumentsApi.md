# .NumberOrderDocumentsApi

All URIs are relative to *https://api.telnyx.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createNumberOrderDocument**](NumberOrderDocumentsApi.md#createNumberOrderDocument) | **POST** /number_order_documents | Create a number order document
[**listNumberOrderDocuments**](NumberOrderDocumentsApi.md#listNumberOrderDocuments) | **GET** /number_order_documents | List number order documents
[**retrieveNumberOrderDocument**](NumberOrderDocumentsApi.md#retrieveNumberOrderDocument) | **GET** /number_order_documents/{number_order_document_id} | Retrieve a number order document
[**updateNumberOrderDocument**](NumberOrderDocumentsApi.md#updateNumberOrderDocument) | **PATCH** /number_order_documents/{number_order_document_id} | Update a number order document


# **createNumberOrderDocument**
> NumberOrderDocumentResponse createNumberOrderDocument(createNumberOrderDocumentRequest)

Upload a phone number order document.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .NumberOrderDocumentsApi(configuration);

let body:.NumberOrderDocumentsApiCreateNumberOrderDocumentRequest = {
  // CreateNumberOrderDocumentRequest
  createNumberOrderDocumentRequest: null,
};

apiInstance.createNumberOrderDocument(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createNumberOrderDocumentRequest** | **CreateNumberOrderDocumentRequest**|  |


### Return type

**NumberOrderDocumentResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response with details about a number order document. |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listNumberOrderDocuments**
> ListNumberOrderDocumentsResponse listNumberOrderDocuments()

Gets a paginated list of number order documents.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .NumberOrderDocumentsApi(configuration);

let body:.NumberOrderDocumentsApiListNumberOrderDocumentsRequest = {
  // string | Filter number order documents by `requirement_id`. (optional)
  filterRequirementId: "filter[requirement_id]_example",
  // string | Filter number order documents after this datetime. (optional)
  filterCreatedAtGt: "filter[created_at][gt]_example",
  // string | Filter number order documents from before this datetime. (optional)
  filterCreatedAtLt: "filter[created_at][lt]_example",
  // number | The page number to load (optional)
  pageNumber: 1,
  // number | The size of the page (optional)
  pageSize: 20,
};

apiInstance.listNumberOrderDocuments(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filterRequirementId** | [**string**] | Filter number order documents by &#x60;requirement_id&#x60;. | (optional) defaults to undefined
 **filterCreatedAtGt** | [**string**] | Filter number order documents after this datetime. | (optional) defaults to undefined
 **filterCreatedAtLt** | [**string**] | Filter number order documents from before this datetime. | (optional) defaults to undefined
 **pageNumber** | [**number**] | The page number to load | (optional) defaults to 1
 **pageSize** | [**number**] | The size of the page | (optional) defaults to 20


### Return type

**ListNumberOrderDocumentsResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response with a list of number order documents. |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **retrieveNumberOrderDocument**
> NumberOrderDocumentResponse retrieveNumberOrderDocument()

Gets a single number order document.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .NumberOrderDocumentsApi(configuration);

let body:.NumberOrderDocumentsApiRetrieveNumberOrderDocumentRequest = {
  // string | The number order document ID.
  numberOrderDocumentId: "number_order_document_id_example",
};

apiInstance.retrieveNumberOrderDocument(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **numberOrderDocumentId** | [**string**] | The number order document ID. | defaults to undefined


### Return type

**NumberOrderDocumentResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response with details about a number order document. |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateNumberOrderDocument**
> NumberOrderDocumentResponse updateNumberOrderDocument(updateNumberOrderDocumentRequest)

Updates a number order document.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .NumberOrderDocumentsApi(configuration);

let body:.NumberOrderDocumentsApiUpdateNumberOrderDocumentRequest = {
  // string | The number order document ID.
  numberOrderDocumentId: "number_order_document_id_example",
  // UpdateNumberOrderDocumentRequest
  updateNumberOrderDocumentRequest: null,
};

apiInstance.updateNumberOrderDocument(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateNumberOrderDocumentRequest** | **UpdateNumberOrderDocumentRequest**|  |
 **numberOrderDocumentId** | [**string**] | The number order document ID. | defaults to undefined


### Return type

**NumberOrderDocumentResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response with details about a number order document. |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


