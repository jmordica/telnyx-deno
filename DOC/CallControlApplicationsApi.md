# .CallControlApplicationsApi

All URIs are relative to *https://api.telnyx.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createCallControlApplication**](CallControlApplicationsApi.md#createCallControlApplication) | **POST** /call_control_applications | Create a call control application
[**deleteCallControlApplication**](CallControlApplicationsApi.md#deleteCallControlApplication) | **DELETE** /call_control_applications/{id} | Delete a call control application
[**listCallControlApplications**](CallControlApplicationsApi.md#listCallControlApplications) | **GET** /call_control_applications | List call control applications
[**retrieveCallControlApplication**](CallControlApplicationsApi.md#retrieveCallControlApplication) | **GET** /call_control_applications/{id} | Retrieve a call control application
[**updateCallControlApplication**](CallControlApplicationsApi.md#updateCallControlApplication) | **PATCH** /call_control_applications/{id} | Update a call control application


# **createCallControlApplication**
> CallControlApplicationResponse createCallControlApplication(createCallControlApplicationRequest)

Create a call control application.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CallControlApplicationsApi(configuration);

let body:.CallControlApplicationsApiCreateCallControlApplicationRequest = {
  // CreateCallControlApplicationRequest | Create call control application request.
  createCallControlApplicationRequest: {
    applicationName: "call-router",
    webhookEventUrl: "https://example.com",
    active: true,
    anchorsiteOverride: "Amsterdam, Netherlands",
    dtmfType: "Inband",
    firstCommandTimeout: true,
    firstCommandTimeoutSecs: 10,
    inbound: {
      channelLimit: 10,
      shakenStirEnabled: false,
      sipSubdomain: "example",
      sipSubdomainReceiveSettings: "only_my_connections",
    },
    outbound: {
      channelLimit: 10,
      outboundVoiceProfileId: "1293384261075731499",
    },
    webhookApiVersion: "1",
    webhookEventFailoverUrl: "https://failover.example.com",
    webhookTimeoutSecs: 25,
  },
};

apiInstance.createCallControlApplication(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createCallControlApplicationRequest** | **CreateCallControlApplicationRequest**| Create call control application request. |


### Return type

**CallControlApplicationResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successful response with details about a call control application. |  -  |
**422** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteCallControlApplication**
> CallControlApplicationResponse deleteCallControlApplication()

Deletes a call control application.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CallControlApplicationsApi(configuration);

let body:.CallControlApplicationsApiDeleteCallControlApplicationRequest = {
  // string | Identifies the resource.
  id: "1293384261075731499",
};

apiInstance.deleteCallControlApplication(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Identifies the resource. | defaults to undefined


### Return type

**CallControlApplicationResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response with details about a call control application. |  -  |
**401** | Unauthorized |  -  |
**404** | Resource not found |  -  |
**422** | Bad request |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listCallControlApplications**
> ListCallControlApplicationsResponse listCallControlApplications()

Return a list of call control applications.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CallControlApplicationsApi(configuration);

let body:.CallControlApplicationsApiListCallControlApplicationsRequest = {
  // number | The page number to load (optional)
  pageNumber: 1,
  // number | The size of the page (optional)
  pageSize: 20,
  // string | If present, applications with <code>application_name</code> containing the given value will be returned. Matching is not case-sensitive. Requires at least three characters. (optional)
  filterApplicationNameContains: "null",
  // string | Identifies the associated outbound voice profile. (optional)
  filterOutboundVoiceProfileId: "1293384261075731499",
  // 'created_at' | 'connection_name' | 'active' | Specifies the sort order for results. By default sorting direction is ascending. To have the results sorted in descending order add the <code> -</code> prefix.<br/><br/> That is: <ul>   <li>     <code>connection_name</code>: sorts the result by the     <code>connection_name</code> field in ascending order.   </li>    <li>     <code>-connection_name</code>: sorts the result by the     <code>connection_name</code> field in descending order.   </li> </ul> <br/> If not given, results are sorted by <code>created_at</code> in descending order. (optional)
  sort: "connection_name",
};

apiInstance.listCallControlApplications(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pageNumber** | [**number**] | The page number to load | (optional) defaults to 1
 **pageSize** | [**number**] | The size of the page | (optional) defaults to 20
 **filterApplicationNameContains** | [**string**] | If present, applications with &lt;code&gt;application_name&lt;/code&gt; containing the given value will be returned. Matching is not case-sensitive. Requires at least three characters. | (optional) defaults to 'null'
 **filterOutboundVoiceProfileId** | [**string**] | Identifies the associated outbound voice profile. | (optional) defaults to undefined
 **sort** | [**&#39;created_at&#39; | &#39;connection_name&#39; | &#39;active&#39;**]**Array<&#39;created_at&#39; &#124; &#39;connection_name&#39; &#124; &#39;active&#39;>** | Specifies the sort order for results. By default sorting direction is ascending. To have the results sorted in descending order add the &lt;code&gt; -&lt;/code&gt; prefix.&lt;br/&gt;&lt;br/&gt; That is: &lt;ul&gt;   &lt;li&gt;     &lt;code&gt;connection_name&lt;/code&gt;: sorts the result by the     &lt;code&gt;connection_name&lt;/code&gt; field in ascending order.   &lt;/li&gt;    &lt;li&gt;     &lt;code&gt;-connection_name&lt;/code&gt;: sorts the result by the     &lt;code&gt;connection_name&lt;/code&gt; field in descending order.   &lt;/li&gt; &lt;/ul&gt; &lt;br/&gt; If not given, results are sorted by &lt;code&gt;created_at&lt;/code&gt; in descending order. | (optional) defaults to 'created_at'


### Return type

**ListCallControlApplicationsResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response with a list of call control applications. |  -  |
**400** | Bad request |  -  |
**401** | Unauthorized |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **retrieveCallControlApplication**
> CallControlApplicationResponse retrieveCallControlApplication()

Retrieves the details of an existing call control application.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CallControlApplicationsApi(configuration);

let body:.CallControlApplicationsApiRetrieveCallControlApplicationRequest = {
  // string | Identifies the resource.
  id: "1293384261075731499",
};

apiInstance.retrieveCallControlApplication(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Identifies the resource. | defaults to undefined


### Return type

**CallControlApplicationResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response with details about a call control application. |  -  |
**401** | Unauthorized |  -  |
**404** | Resource not found |  -  |
**422** | Bad request |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateCallControlApplication**
> CallControlApplicationResponse updateCallControlApplication(updateCallControlApplicationRequest)

Updates settings of an existing call control application.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CallControlApplicationsApi(configuration);

let body:.CallControlApplicationsApiUpdateCallControlApplicationRequest = {
  // string | Identifies the resource.
  id: "1293384261075731499",
  // UpdateCallControlApplicationRequest | Update call control application request.
  updateCallControlApplicationRequest: {
    applicationName: "call-router",
    webhookEventUrl: "https://example.com",
    active: true,
    anchorsiteOverride: "Amsterdam, Netherlands",
    dtmfType: "Inband",
    firstCommandTimeout: true,
    firstCommandTimeoutSecs: 10,
    inbound: {
      channelLimit: 10,
      shakenStirEnabled: false,
      sipSubdomain: "example",
      sipSubdomainReceiveSettings: "only_my_connections",
    },
    outbound: {
      channelLimit: 10,
      outboundVoiceProfileId: "1293384261075731499",
    },
    webhookApiVersion: "1",
    webhookEventFailoverUrl: "https://failover.example.com",
    webhookTimeoutSecs: 25,
  },
};

apiInstance.updateCallControlApplication(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateCallControlApplicationRequest** | **UpdateCallControlApplicationRequest**| Update call control application request. |
 **id** | [**string**] | Identifies the resource. | defaults to undefined


### Return type

**CallControlApplicationResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response with details about a call control application. |  -  |
**401** | Unauthorized |  -  |
**404** | Resource not found |  -  |
**422** | Bad request |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


