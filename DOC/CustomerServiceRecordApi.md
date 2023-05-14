# .CustomerServiceRecordApi

All URIs are relative to *https://api.telnyx.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createCustomerServiceRecord**](CustomerServiceRecordApi.md#createCustomerServiceRecord) | **POST** /customer_service_records | Create a customer service record
[**getCustomerServiceRecord**](CustomerServiceRecordApi.md#getCustomerServiceRecord) | **GET** /customer_service_records/{customer_service_record_id} | Get a customer service record
[**verifyPhoneNumberCoverage**](CustomerServiceRecordApi.md#verifyPhoneNumberCoverage) | **POST** /customer_service_records/phone_number_coverages | Verify CSR phone number coverage


# **createCustomerServiceRecord**
> any createCustomerServiceRecord(UNKNOWN_BASE_TYPE)

Create a new customer service record for the provided phone number.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CustomerServiceRecordApi(configuration);

let body:.CustomerServiceRecordApiCreateCustomerServiceRecordRequest = {
  // UNKNOWN_BASE_TYPE
  UNKNOWN_BASE_TYPE: {
    phoneNumber: "+1234567890",
    webhookUrl: "https://example.com/webhook",
    additionalData: {
      name: "Entity Inc.",
      authorizedPersonName: "John Doe",
      pin: "1234",
      accountNumber: "123456789",
      customerCode: "123456789",
      addressLine1: "123 Main St",
      city: "New York",
      state: "NY",
      zipCode: "10001",
      billingPhoneNumber: "+12065551212",
    },
  },
};

apiInstance.createCustomerServiceRecord(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **UNKNOWN_BASE_TYPE** | **UNKNOWN_BASE_TYPE**|  |


### Return type

**any**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successful Response |  -  |
**401** | The required authentication headers were either invalid or not included in the request. |  -  |
**403** | You do not have permission to perform the requested action on the specified resource or resources. |  -  |
**422** | Unprocessable entity. Check the \&#39;detail\&#39; field in response for details. |  -  |
**500** | An unexpected error occurred. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getCustomerServiceRecord**
> GetCustomerServiceRecord201Response getCustomerServiceRecord()

Get a specific customer service record.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CustomerServiceRecordApi(configuration);

let body:.CustomerServiceRecordApiGetCustomerServiceRecordRequest = {
  // string | The ID of the customer service record
  customerServiceRecordId: "customer_service_record_id_example",
};

apiInstance.getCustomerServiceRecord(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerServiceRecordId** | [**string**] | The ID of the customer service record | defaults to undefined


### Return type

**GetCustomerServiceRecord201Response**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successful Response |  -  |
**401** | The required authentication headers were either invalid or not included in the request. |  -  |
**403** | You do not have permission to perform the requested action on the specified resource or resources. |  -  |
**404** | Resource not found |  -  |
**500** | An unexpected error occurred. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **verifyPhoneNumberCoverage**
> VerifyPhoneNumberCoverage201Response verifyPhoneNumberCoverage(verifyPhoneNumberCoverageRequest)

Verify the coverage for a list of phone numbers.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CustomerServiceRecordApi(configuration);

let body:.CustomerServiceRecordApiVerifyPhoneNumberCoverageRequest = {
  // VerifyPhoneNumberCoverageRequest
  verifyPhoneNumberCoverageRequest: {
    phoneNumbers: [
      "+1234567890",
    ],
  },
};

apiInstance.verifyPhoneNumberCoverage(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **verifyPhoneNumberCoverageRequest** | **VerifyPhoneNumberCoverageRequest**|  |


### Return type

**VerifyPhoneNumberCoverage201Response**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successful Response |  -  |
**401** | The required authentication headers were either invalid or not included in the request. |  -  |
**403** | You do not have permission to perform the requested action on the specified resource or resources. |  -  |
**422** | Unprocessable entity. Check the \&#39;detail\&#39; field in response for details. |  -  |
**500** | An unexpected error occurred. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


