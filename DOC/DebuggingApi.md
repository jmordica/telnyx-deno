# .DebuggingApi

All URIs are relative to *https://api.telnyx.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listCallEvents**](DebuggingApi.md#listCallEvents) | **GET** /call_events | List call events


# **listCallEvents**
> ListCallEventsResponse listCallEvents()

Filters call events by given filter parameters. Events are ordered by `event_timestamp`. If filter for `call_leg_id` or `call_session_id` is not present, it only filters events from the last 24 hours.  **Note**: Only one `filter[event_timestamp]` can be passed. 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DebuggingApi(configuration);

let body:.DebuggingApiListCallEventsRequest = {
  // string | The unique identifier of an individual call leg. (optional)
  filterCallLegId: "filter[call_leg_id]_example",
  // string | The unique identifier of the call control session. A session may include multiple call leg events. (optional)
  filterCallSessionId: "filter[call_session_id]_example",
  // 'delivered' | 'failed' | Event status (optional)
  filterStatus: "delivered",
  // 'command' | 'webhook' | Event type (optional)
  filterType: "webhook",
  // string | Event timestamp: greater than (optional)
  filterEventTimestampGt: "2019-03-29T11:10:00Z",
  // string | Event timestamp: greater than or equal (optional)
  filterEventTimestampGte: "2019-03-29T11:10:00Z",
  // string | Event timestamp: lower than (optional)
  filterEventTimestampLt: "2019-03-29T11:10:00Z",
  // string | Event timestamp: lower than or equal (optional)
  filterEventTimestampLte: "2019-03-29T11:10:00Z",
  // string | Event timestamp: equal (optional)
  filterEventTimestampEq: "2019-03-29T11:10:00Z",
  // number | The page number to load (optional)
  pageNumber: 1,
  // number | The size of the page (optional)
  pageSize: 20,
};

apiInstance.listCallEvents(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filterCallLegId** | [**string**] | The unique identifier of an individual call leg. | (optional) defaults to undefined
 **filterCallSessionId** | [**string**] | The unique identifier of the call control session. A session may include multiple call leg events. | (optional) defaults to undefined
 **filterStatus** | [**&#39;delivered&#39; | &#39;failed&#39;**]**Array<&#39;delivered&#39; &#124; &#39;failed&#39;>** | Event status | (optional) defaults to undefined
 **filterType** | [**&#39;command&#39; | &#39;webhook&#39;**]**Array<&#39;command&#39; &#124; &#39;webhook&#39;>** | Event type | (optional) defaults to undefined
 **filterEventTimestampGt** | [**string**] | Event timestamp: greater than | (optional) defaults to undefined
 **filterEventTimestampGte** | [**string**] | Event timestamp: greater than or equal | (optional) defaults to undefined
 **filterEventTimestampLt** | [**string**] | Event timestamp: lower than | (optional) defaults to undefined
 **filterEventTimestampLte** | [**string**] | Event timestamp: lower than or equal | (optional) defaults to undefined
 **filterEventTimestampEq** | [**string**] | Event timestamp: equal | (optional) defaults to undefined
 **pageNumber** | [**number**] | The page number to load | (optional) defaults to 1
 **pageSize** | [**number**] | The size of the page | (optional) defaults to 20


### Return type

**ListCallEventsResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response with a list of call events. |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


