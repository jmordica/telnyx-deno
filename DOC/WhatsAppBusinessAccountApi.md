# .WhatsAppBusinessAccountApi

All URIs are relative to *https://api.telnyx.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listWhatsappBusinessAccounts**](WhatsAppBusinessAccountApi.md#listWhatsappBusinessAccounts) | **GET** /whatsapp_business_accounts | Lists the WhatsApp Business Accounts owned by the current organization
[**retrieveWhatsappBusinessAccount**](WhatsAppBusinessAccountApi.md#retrieveWhatsappBusinessAccount) | **GET** /whatsapp_business_accounts/{id} | Retrieves a WhatsApp Business Account
[**retrieveWhatsappBusinessAccountPhoneNumbers**](WhatsAppBusinessAccountApi.md#retrieveWhatsappBusinessAccountPhoneNumbers) | **GET** /whatsapp_business_accounts/{id}/phone_numbers | Retrieves the phone numbers from a WhatsApp Business Account


# **listWhatsappBusinessAccounts**
> ListWhatsAppBusinessAccountsResponse listWhatsappBusinessAccounts()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .WhatsAppBusinessAccountApi(configuration);

let body:.WhatsAppBusinessAccountApiListWhatsappBusinessAccountsRequest = {
  // number | The page number to load (optional)
  pageNumber: 1,
  // number | The size of the page (optional)
  pageSize: 20,
};

apiInstance.listWhatsappBusinessAccounts(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pageNumber** | [**number**] | The page number to load | (optional) defaults to 1
 **pageSize** | [**number**] | The size of the page | (optional) defaults to 20


### Return type

**ListWhatsAppBusinessAccountsResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response with a list of WhatsApp Business Accounts. |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **retrieveWhatsappBusinessAccount**
> WhatsAppBusinessAccount retrieveWhatsappBusinessAccount()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .WhatsAppBusinessAccountApi(configuration);

let body:.WhatsAppBusinessAccountApiRetrieveWhatsappBusinessAccountRequest = {
  // string | Identifies the WhatsApp Business Account
  id: "id_example",
};

apiInstance.retrieveWhatsappBusinessAccount(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Identifies the WhatsApp Business Account | defaults to undefined


### Return type

**WhatsAppBusinessAccount**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | WhatsApp Business Account details |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **retrieveWhatsappBusinessAccountPhoneNumbers**
> ListWhatsAppPhoneNumbersResponse retrieveWhatsappBusinessAccountPhoneNumbers()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .WhatsAppBusinessAccountApi(configuration);

let body:.WhatsAppBusinessAccountApiRetrieveWhatsappBusinessAccountPhoneNumbersRequest = {
  // string | Identifies the WhatsApp Business Account
  id: "id_example",
};

apiInstance.retrieveWhatsappBusinessAccountPhoneNumbers(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Identifies the WhatsApp Business Account | defaults to undefined


### Return type

**ListWhatsAppPhoneNumbersResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response with a list of WhatsApp Phone Numbers. |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


