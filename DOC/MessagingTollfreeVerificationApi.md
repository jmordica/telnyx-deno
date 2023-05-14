# .MessagingTollfreeVerificationApi

All URIs are relative to *https://api.telnyx.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getVerificationRequest**](MessagingTollfreeVerificationApi.md#getVerificationRequest) | **GET** /messaging_tollfree/verification/requests/{id} | Get Verification Request
[**listVerificationRequests**](MessagingTollfreeVerificationApi.md#listVerificationRequests) | **GET** /messaging_tollfree/verification/requests | List Verification Requests
[**submitVerificationRequest**](MessagingTollfreeVerificationApi.md#submitVerificationRequest) | **POST** /messaging_tollfree/verification/requests | Submit Verification Request
[**updateVerificationRequest**](MessagingTollfreeVerificationApi.md#updateVerificationRequest) | **PATCH** /messaging_tollfree/verification/requests/{id} | Update Verification Request


# **getVerificationRequest**
> VerificationRequestStatus getVerificationRequest()

Get a single verification request by its ID.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MessagingTollfreeVerificationApi(configuration);

let body:.MessagingTollfreeVerificationApiGetVerificationRequestRequest = {
  // string
  id: "id_example",
};

apiInstance.getVerificationRequest(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] |  | defaults to undefined


### Return type

**VerificationRequestStatus**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listVerificationRequests**
> PaginatedVerificationRequestStatus listVerificationRequests()

Get a list of previously-submitted tollfree verification requests

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MessagingTollfreeVerificationApi(configuration);

let body:.MessagingTollfreeVerificationApiListVerificationRequestsRequest = {
  // number
  page: 1.0,
  // number |          Request this many records per page          This value is automatically clamped if the provided value is too large.         
  pageSize: 1.0,
  // Date (optional)
  dateStart: new Date('1970-01-01T00:00:00.00Z'),
  // Date (optional)
  dateEnd: new Date('1970-01-01T00:00:00.00Z'),
  // TFVerificationStatus (optional)
  status: "Verified",
  // string (optional)
  phoneNumber: "phone_number_example",
};

apiInstance.listVerificationRequests(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | [**number**] |  | defaults to undefined
 **pageSize** | [**number**] |          Request this many records per page          This value is automatically clamped if the provided value is too large.          | defaults to undefined
 **dateStart** | [**Date**] |  | (optional) defaults to undefined
 **dateEnd** | [**Date**] |  | (optional) defaults to undefined
 **status** | **TFVerificationStatus** |  | (optional) defaults to undefined
 **phoneNumber** | [**string**] |  | (optional) defaults to undefined


### Return type

**PaginatedVerificationRequestStatus**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **submitVerificationRequest**
> VerificationRequestEgress submitVerificationRequest(tFVerificationRequest)

Submit a new tollfree verification request

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MessagingTollfreeVerificationApi(configuration);

let body:.MessagingTollfreeVerificationApiSubmitVerificationRequestRequest = {
  // TFVerificationRequest
  tFVerificationRequest: {
    businessName: "Telnyx LLC",
    corporateWebsite: "http://example.com",
    businessAddr1: "311 W Superior St",
    businessAddr2: "121 W Superior St",
    businessCity: "Chicago",
    businessState: "Illinois",
    businessZip: "60654",
    businessContactFirstName: "John",
    businessContactLastName: "Doe",
    businessContactEmail: "email@example.com",
    businessContactPhone: "+18005550100",
    messageVolume: null,
    phoneNumbers: [
      {
        phoneNumber: "phoneNumber_example",
      },
    ],
    useCase: null,
    useCaseSummary: "This is a use case where Telnyx sends out 2FA codes to portal users to verify their identity in order to sign into the portal",
    productionMessageContent: "Your Telnyx OTP is XXXX",
    optInWorkflow: "User signs into the Telnyx portal, enters a number and is prompted to select whether they want to use 2FA verification for security purposes. If they've opted in a confirmation message is sent out to the handset",
    optInWorkflowImageURLs: [
      {
        url: "url_example",
      },
    ],
    additionalInformation: "This is for security purposes, blah blah blah",
    isvReseller: "Yes",
    webhookUrl: "http://example-webhook.com",
  },
};

apiInstance.submitVerificationRequest(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tFVerificationRequest** | **TFVerificationRequest**|  |


### Return type

**VerificationRequestEgress**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateVerificationRequest**
> VerificationRequestEgress updateVerificationRequest(tFVerificationRequest)

Update an existing tollfree verification request. This is particularly useful when there are pending customer actions to be taken.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MessagingTollfreeVerificationApi(configuration);

let body:.MessagingTollfreeVerificationApiUpdateVerificationRequestRequest = {
  // string
  id: "id_example",
  // TFVerificationRequest
  tFVerificationRequest: {
    businessName: "Telnyx LLC",
    corporateWebsite: "http://example.com",
    businessAddr1: "311 W Superior St",
    businessAddr2: "121 W Superior St",
    businessCity: "Chicago",
    businessState: "Illinois",
    businessZip: "60654",
    businessContactFirstName: "John",
    businessContactLastName: "Doe",
    businessContactEmail: "email@example.com",
    businessContactPhone: "+18005550100",
    messageVolume: null,
    phoneNumbers: [
      {
        phoneNumber: "phoneNumber_example",
      },
    ],
    useCase: null,
    useCaseSummary: "This is a use case where Telnyx sends out 2FA codes to portal users to verify their identity in order to sign into the portal",
    productionMessageContent: "Your Telnyx OTP is XXXX",
    optInWorkflow: "User signs into the Telnyx portal, enters a number and is prompted to select whether they want to use 2FA verification for security purposes. If they've opted in a confirmation message is sent out to the handset",
    optInWorkflowImageURLs: [
      {
        url: "url_example",
      },
    ],
    additionalInformation: "This is for security purposes, blah blah blah",
    isvReseller: "Yes",
    webhookUrl: "http://example-webhook.com",
  },
};

apiInstance.updateVerificationRequest(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tFVerificationRequest** | **TFVerificationRequest**|  |
 **id** | [**string**] |  | defaults to undefined


### Return type

**VerificationRequestEgress**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


