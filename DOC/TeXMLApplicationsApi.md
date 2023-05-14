# .TeXMLApplicationsApi

All URIs are relative to *https://api.telnyx.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createTexmlApplication**](TeXMLApplicationsApi.md#createTexmlApplication) | **POST** /texml_applications | Creates a TeXML Application
[**deleteTexmlApplication**](TeXMLApplicationsApi.md#deleteTexmlApplication) | **DELETE** /texml_applications/{id} | Deletes a TeXML Application
[**findTexmlApplications**](TeXMLApplicationsApi.md#findTexmlApplications) | **GET** /texml_applications | List all TeXML Applications
[**getTexmlApplication**](TeXMLApplicationsApi.md#getTexmlApplication) | **GET** /texml_applications/{id} | Retrieve a TeXML Application
[**updateTexmlApplication**](TeXMLApplicationsApi.md#updateTexmlApplication) | **PATCH** /texml_applications/{id} | Update a TeXML Application


# **createTexmlApplication**
> TexmlApplicationResponse createTexmlApplication(createTexmlApplicationRequest)

Creates a TeXML Application.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TeXMLApplicationsApi(configuration);

let body:.TeXMLApplicationsApiCreateTexmlApplicationRequest = {
  // CreateTexmlApplicationRequest | Parameters that can be set when creating a TeXML Application
  createTexmlApplicationRequest: {
    friendlyName: "call-router",
    active: false,
    anchorsiteOverride: "Amsterdam, Netherlands",
    dtmfType: "Inband",
    firstCommandTimeout: true,
    firstCommandTimeoutSecs: 10,
    voiceUrl: "https://example.com",
    voiceFallbackUrl: "https://fallback.example.com",
    voiceMethod: "get",
    statusCallback: "https://example.com",
    statusCallbackMethod: "get",
    inbound: {
      channelLimit: 10,
      sipSubdomain: "example",
      sipSubdomainReceiveSettings: "only_my_connections",
    },
    outbound: {
      channelLimit: 10,
      outboundVoiceProfileId: "1293384261075731499",
    },
  },
};

apiInstance.createTexmlApplication(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createTexmlApplicationRequest** | **CreateTexmlApplicationRequest**| Parameters that can be set when creating a TeXML Application |


### Return type

**TexmlApplicationResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successful response |  -  |
**422** | Bad request |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteTexmlApplication**
> TexmlApplicationResponse deleteTexmlApplication()

Deletes a TeXML Application.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TeXMLApplicationsApi(configuration);

let body:.TeXMLApplicationsApiDeleteTexmlApplicationRequest = {
  // string | Identifies the resource.
  id: "1293384261075731499",
};

apiInstance.deleteTexmlApplication(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Identifies the resource. | defaults to undefined


### Return type

**TexmlApplicationResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**401** | Unauthorized |  -  |
**404** | Resource not found |  -  |
**422** | Bad request |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **findTexmlApplications**
> GetAllTexmlApplicationsResponse findTexmlApplications()

Returns a list of your TeXML Applications.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TeXMLApplicationsApi(configuration);

let body:.TeXMLApplicationsApiFindTexmlApplicationsRequest = {
  // number | The page number to load (optional)
  pageNumber: 1,
  // number | The size of the page (optional)
  pageSize: 20,
  // string | If present, applications with <code>friendly_name</code> containing the given value will be returned. Matching is not case-sensitive. Requires at least three characters. (optional)
  filterFriendlyNameContains: "null",
  // string | Identifies the associated outbound voice profile. (optional)
  filterOutboundVoiceProfileId: "1293384261075731499",
  // 'created_at' | 'connection_name' | 'active' | Specifies the sort order for results. By default sorting direction is ascending. To have the results sorted in descending order add the <code> -</code> prefix.<br/><br/> That is: <ul>   <li>     <code>connection_name</code>: sorts the result by the     <code>connection_name</code> field in ascending order.   </li>    <li>     <code>-connection_name</code>: sorts the result by the     <code>connection_name</code> field in descending order.   </li> </ul> <br/> If not given, results are sorted by <code>created_at</code> in descending order. (optional)
  sort: "connection_name",
};

apiInstance.findTexmlApplications(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pageNumber** | [**number**] | The page number to load | (optional) defaults to 1
 **pageSize** | [**number**] | The size of the page | (optional) defaults to 20
 **filterFriendlyNameContains** | [**string**] | If present, applications with &lt;code&gt;friendly_name&lt;/code&gt; containing the given value will be returned. Matching is not case-sensitive. Requires at least three characters. | (optional) defaults to 'null'
 **filterOutboundVoiceProfileId** | [**string**] | Identifies the associated outbound voice profile. | (optional) defaults to undefined
 **sort** | [**&#39;created_at&#39; | &#39;connection_name&#39; | &#39;active&#39;**]**Array<&#39;created_at&#39; &#124; &#39;connection_name&#39; &#124; &#39;active&#39;>** | Specifies the sort order for results. By default sorting direction is ascending. To have the results sorted in descending order add the &lt;code&gt; -&lt;/code&gt; prefix.&lt;br/&gt;&lt;br/&gt; That is: &lt;ul&gt;   &lt;li&gt;     &lt;code&gt;connection_name&lt;/code&gt;: sorts the result by the     &lt;code&gt;connection_name&lt;/code&gt; field in ascending order.   &lt;/li&gt;    &lt;li&gt;     &lt;code&gt;-connection_name&lt;/code&gt;: sorts the result by the     &lt;code&gt;connection_name&lt;/code&gt; field in descending order.   &lt;/li&gt; &lt;/ul&gt; &lt;br/&gt; If not given, results are sorted by &lt;code&gt;created_at&lt;/code&gt; in descending order. | (optional) defaults to 'created_at'


### Return type

**GetAllTexmlApplicationsResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**400** | Bad request |  -  |
**401** | Unauthorized |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getTexmlApplication**
> TexmlApplicationResponse getTexmlApplication()

Retrieves the details of an existing TeXML Application.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TeXMLApplicationsApi(configuration);

let body:.TeXMLApplicationsApiGetTexmlApplicationRequest = {
  // string | Identifies the resource.
  id: "1293384261075731499",
};

apiInstance.getTexmlApplication(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Identifies the resource. | defaults to undefined


### Return type

**TexmlApplicationResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**401** | Unauthorized |  -  |
**404** | Resource not found |  -  |
**422** | Bad request |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateTexmlApplication**
> TexmlApplicationResponse updateTexmlApplication(updateTexmlApplicationRequest)

Updates settings of an existing TeXML Application.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TeXMLApplicationsApi(configuration);

let body:.TeXMLApplicationsApiUpdateTexmlApplicationRequest = {
  // string | Identifies the resource.
  id: "1293384261075731499",
  // UpdateTexmlApplicationRequest | Parameters that can be updated in a TeXML Application
  updateTexmlApplicationRequest: {
    friendlyName: "call-router",
    active: false,
    anchorsiteOverride: "Amsterdam, Netherlands",
    dtmfType: "Inband",
    firstCommandTimeout: true,
    firstCommandTimeoutSecs: 10,
    voiceUrl: "https://example.com",
    voiceFallbackUrl: "https://fallback.example.com",
    voiceMethod: "get",
    statusCallback: "https://example.com",
    statusCallbackMethod: "get",
    inbound: {
      channelLimit: 10,
      sipSubdomain: "example",
      sipSubdomainReceiveSettings: "only_my_connections",
    },
    outbound: {
      channelLimit: 10,
      outboundVoiceProfileId: "1293384261075731499",
    },
  },
};

apiInstance.updateTexmlApplication(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateTexmlApplicationRequest** | **UpdateTexmlApplicationRequest**| Parameters that can be updated in a TeXML Application |
 **id** | [**string**] | Identifies the resource. | defaults to undefined


### Return type

**TexmlApplicationResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**401** | Unauthorized |  -  |
**404** | Resource not found |  -  |
**422** | Bad request |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


