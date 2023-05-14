# .IPConnectionsApi

All URIs are relative to *https://api.telnyx.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createIpConnection**](IPConnectionsApi.md#createIpConnection) | **POST** /ip_connections | Create an Ip connection
[**deleteIpConnection**](IPConnectionsApi.md#deleteIpConnection) | **DELETE** /ip_connections/{id} | Delete an Ip connection
[**listIpConnections**](IPConnectionsApi.md#listIpConnections) | **GET** /ip_connections | List Ip connections
[**retrieveIpConnection**](IPConnectionsApi.md#retrieveIpConnection) | **GET** /ip_connections/{id} | Retrieve an Ip connection
[**updateIpConnection**](IPConnectionsApi.md#updateIpConnection) | **PATCH** /ip_connections/{id} | Update an Ip connection


# **createIpConnection**
> IpConnectionResponse createIpConnection(createIpConnectionRequest)

Creates an IP connection.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .IPConnectionsApi(configuration);

let body:.IPConnectionsApiCreateIpConnectionRequest = {
  // CreateIpConnectionRequest | Parameters that can be defined during IP connection creation
  createIpConnectionRequest: null,
};

apiInstance.createIpConnection(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createIpConnectionRequest** | **CreateIpConnectionRequest**| Parameters that can be defined during IP connection creation |


### Return type

**IpConnectionResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successful response with details about an IP connection. |  -  |
**422** | Bad request |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteIpConnection**
> IpConnectionResponse deleteIpConnection()

Deletes an existing IP connection.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .IPConnectionsApi(configuration);

let body:.IPConnectionsApiDeleteIpConnectionRequest = {
  // string | Identifies the type of resource.
  id: "id_example",
};

apiInstance.deleteIpConnection(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Identifies the type of resource. | defaults to undefined


### Return type

**IpConnectionResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response with details about an IP connection. |  -  |
**401** | Unauthorized |  -  |
**404** | Resource not found |  -  |
**422** | Bad request |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listIpConnections**
> ListIpConnectionsResponse listIpConnections()

Returns a list of your IP connections.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .IPConnectionsApi(configuration);

let body:.IPConnectionsApiListIpConnectionsRequest = {
  // number | The page number to load (optional)
  pageNumber: 1,
  // number | The size of the page (optional)
  pageSize: 20,
  // string | If present, connections with <code>connection_name</code> containing the given value will be returned. Matching is not case-sensitive. Requires at least three characters. (optional)
  filterConnectionNameContains: "filter[connection_name][contains]_example",
  // string | Identifies the associated outbound voice profile. (optional)
  filterOutboundOutboundVoiceProfileId: "1293384261075731499",
  // 'created_at' | 'connection_name' | 'active' | Specifies the sort order for results. By default sorting direction is ascending. To have the results sorted in descending order add the <code> -</code> prefix.<br/><br/> That is: <ul>   <li>     <code>connection_name</code>: sorts the result by the     <code>connection_name</code> field in ascending order.   </li>    <li>     <code>-connection_name</code>: sorts the result by the     <code>connection_name</code> field in descending order.   </li> </ul> <br/> If not given, results are sorted by <code>created_at</code> in descending order. (optional)
  sort: "connection_name",
};

apiInstance.listIpConnections(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pageNumber** | [**number**] | The page number to load | (optional) defaults to 1
 **pageSize** | [**number**] | The size of the page | (optional) defaults to 20
 **filterConnectionNameContains** | [**string**] | If present, connections with &lt;code&gt;connection_name&lt;/code&gt; containing the given value will be returned. Matching is not case-sensitive. Requires at least three characters. | (optional) defaults to undefined
 **filterOutboundOutboundVoiceProfileId** | [**string**] | Identifies the associated outbound voice profile. | (optional) defaults to undefined
 **sort** | [**&#39;created_at&#39; | &#39;connection_name&#39; | &#39;active&#39;**]**Array<&#39;created_at&#39; &#124; &#39;connection_name&#39; &#124; &#39;active&#39;>** | Specifies the sort order for results. By default sorting direction is ascending. To have the results sorted in descending order add the &lt;code&gt; -&lt;/code&gt; prefix.&lt;br/&gt;&lt;br/&gt; That is: &lt;ul&gt;   &lt;li&gt;     &lt;code&gt;connection_name&lt;/code&gt;: sorts the result by the     &lt;code&gt;connection_name&lt;/code&gt; field in ascending order.   &lt;/li&gt;    &lt;li&gt;     &lt;code&gt;-connection_name&lt;/code&gt;: sorts the result by the     &lt;code&gt;connection_name&lt;/code&gt; field in descending order.   &lt;/li&gt; &lt;/ul&gt; &lt;br/&gt; If not given, results are sorted by &lt;code&gt;created_at&lt;/code&gt; in descending order. | (optional) defaults to 'created_at'


### Return type

**ListIpConnectionsResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response with a list of IP connections. |  -  |
**400** | Bad request |  -  |
**401** | Unauthorized |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **retrieveIpConnection**
> IpConnectionResponse retrieveIpConnection()

Retrieves the details of an existing ip connection.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .IPConnectionsApi(configuration);

let body:.IPConnectionsApiRetrieveIpConnectionRequest = {
  // string | IP Connection ID
  id: "id_example",
};

apiInstance.retrieveIpConnection(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | IP Connection ID | defaults to undefined


### Return type

**IpConnectionResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response with details about an IP connection. |  -  |
**401** | Unauthorized |  -  |
**404** | Resource not found |  -  |
**422** | Bad request |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateIpConnection**
> IpConnectionResponse updateIpConnection(updateIpConnectionRequest)

Updates settings of an existing IP connection.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .IPConnectionsApi(configuration);

let body:.IPConnectionsApiUpdateIpConnectionRequest = {
  // string | Identifies the type of resource.
  id: "id_example",
  // UpdateIpConnectionRequest | Parameters that can be updated in a IP connection
  updateIpConnectionRequest: null,
};

apiInstance.updateIpConnection(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateIpConnectionRequest** | **UpdateIpConnectionRequest**| Parameters that can be updated in a IP connection |
 **id** | [**string**] | Identifies the type of resource. | defaults to undefined


### Return type

**IpConnectionResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response with details about an IP connection. |  -  |
**401** | Unauthorized |  -  |
**404** | Resource not found |  -  |
**422** | Bad request |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


