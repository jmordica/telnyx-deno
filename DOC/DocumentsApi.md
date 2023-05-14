# .DocumentsApi

All URIs are relative to *https://api.telnyx.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createDocument**](DocumentsApi.md#createDocument) | **POST** /documents | Upload a document
[**deleteDocument**](DocumentsApi.md#deleteDocument) | **DELETE** /documents/{id} | Delete a document
[**downloadDocServiceDocument**](DocumentsApi.md#downloadDocServiceDocument) | **GET** /documents/{id}/download | Download a document
[**listDocumentLinks**](DocumentsApi.md#listDocumentLinks) | **GET** /document_links | List all document links
[**listDocuments**](DocumentsApi.md#listDocuments) | **GET** /documents | List all documents
[**retrieveDocument**](DocumentsApi.md#retrieveDocument) | **GET** /documents/{id} | Retrieve a document
[**updateDocument**](DocumentsApi.md#updateDocument) | **PATCH** /documents/{id} | Update a document


# **createDocument**
> CreateDocument200Response createDocument(createDocServiceDocumentRequest)

Upload a document.<br /><br />Uploaded files must be linked to a service within 30 minutes or they will be automatically deleted.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DocumentsApi(configuration);

let body:.DocumentsApiCreateDocumentRequest = {
  // CreateDocServiceDocumentRequest
  createDocServiceDocumentRequest: null,
};

apiInstance.createDocument(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createDocServiceDocumentRequest** | **CreateDocServiceDocumentRequest**|  |


### Return type

**CreateDocument200Response**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json, multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**422** | Unprocessable entity. Check the \&#39;detail\&#39; field in response for details. |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteDocument**
> CreateDocument200Response deleteDocument()

Delete a document.<br /><br />A document can only be deleted if it\'s not linked to a service. If it is linked to a service, it must be unlinked prior to deleting.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DocumentsApi(configuration);

let body:.DocumentsApiDeleteDocumentRequest = {
  // string | Identifies the resource.
  id: "6a09cdc3-8948-47f0-aa62-74ac943d6c58",
};

apiInstance.deleteDocument(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Identifies the resource. | defaults to undefined


### Return type

**CreateDocument200Response**

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

# **downloadDocServiceDocument**
> HttpFile downloadDocServiceDocument()

Download a document.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DocumentsApi(configuration);

let body:.DocumentsApiDownloadDocServiceDocumentRequest = {
  // string | Identifies the resource.
  id: "6a09cdc3-8948-47f0-aa62-74ac943d6c58",
};

apiInstance.downloadDocServiceDocument(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Identifies the resource. | defaults to undefined


### Return type

**HttpFile**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: *, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listDocumentLinks**
> ListDocumentLinks200Response listDocumentLinks()

List all documents links ordered by created_at descending.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DocumentsApi(configuration);

let body:.DocumentsApiListDocumentLinksRequest = {
  // number | The page number to load (optional)
  pageNumber: 1,
  // number | The size of the page (optional)
  pageSize: 20,
  // string | Identifies the associated document to filter on. (optional)
  filterDocumentId: "6a09cdc3-8948-47f0-aa62-74ac943d6c58",
  // string | The `linked_record_type` of the document to filter on. (optional)
  filterLinkedRecordType: "porting_order",
  // string | The `linked_resource_id` of the document to filter on. (optional)
  filterLinkedResourceId: "6a09cdc3-8948-47f0-aa62-74ac943d6c58",
};

apiInstance.listDocumentLinks(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pageNumber** | [**number**] | The page number to load | (optional) defaults to 1
 **pageSize** | [**number**] | The size of the page | (optional) defaults to 20
 **filterDocumentId** | [**string**] | Identifies the associated document to filter on. | (optional) defaults to undefined
 **filterLinkedRecordType** | [**string**] | The &#x60;linked_record_type&#x60; of the document to filter on. | (optional) defaults to undefined
 **filterLinkedResourceId** | [**string**] | The &#x60;linked_resource_id&#x60; of the document to filter on. | (optional) defaults to undefined


### Return type

**ListDocumentLinks200Response**

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

# **listDocuments**
> ListDocuments200Response listDocuments()

List all documents ordered by created_at descending.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DocumentsApi(configuration);

let body:.DocumentsApiListDocumentsRequest = {
  // string | Filter by string matching part of filename. (optional)
  filterFilenameContains: "invoice",
  // string | Filter documents by a customer references. (optional)
  filterCustomerReferenceEq: "MY REF 001",
  // string | Filter documents by a list of customer references. (optional)
  filterCustomerReferenceIn: "MY REF 001",
  // string | Filter by created at greater than provided value. (optional)
  filterCreatedAtGt: "2021-04-09T22:25:27.521Z",
  // string | Filter by created at less than provided value. (optional)
  filterCreatedAtLt: "2021-04-09T22:25:27.521Z",
  // 'filename' | 'created_at' | 'updated_at' | Specifies the sort order for results. If you want to sort by a field in ascending order, include it as a sort parameter. If you want to sort in descending order, prepend a `-` in front of the field name. (optional)
  sort: "filename",
  // number | The page number to load (optional)
  pageNumber: 1,
  // number | The size of the page (optional)
  pageSize: 20,
};

apiInstance.listDocuments(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filterFilenameContains** | [**string**] | Filter by string matching part of filename. | (optional) defaults to undefined
 **filterCustomerReferenceEq** | [**string**] | Filter documents by a customer references. | (optional) defaults to undefined
 **filterCustomerReferenceIn** | [**string**] | Filter documents by a list of customer references. | (optional) defaults to undefined
 **filterCreatedAtGt** | [**string**] | Filter by created at greater than provided value. | (optional) defaults to undefined
 **filterCreatedAtLt** | [**string**] | Filter by created at less than provided value. | (optional) defaults to undefined
 **sort** | [**&#39;filename&#39; | &#39;created_at&#39; | &#39;updated_at&#39;**]**Array<&#39;filename&#39; &#124; &#39;created_at&#39; &#124; &#39;updated_at&#39;>** | Specifies the sort order for results. If you want to sort by a field in ascending order, include it as a sort parameter. If you want to sort in descending order, prepend a &#x60;-&#x60; in front of the field name. | (optional) defaults to undefined
 **pageNumber** | [**number**] | The page number to load | (optional) defaults to 1
 **pageSize** | [**number**] | The size of the page | (optional) defaults to 20


### Return type

**ListDocuments200Response**

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

# **retrieveDocument**
> CreateDocument200Response retrieveDocument()

Retrieve a document.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DocumentsApi(configuration);

let body:.DocumentsApiRetrieveDocumentRequest = {
  // string | Identifies the resource.
  id: "6a09cdc3-8948-47f0-aa62-74ac943d6c58",
};

apiInstance.retrieveDocument(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Identifies the resource. | defaults to undefined


### Return type

**CreateDocument200Response**

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

# **updateDocument**
> CreateDocument200Response updateDocument(docServiceDocument)

Update a document.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DocumentsApi(configuration);

let body:.DocumentsApiUpdateDocumentRequest = {
  // string | Identifies the resource.
  id: "6a09cdc3-8948-47f0-aa62-74ac943d6c58",
  // DocServiceDocument
  docServiceDocument: null,
};

apiInstance.updateDocument(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **docServiceDocument** | **DocServiceDocument**|  |
 **id** | [**string**] | Identifies the resource. | defaults to undefined


### Return type

**CreateDocument200Response**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


