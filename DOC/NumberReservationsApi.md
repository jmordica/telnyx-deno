# .NumberReservationsApi

All URIs are relative to *https://api.telnyx.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createNumberReservation**](NumberReservationsApi.md#createNumberReservation) | **POST** /number_reservations | Create a number reservation
[**extendNumberReservationExpiryTime**](NumberReservationsApi.md#extendNumberReservationExpiryTime) | **POST** /number_reservations/{number_reservation_id}/actions/extend | Extend a number reservation
[**listNumberReservations**](NumberReservationsApi.md#listNumberReservations) | **GET** /number_reservations | List number reservations
[**retrieveNumberReservation**](NumberReservationsApi.md#retrieveNumberReservation) | **GET** /number_reservations/{number_reservation_id} | Retrieve a number reservation


# **createNumberReservation**
> NumberReservationResponse createNumberReservation(createNumberReservationRequest)

Creates a Phone Number Reservation for multiple numbers.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .NumberReservationsApi(configuration);

let body:.NumberReservationsApiCreateNumberReservationRequest = {
  // CreateNumberReservationRequest
  createNumberReservationRequest: null,
};

apiInstance.createNumberReservation(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createNumberReservationRequest** | **CreateNumberReservationRequest**|  |


### Return type

**NumberReservationResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response with details about a number reservation. |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **extendNumberReservationExpiryTime**
> NumberReservationResponse extendNumberReservationExpiryTime()

Extends reservation expiry time on all phone numbers.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .NumberReservationsApi(configuration);

let body:.NumberReservationsApiExtendNumberReservationExpiryTimeRequest = {
  // string | The number reservation ID.
  numberReservationId: "number_reservation_id_example",
};

apiInstance.extendNumberReservationExpiryTime(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **numberReservationId** | [**string**] | The number reservation ID. | defaults to undefined


### Return type

**NumberReservationResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response with details about a number reservation. |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listNumberReservations**
> ListNumberReservationsResponse listNumberReservations()

Gets a paginated list of phone number reservations.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .NumberReservationsApi(configuration);

let body:.NumberReservationsApiListNumberReservationsRequest = {
  // string | Filter number reservations by status. (optional)
  filterStatus: "filter[status]_example",
  // string | Filter number reservations later than this value. (optional)
  filterCreatedAtGt: "filter[created_at][gt]_example",
  // string | Filter number reservations earlier than this value. (optional)
  filterCreatedAtLt: "filter[created_at][lt]_example",
  // string | Filter number reservations having these phone numbers. (optional)
  filterPhoneNumbersPhoneNumber: "filter[phone_numbers.phone_number]_example",
  // string | Filter number reservations via the customer reference set. (optional)
  filterCustomerReference: "filter[customer_reference]_example",
  // number | The page number to load (optional)
  pageNumber: 1,
  // number | The size of the page (optional)
  pageSize: 20,
};

apiInstance.listNumberReservations(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filterStatus** | [**string**] | Filter number reservations by status. | (optional) defaults to undefined
 **filterCreatedAtGt** | [**string**] | Filter number reservations later than this value. | (optional) defaults to undefined
 **filterCreatedAtLt** | [**string**] | Filter number reservations earlier than this value. | (optional) defaults to undefined
 **filterPhoneNumbersPhoneNumber** | [**string**] | Filter number reservations having these phone numbers. | (optional) defaults to undefined
 **filterCustomerReference** | [**string**] | Filter number reservations via the customer reference set. | (optional) defaults to undefined
 **pageNumber** | [**number**] | The page number to load | (optional) defaults to 1
 **pageSize** | [**number**] | The size of the page | (optional) defaults to 20


### Return type

**ListNumberReservationsResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response with a list of number reservations. |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **retrieveNumberReservation**
> NumberReservationResponse retrieveNumberReservation()

Gets a single phone number reservation.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .NumberReservationsApi(configuration);

let body:.NumberReservationsApiRetrieveNumberReservationRequest = {
  // string | The number reservation ID.
  numberReservationId: "number_reservation_id_example",
};

apiInstance.retrieveNumberReservation(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **numberReservationId** | [**string**] | The number reservation ID. | defaults to undefined


### Return type

**NumberReservationResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response with details about a number reservation. |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


