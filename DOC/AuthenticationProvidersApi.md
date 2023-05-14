# .AuthenticationProvidersApi

All URIs are relative to *https://api.telnyx.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createAuthenticationProvider**](AuthenticationProvidersApi.md#createAuthenticationProvider) | **POST** /authentication_providers | Creates an authentication provider
[**deleteAuthenticationProvider**](AuthenticationProvidersApi.md#deleteAuthenticationProvider) | **DELETE** /authentication_providers/{id} | Deletes an authentication provider
[**findAuthenticationProviders**](AuthenticationProvidersApi.md#findAuthenticationProviders) | **GET** /authentication_providers | List all SSO authentication providers
[**getAuthenticationProvider**](AuthenticationProvidersApi.md#getAuthenticationProvider) | **GET** /authentication_providers/{id} | Retrieve an authentication provider
[**updateAuthenticationProvider**](AuthenticationProvidersApi.md#updateAuthenticationProvider) | **PATCH** /authentication_providers/{id} | Update a authentication provider


# **createAuthenticationProvider**
> CreateAuthenticationProvider200Response createAuthenticationProvider(authenticationProviderCreate)

Creates an authentication provider.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AuthenticationProvidersApi(configuration);

let body:.AuthenticationProvidersApiCreateAuthenticationProviderRequest = {
  // AuthenticationProviderCreate | Parameters that can be defined during authentication provider creation
  authenticationProviderCreate: {
    name: "Okta",
    shortName: "myorg",
    active: true,
    settings: {
      idpEntityId: "https://myorg.myidp.com/saml/metadata",
      idpSsoTargetUrl: "https://myorg.myidp.com/trust/saml2/http-post/sso",
      idpCertFingerprint: "13:38:C7:BB:C9:FF:4A:70:38:3A:E3:D9:5C:CD:DB:2E:50:1E:80:A7",
      idpCertFingerprintAlgorithm: "sha256",
    },
    settingsUrl: "https://myorg.myidp.com/saml/metadata",
  },
};

apiInstance.createAuthenticationProvider(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authenticationProviderCreate** | **AuthenticationProviderCreate**| Parameters that can be defined during authentication provider creation |


### Return type

**CreateAuthenticationProvider200Response**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**422** | Bad request |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteAuthenticationProvider**
> CreateAuthenticationProvider200Response deleteAuthenticationProvider()

Deletes an existing authentication provider.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AuthenticationProvidersApi(configuration);

let body:.AuthenticationProvidersApiDeleteAuthenticationProviderRequest = {
  // string | authentication provider ID
  id: "id_example",
};

apiInstance.deleteAuthenticationProvider(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | authentication provider ID | defaults to undefined


### Return type

**CreateAuthenticationProvider200Response**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**401** | Unauthorized |  -  |
**404** | Resource not found |  -  |
**422** | Bad request |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **findAuthenticationProviders**
> FindAuthenticationProviders200Response findAuthenticationProviders()

Returns a list of your SSO authentication providers.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AuthenticationProvidersApi(configuration);

let body:.AuthenticationProvidersApiFindAuthenticationProvidersRequest = {
  // number | The page number to load (optional)
  pageNumber: 1,
  // number | The size of the page (optional)
  pageSize: 20,
  // 'name' | '-name' | 'short_name' | '-short_name' | 'active' | '-active' | 'created_at' | '-created_at' | 'updated_at' | '-updated_at' | Specifies the sort order for results. By default sorting direction is ascending. To have the results sorted in descending order add the <code> -</code> prefix.<br/><br/> That is: <ul>   <li>     <code>name</code>: sorts the result by the     <code>name</code> field in ascending order.   </li>    <li>     <code>-name</code>: sorts the result by the     <code>name</code> field in descending order.   </li> </ul> <br/> If not given, results are sorted by <code>created_at</code> in descending order. (optional)
  sort: "name",
};

apiInstance.findAuthenticationProviders(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pageNumber** | [**number**] | The page number to load | (optional) defaults to 1
 **pageSize** | [**number**] | The size of the page | (optional) defaults to 20
 **sort** | [**&#39;name&#39; | &#39;-name&#39; | &#39;short_name&#39; | &#39;-short_name&#39; | &#39;active&#39; | &#39;-active&#39; | &#39;created_at&#39; | &#39;-created_at&#39; | &#39;updated_at&#39; | &#39;-updated_at&#39;**]**Array<&#39;name&#39; &#124; &#39;-name&#39; &#124; &#39;short_name&#39; &#124; &#39;-short_name&#39; &#124; &#39;active&#39; &#124; &#39;-active&#39; &#124; &#39;created_at&#39; &#124; &#39;-created_at&#39; &#124; &#39;updated_at&#39; &#124; &#39;-updated_at&#39;>** | Specifies the sort order for results. By default sorting direction is ascending. To have the results sorted in descending order add the &lt;code&gt; -&lt;/code&gt; prefix.&lt;br/&gt;&lt;br/&gt; That is: &lt;ul&gt;   &lt;li&gt;     &lt;code&gt;name&lt;/code&gt;: sorts the result by the     &lt;code&gt;name&lt;/code&gt; field in ascending order.   &lt;/li&gt;    &lt;li&gt;     &lt;code&gt;-name&lt;/code&gt;: sorts the result by the     &lt;code&gt;name&lt;/code&gt; field in descending order.   &lt;/li&gt; &lt;/ul&gt; &lt;br/&gt; If not given, results are sorted by &lt;code&gt;created_at&lt;/code&gt; in descending order. | (optional) defaults to '-created_at'


### Return type

**FindAuthenticationProviders200Response**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**400** | Bad request |  -  |
**401** | Unauthorized |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getAuthenticationProvider**
> CreateAuthenticationProvider200Response getAuthenticationProvider()

Retrieves the details of an existing authentication provider.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AuthenticationProvidersApi(configuration);

let body:.AuthenticationProvidersApiGetAuthenticationProviderRequest = {
  // string | authentication provider ID
  id: "id_example",
};

apiInstance.getAuthenticationProvider(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | authentication provider ID | defaults to undefined


### Return type

**CreateAuthenticationProvider200Response**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**401** | Unauthorized |  -  |
**404** | Resource not found |  -  |
**422** | Bad request |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateAuthenticationProvider**
> CreateAuthenticationProvider200Response updateAuthenticationProvider(updateAuthenticationProviderRequest)

Updates settings of an existing authentication provider.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AuthenticationProvidersApi(configuration);

let body:.AuthenticationProvidersApiUpdateAuthenticationProviderRequest = {
  // string | Identifies the resource.
  id: "id_example",
  // UpdateAuthenticationProviderRequest | Parameters that can be updated in a authentication provider
  updateAuthenticationProviderRequest: {
    name: "Okta",
    shortName: "myorg",
    active: true,
    settings: {
      idpEntityId: "https://myorg.myidp.com/saml/metadata",
      idpSsoTargetUrl: "https://myorg.myidp.com/trust/saml2/http-post/sso",
      idpCertFingerprint: "13:38:C7:BB:C9:FF:4A:70:38:3A:E3:D9:5C:CD:DB:2E:50:1E:80:A7",
      idpCertFingerprintAlgorithm: "sha256",
    },
    settingsUrl: "https://myorg.myidp.com/saml/metadata",
  },
};

apiInstance.updateAuthenticationProvider(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateAuthenticationProviderRequest** | **UpdateAuthenticationProviderRequest**| Parameters that can be updated in a authentication provider |
 **id** | [**string**] | Identifies the resource. | defaults to undefined


### Return type

**CreateAuthenticationProvider200Response**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**401** | Unauthorized |  -  |
**404** | Resource not found |  -  |
**422** | Bad request |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


