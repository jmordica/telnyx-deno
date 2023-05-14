# .VerifiedCallsDisplayProfileApi

All URIs are relative to *https://api.telnyx.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createVerifiedCallsDisplayProfile**](VerifiedCallsDisplayProfileApi.md#createVerifiedCallsDisplayProfile) | **POST** /verified_calls_display_profiles | Creates a Verified Calls Display Profile
[**createVerifiedCallsDisplayProfileVerificationRequest**](VerifiedCallsDisplayProfileApi.md#createVerifiedCallsDisplayProfileVerificationRequest) | **POST** /verified_calls_display_profiles/{id}/verification_request | Creates a Verification Request
[**deleteVerifiedCallsDisplayProfile**](VerifiedCallsDisplayProfileApi.md#deleteVerifiedCallsDisplayProfile) | **DELETE** /verified_calls_display_profiles/{id} | Deletes the Verified Calls Display Profile
[**displayVerifiedCallsDisplayProfile**](VerifiedCallsDisplayProfileApi.md#displayVerifiedCallsDisplayProfile) | **GET** /verified_calls_display_profiles/{id} | Display the Verified Calls Display Profile
[**listVerifiedCallsDisplayProfiles**](VerifiedCallsDisplayProfileApi.md#listVerifiedCallsDisplayProfiles) | **GET** /verified_calls_display_profiles | Lists the Verified Calls Display Profiles owned by the current user/organization
[**updateVerifiedCallsDisplayProfile**](VerifiedCallsDisplayProfileApi.md#updateVerifiedCallsDisplayProfile) | **PATCH** /verified_calls_display_profiles/{id} | Update a Verified Calls Display Profile


# **createVerifiedCallsDisplayProfile**
> ShowVerifiedCallsDisplayProfileResponse createVerifiedCallsDisplayProfile(createVerifiedCallsDisplayProfileRequest)

Creates a Verified Calls Display Profile associated with the given Business Identity

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .VerifiedCallsDisplayProfileApi(configuration);

let body:.VerifiedCallsDisplayProfileApiCreateVerifiedCallsDisplayProfileRequest = {
  // CreateVerifiedCallsDisplayProfileRequest
  createVerifiedCallsDisplayProfileRequest: {
    businessIdentityId: "c6feda4e-6501-4db9-a21f-665e5b4ce2ba",
    name: "Okta",
  },
};

apiInstance.createVerifiedCallsDisplayProfile(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createVerifiedCallsDisplayProfileRequest** | **CreateVerifiedCallsDisplayProfileRequest**|  |


### Return type

**ShowVerifiedCallsDisplayProfileResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successful response with a Verified Calls Display Profile. |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createVerifiedCallsDisplayProfileVerificationRequest**
> void createVerifiedCallsDisplayProfileVerificationRequest()

Starts a new Verified Calls Display Profile verification process.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .VerifiedCallsDisplayProfileApi(configuration);

let body:.VerifiedCallsDisplayProfileApiCreateVerifiedCallsDisplayProfileVerificationRequestRequest = {
  // string | Identifies the Verified Calls Display Profile
  id: "id_example",
};

apiInstance.createVerifiedCallsDisplayProfileVerificationRequest(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Identifies the Verified Calls Display Profile | defaults to undefined


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
**201** | The Verification Request was issued. |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteVerifiedCallsDisplayProfile**
> ShowVerifiedCallsDisplayProfileResponse deleteVerifiedCallsDisplayProfile()

Deletes the Verified Calls Display Profile. This action will fail if any verification requests have been made for this Verified Calls Display Profile. Please contact support@telnyx.com in case you want to delete a Verified Calls Display Profile in that situation.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .VerifiedCallsDisplayProfileApi(configuration);

let body:.VerifiedCallsDisplayProfileApiDeleteVerifiedCallsDisplayProfileRequest = {
  // string | Identifies the Verified Calls Display Profile
  id: "id_example",
};

apiInstance.deleteVerifiedCallsDisplayProfile(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Identifies the Verified Calls Display Profile | defaults to undefined


### Return type

**ShowVerifiedCallsDisplayProfileResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response with a Verified Calls Display Profile. |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **displayVerifiedCallsDisplayProfile**
> ShowVerifiedCallsDisplayProfileResponse displayVerifiedCallsDisplayProfile()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .VerifiedCallsDisplayProfileApi(configuration);

let body:.VerifiedCallsDisplayProfileApiDisplayVerifiedCallsDisplayProfileRequest = {
  // string | Identifies the Verified Calls Display Profile
  id: "id_example",
};

apiInstance.displayVerifiedCallsDisplayProfile(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Identifies the Verified Calls Display Profile | defaults to undefined


### Return type

**ShowVerifiedCallsDisplayProfileResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response with a Verified Calls Display Profile. |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listVerifiedCallsDisplayProfiles**
> ListVerifiedCallsDisplayProfilesResponse listVerifiedCallsDisplayProfiles()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .VerifiedCallsDisplayProfileApi(configuration);

let body:.VerifiedCallsDisplayProfileApiListVerifiedCallsDisplayProfilesRequest = {
  // number | The page number to load (optional)
  pageNumber: 1,
  // number | The size of the page (optional)
  pageSize: 20,
};

apiInstance.listVerifiedCallsDisplayProfiles(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pageNumber** | [**number**] | The page number to load | (optional) defaults to 1
 **pageSize** | [**number**] | The size of the page | (optional) defaults to 20


### Return type

**ListVerifiedCallsDisplayProfilesResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response with a list of Verified Calls Display Profiles. |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateVerifiedCallsDisplayProfile**
> void updateVerifiedCallsDisplayProfile(body)

Update an existing Verified Calls Display Profile and allows adding/removing nested Call Reasons and Phone Numbers. Different attributes can be updated depending on the Verified Calls Display Profile\'s status: For the VERIFICATION_STATE_PENDING status, no fields can be updated. For the VERIFICATION_STATE_VERIFIED status, it is allowed only to add/remove Call Reaons and Phone Numbers. For the other statuses, all fields can be updated. All existing Call Reasons and Phone Numbers must be sent during the request, or the update will fail.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .VerifiedCallsDisplayProfileApi(configuration);

let body:.VerifiedCallsDisplayProfileApiUpdateVerifiedCallsDisplayProfileRequest = {
  // string | Identifies the Verified Calls Display Profile
  id: "id_example",
  // any
  body: {},
};

apiInstance.updateVerifiedCallsDisplayProfile(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **any**|  |
 **id** | [**string**] | Identifies the Verified Calls Display Profile | defaults to undefined


### Return type

**void**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Verified Calls Display Profile was updated. |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


