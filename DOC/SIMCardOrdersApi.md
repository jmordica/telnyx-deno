# .SIMCardOrdersApi

All URIs are relative to *https://api.telnyx.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**simCardOrderGet**](SIMCardOrdersApi.md#simCardOrderGet) | **GET** /sim_card_orders/{id} | Get a single SIM card order
[**simCardOrdersGet**](SIMCardOrdersApi.md#simCardOrdersGet) | **GET** /sim_card_orders | Get all SIM card orders
[**simCardOrdersPost**](SIMCardOrdersApi.md#simCardOrdersPost) | **POST** /sim_card_orders | Create a SIM card order
[**simCardOrdersPreview**](SIMCardOrdersApi.md#simCardOrdersPreview) | **POST** /sim_card_order_preview | Preview SIM card orders


# **simCardOrderGet**
> SimCardOrdersPost200Response simCardOrderGet()

Get a single SIM card order by its ID.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SIMCardOrdersApi(configuration);

let body:.SIMCardOrdersApiSimCardOrderGetRequest = {
  // string | Identifies the resource.
  id: "6a09cdc3-8948-47f0-aa62-74ac943d6c58",
};

apiInstance.simCardOrderGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Identifies the resource. | defaults to undefined


### Return type

**SimCardOrdersPost200Response**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**404** | Resource not found |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **simCardOrdersGet**
> SimCardOrdersGet200Response simCardOrdersGet()

Get all SIM card orders according to filters.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SIMCardOrdersApi(configuration);

let body:.SIMCardOrdersApiSimCardOrdersGetRequest = {
  // string | Filter by ISO 8601 formatted date-time string matching resource creation date-time. (optional)
  filterCreatedAt: "2018-02-02T22:25:27.521Z",
  // string | Filter by ISO 8601 formatted date-time string matching resource last update date-time. (optional)
  filterUpdatedAt: "2018-02-02T22:25:27.521Z",
  // number | Filter orders by how many SIM cards were ordered. (optional)
  filterQuantity: 21,
  // string | The total monetary amount of the order. (optional)
  filterCostAmount: "2.53",
  // string | Filter by ISO 4217 currency string. (optional)
  filterCostCurrency: "USD",
  // string | Uniquely identifies the address for the order. (optional)
  filterAddressId: "1293384261075731499",
  // string | Returns entries with matching name of the street where the address is located. (optional)
  filterAddressStreetAddress: "311 W Superior St",
  // string | Returns entries with matching name of the supplemental field for address information. (optional)
  filterAddressExtendedAddress: "Suite 504",
  // string | Filter by the name of the city where the address is located. (optional)
  filterAddressLocality: "Chicago",
  // string | Filter by state or province where the address is located. (optional)
  filterAddressAdministrativeArea: "IL",
  // string | Filter by the mobile operator two-character (ISO 3166-1 alpha-2) origin country code. (optional)
  filterAddressCountryCode: "US",
  // string | Filter by postal code for the address. (optional)
  filterAddressPostalCode: "60654",
  // number | The page number to load (optional)
  pageNumber: 1,
  // number | The size of the page (optional)
  pageSize: 20,
};

apiInstance.simCardOrdersGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filterCreatedAt** | [**string**] | Filter by ISO 8601 formatted date-time string matching resource creation date-time. | (optional) defaults to undefined
 **filterUpdatedAt** | [**string**] | Filter by ISO 8601 formatted date-time string matching resource last update date-time. | (optional) defaults to undefined
 **filterQuantity** | [**number**] | Filter orders by how many SIM cards were ordered. | (optional) defaults to undefined
 **filterCostAmount** | [**string**] | The total monetary amount of the order. | (optional) defaults to undefined
 **filterCostCurrency** | [**string**] | Filter by ISO 4217 currency string. | (optional) defaults to undefined
 **filterAddressId** | [**string**] | Uniquely identifies the address for the order. | (optional) defaults to undefined
 **filterAddressStreetAddress** | [**string**] | Returns entries with matching name of the street where the address is located. | (optional) defaults to undefined
 **filterAddressExtendedAddress** | [**string**] | Returns entries with matching name of the supplemental field for address information. | (optional) defaults to undefined
 **filterAddressLocality** | [**string**] | Filter by the name of the city where the address is located. | (optional) defaults to undefined
 **filterAddressAdministrativeArea** | [**string**] | Filter by state or province where the address is located. | (optional) defaults to undefined
 **filterAddressCountryCode** | [**string**] | Filter by the mobile operator two-character (ISO 3166-1 alpha-2) origin country code. | (optional) defaults to undefined
 **filterAddressPostalCode** | [**string**] | Filter by postal code for the address. | (optional) defaults to undefined
 **pageNumber** | [**number**] | The page number to load | (optional) defaults to 1
 **pageSize** | [**number**] | The size of the page | (optional) defaults to 20


### Return type

**SimCardOrdersGet200Response**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **simCardOrdersPost**
> SimCardOrdersPost200Response simCardOrdersPost(simCardOrderCreate)

Creates a new order for SIM cards.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SIMCardOrdersApi(configuration);

let body:.SIMCardOrdersApiSimCardOrdersPostRequest = {
  // SimCardOrderCreate
  simCardOrderCreate: {
    addressId: "1293384261075731499",
    quantity: 23,
  },
};

apiInstance.simCardOrdersPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **simCardOrderCreate** | **SimCardOrderCreate**|  |


### Return type

**SimCardOrdersPost200Response**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **simCardOrdersPreview**
> SimCardOrdersPreview202Response simCardOrdersPreview()

Preview SIM card order purchases.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SIMCardOrdersApi(configuration);

let body:.SIMCardOrdersApiSimCardOrdersPreviewRequest = {
  // SimCardOrdersPreviewRequest (optional)
  simCardOrdersPreviewRequest: {
    quantity: 21,
    addressId: "1293384261075731499",
  },
};

apiInstance.simCardOrdersPreview(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **simCardOrdersPreviewRequest** | **SimCardOrdersPreviewRequest**|  |


### Return type

**SimCardOrdersPreview202Response**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | Successful response |  -  |
**422** | Unprocessable entity. Check the \&#39;detail\&#39; field in response for details. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


