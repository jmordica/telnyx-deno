# .WhatsAppMessagesApi

All URIs are relative to *https://api.telnyx.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**markMessageAsRead**](WhatsAppMessagesApi.md#markMessageAsRead) | **PATCH** /whatsapp_messages/{message_id} | Mark Message As Read
[**sendMessage**](WhatsAppMessagesApi.md#sendMessage) | **POST** /whatsapp_messages | Send Message


# **markMessageAsRead**
> void markMessageAsRead(markMessageAsReadRequestBody)

Mark a message as read.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .WhatsAppMessagesApi(configuration);

let body:.WhatsAppMessagesApiMarkMessageAsReadRequest = {
  // string | Message ID from Webhook
  messageId: "message_id_example",
  // MarkMessageAsReadRequestBody
  markMessageAsReadRequestBody: {
    whatsappUserId: "15125551212",
    status: "read",
  },
};

apiInstance.markMessageAsRead(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **markMessageAsReadRequestBody** | **MarkMessageAsReadRequestBody**|  |
 **messageId** | [**string**] | Message ID from Webhook | defaults to undefined


### Return type

**void**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Request successful, empty response body. |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **sendMessage**
> SuccessfulResponseWithDetailsAboutTheWhatsAppMessageSent sendMessage(createWhatsAppMessageRequest)

Send text messages, media/documents, and message templates to your customers.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .WhatsAppMessagesApi(configuration);

let body:.WhatsAppMessagesApiSendMessageRequest = {
  // CreateWhatsAppMessageRequest
  createWhatsAppMessageRequest: {
    whatsappUserId: "whatsappUserId_example",
    to: "to_example",
    type: "text",
    text: {
      body: "body_example",
    },
    audio: {
      id: "your-media-id",
      link: "http://www.example.com/file",
    },
    image: {
      id: "f043afd0-f0ae-4b9c-ab3d-696fb4c8cd68",
      link: "http://www.example.com/file",
      caption: "My cool media!",
    },
    document: {
      id: "f043afd0-f0ae-4b9c-ab3d-696fb4c8cd68",
      link: "http://www.example.com/file",
      caption: "My cool media!",
      filename: "example.pdf",
    },
    video: {
      id: "f043afd0-f0ae-4b9c-ab3d-696fb4c8cd68",
      link: "http://www.example.com/file",
      caption: "My cool media!",
    },
    location: {
      longitude: "longitude_example",
      latitude: "latitude_example",
      name: "name_example",
      address: "address_example",
    },
    previewUrl: true,
    template: {
      namespace: "namespace_example",
      name: "name_example",
      language: {
        policy: "fallback",
        code: "code_example",
      },
      components: [
        ,
      ],
    },
  },
};

apiInstance.sendMessage(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createWhatsAppMessageRequest** | **CreateWhatsAppMessageRequest**|  |


### Return type

**SuccessfulResponseWithDetailsAboutTheWhatsAppMessageSent**

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


