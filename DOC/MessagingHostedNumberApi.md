# .MessagingHostedNumberApi

All URIs are relative to *https://api.telnyx.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createMessagingHostedNumberOrder**](MessagingHostedNumberApi.md#createMessagingHostedNumberOrder) | **POST** /messaging_hosted_number_orders | Create a messaging hosted number order
[**deleteMessagingHostedNumber**](MessagingHostedNumberApi.md#deleteMessagingHostedNumber) | **DELETE** /messaging_hosted_numbers/{id} | Delete a messaging hosted number
[**listMessagingHostedNumberOrder**](MessagingHostedNumberApi.md#listMessagingHostedNumberOrder) | **GET** /messaging_hosted_number_orders | List messaging hosted number orders
[**retrieveMessagingHostedNumberOrder**](MessagingHostedNumberApi.md#retrieveMessagingHostedNumberOrder) | **GET** /messaging_hosted_number_orders/{id} | Retrieve a messaging hosted number order
[**uploadFileMessagingHostedNumberOrder**](MessagingHostedNumberApi.md#uploadFileMessagingHostedNumberOrder) | **POST** /messaging_hosted_number_orders/{id}/actions/file_upload | Upload file required for a messaging hosted number order


# **createMessagingHostedNumberOrder**
> RetrieveMessagingHostedNumberOrderResponse createMessagingHostedNumberOrder()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MessagingHostedNumberApi(configuration);

let body:.MessagingHostedNumberApiCreateMessagingHostedNumberOrderRequest = {
  // CreateMessagingHostedNumberOrderRequest | Message payload (optional)
  createMessagingHostedNumberOrderRequest: {
    phoneNumbers: [
      "phoneNumbers_example",
    ],
    messagingProfileId: "messagingProfileId_example",
  },
};

apiInstance.createMessagingHostedNumberOrder(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createMessagingHostedNumberOrderRequest** | **CreateMessagingHostedNumberOrderRequest**| Message payload |


### Return type

**RetrieveMessagingHostedNumberOrderResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response with details about a messaging hosted number order. |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteMessagingHostedNumber**
> RetrieveMessagingHostedNumberResponse deleteMessagingHostedNumber()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MessagingHostedNumberApi(configuration);

let body:.MessagingHostedNumberApiDeleteMessagingHostedNumberRequest = {
  // string | Identifies the type of resource.
  id: "id_example",
};

apiInstance.deleteMessagingHostedNumber(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Identifies the type of resource. | defaults to undefined


### Return type

**RetrieveMessagingHostedNumberResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response with details about a messaging hosted number. |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listMessagingHostedNumberOrder**
> ListMessagingHostedNumberOrderResponse listMessagingHostedNumberOrder()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MessagingHostedNumberApi(configuration);

let body:.MessagingHostedNumberApiListMessagingHostedNumberOrderRequest = {
  // number | The page number to load (optional)
  pageNumber: 1,
  // number | The size of the page (optional)
  pageSize: 20,
};

apiInstance.listMessagingHostedNumberOrder(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pageNumber** | [**number**] | The page number to load | (optional) defaults to 1
 **pageSize** | [**number**] | The size of the page | (optional) defaults to 20


### Return type

**ListMessagingHostedNumberOrderResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response with a list of messaging hosted number orders. |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **retrieveMessagingHostedNumberOrder**
> RetrieveMessagingHostedNumberOrderResponse retrieveMessagingHostedNumberOrder()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MessagingHostedNumberApi(configuration);

let body:.MessagingHostedNumberApiRetrieveMessagingHostedNumberOrderRequest = {
  // string | Identifies the type of resource.
  id: "id_example",
};

apiInstance.retrieveMessagingHostedNumberOrder(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Identifies the type of resource. | defaults to undefined


### Return type

**RetrieveMessagingHostedNumberOrderResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response with details about a messaging hosted number order. |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **uploadFileMessagingHostedNumberOrder**
> RetrieveMessagingHostedNumberOrderResponse uploadFileMessagingHostedNumberOrder()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MessagingHostedNumberApi(configuration);

let body:.MessagingHostedNumberApiUploadFileMessagingHostedNumberOrderRequest = {
  // string | Identifies the type of resource.
  id: "id_example",
  // HttpFile | Must be a signed LOA for the numbers in the order in PDF format. (optional)
  loa: { data: Buffer.from(fs.readFileSync('/path/to/file', 'utf-8')), name: '/path/to/file' },
  // HttpFile | Must be the last month\\\'s bill with proof of ownership of all of the numbers in the order in PDF format. (optional)
  bill: { data: Buffer.from(fs.readFileSync('/path/to/file', 'utf-8')), name: '/path/to/file' },
};

apiInstance.uploadFileMessagingHostedNumberOrder(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Identifies the type of resource. | defaults to undefined
 **loa** | [**HttpFile**] | Must be a signed LOA for the numbers in the order in PDF format. | (optional) defaults to undefined
 **bill** | [**HttpFile**] | Must be the last month\\\&#39;s bill with proof of ownership of all of the numbers in the order in PDF format. | (optional) defaults to undefined


### Return type

**RetrieveMessagingHostedNumberOrderResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response with details about a messaging hosted number order. |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


