# .DetailRecordsApi

All URIs are relative to *https://api.telnyx.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**detailRecordsSearch**](DetailRecordsApi.md#detailRecordsSearch) | **GET** /detail_records | Search detail records


# **detailRecordsSearch**
> DetailRecordsSearchResponse detailRecordsSearch()

Search for any detail record across the Telnyx Platform. Examples and additional information found [here](/docs/v2/debugging/detail-record-search).

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DetailRecordsApi(configuration);

let body:.DetailRecordsApiDetailRecordsSearchRequest = {
  // 'amd' | 'conference' | 'conference-participant' | 'media_storage' | 'messaging' | 'verify' | 'whatsapp' | 'whatsapp-conversation' | 'wireless' | Filter by the given record type.
  filterRecordType: "messaging",
  // 'yesterday' | 'today' | 'tomorrow' | 'last_week' | 'this_week' | 'next_week' | 'last_month' | 'this_month' | 'next_month' | Filter by the given user-friendly date range. You can specify one of the following enum values, or a dynamic one using this format: last_N_days. (optional)
  filterDateRange: "today",
  // { [key: string]: any; } | Filter records on a given record attribute and value. <br/>Example: filter[status]=delivered (optional)
  filter: {},
  // number | Page number (optional)
  pageNumber: 1,
  // number | Page size (optional)
  pageSize: 20,
  // Array<string> | Specifies the sort order for results. <br/>Example: sort=-created_at (optional)
  sort: [
    "created_at",
  ],
};

apiInstance.detailRecordsSearch(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filterRecordType** | [**&#39;amd&#39; | &#39;conference&#39; | &#39;conference-participant&#39; | &#39;media_storage&#39; | &#39;messaging&#39; | &#39;verify&#39; | &#39;whatsapp&#39; | &#39;whatsapp-conversation&#39; | &#39;wireless&#39;**]**Array<&#39;amd&#39; &#124; &#39;conference&#39; &#124; &#39;conference-participant&#39; &#124; &#39;media_storage&#39; &#124; &#39;messaging&#39; &#124; &#39;verify&#39; &#124; &#39;whatsapp&#39; &#124; &#39;whatsapp-conversation&#39; &#124; &#39;wireless&#39;>** | Filter by the given record type. | defaults to undefined
 **filterDateRange** | [**&#39;yesterday&#39; | &#39;today&#39; | &#39;tomorrow&#39; | &#39;last_week&#39; | &#39;this_week&#39; | &#39;next_week&#39; | &#39;last_month&#39; | &#39;this_month&#39; | &#39;next_month&#39;**]**Array<&#39;yesterday&#39; &#124; &#39;today&#39; &#124; &#39;tomorrow&#39; &#124; &#39;last_week&#39; &#124; &#39;this_week&#39; &#124; &#39;next_week&#39; &#124; &#39;last_month&#39; &#124; &#39;this_month&#39; &#124; &#39;next_month&#39;>** | Filter by the given user-friendly date range. You can specify one of the following enum values, or a dynamic one using this format: last_N_days. | (optional) defaults to undefined
 **filter** | **{ [key: string]: any; }** | Filter records on a given record attribute and value. &lt;br/&gt;Example: filter[status]&#x3D;delivered | (optional) defaults to undefined
 **pageNumber** | [**number**] | Page number | (optional) defaults to 1
 **pageSize** | [**number**] | Page size | (optional) defaults to 20
 **sort** | **Array&lt;string&gt;** | Specifies the sort order for results. &lt;br/&gt;Example: sort&#x3D;-created_at | (optional) defaults to undefined


### Return type

**DetailRecordsSearchResponse**

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


