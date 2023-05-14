# .NumberSearchApi

All URIs are relative to *https://api.telnyx.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listAvailablePhoneNumberBlocks**](NumberSearchApi.md#listAvailablePhoneNumberBlocks) | **GET** /available_phone_number_blocks | List available phone number blocks
[**listAvailablePhoneNumbers**](NumberSearchApi.md#listAvailablePhoneNumbers) | **GET** /available_phone_numbers | List available phone numbers


# **listAvailablePhoneNumberBlocks**
> ListAvailablePhoneNumbersBlocksResponse listAvailablePhoneNumberBlocks()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .NumberSearchApi(configuration);

let body:.NumberSearchApiListAvailablePhoneNumberBlocksRequest = {
  // string | Filter number blocks that start with a pattern (meant to be used after `national_destination_code` filter has been set). (optional)
  filterPhoneNumberStartsWith: "201",
  // string | Filter numbers ending with a pattern. (optional)
  filterPhoneNumberEndsWith: "8000",
  // string | Filter numbers containing a pattern. (optional)
  filterPhoneNumberContains: "456",
  // string | Filter phone numbers by city. (optional)
  filterLocality: "Chicago",
  // string | Filter phone numbers by US state/CA province. (optional)
  filterAdministrativeArea: "IL",
  // string | Filter phone numbers by ISO alpha-2 country code. (optional)
  filterCountryCode: "US",
  // string | Filter by the national destination code of the number. This filter is only applicable to North American numbers. (optional)
  filterNationalDestinationCode: "312",
  // string | Filter phone numbers by NANP rate center. This filter is only applicable to North American numbers. (optional)
  filterRateCenter: "CHICAGO HEIGHTS",
  // 'toll-free' | Filter phone numbers by number type. (optional)
  filterNumberType: "toll-free",
  // Array<'sms' | 'mms' | 'voice' | 'fax' | 'emergency'> | Filter if the phone number should be used for voice, fax, mms, sms, emergency. (optional)
  filterFeatures: [
    "voice,sms",
  ],
  // number | Filter number blocks by minimum blocks size (optional)
  filterMinimumBlockSize: 100,
  // number | Limits the number of results. (optional)
  filterLimit: 100,
};

apiInstance.listAvailablePhoneNumberBlocks(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filterPhoneNumberStartsWith** | [**string**] | Filter number blocks that start with a pattern (meant to be used after &#x60;national_destination_code&#x60; filter has been set). | (optional) defaults to undefined
 **filterPhoneNumberEndsWith** | [**string**] | Filter numbers ending with a pattern. | (optional) defaults to undefined
 **filterPhoneNumberContains** | [**string**] | Filter numbers containing a pattern. | (optional) defaults to undefined
 **filterLocality** | [**string**] | Filter phone numbers by city. | (optional) defaults to undefined
 **filterAdministrativeArea** | [**string**] | Filter phone numbers by US state/CA province. | (optional) defaults to undefined
 **filterCountryCode** | [**string**] | Filter phone numbers by ISO alpha-2 country code. | (optional) defaults to undefined
 **filterNationalDestinationCode** | [**string**] | Filter by the national destination code of the number. This filter is only applicable to North American numbers. | (optional) defaults to undefined
 **filterRateCenter** | [**string**] | Filter phone numbers by NANP rate center. This filter is only applicable to North American numbers. | (optional) defaults to undefined
 **filterNumberType** | [**&#39;toll-free&#39;**]**Array<&#39;toll-free&#39;>** | Filter phone numbers by number type. | (optional) defaults to undefined
 **filterFeatures** | **Array<&#39;sms&#39; &#124; &#39;mms&#39; &#124; &#39;voice&#39; &#124; &#39;fax&#39; &#124; &#39;emergency&#39;>** | Filter if the phone number should be used for voice, fax, mms, sms, emergency. | (optional) defaults to undefined
 **filterMinimumBlockSize** | [**number**] | Filter number blocks by minimum blocks size | (optional) defaults to undefined
 **filterLimit** | [**number**] | Limits the number of results. | (optional) defaults to undefined


### Return type

**ListAvailablePhoneNumbersBlocksResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response with a list of available phone numbers blocks. |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listAvailablePhoneNumbers**
> ListAvailablePhoneNumbersResponse listAvailablePhoneNumbers()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .NumberSearchApi(configuration);

let body:.NumberSearchApiListAvailablePhoneNumbersRequest = {
  // string | Filter numbers starting with a pattern (exclude NDC from start of this filter if used with `national_destination_code` filter). (optional)
  filterPhoneNumberStartsWith: "FREE",
  // string | Filter numbers ending with a pattern (max length of 4 digits if used with `national_destination_code` filter). (optional)
  filterPhoneNumberEndsWith: "CALL",
  // string | Filter numbers containing a pattern (must be used with `national_destination_code` filter and only searches within last 4 digits). (optional)
  filterPhoneNumberContains: "FOO",
  // string | Filter phone numbers by city. (optional)
  filterLocality: "Chicago",
  // string | Filter phone numbers by US state/CA province. (optional)
  filterAdministrativeArea: "IL",
  // string | Filter phone numbers by ISO alpha-2 country code. (optional)
  filterCountryCode: "US",
  // string | Filter by the national destination code of the number. This filter is only applicable to North American numbers. (optional)
  filterNationalDestinationCode: "312",
  // string | Filter phone numbers by NANP rate center. This filter is only applicable to North American numbers. (optional)
  filterRateCenter: "CHICAGO HEIGHTS",
  // 'local' | 'toll_free' | 'mobile' | 'national' | 'shared_cost' | 'landline' | Filter phone numbers by number type. (optional)
  filterPhoneNumberType: "local",
  // Array<'sms' | 'mms' | 'voice' | 'fax' | 'emergency'> | Filter if the phone number should be used for voice, fax, mms, sms, emergency. (optional)
  filterFeatures: [
    "voice,sms",
  ],
  // number | Limits the number of results. (optional)
  filterLimit: 100,
  // boolean | Filter to determine if best effort results should be included. Only available in NANPA countries. (optional)
  filterBestEffort: false,
  // boolean | Filter to exclude phone numbers that need additional time after to purchase to receive phone calls. Only available for toll-free numbers. (optional)
  filterQuickship: true,
  // boolean | Filter to exclude phone numbers that cannot be reserved before purchase. (optional)
  filterReservable: true,
  // boolean | Filter to exclude phone numbers that are currently on hold for your account. (optional)
  filterExcludeHeldNumbers: false,
};

apiInstance.listAvailablePhoneNumbers(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filterPhoneNumberStartsWith** | [**string**] | Filter numbers starting with a pattern (exclude NDC from start of this filter if used with &#x60;national_destination_code&#x60; filter). | (optional) defaults to undefined
 **filterPhoneNumberEndsWith** | [**string**] | Filter numbers ending with a pattern (max length of 4 digits if used with &#x60;national_destination_code&#x60; filter). | (optional) defaults to undefined
 **filterPhoneNumberContains** | [**string**] | Filter numbers containing a pattern (must be used with &#x60;national_destination_code&#x60; filter and only searches within last 4 digits). | (optional) defaults to undefined
 **filterLocality** | [**string**] | Filter phone numbers by city. | (optional) defaults to undefined
 **filterAdministrativeArea** | [**string**] | Filter phone numbers by US state/CA province. | (optional) defaults to undefined
 **filterCountryCode** | [**string**] | Filter phone numbers by ISO alpha-2 country code. | (optional) defaults to undefined
 **filterNationalDestinationCode** | [**string**] | Filter by the national destination code of the number. This filter is only applicable to North American numbers. | (optional) defaults to undefined
 **filterRateCenter** | [**string**] | Filter phone numbers by NANP rate center. This filter is only applicable to North American numbers. | (optional) defaults to undefined
 **filterPhoneNumberType** | [**&#39;local&#39; | &#39;toll_free&#39; | &#39;mobile&#39; | &#39;national&#39; | &#39;shared_cost&#39; | &#39;landline&#39;**]**Array<&#39;local&#39; &#124; &#39;toll_free&#39; &#124; &#39;mobile&#39; &#124; &#39;national&#39; &#124; &#39;shared_cost&#39; &#124; &#39;landline&#39;>** | Filter phone numbers by number type. | (optional) defaults to undefined
 **filterFeatures** | **Array<&#39;sms&#39; &#124; &#39;mms&#39; &#124; &#39;voice&#39; &#124; &#39;fax&#39; &#124; &#39;emergency&#39;>** | Filter if the phone number should be used for voice, fax, mms, sms, emergency. | (optional) defaults to undefined
 **filterLimit** | [**number**] | Limits the number of results. | (optional) defaults to undefined
 **filterBestEffort** | [**boolean**] | Filter to determine if best effort results should be included. Only available in NANPA countries. | (optional) defaults to undefined
 **filterQuickship** | [**boolean**] | Filter to exclude phone numbers that need additional time after to purchase to receive phone calls. Only available for toll-free numbers. | (optional) defaults to undefined
 **filterReservable** | [**boolean**] | Filter to exclude phone numbers that cannot be reserved before purchase. | (optional) defaults to undefined
 **filterExcludeHeldNumbers** | [**boolean**] | Filter to exclude phone numbers that are currently on hold for your account. | (optional) defaults to undefined


### Return type

**ListAvailablePhoneNumbersResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response with a list of available phone numbers. |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


