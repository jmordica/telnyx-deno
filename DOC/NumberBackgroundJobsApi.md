# .NumberBackgroundJobsApi

All URIs are relative to *https://api.telnyx.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createPhoneNumbersJobDeletePhoneNumbers**](NumberBackgroundJobsApi.md#createPhoneNumbersJobDeletePhoneNumbers) | **POST** /phone_numbers/jobs/delete_phone_numbers | Delete a batch of numbers
[**createPhoneNumbersJobUpdateEmergencySettings**](NumberBackgroundJobsApi.md#createPhoneNumbersJobUpdateEmergencySettings) | **POST** /phone_numbers/jobs/update_emergency_settings | Update the emergency settings from a batch of numbers
[**createPhoneNumbersJobUpdatePhoneNumber**](NumberBackgroundJobsApi.md#createPhoneNumbersJobUpdatePhoneNumber) | **POST** /phone_numbers/jobs/update_phone_numbers | Update a batch of numbers
[**listPhoneNumbersJobs**](NumberBackgroundJobsApi.md#listPhoneNumbersJobs) | **GET** /phone_numbers/jobs | Lists the phone numbers jobs
[**retrievePhoneNumbersJob**](NumberBackgroundJobsApi.md#retrievePhoneNumbersJob) | **GET** /phone_numbers/jobs/{id} | Retrieve a phone numbers job


# **createPhoneNumbersJobDeletePhoneNumbers**
> PhoneNumbersJobDeletePhoneNumbers createPhoneNumbersJobDeletePhoneNumbers(phoneNumbersJobDeletePhoneNumbersRequest)

Creates a new background job to delete a batch of numbers. At most one thousand numbers can be updated per API call.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .NumberBackgroundJobsApi(configuration);

let body:.NumberBackgroundJobsApiCreatePhoneNumbersJobDeletePhoneNumbersRequest = {
  // PhoneNumbersJobDeletePhoneNumbersRequest
  phoneNumbersJobDeletePhoneNumbersRequest: {
    phoneNumbers: [
      "phoneNumbers_example",
    ],
  },
};

apiInstance.createPhoneNumbersJobDeletePhoneNumbers(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **phoneNumbersJobDeletePhoneNumbersRequest** | **PhoneNumbersJobDeletePhoneNumbersRequest**|  |


### Return type

**PhoneNumbersJobDeletePhoneNumbers**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | Phone numbers job delete phone numbers requested. |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createPhoneNumbersJobUpdateEmergencySettings**
> PhoneNumbersEnableEmergency createPhoneNumbersJobUpdateEmergencySettings(phoneNumbersJobUpdateEmergencySettingsRequest)

Creates a background job to update the emergency settings of a collection of phone numbers. At most one thousand numbers can be updated per API call.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .NumberBackgroundJobsApi(configuration);

let body:.NumberBackgroundJobsApiCreatePhoneNumbersJobUpdateEmergencySettingsRequest = {
  // PhoneNumbersJobUpdateEmergencySettingsRequest
  phoneNumbersJobUpdateEmergencySettingsRequest: {
    phoneNumbers: [
      "phoneNumbers_example",
    ],
    emergencyEnabled: true,
    emergencyAddressId: "emergencyAddressId_example",
  },
};

apiInstance.createPhoneNumbersJobUpdateEmergencySettings(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **phoneNumbersJobUpdateEmergencySettingsRequest** | **PhoneNumbersJobUpdateEmergencySettingsRequest**|  |


### Return type

**PhoneNumbersEnableEmergency**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | Phone numbers enable emergency requested. |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createPhoneNumbersJobUpdatePhoneNumber**
> PhoneNumbersJobUpdatePhoneNumbers createPhoneNumbersJobUpdatePhoneNumber(phoneNumbersJobUpdatePhoneNumbersRequest)

Creates a new background job to update a batch of numbers. At most one thousand numbers can be updated per API call. At least one of the updateable fields must be submitted.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .NumberBackgroundJobsApi(configuration);

let body:.NumberBackgroundJobsApiCreatePhoneNumbersJobUpdatePhoneNumberRequest = {
  // PhoneNumbersJobUpdatePhoneNumbersRequest
  phoneNumbersJobUpdatePhoneNumbersRequest: {
    phoneNumbers: [
      "phoneNumbers_example",
    ],
    tags: [
      "tags_example",
    ],
    externalPin: "externalPin_example",
    customerReference: "MY REF 001",
    connectionId: "connectionId_example",
    billingGroupId: "billingGroupId_example",
  },
};

apiInstance.createPhoneNumbersJobUpdatePhoneNumber(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **phoneNumbersJobUpdatePhoneNumbersRequest** | **PhoneNumbersJobUpdatePhoneNumbersRequest**|  |


### Return type

**PhoneNumbersJobUpdatePhoneNumbers**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | Phone numbers job update phone numbers requested. |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listPhoneNumbersJobs**
> ListPhoneNumbersBackgroundJobsResponse listPhoneNumbersJobs()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .NumberBackgroundJobsApi(configuration);

let body:.NumberBackgroundJobsApiListPhoneNumbersJobsRequest = {
  // 'update_emergency_settings' | 'delete_phone_numbers' | 'update_phone_numbers' | Filter the phone number jobs by type. (optional)
  filterType: "update_emergency_settings",
  // number | The page number to load (optional)
  pageNumber: 1,
  // number | The size of the page (optional)
  pageSize: 20,
  // 'created_at' | Specifies the sort order for results. If not given, results are sorted by created_at in descending order. (optional)
  sort: "created_at",
};

apiInstance.listPhoneNumbersJobs(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filterType** | [**&#39;update_emergency_settings&#39; | &#39;delete_phone_numbers&#39; | &#39;update_phone_numbers&#39;**]**Array<&#39;update_emergency_settings&#39; &#124; &#39;delete_phone_numbers&#39; &#124; &#39;update_phone_numbers&#39;>** | Filter the phone number jobs by type. | (optional) defaults to undefined
 **pageNumber** | [**number**] | The page number to load | (optional) defaults to 1
 **pageSize** | [**number**] | The size of the page | (optional) defaults to 20
 **sort** | [**&#39;created_at&#39;**]**Array<&#39;created_at&#39;>** | Specifies the sort order for results. If not given, results are sorted by created_at in descending order. | (optional) defaults to undefined


### Return type

**ListPhoneNumbersBackgroundJobsResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response with a list of phone numbers background jobs. |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **retrievePhoneNumbersJob**
> PhoneNumbersJob retrievePhoneNumbersJob()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .NumberBackgroundJobsApi(configuration);

let body:.NumberBackgroundJobsApiRetrievePhoneNumbersJobRequest = {
  // string | Identifies the Phone Numbers Job.
  id: "id_example",
};

apiInstance.retrievePhoneNumbersJob(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Identifies the Phone Numbers Job. | defaults to undefined


### Return type

**PhoneNumbersJob**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Phone numbers job details. |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


