# .WhatsAppPhoneNumberApi

All URIs are relative to *https://api.telnyx.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**patchWhatsappPhoneNumber**](WhatsAppPhoneNumberApi.md#patchWhatsappPhoneNumber) | **PATCH** /whatsapp_phone_numbers/{id} | Update a WhatsApp Phone Number webhook
[**patchWhatsappPhoneNumberAbout**](WhatsAppPhoneNumberApi.md#patchWhatsappPhoneNumberAbout) | **PATCH** /whatsapp_phone_numbers/{id}/about | Update a WhatsApp Phone Number about text
[**patchWhatsappProfilePhoto**](WhatsAppPhoneNumberApi.md#patchWhatsappProfilePhoto) | **PATCH** /whatsapp_phone_numbers/{id}/photo | Update the Whatsapp Profile Photo for a given Whatsapp Phone Number
[**retrieveWhatsappPhoneNumber**](WhatsAppPhoneNumberApi.md#retrieveWhatsappPhoneNumber) | **GET** /whatsapp_phone_numbers/{id} | Retrieves a WhatsApp Phone Number
[**retrieveWhatsappProfilePhoto**](WhatsAppPhoneNumberApi.md#retrieveWhatsappProfilePhoto) | **GET** /whatsapp_phone_numbers/{id}/photo | Retrieves a Whatsapp Profile Photo for a WhatsApp Phone Number


# **patchWhatsappPhoneNumber**
> WhatsAppPhoneNumber patchWhatsappPhoneNumber(updateWhatsappPhoneNumberRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .WhatsAppPhoneNumberApi(configuration);

let body:.WhatsAppPhoneNumberApiPatchWhatsappPhoneNumberRequest = {
  // string | Identifies the WhatsApp Phone Number
  id: "id_example",
  // UpdateWhatsappPhoneNumberRequest
  updateWhatsappPhoneNumberRequest: {
    webhookUrl: "https://mywebhook.com/example/endpoint",
  },
};

apiInstance.patchWhatsappPhoneNumber(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateWhatsappPhoneNumberRequest** | **UpdateWhatsappPhoneNumberRequest**|  |
 **id** | [**string**] | Identifies the WhatsApp Phone Number | defaults to undefined


### Return type

**WhatsAppPhoneNumber**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Updated WhatsApp Phone Number details |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **patchWhatsappPhoneNumberAbout**
> void patchWhatsappPhoneNumberAbout(updateWhatsappPhoneNumberAboutRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .WhatsAppPhoneNumberApi(configuration);

let body:.WhatsAppPhoneNumberApiPatchWhatsappPhoneNumberAboutRequest = {
  // string | Identifies the WhatsApp Phone Number
  id: "id_example",
  // UpdateWhatsappPhoneNumberAboutRequest
  updateWhatsappPhoneNumberAboutRequest: {
    about: "This is our about section",
  },
};

apiInstance.patchWhatsappPhoneNumberAbout(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateWhatsappPhoneNumberAboutRequest** | **UpdateWhatsappPhoneNumberAboutRequest**|  |
 **id** | [**string**] | Identifies the WhatsApp Phone Number | defaults to undefined


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
**200** | Updated WhatsApp Phone Number about text |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **patchWhatsappProfilePhoto**
> WhatsAppProfilePhoto patchWhatsappProfilePhoto()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .WhatsAppPhoneNumberApi(configuration);

let body:.WhatsAppPhoneNumberApiPatchWhatsappProfilePhotoRequest = {
  // string | Identifies the WhatsApp Phone Number
  id: "id_example",
  // HttpFile | Must be an image with exactly 640x640px dimensions.
  photo: { data: Buffer.from(fs.readFileSync('/path/to/file', 'utf-8')), name: '/path/to/file' },
};

apiInstance.patchWhatsappProfilePhoto(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Identifies the WhatsApp Phone Number | defaults to undefined
 **photo** | [**HttpFile**] | Must be an image with exactly 640x640px dimensions. | defaults to undefined


### Return type

**WhatsAppProfilePhoto**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | WhatsApp Profile Photo |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **retrieveWhatsappPhoneNumber**
> WhatsAppPhoneNumber retrieveWhatsappPhoneNumber()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .WhatsAppPhoneNumberApi(configuration);

let body:.WhatsAppPhoneNumberApiRetrieveWhatsappPhoneNumberRequest = {
  // string | Identifies the WhatsApp Phone Number
  id: "id_example",
};

apiInstance.retrieveWhatsappPhoneNumber(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Identifies the WhatsApp Phone Number | defaults to undefined


### Return type

**WhatsAppPhoneNumber**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | WhatsApp Phone Number details |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **retrieveWhatsappProfilePhoto**
> WhatsAppProfilePhoto retrieveWhatsappProfilePhoto()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .WhatsAppPhoneNumberApi(configuration);

let body:.WhatsAppPhoneNumberApiRetrieveWhatsappProfilePhotoRequest = {
  // string | Identifies the WhatsApp Phone Number
  id: "id_example",
};

apiInstance.retrieveWhatsappProfilePhoto(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Identifies the WhatsApp Phone Number | defaults to undefined


### Return type

**WhatsAppProfilePhoto**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | WhatsApp Profile Photo |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


