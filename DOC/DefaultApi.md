# .DefaultApi

All URIs are relative to *https://api.telnyx.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createAccessFqdn**](DefaultApi.md#createAccessFqdn) | **POST** /access_fqdns | Create new Access FQDN
[**createFqdn**](DefaultApi.md#createFqdn) | **POST** /fqdns | Create an FQDN
[**deleteAccessFqdn**](DefaultApi.md#deleteAccessFqdn) | **DELETE** /access_fqdns/{fqdn_id} | Delete Access FQDN
[**deleteFqdn**](DefaultApi.md#deleteFqdn) | **DELETE** /fqdns/{id} | Delete an FQDN
[**listAccessFqdnById**](DefaultApi.md#listAccessFqdnById) | **GET** /access_fqdns/{fqdn_id} | List an Access FQDN
[**listAllAccessFqdns**](DefaultApi.md#listAllAccessFqdns) | **GET** /access_fqdns | List all Access FQDNs
[**listAllIpsByFqdn**](DefaultApi.md#listAllIpsByFqdn) | **GET** /access_fqdns/{fqdn_id}/ips | List Access FQDN\&#39;s IP Addresses
[**listFqdns**](DefaultApi.md#listFqdns) | **GET** /fqdns | List FQDNs
[**retrieveFqdn**](DefaultApi.md#retrieveFqdn) | **GET** /fqdns/{id} | Retrieve an FQDN
[**updateAccessFqdn**](DefaultApi.md#updateAccessFqdn) | **PATCH** /access_fqdns/{fqdn_id} | Update Access FQDN
[**updateFqdn**](DefaultApi.md#updateFqdn) | **PATCH** /fqdns/{id} | Update an FQDN


# **createAccessFqdn**
> CustomerFacingFQDNsResponseSchema createAccessFqdn(customerFacingFQDNsPost)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiCreateAccessFqdnRequest = {
  // CustomerFacingFQDNsPost
  customerFacingFQDNsPost: {
    fqdn: "fqdn_example",
    description: "description_example",
  },
};

apiInstance.createAccessFqdn(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerFacingFQDNsPost** | **CustomerFacingFQDNsPost**|  |


### Return type

**CustomerFacingFQDNsResponseSchema**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createFqdn**
> FQDNResponse createFqdn()

Create a new FQDN object.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiCreateFqdnRequest = {
  // CreateFqdnRequest (optional)
  createFqdnRequest: {
    connectionId: "connectionId_example",
    fqdn: "example.com",
    port: 5060,
    dnsRecordType: "a",
  },
};

apiInstance.createFqdn(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createFqdnRequest** | **CreateFqdnRequest**|  |


### Return type

**FQDNResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successful response with details about an FQDN connection. |  -  |
**400** | Bad request |  -  |
**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteAccessFqdn**
> CustomerFacingFQDNsResponseSchema deleteAccessFqdn()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiDeleteAccessFqdnRequest = {
  // string
  fqdnId: "fqdn_id_example",
};

apiInstance.deleteAccessFqdn(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fqdnId** | [**string**] |  | defaults to undefined


### Return type

**CustomerFacingFQDNsResponseSchema**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteFqdn**
> FQDNResponse deleteFqdn()

Delete an FQDN.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiDeleteFqdnRequest = {
  // string | Identifies the resource.
  id: "1517907029795014409",
};

apiInstance.deleteFqdn(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Identifies the resource. | defaults to undefined


### Return type

**FQDNResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response with details about an FQDN connection. |  -  |
**400** | Bad request |  -  |
**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listAccessFqdnById**
> CustomerFacingFQDNsResponseSchema listAccessFqdnById()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiListAccessFqdnByIdRequest = {
  // string
  fqdnId: "fqdn_id_example",
};

apiInstance.listAccessFqdnById(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fqdnId** | [**string**] |  | defaults to undefined


### Return type

**CustomerFacingFQDNsResponseSchema**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listAllAccessFqdns**
> CustomerFacingFQDNsListResponse listAllAccessFqdns()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiListAllAccessFqdnsRequest = {
  // number (optional)
  pageNumber: 1,
  // number (optional)
  pageSize: 20,
};

apiInstance.listAllAccessFqdns(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pageNumber** | [**number**] |  | (optional) defaults to 1
 **pageSize** | [**number**] |  | (optional) defaults to 20


### Return type

**CustomerFacingFQDNsListResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listAllIpsByFqdn**
> CustomerFacingFQDNsGetIPResponse listAllIpsByFqdn()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiListAllIpsByFqdnRequest = {
  // string
  fqdnId: "fqdn_id_example",
  // number (optional)
  pageNumber: 1,
  // number (optional)
  pageSize: 20,
};

apiInstance.listAllIpsByFqdn(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fqdnId** | [**string**] |  | defaults to undefined
 **pageNumber** | [**number**] |  | (optional) defaults to 1
 **pageSize** | [**number**] |  | (optional) defaults to 20


### Return type

**CustomerFacingFQDNsGetIPResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listFqdns**
> ListFQDNsResponse listFqdns()

Get all FQDNs belonging to the user that match the given filters.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiListFqdnsRequest = {
  // number | The page number to load (optional)
  pageNumber: 1,
  // number | The size of the page (optional)
  pageSize: 20,
  // string | ID of the FQDN connection to which the FQDN belongs. (optional)
  filterConnectionId: "filter[connection_id]_example",
  // string | FQDN represented by the resource. (optional)
  filterFqdn: "example.com",
  // number | Port to use when connecting to the FQDN. (optional)
  filterPort: 5060,
  // string | DNS record type used by the FQDN. (optional)
  filterDnsRecordType: "a",
};

apiInstance.listFqdns(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pageNumber** | [**number**] | The page number to load | (optional) defaults to 1
 **pageSize** | [**number**] | The size of the page | (optional) defaults to 20
 **filterConnectionId** | [**string**] | ID of the FQDN connection to which the FQDN belongs. | (optional) defaults to undefined
 **filterFqdn** | [**string**] | FQDN represented by the resource. | (optional) defaults to undefined
 **filterPort** | [**number**] | Port to use when connecting to the FQDN. | (optional) defaults to undefined
 **filterDnsRecordType** | [**string**] | DNS record type used by the FQDN. | (optional) defaults to undefined


### Return type

**ListFQDNsResponse**

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

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **retrieveFqdn**
> FQDNResponse retrieveFqdn()

Return the details regarding a specific FQDN.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiRetrieveFqdnRequest = {
  // string | Identifies the resource.
  id: "1517907029795014409",
};

apiInstance.retrieveFqdn(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Identifies the resource. | defaults to undefined


### Return type

**FQDNResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response with details about an FQDN connection. |  -  |
**400** | Bad request |  -  |
**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateAccessFqdn**
> CustomerFacingFQDNsResponseSchema updateAccessFqdn(customerFacingFQDNsPatch)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiUpdateAccessFqdnRequest = {
  // string
  fqdnId: "fqdn_id_example",
  // CustomerFacingFQDNsPatch
  customerFacingFQDNsPatch: {
    description: "description_example",
  },
};

apiInstance.updateAccessFqdn(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerFacingFQDNsPatch** | **CustomerFacingFQDNsPatch**|  |
 **fqdnId** | [**string**] |  | defaults to undefined


### Return type

**CustomerFacingFQDNsResponseSchema**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateFqdn**
> FQDNResponse updateFqdn()

Update the details of a specific FQDN.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiUpdateFqdnRequest = {
  // string | Identifies the resource.
  id: "1517907029795014409",
  // UpdateFqdnRequest (optional)
  updateFqdnRequest: {
    connectionId: "connectionId_example",
    fqdn: "example.com",
    port: 5060,
    dnsRecordType: "a",
  },
};

apiInstance.updateFqdn(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateFqdnRequest** | **UpdateFqdnRequest**|  |
 **id** | [**string**] | Identifies the resource. | defaults to undefined


### Return type

**FQDNResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response with details about an FQDN connection. |  -  |
**400** | Bad request |  -  |
**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


