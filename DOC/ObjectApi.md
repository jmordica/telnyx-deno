# .ObjectApi

All URIs are relative to *https://api.telnyx.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteObject**](ObjectApi.md#deleteObject) | **DELETE** /{bucketName}/{objectName} | DeleteObject
[**deleteObjects**](ObjectApi.md#deleteObjects) | **POST** /{bucketName} | DeleteObjects
[**getObject**](ObjectApi.md#getObject) | **GET** /{bucketName}/{objectName} | GetObject
[**headObject**](ObjectApi.md#headObject) | **HEAD** /{bucketName}/{objectName} | HeadObject
[**listObjectsV2**](ObjectApi.md#listObjectsV2) | **GET** /{bucketName} | ListObjectsV2
[**putObject**](ObjectApi.md#putObject) | **PUT** /{bucketName}/{objectName} | PutObject


# **deleteObject**
> void deleteObject()

Delete an object from a given bucket.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ObjectApi(configuration);

let body:.ObjectApiDeleteObjectRequest = {
  // string | The bucket name.
  bucketName: "bucketName_example",
  // string | The object name.
  objectName: "objectName_example",
};

apiInstance.deleteObject(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bucketName** | [**string**] | The bucket name. | defaults to undefined
 **objectName** | [**string**] | The object name. | defaults to undefined


### Return type

**void**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Success |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteObjects**
> any deleteObjects(deleteObjectsRequestInner)

Deletes one or multiple objects from a given bucket.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ObjectApi(configuration);

let body:.ObjectApiDeleteObjectsRequest = {
  // string | The bucket name.
  bucketName: "bucketName_example",
  // boolean
  _delete: true,
  // Array<DeleteObjectsRequestInner>
  deleteObjectsRequestInner: [
    {
      key: "key_example",
    },
  ],
};

apiInstance.deleteObjects(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deleteObjectsRequestInner** | **Array<DeleteObjectsRequestInner>**|  |
 **bucketName** | [**string**] | The bucket name. | defaults to undefined
 **_delete** | [**boolean**]**Array<&#39;true&#39;>** |  | defaults to undefined


### Return type

**any**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: text/xml
 - **Accept**: text/xml


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getObject**
> HttpFile getObject()

Retrieves an object from a given bucket.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ObjectApi(configuration);

let body:.ObjectApiGetObjectRequest = {
  // string | The bucket name.
  bucketName: "bucketName_example",
  // string | The object name.
  objectName: "objectName_example",
  // string (optional)
  uploadId: "uploadId_example",
};

apiInstance.getObject(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bucketName** | [**string**] | The bucket name. | defaults to undefined
 **objectName** | [**string**] | The object name. | defaults to undefined
 **uploadId** | [**string**] |  | (optional) defaults to undefined


### Return type

**HttpFile**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**404** | ObjectNotFound |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **headObject**
> void headObject()

Retrieves metadata from an object without returning the object itself.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ObjectApi(configuration);

let body:.ObjectApiHeadObjectRequest = {
  // string | The bucket name.
  bucketName: "bucketName_example",
  // string | The object name.
  objectName: "objectName_example",
};

apiInstance.headObject(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bucketName** | [**string**] | The bucket name. | defaults to undefined
 **objectName** | [**string**] | The object name. | defaults to undefined


### Return type

**void**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  * Date -  <br>  * Last-Modified -  <br>  * Content-Length -  <br>  |
**404** | ObjectNotFound |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listObjectsV2**
> ListObjectsResponse listObjectsV2()

List all objects contained in a given bucket.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ObjectApi(configuration);

let body:.ObjectApiListObjectsV2Request = {
  // string | The name of the bucket.
  bucketName: "bucketName_example",
  // 2 (optional)
  listType: 2,
};

apiInstance.listObjectsV2(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bucketName** | [**string**] | The name of the bucket. | defaults to undefined
 **listType** | [**2**]**Array<2>** |  | (optional) defaults to undefined


### Return type

**ListObjectsResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/xml


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**404** | Bucket does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **putObject**
> void putObject(body)

Add an object to a bucket.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ObjectApi(configuration);

let body:.ObjectApiPutObjectRequest = {
  // string | The bucket name.
  bucketName: "bucketName_example",
  // string | The object name.
  objectName: "objectName_example",
  // HttpFile
  body: { data: Buffer.from(fs.readFileSync('/path/to/file', 'utf-8')), name: '/path/to/file' },
  // string (optional)
  contentType: "Content-type_example",
  // string (optional)
  partNumber: "partNumber_example",
  // string (optional)
  uploadId: "uploadId_example",
};

apiInstance.putObject(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **HttpFile**|  |
 **bucketName** | [**string**] | The bucket name. | defaults to undefined
 **objectName** | [**string**] | The object name. | defaults to undefined
 **contentType** | [**string**] |  | (optional) defaults to undefined
 **partNumber** | [**string**] |  | (optional) defaults to undefined
 **uploadId** | [**string**] |  | (optional) defaults to undefined


### Return type

**void**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


