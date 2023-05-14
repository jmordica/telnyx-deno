# .InboundChannelsApi

All URIs are relative to *https://api.telnyx.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listOutboundChannels**](InboundChannelsApi.md#listOutboundChannels) | **GET** /phone_numbers/inbound_channels | Retrieve your inbound channels
[**updateOutboundChannels**](InboundChannelsApi.md#updateOutboundChannels) | **PATCH** /phone_numbers/inbound_channels | Update inbound channels


# **listOutboundChannels**
> ListOutboundChannels200Response listOutboundChannels()

Returns the inbound channels for your account. Inbound channels allows you to use Channel Billing for calls to your Telnyx phone numbers. Please check the Telnyx Support Articles section for full information and examples of how to utilize Channel Billing.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .InboundChannelsApi(configuration);

let body:any = {};

apiInstance.listOutboundChannels(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**ListOutboundChannels200Response**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Inbound Channels Response |  -  |
**401** | Unauthorized |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity. Check message field in response for details. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateOutboundChannels**
> UpdateOutboundChannels200Response updateOutboundChannels(updateOutboundChannelsRequest)

Update the inbound channels for the account

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .InboundChannelsApi(configuration);

let body:.InboundChannelsApiUpdateOutboundChannelsRequest = {
  // UpdateOutboundChannelsRequest | Inbound channels update
  updateOutboundChannelsRequest: {
    channels: 7,
  },
};

apiInstance.updateOutboundChannels(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateOutboundChannelsRequest** | **UpdateOutboundChannelsRequest**| Inbound channels update |


### Return type

**UpdateOutboundChannels200Response**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Expected Update response |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


