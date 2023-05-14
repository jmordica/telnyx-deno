# .WDRDetailReportsApi

All URIs are relative to *https://api.telnyx.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getPaginatedWdrs**](WDRDetailReportsApi.md#getPaginatedWdrs) | **GET** /reports/wdrs | 


# **getPaginatedWdrs**
> ExternalWdrGetDetailResponse getPaginatedWdrs()

Fetch all Wdr records 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .WDRDetailReportsApi(configuration);

let body:.WDRDetailReportsApiGetPaginatedWdrsRequest = {
  // string | Start date (optional)
  startDate: "2021-05-01T00:00:00Z",
  // string | End date (optional)
  endDate: "2021-06-01T00:00:00Z",
  // string (optional)
  id: "e093fbe0-5bde-11eb-ae93-0242ac130002",
  // string (optional)
  mcc: "204",
  // string (optional)
  mnc: "01",
  // string (optional)
  imsi: "123456",
  // string (optional)
  simGroupName: "sim name",
  // string (optional)
  simGroupId: "f05a189f-7c46-4531-ac56-1460dc465a42",
  // string (optional)
  simCardId: "877f80a6-e5b2-4687-9a04-88076265720f",
  // string (optional)
  phoneNumber: "+12345678910",
  // number | Page number (optional)
  pageNumber: 1,
  // number | Size of the page (optional)
  pageSize: 20,
  // Array<string> (optional)
  sort: [
    "created_at",
  ],
};

apiInstance.getPaginatedWdrs(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **startDate** | [**string**] | Start date | (optional) defaults to undefined
 **endDate** | [**string**] | End date | (optional) defaults to undefined
 **id** | [**string**] |  | (optional) defaults to undefined
 **mcc** | [**string**] |  | (optional) defaults to undefined
 **mnc** | [**string**] |  | (optional) defaults to undefined
 **imsi** | [**string**] |  | (optional) defaults to undefined
 **simGroupName** | [**string**] |  | (optional) defaults to undefined
 **simGroupId** | [**string**] |  | (optional) defaults to undefined
 **simCardId** | [**string**] |  | (optional) defaults to undefined
 **phoneNumber** | [**string**] |  | (optional) defaults to undefined
 **pageNumber** | [**number**] | Page number | (optional) defaults to 1
 **pageSize** | [**number**] | Size of the page | (optional) defaults to 20
 **sort** | **Array&lt;string&gt;** |  | (optional) defaults to undefined


### Return type

**ExternalWdrGetDetailResponse**

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


