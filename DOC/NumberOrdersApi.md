# .NumberOrdersApi

All URIs are relative to *https://api.telnyx.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createComment**](NumberOrdersApi.md#createComment) | **POST** /comments | Create a comment
[**createNumberOrder**](NumberOrdersApi.md#createNumberOrder) | **POST** /number_orders | Create a number order
[**listComments**](NumberOrdersApi.md#listComments) | **GET** /comments | Retrieve all comments
[**listNumberOrders**](NumberOrdersApi.md#listNumberOrders) | **GET** /number_orders | List number orders
[**listRegulartoryRequirements**](NumberOrdersApi.md#listRegulartoryRequirements) | **GET** /phone_numbers_regulatory_requirements | Retrieve regulartory requirements
[**listSubNumberOrders**](NumberOrdersApi.md#listSubNumberOrders) | **GET** /sub_number_orders | List sub number orders
[**markCommentRead**](NumberOrdersApi.md#markCommentRead) | **PATCH** /comments/{id}/read | Mark a comment as read
[**retrieveComment**](NumberOrdersApi.md#retrieveComment) | **GET** /comments/{id} | Retrieve a comment
[**retrieveNumberOrder**](NumberOrdersApi.md#retrieveNumberOrder) | **GET** /number_orders/{number_order_id} | Retrieve a number order
[**retrieveNumberOrderPhoneNumber**](NumberOrdersApi.md#retrieveNumberOrderPhoneNumber) | **GET** /number_order_phone_numbers/{number_order_phone_number_id} | Retrieve a number order phone number.
[**retrieveNumberOrderPhoneNumbers**](NumberOrdersApi.md#retrieveNumberOrderPhoneNumbers) | **GET** /number_order_phone_numbers | Retrieve a list of phone numbers associated to orders
[**retrieveSubNumberOrder**](NumberOrdersApi.md#retrieveSubNumberOrder) | **GET** /sub_number_orders/{sub_number_order_id} | Retrieve a sub number order
[**updateNumberOrder**](NumberOrdersApi.md#updateNumberOrder) | **PATCH** /number_orders/{number_order_id} | Update a number order
[**updateNumberOrderPhoneNumber**](NumberOrdersApi.md#updateNumberOrderPhoneNumber) | **PATCH** /number_order_phone_numbers/{number_order_phone_number_id} | Update a number order phone number.
[**updateSubNumberOrder**](NumberOrdersApi.md#updateSubNumberOrder) | **PATCH** /sub_number_orders/{sub_number_order_id} | Update a sub number order


# **createComment**
> CreateComment200Response createComment(comment)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .NumberOrdersApi(configuration);

let body:.NumberOrdersApiCreateCommentRequest = {
  // Comment
  comment: null,
};

apiInstance.createComment(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **comment** | **Comment**|  |


### Return type

**CreateComment200Response**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A Comment Response |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createNumberOrder**
> NumberOrderResponse createNumberOrder(createNumberOrderRequest)

Creates a phone number order.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .NumberOrdersApi(configuration);

let body:.NumberOrdersApiCreateNumberOrderRequest = {
  // CreateNumberOrderRequest
  createNumberOrderRequest: null,
};

apiInstance.createNumberOrder(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createNumberOrderRequest** | **CreateNumberOrderRequest**|  |


### Return type

**NumberOrderResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response with details about a number order. |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listComments**
> ListComments200Response listComments()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .NumberOrdersApi(configuration);

let body:.NumberOrdersApiListCommentsRequest = {
  // string | Record type that the comment relates to i.e number_order, sub_number_order or number_order_phone_number
  filterCommentRecordType: "sub_number_order",
  // string | ID of the record the comments relate to
  filterCommentRecordId: "8ffb3622-7c6b-4ccc-b65f-7a3dc0099576",
};

apiInstance.listComments(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filterCommentRecordType** | [**string**] | Record type that the comment relates to i.e number_order, sub_number_order or number_order_phone_number | defaults to undefined
 **filterCommentRecordId** | [**string**] | ID of the record the comments relate to | defaults to undefined


### Return type

**ListComments200Response**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | An array of Comment Responses |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listNumberOrders**
> ListNumberOrdersResponse listNumberOrders()

Get a paginated list of number orders.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .NumberOrdersApi(configuration);

let body:.NumberOrdersApiListNumberOrdersRequest = {
  // string | Filter number orders by status. (optional)
  filterStatus: "filter[status]_example",
  // string | Filter number orders later than this value. (optional)
  filterCreatedAtGt: "filter[created_at][gt]_example",
  // string | Filter number orders earlier than this value. (optional)
  filterCreatedAtLt: "filter[created_at][lt]_example",
  // string | Filter number order with this amount of numbers (optional)
  filterPhoneNumbersCount: "filter[phone_numbers_count]_example",
  // string | Filter number orders via the customer reference set. (optional)
  filterCustomerReference: "filter[customer_reference]_example",
  // boolean | Filter number orders by requirements met. (optional)
  filterRequirementsMet: true,
  // number | The page number to load (optional)
  pageNumber: 1,
  // number | The size of the page (optional)
  pageSize: 20,
};

apiInstance.listNumberOrders(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filterStatus** | [**string**] | Filter number orders by status. | (optional) defaults to undefined
 **filterCreatedAtGt** | [**string**] | Filter number orders later than this value. | (optional) defaults to undefined
 **filterCreatedAtLt** | [**string**] | Filter number orders earlier than this value. | (optional) defaults to undefined
 **filterPhoneNumbersCount** | [**string**] | Filter number order with this amount of numbers | (optional) defaults to undefined
 **filterCustomerReference** | [**string**] | Filter number orders via the customer reference set. | (optional) defaults to undefined
 **filterRequirementsMet** | [**boolean**] | Filter number orders by requirements met. | (optional) defaults to undefined
 **pageNumber** | [**number**] | The page number to load | (optional) defaults to 1
 **pageSize** | [**number**] | The size of the page | (optional) defaults to 20


### Return type

**ListNumberOrdersResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response with a list of number orders. |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listRegulartoryRequirements**
> ListRegulartoryRequirements200Response listRegulartoryRequirements()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .NumberOrdersApi(configuration);

let body:.NumberOrdersApiListRegulartoryRequirementsRequest = {
  // string | Record type phone number/ phone numbers
  filterPhoneNumber: "+41215470622,+41215470633",
};

apiInstance.listRegulartoryRequirements(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filterPhoneNumber** | [**string**] | Record type phone number/ phone numbers | defaults to undefined


### Return type

**ListRegulartoryRequirements200Response**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | An array of Regulatory Requiremenst Responses |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listSubNumberOrders**
> ListSubNumberOrdersResponse listSubNumberOrders()

Get a paginated list of sub number orders.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .NumberOrdersApi(configuration);

let body:.NumberOrdersApiListSubNumberOrdersRequest = {
  // string | User ID of the user who owns the sub number order (optional)
  filterUserId: "d70873cd-7c98-401a-81b6-b1ae08246995",
  // string | ID of the number order the sub number order belongs to (optional)
  filterOrderRequestId: "12ade33a-21c0-473b-b055-b3c836e1c293",
  // string | ISO alpha-2 country code. (optional)
  filterCountryCode: "US",
  // string | Phone Number Type (optional)
  filterPhoneNumberType: "local",
  // number | Amount of numbers in the sub number order (optional)
  filterPhoneNumbersCount: 1,
};

apiInstance.listSubNumberOrders(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filterUserId** | [**string**] | User ID of the user who owns the sub number order | (optional) defaults to undefined
 **filterOrderRequestId** | [**string**] | ID of the number order the sub number order belongs to | (optional) defaults to undefined
 **filterCountryCode** | [**string**] | ISO alpha-2 country code. | (optional) defaults to undefined
 **filterPhoneNumberType** | [**string**] | Phone Number Type | (optional) defaults to undefined
 **filterPhoneNumbersCount** | [**number**] | Amount of numbers in the sub number order | (optional) defaults to undefined


### Return type

**ListSubNumberOrdersResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response with a list of sub number orders. |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **markCommentRead**
> MarkCommentRead200Response markCommentRead()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .NumberOrdersApi(configuration);

let body:.NumberOrdersApiMarkCommentReadRequest = {
  // string | The comment ID.
  id: "id_example",
};

apiInstance.markCommentRead(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | The comment ID. | defaults to undefined


### Return type

**MarkCommentRead200Response**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A Comment Response |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **retrieveComment**
> CreateComment200Response retrieveComment()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .NumberOrdersApi(configuration);

let body:.NumberOrdersApiRetrieveCommentRequest = {
  // string | The comment ID.
  id: "id_example",
};

apiInstance.retrieveComment(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | The comment ID. | defaults to undefined


### Return type

**CreateComment200Response**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A Comment Response |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **retrieveNumberOrder**
> NumberOrderResponse retrieveNumberOrder()

Get an existing phone number order.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .NumberOrdersApi(configuration);

let body:.NumberOrdersApiRetrieveNumberOrderRequest = {
  // string | The number order ID.
  numberOrderId: "number_order_id_example",
};

apiInstance.retrieveNumberOrder(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **numberOrderId** | [**string**] | The number order ID. | defaults to undefined


### Return type

**NumberOrderResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response with details about a number order. |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **retrieveNumberOrderPhoneNumber**
> NumberOrderPhoneNumberResponse retrieveNumberOrderPhoneNumber()

Get an existing number order phone number.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .NumberOrdersApi(configuration);

let body:.NumberOrdersApiRetrieveNumberOrderPhoneNumberRequest = {
  // string | The number order phone number ID.
  numberOrderPhoneNumberId: "number_order_phone_number_id_example",
};

apiInstance.retrieveNumberOrderPhoneNumber(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **numberOrderPhoneNumberId** | [**string**] | The number order phone number ID. | defaults to undefined


### Return type

**NumberOrderPhoneNumberResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response with details about a number order phone number. |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **retrieveNumberOrderPhoneNumbers**
> ListNumberOrderPhoneNumbersResponse retrieveNumberOrderPhoneNumbers()

Get a list of phone numbers associated to orders.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .NumberOrdersApi(configuration);

let body:any = {};

apiInstance.retrieveNumberOrderPhoneNumbers(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**ListNumberOrderPhoneNumbersResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response with a list of number order phone numbers. |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **retrieveSubNumberOrder**
> SubNumberOrderResponse retrieveSubNumberOrder()

Get an existing sub number order.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .NumberOrdersApi(configuration);

let body:.NumberOrdersApiRetrieveSubNumberOrderRequest = {
  // string | The sub number order ID.
  subNumberOrderId: "sub_number_order_id_example",
  // boolean | Include the first 50 phone number objects in the results (optional)
  filterIncludePhoneNumbers: false,
};

apiInstance.retrieveSubNumberOrder(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subNumberOrderId** | [**string**] | The sub number order ID. | defaults to undefined
 **filterIncludePhoneNumbers** | [**boolean**] | Include the first 50 phone number objects in the results | (optional) defaults to false


### Return type

**SubNumberOrderResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response with details about a sub number order. |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateNumberOrder**
> NumberOrderResponse updateNumberOrder(updateNumberOrderRequest)

Updates a phone number order.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .NumberOrdersApi(configuration);

let body:.NumberOrdersApiUpdateNumberOrderRequest = {
  // string | The number order ID.
  numberOrderId: "number_order_id_example",
  // UpdateNumberOrderRequest
  updateNumberOrderRequest: null,
};

apiInstance.updateNumberOrder(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateNumberOrderRequest** | **UpdateNumberOrderRequest**|  |
 **numberOrderId** | [**string**] | The number order ID. | defaults to undefined


### Return type

**NumberOrderResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response with details about a number order. |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateNumberOrderPhoneNumber**
> NumberOrderPhoneNumberResponse updateNumberOrderPhoneNumber(updateNumberOrderPhoneNumberRequest)

Updates a number order phone number.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .NumberOrdersApi(configuration);

let body:.NumberOrdersApiUpdateNumberOrderPhoneNumberRequest = {
  // string | The number order phone number ID.
  numberOrderPhoneNumberId: "number_order_phone_number_id_example",
  // UpdateNumberOrderPhoneNumberRequest
  updateNumberOrderPhoneNumberRequest: null,
};

apiInstance.updateNumberOrderPhoneNumber(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateNumberOrderPhoneNumberRequest** | **UpdateNumberOrderPhoneNumberRequest**|  |
 **numberOrderPhoneNumberId** | [**string**] | The number order phone number ID. | defaults to undefined


### Return type

**NumberOrderPhoneNumberResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response with details about a number order phone number. |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateSubNumberOrder**
> SubNumberOrderResponse updateSubNumberOrder(updateSubNumberOrderRequest)

Updates a sub number order.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .NumberOrdersApi(configuration);

let body:.NumberOrdersApiUpdateSubNumberOrderRequest = {
  // string | The sub number order ID.
  subNumberOrderId: "sub_number_order_id_example",
  // UpdateSubNumberOrderRequest
  updateSubNumberOrderRequest: null,
};

apiInstance.updateSubNumberOrder(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateSubNumberOrderRequest** | **UpdateSubNumberOrderRequest**|  |
 **subNumberOrderId** | [**string**] | The sub number order ID. | defaults to undefined


### Return type

**SubNumberOrderResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response with details about a sub number order. |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


