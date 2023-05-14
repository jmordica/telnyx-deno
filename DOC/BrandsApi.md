# .BrandsApi

All URIs are relative to *https://api.telnyx.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createBrandBrandPost**](BrandsApi.md#createBrandBrandPost) | **POST** /brand | Create Brand
[**deleteBrandBrandBrandIdDelete**](BrandsApi.md#deleteBrandBrandBrandIdDelete) | **DELETE** /brand/{brandId} | Delete Brand
[**getBrandBrandBrandIdGet**](BrandsApi.md#getBrandBrandBrandIdGet) | **GET** /brand/{brandId} | Get Brand
[**getBrandFeedbackByIdBrandFeedbackBrandIdGet**](BrandsApi.md#getBrandFeedbackByIdBrandFeedbackBrandIdGet) | **GET** /brand/feedback/{brandId} | Get Brand Feedback By Id
[**importExternalVettingRecordBrandBrandIdExternalVettingPut**](BrandsApi.md#importExternalVettingRecordBrandBrandIdExternalVettingPut) | **PUT** /brand/{brandId}/externalVetting | Import External Vetting Record
[**listBrandsBrandGet**](BrandsApi.md#listBrandsBrandGet) | **GET** /brand | List Brands
[**listExternalVettingsBrandBrandIdExternalVettingGet**](BrandsApi.md#listExternalVettingsBrandBrandIdExternalVettingGet) | **GET** /brand/{brandId}/externalVetting | List External Vettings
[**orderBrandExternalVettingBrandBrandIdExternalVettingPost**](BrandsApi.md#orderBrandExternalVettingBrandBrandIdExternalVettingPost) | **POST** /brand/{brandId}/externalVetting | Order Brand External Vetting
[**revetBrandBrandBrandIdRevetPut**](BrandsApi.md#revetBrandBrandBrandIdRevetPut) | **PUT** /brand/{brandId}/revet | Revet Brand
[**updateBrandBrandBrandIdPut**](BrandsApi.md#updateBrandBrandBrandIdPut) | **PUT** /brand/{brandId} | Update Brand


# **createBrandBrandPost**
> any createBrandBrandPost(createBrand)

This endpoint is used to create a new brand. A brand is an entity created by The Campaign Registry (TCR) that represents an organization or a company. It is this entity that TCR created campaigns will be associated with. Each brand creation will entail an upfront, non-refundable $4 expense.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BrandsApi(configuration);

let body:.BrandsApiCreateBrandBrandPostRequest = {
  // CreateBrand
  createBrand: {
    entityType: null,
    displayName: "ABC Mobile",
    companyName: "ABC Inc.",
    firstName: "John",
    lastName: "Smith",
    ein: "111111111",
    phone: "+12024567890",
    street: "123",
    city: "New York",
    state: "NY",
    postalCode: "10001",
    country: "US",
    email: "email_example",
    stockSymbol: "ABC",
    stockExchange: null,
    ipAddress: "ipAddress_example",
    website: "http://www.abcmobile.com",
    vertical: null,
    isReseller: false,
    mock: false,
    mobilePhone: "+12024567890",
  },
};

apiInstance.createBrandBrandPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createBrand** | **CreateBrand**|  |


### Return type

**any**

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

# **deleteBrandBrandBrandIdDelete**
> any deleteBrandBrandBrandIdDelete()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BrandsApi(configuration);

let body:.BrandsApiDeleteBrandBrandBrandIdDeleteRequest = {
  // string
  brandId: "brandId_example",
};

apiInstance.deleteBrandBrandBrandIdDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **brandId** | [**string**] |  | defaults to undefined


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

# **getBrandBrandBrandIdGet**
> TelnyxBrand getBrandBrandBrandIdGet()

Retrieve a brand by `brandId`.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BrandsApi(configuration);

let body:.BrandsApiGetBrandBrandBrandIdGetRequest = {
  // string
  brandId: "brandId_example",
};

apiInstance.getBrandBrandBrandIdGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **brandId** | [**string**] |  | defaults to undefined


### Return type

**TelnyxBrand**

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

# **getBrandFeedbackByIdBrandFeedbackBrandIdGet**
> BrandFeedback getBrandFeedbackByIdBrandFeedbackBrandIdGet()

Get feedback about a brand by ID. This endpoint can be used after creating or revetting a brand.  Possible values for `.category[].id`:  * `TAX_ID` - Data mismatch related to tax id and its associated properties. * `STOCK_SYMBOL` - Non public entity registered as a public for profit entity or   the stock information mismatch. * `GOVERNMENT_ENTITY` - Non government entity registered as a government entity.   Must be a U.S. government entity. * `NONPROFIT` - Not a recognized non-profit entity. No IRS tax-exempt status   found. * `OTHERS` - Details of the data misrepresentation if any.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BrandsApi(configuration);

let body:.BrandsApiGetBrandFeedbackByIdBrandFeedbackBrandIdGetRequest = {
  // string
  brandId: "brandId_example",
};

apiInstance.getBrandFeedbackByIdBrandFeedbackBrandIdGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **brandId** | [**string**] |  | defaults to undefined


### Return type

**BrandFeedback**

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

# **importExternalVettingRecordBrandBrandIdExternalVettingPut**
> ExternalVetting importExternalVettingRecordBrandBrandIdExternalVettingPut(importExternalVetting)

This operation can be used to import an external vetting record from a TCR-approved vetting provider. If the vetting provider confirms validity of the record, it will be saved with the brand and will be considered for future campaign qualification.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BrandsApi(configuration);

let body:.BrandsApiImportExternalVettingRecordBrandBrandIdExternalVettingPutRequest = {
  // string
  brandId: "brandId_example",
  // ImportExternalVetting
  importExternalVetting: {
    evpId: "evpId_example",
    vettingId: "vettingId_example",
    vettingToken: "vettingToken_example",
  },
};

apiInstance.importExternalVettingRecordBrandBrandIdExternalVettingPut(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **importExternalVetting** | **ImportExternalVetting**|  |
 **brandId** | [**string**] |  | defaults to undefined


### Return type

**ExternalVetting**

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

# **listBrandsBrandGet**
> BrandRecordSetCSP listBrandsBrandGet()

This endpoint is used to list all brands associated with your organization.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BrandsApi(configuration);

let body:.BrandsApiListBrandsBrandGetRequest = {
  // number (optional)
  page: 1,
  // number | number of records per page. maximum of 500 (optional)
  recordsPerPage: 10,
  // string (optional)
  displayName: "displayName_example",
  // string (optional)
  entityType: "entityType_example",
  // string (optional)
  state: "state_example",
  // string (optional)
  country: "country_example",
};

apiInstance.listBrandsBrandGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | [**number**] |  | (optional) defaults to 1
 **recordsPerPage** | [**number**] | number of records per page. maximum of 500 | (optional) defaults to 10
 **displayName** | [**string**] |  | (optional) defaults to undefined
 **entityType** | [**string**] |  | (optional) defaults to undefined
 **state** | [**string**] |  | (optional) defaults to undefined
 **country** | [**string**] |  | (optional) defaults to undefined


### Return type

**BrandRecordSetCSP**

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

# **listExternalVettingsBrandBrandIdExternalVettingGet**
> any listExternalVettingsBrandBrandIdExternalVettingGet()

Get list of valid external vetting record for a given brand

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BrandsApi(configuration);

let body:.BrandsApiListExternalVettingsBrandBrandIdExternalVettingGetRequest = {
  // string
  brandId: "brandId_example",
};

apiInstance.listExternalVettingsBrandBrandIdExternalVettingGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **brandId** | [**string**] |  | defaults to undefined


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

# **orderBrandExternalVettingBrandBrandIdExternalVettingPost**
> any orderBrandExternalVettingBrandBrandIdExternalVettingPost(orderExternalVetting)

Order new external vetting for a brand

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BrandsApi(configuration);

let body:.BrandsApiOrderBrandExternalVettingBrandBrandIdExternalVettingPostRequest = {
  // string
  brandId: "brandId_example",
  // OrderExternalVetting
  orderExternalVetting: {
    evpId: "evpId_example",
    vettingClass: "vettingClass_example",
  },
};

apiInstance.orderBrandExternalVettingBrandBrandIdExternalVettingPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderExternalVetting** | **OrderExternalVetting**|  |
 **brandId** | [**string**] |  | defaults to undefined


### Return type

**any**

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

# **revetBrandBrandBrandIdRevetPut**
> any revetBrandBrandBrandIdRevetPut()

This operation allows you to revet the brand. However, revetting is allowed once after the successful brand registration and thereafter limited to once every 3 months.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BrandsApi(configuration);

let body:.BrandsApiRevetBrandBrandBrandIdRevetPutRequest = {
  // string
  brandId: "brandId_example",
};

apiInstance.revetBrandBrandBrandIdRevetPut(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **brandId** | [**string**] |  | defaults to undefined


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

# **updateBrandBrandBrandIdPut**
> TelnyxBrand updateBrandBrandBrandIdPut(updateBrand)

Update a brand\'s attributes by `brandId`.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BrandsApi(configuration);

let body:.BrandsApiUpdateBrandBrandBrandIdPutRequest = {
  // string
  brandId: "brandId_example",
  // UpdateBrand
  updateBrand: {
    entityType: null,
    displayName: "ABC Mobile",
    companyName: "ABC Inc.",
    firstName: "John",
    lastName: "Smith",
    ein: "111111111",
    phone: "+12024567890",
    street: "123",
    city: "New York",
    state: "NY",
    postalCode: "10001",
    country: "US",
    email: "email_example",
    stockSymbol: "ABC",
    stockExchange: null,
    ipAddress: "ipAddress_example",
    website: "http://www.abcmobile.com",
    vertical: null,
    altBusinessId: "altBusinessId_example",
    altBusinessIdType: "NONE",
    isReseller: true,
    identityStatus: "VERIFIED",
  },
};

apiInstance.updateBrandBrandBrandIdPut(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateBrand** | **UpdateBrand**|  |
 **brandId** | [**string**] |  | defaults to undefined


### Return type

**TelnyxBrand**

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


