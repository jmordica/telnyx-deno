# .ReportsApi

All URIs are relative to *https://api.telnyx.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createLedgerBillingGroupReport**](ReportsApi.md#createLedgerBillingGroupReport) | **POST** /ledger_billing_group_reports | Create a ledger billing group report
[**retrieveLedgerBillingGroupReport**](ReportsApi.md#retrieveLedgerBillingGroupReport) | **GET** /ledger_billing_group_reports/{id} | Retrieve a ledger billing group report


# **createLedgerBillingGroupReport**
> CreateLedgerBillingGroupReport200Response createLedgerBillingGroupReport(newLedgerBillingGroupReport)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ReportsApi(configuration);

let body:.ReportsApiCreateLedgerBillingGroupReportRequest = {
  // NewLedgerBillingGroupReport | New ledger billing group report parameters
  newLedgerBillingGroupReport: null,
};

apiInstance.createLedgerBillingGroupReport(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **newLedgerBillingGroupReport** | **NewLedgerBillingGroupReport**| New ledger billing group report parameters |


### Return type

**CreateLedgerBillingGroupReport200Response**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Expected ledger billing group report response to a valid request |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **retrieveLedgerBillingGroupReport**
> CreateLedgerBillingGroupReport200Response retrieveLedgerBillingGroupReport()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ReportsApi(configuration);

let body:.ReportsApiRetrieveLedgerBillingGroupReportRequest = {
  // string | The id of the ledger billing group report
  id: "id_example",
};

apiInstance.retrieveLedgerBillingGroupReport(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | The id of the ledger billing group report | defaults to undefined


### Return type

**CreateLedgerBillingGroupReport200Response**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Expected ledger billing group report response to a valid request |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


