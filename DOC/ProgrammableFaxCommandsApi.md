# .ProgrammableFaxCommandsApi

All URIs are relative to *https://api.telnyx.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancelFax**](ProgrammableFaxCommandsApi.md#cancelFax) | **POST** /faxes/{id}/actions/cancel | Cancel a fax
[**deleteFax**](ProgrammableFaxCommandsApi.md#deleteFax) | **DELETE** /faxes/{id} | Delete a fax
[**listFaxes**](ProgrammableFaxCommandsApi.md#listFaxes) | **GET** /faxes | View a list of faxes
[**refreshFax**](ProgrammableFaxCommandsApi.md#refreshFax) | **POST** /faxes/{id}/actions/refresh | Refresh a fax
[**sendFax**](ProgrammableFaxCommandsApi.md#sendFax) | **POST** /faxes | Send a fax
[**viewFax**](ProgrammableFaxCommandsApi.md#viewFax) | **GET** /faxes/{id} | View a fax


# **cancelFax**
> SuccessfulResponseUponAcceptingCancelFaxCommand cancelFax()

Cancel the outbound fax that is in one of the following states: `queued`, `media.processed`, `originated` or `sending` 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProgrammableFaxCommandsApi(configuration);

let body:.ProgrammableFaxCommandsApiCancelFaxRequest = {
  // string | The unique identifier of a fax.
  id: "id_example",
};

apiInstance.cancelFax(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | The unique identifier of a fax. | defaults to undefined


### Return type

**SuccessfulResponseUponAcceptingCancelFaxCommand**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | Successful response upon accepting cancel fax command |  -  |
**404** | Conference does not exist |  -  |
**422** | Unprocessable entity |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteFax**
> void deleteFax()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProgrammableFaxCommandsApi(configuration);

let body:.ProgrammableFaxCommandsApiDeleteFaxRequest = {
  // string | The unique identifier of a fax.
  id: "id_example",
};

apiInstance.deleteFax(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | The unique identifier of a fax. | defaults to undefined


### Return type

**void**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | The resource was deleted successfully. |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listFaxes**
> ListFaxesResponse listFaxes()



### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProgrammableFaxCommandsApi(configuration);

let body:.ProgrammableFaxCommandsApiListFaxesRequest = {
  // Date | ISO 8601 date time for filtering faxes created after or on that date (optional)
  filterCreatedAtGte: new Date('2020-02-02T22:25:27.521992Z'),
  // Date | ISO 8601 date time for filtering faxes created after that date (optional)
  filterCreatedAtGt: new Date('2020-02-02T22:25:27.521992Z'),
  // Date | ISO 8601 formatted date time for filtering faxes created on or before that date (optional)
  filterCreatedAtLte: new Date('2020-02-02T22:25:27.521992Z'),
  // Date | ISO 8601 formatted date time for filtering faxes created before that date (optional)
  filterCreatedAtLt: new Date('2020-02-02T22:25:27.521992Z'),
  // string | The direction, inbound or outbound, for filtering faxes sent from this account (optional)
  filterDirectionEq: "inbound",
  // string | The phone number, in E.164 format for filtering faxes sent from this number (optional)
  filterFromEq: "+13127367276",
  // number | Number of fax resourcxes for the single page returned (optional)
  pageSize: 2,
  // number | Number of the page to be retrieved (optional)
  pageNumber: 2,
};

apiInstance.listFaxes(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filterCreatedAtGte** | [**Date**] | ISO 8601 date time for filtering faxes created after or on that date | (optional) defaults to undefined
 **filterCreatedAtGt** | [**Date**] | ISO 8601 date time for filtering faxes created after that date | (optional) defaults to undefined
 **filterCreatedAtLte** | [**Date**] | ISO 8601 formatted date time for filtering faxes created on or before that date | (optional) defaults to undefined
 **filterCreatedAtLt** | [**Date**] | ISO 8601 formatted date time for filtering faxes created before that date | (optional) defaults to undefined
 **filterDirectionEq** | [**string**] | The direction, inbound or outbound, for filtering faxes sent from this account | (optional) defaults to undefined
 **filterFromEq** | [**string**] | The phone number, in E.164 format for filtering faxes sent from this number | (optional) defaults to undefined
 **pageSize** | [**number**] | Number of fax resourcxes for the single page returned | (optional) defaults to undefined
 **pageNumber** | [**number**] | Number of the page to be retrieved | (optional) defaults to undefined


### Return type

**ListFaxesResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List faxes response |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **refreshFax**
> RefreshFaxResponse refreshFax()

Refreshes the inbound fax\'s media_url when it has expired

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProgrammableFaxCommandsApi(configuration);

let body:.ProgrammableFaxCommandsApiRefreshFaxRequest = {
  // string | The unique identifier of a fax.
  id: "id_example",
};

apiInstance.refreshFax(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | The unique identifier of a fax. | defaults to undefined


### Return type

**RefreshFaxResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Refresh fax response |  -  |
**404** | Conference does not exist |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **sendFax**
> any sendFax(sendFaxRequest)

Send a fax. Files have size limits and page count limit validations. If a file is bigger than 50MB or has more than 350 pages it will fail with `file_size_limit_exceeded` and `page_count_limit_exceeded` respectively.   **Expected Webhooks:**  - `fax.queued` - `fax.media.processed` - `fax.sending.started` - `fax.delivered` - `fax.failed` 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProgrammableFaxCommandsApi(configuration);

let body:.ProgrammableFaxCommandsApiSendFaxRequest = {
  // SendFaxRequest | Send fax request
  sendFaxRequest: {
    connectionId: "234423",
    mediaUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
    mediaName: "my_media_uploaded_to_media_storage_api",
    to: "+13127367276",
    _from: "+13125790015",
    quality: "high",
    t38Enabled: true,
    monochrome: false,
    storeMedia: false,
    webhookUrl: "https://www.example.com/server-b/",
  },
};

apiInstance.sendFax(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sendFaxRequest** | **SendFaxRequest**| Send fax request |


### Return type

**any**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json, multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | Send fax response |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **viewFax**
> GetFaxResponse viewFax()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProgrammableFaxCommandsApi(configuration);

let body:.ProgrammableFaxCommandsApiViewFaxRequest = {
  // string | The unique identifier of a fax.
  id: "id_example",
};

apiInstance.viewFax(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | The unique identifier of a fax. | defaults to undefined


### Return type

**GetFaxResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Get fax response |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


