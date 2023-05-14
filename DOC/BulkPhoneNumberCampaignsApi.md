# .BulkPhoneNumberCampaignsApi

All URIs are relative to *https://api.telnyx.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**assignMessagingProfileToCampaignPhoneNumberAssignmentByProfilePost**](BulkPhoneNumberCampaignsApi.md#assignMessagingProfileToCampaignPhoneNumberAssignmentByProfilePost) | **POST** /phoneNumberAssignmentByProfile | Assign Messaging Profile To Campaign
[**getAssignmentTaskStatusPhoneNumberAssignmentByProfileTaskIdGet**](BulkPhoneNumberCampaignsApi.md#getAssignmentTaskStatusPhoneNumberAssignmentByProfileTaskIdGet) | **GET** /phoneNumberAssignmentByProfile/{taskId} | Get Assignment Task Status
[**getPhoneNumberStatusPhoneNumberAssignmentByProfileTaskIdPhoneNumbersGet**](BulkPhoneNumberCampaignsApi.md#getPhoneNumberStatusPhoneNumberAssignmentByProfileTaskIdPhoneNumbersGet) | **GET** /phoneNumberAssignmentByProfile/{taskId}/phoneNumbers | Get Phone Number Status


# **assignMessagingProfileToCampaignPhoneNumberAssignmentByProfilePost**
> ResponseAssignMessagingProfileToCampaignPublicPhonenumberassignmentbyprofilePost assignMessagingProfileToCampaignPhoneNumberAssignmentByProfilePost(assignProfileToCampaignRequest)

This endpoint allows you to link all phone numbers associated with a Messaging Profile to a campaign. **Please note:** if you want to assign phone numbers to a campaign that you did not create with Telnyx 10DLC services, this endpoint allows that provided that you\'ve shared the campaign with Telnyx. In this case, only provide the parameter, `tcrCampaignId`, and not `campaignId`. In all other cases (where the campaign you\'re assigning was created with Telnyx 10DLC services), only provide `campaignId`, not `tcrCampaignId`.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BulkPhoneNumberCampaignsApi(configuration);

let body:.BulkPhoneNumberCampaignsApiAssignMessagingProfileToCampaignPhoneNumberAssignmentByProfilePostRequest = {
  // AssignProfileToCampaignRequest
  assignProfileToCampaignRequest: {
    messagingProfileId: "4001767e-ce0f-4cae-9d5f-0d5e636e7809",
    tcrCampaignId: "CWZTFH1",
    campaignId: "4b300178-131c-d902-d54e-72d90ba1620j",
  },
};

apiInstance.assignMessagingProfileToCampaignPhoneNumberAssignmentByProfilePost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assignProfileToCampaignRequest** | **AssignProfileToCampaignRequest**|  |


### Return type

**ResponseAssignMessagingProfileToCampaignPublicPhonenumberassignmentbyprofilePost**

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

# **getAssignmentTaskStatusPhoneNumberAssignmentByProfileTaskIdGet**
> AssignmentTaskStatusResponse getAssignmentTaskStatusPhoneNumberAssignmentByProfileTaskIdGet()

Check the status of the task associated with assigning all phone numbers on a messaging profile to a campaign by `taskId`.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BulkPhoneNumberCampaignsApi(configuration);

let body:.BulkPhoneNumberCampaignsApiGetAssignmentTaskStatusPhoneNumberAssignmentByProfileTaskIdGetRequest = {
  // string
  taskId: "taskId_example",
};

apiInstance.getAssignmentTaskStatusPhoneNumberAssignmentByProfileTaskIdGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **taskId** | [**string**] |  | defaults to undefined


### Return type

**AssignmentTaskStatusResponse**

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

# **getPhoneNumberStatusPhoneNumberAssignmentByProfileTaskIdPhoneNumbersGet**
> PhoneNumberStatusResponsePaginated getPhoneNumberStatusPhoneNumberAssignmentByProfileTaskIdPhoneNumbersGet()

Check the status of the individual phone number/campaign assignments associated with the supplied `taskId`.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BulkPhoneNumberCampaignsApi(configuration);

let body:.BulkPhoneNumberCampaignsApiGetPhoneNumberStatusPhoneNumberAssignmentByProfileTaskIdPhoneNumbersGetRequest = {
  // string
  taskId: "taskId_example",
  // any (optional)
  recordsPerPage: null,
  // any (optional)
  page: null,
};

apiInstance.getPhoneNumberStatusPhoneNumberAssignmentByProfileTaskIdPhoneNumbersGet(body).then((data:any) => {
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

**PhoneNumberStatusResponsePaginated**

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


