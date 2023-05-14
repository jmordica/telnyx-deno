# .WhatsAppContactsApi

All URIs are relative to *https://api.telnyx.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**checkContact**](WhatsAppContactsApi.md#checkContact) | **POST** /whatsapp_contacts | Check Contact


# **checkContact**
> CheckContactResponse checkContact(checkContactRequestBody)

Verify that a phone number belongs to a valid WhatsApp account. You must ensure that the status is valid before you can message a user, and you\'ll get their WhatsApp ID to use for messaging.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .WhatsAppContactsApi(configuration);

let body:.WhatsAppContactsApiCheckContactRequest = {
  // CheckContactRequestBody
  checkContactRequestBody: {
    whatsappUserId: "whatsappUserId_example",
    blocking: "no_wait",
    contacts: [
      "contacts_example",
    ],
  },
};

apiInstance.checkContact(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **checkContactRequestBody** | **CheckContactRequestBody**|  |


### Return type

**CheckContactResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response with details about WhatsApp contact(s). |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


