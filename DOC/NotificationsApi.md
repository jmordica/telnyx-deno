# .NotificationsApi

All URIs are relative to *https://api.telnyx.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createNotificationChannels**](NotificationsApi.md#createNotificationChannels) | **POST** /notification_channels | Create a notification channel
[**createNotificationProfile**](NotificationsApi.md#createNotificationProfile) | **POST** /notification_profiles | Create a notification profile
[**createNotificationSetting**](NotificationsApi.md#createNotificationSetting) | **POST** /notification_settings | Add a Notification Setting
[**deleteNotificationChannel**](NotificationsApi.md#deleteNotificationChannel) | **DELETE** /notification_channels/{id} | Delete a notification channel
[**deleteNotificationProfile**](NotificationsApi.md#deleteNotificationProfile) | **DELETE** /notification_profiles/{id} | Delete a notification profile
[**deleteNotificationSetting**](NotificationsApi.md#deleteNotificationSetting) | **DELETE** /notification_settings/{id} | Delete a notification setting
[**findNotificationsEvents**](NotificationsApi.md#findNotificationsEvents) | **GET** /notification_events | List all Notifications Events
[**findNotificationsEventsConditions**](NotificationsApi.md#findNotificationsEventsConditions) | **GET** /notification_event_conditions | List all Notifications Events Conditions
[**findNotificationsProfiles**](NotificationsApi.md#findNotificationsProfiles) | **GET** /notification_profiles | List all Notifications Profiles
[**listNotificationChannels**](NotificationsApi.md#listNotificationChannels) | **GET** /notification_channels | List notification channels
[**listNotificationSettings**](NotificationsApi.md#listNotificationSettings) | **GET** /notification_settings | List notification settings
[**retrieveNotificationChannel**](NotificationsApi.md#retrieveNotificationChannel) | **GET** /notification_channels/{id} | Retrieve a notification channel
[**retrieveNotificationProfile**](NotificationsApi.md#retrieveNotificationProfile) | **GET** /notification_profiles/{id} | Retrieve a notification profile
[**retrieveNotificationSetting**](NotificationsApi.md#retrieveNotificationSetting) | **GET** /notification_settings/{id} | Retrieve a notification setting
[**updateNotificationChannel**](NotificationsApi.md#updateNotificationChannel) | **PATCH** /notification_channels/{id} | Update a notification channel
[**updateNotificationProfile**](NotificationsApi.md#updateNotificationProfile) | **PATCH** /notification_profiles/{id} | Update a notification profile


# **createNotificationChannels**
> CreateNotificationChannels200Response createNotificationChannels()

Create a notification channel.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .NotificationsApi(configuration);

let body:.NotificationsApiCreateNotificationChannelsRequest = {
  // NotificationChannel | Add a Notification Channel (optional)
  notificationChannel: null,
};

apiInstance.createNotificationChannels(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **notificationChannel** | **NotificationChannel**| Add a Notification Channel |


### Return type

**CreateNotificationChannels200Response**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A Notification Channel response |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createNotificationProfile**
> CreateNotificationProfile200Response createNotificationProfile()

Create a notification profile.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .NotificationsApi(configuration);

let body:.NotificationsApiCreateNotificationProfileRequest = {
  // NotificationProfile | Add a Notification Profile (optional)
  notificationProfile: null,
};

apiInstance.createNotificationProfile(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **notificationProfile** | **NotificationProfile**| Add a Notification Profile |


### Return type

**CreateNotificationProfile200Response**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A Notification Profile response |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createNotificationSetting**
> CreateNotificationSetting200Response createNotificationSetting()

Add a notification setting.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .NotificationsApi(configuration);

let body:.NotificationsApiCreateNotificationSettingRequest = {
  // NotificationSetting (optional)
  notificationSetting: null,
};

apiInstance.createNotificationSetting(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **notificationSetting** | **NotificationSetting**|  |


### Return type

**CreateNotificationSetting200Response**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A Notification Setting response |  -  |
**201** | A Notification Setting response - async |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteNotificationChannel**
> CreateNotificationChannels200Response deleteNotificationChannel()

Delete a notification channel.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .NotificationsApi(configuration);

let body:.NotificationsApiDeleteNotificationChannelRequest = {
  // string | Identifies the resource.
  id: "6a09cdc3-8948-47f0-aa62-74ac943d6c58",
};

apiInstance.deleteNotificationChannel(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Identifies the resource. | defaults to undefined


### Return type

**CreateNotificationChannels200Response**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A Notification Channel response |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteNotificationProfile**
> CreateNotificationProfile200Response deleteNotificationProfile()

Delete a notification profile.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .NotificationsApi(configuration);

let body:.NotificationsApiDeleteNotificationProfileRequest = {
  // string | Identifies the resource.
  id: "6a09cdc3-8948-47f0-aa62-74ac943d6c58",
};

apiInstance.deleteNotificationProfile(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Identifies the resource. | defaults to undefined


### Return type

**CreateNotificationProfile200Response**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A Notification Profile response |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteNotificationSetting**
> CreateNotificationSetting200Response deleteNotificationSetting()

Delete a notification setting.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .NotificationsApi(configuration);

let body:.NotificationsApiDeleteNotificationSettingRequest = {
  // string | Identifies the resource.
  id: "6a09cdc3-8948-47f0-aa62-74ac943d6c58",
};

apiInstance.deleteNotificationSetting(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Identifies the resource. | defaults to undefined


### Return type

**CreateNotificationSetting200Response**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A Notification Setting response |  -  |
**201** | A Notification Setting response - async |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **findNotificationsEvents**
> FindNotificationsEvents200Response findNotificationsEvents()

Returns a list of your notifications events.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .NotificationsApi(configuration);

let body:.NotificationsApiFindNotificationsEventsRequest = {
  // number | The page number to load (optional)
  pageNumber: 1,
  // number | The size of the page (optional)
  pageSize: 20,
};

apiInstance.findNotificationsEvents(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pageNumber** | [**number**] | The page number to load | (optional) defaults to 1
 **pageSize** | [**number**] | The size of the page | (optional) defaults to 20


### Return type

**FindNotificationsEvents200Response**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a list of notification events available. |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **findNotificationsEventsConditions**
> FindNotificationsEventsConditions200Response findNotificationsEventsConditions()

Returns a list of your notifications events conditions.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .NotificationsApi(configuration);

let body:.NotificationsApiFindNotificationsEventsConditionsRequest = {
  // number | The page number to load (optional)
  pageNumber: 1,
  // number | The size of the page (optional)
  pageSize: 20,
  // 'account' | 'phone_number' | Filter by the associated record type (optional)
  filterAssociatedRecordTypeEq: "phone_number",
};

apiInstance.findNotificationsEventsConditions(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pageNumber** | [**number**] | The page number to load | (optional) defaults to 1
 **pageSize** | [**number**] | The size of the page | (optional) defaults to 20
 **filterAssociatedRecordTypeEq** | [**&#39;account&#39; | &#39;phone_number&#39;**]**Array<&#39;account&#39; &#124; &#39;phone_number&#39;>** | Filter by the associated record type | (optional) defaults to undefined


### Return type

**FindNotificationsEventsConditions200Response**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a list of notification event conditions available. |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **findNotificationsProfiles**
> FindNotificationsProfiles200Response findNotificationsProfiles()

Returns a list of your notifications profiles.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .NotificationsApi(configuration);

let body:.NotificationsApiFindNotificationsProfilesRequest = {
  // number | The page number to load (optional)
  pageNumber: 1,
  // number | The size of the page (optional)
  pageSize: 20,
};

apiInstance.findNotificationsProfiles(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pageNumber** | [**number**] | The page number to load | (optional) defaults to 1
 **pageSize** | [**number**] | The size of the page | (optional) defaults to 20


### Return type

**FindNotificationsProfiles200Response**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a list of notification profiles. |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listNotificationChannels**
> ListNotificationChannels200Response listNotificationChannels()

List notification channels.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .NotificationsApi(configuration);

let body:.NotificationsApiListNotificationChannelsRequest = {
  // number | The page number to load (optional)
  pageNumber: 1,
  // number | The size of the page (optional)
  pageSize: 20,
  // 'webhook' | 'sms' | 'email' | 'voice' | Filter by the id of a channel type (optional)
  filterChannelTypeIdEq: "webhook",
};

apiInstance.listNotificationChannels(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pageNumber** | [**number**] | The page number to load | (optional) defaults to 1
 **pageSize** | [**number**] | The size of the page | (optional) defaults to 20
 **filterChannelTypeIdEq** | [**&#39;webhook&#39; | &#39;sms&#39; | &#39;email&#39; | &#39;voice&#39;**]**Array<&#39;webhook&#39; &#124; &#39;sms&#39; &#124; &#39;email&#39; &#124; &#39;voice&#39;>** | Filter by the id of a channel type | (optional) defaults to undefined


### Return type

**ListNotificationChannels200Response**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a list of notification channels. |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listNotificationSettings**
> ListNotificationSettings200Response listNotificationSettings()

List notification settings.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .NotificationsApi(configuration);

let body:.NotificationsApiListNotificationSettingsRequest = {
  // number | The page number to load (optional)
  pageNumber: 1,
  // number | The size of the page (optional)
  pageSize: 20,
  // string | Filter by the id of a notification profile (optional)
  filterNotificationProfileIdEq: "12455643-3cf1-4683-ad23-1cd32f7d5e0a",
  // string | Filter by the id of a notification channel (optional)
  filterNotificationChannelEq: "12455643-3cf1-4683-ad23-1cd32f7d5e0a",
  // string | Filter by the id of a notification channel (optional)
  filterNotificationEventConditionIdEq: "12455643-3cf1-4683-ad23-1cd32f7d5e0a",
  // 'account' | 'phone_number' | Filter by the associated record type (optional)
  filterAssociatedRecordTypeEq: "phone_number",
  // 'enabled' | 'enable-received' | 'enable-pending' | 'enable-submtited' | 'delete-received' | 'delete-pending' | 'delete-submitted' | 'deleted' | The status of a notification setting (optional)
  filterStatusEq: "enable-received",
};

apiInstance.listNotificationSettings(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pageNumber** | [**number**] | The page number to load | (optional) defaults to 1
 **pageSize** | [**number**] | The size of the page | (optional) defaults to 20
 **filterNotificationProfileIdEq** | [**string**] | Filter by the id of a notification profile | (optional) defaults to undefined
 **filterNotificationChannelEq** | [**string**] | Filter by the id of a notification channel | (optional) defaults to undefined
 **filterNotificationEventConditionIdEq** | [**string**] | Filter by the id of a notification channel | (optional) defaults to undefined
 **filterAssociatedRecordTypeEq** | [**&#39;account&#39; | &#39;phone_number&#39;**]**Array<&#39;account&#39; &#124; &#39;phone_number&#39;>** | Filter by the associated record type | (optional) defaults to undefined
 **filterStatusEq** | [**&#39;enabled&#39; | &#39;enable-received&#39; | &#39;enable-pending&#39; | &#39;enable-submtited&#39; | &#39;delete-received&#39; | &#39;delete-pending&#39; | &#39;delete-submitted&#39; | &#39;deleted&#39;**]**Array<&#39;enabled&#39; &#124; &#39;enable-received&#39; &#124; &#39;enable-pending&#39; &#124; &#39;enable-submtited&#39; &#124; &#39;delete-received&#39; &#124; &#39;delete-pending&#39; &#124; &#39;delete-submitted&#39; &#124; &#39;deleted&#39;>** | The status of a notification setting | (optional) defaults to undefined


### Return type

**ListNotificationSettings200Response**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a list of notification settings. |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **retrieveNotificationChannel**
> CreateNotificationChannels200Response retrieveNotificationChannel()

Retrieve a notification channel.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .NotificationsApi(configuration);

let body:.NotificationsApiRetrieveNotificationChannelRequest = {
  // string | Identifies the resource.
  id: "6a09cdc3-8948-47f0-aa62-74ac943d6c58",
};

apiInstance.retrieveNotificationChannel(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Identifies the resource. | defaults to undefined


### Return type

**CreateNotificationChannels200Response**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A Notification Channel response |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **retrieveNotificationProfile**
> CreateNotificationProfile200Response retrieveNotificationProfile()

Retrieve a notification profile.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .NotificationsApi(configuration);

let body:.NotificationsApiRetrieveNotificationProfileRequest = {
  // string | Identifies the resource.
  id: "6a09cdc3-8948-47f0-aa62-74ac943d6c58",
};

apiInstance.retrieveNotificationProfile(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Identifies the resource. | defaults to undefined


### Return type

**CreateNotificationProfile200Response**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A Notification Profile response |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **retrieveNotificationSetting**
> CreateNotificationSetting200Response retrieveNotificationSetting()

Retrieve a notification setting.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .NotificationsApi(configuration);

let body:.NotificationsApiRetrieveNotificationSettingRequest = {
  // string | Identifies the resource.
  id: "6a09cdc3-8948-47f0-aa62-74ac943d6c58",
};

apiInstance.retrieveNotificationSetting(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Identifies the resource. | defaults to undefined


### Return type

**CreateNotificationSetting200Response**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A Notification Setting response |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateNotificationChannel**
> CreateNotificationChannels200Response updateNotificationChannel(notificationChannel)

Update a notification channel.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .NotificationsApi(configuration);

let body:.NotificationsApiUpdateNotificationChannelRequest = {
  // string | Identifies the resource.
  id: "6a09cdc3-8948-47f0-aa62-74ac943d6c58",
  // NotificationChannel | Update notification channel object
  notificationChannel: null,
};

apiInstance.updateNotificationChannel(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **notificationChannel** | **NotificationChannel**| Update notification channel object |
 **id** | [**string**] | Identifies the resource. | defaults to undefined


### Return type

**CreateNotificationChannels200Response**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A Notification Channel response |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateNotificationProfile**
> CreateNotificationProfile200Response updateNotificationProfile(notificationProfile)

Update a notification profile.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .NotificationsApi(configuration);

let body:.NotificationsApiUpdateNotificationProfileRequest = {
  // string | Identifies the resource.
  id: "6a09cdc3-8948-47f0-aa62-74ac943d6c58",
  // NotificationProfile | Update notification profile object
  notificationProfile: null,
};

apiInstance.updateNotificationProfile(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **notificationProfile** | **NotificationProfile**| Update notification profile object |
 **id** | [**string**] | Identifies the resource. | defaults to undefined


### Return type

**CreateNotificationProfile200Response**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A Notification Profile response |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


