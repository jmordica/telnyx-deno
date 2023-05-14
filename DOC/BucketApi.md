# .BucketApi

All URIs are relative to *https://api.telnyx.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createBucket**](BucketApi.md#createBucket) | **PUT** /{bucketName} | CreateBucket
[**deleteBucket**](BucketApi.md#deleteBucket) | **DELETE** /{bucketName} | DeleteBucket
[**headBucket**](BucketApi.md#headBucket) | **HEAD** /{bucketName} | HeadBucket
[**listBuckets**](BucketApi.md#listBuckets) | **GET** / | ListBuckets


# **createBucket**
> void createBucket()

Create a bucket.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BucketApi(configuration);

let body:.BucketApiCreateBucketRequest = {
  // string | The name of the bucket.
  bucketName: "mybucket",
  // CreateBucketRequest (optional)
  createBucketRequest: {
    locationConstraint: "locationConstraint_example",
  },
};

apiInstance.createBucket(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createBucketRequest** | **CreateBucketRequest**|  |
 **bucketName** | [**string**] | The name of the bucket. | defaults to undefined


### Return type

**void**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: text/xml
 - **Accept**: text/xml


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**409** | BucketAlreadyExists |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteBucket**
> void deleteBucket()

Deletes a bucket. The bucket must be empty for it to be deleted.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BucketApi(configuration);

let body:.BucketApiDeleteBucketRequest = {
  // string | The name of the bucket.
  bucketName: "bucketName_example",
};

apiInstance.deleteBucket(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bucketName** | [**string**] | The name of the bucket. | defaults to undefined


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

# **headBucket**
> void headBucket()

Determines if a bucket exists and you have permission to access it.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BucketApi(configuration);

let body:.BucketApiHeadBucketRequest = {
  // string | The name of the bucket.
  bucketName: "bucketName_example",
};

apiInstance.headBucket(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bucketName** | [**string**] | The name of the bucket. | defaults to undefined


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
**404** | NoSuchBucket |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listBuckets**
> ListBucketsResponse listBuckets()

List all Buckets.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BucketApi(configuration);

let body:any = {};

apiInstance.listBuckets(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**ListBucketsResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/xml


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


