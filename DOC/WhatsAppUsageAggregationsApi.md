# .WhatsAppUsageAggregationsApi

All URIs are relative to *https://api.telnyx.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getUsageAggregationsSync**](WhatsAppUsageAggregationsApi.md#getUsageAggregationsSync) | **GET** /whatsapp_usage_aggregations | 


# **getUsageAggregationsSync**
> WhatsAppUsageAggregationsResponseContainer getUsageAggregationsSync()

Generate and fetch WhatsApp usage aggregations synchronously. This endpoint will both generate and fetch the WhatsApp aggregations over a specified time period. 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .WhatsAppUsageAggregationsApi(configuration);

let body:.WhatsAppUsageAggregationsApiGetUsageAggregationsSyncRequest = {
  // Date (optional)
  startDate: new Date('2020-07-01T00:00:00-06:00'),
  // Date (optional)
  endDate: new Date('2020-07-01T00:00:00-06:00'),
};

apiInstance.getUsageAggregationsSync(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **startDate** | [**Date**] |  | (optional) defaults to undefined
 **endDate** | [**Date**] |  | (optional) defaults to undefined


### Return type

**WhatsAppUsageAggregationsResponseContainer**

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


