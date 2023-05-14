# .TeXMLRESTCommandsApi

All URIs are relative to *https://api.telnyx.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createTeXMLSecret**](TeXMLRESTCommandsApi.md#createTeXMLSecret) | **POST** /texml/secrets | Create a TeXML secret
[**initiateTeXMLCall**](TeXMLRESTCommandsApi.md#initiateTeXMLCall) | **POST** /texml/calls/{application_id} | Initiate an outbound call
[**updateTeXMLCall**](TeXMLRESTCommandsApi.md#updateTeXMLCall) | **POST** /texml/calls/{call_sid}/update | Update call


# **createTeXMLSecret**
> CreateTeXMLSecretRequest createTeXMLSecret(createTeXMLSecretRequest)

Create a TeXML secret which can be later used as a Dynamic Parameter for TeXML when using Mustache Templates in your TeXML. In your TeXML you will be able to use your secret name, and this name will be replaced by the actual secret value when processing the TeXML on Telnyx side.  The secrets are not visible in any logs.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TeXMLRESTCommandsApi(configuration);

let body:.TeXMLRESTCommandsApiCreateTeXMLSecretRequest = {
  // CreateTeXMLSecretRequest | Create TeXML secret request object
  createTeXMLSecretRequest: {
    name: "My Secret Name",
    value: "My Secret Value",
  },
};

apiInstance.createTeXMLSecret(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createTeXMLSecretRequest** | **CreateTeXMLSecretRequest**| Create TeXML secret request object |


### Return type

**CreateTeXMLSecretRequest**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successful response upon creating a TeXML secret. |  -  |
**422** | Unprocessable entity |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **initiateTeXMLCall**
> InitiateTeXMLCallResponse initiateTeXMLCall(initiateCallRequest)

Initiate an outbound TeXML call. Telnyx will request TeXML from the XML Request URL configured for the connection in the Mission Control Portal.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TeXMLRESTCommandsApi(configuration);

let body:.TeXMLRESTCommandsApiInitiateTeXMLCallRequest = {
  // string | The ID of the TeXML application used for the call.
  applicationId: "application_id_example",
  // InitiateCallRequest | Iniatiate Call request object
  initiateCallRequest: {
    to: "+16175551212",
    _from: "+16175551212",
    url: "https://www.example.com/instructions.xml",
    urlMethod: "GET",
    fallbackUrl: "https://www.example.com/instructions-fallback.xml",
    statusCallback: "https://www.example.com/callback",
    statusCallbackMethod: "GET",
    statusCallbackEvent: "iniated ringing",
  },
};

apiInstance.initiateTeXMLCall(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **initiateCallRequest** | **InitiateCallRequest**| Iniatiate Call request object |
 **applicationId** | [**string**] | The ID of the TeXML application used for the call. | defaults to undefined


### Return type

**InitiateTeXMLCallResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response upon initiating a TeXML call. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateTeXMLCall**
> TeXMLRESTCommandResponse updateTeXMLCall(updateCallRequest)

Update TeXML call. Please note that the keys present in the payload MUST BE formatted in CamelCase as specified in the example.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TeXMLRESTCommandsApi(configuration);

let body:.TeXMLRESTCommandsApiUpdateTeXMLCallRequest = {
  // string | The CallSid that identifies the call to update.
  callSid: "call_sid_example",
  // UpdateCallRequest | Update Call request object
  updateCallRequest: {
    status: "completed",
    url: "https://www.example.com/intruction-b.xml",
    method: "GET",
    fallbackUrl: "https://www.example.com/intruction-c.xml",
    fallbackMethod: "GET",
    statusCallback: "https://www.example.com/callback",
    statusCallbackMethod: "GET",
    texml: "<?xml version="1.0" encoding="UTF-8"?><Response><Say>Hello</Say></Response>",
  },
};

apiInstance.updateTeXMLCall(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateCallRequest** | **UpdateCallRequest**| Update Call request object |
 **callSid** | [**string**] | The CallSid that identifies the call to update. | defaults to undefined


### Return type

**TeXMLRESTCommandResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response upon updating a TeXML call. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


