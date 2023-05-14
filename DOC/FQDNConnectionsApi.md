# .FQDNConnectionsApi

All URIs are relative to *https://api.telnyx.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createFqdnConnection**](FQDNConnectionsApi.md#createFqdnConnection) | **POST** /fqdn_connections | Create an FQDN connection
[**deleteFqdnConnection**](FQDNConnectionsApi.md#deleteFqdnConnection) | **DELETE** /fqdn_connections/{id} | Delete an FQDN connection
[**listFqdnConnections**](FQDNConnectionsApi.md#listFqdnConnections) | **GET** /fqdn_connections | List FQDN connections
[**retrieveFqdnConnection**](FQDNConnectionsApi.md#retrieveFqdnConnection) | **GET** /fqdn_connections/{id} | Retrieve an FQDN connection
[**updateFqdnConnection**](FQDNConnectionsApi.md#updateFqdnConnection) | **PATCH** /fqdn_connections/{id} | Update an FQDN connection


# **createFqdnConnection**
> FQDNConnectionResponse createFqdnConnection(createFqdnConnectionRequest)

Creates a FQDN connection.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .FQDNConnectionsApi(configuration);

let body:.FQDNConnectionsApiCreateFqdnConnectionRequest = {
  // CreateFqdnConnectionRequest | Parameters that can be defined during FQDN connection creation
  createFqdnConnectionRequest: null,
};

apiInstance.createFqdnConnection(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createFqdnConnectionRequest** | **CreateFqdnConnectionRequest**| Parameters that can be defined during FQDN connection creation |


### Return type

**FQDNConnectionResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successful response with details about an FQDN connection. |  -  |
**422** | Bad request |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteFqdnConnection**
> FQDNConnectionResponse deleteFqdnConnection()

Deletes an FQDN connection.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .FQDNConnectionsApi(configuration);

let body:.FQDNConnectionsApiDeleteFqdnConnectionRequest = {
  // string | FQDN Connection ID
  id: "id_example",
};

apiInstance.deleteFqdnConnection(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | FQDN Connection ID | defaults to undefined


### Return type

**FQDNConnectionResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response with details about an FQDN connection. |  -  |
**401** | Unauthorized |  -  |
**404** | Resource not found |  -  |
**422** | Bad request |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listFqdnConnections**
> ListFQDNConnectionsResponse listFqdnConnections()

Returns a list of your FQDN connections.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .FQDNConnectionsApi(configuration);

let body:.FQDNConnectionsApiListFqdnConnectionsRequest = {
  // number | The page number to load (optional)
  pageNumber: 1,
  // number | The size of the page (optional)
  pageSize: 20,
  // string | If present, connections with <code>connection_name</code> containing the given value will be returned. Matching is not case-sensitive. Requires at least three characters. (optional)
  filterConnectionNameContains: "filter[connection_name][contains]_example",
  // 'created_at' | 'connection_name' | 'active' | Specifies the sort order for results. By default sorting direction is ascending. To have the results sorted in descending order add the <code> -</code> prefix.<br/><br/> That is: <ul>   <li>     <code>connection_name</code>: sorts the result by the     <code>connection_name</code> field in ascending order.   </li>    <li>     <code>-connection_name</code>: sorts the result by the     <code>connection_name</code> field in descending order.   </li> </ul> <br/> If not given, results are sorted by <code>created_at</code> in descending order. (optional)
  sort: "connection_name",
};

apiInstance.listFqdnConnections(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pageNumber** | [**number**] | The page number to load | (optional) defaults to 1
 **pageSize** | [**number**] | The size of the page | (optional) defaults to 20
 **filterConnectionNameContains** | [**string**] | If present, connections with &lt;code&gt;connection_name&lt;/code&gt; containing the given value will be returned. Matching is not case-sensitive. Requires at least three characters. | (optional) defaults to undefined
 **sort** | [**&#39;created_at&#39; | &#39;connection_name&#39; | &#39;active&#39;**]**Array<&#39;created_at&#39; &#124; &#39;connection_name&#39; &#124; &#39;active&#39;>** | Specifies the sort order for results. By default sorting direction is ascending. To have the results sorted in descending order add the &lt;code&gt; -&lt;/code&gt; prefix.&lt;br/&gt;&lt;br/&gt; That is: &lt;ul&gt;   &lt;li&gt;     &lt;code&gt;connection_name&lt;/code&gt;: sorts the result by the     &lt;code&gt;connection_name&lt;/code&gt; field in ascending order.   &lt;/li&gt;    &lt;li&gt;     &lt;code&gt;-connection_name&lt;/code&gt;: sorts the result by the     &lt;code&gt;connection_name&lt;/code&gt; field in descending order.   &lt;/li&gt; &lt;/ul&gt; &lt;br/&gt; If not given, results are sorted by &lt;code&gt;created_at&lt;/code&gt; in descending order. | (optional) defaults to 'created_at'


### Return type

**ListFQDNConnectionsResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response with a list of FQDN connections. |  -  |
**400** | Bad request |  -  |
**401** | Unauthorized |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **retrieveFqdnConnection**
> FQDNConnectionResponse retrieveFqdnConnection()

Retrieves the details of an existing FQDN connection.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .FQDNConnectionsApi(configuration);

let body:.FQDNConnectionsApiRetrieveFqdnConnectionRequest = {
  // string | FQDN Connection ID
  id: "id_example",
};

apiInstance.retrieveFqdnConnection(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | FQDN Connection ID | defaults to undefined


### Return type

**FQDNConnectionResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response with details about an FQDN connection. |  -  |
**401** | Unauthorized |  -  |
**404** | Resource not found |  -  |
**422** | Bad request |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateFqdnConnection**
> FQDNConnectionResponse updateFqdnConnection(updateFqdnConnectionRequest)

Updates settings of an existing FQDN connection.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .FQDNConnectionsApi(configuration);

let body:.FQDNConnectionsApiUpdateFqdnConnectionRequest = {
  // string | FQDN Connection ID
  id: "id_example",
  // UpdateFqdnConnectionRequest | Parameters that can be updated in a FQDN connection
  updateFqdnConnectionRequest: null,
};

apiInstance.updateFqdnConnection(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateFqdnConnectionRequest** | **UpdateFqdnConnectionRequest**| Parameters that can be updated in a FQDN connection |
 **id** | [**string**] | FQDN Connection ID | defaults to undefined


### Return type

**FQDNConnectionResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response with details about an FQDN connection. |  -  |
**401** | Unauthorized |  -  |
**404** | Resource not found |  -  |
**422** | Bad request |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


