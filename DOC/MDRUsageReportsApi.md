# .MDRUsageReportsApi

All URIs are relative to *https://api.telnyx.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteUsageReport**](MDRUsageReportsApi.md#deleteUsageReport) | **DELETE** /reports/mdr_usage_reports/{id} | 
[**getUsageReport**](MDRUsageReportsApi.md#getUsageReport) | **GET** /reports/mdr_usage_reports/{id} | 
[**getUsageReportSync1**](MDRUsageReportsApi.md#getUsageReportSync1) | **GET** /reports/mdr_usage_reports/sync | 
[**getUsageReports**](MDRUsageReportsApi.md#getUsageReports) | **GET** /reports/mdr_usage_reports | 
[**submitUsageReport**](MDRUsageReportsApi.md#submitUsageReport) | **POST** /reports/mdr_usage_reports | 


# **deleteUsageReport**
> MdrDeleteUsageReportsResponse deleteUsageReport()

Delete messaging usage report by id

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MDRUsageReportsApi(configuration);

let body:.MDRUsageReportsApiDeleteUsageReportRequest = {
  // string
  id: ,
};

apiInstance.deleteUsageReport(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] |  | defaults to undefined


### Return type

**MdrDeleteUsageReportsResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getUsageReport**
> MdrGetUsageReportsByIdResponse getUsageReport()

Fetch a single messaging usage report by id

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MDRUsageReportsApi(configuration);

let body:.MDRUsageReportsApiGetUsageReportRequest = {
  // string
  id: ,
};

apiInstance.getUsageReport(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] |  | defaults to undefined


### Return type

**MdrGetUsageReportsByIdResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getUsageReportSync1**
> MdrGetSyncUsageReportResponse getUsageReportSync1()

Generate and fetch messaging usage report synchronously. This endpoint will both generate and fetch the messaging report over a specified time period. No polling is necessary but the response may take up to a couple of minutes. 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MDRUsageReportsApi(configuration);

let body:.MDRUsageReportsApiGetUsageReportSync1Request = {
  // 'NO_AGGREGATION' | 'PROFILE' | 'TAGS'
  aggregationType: "profile",
  // Date (optional)
  startDate: new Date('2020-07-01T00:00:00-06:00'),
  // Date (optional)
  endDate: new Date('2020-07-01T00:00:00-06:00'),
  // Array<string> (optional)
  profiles: [
    "My profile",
  ],
};

apiInstance.getUsageReportSync1(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **aggregationType** | [**&#39;NO_AGGREGATION&#39; | &#39;PROFILE&#39; | &#39;TAGS&#39;**]**Array<&#39;NO_AGGREGATION&#39; &#124; &#39;PROFILE&#39; &#124; &#39;TAGS&#39;>** |  | defaults to undefined
 **startDate** | [**Date**] |  | (optional) defaults to undefined
 **endDate** | [**Date**] |  | (optional) defaults to undefined
 **profiles** | **Array&lt;string&gt;** |  | (optional) defaults to undefined


### Return type

**MdrGetSyncUsageReportResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getUsageReports**
> MdrGetUsageReportsResponse getUsageReports()

Fetch all messaging usage reports. Usage reports are aggregated messaging data for specified time period and breakdown

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MDRUsageReportsApi(configuration);

let body:.MDRUsageReportsApiGetUsageReportsRequest = {
  // number | Page number (optional)
  pageNumber: 1,
  // number | Size of the page (optional)
  pageSize: 20,
};

apiInstance.getUsageReports(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pageNumber** | [**number**] | Page number | (optional) defaults to 1
 **pageSize** | [**number**] | Size of the page | (optional) defaults to 20


### Return type

**MdrGetUsageReportsResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **submitUsageReport**
> MdrPostUsageReportsResponse submitUsageReport(mdrPostUsageReportRequest)

Submit request for new new messaging usage report. This endpoint will pull and aggregate messaging data in specified time period. 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MDRUsageReportsApi(configuration);

let body:.MDRUsageReportsApiSubmitUsageReportRequest = {
  // MdrPostUsageReportRequest | Mdr usage report data
  mdrPostUsageReportRequest: {
    startDate: new Date('2020-07-01T00:00:00-06:00'),
    endDate: new Date('2020-07-01T00:00:00-06:00'),
    aggregationType: "NO_AGGREGATION",
    profiles: "My profile",
  },
};

apiInstance.submitUsageReport(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **mdrPostUsageReportRequest** | **MdrPostUsageReportRequest**| Mdr usage report data |


### Return type

**MdrPostUsageReportsResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


