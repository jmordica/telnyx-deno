# .WhatsAppMediaApi

All URIs are relative to *https://api.telnyx.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteMedia**](WhatsAppMediaApi.md#deleteMedia) | **DELETE** /whatsapp_media/{whatsapp_user_id}/{media_id} | Delete Media
[**downloadMedia**](WhatsAppMediaApi.md#downloadMedia) | **GET** /whatsapp_media/{whatsapp_user_id}/{media_id} | Download Media
[**uploadMedia**](WhatsAppMediaApi.md#uploadMedia) | **POST** /whatsapp_media | Upload Media


# **deleteMedia**
> void deleteMedia()

Delete uploaded media.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .WhatsAppMediaApi(configuration);

let body:.WhatsAppMediaApiDeleteMediaRequest = {
  // string | User\'s WhatsApp ID
  whatsappUserId: "whatsapp_user_id_example",
  // string | WhatsApp\'s Media ID
  mediaId: "media_id_example",
};

apiInstance.deleteMedia(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **whatsappUserId** | [**string**] | User\&#39;s WhatsApp ID | defaults to undefined
 **mediaId** | [**string**] | WhatsApp\&#39;s Media ID | defaults to undefined


### Return type

**void**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Request successful, empty response body. |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **downloadMedia**
> HttpFile downloadMedia()

Retrieve uploaded media. Media is typically available for 30 days after uploading.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .WhatsAppMediaApi(configuration);

let body:.WhatsAppMediaApiDownloadMediaRequest = {
  // string | User\'s WhatsApp ID
  whatsappUserId: "whatsapp_user_id_example",
  // string | WhatsApp\'s Media ID
  mediaId: "media_id_example",
};

apiInstance.downloadMedia(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **whatsappUserId** | [**string**] | User\&#39;s WhatsApp ID | defaults to undefined
 **mediaId** | [**string**] | WhatsApp\&#39;s Media ID | defaults to undefined


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

# **uploadMedia**
> UploadMedia uploadMedia()

Upload media. Accepted media types include image/jpeg, image/png, video/mp4, video/3gpp, audio/aac, audio/ogg.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .WhatsAppMediaApi(configuration);

let body:.WhatsAppMediaApiUploadMediaRequest = {
  // string | The user\\\'s WhatsApp ID.
  whatsappUserId: "whatsappUserId_example",
  // string | The content-type of the uplaoded media.
  mediaContentType: "mediaContentType_example",
  // HttpFile | The media to store with WhatsApp.
  uploadFile: { data: Buffer.from(fs.readFileSync('/path/to/file', 'utf-8')), name: '/path/to/file' },
};

apiInstance.uploadMedia(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **whatsappUserId** | [**string**] | The user\\\&#39;s WhatsApp ID. | defaults to undefined
 **mediaContentType** | [**string**] | The content-type of the uplaoded media. | defaults to undefined
 **uploadFile** | [**HttpFile**] | The media to store with WhatsApp. | defaults to undefined


### Return type

**UploadMedia**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


