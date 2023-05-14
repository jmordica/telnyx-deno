# .BulkSoleProprietorCreationApi

All URIs are relative to *https://api.telnyx.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**bulkCreationBulkCreationPost**](BulkSoleProprietorCreationApi.md#bulkCreationBulkCreationPost) | **POST** /bulkCreation | Bulk Creation
[**getAllTasksBulkCreationGet**](BulkSoleProprietorCreationApi.md#getAllTasksBulkCreationGet) | **GET** /bulkCreation | Get All Tasks
[**getDetailedTaskStatusBulkCreationTaskIdDetailedStatusGet**](BulkSoleProprietorCreationApi.md#getDetailedTaskStatusBulkCreationTaskIdDetailedStatusGet) | **GET** /bulkCreation/{taskId}/detailedStatus | Get Detailed Task Status
[**getTaskStatusBulkCreationTaskIdGet**](BulkSoleProprietorCreationApi.md#getTaskStatusBulkCreationTaskIdGet) | **GET** /bulkCreation/{taskId} | Get Task Status


# **bulkCreationBulkCreationPost**
> BulkCreationResponse bulkCreationBulkCreationPost(bulkCreationRequest)

Submit sets of data about brands, campaigns, and phone numbers to create and assign. Please note that sub-usecases, phone numbers, and sample messages are each limited to 5 per campaign.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BulkSoleProprietorCreationApi(configuration);

let body:.BulkSoleProprietorCreationApiBulkCreationBulkCreationPostRequest = {
  // BulkCreationRequest
  bulkCreationRequest: {
    brands: [
      {
        city: "New York",
        companyName: "ABC Inc.",
        country: "US",
        description: "This campaign belongs to Brand X and will be used for marketing.",
        displayName: "ABC Mobile",
        email: "email_example",
        entityType: null,
        firstName: "John",
        lastName: "Smith",
        phone: "+12024567890",
        phoneNumbers: ["+12193849584","+13129872456"],
        postalCode: "10001",
        referenceId: "4q90017a-2f50-4c90-c9e6-5f67304cbde9",
        sampleMessages: ["Sample message 1","Sample message 2"],
        state: "NY",
        street: "123",
        subUsecases: [
          "["MARKETING","2FA"]",
        ],
        vertical: null,
        website: "http://www.abcmobile.com",
      },
    ],
  },
};

apiInstance.bulkCreationBulkCreationPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bulkCreationRequest** | **BulkCreationRequest**|  |


### Return type

**BulkCreationResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getAllTasksBulkCreationGet**
> BulkCreationTasksResponse getAllTasksBulkCreationGet()

Get a list of all tasks ever submitted by your organization.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BulkSoleProprietorCreationApi(configuration);

let body:.BulkSoleProprietorCreationApiGetAllTasksBulkCreationGetRequest = {
  // any (optional)
  recordsPerPage: null,
  // any (optional)
  page: null,
};

apiInstance.getAllTasksBulkCreationGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **recordsPerPage** | **any** |  | (optional) defaults to undefined
 **page** | **any** |  | (optional) defaults to undefined


### Return type

**BulkCreationTasksResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getDetailedTaskStatusBulkCreationTaskIdDetailedStatusGet**
> BulkCreationDetailedStatusResponse getDetailedTaskStatusBulkCreationTaskIdDetailedStatusGet()

Get detailed information about the status of a bulk creation task.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BulkSoleProprietorCreationApi(configuration);

let body:.BulkSoleProprietorCreationApiGetDetailedTaskStatusBulkCreationTaskIdDetailedStatusGetRequest = {
  // string
  taskId: "taskId_example",
  // any (optional)
  recordsPerPage: null,
  // any (optional)
  page: null,
};

apiInstance.getDetailedTaskStatusBulkCreationTaskIdDetailedStatusGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **taskId** | [**string**] |  | defaults to undefined
 **recordsPerPage** | **any** |  | (optional) defaults to undefined
 **page** | **any** |  | (optional) defaults to undefined


### Return type

**BulkCreationDetailedStatusResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getTaskStatusBulkCreationTaskIdGet**
> BulkCreationStatusResponse getTaskStatusBulkCreationTaskIdGet()

Get a simple overview of the status of a bulk creation task.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BulkSoleProprietorCreationApi(configuration);

let body:.BulkSoleProprietorCreationApiGetTaskStatusBulkCreationTaskIdGetRequest = {
  // string
  taskId: "taskId_example",
};

apiInstance.getTaskStatusBulkCreationTaskIdGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **taskId** | [**string**] |  | defaults to undefined


### Return type

**BulkCreationStatusResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


