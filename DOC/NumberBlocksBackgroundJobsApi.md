# .NumberBlocksBackgroundJobsApi

All URIs are relative to *https://api.telnyx.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createPhoneNumberBlocksJobDeletePhoneNumberBlock**](NumberBlocksBackgroundJobsApi.md#createPhoneNumberBlocksJobDeletePhoneNumberBlock) | **POST** /phone_number_blocks/jobs/delete_phone_number_block | Deletes all numbers associated with a phone number block
[**listPhoneNumberBlocksJobs**](NumberBlocksBackgroundJobsApi.md#listPhoneNumberBlocksJobs) | **GET** /phone_number_blocks/jobs | Lists the phone number blocks jobs
[**retrievePhoneNumberBlocksJob**](NumberBlocksBackgroundJobsApi.md#retrievePhoneNumberBlocksJob) | **GET** /phone_number_blocks/jobs/{id} | Retrieves a phone number blocks job


# **createPhoneNumberBlocksJobDeletePhoneNumberBlock**
> PhoneNumberBlocksJobDeletePhoneNumberBlock createPhoneNumberBlocksJobDeletePhoneNumberBlock(phoneNumberBlocksJobDeletePhoneNumberBlockRequest)

Creates a new background job to delete all the phone numbers associated with the given block. We will only consider the phone number block as deleted after all phone numbers associated with it are removed, so multiple executions of this job may be necessary in case some of the phone numbers present errors during the deletion process.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .NumberBlocksBackgroundJobsApi(configuration);

let body:.NumberBlocksBackgroundJobsApiCreatePhoneNumberBlocksJobDeletePhoneNumberBlockRequest = {
  // PhoneNumberBlocksJobDeletePhoneNumberBlockRequest
  phoneNumberBlocksJobDeletePhoneNumberBlockRequest: {
    phoneNumberBlockId: "phoneNumberBlockId_example",
  },
};

apiInstance.createPhoneNumberBlocksJobDeletePhoneNumberBlock(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **phoneNumberBlocksJobDeletePhoneNumberBlockRequest** | **PhoneNumberBlocksJobDeletePhoneNumberBlockRequest**|  |


### Return type

**PhoneNumberBlocksJobDeletePhoneNumberBlock**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | Phone number blocks job delete phone numbers requested. |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listPhoneNumberBlocksJobs**
> ListPhoneNumberBlocksBackgroundJobsResponse listPhoneNumberBlocksJobs()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .NumberBlocksBackgroundJobsApi(configuration);

let body:.NumberBlocksBackgroundJobsApiListPhoneNumberBlocksJobsRequest = {
  // 'delete_phone_number_block' | Filter the phone number blocks jobs by type. (optional)
  filterType: "delete_phone_number_block",
  // 'pending' | 'in_progress' | 'completed' | 'failed' | Filter the phone number blocks jobs by status. (optional)
  filterStatus: "in_progress",
  // number | The page number to load (optional)
  pageNumber: 1,
  // number | The size of the page (optional)
  pageSize: 20,
  // 'created_at' | Specifies the sort order for results. If not given, results are sorted by created_at in descending order. (optional)
  sort: "created_at",
};

apiInstance.listPhoneNumberBlocksJobs(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filterType** | [**&#39;delete_phone_number_block&#39;**]**Array<&#39;delete_phone_number_block&#39;>** | Filter the phone number blocks jobs by type. | (optional) defaults to undefined
 **filterStatus** | [**&#39;pending&#39; | &#39;in_progress&#39; | &#39;completed&#39; | &#39;failed&#39;**]**Array<&#39;pending&#39; &#124; &#39;in_progress&#39; &#124; &#39;completed&#39; &#124; &#39;failed&#39;>** | Filter the phone number blocks jobs by status. | (optional) defaults to undefined
 **pageNumber** | [**number**] | The page number to load | (optional) defaults to 1
 **pageSize** | [**number**] | The size of the page | (optional) defaults to 20
 **sort** | [**&#39;created_at&#39;**]**Array<&#39;created_at&#39;>** | Specifies the sort order for results. If not given, results are sorted by created_at in descending order. | (optional) defaults to undefined


### Return type

**ListPhoneNumberBlocksBackgroundJobsResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response with a list of phone number blocks background jobs. |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **retrievePhoneNumberBlocksJob**
> PhoneNumberBlocksJob retrievePhoneNumberBlocksJob()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .NumberBlocksBackgroundJobsApi(configuration);

let body:.NumberBlocksBackgroundJobsApiRetrievePhoneNumberBlocksJobRequest = {
  // string | Identifies the Phone Number Blocks Job.
  id: "id_example",
};

apiInstance.retrievePhoneNumberBlocksJob(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Identifies the Phone Number Blocks Job. | defaults to undefined


### Return type

**PhoneNumberBlocksJob**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Phone number blocks job details. |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


