# .PortingOrderApi

All URIs are relative to *https://api.telnyx.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**activatePortingOrder**](PortingOrderApi.md#activatePortingOrder) | **POST** /porting_orders/{id}/actions/activate | Activate every number in a porting order asynchronously.
[**cancelPortingOrder**](PortingOrderApi.md#cancelPortingOrder) | **POST** /porting_orders/{id}/actions/cancel | Cancel a porting order
[**confirmPortingOrder**](PortingOrderApi.md#confirmPortingOrder) | **POST** /porting_orders/{id}/actions/confirm | Submit a porting order.
[**createPortingOrder**](PortingOrderApi.md#createPortingOrder) | **POST** /porting_orders | Create a porting order
[**createPortingOrderComment**](PortingOrderApi.md#createPortingOrderComment) | **POST** /porting_orders/{id}/comments | Create a comment for a porting order
[**deletePortingOrder**](PortingOrderApi.md#deletePortingOrder) | **DELETE** /porting_orders/{id} | Delete a porting order
[**getPortingOrder**](PortingOrderApi.md#getPortingOrder) | **GET** /porting_orders/{id} | Retrieve a porting order
[**getPortingOrderLOATemplate**](PortingOrderApi.md#getPortingOrderLOATemplate) | **GET** /porting_orders/{id}/loa_template | Download a porting order loa template
[**getPortingOrderSubRequest**](PortingOrderApi.md#getPortingOrderSubRequest) | **GET** /porting_orders/{id}/sub_request | Retrieve the associated V1 sub_request_id and port_request_id
[**getPortingOrdersActivationJob**](PortingOrderApi.md#getPortingOrdersActivationJob) | **GET** /porting_orders/{id}/activation_jobs/{activationJobId} | Retrieve a porting activation job
[**listAllowedFocWindows**](PortingOrderApi.md#listAllowedFocWindows) | **GET** /porting_orders/{id}/allowed_foc_windows | List allowed FOC dates
[**listPortingOrderDocuments**](PortingOrderApi.md#listPortingOrderDocuments) | **GET** /porting_orders/{id}/documents | List all documents associated with a porting order
[**listPortingOrderRequirements**](PortingOrderApi.md#listPortingOrderRequirements) | **GET** /porting_orders/{id}/requirements | List porting order requirements
[**listPortingOrders**](PortingOrderApi.md#listPortingOrders) | **GET** /porting_orders | List all porting orders
[**listPortingOrdersActivationJobs**](PortingOrderApi.md#listPortingOrdersActivationJobs) | **GET** /porting_orders/{id}/activation_jobs | List all porting activation jobs
[**listPortingOrdersComments**](PortingOrderApi.md#listPortingOrdersComments) | **GET** /porting_orders/{id}/comments | List all comments of a porting order
[**listPortingOrdersExceptionTypes**](PortingOrderApi.md#listPortingOrdersExceptionTypes) | **GET** /porting_orders/exception_types | List all exception types
[**listPortingPhoneNumbers**](PortingOrderApi.md#listPortingPhoneNumbers) | **GET** /porting_phone_numbers | List all porting phone numbers
[**updatePortingOrder**](PortingOrderApi.md#updatePortingOrder) | **PATCH** /porting_orders/{id} | Edit a porting order
[**uploadPortingOrderDocuments**](PortingOrderApi.md#uploadPortingOrderDocuments) | **POST** /porting_orders/{id}/documents | Associate a list of documents with a porting order


# **activatePortingOrder**
> ActivatePortingOrder202Response activatePortingOrder()

Activate each number in a porting order asynchronously. This operation is limited to US FastPort orders only.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PortingOrderApi(configuration);

let body:.PortingOrderApiActivatePortingOrderRequest = {
  // string | Porting Order id
  id: "id_example",
};

apiInstance.activatePortingOrder(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Porting Order id | defaults to undefined


### Return type

**ActivatePortingOrder202Response**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | Successful response |  -  |
**401** | Unauthorized |  -  |
**422** | Unprocessable entity. Check message field in response for details. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **cancelPortingOrder**
> CancelPortingOrder200Response cancelPortingOrder()

Cancel a porting order

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PortingOrderApi(configuration);

let body:.PortingOrderApiCancelPortingOrderRequest = {
  // string | Porting Order id
  id: "id_example",
};

apiInstance.cancelPortingOrder(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Porting Order id | defaults to undefined


### Return type

**CancelPortingOrder200Response**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**401** | Unauthorized |  -  |
**422** | Unprocessable entity. Check message field in response for details. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **confirmPortingOrder**
> ConfirmPortingOrder200Response confirmPortingOrder()

Confirm and submit your porting order.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PortingOrderApi(configuration);

let body:.PortingOrderApiConfirmPortingOrderRequest = {
  // string | Porting Order id
  id: "id_example",
};

apiInstance.confirmPortingOrder(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Porting Order id | defaults to undefined


### Return type

**ConfirmPortingOrder200Response**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**401** | Unauthorized |  -  |
**422** | Unprocessable entity. Check message field in response for details. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createPortingOrder**
> CreatePortingOrder201Response createPortingOrder(createPortingOrder)

Creates a new porting order object.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PortingOrderApi(configuration);

let body:.PortingOrderApiCreatePortingOrderRequest = {
  // CreatePortingOrder
  createPortingOrder: {
    phoneNumbers: ["+13035550000","+13035550001","+13035550002"],
    customerReference: "Acct 123abc",
  },
};

apiInstance.createPortingOrder(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createPortingOrder** | **CreatePortingOrder**|  |


### Return type

**CreatePortingOrder201Response**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successful response |  -  |
**401** | Unauthorized |  -  |
**422** | Unprocessable entity. Check message field in response for details. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createPortingOrderComment**
> CreatePortingOrderComment201Response createPortingOrderComment(createPortingOrderComment)

Creates a new comment for a porting order.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PortingOrderApi(configuration);

let body:.PortingOrderApiCreatePortingOrderCommentRequest = {
  // string | Porting Order id
  id: "id_example",
  // CreatePortingOrderComment
  createPortingOrderComment: {
    body: "Please, let me know when the port completes",
  },
};

apiInstance.createPortingOrderComment(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createPortingOrderComment** | **CreatePortingOrderComment**|  |
 **id** | [**string**] | Porting Order id | defaults to undefined


### Return type

**CreatePortingOrderComment201Response**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successful response |  -  |
**401** | Unauthorized |  -  |
**422** | Unprocessable entity. Check message field in response for details. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deletePortingOrder**
> void deletePortingOrder()

Deletes an existing porting order. This operation is restrict to porting orders in draft state.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PortingOrderApi(configuration);

let body:.PortingOrderApiDeletePortingOrderRequest = {
  // string | Porting Order id
  id: "id_example",
};

apiInstance.deletePortingOrder(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Porting Order id | defaults to undefined


### Return type

**void**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No content |  -  |
**401** | Unauthorized |  -  |
**422** | Unprocessable entity. Check message field in response for details. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getPortingOrder**
> GetPortingOrder200Response getPortingOrder()

Retrieves the details of an existing porting order.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PortingOrderApi(configuration);

let body:.PortingOrderApiGetPortingOrderRequest = {
  // string | Porting Order id
  id: "id_example",
  // boolean | Include the first 50 phone number objects in the results (optional)
  includePhoneNumbers: true,
};

apiInstance.getPortingOrder(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Porting Order id | defaults to undefined
 **includePhoneNumbers** | [**boolean**] | Include the first 50 phone number objects in the results | (optional) defaults to true


### Return type

**GetPortingOrder200Response**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getPortingOrderLOATemplate**
> HttpFile getPortingOrderLOATemplate()

Download a porting order loa template

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PortingOrderApi(configuration);

let body:.PortingOrderApiGetPortingOrderLOATemplateRequest = {
  // string | Porting Order id
  id: "id_example",
};

apiInstance.getPortingOrderLOATemplate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Porting Order id | defaults to undefined


### Return type

**HttpFile**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/pdf


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getPortingOrderSubRequest**
> GetPortingOrderSubRequest200Response getPortingOrderSubRequest()

Retrieve the associated V1 sub_request_id and port_request_id

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PortingOrderApi(configuration);

let body:.PortingOrderApiGetPortingOrderSubRequestRequest = {
  // string | Porting Order id
  id: "id_example",
};

apiInstance.getPortingOrderSubRequest(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Porting Order id | defaults to undefined


### Return type

**GetPortingOrderSubRequest200Response**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**401** | Unauthorized |  -  |
**404** | Porting Order not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getPortingOrdersActivationJob**
> ActivatePortingOrder202Response getPortingOrdersActivationJob()

Returns a porting activation job.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PortingOrderApi(configuration);

let body:.PortingOrderApiGetPortingOrdersActivationJobRequest = {
  // string | Porting Order id
  id: "id_example",
  // string | Activation Job Identifier
  activationJobId: "activationJobId_example",
};

apiInstance.getPortingOrdersActivationJob(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Porting Order id | defaults to undefined
 **activationJobId** | [**string**] | Activation Job Identifier | defaults to undefined


### Return type

**ActivatePortingOrder202Response**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**401** | Unauthorized |  -  |
**422** | Unprocessable entity. Check message field in response for details. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listAllowedFocWindows**
> ListAllowedFocWindows200Response listAllowedFocWindows()

Returns a list of allowed FOC dates for a porting order.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PortingOrderApi(configuration);

let body:.PortingOrderApiListAllowedFocWindowsRequest = {
  // string | Porting Order id
  id: "id_example",
};

apiInstance.listAllowedFocWindows(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Porting Order id | defaults to undefined


### Return type

**ListAllowedFocWindows200Response**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listPortingOrderDocuments**
> ListPortingOrderDocuments200Response listPortingOrderDocuments()

Returns a list of all documents associated with a porting order.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PortingOrderApi(configuration);

let body:.PortingOrderApiListPortingOrderDocumentsRequest = {
  // string | Porting Order id
  id: "id_example",
  // number | The page number to load (optional)
  pageNumber: 1,
  // number | The size of the page (optional)
  pageSize: 20,
};

apiInstance.listPortingOrderDocuments(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Porting Order id | defaults to undefined
 **pageNumber** | [**number**] | The page number to load | (optional) defaults to 1
 **pageSize** | [**number**] | The size of the page | (optional) defaults to 20


### Return type

**ListPortingOrderDocuments200Response**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**401** | Unauthorized |  -  |
**422** | Unprocessable entity. Check message field in response for details. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listPortingOrderRequirements**
> ListPortingOrderRequirements200Response listPortingOrderRequirements()

Returns a list of all requirements based on country/number type for this porting order.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PortingOrderApi(configuration);

let body:.PortingOrderApiListPortingOrderRequirementsRequest = {
  // string | Porting Order id
  id: "id_example",
  // number | The page number to load (optional)
  pageNumber: 1,
  // number | The size of the page (optional)
  pageSize: 20,
};

apiInstance.listPortingOrderRequirements(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Porting Order id | defaults to undefined
 **pageNumber** | [**number**] | The page number to load | (optional) defaults to 1
 **pageSize** | [**number**] | The size of the page | (optional) defaults to 20


### Return type

**ListPortingOrderRequirements200Response**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**401** | Unauthorized |  -  |
**422** | Unprocessable entity. Check message field in response for details. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listPortingOrders**
> ListPortingOrders200Response listPortingOrders()

Returns a list of your porting order.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PortingOrderApi(configuration);

let body:.PortingOrderApiListPortingOrdersRequest = {
  // number | The page number to load (optional)
  pageNumber: 1,
  // number | The size of the page (optional)
  pageSize: 20,
  // boolean | Include the first 50 phone number objects in the results (optional)
  includePhoneNumbers: true,
  // 'draft' | 'in-process' | 'submitted' | 'exception' | 'foc-date-confirmed' | 'cancel-pending' | 'ported' | 'cancelled' | Filter results by status (optional)
  filterStatus: "in-process",
  // 'draft' | 'in-process' | 'submitted' | 'exception' | 'foc-date-confirmed' | 'cancel-pending' | 'ported' | 'cancelled' | Filter porting orders by multiple statuses (optional)
  filterStatusIn: "in-process",
  // string | Filter results by customer_reference (optional)
  filterCustomerReference: "123abc",
  // string | Filter results by parent_support_key (optional)
  filterParentSupportKey: "123abc",
  // string | Filter results by country ISO 3166-1 alpha-2 code (optional)
  filterPhoneNumbersCountryCode: "US",
  // string | Filter results by old service provider (optional)
  filterPhoneNumbersCarrierName: "Telnyx",
  // PortingOrderType | Filter results by porting order type (optional)
  filterMiscType: "full",
  // string | Filter results by person or company name (optional)
  filterEndUserAdminEntityName: "Porter McPortersen",
  // string | Filter results by authorized person (optional)
  filterEndUserAdminAuthPersonName: "Admin McPortersen",
  // boolean | Filter results by fast port eligible (optional)
  filterActivationSettingsFastPortEligible: false,
  // string | Filter results by foc date later than this value (optional)
  filterActivationSettingsFocDatetimeRequestedGt: "2021-03-25T10:00:00.000Z",
  // string | Filter results by foc date earlier than this value (optional)
  filterActivationSettingsFocDatetimeRequestedLt: "2021-03-25T10:00:00.000Z",
  // string | Filter results by full or partial phone_number (optional)
  filterPhoneNumbersPhoneNumberContains: "+13038675309",
  // 'created_at' | '-created_at' | 'activation_settings.foc_datetime_requested' | '-activation_settings.foc_datetime_requested' | Specifies the sort order for results. If not given, results are sorted by created_at in descending order. (optional)
  sort: "created_at",
};

apiInstance.listPortingOrders(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pageNumber** | [**number**] | The page number to load | (optional) defaults to 1
 **pageSize** | [**number**] | The size of the page | (optional) defaults to 20
 **includePhoneNumbers** | [**boolean**] | Include the first 50 phone number objects in the results | (optional) defaults to true
 **filterStatus** | [**&#39;draft&#39; | &#39;in-process&#39; | &#39;submitted&#39; | &#39;exception&#39; | &#39;foc-date-confirmed&#39; | &#39;cancel-pending&#39; | &#39;ported&#39; | &#39;cancelled&#39;**]**Array<&#39;draft&#39; &#124; &#39;in-process&#39; &#124; &#39;submitted&#39; &#124; &#39;exception&#39; &#124; &#39;foc-date-confirmed&#39; &#124; &#39;cancel-pending&#39; &#124; &#39;ported&#39; &#124; &#39;cancelled&#39;>** | Filter results by status | (optional) defaults to undefined
 **filterStatusIn** | [**&#39;draft&#39; | &#39;in-process&#39; | &#39;submitted&#39; | &#39;exception&#39; | &#39;foc-date-confirmed&#39; | &#39;cancel-pending&#39; | &#39;ported&#39; | &#39;cancelled&#39;**]**Array<&#39;draft&#39; &#124; &#39;in-process&#39; &#124; &#39;submitted&#39; &#124; &#39;exception&#39; &#124; &#39;foc-date-confirmed&#39; &#124; &#39;cancel-pending&#39; &#124; &#39;ported&#39; &#124; &#39;cancelled&#39;>** | Filter porting orders by multiple statuses | (optional) defaults to undefined
 **filterCustomerReference** | [**string**] | Filter results by customer_reference | (optional) defaults to undefined
 **filterParentSupportKey** | [**string**] | Filter results by parent_support_key | (optional) defaults to undefined
 **filterPhoneNumbersCountryCode** | [**string**] | Filter results by country ISO 3166-1 alpha-2 code | (optional) defaults to undefined
 **filterPhoneNumbersCarrierName** | [**string**] | Filter results by old service provider | (optional) defaults to undefined
 **filterMiscType** | **PortingOrderType** | Filter results by porting order type | (optional) defaults to undefined
 **filterEndUserAdminEntityName** | [**string**] | Filter results by person or company name | (optional) defaults to undefined
 **filterEndUserAdminAuthPersonName** | [**string**] | Filter results by authorized person | (optional) defaults to undefined
 **filterActivationSettingsFastPortEligible** | [**boolean**] | Filter results by fast port eligible | (optional) defaults to undefined
 **filterActivationSettingsFocDatetimeRequestedGt** | [**string**] | Filter results by foc date later than this value | (optional) defaults to undefined
 **filterActivationSettingsFocDatetimeRequestedLt** | [**string**] | Filter results by foc date earlier than this value | (optional) defaults to undefined
 **filterPhoneNumbersPhoneNumberContains** | [**string**] | Filter results by full or partial phone_number | (optional) defaults to undefined
 **sort** | [**&#39;created_at&#39; | &#39;-created_at&#39; | &#39;activation_settings.foc_datetime_requested&#39; | &#39;-activation_settings.foc_datetime_requested&#39;**]**Array<&#39;created_at&#39; &#124; &#39;-created_at&#39; &#124; &#39;activation_settings.foc_datetime_requested&#39; &#124; &#39;-activation_settings.foc_datetime_requested&#39;>** | Specifies the sort order for results. If not given, results are sorted by created_at in descending order. | (optional) defaults to undefined


### Return type

**ListPortingOrders200Response**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**401** | Unauthorized |  -  |
**422** | Unprocessable entity. Check message field in response for details. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listPortingOrdersActivationJobs**
> ListPortingOrdersActivationJobs200Response listPortingOrdersActivationJobs()

Returns a list of your porting activation jobs.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PortingOrderApi(configuration);

let body:.PortingOrderApiListPortingOrdersActivationJobsRequest = {
  // string | Porting Order id
  id: "id_example",
  // number | The page number to load (optional)
  pageNumber: 1,
  // number | The size of the page (optional)
  pageSize: 20,
};

apiInstance.listPortingOrdersActivationJobs(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Porting Order id | defaults to undefined
 **pageNumber** | [**number**] | The page number to load | (optional) defaults to 1
 **pageSize** | [**number**] | The size of the page | (optional) defaults to 20


### Return type

**ListPortingOrdersActivationJobs200Response**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**401** | Unauthorized |  -  |
**422** | Unprocessable entity. Check message field in response for details. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listPortingOrdersComments**
> ListPortingOrdersComments200Response listPortingOrdersComments()

Returns a list of all comments of a porting order.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PortingOrderApi(configuration);

let body:.PortingOrderApiListPortingOrdersCommentsRequest = {
  // string | Porting Order id
  id: "id_example",
  // number | The page number to load (optional)
  pageNumber: 1,
  // number | The size of the page (optional)
  pageSize: 20,
};

apiInstance.listPortingOrdersComments(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Porting Order id | defaults to undefined
 **pageNumber** | [**number**] | The page number to load | (optional) defaults to 1
 **pageSize** | [**number**] | The size of the page | (optional) defaults to 20


### Return type

**ListPortingOrdersComments200Response**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**401** | Unauthorized |  -  |
**422** | Unprocessable entity. Check message field in response for details. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listPortingOrdersExceptionTypes**
> ListPortingOrdersExceptionTypes200Response listPortingOrdersExceptionTypes()

Returns a list of all possible exception types for a porting order.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PortingOrderApi(configuration);

let body:any = {};

apiInstance.listPortingOrdersExceptionTypes(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**ListPortingOrdersExceptionTypes200Response**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**401** | Unauthorized |  -  |
**422** | Unprocessable entity. Check message field in response for details. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listPortingPhoneNumbers**
> ListPortingPhoneNumbers200Response listPortingPhoneNumbers()

Returns a list of your porting phone numbers.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PortingOrderApi(configuration);

let body:.PortingOrderApiListPortingPhoneNumbersRequest = {
  // number | The page number to load (optional)
  pageNumber: 1,
  // number | The size of the page (optional)
  pageSize: 20,
  // string | Filter results by porting order id (optional)
  filterPortingOrderId: "f3575e15-32ce-400e-a4c0-dd78800c20b0",
  // Array<string> | Filter results by a list of porting order ids (optional)
  filterPortingOrderIdIn: [
    "f3575e15-32ce-400e-a4c0-dd78800c20b0",
  ],
  // string | Filter results by support key (optional)
  filterSupportKeyEq: "sr_a12345",
  // Array<string> | Filter results by a list of support keys (optional)
  filterSupportKeyIn: [
    "sr_a12345",
  ],
  // string | Filter results by phone number (optional)
  filterPhoneNumber: "+12003151212",
  // Array<string> | Filter results by a list of phone numbers (optional)
  filterPhoneNumberIn: [
    "+12003151212",
  ],
  // 'draft' | 'in-process' | 'submitted' | 'exception' | 'foc-date-confirmed' | 'cancel-pending' | 'ported' | 'cancelled' | Filter results by porting order status (optional)
  filterPortingOrderStatus: "in-process",
  // PortingOrderActivationStatus | Filter results by activation status (optional)
  filterActivationStatus: "Active",
  // PortabilityStatus | Filter results by portability status (optional)
  filterPortabilityStatus: "confirmed",
};

apiInstance.listPortingPhoneNumbers(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pageNumber** | [**number**] | The page number to load | (optional) defaults to 1
 **pageSize** | [**number**] | The size of the page | (optional) defaults to 20
 **filterPortingOrderId** | [**string**] | Filter results by porting order id | (optional) defaults to undefined
 **filterPortingOrderIdIn** | **Array&lt;string&gt;** | Filter results by a list of porting order ids | (optional) defaults to undefined
 **filterSupportKeyEq** | [**string**] | Filter results by support key | (optional) defaults to undefined
 **filterSupportKeyIn** | **Array&lt;string&gt;** | Filter results by a list of support keys | (optional) defaults to undefined
 **filterPhoneNumber** | [**string**] | Filter results by phone number | (optional) defaults to undefined
 **filterPhoneNumberIn** | **Array&lt;string&gt;** | Filter results by a list of phone numbers | (optional) defaults to undefined
 **filterPortingOrderStatus** | [**&#39;draft&#39; | &#39;in-process&#39; | &#39;submitted&#39; | &#39;exception&#39; | &#39;foc-date-confirmed&#39; | &#39;cancel-pending&#39; | &#39;ported&#39; | &#39;cancelled&#39;**]**Array<&#39;draft&#39; &#124; &#39;in-process&#39; &#124; &#39;submitted&#39; &#124; &#39;exception&#39; &#124; &#39;foc-date-confirmed&#39; &#124; &#39;cancel-pending&#39; &#124; &#39;ported&#39; &#124; &#39;cancelled&#39;>** | Filter results by porting order status | (optional) defaults to undefined
 **filterActivationStatus** | **PortingOrderActivationStatus** | Filter results by activation status | (optional) defaults to undefined
 **filterPortabilityStatus** | **PortabilityStatus** | Filter results by portability status | (optional) defaults to undefined


### Return type

**ListPortingPhoneNumbers200Response**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/csv


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**401** | Unauthorized |  -  |
**422** | Unprocessable entity. Check message field in response for details. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updatePortingOrder**
> UpdatePortingOrder200Response updatePortingOrder(updatePortingOrder)

Edits the details of an existing porting order.  Any or all of a porting order’s attributes may be included in the resource object included in a PATCH request.  If a request does not include all of the attributes for a resource, the system will interpret the missing attributes as if they were included with their current values. To explicitly set something to null, it must be included in the request with a null value.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PortingOrderApi(configuration);

let body:.PortingOrderApiUpdatePortingOrderRequest = {
  // string | Porting Order id
  id: "id_example",
  // UpdatePortingOrder
  updatePortingOrder: {
    misc: {
      type: "full",
      remainingNumbersAction: "disconnect",
      newBillingPhoneNumber: "newBillingPhoneNumber_example",
    },
    endUser: {
      admin: {
        entityName: "Porter McPortersen",
        authPersonName: "Porter McPortersen II",
        billingPhoneNumber: "13035551234",
        accountNumber: "123abc",
        taxIdentifier: "1234abcd",
        pinPasscode: "1234",
        businessIdentifier: "abc123",
      },
      location: {
        streetAddress: "311 W. Superior St",
        extendedAddress: "Suite 504",
        locality: "Chicago",
        administrativeArea: "IL",
        postalCode: "60654",
        countryCode: "US",
      },
    },
    documents: {
      loa: "64ffb720-04c7-455b-92d6-20fcca92e935",
      invoice: "ce74b771-d23d-4960-81ec-8741b3862146",
    },
    activationSettings: {
      focDatetimeRequested: new Date('2021-03-19T10:07:15.527Z'),
    },
    phoneNumberConfiguration: {
      connectionId: "f1486bae-f067-460c-ad43-73a92848f902",
      messagingProfileId: "f1486bae-f067-460c-ad43-73a92848f901",
      emergencyAddressId: "f1486bae-f067-460c-ad43-73a92848f902",
      tags: ["abc","123"],
    },
    requirements: [
      {
        fieldValue: "9787fb5f-cbe5-4de4-b765-3303774ee9fe",
        requirementTypeId: "59b0762a-b274-4f76-ac32-4d5cf0272e66",
      },
    ],
    userFeedback: {
      userRating: 5,
      userComment: "I loved my experience porting numbers with Telnyx",
    },
    webhookUrl: "webhookUrl_example",
    customerReference: "customerReference_example",
  },
};

apiInstance.updatePortingOrder(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updatePortingOrder** | **UpdatePortingOrder**|  |
 **id** | [**string**] | Porting Order id | defaults to undefined


### Return type

**UpdatePortingOrder200Response**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**401** | Unauthorized |  -  |
**422** | Unprocessable entity. Check message field in response for details. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **uploadPortingOrderDocuments**
> UploadPortingOrderDocuments201Response uploadPortingOrderDocuments(uploadPortingOrderDocumentsRequest)

Associate a list of documents with a porting order.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PortingOrderApi(configuration);

let body:.PortingOrderApiUploadPortingOrderDocumentsRequest = {
  // string | Porting Order id
  id: "id_example",
  // UploadPortingOrderDocumentsRequest
  uploadPortingOrderDocumentsRequest: {
    documents: [
      {
        documentType: "loa",
        documentId: "5f940c35-ef28-4408-bb95-af73b047d589",
      },
    ],
  },
};

apiInstance.uploadPortingOrderDocuments(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uploadPortingOrderDocumentsRequest** | **UploadPortingOrderDocumentsRequest**|  |
 **id** | [**string**] | Porting Order id | defaults to undefined


### Return type

**UploadPortingOrderDocuments201Response**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successful response |  -  |
**401** | Unauthorized |  -  |
**422** | Unprocessable entity. Check message field in response for details. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


