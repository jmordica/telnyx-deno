# .CredentialConnectionsApi

All URIs are relative to *https://api.telnyx.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createCredentialConnection**](CredentialConnectionsApi.md#createCredentialConnection) | **POST** /credential_connections | Create a credential connection
[**deleteCredentialConnection**](CredentialConnectionsApi.md#deleteCredentialConnection) | **DELETE** /credential_connections/{id} | Delete a credential connection
[**listCredentialConnections**](CredentialConnectionsApi.md#listCredentialConnections) | **GET** /credential_connections | List credential connections
[**retrieveCredentialConnection**](CredentialConnectionsApi.md#retrieveCredentialConnection) | **GET** /credential_connections/{id} | Retrieve a credential connection
[**updateCredentialConnection**](CredentialConnectionsApi.md#updateCredentialConnection) | **PATCH** /credential_connections/{id} | Update a credential connection


# **createCredentialConnection**
> CredentialConnectionResponse createCredentialConnection(createCredentialConnectionRequest)

Creates a credential connection.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CredentialConnectionsApi(configuration);

let body:.CredentialConnectionsApiCreateCredentialConnectionRequest = {
  // CreateCredentialConnectionRequest | Parameters that can be defined during credential connection creation
  createCredentialConnectionRequest: {
    active: true,
    userName: "myusername123",
    password: "my123secure456password789",
    anchorsiteOverride: "Amsterdam, Netherlands",
    connectionName: "connectionName_example",
    sipUriCallingPreference: "disabled",
    defaultOnHoldComfortNoiseEnabled: false,
    dtmfType: "Inband",
    encodeContactHeaderEnabled: false,
    encryptedMedia: "SRTP",
    onnetT38PassthroughEnabled: false,
    webhookEventUrl: "https://example.com",
    webhookEventFailoverUrl: "https://failover.example.com",
    webhookApiVersion: "1",
    webhookTimeoutSecs: 25,
    rtcpSettings: {
      port: "rtp+1",
      captureEnabled: true,
      reportFrequencySecs: 10,
    },
    inbound: {
      aniNumberFormat: "E.164-national",
      dnisNumberFormat: "e164",
      codecs: ["G722","G711U","G711A","G729","OPUS","H.264"],
      channelLimit: 1,
      generateRingbackTone: false,
      isupHeadersEnabled: false,
      prackEnabled: false,
      privacyZoneEnabled: false,
      sipCompactHeadersEnabled: true,
      timeout1xxSecs: 3,
      timeout2xxSecs: "90",
    },
    outbound: {
      callParkingEnabled: false,
      aniOverride: "",
      aniOverrideType: "always",
      channelLimit: 1,
      instantRingbackEnabled: true,
      generateRingbackTone: false,
      localization: "US",
      t38ReinviteSource: "telnyx",
      outboundVoiceProfileId: "1293384261075731499",
    },
  },
};

apiInstance.createCredentialConnection(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createCredentialConnectionRequest** | **CreateCredentialConnectionRequest**| Parameters that can be defined during credential connection creation |


### Return type

**CredentialConnectionResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successful response with details about a credential connection. |  -  |
**422** | Bad request |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteCredentialConnection**
> CredentialConnectionResponse deleteCredentialConnection()

Deletes an existing credential connection.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CredentialConnectionsApi(configuration);

let body:.CredentialConnectionsApiDeleteCredentialConnectionRequest = {
  // string | Identifies the resource.
  id: "id_example",
};

apiInstance.deleteCredentialConnection(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Identifies the resource. | defaults to undefined


### Return type

**CredentialConnectionResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response with details about a credential connection. |  -  |
**401** | Unauthorized |  -  |
**404** | Resource not found |  -  |
**422** | Bad request |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listCredentialConnections**
> ListCredentialConnectionsResponse listCredentialConnections()

Returns a list of your credential connections.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CredentialConnectionsApi(configuration);

let body:.CredentialConnectionsApiListCredentialConnectionsRequest = {
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

apiInstance.listCredentialConnections(body).then((data:any) => {
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

**ListCredentialConnectionsResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response with a list of credential connections. |  -  |
**400** | Bad request |  -  |
**401** | Unauthorized |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **retrieveCredentialConnection**
> CredentialConnectionResponse retrieveCredentialConnection()

Retrieves the details of an existing credential connection.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CredentialConnectionsApi(configuration);

let body:.CredentialConnectionsApiRetrieveCredentialConnectionRequest = {
  // string | Identifies the resource.
  id: "id_example",
};

apiInstance.retrieveCredentialConnection(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Identifies the resource. | defaults to undefined


### Return type

**CredentialConnectionResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response with details about a credential connection. |  -  |
**400** | Bad request |  -  |
**401** | Unauthorized |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateCredentialConnection**
> CredentialConnectionResponse updateCredentialConnection(updateCredentialConnectionRequest)

Updates settings of an existing credential connection.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CredentialConnectionsApi(configuration);

let body:.CredentialConnectionsApiUpdateCredentialConnectionRequest = {
  // string | Identifies the resource.
  id: "id_example",
  // UpdateCredentialConnectionRequest | Parameters that can be updated in a credential connection
  updateCredentialConnectionRequest: {
    active: true,
    userName: "myusername123",
    password: "my123secure456password789",
    anchorsiteOverride: "Amsterdam, Netherlands",
    connectionName: "connectionName_example",
    sipUriCallingPreference: "disabled",
    defaultOnHoldComfortNoiseEnabled: false,
    dtmfType: "Inband",
    encodeContactHeaderEnabled: false,
    encryptedMedia: "SRTP",
    onnetT38PassthroughEnabled: false,
    webhookEventUrl: "https://example.com",
    webhookEventFailoverUrl: "https://failover.example.com",
    webhookApiVersion: "1",
    webhookTimeoutSecs: 25,
    rtcpSettings: {
      port: "rtp+1",
      captureEnabled: true,
      reportFrequencySecs: 10,
    },
    inbound: {
      aniNumberFormat: "E.164-national",
      dnisNumberFormat: "e164",
      codecs: ["G722","G711U","G711A","G729","OPUS","H.264"],
      channelLimit: 1,
      generateRingbackTone: false,
      isupHeadersEnabled: false,
      prackEnabled: false,
      privacyZoneEnabled: false,
      sipCompactHeadersEnabled: true,
      timeout1xxSecs: 3,
      timeout2xxSecs: "90",
    },
    outbound: {
      callParkingEnabled: false,
      aniOverride: "",
      aniOverrideType: "always",
      channelLimit: 1,
      instantRingbackEnabled: true,
      generateRingbackTone: false,
      localization: "US",
      t38ReinviteSource: "telnyx",
      outboundVoiceProfileId: "1293384261075731499",
    },
  },
};

apiInstance.updateCredentialConnection(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateCredentialConnectionRequest** | **UpdateCredentialConnectionRequest**| Parameters that can be updated in a credential connection |
 **id** | [**string**] | Identifies the resource. | defaults to undefined


### Return type

**CredentialConnectionResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response with details about a credential connection. |  -  |
**401** | Unauthorized |  -  |
**404** | Resource not found |  -  |
**422** | Bad request |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


