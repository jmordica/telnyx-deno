# .MessagesApi

All URIs are relative to *https://api.telnyx.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createLongCodeMessage**](MessagesApi.md#createLongCodeMessage) | **POST** /messages/long_code | Send a long code message
[**createMessage**](MessagesApi.md#createMessage) | **POST** /messages | Send a message
[**createNumberPoolMessage**](MessagesApi.md#createNumberPoolMessage) | **POST** /messages/number_pool | Send a message using number pool
[**createShortCodeMessage**](MessagesApi.md#createShortCodeMessage) | **POST** /messages/short_code | Send a short code message
[**retrieveMessage**](MessagesApi.md#retrieveMessage) | **GET** /messages/{id} | Retrieve a message


# **createLongCodeMessage**
> MessageResponse createLongCodeMessage()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MessagesApi(configuration);

let body:.MessagesApiCreateLongCodeMessageRequest = {
  // CreateLongCodeMessageRequest | Message payload (optional)
  createLongCodeMessageRequest: {
    _from: "_from_example",
    to: "+E.164",
    text: "text_example",
    subject: "subject_example",
    mediaUrls: [
      "mediaUrls_example",
    ],
    webhookUrl: "webhookUrl_example",
    webhookFailoverUrl: "webhookFailoverUrl_example",
    useProfileWebhooks: true,
    type: "SMS",
    autoDetect: false,
  },
};

apiInstance.createLongCodeMessage(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createLongCodeMessageRequest** | **CreateLongCodeMessageRequest**| Message payload |


### Return type

**MessageResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response with details about a message. |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createMessage**
> MessageResponse createMessage()

Send a message with a Phone Number, Alphanumeric Sender ID, Short Code or Number Pool.  This endpoint allows you to send a message with any messaging resource. Current messaging resources include: long-code, short-code, number-pool, and alphanumeric-sender-id. 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MessagesApi(configuration);

let body:.MessagesApiCreateMessageRequest = {
  // CreateMessageRequest | Message payload (optional)
  createMessageRequest: {
    _from: "_from_example",
    messagingProfileId: "messagingProfileId_example",
    to: "+E.164",
    text: "text_example",
    subject: "subject_example",
    mediaUrls: [
      "mediaUrls_example",
    ],
    webhookUrl: "webhookUrl_example",
    webhookFailoverUrl: "webhookFailoverUrl_example",
    useProfileWebhooks: true,
    type: "SMS",
    autoDetect: false,
  },
};

apiInstance.createMessage(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createMessageRequest** | **CreateMessageRequest**| Message payload |


### Return type

**MessageResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response with details about a message. |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createNumberPoolMessage**
> MessageResponse createNumberPoolMessage()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MessagesApi(configuration);

let body:.MessagesApiCreateNumberPoolMessageRequest = {
  // CreateNumberPoolMessageRequest | Message payload (optional)
  createNumberPoolMessageRequest: {
    messagingProfileId: "messagingProfileId_example",
    to: "+E.164",
    text: "text_example",
    subject: "subject_example",
    mediaUrls: [
      "mediaUrls_example",
    ],
    webhookUrl: "webhookUrl_example",
    webhookFailoverUrl: "webhookFailoverUrl_example",
    useProfileWebhooks: true,
    type: "SMS",
    autoDetect: false,
  },
};

apiInstance.createNumberPoolMessage(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createNumberPoolMessageRequest** | **CreateNumberPoolMessageRequest**| Message payload |


### Return type

**MessageResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response with details about a message. |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createShortCodeMessage**
> MessageResponse createShortCodeMessage()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MessagesApi(configuration);

let body:.MessagesApiCreateShortCodeMessageRequest = {
  // CreateShortCodeMessageRequest | Message payload (optional)
  createShortCodeMessageRequest: {
    _from: "_from_example",
    to: "+E.164",
    text: "text_example",
    subject: "subject_example",
    mediaUrls: [
      "mediaUrls_example",
    ],
    webhookUrl: "webhookUrl_example",
    webhookFailoverUrl: "webhookFailoverUrl_example",
    useProfileWebhooks: true,
    type: "SMS",
    autoDetect: false,
  },
};

apiInstance.createShortCodeMessage(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createShortCodeMessageRequest** | **CreateShortCodeMessageRequest**| Message payload |


### Return type

**MessageResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response with details about a message. |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **retrieveMessage**
> MessageResponse retrieveMessage()

Note: This API endpoint can only retrieve messages that are no older than 10 days since their creation. If you require messages older than this, please generate an [MDR report.](https://developers.telnyx.com/docs/api/v1/reports/MDR-Reports)

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MessagesApi(configuration);

let body:.MessagesApiRetrieveMessageRequest = {
  // string | The id of the message
  id: "id_example",
};

apiInstance.retrieveMessage(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | The id of the message | defaults to undefined


### Return type

**MessageResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response with details about a message. |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


