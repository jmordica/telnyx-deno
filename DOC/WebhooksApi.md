# .WebhooksApi

All URIs are relative to *https://api.telnyx.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getWebhookDeliveries**](WebhooksApi.md#getWebhookDeliveries) | **GET** /webhook_deliveries | List webhook deliveries
[**getWebhookDelivery**](WebhooksApi.md#getWebhookDelivery) | **GET** /webhook_deliveries/{id} | Find webhook_delivery details by ID


# **getWebhookDeliveries**
> GetWebhookDeliveries200Response getWebhookDeliveries()

Lists webhook_deliveries for the authenticated user

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .WebhooksApi(configuration);

let body:.WebhooksApiGetWebhookDeliveriesRequest = {
  // 'delivered' | 'failed' | Return only webhook_deliveries matching the given `status` (optional)
  filterStatusEq: "delivered",
  // string | Return only webhook_deliveries matching the given value of `event_type`. Accepts multiple values separated by a `,`. (optional)
  filterEventType: "call_initiated,call.initiated",
  // string | Return only webhook deliveries whose `webhook` component contains the given text (optional)
  filterWebhookContains: "call.initiated",
  // string | Return only webhook_deliveries whose `attempts` component contains the given text (optional)
  filterAttemptsContains: "https://fallback.example.com/webhooks",
  // string | Return only webhook_deliveries whose delivery started later than or at given ISO 8601 datetime (optional)
  filterStartedAtGte: "2019-03-29T11:10:00Z",
  // string | Return only webhook_deliveries whose delivery started earlier than or at given ISO 8601 datetime (optional)
  filterStartedAtLte: "2019-03-29T11:10:00Z",
  // string | Return only webhook_deliveries whose delivery finished later than or at given ISO 8601 datetime (optional)
  filterFinishedAtGte: "2019-03-29T11:10:00Z",
  // string | Return only webhook_deliveries whose delivery finished earlier than or at given ISO 8601 datetime (optional)
  filterFinishedAtLte: "2019-03-29T11:10:00Z",
  // number | The page number to load (optional)
  pageNumber: 1,
  // number | The size of the page (optional)
  pageSize: 20,
};

apiInstance.getWebhookDeliveries(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filterStatusEq** | [**&#39;delivered&#39; | &#39;failed&#39;**]**Array<&#39;delivered&#39; &#124; &#39;failed&#39;>** | Return only webhook_deliveries matching the given &#x60;status&#x60; | (optional) defaults to undefined
 **filterEventType** | [**string**] | Return only webhook_deliveries matching the given value of &#x60;event_type&#x60;. Accepts multiple values separated by a &#x60;,&#x60;. | (optional) defaults to undefined
 **filterWebhookContains** | [**string**] | Return only webhook deliveries whose &#x60;webhook&#x60; component contains the given text | (optional) defaults to undefined
 **filterAttemptsContains** | [**string**] | Return only webhook_deliveries whose &#x60;attempts&#x60; component contains the given text | (optional) defaults to undefined
 **filterStartedAtGte** | [**string**] | Return only webhook_deliveries whose delivery started later than or at given ISO 8601 datetime | (optional) defaults to undefined
 **filterStartedAtLte** | [**string**] | Return only webhook_deliveries whose delivery started earlier than or at given ISO 8601 datetime | (optional) defaults to undefined
 **filterFinishedAtGte** | [**string**] | Return only webhook_deliveries whose delivery finished later than or at given ISO 8601 datetime | (optional) defaults to undefined
 **filterFinishedAtLte** | [**string**] | Return only webhook_deliveries whose delivery finished earlier than or at given ISO 8601 datetime | (optional) defaults to undefined
 **pageNumber** | [**number**] | The page number to load | (optional) defaults to 1
 **pageSize** | [**number**] | The size of the page | (optional) defaults to 20


### Return type

**GetWebhookDeliveries200Response**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A paginated array of webhook_delivery attempts |  -  |
**401** | Unauthorized |  -  |
**422** | Unprocessable entity |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getWebhookDelivery**
> GetWebhookDelivery200Response getWebhookDelivery()

Provides webhook_delivery debug data, such as timestamps, delivery status and attempts.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .WebhooksApi(configuration);

let body:.WebhooksApiGetWebhookDeliveryRequest = {
  // string | Uniquely identifies the webhook_delivery.
  id: "c9c0797e-901d-4349-a33c-c2c8f31a92c2",
};

apiInstance.getWebhookDelivery(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Uniquely identifies the webhook_delivery. | defaults to undefined


### Return type

**GetWebhookDelivery200Response**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Webhook delivery record. |  -  |
**401** | Unauthorized |  -  |
**404** | WebhookDelivery not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


