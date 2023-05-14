# .GlobalIPsApi

All URIs are relative to *https://api.telnyx.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**globalIpAllowedPortList**](GlobalIPsApi.md#globalIpAllowedPortList) | **GET** /global_ip_allowed_ports | List all Global IP Allowed Ports
[**globalIpAssignmentCreate**](GlobalIPsApi.md#globalIpAssignmentCreate) | **POST** /global_ip_assignments | Create a Global IP assignment
[**globalIpAssignmentDelete**](GlobalIPsApi.md#globalIpAssignmentDelete) | **DELETE** /global_ip_assignments/{id} | Delete a Global IP assignment
[**globalIpAssignmentGet**](GlobalIPsApi.md#globalIpAssignmentGet) | **GET** /global_ip_assignments/{id} | Retrieve a Global IP
[**globalIpAssignmentHealth**](GlobalIPsApi.md#globalIpAssignmentHealth) | **GET** /global_ip_assignment_health | 
[**globalIpAssignmentList**](GlobalIPsApi.md#globalIpAssignmentList) | **GET** /global_ip_assignments | List all Global IP assignments
[**globalIpAssignmentUpdate**](GlobalIPsApi.md#globalIpAssignmentUpdate) | **PATCH** /global_ip_assignments/{id} | Update a Global IP assignment
[**globalIpAssignmentUsage**](GlobalIPsApi.md#globalIpAssignmentUsage) | **GET** /global_ip_assignments_usage | 
[**globalIpCreate**](GlobalIPsApi.md#globalIpCreate) | **POST** /global_ips | Create a Global IP
[**globalIpDelete**](GlobalIPsApi.md#globalIpDelete) | **DELETE** /global_ips/{id} | Delete a Global IP
[**globalIpGet**](GlobalIPsApi.md#globalIpGet) | **GET** /global_ips/{id} | Retrieve a Global IP
[**globalIpLatency**](GlobalIPsApi.md#globalIpLatency) | **GET** /global_ip_latency | 
[**globalIpList**](GlobalIPsApi.md#globalIpList) | **GET** /global_ips | List all Global IPs
[**globalIpProtocolList**](GlobalIPsApi.md#globalIpProtocolList) | **GET** /global_ip_protocols | List all Global IP Protocols
[**globalIpUsage**](GlobalIPsApi.md#globalIpUsage) | **GET** /global_ip_usage | 


# **globalIpAllowedPortList**
> GlobalIpAllowedPortList200Response globalIpAllowedPortList()

List all Global IP Allowed Ports

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GlobalIPsApi(configuration);

let body:any = {};

apiInstance.globalIpAllowedPortList(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**GlobalIpAllowedPortList200Response**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **globalIpAssignmentCreate**
> GlobalIpAssignmentCreate202Response globalIpAssignmentCreate(globalIpAssignment)

Create a Global IP assignment.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GlobalIPsApi(configuration);

let body:.GlobalIPsApiGlobalIpAssignmentCreateRequest = {
  // GlobalIpAssignment
  globalIpAssignment: null,
};

apiInstance.globalIpAssignmentCreate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **globalIpAssignment** | **GlobalIpAssignment**|  |


### Return type

**GlobalIpAssignmentCreate202Response**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | Successful response |  -  |
**422** | Unprocessable entity. Check the \&#39;detail\&#39; field in response for details. |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **globalIpAssignmentDelete**
> GlobalIpAssignmentCreate202Response globalIpAssignmentDelete()

Delete a Global IP assignment.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GlobalIPsApi(configuration);

let body:.GlobalIPsApiGlobalIpAssignmentDeleteRequest = {
  // string | Identifies the resource.
  id: "6a09cdc3-8948-47f0-aa62-74ac943d6c58",
};

apiInstance.globalIpAssignmentDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Identifies the resource. | defaults to undefined


### Return type

**GlobalIpAssignmentCreate202Response**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **globalIpAssignmentGet**
> GlobalIpAssignmentCreate202Response globalIpAssignmentGet()

Retrieve a Global IP assignment.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GlobalIPsApi(configuration);

let body:.GlobalIPsApiGlobalIpAssignmentGetRequest = {
  // string | Identifies the resource.
  id: "6a09cdc3-8948-47f0-aa62-74ac943d6c58",
};

apiInstance.globalIpAssignmentGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Identifies the resource. | defaults to undefined


### Return type

**GlobalIpAssignmentCreate202Response**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **globalIpAssignmentHealth**
> GlobalIpAssignmentHealth200Response globalIpAssignmentHealth()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GlobalIPsApi(configuration);

let body:.GlobalIPsApiGlobalIpAssignmentHealthRequest = {
  // string | Filter by Global IP ID(s) separated by commas (optional)
  filterGlobalIpIdIn: "filter[global_ip_id][in]_example",
  // string | Filter by Global IP Assignment ID(s) separated by commas (optional)
  filterGlobalIpAssignmentIdIn: "filter[global_ip_assignment_id][in]_example",
  // Date | Filter by timestamp greater than (optional)
  filterTimestampGt: new Date('2019-01-01T00:00:00Z'),
  // Date | Filter by timestamp less than (optional)
  filterTimestampLt: new Date('2019-01-01T00:00:00Z'),
};

apiInstance.globalIpAssignmentHealth(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filterGlobalIpIdIn** | [**string**] | Filter by Global IP ID(s) separated by commas | (optional) defaults to undefined
 **filterGlobalIpAssignmentIdIn** | [**string**] | Filter by Global IP Assignment ID(s) separated by commas | (optional) defaults to undefined
 **filterTimestampGt** | [**Date**] | Filter by timestamp greater than | (optional) defaults to undefined
 **filterTimestampLt** | [**Date**] | Filter by timestamp less than | (optional) defaults to undefined


### Return type

**GlobalIpAssignmentHealth200Response**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **globalIpAssignmentList**
> GlobalIpAssignmentList200Response globalIpAssignmentList()

List all Global IP assignments.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GlobalIPsApi(configuration);

let body:.GlobalIPsApiGlobalIpAssignmentListRequest = {
  // number | The page number to load (optional)
  pageNumber: 1,
  // number | The size of the page (optional)
  pageSize: 20,
};

apiInstance.globalIpAssignmentList(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pageNumber** | [**number**] | The page number to load | (optional) defaults to 1
 **pageSize** | [**number**] | The size of the page | (optional) defaults to 20


### Return type

**GlobalIpAssignmentList200Response**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **globalIpAssignmentUpdate**
> GlobalIpAssignmentCreate202Response globalIpAssignmentUpdate(globalIpAssignmentUpdate)

Update a Global IP assignment.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GlobalIPsApi(configuration);

let body:.GlobalIPsApiGlobalIpAssignmentUpdateRequest = {
  // string | Identifies the resource.
  id: "6a09cdc3-8948-47f0-aa62-74ac943d6c58",
  // GlobalIpAssignmentUpdate
  globalIpAssignmentUpdate: null,
};

apiInstance.globalIpAssignmentUpdate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **globalIpAssignmentUpdate** | **GlobalIpAssignmentUpdate**|  |
 **id** | [**string**] | Identifies the resource. | defaults to undefined


### Return type

**GlobalIpAssignmentCreate202Response**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **globalIpAssignmentUsage**
> GlobalIpAssignmentUsage200Response globalIpAssignmentUsage()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GlobalIPsApi(configuration);

let body:.GlobalIPsApiGlobalIpAssignmentUsageRequest = {
  // string | Filter by Global IP Assignment ID(s) separated by commas (optional)
  filterGlobalIpAssignmentIdIn: "filter[global_ip_assignment_id][in]_example",
  // string | Filter by Global IP ID(s), separated by commas (optional)
  filterGlobalIpIdIn: "filter[global_ip_id][in]_example",
  // Date | Filter by timestamp greater than (optional)
  filterTimestampGt: new Date('2019-01-01T00:00:00Z'),
  // Date | Filter by timestamp less than (optional)
  filterTimestampLt: new Date('2019-01-01T00:00:00Z'),
};

apiInstance.globalIpAssignmentUsage(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filterGlobalIpAssignmentIdIn** | [**string**] | Filter by Global IP Assignment ID(s) separated by commas | (optional) defaults to undefined
 **filterGlobalIpIdIn** | [**string**] | Filter by Global IP ID(s), separated by commas | (optional) defaults to undefined
 **filterTimestampGt** | [**Date**] | Filter by timestamp greater than | (optional) defaults to undefined
 **filterTimestampLt** | [**Date**] | Filter by timestamp less than | (optional) defaults to undefined


### Return type

**GlobalIpAssignmentUsage200Response**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **globalIpCreate**
> GlobalIpCreate202Response globalIpCreate(globalIP)

Create a Global IP.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GlobalIPsApi(configuration);

let body:.GlobalIPsApiGlobalIpCreateRequest = {
  // GlobalIP
  globalIP: null,
};

apiInstance.globalIpCreate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **globalIP** | **GlobalIP**|  |


### Return type

**GlobalIpCreate202Response**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | Successful response |  -  |
**422** | Unprocessable entity. Check the \&#39;detail\&#39; field in response for details. |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **globalIpDelete**
> GlobalIpCreate202Response globalIpDelete()

Delete a Global IP.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GlobalIPsApi(configuration);

let body:.GlobalIPsApiGlobalIpDeleteRequest = {
  // string | Identifies the resource.
  id: "6a09cdc3-8948-47f0-aa62-74ac943d6c58",
};

apiInstance.globalIpDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Identifies the resource. | defaults to undefined


### Return type

**GlobalIpCreate202Response**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **globalIpGet**
> GlobalIpCreate202Response globalIpGet()

Retrieve a Global IP.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GlobalIPsApi(configuration);

let body:.GlobalIPsApiGlobalIpGetRequest = {
  // string | Identifies the resource.
  id: "6a09cdc3-8948-47f0-aa62-74ac943d6c58",
};

apiInstance.globalIpGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Identifies the resource. | defaults to undefined


### Return type

**GlobalIpCreate202Response**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **globalIpLatency**
> GlobalIpLatency200Response globalIpLatency()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GlobalIPsApi(configuration);

let body:.GlobalIPsApiGlobalIpLatencyRequest = {
  // string | Filter by Global IP ID(s) separated by commas (optional)
  filterGlobalIpIdIn: "filter[global_ip_id][in]_example",
  // Date | Filter by timestamp greater than (optional)
  filterTimestampGt: new Date('2019-01-01T00:00:00Z'),
  // Date | Filter by timestamp less than (optional)
  filterTimestampLt: new Date('2019-01-01T00:00:00Z'),
};

apiInstance.globalIpLatency(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filterGlobalIpIdIn** | [**string**] | Filter by Global IP ID(s) separated by commas | (optional) defaults to undefined
 **filterTimestampGt** | [**Date**] | Filter by timestamp greater than | (optional) defaults to undefined
 **filterTimestampLt** | [**Date**] | Filter by timestamp less than | (optional) defaults to undefined


### Return type

**GlobalIpLatency200Response**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **globalIpList**
> GlobalIpList200Response globalIpList()

List all Global IPs.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GlobalIPsApi(configuration);

let body:.GlobalIPsApiGlobalIpListRequest = {
  // number | The page number to load (optional)
  pageNumber: 1,
  // number | The size of the page (optional)
  pageSize: 20,
};

apiInstance.globalIpList(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pageNumber** | [**number**] | The page number to load | (optional) defaults to 1
 **pageSize** | [**number**] | The size of the page | (optional) defaults to 20


### Return type

**GlobalIpList200Response**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **globalIpProtocolList**
> GlobalIpProtocolList200Response globalIpProtocolList()

List all Global IP Protocols

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GlobalIPsApi(configuration);

let body:any = {};

apiInstance.globalIpProtocolList(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**GlobalIpProtocolList200Response**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **globalIpUsage**
> GlobalIpUsage200Response globalIpUsage()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GlobalIPsApi(configuration);

let body:.GlobalIPsApiGlobalIpUsageRequest = {
  // string | Filter by Global IP ID(s) separated by commas (optional)
  filterGlobalIpIdIn: "filter[global_ip_id][in]_example",
  // Date | Filter by timestamp greater than (optional)
  filterTimestampGt: new Date('2019-01-01T00:00:00Z'),
  // Date | Filter by timestamp less than (optional)
  filterTimestampLt: new Date('2019-01-01T00:00:00Z'),
};

apiInstance.globalIpUsage(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filterGlobalIpIdIn** | [**string**] | Filter by Global IP ID(s) separated by commas | (optional) defaults to undefined
 **filterTimestampGt** | [**Date**] | Filter by timestamp greater than | (optional) defaults to undefined
 **filterTimestampLt** | [**Date**] | Filter by timestamp less than | (optional) defaults to undefined


### Return type

**GlobalIpUsage200Response**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


