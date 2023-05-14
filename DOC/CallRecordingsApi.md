# .CallRecordingsApi

All URIs are relative to *https://api.telnyx.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createCustomStorageCredentials**](CallRecordingsApi.md#createCustomStorageCredentials) | **POST** /custom_storage_credentials/{connection_id} | Create custom storage credentials
[**deleteCustomStorageCredentials**](CallRecordingsApi.md#deleteCustomStorageCredentials) | **DELETE** /custom_storage_credentials/{connection_id} | Delete stored credentials
[**deleteRecording**](CallRecordingsApi.md#deleteRecording) | **DELETE** /recordings/{recording_id} | Delete a call recording
[**getCustomStorageCredentials**](CallRecordingsApi.md#getCustomStorageCredentials) | **GET** /custom_storage_credentials/{connection_id} | Retrieve stored credentials
[**getRecording**](CallRecordingsApi.md#getRecording) | **GET** /recordings/{recording_id} | Retrieve call recording
[**updateCustomStorageCredentials**](CallRecordingsApi.md#updateCustomStorageCredentials) | **PUT** /custom_storage_credentials/{connection_id} | Update stored credentials


# **createCustomStorageCredentials**
> CredentialsResponse createCustomStorageCredentials(customStorageConfiguration)

Creates custom storage credentials configuration.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CallRecordingsApi(configuration);

let body:.CallRecordingsApiCreateCustomStorageCredentialsRequest = {
  // string | Telnyx connection id
  connectionId: "1293384261075731461",
  // CustomStorageConfiguration | Creates new credentials resource for given connection_id.
  customStorageConfiguration: {
    backend: "gcs",
    configuration: null,
  },
};

apiInstance.createCustomStorageCredentials(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customStorageConfiguration** | **CustomStorageConfiguration**| Creates new credentials resource for given connection_id. |
 **connectionId** | [**string**] | Telnyx connection id | defaults to undefined


### Return type

**CredentialsResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A response with credentials resource. |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteCustomStorageCredentials**
> void deleteCustomStorageCredentials()

Deletes a stored custom credentials configuration.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CallRecordingsApi(configuration);

let body:.CallRecordingsApiDeleteCustomStorageCredentialsRequest = {
  // string | Telnyx connection id
  connectionId: "1293384261075731461",
};

apiInstance.deleteCustomStorageCredentials(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **connectionId** | [**string**] | Telnyx connection id | defaults to undefined


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
**204** | The credentials configuration for connection_id was deleted successfully. |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteRecording**
> RecordingResponse deleteRecording()

Permanently deletes a call recording.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CallRecordingsApi(configuration);

let body:.CallRecordingsApiDeleteRecordingRequest = {
  // string | Uniquely identifies the recording by id.
  recordingId: "recording_id_example",
};

apiInstance.deleteRecording(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **recordingId** | [**string**] | Uniquely identifies the recording by id. | defaults to undefined


### Return type

**RecordingResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A response with recording resource. |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getCustomStorageCredentials**
> CredentialsResponse getCustomStorageCredentials()

Returns the information about custom storage credentials.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CallRecordingsApi(configuration);

let body:.CallRecordingsApiGetCustomStorageCredentialsRequest = {
  // string | Telnyx connection id
  connectionId: "1293384261075731461",
};

apiInstance.getCustomStorageCredentials(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **connectionId** | [**string**] | Telnyx connection id | defaults to undefined


### Return type

**CredentialsResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A response with credentials resource. |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getRecording**
> RecordingResponse getRecording()

Retrieves the details of an existing call recording.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CallRecordingsApi(configuration);

let body:.CallRecordingsApiGetRecordingRequest = {
  // string | Uniquely identifies the recording by id.
  recordingId: "recording_id_example",
};

apiInstance.getRecording(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **recordingId** | [**string**] | Uniquely identifies the recording by id. | defaults to undefined


### Return type

**RecordingResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A response with recording resource. |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateCustomStorageCredentials**
> CredentialsResponse updateCustomStorageCredentials(customStorageConfiguration)

Updates a stored custom credentials configuration.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CallRecordingsApi(configuration);

let body:.CallRecordingsApiUpdateCustomStorageCredentialsRequest = {
  // string | Telnyx connection id
  connectionId: "1293384261075731461",
  // CustomStorageConfiguration | Creates new credentials resource for given connection_id.
  customStorageConfiguration: {
    backend: "gcs",
    configuration: null,
  },
};

apiInstance.updateCustomStorageCredentials(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customStorageConfiguration** | **CustomStorageConfiguration**| Creates new credentials resource for given connection_id. |
 **connectionId** | [**string**] | Telnyx connection id | defaults to undefined


### Return type

**CredentialsResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A response with credentials resource. |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


