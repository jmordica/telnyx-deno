# .ProgrammableFaxApplicationsApi

All URIs are relative to *https://api.telnyx.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createFaxApplication**](ProgrammableFaxApplicationsApi.md#createFaxApplication) | **POST** /fax_applications | Creates a Fax Application
[**deleteFaxApplication**](ProgrammableFaxApplicationsApi.md#deleteFaxApplication) | **DELETE** /fax_applications/{id} | Deletes a Fax Application
[**getFaxApplication**](ProgrammableFaxApplicationsApi.md#getFaxApplication) | **GET** /fax_applications/{id} | Retrieve a Fax Application
[**listFaxApplications**](ProgrammableFaxApplicationsApi.md#listFaxApplications) | **GET** /fax_applications | List all Fax Applications
[**updateFaxApplication**](ProgrammableFaxApplicationsApi.md#updateFaxApplication) | **PATCH** /fax_applications/{id} | Update a Fax Application


# **createFaxApplication**
> FaxApplicationResponse createFaxApplication(createFaxApplicationRequest)

Creates a new Fax Application based on the parameters sent in the request. The application name and webhook URL are required. Once created, you can assign phone numbers to your application using the `/phone_numbers` endpoint.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProgrammableFaxApplicationsApi(configuration);

let body:.ProgrammableFaxApplicationsApiCreateFaxApplicationRequest = {
  // CreateFaxApplicationRequest | Parameters that can be set when creating a Fax Application
  createFaxApplicationRequest: {
    applicationName: "call-router",
    active: false,
    anchorsiteOverride: "Amsterdam, Netherlands",
    webhookEventUrl: "https://example.com",
    webhookEventFailoverUrl: "https://failover.example.com",
    webhookTimeoutSecs: 25,
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

apiInstance.createFaxApplication(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createFaxApplicationRequest** | **CreateFaxApplicationRequest**| Parameters that can be set when creating a Fax Application |


### Return type

**FaxApplicationResponse**

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

# **deleteFaxApplication**
> FaxApplicationResponse deleteFaxApplication()

Permanently deletes a Fax Application. Deletion may be prevented if the application is in use by phone numbers.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProgrammableFaxApplicationsApi(configuration);

let body:.ProgrammableFaxApplicationsApiDeleteFaxApplicationRequest = {
  // string | Identifies the resource.
  id: "1293384261075731499",
};

apiInstance.deleteFaxApplication(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Identifies the resource. | defaults to undefined


### Return type

**FaxApplicationResponse**

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

# **getFaxApplication**
> FaxApplicationResponse getFaxApplication()

Return the details of an existing Fax Application inside the \'data\' attribute of the response.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProgrammableFaxApplicationsApi(configuration);

let body:.ProgrammableFaxApplicationsApiGetFaxApplicationRequest = {
  // string | Identifies the resource.
  id: "1293384261075731499",
};

apiInstance.getFaxApplication(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Identifies the resource. | defaults to undefined


### Return type

**FaxApplicationResponse**

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

# **listFaxApplications**
> GetAllFaxApplicationsResponse listFaxApplications()

This endpoint returns a list of your Fax Applications inside the \'data\' attribute of the response. You can adjust which applications are listed by using filters. Fax Applications are used to configure how you send and receive faxes using the Programmable Fax API with Telnyx.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProgrammableFaxApplicationsApi(configuration);

let body:.ProgrammableFaxApplicationsApiListFaxApplicationsRequest = {
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

apiInstance.listFaxApplications(body).then((data:any) => {
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

**GetAllFaxApplicationsResponse**

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

# **updateFaxApplication**
> FaxApplicationResponse updateFaxApplication(updateFaxApplicationRequest)

Updates settings of an existing Fax Application based on the parameters of the request.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProgrammableFaxApplicationsApi(configuration);

let body:.ProgrammableFaxApplicationsApiUpdateFaxApplicationRequest = {
  // string | Identifies the resource.
  id: "1293384261075731499",
  // UpdateFaxApplicationRequest | Parameters to be updated for the Fax Application
  updateFaxApplicationRequest: {
    applicationName: "call-router",
    active: false,
    anchorsiteOverride: "Amsterdam, Netherlands",
    webhookEventUrl: "https://example.com",
    webhookEventFailoverUrl: "https://failover.example.com",
    webhookTimeoutSecs: 25,
    faxEmailRecipient: "user@example.com",
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

apiInstance.updateFaxApplication(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateFaxApplicationRequest** | **UpdateFaxApplicationRequest**| Parameters to be updated for the Fax Application |
 **id** | [**string**] | Identifies the resource. | defaults to undefined


### Return type

**FaxApplicationResponse**

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


