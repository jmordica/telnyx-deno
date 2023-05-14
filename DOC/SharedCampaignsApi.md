# .SharedCampaignsApi

All URIs are relative to *https://api.telnyx.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getPartnerCampaignsSharedByUserPartnerCampaignSharedByMeGet**](SharedCampaignsApi.md#getPartnerCampaignsSharedByUserPartnerCampaignSharedByMeGet) | **GET** /partnerCampaign/sharedByMe | Get Partner Campaigns Shared By User
[**getSharingStatusPartnerCampaignCampaignIdSharingGet**](SharedCampaignsApi.md#getSharingStatusPartnerCampaignCampaignIdSharingGet) | **GET** /partnerCampaign/{campaignId}/sharing | Get Sharing Status


# **getPartnerCampaignsSharedByUserPartnerCampaignSharedByMeGet**
> SharedCampaignRecordSet getPartnerCampaignsSharedByUserPartnerCampaignSharedByMeGet()

Get all partner campaigns you have shared to Telnyx in a paginated fashion  This endpoint is currently limited to only returning shared campaigns that Telnyx has accepted. In other words, shared but pending campaigns are currently omitted from the response from this endpoint.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SharedCampaignsApi(configuration);

let body:.SharedCampaignsApiGetPartnerCampaignsSharedByUserPartnerCampaignSharedByMeGetRequest = {
  // number | The 1-indexed page number to get. The default value is `1`. (optional)
  page: 1,
  // number | The amount of records per page, limited to between 1 and 500 inclusive. The default value is `10`. (optional)
  recordsPerPage: 10,
};

apiInstance.getPartnerCampaignsSharedByUserPartnerCampaignSharedByMeGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | [**number**] | The 1-indexed page number to get. The default value is &#x60;1&#x60;. | (optional) defaults to 1
 **recordsPerPage** | [**number**] | The amount of records per page, limited to between 1 and 500 inclusive. The default value is &#x60;10&#x60;. | (optional) defaults to 10


### Return type

**SharedCampaignRecordSet**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getSharingStatusPartnerCampaignCampaignIdSharingGet**
> { [key: string]: CampaignSharingStatus; } getSharingStatusPartnerCampaignCampaignIdSharingGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SharedCampaignsApi(configuration);

let body:.SharedCampaignsApiGetSharingStatusPartnerCampaignCampaignIdSharingGetRequest = {
  // string | ID of the campaign in question
  campaignId: "campaignId_example",
};

apiInstance.getSharingStatusPartnerCampaignCampaignIdSharingGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **campaignId** | [**string**] | ID of the campaign in question | defaults to undefined


### Return type

**{ [key: string]: CampaignSharingStatus; }**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


