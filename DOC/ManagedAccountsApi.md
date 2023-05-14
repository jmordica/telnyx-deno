# .ManagedAccountsApi

All URIs are relative to *https://api.telnyx.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createManagedAccount**](ManagedAccountsApi.md#createManagedAccount) | **POST** /managed_accounts | Create a new managed account.
[**disableManagedAccount**](ManagedAccountsApi.md#disableManagedAccount) | **POST** /managed_accounts/{id}/actions/disable | Disables a managed account
[**enableManagedAccount**](ManagedAccountsApi.md#enableManagedAccount) | **POST** /managed_accounts/{id}/actions/enable | Enables a managed account
[**listManagedAccounts**](ManagedAccountsApi.md#listManagedAccounts) | **GET** /managed_accounts | Lists accounts managed by the current user.
[**retrieveManagedAccount**](ManagedAccountsApi.md#retrieveManagedAccount) | **GET** /managed_accounts/{id} | Retrieve a managed account
[**updateManagedAccount**](ManagedAccountsApi.md#updateManagedAccount) | **PATCH** /managed_accounts/{id} | Update a managed account


# **createManagedAccount**
> CreateManagedAccount200Response createManagedAccount(createManagedAccountRequest)

Create a new managed account owned by the authenticated user. You need to be explictly approved by Telnyx in order to become a manager account.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ManagedAccountsApi(configuration);

let body:.ManagedAccountsApiCreateManagedAccountRequest = {
  // CreateManagedAccountRequest | Parameters that define the managed account to be created
  createManagedAccountRequest: null,
};

apiInstance.createManagedAccount(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createManagedAccountRequest** | **CreateManagedAccountRequest**| Parameters that define the managed account to be created |


### Return type

**CreateManagedAccount200Response**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response with information about a single managed account. |  -  |
**401** | Unauthorized |  -  |
**422** | Unprocessable entity. Check the \&#39;detail\&#39; field in response for details. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **disableManagedAccount**
> CreateManagedAccount200Response disableManagedAccount()

Disables a managed account, forbidding it to use Telnyx services, including sending or receiving phone calls and SMS messages. Ongoing phone calls will not be affected. The managed account and its sub-users will still be able to log in via the mission control portal.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ManagedAccountsApi(configuration);

let body:.ManagedAccountsApiDisableManagedAccountRequest = {
  // string | Managed Account User ID
  id: "id_example",
};

apiInstance.disableManagedAccount(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Managed Account User ID | defaults to undefined


### Return type

**CreateManagedAccount200Response**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response with information about a single managed account. |  -  |
**401** | Unauthorized |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity. Check the \&#39;detail\&#39; field in response for details. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **enableManagedAccount**
> CreateManagedAccount200Response enableManagedAccount()

Enables a managed account and its sub-users to use Telnyx services.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ManagedAccountsApi(configuration);

let body:.ManagedAccountsApiEnableManagedAccountRequest = {
  // string | Managed Account User ID
  id: "id_example",
};

apiInstance.enableManagedAccount(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Managed Account User ID | defaults to undefined


### Return type

**CreateManagedAccount200Response**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response with information about a single managed account. |  -  |
**401** | Unauthorized |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity. Check the \&#39;detail\&#39; field in response for details. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listManagedAccounts**
> ListManagedAccounts200Response listManagedAccounts()

Lists the accounts managed by the current user. Users need to be explictly approved by Telnyx in order to become manager accounts.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ManagedAccountsApi(configuration);

let body:.ManagedAccountsApiListManagedAccountsRequest = {
  // number | The page number to load (optional)
  pageNumber: 1,
  // number | The size of the page (optional)
  pageSize: 20,
  // string | If present, email containing the given value will be returned. Matching is not case-sensitive. Requires at least three characters. (optional)
  filterEmailContains: "null",
  // string | If present, only returns results with the <code>email</code> matching exactly the value given. (optional)
  filterEmailEq: "null",
  // string | If present, only returns results with the <code>organization_name</code> containing the given value. Matching is not case-sensitive. Requires at least three characters. (optional)
  filterOrganizationNameContains: "null",
  // string | If present, only returns results with the <code>organization_name</code> matching the exact value given. (optional)
  filterOrganizationNameEq: "null",
  // 'created_at' | 'email' | Specifies the sort order for results. By default sorting direction is ascending. To have the results sorted in descending order add the <code> -</code> prefix.<br/><br/> That is: <ul>   <li>     <code>email</code>: sorts the result by the     <code>email</code> field in ascending order.   </li>    <li>     <code>-email</code>: sorts the result by the     <code>email</code> field in descending order.   </li> </ul> <br/> If not given, results are sorted by <code>created_at</code> in descending order. (optional)
  sort: "email",
  // boolean | Specifies if cancelled accounts should be included in the results. (optional)
  includeCancelledAccounts: true,
};

apiInstance.listManagedAccounts(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pageNumber** | [**number**] | The page number to load | (optional) defaults to 1
 **pageSize** | [**number**] | The size of the page | (optional) defaults to 20
 **filterEmailContains** | [**string**] | If present, email containing the given value will be returned. Matching is not case-sensitive. Requires at least three characters. | (optional) defaults to 'null'
 **filterEmailEq** | [**string**] | If present, only returns results with the &lt;code&gt;email&lt;/code&gt; matching exactly the value given. | (optional) defaults to 'null'
 **filterOrganizationNameContains** | [**string**] | If present, only returns results with the &lt;code&gt;organization_name&lt;/code&gt; containing the given value. Matching is not case-sensitive. Requires at least three characters. | (optional) defaults to 'null'
 **filterOrganizationNameEq** | [**string**] | If present, only returns results with the &lt;code&gt;organization_name&lt;/code&gt; matching the exact value given. | (optional) defaults to 'null'
 **sort** | [**&#39;created_at&#39; | &#39;email&#39;**]**Array<&#39;created_at&#39; &#124; &#39;email&#39;>** | Specifies the sort order for results. By default sorting direction is ascending. To have the results sorted in descending order add the &lt;code&gt; -&lt;/code&gt; prefix.&lt;br/&gt;&lt;br/&gt; That is: &lt;ul&gt;   &lt;li&gt;     &lt;code&gt;email&lt;/code&gt;: sorts the result by the     &lt;code&gt;email&lt;/code&gt; field in ascending order.   &lt;/li&gt;    &lt;li&gt;     &lt;code&gt;-email&lt;/code&gt;: sorts the result by the     &lt;code&gt;email&lt;/code&gt; field in descending order.   &lt;/li&gt; &lt;/ul&gt; &lt;br/&gt; If not given, results are sorted by &lt;code&gt;created_at&lt;/code&gt; in descending order. | (optional) defaults to 'created_at'
 **includeCancelledAccounts** | [**boolean**] | Specifies if cancelled accounts should be included in the results. | (optional) defaults to false


### Return type

**ListManagedAccounts200Response**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response with a list of managed accounts. |  -  |
**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **retrieveManagedAccount**
> CreateManagedAccount200Response retrieveManagedAccount()

Retrieves the details of a single managed account.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ManagedAccountsApi(configuration);

let body:.ManagedAccountsApiRetrieveManagedAccountRequest = {
  // string | Managed Account User ID
  id: "id_example",
};

apiInstance.retrieveManagedAccount(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Managed Account User ID | defaults to undefined


### Return type

**CreateManagedAccount200Response**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response with information about a single managed account. |  -  |
**401** | Unauthorized |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateManagedAccount**
> CreateManagedAccount200Response updateManagedAccount(updateManagedAccountRequest)

Update a single managed account.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ManagedAccountsApi(configuration);

let body:.ManagedAccountsApiUpdateManagedAccountRequest = {
  // string | Managed Account User ID
  id: "id_example",
  // UpdateManagedAccountRequest | Parameters that define the updates to the managed account
  updateManagedAccountRequest: null,
};

apiInstance.updateManagedAccount(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateManagedAccountRequest** | **UpdateManagedAccountRequest**| Parameters that define the updates to the managed account |
 **id** | [**string**] | Managed Account User ID | defaults to undefined


### Return type

**CreateManagedAccount200Response**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response with information about a single managed account. |  -  |
**401** | Unauthorized |  -  |
**404** | Resource not found |  -  |
**422** | Unprocessable entity. Check the \&#39;detail\&#39; field in response for details. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


