# .VerifyApi

All URIs are relative to *https://api.telnyx.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createVerificationCall**](VerifyApi.md#createVerificationCall) | **POST** /verifications/call | Trigger a Call verification
[**createVerificationFlashcall**](VerifyApi.md#createVerificationFlashcall) | **POST** /verifications/flashcall | Trigger a Flash call verification
[**createVerificationPSD2**](VerifyApi.md#createVerificationPSD2) | **POST** /verifications/psd2 | Trigger a PSD2 verification
[**createVerificationSMS**](VerifyApi.md#createVerificationSMS) | **POST** /verifications/sms | Trigger a SMS verification
[**createVerificationWhatsapp**](VerifyApi.md#createVerificationWhatsapp) | **POST** /verifications/whatsapp | Trigger a Whatsapp verification
[**createVerifyProfile**](VerifyApi.md#createVerifyProfile) | **POST** /verify_profiles | Create a Verify profile
[**deleteVerifyProfile**](VerifyApi.md#deleteVerifyProfile) | **DELETE** /verify_profiles/{verify_profile_id} | Delete a Verify profile
[**listVerifications**](VerifyApi.md#listVerifications) | **GET** /verifications/by_phone_number/{phone_number} | List verifications by phone number
[**listVerifyProfiles**](VerifyApi.md#listVerifyProfiles) | **GET** /verify_profiles | List all Verify profiles
[**retrieveVerification**](VerifyApi.md#retrieveVerification) | **GET** /verifications/{verification_id} | Retrieve a verification
[**retrieveVerifyProfile**](VerifyApi.md#retrieveVerifyProfile) | **GET** /verify_profiles/{verify_profile_id} | Retrieve a Verify profile
[**updateVerifyProfile**](VerifyApi.md#updateVerifyProfile) | **PATCH** /verify_profiles/{verify_profile_id} | Update a Verify profile
[**verifyVerificationCode**](VerifyApi.md#verifyVerificationCode) | **POST** /verifications/by_phone_number/{phone_number}/actions/verify | Submit a verification code. Deprecation notice: &#x60;verify_profile_id\&#39; is now a mandatory field. The sunset date for this change is 2022-04-02 00:00:00.


# **createVerificationCall**
> CreateVerificationResponse createVerificationCall(createVerificationRequestCall)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .VerifyApi(configuration);

let body:.VerifyApiCreateVerificationCallRequest = {
  // CreateVerificationRequestCall
  createVerificationRequestCall: {
    phoneNumber: "+13035551234",
    verifyProfileId: "12ade33a-21c0-473b-b055-b3c836e1c292",
    timeoutSecs: 300,
    callTimeoutSecs: 30,
  },
};

apiInstance.createVerificationCall(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createVerificationRequestCall** | **CreateVerificationRequestCall**|  |


### Return type

**CreateVerificationResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Expected verifications response to a valid request. |  -  |
**400** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createVerificationFlashcall**
> CreateVerificationResponse createVerificationFlashcall(createVerificationRequestFlashcall)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .VerifyApi(configuration);

let body:.VerifyApiCreateVerificationFlashcallRequest = {
  // CreateVerificationRequestFlashcall
  createVerificationRequestFlashcall: {
    phoneNumber: "+13035551234",
    verifyProfileId: "12ade33a-21c0-473b-b055-b3c836e1c292",
    timeoutSecs: 300,
  },
};

apiInstance.createVerificationFlashcall(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createVerificationRequestFlashcall** | **CreateVerificationRequestFlashcall**|  |


### Return type

**CreateVerificationResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Expected verifications response to a valid request. |  -  |
**400** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createVerificationPSD2**
> CreateVerificationResponse createVerificationPSD2(createVerificationRequestPSD2)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .VerifyApi(configuration);

let body:.VerifyApiCreateVerificationPSD2Request = {
  // CreateVerificationRequestPSD2
  createVerificationRequestPSD2: {
    phoneNumber: "+13035551234",
    verifyProfileId: "12ade33a-21c0-473b-b055-b3c836e1c292",
    currency: "USD",
    amount: "99.99",
    payee: "Acme Corp Inc. LTD",
    timeoutSecs: 300,
  },
};

apiInstance.createVerificationPSD2(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createVerificationRequestPSD2** | **CreateVerificationRequestPSD2**|  |


### Return type

**CreateVerificationResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Expected verifications response to a valid request. |  -  |
**400** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createVerificationSMS**
> CreateVerificationResponse createVerificationSMS(createVerificationRequestSMS)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .VerifyApi(configuration);

let body:.VerifyApiCreateVerificationSMSRequest = {
  // CreateVerificationRequestSMS
  createVerificationRequestSMS: {
    phoneNumber: "+13035551234",
    verifyProfileId: "12ade33a-21c0-473b-b055-b3c836e1c292",
    timeoutSecs: 300,
  },
};

apiInstance.createVerificationSMS(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createVerificationRequestSMS** | **CreateVerificationRequestSMS**|  |


### Return type

**CreateVerificationResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Expected verifications response to a valid request. |  -  |
**400** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createVerificationWhatsapp**
> CreateVerificationResponse createVerificationWhatsapp(createVerificationRequestWhatsapp)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .VerifyApi(configuration);

let body:.VerifyApiCreateVerificationWhatsappRequest = {
  // CreateVerificationRequestWhatsapp
  createVerificationRequestWhatsapp: {
    phoneNumber: "+13035551234",
    verifyProfileId: "12ade33a-21c0-473b-b055-b3c836e1c292",
    timeoutSecs: 300,
  },
};

apiInstance.createVerificationWhatsapp(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createVerificationRequestWhatsapp** | **CreateVerificationRequestWhatsapp**|  |


### Return type

**CreateVerificationResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Expected verifications response to a valid request. |  -  |
**400** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createVerifyProfile**
> VerifyProfileResponseDataWrapper createVerifyProfile(createVerifyProfileRequest)

Creates a new Verify profile to associate verifications with.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .VerifyApi(configuration);

let body:.VerifyApiCreateVerifyProfileRequest = {
  // CreateVerifyProfileRequest
  createVerifyProfileRequest: {
    name: "Test Profile",
    webhookUrl: "http://example.com/webhook",
    webhookFailoverUrl: "http://example.com/webhook/failover",
    sms: {
      messagingEnabled: true,
      rcsEnabled: true,
      messagingTemplate: "Hello, this is the Acme Inc verification code you requested: {code}.",
      defaultVerificationTimeoutSecs: 300,
      vsmsEnabled: true,
    },
    psd2: {
      defaultVerificationTimeoutSecs: 300,
    },
    whatsapp: {
      defaultVerificationTimeoutSecs: 300,
      appName: "Example Secure App",
    },
    call: {
      msgTemplate: "Hello, this is the Acme Inc verification code you requested: {code}.",
      defaultVerificationTimeoutSecs: 300,
      defaultCallTimeoutSecs: 30,
    },
    flashcall: {
      defaultVerificationTimeoutSecs: 300,
    },
    language: "en-US",
  },
};

apiInstance.createVerifyProfile(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createVerifyProfileRequest** | **CreateVerifyProfileRequest**|  |


### Return type

**VerifyProfileResponseDataWrapper**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Expected Verify profile response to a valid request. |  -  |
**400** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteVerifyProfile**
> VerifyProfileResponseDataWrapper deleteVerifyProfile()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .VerifyApi(configuration);

let body:.VerifyApiDeleteVerifyProfileRequest = {
  // string | The identifier of the Verify profile to delete.
  verifyProfileId: "12ade33a-21c0-473b-b055-b3c836e1c292",
};

apiInstance.deleteVerifyProfile(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **verifyProfileId** | [**string**] | The identifier of the Verify profile to delete. | defaults to undefined


### Return type

**VerifyProfileResponseDataWrapper**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Expected Verify profile response to a valid request. |  -  |
**400** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listVerifications**
> ListVerificationsResponse listVerifications()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .VerifyApi(configuration);

let body:.VerifyApiListVerificationsRequest = {
  // string | The phone number associated with the verifications to retrieve.
  phoneNumber: "+13035551234",
};

apiInstance.listVerifications(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **phoneNumber** | [**string**] | The phone number associated with the verifications to retrieve. | defaults to undefined


### Return type

**ListVerificationsResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Expected verifications response to a valid request. |  -  |
**400** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listVerifyProfiles**
> ListVerifyProfilesResponse listVerifyProfiles()

Gets a paginated list of Verify profiles.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .VerifyApi(configuration);

let body:.VerifyApiListVerifyProfilesRequest = {
  // string (optional)
  filterName: "filter[name]_example",
  // number (optional)
  pageSize: 25,
  // number (optional)
  pageNumber: 1,
};

apiInstance.listVerifyProfiles(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filterName** | [**string**] |  | (optional) defaults to undefined
 **pageSize** | [**number**] |  | (optional) defaults to 25
 **pageNumber** | [**number**] |  | (optional) defaults to 1


### Return type

**ListVerifyProfilesResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Expected Verify profile response to a valid request. |  -  |
**400** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **retrieveVerification**
> RetrieveVerificationResponse retrieveVerification()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .VerifyApi(configuration);

let body:.VerifyApiRetrieveVerificationRequest = {
  // string | The identifier of the verification to retrieve.
  verificationId: "12ade33a-21c0-473b-b055-b3c836e1c292",
};

apiInstance.retrieveVerification(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **verificationId** | [**string**] | The identifier of the verification to retrieve. | defaults to undefined


### Return type

**RetrieveVerificationResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Expected verifications response to a valid request. |  -  |
**400** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **retrieveVerifyProfile**
> VerifyProfileResponseDataWrapper retrieveVerifyProfile()

Gets a single Verify profile.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .VerifyApi(configuration);

let body:.VerifyApiRetrieveVerifyProfileRequest = {
  // string | The identifier of the Verify profile to retrieve.
  verifyProfileId: "12ade33a-21c0-473b-b055-b3c836e1c292",
};

apiInstance.retrieveVerifyProfile(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **verifyProfileId** | [**string**] | The identifier of the Verify profile to retrieve. | defaults to undefined


### Return type

**VerifyProfileResponseDataWrapper**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Expected Verify profile response to a valid request. |  -  |
**400** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateVerifyProfile**
> VerifyProfileResponseDataWrapper updateVerifyProfile(updateVerifyProfileRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .VerifyApi(configuration);

let body:.VerifyApiUpdateVerifyProfileRequest = {
  // string | The identifier of the Verify profile to update.
  verifyProfileId: "12ade33a-21c0-473b-b055-b3c836e1c292",
  // UpdateVerifyProfileRequest
  updateVerifyProfileRequest: {
    name: "Test Profile",
    webhookUrl: "http://example.com/webhook",
    webhookFailoverUrl: "http://example.com/webhook/failover",
    sms: {
      messagingEnabled: true,
      rcsEnabled: true,
      messagingTemplate: "Hello, this is the Acme Inc verification code you requested: {code}.",
      defaultVerificationTimeoutSecs: 300,
      vsmsEnabled: true,
    },
    psd2: {
      defaultVerificationTimeoutSecs: 300,
    },
    whatsapp: {
      defaultVerificationTimeoutSecs: 300,
      appName: "Example Secure App",
    },
    call: {
      msgTemplate: "Hello, this is the Acme Inc verification code you requested: {code}.",
      defaultVerificationTimeoutSecs: 300,
      defaultCallTimeoutSecs: 30,
    },
    flashcall: {
      defaultVerificationTimeoutSecs: 300,
    },
    language: "en-US",
  },
};

apiInstance.updateVerifyProfile(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateVerifyProfileRequest** | **UpdateVerifyProfileRequest**|  |
 **verifyProfileId** | [**string**] | The identifier of the Verify profile to update. | defaults to undefined


### Return type

**VerifyProfileResponseDataWrapper**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Expected Verify profile response to a valid request. |  -  |
**400** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **verifyVerificationCode**
> VerifyVerificationCodeResponse verifyVerificationCode(verifyVerificationCodeRequest)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .VerifyApi(configuration);

let body:.VerifyApiVerifyVerificationCodeRequest = {
  // string | The phone number associated with the verification code being verified.
  phoneNumber: "+13035551234",
  // VerifyVerificationCodeRequest
  verifyVerificationCodeRequest: {
    code: "17686",
    verifyProfileId: "12ade33a-21c0-473b-b055-b3c836e1c292",
  },
};

apiInstance.verifyVerificationCode(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **verifyVerificationCodeRequest** | **VerifyVerificationCodeRequest**|  |
 **phoneNumber** | [**string**] | The phone number associated with the verification code being verified. | defaults to undefined


### Return type

**VerifyVerificationCodeResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Expected verify response to a valid request. |  -  |
**400** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


