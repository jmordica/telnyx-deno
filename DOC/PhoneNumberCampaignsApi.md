# .PhoneNumberCampaignsApi

All URIs are relative to *https://api.telnyx.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createNewPhoneNumberCampaignPhoneNumberCampaignPhoneNumberPut**](PhoneNumberCampaignsApi.md#createNewPhoneNumberCampaignPhoneNumberCampaignPhoneNumberPut) | **PUT** /phoneNumberCampaign/{phoneNumber} | Create New Phone Number Campaign
[**createNewPhoneNumberCampaignPhoneNumberCampaignPost**](PhoneNumberCampaignsApi.md#createNewPhoneNumberCampaignPhoneNumberCampaignPost) | **POST** /phoneNumberCampaign | Create New Phone Number Campaign
[**createNewPhoneNumberCampaignPhoneNumberCampaignsPhoneNumberPut**](PhoneNumberCampaignsApi.md#createNewPhoneNumberCampaignPhoneNumberCampaignsPhoneNumberPut) | **PUT** /phone_number_campaigns/{phoneNumber} | Create New Phone Number Campaign
[**createNewPhoneNumberCampaignPhoneNumberCampaignsPost**](PhoneNumberCampaignsApi.md#createNewPhoneNumberCampaignPhoneNumberCampaignsPost) | **POST** /phone_number_campaigns | Create New Phone Number Campaign
[**deletePhoneNumberCampaignPhoneNumberCampaignPhoneNumberDelete**](PhoneNumberCampaignsApi.md#deletePhoneNumberCampaignPhoneNumberCampaignPhoneNumberDelete) | **DELETE** /phoneNumberCampaign/{phoneNumber} | Delete Phone Number Campaign
[**deletePhoneNumberCampaignPhoneNumberCampaignsPhoneNumberDelete**](PhoneNumberCampaignsApi.md#deletePhoneNumberCampaignPhoneNumberCampaignsPhoneNumberDelete) | **DELETE** /phone_number_campaigns/{phoneNumber} | Delete Phone Number Campaign
[**getSinglePhoneNumberCampaignPhoneNumberCampaignPhoneNumberGet**](PhoneNumberCampaignsApi.md#getSinglePhoneNumberCampaignPhoneNumberCampaignPhoneNumberGet) | **GET** /phoneNumberCampaign/{phoneNumber} | Get Single Phone Number Campaign
[**getSinglePhoneNumberCampaignPhoneNumberCampaignsPhoneNumberGet**](PhoneNumberCampaignsApi.md#getSinglePhoneNumberCampaignPhoneNumberCampaignsPhoneNumberGet) | **GET** /phone_number_campaigns/{phoneNumber} | Get Single Phone Number Campaign
[**retrieveAllPhoneNumberCampaignsPhoneNumberCampaignGet**](PhoneNumberCampaignsApi.md#retrieveAllPhoneNumberCampaignsPhoneNumberCampaignGet) | **GET** /phoneNumberCampaign | Retrieve All Phone Number Campaigns
[**retrieveAllPhoneNumberCampaignsPhoneNumberCampaignsGet**](PhoneNumberCampaignsApi.md#retrieveAllPhoneNumberCampaignsPhoneNumberCampaignsGet) | **GET** /phone_number_campaigns | Retrieve All Phone Number Campaigns


# **createNewPhoneNumberCampaignPhoneNumberCampaignPhoneNumberPut**
> ResponseCreateNewPhoneNumberCampaignPublicPhonenumbercampaignPhonenumberPut createNewPhoneNumberCampaignPhoneNumberCampaignPhoneNumberPut(phoneNumberCampaignCreate)

This endpoint allows you to assign a different campaign to a supplied `phoneNumber`.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PhoneNumberCampaignsApi(configuration);

let body:.PhoneNumberCampaignsApiCreateNewPhoneNumberCampaignPhoneNumberCampaignPhoneNumberPutRequest = {
  // string
  phoneNumber: "phoneNumber_example",
  // PhoneNumberCampaignCreate
  phoneNumberCampaignCreate: {
    phoneNumber: "+18005550199",
    campaignId: "4b300178-131c-d902-d54e-72d90ba1620j",
  },
};

apiInstance.createNewPhoneNumberCampaignPhoneNumberCampaignPhoneNumberPut(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **phoneNumberCampaignCreate** | **PhoneNumberCampaignCreate**|  |
 **phoneNumber** | [**string**] |  | defaults to undefined


### Return type

**ResponseCreateNewPhoneNumberCampaignPublicPhonenumbercampaignPhonenumberPut**

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

# **createNewPhoneNumberCampaignPhoneNumberCampaignPost**
> ResponseCreateNewPhoneNumberCampaignPublicPhonenumbercampaignPost createNewPhoneNumberCampaignPhoneNumberCampaignPost(phoneNumberCampaignCreate)

Assign an individual phone number to campaign.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PhoneNumberCampaignsApi(configuration);

let body:.PhoneNumberCampaignsApiCreateNewPhoneNumberCampaignPhoneNumberCampaignPostRequest = {
  // PhoneNumberCampaignCreate
  phoneNumberCampaignCreate: {
    phoneNumber: "+18005550199",
    campaignId: "4b300178-131c-d902-d54e-72d90ba1620j",
  },
};

apiInstance.createNewPhoneNumberCampaignPhoneNumberCampaignPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **phoneNumberCampaignCreate** | **PhoneNumberCampaignCreate**|  |


### Return type

**ResponseCreateNewPhoneNumberCampaignPublicPhonenumbercampaignPost**

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

# **createNewPhoneNumberCampaignPhoneNumberCampaignsPhoneNumberPut**
> any createNewPhoneNumberCampaignPhoneNumberCampaignsPhoneNumberPut(phoneNumberCampaignCreate)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PhoneNumberCampaignsApi(configuration);

let body:.PhoneNumberCampaignsApiCreateNewPhoneNumberCampaignPhoneNumberCampaignsPhoneNumberPutRequest = {
  // string
  phoneNumber: "phoneNumber_example",
  // PhoneNumberCampaignCreate
  phoneNumberCampaignCreate: {
    phoneNumber: "+18005550199",
    campaignId: "4b300178-131c-d902-d54e-72d90ba1620j",
  },
};

apiInstance.createNewPhoneNumberCampaignPhoneNumberCampaignsPhoneNumberPut(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **phoneNumberCampaignCreate** | **PhoneNumberCampaignCreate**|  |
 **phoneNumber** | [**string**] |  | defaults to undefined


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

# **createNewPhoneNumberCampaignPhoneNumberCampaignsPost**
> any createNewPhoneNumberCampaignPhoneNumberCampaignsPost(phoneNumberCampaignCreate)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PhoneNumberCampaignsApi(configuration);

let body:.PhoneNumberCampaignsApiCreateNewPhoneNumberCampaignPhoneNumberCampaignsPostRequest = {
  // PhoneNumberCampaignCreate
  phoneNumberCampaignCreate: {
    phoneNumber: "+18005550199",
    campaignId: "4b300178-131c-d902-d54e-72d90ba1620j",
  },
};

apiInstance.createNewPhoneNumberCampaignPhoneNumberCampaignsPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **phoneNumberCampaignCreate** | **PhoneNumberCampaignCreate**|  |


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

# **deletePhoneNumberCampaignPhoneNumberCampaignPhoneNumberDelete**
> PhoneNumberCampaign deletePhoneNumberCampaignPhoneNumberCampaignPhoneNumberDelete()

This endpoint allows you to remove a campaign assignment from the supplied `phoneNumber`.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PhoneNumberCampaignsApi(configuration);

let body:.PhoneNumberCampaignsApiDeletePhoneNumberCampaignPhoneNumberCampaignPhoneNumberDeleteRequest = {
  // string
  phoneNumber: "phoneNumber_example",
};

apiInstance.deletePhoneNumberCampaignPhoneNumberCampaignPhoneNumberDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **phoneNumber** | [**string**] |  | defaults to undefined


### Return type

**PhoneNumberCampaign**

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

# **deletePhoneNumberCampaignPhoneNumberCampaignsPhoneNumberDelete**
> any deletePhoneNumberCampaignPhoneNumberCampaignsPhoneNumberDelete()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PhoneNumberCampaignsApi(configuration);

let body:.PhoneNumberCampaignsApiDeletePhoneNumberCampaignPhoneNumberCampaignsPhoneNumberDeleteRequest = {
  // string
  phoneNumber: "phoneNumber_example",
};

apiInstance.deletePhoneNumberCampaignPhoneNumberCampaignsPhoneNumberDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **phoneNumber** | [**string**] |  | defaults to undefined


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

# **getSinglePhoneNumberCampaignPhoneNumberCampaignPhoneNumberGet**
> PhoneNumberCampaign getSinglePhoneNumberCampaignPhoneNumberCampaignPhoneNumberGet()

Retrieve an individual phone number/campaign assignment by `phoneNumber`.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PhoneNumberCampaignsApi(configuration);

let body:.PhoneNumberCampaignsApiGetSinglePhoneNumberCampaignPhoneNumberCampaignPhoneNumberGetRequest = {
  // string
  phoneNumber: "phoneNumber_example",
};

apiInstance.getSinglePhoneNumberCampaignPhoneNumberCampaignPhoneNumberGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **phoneNumber** | [**string**] |  | defaults to undefined


### Return type

**PhoneNumberCampaign**

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

# **getSinglePhoneNumberCampaignPhoneNumberCampaignsPhoneNumberGet**
> any getSinglePhoneNumberCampaignPhoneNumberCampaignsPhoneNumberGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PhoneNumberCampaignsApi(configuration);

let body:.PhoneNumberCampaignsApiGetSinglePhoneNumberCampaignPhoneNumberCampaignsPhoneNumberGetRequest = {
  // string
  phoneNumber: "phoneNumber_example",
};

apiInstance.getSinglePhoneNumberCampaignPhoneNumberCampaignsPhoneNumberGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **phoneNumber** | [**string**] |  | defaults to undefined


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

# **retrieveAllPhoneNumberCampaignsPhoneNumberCampaignGet**
> PhoneNumberCampaignPaginated retrieveAllPhoneNumberCampaignsPhoneNumberCampaignGet()

Retrieve all of your organization\'s phone number/campaign assignments.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PhoneNumberCampaignsApi(configuration);

let body:.PhoneNumberCampaignsApiRetrieveAllPhoneNumberCampaignsPhoneNumberCampaignGetRequest = {
  // any (optional)
  recordsPerPage: null,
  // any (optional)
  page: null,
};

apiInstance.retrieveAllPhoneNumberCampaignsPhoneNumberCampaignGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **recordsPerPage** | **any** |  | (optional) defaults to undefined
 **page** | **any** |  | (optional) defaults to undefined


### Return type

**PhoneNumberCampaignPaginated**

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

# **retrieveAllPhoneNumberCampaignsPhoneNumberCampaignsGet**
> any retrieveAllPhoneNumberCampaignsPhoneNumberCampaignsGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PhoneNumberCampaignsApi(configuration);

let body:.PhoneNumberCampaignsApiRetrieveAllPhoneNumberCampaignsPhoneNumberCampaignsGetRequest = {
  // any (optional)
  recordsPerPage: null,
  // any (optional)
  page: null,
};

apiInstance.retrieveAllPhoneNumberCampaignsPhoneNumberCampaignsGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **recordsPerPage** | **any** |  | (optional) defaults to undefined
 **page** | **any** |  | (optional) defaults to undefined


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


