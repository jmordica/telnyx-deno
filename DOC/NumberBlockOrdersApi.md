# .NumberBlockOrdersApi

All URIs are relative to *https://api.telnyx.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createNumberBlockOrder**](NumberBlockOrdersApi.md#createNumberBlockOrder) | **POST** /number_block_orders | Create a number block order
[**listNumberBlockOrders**](NumberBlockOrdersApi.md#listNumberBlockOrders) | **GET** /number_block_orders | List number block orders
[**retrieveNumberBlockOrder**](NumberBlockOrdersApi.md#retrieveNumberBlockOrder) | **GET** /number_block_orders/{number_block_order_id} | Retrieve a number block order


# **createNumberBlockOrder**
> NumberBlockOrderResponse createNumberBlockOrder(createNumberBlockOrderRequest)

Creates a phone number block order.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .NumberBlockOrdersApi(configuration);

let body:.NumberBlockOrdersApiCreateNumberBlockOrderRequest = {
  // CreateNumberBlockOrderRequest
  createNumberBlockOrderRequest: null,
};

apiInstance.createNumberBlockOrder(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createNumberBlockOrderRequest** | **CreateNumberBlockOrderRequest**|  |


### Return type

**NumberBlockOrderResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response with details about a number block order. |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listNumberBlockOrders**
> ListNumberBlockOrdersResponse listNumberBlockOrders()

Get a paginated list of number block orders.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .NumberBlockOrdersApi(configuration);

let body:.NumberBlockOrdersApiListNumberBlockOrdersRequest = {
  // string | Filter number block orders by status. (optional)
  filterStatus: "pending",
  // string | Filter number block orders later than this value. (optional)
  filterCreatedAtGt: "2018-01-01T00:00:00.000000Z",
  // string | Filter number block orders earlier than this value. (optional)
  filterCreatedAtLt: "2018-01-01T00:00:00.000000Z",
  // string | Filter number block  orders having these phone numbers. (optional)
  filterPhoneNumbersStartingNumber: "+19705555000",
  // number | The page number to load (optional)
  pageNumber: 1,
  // number | The size of the page (optional)
  pageSize: 20,
};

apiInstance.listNumberBlockOrders(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filterStatus** | [**string**] | Filter number block orders by status. | (optional) defaults to undefined
 **filterCreatedAtGt** | [**string**] | Filter number block orders later than this value. | (optional) defaults to undefined
 **filterCreatedAtLt** | [**string**] | Filter number block orders earlier than this value. | (optional) defaults to undefined
 **filterPhoneNumbersStartingNumber** | [**string**] | Filter number block  orders having these phone numbers. | (optional) defaults to undefined
 **pageNumber** | [**number**] | The page number to load | (optional) defaults to 1
 **pageSize** | [**number**] | The size of the page | (optional) defaults to 20


### Return type

**ListNumberBlockOrdersResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response with a list of number block orders. |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **retrieveNumberBlockOrder**
> NumberBlockOrderResponse retrieveNumberBlockOrder()

Get an existing phone number block order.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .NumberBlockOrdersApi(configuration);

let body:.NumberBlockOrdersApiRetrieveNumberBlockOrderRequest = {
  // string | The number block order ID.
  numberBlockOrderId: "number_block_order_id_example",
};

apiInstance.retrieveNumberBlockOrder(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **numberBlockOrderId** | [**string**] | The number block order ID. | defaults to undefined


### Return type

**NumberBlockOrderResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response with details about a number block order. |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


