# .WhatsAppDetailReportsApi

All URIs are relative to *https://api.telnyx.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteRequest**](WhatsAppDetailReportsApi.md#deleteRequest) | **DELETE** /whatsapp_detail_record_reports/{id} | 
[**getRequest**](WhatsAppDetailReportsApi.md#getRequest) | **GET** /whatsapp_detail_record_reports/{id} | 
[**getRequests**](WhatsAppDetailReportsApi.md#getRequests) | **GET** /whatsapp_detail_record_reports | 
[**submitRequest**](WhatsAppDetailReportsApi.md#submitRequest) | **POST** /whatsapp_detail_record_reports | 


# **deleteRequest**
> WhatsAppDetailReportResponse deleteRequest()

Delete generated WhatsApp detail report by id

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .WhatsAppDetailReportsApi(configuration);

let body:.WhatsAppDetailReportsApiDeleteRequestRequest = {
  // string
  id: ,
};

apiInstance.deleteRequest(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] |  | defaults to undefined


### Return type

**WhatsAppDetailReportResponse**

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

# **getRequest**
> WhatsAppDetailReportResponse getRequest()

Fetch single whatsapp detail report by id.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .WhatsAppDetailReportsApi(configuration);

let body:.WhatsAppDetailReportsApiGetRequestRequest = {
  // string
  id: ,
};

apiInstance.getRequest(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] |  | defaults to undefined


### Return type

**WhatsAppDetailReportResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**404** | Resource not found |  -  |
**200** | Successful |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getRequests**
> WhatsAppGetAllDetailReportResponse getRequests()

Fetch all previous requests for WhatsApp detail reports. WhatsApp detail reports are reports for pulling all WhatsApp records. 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .WhatsAppDetailReportsApi(configuration);

let body:.WhatsAppDetailReportsApiGetRequestsRequest = {
  // number | Page number (optional)
  pageNumber: 1,
  // number | Size of the page (optional)
  pageSize: 20,
};

apiInstance.getRequests(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pageNumber** | [**number**] | Page number | (optional) defaults to 1
 **pageSize** | [**number**] | Size of the page | (optional) defaults to 20


### Return type

**WhatsAppGetAllDetailReportResponse**

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

# **submitRequest**
> WhatsAppDetailReportResponse submitRequest(whatsAppReportsReq)

Submit a request for new WhatsApp detail report. WhatsApp detail report pulls all raw WhatsApp data according to defined filters.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .WhatsAppDetailReportsApi(configuration);

let body:.WhatsAppDetailReportsApiSubmitRequestRequest = {
  // WhatsAppReportsReq | WhatsApp detail request data
  whatsAppReportsReq: {
    startDate: new Date('2021-05-01T00:00:00-06:00'),
    endDate: new Date('2021-05-01T00:00:00-06:00'),
  },
};

apiInstance.submitRequest(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **whatsAppReportsReq** | **WhatsAppReportsReq**| WhatsApp detail request data |


### Return type

**WhatsAppDetailReportResponse**

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


