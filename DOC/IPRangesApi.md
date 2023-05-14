# .IPRangesApi

All URIs are relative to *https://api.telnyx.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**accessIPRangeCreate**](IPRangesApi.md#accessIPRangeCreate) | **POST** /access_ip_ranges | Create new Access IP Range
[**accessIPRangeList**](IPRangesApi.md#accessIPRangeList) | **GET** /access_ip_ranges | List all Access IP Ranges
[**accessIpRangesAccessIpRangeIdDelete**](IPRangesApi.md#accessIpRangesAccessIpRangeIdDelete) | **DELETE** /access_ip_ranges/{access_ip_range_id} | Delete access IP ranges


# **accessIPRangeCreate**
> AccessIPRangeResponseSchema accessIPRangeCreate(accessIPRangePOST)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .IPRangesApi(configuration);

let body:.IPRangesApiAccessIPRangeCreateRequest = {
  // AccessIPRangePOST
  accessIPRangePOST: {
    cidrBlock: "cidrBlock_example",
    description: "description_example",
  },
};

apiInstance.accessIPRangeCreate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accessIPRangePOST** | **AccessIPRangePOST**|  |


### Return type

**AccessIPRangeResponseSchema**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **accessIPRangeList**
> AccessIPRangeListResponseSchema accessIPRangeList()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .IPRangesApi(configuration);

let body:.IPRangesApiAccessIPRangeListRequest = {
  // string (optional)
  filterCidrBlock: "filter[cidr_block]_example",
  // string (optional)
  filterCidrBlockStartswith: "filter[cidr_block][startswith]_example",
  // string (optional)
  filterCidrBlockEndswith: "filter[cidr_block][endswith]_example",
  // string (optional)
  filterCidrBlockContains: "filter[cidr_block][contains]_example",
  // CloudflareSyncStatus (optional)
  filterStatus: "pending",
  // Date (optional)
  filterCreatedAtGt: new Date('1970-01-01T00:00:00.00Z'),
  // Date (optional)
  filterCreatedAtLt: new Date('1970-01-01T00:00:00.00Z'),
  // number (optional)
  pageNumber: 1,
  // number (optional)
  pageSize: 20,
};

apiInstance.accessIPRangeList(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filterCidrBlock** | [**string**] |  | (optional) defaults to undefined
 **filterCidrBlockStartswith** | [**string**] |  | (optional) defaults to undefined
 **filterCidrBlockEndswith** | [**string**] |  | (optional) defaults to undefined
 **filterCidrBlockContains** | [**string**] |  | (optional) defaults to undefined
 **filterStatus** | **CloudflareSyncStatus** |  | (optional) defaults to undefined
 **filterCreatedAtGt** | [**Date**] |  | (optional) defaults to undefined
 **filterCreatedAtLt** | [**Date**] |  | (optional) defaults to undefined
 **pageNumber** | [**number**] |  | (optional) defaults to 1
 **pageSize** | [**number**] |  | (optional) defaults to 20


### Return type

**AccessIPRangeListResponseSchema**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **accessIpRangesAccessIpRangeIdDelete**
> AccessIPRangeResponseSchema accessIpRangesAccessIpRangeIdDelete()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .IPRangesApi(configuration);

let body:.IPRangesApiAccessIpRangesAccessIpRangeIdDeleteRequest = {
  // string
  accessIpRangeId: "access_ip_range_id_example",
};

apiInstance.accessIpRangesAccessIpRangeIdDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accessIpRangeId** | [**string**] |  | defaults to undefined


### Return type

**AccessIPRangeResponseSchema**

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


