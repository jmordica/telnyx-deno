# .CDRUsageReportsApi

All URIs are relative to *https://api.telnyx.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getUsageReportSync**](CDRUsageReportsApi.md#getUsageReportSync) | **GET** /reports/cdr_usage_reports/sync | 


# **getUsageReportSync**
> CdrGetSyncUsageReportResponse getUsageReportSync()

Generate and fetch voice usage report synchronously. This endpoint will both generate and fetch the voice report over a specified time period. No polling is necessary but the response may take up to a couple of minutes. 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CDRUsageReportsApi(configuration);

let body:.CDRUsageReportsApiGetUsageReportSyncRequest = {
  // 'NO_AGGREGATION' | 'CONNECTION' | 'TAG' | 'BILLING_GROUP'
  aggregationType: "no_aggregation",
  // 'NO_BREAKDOWN' | 'DID_VS_TOLL_FREE' | 'COUNTRY' | 'DID_VS_TOLL_FREE_PER_COUNTRY'
  productBreakdown: "no_breakdown",
  // Date (optional)
  startDate: new Date('2020-07-01T00:00:00-06:00'),
  // Date (optional)
  endDate: new Date('2020-07-01T00:00:00-06:00'),
  // Array<number> (optional)
  connections: [
    1234567890123,
  ],
};

apiInstance.getUsageReportSync(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **aggregationType** | [**&#39;NO_AGGREGATION&#39; | &#39;CONNECTION&#39; | &#39;TAG&#39; | &#39;BILLING_GROUP&#39;**]**Array<&#39;NO_AGGREGATION&#39; &#124; &#39;CONNECTION&#39; &#124; &#39;TAG&#39; &#124; &#39;BILLING_GROUP&#39;>** |  | defaults to undefined
 **productBreakdown** | [**&#39;NO_BREAKDOWN&#39; | &#39;DID_VS_TOLL_FREE&#39; | &#39;COUNTRY&#39; | &#39;DID_VS_TOLL_FREE_PER_COUNTRY&#39;**]**Array<&#39;NO_BREAKDOWN&#39; &#124; &#39;DID_VS_TOLL_FREE&#39; &#124; &#39;COUNTRY&#39; &#124; &#39;DID_VS_TOLL_FREE_PER_COUNTRY&#39;>** |  | defaults to undefined
 **startDate** | [**Date**] |  | (optional) defaults to undefined
 **endDate** | [**Date**] |  | (optional) defaults to undefined
 **connections** | **Array&lt;number&gt;** |  | (optional) defaults to undefined


### Return type

**CdrGetSyncUsageReportResponse**

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


