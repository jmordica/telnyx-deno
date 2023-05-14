# .MDRDetailReportsApi

All URIs are relative to *https://api.telnyx.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteMdrRequest**](MDRDetailReportsApi.md#deleteMdrRequest) | **DELETE** /reports/batch_mdr_reports/{id} | 
[**getCdrRequests**](MDRDetailReportsApi.md#getCdrRequests) | **GET** /reports/batch_mdr_reports | 
[**getMdrRequest**](MDRDetailReportsApi.md#getMdrRequest) | **GET** /reports/batch_mdr_reports/{id} | 
[**getPaginatedMdrs**](MDRDetailReportsApi.md#getPaginatedMdrs) | **GET** /reports/mdrs | 
[**submitMdrRequest**](MDRDetailReportsApi.md#submitMdrRequest) | **POST** /reports/batch_mdr_reports | 


# **deleteMdrRequest**
> MdrDeleteDetailReportResponse deleteMdrRequest()

Delete generated messaging detail report by id

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MDRDetailReportsApi(configuration);

let body:.MDRDetailReportsApiDeleteMdrRequestRequest = {
  // string
  id: ,
};

apiInstance.deleteMdrRequest(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] |  | defaults to undefined


### Return type

**MdrDeleteDetailReportResponse**

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

# **getCdrRequests**
> MdrGetDetailReportResponse getCdrRequests()

Fetch all previous requests for messaging detail reports. Messaging detail reports are reports for pulling all messaging records. 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MDRDetailReportsApi(configuration);

let body:.MDRDetailReportsApiGetCdrRequestsRequest = {
  // number | Page number (optional)
  pageNumber: 1,
  // number | Size of the page (optional)
  pageSize: 20,
};

apiInstance.getCdrRequests(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pageNumber** | [**number**] | Page number | (optional) defaults to 1
 **pageSize** | [**number**] | Size of the page | (optional) defaults to 20


### Return type

**MdrGetDetailReportResponse**

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

# **getMdrRequest**
> MdrGetDetailReportByIdResponse getMdrRequest()

Fetch single messaging detail report by id.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MDRDetailReportsApi(configuration);

let body:.MDRDetailReportsApiGetMdrRequestRequest = {
  // string
  id: ,
};

apiInstance.getMdrRequest(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] |  | defaults to undefined


### Return type

**MdrGetDetailReportByIdResponse**

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

# **getPaginatedMdrs**
> MdrGetDetailResponse getPaginatedMdrs()

Fetch all Mdr records 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MDRDetailReportsApi(configuration);

let body:.MDRDetailReportsApiGetPaginatedMdrsRequest = {
  // string | Pagination start date (optional)
  startDate: "start_date_example",
  // string | Pagination end date (optional)
  endDate: "end_date_example",
  // string (optional)
  id: "e093fbe0-5bde-11eb-ae93-0242ac130002",
  // 'INBOUND' | 'OUTBOUND' (optional)
  direction: "INBOUND",
  // string (optional)
  profile: "My profile",
  // string (optional)
  cld: "+15551237654",
  // string (optional)
  cli: "+15551237654",
  // 'GW_TIMEOUT' | 'DELIVERED' | 'DLR_UNCONFIRMED' | 'DLR_TIMEOUT' | 'RECEIVED' | 'GW_REJECT' | 'FAILED' (optional)
  status: "DELIVERED",
  // 'SMS' | 'MMS' (optional)
  messageType: "SMS",
};

apiInstance.getPaginatedMdrs(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **startDate** | [**string**] | Pagination start date | (optional) defaults to undefined
 **endDate** | [**string**] | Pagination end date | (optional) defaults to undefined
 **id** | [**string**] |  | (optional) defaults to undefined
 **direction** | [**&#39;INBOUND&#39; | &#39;OUTBOUND&#39;**]**Array<&#39;INBOUND&#39; &#124; &#39;OUTBOUND&#39;>** |  | (optional) defaults to undefined
 **profile** | [**string**] |  | (optional) defaults to undefined
 **cld** | [**string**] |  | (optional) defaults to undefined
 **cli** | [**string**] |  | (optional) defaults to undefined
 **status** | [**&#39;GW_TIMEOUT&#39; | &#39;DELIVERED&#39; | &#39;DLR_UNCONFIRMED&#39; | &#39;DLR_TIMEOUT&#39; | &#39;RECEIVED&#39; | &#39;GW_REJECT&#39; | &#39;FAILED&#39;**]**Array<&#39;GW_TIMEOUT&#39; &#124; &#39;DELIVERED&#39; &#124; &#39;DLR_UNCONFIRMED&#39; &#124; &#39;DLR_TIMEOUT&#39; &#124; &#39;RECEIVED&#39; &#124; &#39;GW_REJECT&#39; &#124; &#39;FAILED&#39;>** |  | (optional) defaults to undefined
 **messageType** | [**&#39;SMS&#39; | &#39;MMS&#39;**]**Array<&#39;SMS&#39; &#124; &#39;MMS&#39;>** |  | (optional) defaults to undefined


### Return type

**MdrGetDetailResponse**

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

# **submitMdrRequest**
> MdrPostDetailReportResponse submitMdrRequest(mdrPostDetailReportRequest)

Submit a request for new messaging detail report. Messaging detail report pulls all raw messaging data according to defined filters.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MDRDetailReportsApi(configuration);

let body:.MDRDetailReportsApiSubmitMdrRequestRequest = {
  // MdrPostDetailReportRequest | Mdr detail request data
  mdrPostDetailReportRequest: {
    startDate: new Date('2020-07-01T00:00:00-06:00'),
    endDate: new Date('2020-07-01T00:00:00-06:00'),
    directions: [
      "INBOUND",
    ],
    recordTypes: [
      "INCOMPLETE",
    ],
    connections: [
      1,
    ],
    reportName: "reportName_example",
    includeMessageBody: true,
    filters: [
      {
        filterType: "and",
        cli: "+13129457420",
        cliFilter: "contains",
        cld: "+13129457420",
        cldFilter: "contains",
        tagsList: "tag1",
        billingGroup: "adfaa016-f921-4b6c-97bb-e4c1dad231c5",
      },
    ],
    profiles: "My profile",
  },
};

apiInstance.submitMdrRequest(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **mdrPostDetailReportRequest** | **MdrPostDetailReportRequest**| Mdr detail request data |


### Return type

**MdrPostDetailReportResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


