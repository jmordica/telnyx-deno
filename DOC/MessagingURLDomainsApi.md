# .MessagingURLDomainsApi

All URIs are relative to *https://api.telnyx.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listMessagingUrlDomains**](MessagingURLDomainsApi.md#listMessagingUrlDomains) | **GET** /messaging_url_domains | List messaging URL domains


# **listMessagingUrlDomains**
> ListMessagingProfileUrlDomainsResponse listMessagingUrlDomains()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MessagingURLDomainsApi(configuration);

let body:.MessagingURLDomainsApiListMessagingUrlDomainsRequest = {
  // number | The page number to load (optional)
  pageNumber: 1,
  // number | The size of the page (optional)
  pageSize: 20,
};

apiInstance.listMessagingUrlDomains(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pageNumber** | [**number**] | The page number to load | (optional) defaults to 1
 **pageSize** | [**number**] | The size of the page | (optional) defaults to 20


### Return type

**ListMessagingProfileUrlDomainsResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response with details about a messaging URL domain. |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


