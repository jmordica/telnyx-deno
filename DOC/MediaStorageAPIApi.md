# .MediaStorageAPIApi

All URIs are relative to *https://api.telnyx.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createMediaStorage**](MediaStorageAPIApi.md#createMediaStorage) | **POST** /media | Upload media
[**deleteMediaStorage**](MediaStorageAPIApi.md#deleteMediaStorage) | **DELETE** /media/{media_name} | Deletes stored media
[**downloadMediaStorage**](MediaStorageAPIApi.md#downloadMediaStorage) | **GET** /media/{media_name}/download | Download stored media
[**getMediaStorage**](MediaStorageAPIApi.md#getMediaStorage) | **GET** /media/{media_name} | Retrieve stored media
[**listMediaStorage**](MediaStorageAPIApi.md#listMediaStorage) | **GET** /media | List uploaded media
[**updateMediaStorage**](MediaStorageAPIApi.md#updateMediaStorage) | **PUT** /media/{media_name} | Update stored media


# **createMediaStorage**
> MediaResourceResponse createMediaStorage(uploadMediaRequest)

Upload media file to Telnyx so it can be used with other Telnyx services

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MediaStorageAPIApi(configuration);

let body:.MediaStorageAPIApiCreateMediaStorageRequest = {
  // UploadMediaRequest | Upload media request
  uploadMediaRequest: {
    mediaUrl: "http://www.example.com/audio.mp3",
    ttlSecs: 86400,
    mediaName: "my_file",
  },
};

apiInstance.createMediaStorage(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uploadMediaRequest** | **UploadMediaRequest**| Upload media request |


### Return type

**MediaResourceResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json, multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | A response describing a media resource |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteMediaStorage**
> void deleteMediaStorage()

Deletes a stored media file.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MediaStorageAPIApi(configuration);

let body:.MediaStorageAPIApiDeleteMediaStorageRequest = {
  // string | Uniquely identifies a media resource.
  mediaName: "media_name_example",
};

apiInstance.deleteMediaStorage(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **mediaName** | [**string**] | Uniquely identifies a media resource. | defaults to undefined


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
**204** | The media was deleted successfully. |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **downloadMediaStorage**
> HttpFile downloadMediaStorage()

Downloads a stored media file.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MediaStorageAPIApi(configuration);

let body:.MediaStorageAPIApiDownloadMediaStorageRequest = {
  // string | Uniquely identifies a media resource.
  mediaName: "media_name_example",
};

apiInstance.downloadMediaStorage(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **mediaName** | [**string**] | Uniquely identifies a media resource. | defaults to undefined


### Return type

**HttpFile**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A response describing a media resource |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getMediaStorage**
> MediaResourceResponse getMediaStorage()

Returns the information about a stored media file.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MediaStorageAPIApi(configuration);

let body:.MediaStorageAPIApiGetMediaStorageRequest = {
  // string | Uniquely identifies a media resource.
  mediaName: "media_name_example",
};

apiInstance.getMediaStorage(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **mediaName** | [**string**] | Uniquely identifies a media resource. | defaults to undefined


### Return type

**MediaResourceResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A response describing a media resource |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listMediaStorage**
> ListOfMediaResourcesResponse listMediaStorage()

Returns a list of stored media files.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MediaStorageAPIApi(configuration);

let body:.MediaStorageAPIApiListMediaStorageRequest = {
  // string | Filters files by given content types (optional)
  filterContentType: "application_xml",
};

apiInstance.listMediaStorage(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filterContentType** | [**string**] | Filters files by given content types | (optional) defaults to undefined


### Return type

**ListOfMediaResourcesResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A response with a list of media resources |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateMediaStorage**
> MediaResourceResponse updateMediaStorage(updateMediaRequest)

Updates a stored media file.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MediaStorageAPIApi(configuration);

let body:.MediaStorageAPIApiUpdateMediaStorageRequest = {
  // string | Uniquely identifies a media resource.
  mediaName: "media_name_example",
  // UpdateMediaRequest | Update media request
  updateMediaRequest: {
    mediaUrl: "http://www.example.com/audio.mp3",
    ttlSecs: 86400,
  },
};

apiInstance.updateMediaStorage(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateMediaRequest** | **UpdateMediaRequest**| Update media request |
 **mediaName** | [**string**] | Uniquely identifies a media resource. | defaults to undefined


### Return type

**MediaResourceResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json, multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A response describing a media resource |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


