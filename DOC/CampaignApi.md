# .CampaignApi

All URIs are relative to *https://api.telnyx.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**acceptSharedCampaignCampaignAcceptSharingCampaignIdPost**](CampaignApi.md#acceptSharedCampaignCampaignAcceptSharingCampaignIdPost) | **POST** /campaign/acceptSharing/{campaignId} | Accept Shared Campaign
[**deactivateMyCampaignCampaignCampaignIdDelete**](CampaignApi.md#deactivateMyCampaignCampaignCampaignIdDelete) | **DELETE** /campaign/{campaignId} | Deactivate My Campaign
[**getCampaignCostCampaignUsecaseCostGet**](CampaignApi.md#getCampaignCostCampaignUsecaseCostGet) | **GET** /campaign/usecase/cost | Get Campaign Cost
[**getCampaignMnoMetadataCampaignCampaignIdMnoMetadataGet**](CampaignApi.md#getCampaignMnoMetadataCampaignCampaignIdMnoMetadataGet) | **GET** /campaign/{campaignId}/mnoMetadata | Get Campaign Mno Metadata
[**getMyCampaignCampaignCampaignIdGet**](CampaignApi.md#getMyCampaignCampaignCampaignIdGet) | **GET** /campaign/{campaignId} | Get My Campaign
[**getMyCampaignOperationStatusCampaignCampaignIdOperationStatusGet**](CampaignApi.md#getMyCampaignOperationStatusCampaignCampaignIdOperationStatusGet) | **GET** /campaign/{campaignId}/operationStatus | Get My Campaign Operation Status
[**getMyOsrCampaignAttributesCampaignCampaignIdOsrAttributesGet**](CampaignApi.md#getMyOsrCampaignAttributesCampaignCampaignIdOsrAttributesGet) | **GET** /campaign/{campaignId}/osr/attributes | Get My Osr Campaign Attributes
[**getSharingStatusCampaignCampaignIdSharingGet**](CampaignApi.md#getSharingStatusCampaignCampaignIdSharingGet) | **GET** /campaign/{campaignId}/sharing | Get Sharing Status
[**listCampaignsCampaignGet**](CampaignApi.md#listCampaignsCampaignGet) | **GET** /campaign | List Campaigns
[**qualifyByUsecaseCampaignBuilderBrandBrandIdUsecaseUsecaseGet**](CampaignApi.md#qualifyByUsecaseCampaignBuilderBrandBrandIdUsecaseUsecaseGet) | **GET** /campaignBuilder/brand/{brandId}/usecase/{usecase} | Qualify By Usecase
[**submitCampaignCampaignBuilderPost**](CampaignApi.md#submitCampaignCampaignBuilderPost) | **POST** /campaignBuilder | Submit Campaign
[**updateMyCampaignCampaignCampaignIdPut**](CampaignApi.md#updateMyCampaignCampaignCampaignIdPut) | **PUT** /campaign/{campaignId} | Update My Campaign


# **acceptSharedCampaignCampaignAcceptSharingCampaignIdPost**
> any acceptSharedCampaignCampaignAcceptSharingCampaignIdPost()

Manually accept a campaign shared with Telnyx

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CampaignApi(configuration);

let body:.CampaignApiAcceptSharedCampaignCampaignAcceptSharingCampaignIdPostRequest = {
  // string | TCR\'s ID for the campaign to import
  campaignId: "C8Q6ZGCK",
};

apiInstance.acceptSharedCampaignCampaignAcceptSharingCampaignIdPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **campaignId** | [**string**] | TCR\&#39;s ID for the campaign to import | defaults to undefined


### Return type

**any**

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

# **deactivateMyCampaignCampaignCampaignIdDelete**
> CampaignDeletionResponse deactivateMyCampaignCampaignCampaignIdDelete()

Terminate a campaign. Note that once deactivated, a campaign cannot be restored.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CampaignApi(configuration);

let body:.CampaignApiDeactivateMyCampaignCampaignCampaignIdDeleteRequest = {
  // string
  campaignId: "campaignId_example",
};

apiInstance.deactivateMyCampaignCampaignCampaignIdDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **campaignId** | [**string**] |  | defaults to undefined


### Return type

**CampaignDeletionResponse**

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

# **getCampaignCostCampaignUsecaseCostGet**
> CampaignCost getCampaignCostCampaignUsecaseCostGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CampaignApi(configuration);

let body:.CampaignApiGetCampaignCostCampaignUsecaseCostGetRequest = {
  // string
  usecase: "usecase_example",
};

apiInstance.getCampaignCostCampaignUsecaseCostGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **usecase** | [**string**] |  | defaults to undefined


### Return type

**CampaignCost**

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

# **getCampaignMnoMetadataCampaignCampaignIdMnoMetadataGet**
> any getCampaignMnoMetadataCampaignCampaignIdMnoMetadataGet()

Get the campaign metadata for each MNO it was submitted to

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CampaignApi(configuration);

let body:.CampaignApiGetCampaignMnoMetadataCampaignCampaignIdMnoMetadataGetRequest = {
  // string | ID of the campaign in question
  campaignId: "campaignId_example",
};

apiInstance.getCampaignMnoMetadataCampaignCampaignIdMnoMetadataGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **campaignId** | [**string**] | ID of the campaign in question | defaults to undefined


### Return type

**any**

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

# **getMyCampaignCampaignCampaignIdGet**
> CampaignCSP getMyCampaignCampaignCampaignIdGet()

Retrieve campaign details by `campaignId`.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CampaignApi(configuration);

let body:.CampaignApiGetMyCampaignCampaignCampaignIdGetRequest = {
  // string
  campaignId: "campaignId_example",
};

apiInstance.getMyCampaignCampaignCampaignIdGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **campaignId** | [**string**] |  | defaults to undefined


### Return type

**CampaignCSP**

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

# **getMyCampaignOperationStatusCampaignCampaignIdOperationStatusGet**
> any getMyCampaignOperationStatusCampaignCampaignIdOperationStatusGet()

Retrieve campaign\'s operation status at MNO level.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CampaignApi(configuration);

let body:.CampaignApiGetMyCampaignOperationStatusCampaignCampaignIdOperationStatusGetRequest = {
  // string
  campaignId: "campaignId_example",
};

apiInstance.getMyCampaignOperationStatusCampaignCampaignIdOperationStatusGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **campaignId** | [**string**] |  | defaults to undefined


### Return type

**any**

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

# **getMyOsrCampaignAttributesCampaignCampaignIdOsrAttributesGet**
> any getMyOsrCampaignAttributesCampaignCampaignIdOsrAttributesGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CampaignApi(configuration);

let body:.CampaignApiGetMyOsrCampaignAttributesCampaignCampaignIdOsrAttributesGetRequest = {
  // string
  campaignId: "campaignId_example",
};

apiInstance.getMyOsrCampaignAttributesCampaignCampaignIdOsrAttributesGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **campaignId** | [**string**] |  | defaults to undefined


### Return type

**any**

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

# **getSharingStatusCampaignCampaignIdSharingGet**
> CampaignSharingChain getSharingStatusCampaignCampaignIdSharingGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CampaignApi(configuration);

let body:.CampaignApiGetSharingStatusCampaignCampaignIdSharingGetRequest = {
  // string | ID of the campaign in question
  campaignId: "campaignId_example",
};

apiInstance.getSharingStatusCampaignCampaignIdSharingGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **campaignId** | [**string**] | ID of the campaign in question | defaults to undefined


### Return type

**CampaignSharingChain**

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

# **listCampaignsCampaignGet**
> CampaignRecordSetCSP listCampaignsCampaignGet()

Retrieve a list of campaigns associated with a supplied `brandId`.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CampaignApi(configuration);

let body:.CampaignApiListCampaignsCampaignGetRequest = {
  // string
  brandId: "brandId_example",
  // number | The 1-indexed page number to get. The default value is `1`. (optional)
  page: 1,
  // number | The amount of records per page, limited to between 1 and 500 inclusive. The default value is `10`. (optional)
  recordsPerPage: 10,
};

apiInstance.listCampaignsCampaignGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **brandId** | [**string**] |  | defaults to undefined
 **page** | [**number**] | The 1-indexed page number to get. The default value is &#x60;1&#x60;. | (optional) defaults to 1
 **recordsPerPage** | [**number**] | The amount of records per page, limited to between 1 and 500 inclusive. The default value is &#x60;10&#x60;. | (optional) defaults to 10


### Return type

**CampaignRecordSetCSP**

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

# **qualifyByUsecaseCampaignBuilderBrandBrandIdUsecaseUsecaseGet**
> UsecaseMetadata qualifyByUsecaseCampaignBuilderBrandBrandIdUsecaseUsecaseGet()

This endpoint allows you to see whether or not the supplied brand is suitable for your desired campaign use case.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CampaignApi(configuration);

let body:.CampaignApiQualifyByUsecaseCampaignBuilderBrandBrandIdUsecaseUsecaseGetRequest = {
  // string
  usecase: "usecase_example",
  // string
  brandId: "brandId_example",
};

apiInstance.qualifyByUsecaseCampaignBuilderBrandBrandIdUsecaseUsecaseGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **usecase** | [**string**] |  | defaults to undefined
 **brandId** | [**string**] |  | defaults to undefined


### Return type

**UsecaseMetadata**

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

# **submitCampaignCampaignBuilderPost**
> any | CampaignCSP submitCampaignCampaignBuilderPost(campaignRequest)

Before creating a campaign, use the [Qualify By Usecase endpoint](https://developers.telnyx.com/docs/api/v2/10dlc/Campaign#qualify_by_usecase_campaignBuilder_brand__brand_id__usecase__usecase__get) to ensure that the brand you want to assign a new campaign to is qualified for the desired use case of that campaign. **Please note:** After campaign creation, you\'ll only be able to edit the campaign\'s sample messages. Creating a campaign will entail an upfront, non-refundable three month\'s cost that will depend on the campaign\'s use case ([see 10DLC Costs section for details](https://developers.telnyx.com/docs/api/v2/10dlc)).

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CampaignApi(configuration);

let body:.CampaignApiSubmitCampaignCampaignBuilderPostRequest = {
  // CampaignRequest
  campaignRequest: {
    affiliateMarketing: true,
    ageGated: true,
    autoRenewal: true,
    brandId: "brandId_example",
    description: "description_example",
    directLending: true,
    embeddedLink: true,
    embeddedPhone: true,
    helpKeywords: "helpKeywords_example",
    helpMessage: "helpMessage_example",
    messageFlow: "messageFlow_example",
    mnoIds: [
      1,
    ],
    numberPool: true,
    optinKeywords: "optinKeywords_example",
    optinMessage: "optinMessage_example",
    optoutKeywords: "optoutKeywords_example",
    optoutMessage: "optoutMessage_example",
    referenceId: "referenceId_example",
    resellerId: "resellerId_example",
    sample1: "sample1_example",
    sample2: "sample2_example",
    sample3: "sample3_example",
    sample4: "sample4_example",
    sample5: "sample5_example",
    subUsecases: [
      "subUsecases_example",
    ],
    subscriberHelp: true,
    subscriberOptin: true,
    subscriberOptout: true,
    tag: [
      "tag_example",
    ],
    termsAndConditions: true,
    usecase: "usecase_example",
    webhookURL: "webhookURL_example",
    webhookFailoverURL: "webhookFailoverURL_example",
  },
};

apiInstance.submitCampaignCampaignBuilderPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **campaignRequest** | **CampaignRequest**|  |


### Return type

**any | CampaignCSP**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateMyCampaignCampaignCampaignIdPut**
> Campaign updateMyCampaignCampaignCampaignIdPut(updateCampaign)

Update a campaign\'s properties by `campaignId`. **Please note:** only sample messages are editable.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CampaignApi(configuration);

let body:.CampaignApiUpdateMyCampaignCampaignCampaignIdPutRequest = {
  // string
  campaignId: "campaignId_example",
  // UpdateCampaign
  updateCampaign: {
    resellerId: "resellerId_example",
    sample1: "sample1_example",
    sample2: "sample2_example",
    sample3: "sample3_example",
    sample4: "sample4_example",
    sample5: "sample5_example",
    messageFlow: "messageFlow_example",
    helpMessage: "helpMessage_example",
    autoRenewal: true,
  },
};

apiInstance.updateMyCampaignCampaignCampaignIdPut(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateCampaign** | **UpdateCampaign**|  |
 **campaignId** | [**string**] |  | defaults to undefined


### Return type

**Campaign**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


